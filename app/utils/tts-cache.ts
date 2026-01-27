/**
 * =============================================================================
 * TTS AUDIO CACHE UTILITY
 * =============================================================================
 *
 * PURPOSE: Caching for Text-to-Speech audio to reduce API costs and improve
 * response times.
 *
 * WHAT IT DOES:
 * - Caches TTS audio responses using Vercel KV (production) or filesystem (local)
 * - Uses text hash as cache key for fast lookups
 * - Automatically expires old entries (30 days default)
 * - Provides cache hit/miss statistics
 *
 * WHY IT EXISTS:
 * Each Google Cloud TTS request is billed per character. For a study tool
 * where users repeatedly hear the same vocabulary, caching eliminates
 * redundant API calls, saving money and reducing latency.
 *
 * HOW IT WORKS:
 * - Production (Vercel): Uses Vercel KV (Redis) for persistent, fast caching
 * - Local development: Falls back to file-based cache in .tts-cache/
 * - Text is hashed using SHA-256 to create a unique cache key
 * - Vercel KV handles TTL expiration automatically
 *
 * CONSTRAINTS/GOTCHAS:
 * - Requires Vercel KV to be set up in Vercel dashboard for production
 * - KV_REST_API_URL and KV_REST_API_TOKEN env vars are set automatically by Vercel
 * - Local file cache requires writable directory
 *
 * DEPENDENCIES:
 * - Uses: @vercel/kv (production), Node.js fs/crypto (local fallback)
 * - Called by: app/api/tts/route.ts
 *
 * CONFIGURATION:
 * - TTS_CACHE_TTL_DAYS: Cache entry expiration (default: 30 days)
 * - TTS_CACHE_DIR: Local cache directory (default: .tts-cache)
 * =============================================================================
 */

import crypto from 'crypto';

// Configuration
const CACHE_TTL_DAYS = parseInt(process.env.TTS_CACHE_TTL_DAYS || '30', 10);
const CACHE_TTL_SECONDS = CACHE_TTL_DAYS * 24 * 60 * 60;
const CACHE_PREFIX = 'tts:';

// Detect if Vercel KV is available
const isKVAvailable = !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);

// In-memory stats (resets on server restart)
const stats = {
  hits: 0,
  misses: 0,
};

// Debug logging controlled by env var
const DEBUG_TTS_CACHE = process.env.DEBUG_TTS_CACHE === '1';
const log = (...args: unknown[]) => {
  if (DEBUG_TTS_CACHE) console.log(...args);
};
const logError = (...args: unknown[]) => {
  if (DEBUG_TTS_CACHE) console.error(...args);
};

/**
 * Generate a cache key from text using SHA-256 hash
 */
function getCacheKey(text: string): string {
  const hash = crypto.createHash('sha256').update(text).digest('hex');
  return `${CACHE_PREFIX}${hash}`;
}

// ============================================================================
// VERCEL KV IMPLEMENTATION (Production)
// ============================================================================

async function getKVClient() {
  // Dynamic import to avoid errors when KV is not configured
  const { kv } = await import('@vercel/kv');
  return kv;
}

async function getCachedAudioKV(text: string): Promise<string | null> {
  const key = getCacheKey(text);
  
  try {
    const kv = await getKVClient();
    const audioContent = await kv.get<string>(key);
    
    if (audioContent) {
      stats.hits++;
      log(`[TTS Cache KV] HIT for: "${text.substring(0, 20)}..."`);
      return audioContent;
    }
    
    stats.misses++;
    return null;
  } catch (error) {
    logError('[TTS Cache KV] Read error:', error);
    stats.misses++;
    return null;
  }
}

async function setCachedAudioKV(text: string, audioContent: string): Promise<void> {
  const key = getCacheKey(text);
  
  try {
    const kv = await getKVClient();
    // Set with expiration (EX = seconds)
    await kv.set(key, audioContent, { ex: CACHE_TTL_SECONDS });
    log(`[TTS Cache KV] STORED: "${text.substring(0, 20)}..." (TTL: ${CACHE_TTL_DAYS} days)`);
  } catch (error) {
    logError('[TTS Cache KV] Write error:', error);
    // Don't throw - caching failures shouldn't break TTS functionality
  }
}

// ============================================================================
// FILE-BASED IMPLEMENTATION (Local Development Fallback)
// ============================================================================

import { promises as fs } from 'fs';
import path from 'path';

// Determine cache directory - use /tmp in serverless (Vercel), local dir otherwise
function getLocalCacheDir(): string {
  if (process.env.TTS_CACHE_DIR) {
    return process.env.TTS_CACHE_DIR;
  }
  // Vercel serverless: /var/task is read-only, must use /tmp
  const isServerless = process.env.VERCEL === '1' || process.env.VERCEL_ENV;
  if (isServerless) {
    return '/tmp/.tts-cache';
  }
  return path.join(process.cwd(), '.tts-cache');
}

const LOCAL_CACHE_DIR = getLocalCacheDir();

interface FileCacheEntry {
  audioContent: string;
  createdAt: number;
}

function getFilePath(key: string): string {
  // Remove prefix and use first 2 chars as subdirectory
  const hash = key.replace(CACHE_PREFIX, '');
  const subdir = hash.substring(0, 2);
  return path.join(LOCAL_CACHE_DIR, subdir, `${hash}.json`);
}

async function ensureDir(dirPath: string): Promise<void> {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'EEXIST') {
      throw error;
    }
  }
}

async function getCachedAudioFile(text: string): Promise<string | null> {
  const key = getCacheKey(text);
  const filePath = getFilePath(key);
  
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const entry: FileCacheEntry = JSON.parse(content);
    
    // Check if expired
    const ageMs = Date.now() - entry.createdAt;
    const ttlMs = CACHE_TTL_SECONDS * 1000;
    
    if (ageMs > ttlMs) {
      await fs.unlink(filePath).catch(() => {});
      stats.misses++;
      return null;
    }
    
    stats.hits++;
    log(`[TTS Cache File] HIT for: "${text.substring(0, 20)}..."`);
    return entry.audioContent;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
      logError('[TTS Cache File] Read error:', error);
    }
    stats.misses++;
    return null;
  }
}

async function setCachedAudioFile(text: string, audioContent: string): Promise<void> {
  const key = getCacheKey(text);
  const filePath = getFilePath(key);
  
  try {
    await ensureDir(path.dirname(filePath));
    
    const entry: FileCacheEntry = {
      audioContent,
      createdAt: Date.now(),
    };
    
    await fs.writeFile(filePath, JSON.stringify(entry));
    log(`[TTS Cache File] STORED: "${text.substring(0, 20)}..."`);
  } catch (error) {
    logError('[TTS Cache File] Write error:', error);
  }
}

// ============================================================================
// EXPORTED API (Auto-selects KV or File based on environment)
// ============================================================================

/**
 * Get cached audio content for text, if it exists
 */
export async function getCachedAudio(text: string): Promise<string | null> {
  if (isKVAvailable) {
    return getCachedAudioKV(text);
  }
  return getCachedAudioFile(text);
}

/**
 * Store audio content in cache
 */
export async function setCachedAudio(text: string, audioContent: string): Promise<void> {
  if (isKVAvailable) {
    return setCachedAudioKV(text, audioContent);
  }
  return setCachedAudioFile(text, audioContent);
}

/**
 * Get cache statistics
 */
export function getCacheStats() {
  return { 
    ...stats,
    backend: isKVAvailable ? 'vercel-kv' : 'file',
  };
}

// Log which backend is being used on module load
log(`[TTS Cache] Using ${isKVAvailable ? 'Vercel KV' : 'file-based'} cache`);
