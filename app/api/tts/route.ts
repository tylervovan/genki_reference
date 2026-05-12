/**
 * =============================================================================
 * TEXT-TO-SPEECH API ROUTE
 * =============================================================================
 *
 * PURPOSE: Server-side endpoint for Japanese text-to-speech synthesis.
 *
 * WHAT IT DOES:
 * - Authenticates user via Supabase session
 * - Rate limits requests per user (20 requests/minute, Cloudflare KV)
 * - Validates input text length (max 500 characters)
 * - Checks Cloudflare KV cache for existing audio
 * - If not cached, calls Google Cloud Text-to-Speech API
 * - Caches the result for future requests (via ctx.waitUntil)
 * - Returns base64-encoded MP3 audio
 *
 * WHY IT EXISTS:
 * TTS API calls require API key which must stay server-side for security.
 * This Next.js API route acts as a proxy to Google Cloud TTS.
 *
 * HOW IT WORKS:
 * - Verifies user is authenticated via Supabase
 * - Checks rate limit (20 requests per minute per user)
 * - Validates text exists and is within length limit
 * - Checks cache for existing audio (returns immediately if found)
 * - If not cached, sends request to Google TTS with:
 *   - Voice: ja-JP-Standard-B (Japanese standard voice — free tier)
 *   - Format: MP3 audio encoding
 *   - API key sent via X-Goog-Api-Key header (not URL) to avoid log leakage
 * - Stores result in cache for future requests
 * - Returns { audioContent: base64_string, cached: boolean } on success
 *
 * SECURITY:
 * - Requires authenticated Supabase session
 * - Rate limited: 20 requests per minute per user
 * - Input validation: max 500 characters
 * - Protects against cost abuse and DDoS
 *
 * CACHING:
 * - Cloudflare KV (binding GENKI_TTS_CACHE) via app/utils/tts-cache.ts
 * - Cache key is "tts:" + SHA-256(text)
 * - TTL defaults to 30 days (configurable via TTS_CACHE_TTL_DAYS)
 *
 * CONSTRAINTS/GOTCHAS:
 * - Requires GOOGLE_CLOUD_API_KEY (wrangler secret in prod, env locally)
 * - Requires authenticated user (returns 401 if not logged in)
 * - Google API usage is billed per character (caching reduces costs)
 * - Voice is hardcoded to ja-JP-Standard-B
 * - Rate limit uses Cloudflare KV (binding GENKI_RATELIMIT) with an
 *   in-memory fallback only for non-Workers dev sessions
 *
 * DEPENDENCIES:
 * - Uses: Next.js NextResponse for API responses
 * - Uses: Google Cloud Text-to-Speech REST API
 * - Uses: app/utils/tts-cache.ts for caching (Cloudflare KV)
 * - Uses: app/lib/supabase/server.ts for authentication
 * - Uses: Cloudflare KV (GENKI_RATELIMIT binding) for rate limiting
 * - Environment: GOOGLE_CLOUD_API_KEY
 * - Called by: app/hooks/useAudioPlayer.ts
 *
 * RELATED FILES:
 * - app/hooks/useAudioPlayer.ts - Client hook that calls this endpoint
 * - app/components/SpeakerButton.tsx - UI that triggers playback
 * - app/utils/tts-cache.ts - Cache utility
 * - app/lib/supabase/server.ts - Auth client
 * =============================================================================
 */

import { NextResponse } from 'next/server';
import { getCachedAudio, setCachedAudio } from '@/app/utils/tts-cache';
import { createClient } from '@/app/lib/supabase/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

// =============================================================================
// CONFIGURATION
// =============================================================================
const MAX_TEXT_LENGTH = 500; // Maximum characters allowed
const RATE_LIMIT_REQUESTS = 20; // Max requests per window
const RATE_LIMIT_WINDOW_SECONDS = 60; // Window size in seconds

// =============================================================================
// RATE LIMITER (Cloudflare KV)
// =============================================================================
// Fixed-window rate limit anchored to the timestamp inside the KV value.
// Cloudflare KV's expirationTtl is reset on every put, so we cannot rely on
// the entry's expiry to bound the window. Instead we embed the windowStart
// into the value and decide locally whether the current request belongs to
// the existing window or starts a new one. KV TTL is set to the window
// length on every put to keep entries from accumulating indefinitely; the
// authoritative window boundary lives in windowStart.
//
// In-memory map is only hit when no Workers binding is available (e.g. plain
// `next dev`). In a Workers isolate it would persist across requests for the
// life of the isolate, but the KV path always runs first in production.
const inMemoryRateLimits = new Map<string, { count: number; resetAt: number }>();

type RateLimitEntry = { count: number; windowStart: number };

function getRateLimitKV(): KVNamespace | null {
  try {
    return getCloudflareContext().env.GENKI_RATELIMIT ?? null;
  } catch {
    return null;
  }
}

async function checkRateLimit(userId: string): Promise<{ success: boolean; remaining: number }> {
  const key = `ratelimit:tts:${userId}`;
  const kv = getRateLimitKV();
  const windowMs = RATE_LIMIT_WINDOW_SECONDS * 1000;
  const now = Date.now();

  if (kv) {
    try {
      let count = 0;
      let windowStart = now;
      const raw = await kv.get(key);
      if (raw) {
        try {
          const parsed = JSON.parse(raw) as RateLimitEntry;
          if (now - parsed.windowStart < windowMs) {
            count = parsed.count;
            windowStart = parsed.windowStart;
          }
        } catch {
          // Corrupt entry — start a fresh window.
        }
      }
      count += 1;
      await kv.put(
        key,
        JSON.stringify({ count, windowStart } satisfies RateLimitEntry),
        { expirationTtl: RATE_LIMIT_WINDOW_SECONDS }
      );
      const remaining = Math.max(0, RATE_LIMIT_REQUESTS - count);
      return { success: count <= RATE_LIMIT_REQUESTS, remaining };
    } catch (error) {
      // Fail closed: under KV degradation we'd rather rate-limit a legitimate
      // user (returning 429) than silently disable the limiter and let an
      // attacker spam the upstream TTS API.
      console.error('[TTS Rate Limit] KV error — failing closed:', error);
      return { success: false, remaining: 0 };
    }
  }

  // In-memory fallback (only reached when no Workers context — e.g. plain `next dev`).
  const existing = inMemoryRateLimits.get(key);
  if (!existing || now > existing.resetAt) {
    inMemoryRateLimits.set(key, { count: 1, resetAt: now + windowMs });
    return { success: true, remaining: RATE_LIMIT_REQUESTS - 1 };
  }
  existing.count++;
  const remaining = Math.max(0, RATE_LIMIT_REQUESTS - existing.count);
  return { success: existing.count <= RATE_LIMIT_REQUESTS, remaining };
}

// =============================================================================
// API ROUTE HANDLER
// =============================================================================
export async function POST(request: Request) {
  try {
    // -------------------------------------------------------------------------
    // 1. AUTHENTICATION CHECK
    // -------------------------------------------------------------------------
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // -------------------------------------------------------------------------
    // 2. RATE LIMITING
    // -------------------------------------------------------------------------
    const { success: withinLimit, remaining } = await checkRateLimit(user.id);
    
    if (!withinLimit) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { 
          status: 429,
          headers: {
            'Retry-After': String(RATE_LIMIT_WINDOW_SECONDS),
            'X-RateLimit-Limit': String(RATE_LIMIT_REQUESTS),
            'X-RateLimit-Remaining': '0',
          }
        }
      );
    }

    // -------------------------------------------------------------------------
    // 3. INPUT VALIDATION
    // -------------------------------------------------------------------------
    const body = (await request.json()) as { text?: unknown };
    const text = body.text;

    if (!text) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    if (typeof text !== 'string') {
      return NextResponse.json(
        { error: 'Text must be a string' },
        { status: 400 }
      );
    }

    if (text.length > MAX_TEXT_LENGTH) {
      return NextResponse.json(
        { error: `Text too long. Maximum ${MAX_TEXT_LENGTH} characters allowed.` },
        { status: 400 }
      );
    }

    // -------------------------------------------------------------------------
    // 4. CHECK CACHE
    // -------------------------------------------------------------------------
    const cachedAudio = await getCachedAudio(text);
    if (cachedAudio) {
      return NextResponse.json(
        { audioContent: cachedAudio, cached: true },
        { headers: { 'X-RateLimit-Remaining': String(remaining) } }
      );
    }

    // -------------------------------------------------------------------------
    // 5. CALL GOOGLE TTS API
    // -------------------------------------------------------------------------
    const apiKey = process.env.GOOGLE_CLOUD_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Google Cloud API key not configured' },
        { status: 500 }
      );
    }

    // Send the API key via header rather than `?key=<value>` so it doesn't
    // appear in request-URL captures (Workers Logpush, Sentry trace spans, etc.).
    const response = await fetch(
      'https://texttospeech.googleapis.com/v1/text:synthesize',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': apiKey,
        },
        body: JSON.stringify({
          input: { text },
          voice: { languageCode: 'ja-JP', name: 'ja-JP-Standard-B' },
          audioConfig: { audioEncoding: 'MP3' },
        }),
      }
    );

    if (!response.ok) {
      const errorData = (await response.json()) as { error?: { message?: string; status?: string } };
      console.error('Google TTS API Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to synthesize speech' },
        { status: response.status }
      );
    }

    const data = (await response.json()) as { audioContent: string };

    // Cache write outlives the response. ctx.waitUntil keeps the isolate
    // alive until the KV put completes, avoiding a Workers floating-promise
    // anti-pattern. Falls back to a fire-and-forget catch if ctx is absent
    // (e.g. inside `next dev` without bindings).
    const cacheWrite = setCachedAudio(text, data.audioContent).catch((err) =>
      console.error('[TTS Route] Cache write error:', err)
    );
    try {
      getCloudflareContext().ctx.waitUntil(cacheWrite);
    } catch {
      // No Workers ctx (local Node dev) — the promise will still run, just
      // without lifecycle pinning.
      void cacheWrite;
    }

    return NextResponse.json(
      { audioContent: data.audioContent, cached: false },
      { headers: { 'X-RateLimit-Remaining': String(remaining) } }
    );
  } catch (error) {
    console.error('TTS Route Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

