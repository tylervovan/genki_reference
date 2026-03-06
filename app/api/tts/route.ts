/**
 * =============================================================================
 * TEXT-TO-SPEECH API ROUTE
 * =============================================================================
 *
 * PURPOSE: Server-side endpoint for Japanese text-to-speech synthesis.
 *
 * WHAT IT DOES:
 * - Authenticates user via Supabase session
 * - Rate limits requests per user (20 requests/minute)
 * - Validates input text length (max 500 characters)
 * - Checks file-based cache for existing audio
 * - If not cached, calls Google Cloud Text-to-Speech API
 * - Caches the result for future requests
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
 *   - Voice: ja-JP-Neural2-B (Japanese neural voice)
 *   - Format: MP3 audio encoding
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
 * - File-based cache in .tts-cache/ directory
 * - Cache key is SHA-256 hash of text
 * - LRU eviction when cache exceeds size limit (default 100MB)
 * - Entries expire after 30 days by default
 * - Configure via environment variables:
 *   - TTS_CACHE_DIR: Cache directory path
 *   - TTS_MAX_CACHE_SIZE_MB: Max cache size in MB
 *   - TTS_MAX_CACHE_AGE_DAYS: Max entry age in days
 *
 * CONSTRAINTS/GOTCHAS:
 * - Requires GOOGLE_CLOUD_API_KEY environment variable
 * - Requires authenticated user (returns 401 if not logged in)
 * - Google API usage is billed per character (caching reduces costs)
 * - Voice is hardcoded to Japanese Neural2-B
 * - In serverless (Vercel), cache won't persist between cold starts
 * - Rate limit uses Vercel KV in production, in-memory fallback locally
 *
 * DEPENDENCIES:
 * - Uses: Next.js NextResponse for API responses
 * - Uses: Google Cloud Text-to-Speech REST API
 * - Uses: app/utils/tts-cache.ts for caching
 * - Uses: app/lib/supabase/server.ts for authentication
 * - Uses: @vercel/kv for rate limiting (production)
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
import { kv } from '@vercel/kv';

// =============================================================================
// CONFIGURATION
// =============================================================================
const MAX_TEXT_LENGTH = 500; // Maximum characters allowed
const RATE_LIMIT_REQUESTS = 20; // Max requests per window
const RATE_LIMIT_WINDOW_SECONDS = 60; // Window size in seconds

// =============================================================================
// IN-MEMORY RATE LIMITER (Fallback for local development)
// =============================================================================
const inMemoryRateLimits = new Map<string, { count: number; resetAt: number }>();

async function checkRateLimit(userId: string): Promise<{ success: boolean; remaining: number }> {
  const key = `ratelimit:tts:${userId}`;
  const now = Date.now();
  const windowMs = RATE_LIMIT_WINDOW_SECONDS * 1000;

  // Try Vercel KV first (production)
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const currentCount = await kv.incr(key);
      
      // Set expiry on first request in window
      if (currentCount === 1) {
        await kv.expire(key, RATE_LIMIT_WINDOW_SECONDS);
      }
      
      const remaining = Math.max(0, RATE_LIMIT_REQUESTS - currentCount);
      return { success: currentCount <= RATE_LIMIT_REQUESTS, remaining };
    } catch (error) {
      console.error('[TTS Rate Limit] KV error, falling back to in-memory:', error);
    }
  }

  // Fallback: In-memory rate limiting (local development)
  const existing = inMemoryRateLimits.get(key);
  
  if (!existing || now > existing.resetAt) {
    // Start new window
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
    const { text } = await request.json();

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

    const response = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input: { text },
          voice: { languageCode: 'ja-JP', name: 'ja-JP-Standard-B' },
          audioConfig: { audioEncoding: 'MP3' },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Google TTS API Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to synthesize speech' },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    // Store in cache (don't await - let it happen in background)
    setCachedAudio(text, data.audioContent).catch((err) => 
      console.error('[TTS Route] Cache write error:', err)
    );

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

