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
        const data = await response.json();
        throw new Error(data.error || 'Failed to fetch audio');
      }

      const data = await response.json();
      
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

