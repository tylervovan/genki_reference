'use client';

import React from 'react';
import { useAudioPlayer } from '@/app/hooks/useAudioPlayer';

interface SpeakerButtonProps {
  text: string;
  className?: string;
}

export default function SpeakerButton({ text, className = '' }: SpeakerButtonProps) {
  const { play, isPlaying, isLoading, error } = useAudioPlayer();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    play(text);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading || isPlaying}
      className={`p-1.5 rounded-full transition-colors ${
        isPlaying 
          ? 'text-emerald-300 bg-emerald-900/50' 
          : isLoading
            ? 'text-indigo-300 bg-indigo-900/50'
            : error
              ? 'text-red-300 hover:bg-red-900/50'
              : 'text-slate-300 hover:text-indigo-300 hover:bg-slate-700'
      } ${className}`}
      title={error || (isPlaying ? 'Playing...' : 'Listen')}
      aria-label={isPlaying ? 'Playing pronunciation' : `Listen to pronunciation for ${text}`}
    >
      {isLoading ? (
        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  );
}
