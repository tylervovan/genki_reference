/**
 * =============================================================================
 * USE AUDIO PLAYER HOOK
 * =============================================================================
 *
 * PURPOSE: Manages audio playback state for text-to-speech functionality.
 *
 * WHAT IT DOES:
 * - Fetches audio from TTS API endpoint
 * - Manages loading, playing, and error states
 * - Handles audio element lifecycle (create, play, cleanup)
 * - Stops previous audio when new playback requested
 *
 * WHY IT EXISTS:
 * Encapsulates all TTS audio logic in a reusable hook. Each SpeakerButton
 * instance gets its own hook instance for independent state management.
 *
 * HOW IT WORKS:
 * - play(text) triggers POST to /api/tts with Japanese text
 * - API returns base64-encoded MP3 audio
 * - Creates Audio element from data URI and plays it
 * - Tracks state transitions: idle → loading → playing → idle
 *
 * CONSTRAINTS/GOTCHAS:
 * - Audio ref persists across renders, cleaned up on unmount
 * - Each component instance has its own audio state
 * - Error messages propagate from API or playback failures
 * - Uses base64 data URIs (no file downloads needed)
 *
 * DEPENDENCIES:
 * - Uses: React hooks (useState, useCallback, useRef, useEffect)
 * - Calls: /api/tts endpoint
 * - Used by: app/components/SpeakerButton.tsx
 *
 * RELATED FILES:
 * - app/api/tts/route.ts - TTS API endpoint this hook calls
 * - app/components/SpeakerButton.tsx - UI component using this hook
 * =============================================================================
 */

import { useState, useCallback, useRef, useEffect } from 'react';

interface UseAudioPlayerReturn {
  play: (text: string) => Promise<void>;
  isPlaying: boolean;
  isLoading: boolean;
  error: string | null;
}

export function useAudioPlayer(): UseAudioPlayerReturn {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const play = useCallback(async (text: string) => {
    try {
      // Reset state
      setError(null);
      
      // Stop any currently playing audio
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }

      setIsLoading(true);
      setIsPlaying(false);

      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        const errBody = (await response.json()) as { error?: string };
        // Provide user-friendly error messages
        if (response.status === 401) {
          throw new Error('Please sign in to use audio playback');
        }
        if (response.status === 429) {
          throw new Error('Too many requests. Please wait a moment.');
        }
        throw new Error(errBody.error || 'Failed to fetch audio');
      }

      const data = (await response.json()) as { audioContent?: string };

      if (!data.audioContent) {
        throw new Error('No audio content received');
      }

      // Create audio element from base64
      const audio = new Audio(`data:audio/mp3;base64,${data.audioContent}`);
      audioRef.current = audio;

      audio.onplay = () => {
        setIsPlaying(true);
        setIsLoading(false);
      };

      audio.onended = () => {
        setIsPlaying(false);
        audioRef.current = null;
      };

      audio.onerror = () => {
        setIsPlaying(false);
        setIsLoading(false);
        setError('Error playing audio');
        audioRef.current = null;
      };

      await audio.play();
    } catch (err) {
      console.error('Audio playback error:', err);
      setError(err instanceof Error ? err.message : 'Failed to play audio');
      setIsLoading(false);
      setIsPlaying(false);
    }
  }, []);

  return { play, isPlaying, isLoading, error };
}

