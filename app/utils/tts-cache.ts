/**
 * =============================================================================
 * TTS AUDIO CACHE UTILITY (Cloudflare KV)
 * =============================================================================
 *
 * PURPOSE: Cache TTS audio (base64 MP3) so repeat phrases don't re-bill
 * Google Cloud TTS.
 *
 * Storage: Cloudflare KV namespace bound as GENKI_TTS_CACHE (configured in
 * wrangler.jsonc and accessed via @opennextjs/cloudflare's
 * getCloudflareContext()).
 *
 * Cache key: "tts:" + SHA-256(text). TTL defaults to 30 days, configurable
 * via TTS_CACHE_TTL_DAYS env var.
 *
 * Notes:
 * - KV values can be up to 25 MB; typical Japanese TTS payloads are
 *   ~5-30 KB so we store the base64 string directly.
 * - Misses and write errors are non-fatal: they just fall through to a fresh
 *   TTS API call.
 * =============================================================================
 */

import { getCloudflareContext } from "@opennextjs/cloudflare";

const CACHE_TTL_DAYS = Number(process.env.TTS_CACHE_TTL_DAYS ?? "30");
const CACHE_TTL_SECONDS = CACHE_TTL_DAYS * 24 * 60 * 60;
const CACHE_PREFIX = "tts:";

const DEBUG = process.env.DEBUG_TTS_CACHE === "1";
const log = (...args: unknown[]) => {
  if (DEBUG) console.log(...args);
};
// Per-isolate counter only — Workers reuse isolates unpredictably, so these
// values are approximate and not a reliable cross-fleet metric. Used only
// when DEBUG_TTS_CACHE=1 to gauge cache effectiveness during local dev.
const stats = { hits: 0, misses: 0 };

async function getCacheKey(text: string): Promise<string> {
  const bytes = new TextEncoder().encode(text);
  const hashBuf = await crypto.subtle.digest("SHA-256", bytes);
  const hex = Array.from(new Uint8Array(hashBuf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return `${CACHE_PREFIX}${hex}`;
}

function getKV(): KVNamespace | null {
  try {
    return getCloudflareContext().env.GENKI_TTS_CACHE ?? null;
  } catch {
    // getCloudflareContext throws if called outside a Workers/OpenNext context
    // (e.g. during a Node test). Caller treats null as "no cache".
    return null;
  }
}

export async function getCachedAudio(text: string): Promise<string | null> {
  const kv = getKV();
  if (!kv) {
    stats.misses++;
    return null;
  }
  const key = await getCacheKey(text);
  try {
    const value = await kv.get(key);
    if (value) {
      stats.hits++;
      log(`[TTS Cache] HIT for: "${text.substring(0, 20)}..."`);
      return value;
    }
    stats.misses++;
    return null;
  } catch (error) {
    log("[TTS Cache] Read error:", error);
    stats.misses++;
    return null;
  }
}

export async function setCachedAudio(text: string, audioContent: string): Promise<void> {
  const kv = getKV();
  if (!kv) return;
  const key = await getCacheKey(text);
  try {
    await kv.put(key, audioContent, { expirationTtl: CACHE_TTL_SECONDS });
    log(`[TTS Cache] STORED: "${text.substring(0, 20)}..." (TTL ${CACHE_TTL_DAYS}d)`);
  } catch (error) {
    // KV failures must be visible in Workers tail logs — don't gate on DEBUG.
    console.error("[TTS Cache] Write error:", error);
  }
}

export function getCacheStats() {
  return { ...stats, backend: "cloudflare-kv" as const };
}
