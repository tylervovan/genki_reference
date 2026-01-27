/**
 * =============================================================================
 * FLASHCARD STUDY COMPONENT
 * =============================================================================
 *
 * PURPOSE: Full-screen study mode for practicing flashcards.
 *
 * WHAT IT DOES:
 * - Shows flip cards: front (Japanese) -> tap -> back (English + reading)
 * - "Got it" / "Review again" buttons for self-assessment
 * - Progress bar showing cards completed
 * - Done screen when all cards reviewed
 *
 * WHY IT EXISTS:
 * Users need a focused study experience to practice their flashcard sets.
 *
 * HOW IT WORKS:
 * - Shuffles cards on start
 * - Shows one card at a time, tap to flip
 * - "Got it" removes card from deck
 * - "Review again" puts card back in deck (shuffled)
 * - Ends when all cards marked "Got it"
 *
 * CONSTRAINTS/GOTCHAS:
 * - No progress persistence - study session is ephemeral
 * - Cards re-shuffle when marked "Review again"
 *
 * DEPENDENCIES:
 * - Uses: FlashcardItem type from FlashcardsView
 * - Used by: components/FlashcardsView.tsx
 *
 * RELATED FILES:
 * - components/FlashcardsView.tsx - Parent component
 * =============================================================================
 */

'use client';

import React, { useState, useMemo } from 'react';
import { FlashcardItem } from './FlashcardsView';

interface FlashcardStudyProps {
  set: { title: string; icon: string; color: string };
  items: FlashcardItem[];
  onClose: () => void;
}

// Shuffle array helper
function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function FlashcardStudy({ set, items, onClose }: FlashcardStudyProps) {
  const totalCards = items.length;
  const [deck, setDeck] = useState(() => shuffle(items));
  const [flipped, setFlipped] = useState(false);
  const [completed, setCompleted] = useState(0);

  const currentCard = deck[0];
  const isFinished = deck.length === 0;

  const handleGotIt = () => {
    setDeck(prev => prev.slice(1));
    setCompleted(prev => prev + 1);
    setFlipped(false);
  };

  const handleReviewAgain = () => {
    // Move current card to a random position later in the deck
    setDeck(prev => {
      const [current, ...rest] = prev;
      if (rest.length === 0) return [current];
      const insertAt = Math.floor(Math.random() * rest.length) + 1;
      const newDeck = [...rest];
      newDeck.splice(insertAt, 0, current);
      return newDeck;
    });
    setFlipped(false);
  };

  const handleRestart = () => {
    setDeck(shuffle(items));
    setCompleted(0);
    setFlipped(false);
  };

  const progress = totalCards > 0 ? (completed / totalCards) * 100 : 0;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900 flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 px-4 py-4 border-b border-slate-800">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{set.icon}</span>
            <div>
              <h1 className="font-semibold text-slate-200">{set.title}</h1>
              <p className="text-xs text-slate-400">
                {completed} of {totalCards} completed
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        <div className="max-w-2xl mx-auto mt-3">
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Card Area */}
      <div className="flex-1 flex items-center justify-center p-4">
        {isFinished ? (
          /* Done Screen */
          <div className="text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-2xl font-bold text-slate-100 mb-2">All done!</h2>
            <p className="text-slate-400 mb-8">
              You reviewed all {totalCards} cards.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 transition-all"
              >
                Study Again
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-all"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Flashcard */
          <div className="w-full max-w-lg">
            <div
              onClick={() => setFlipped(!flipped)}
              className="relative cursor-pointer select-none"
              style={{ perspective: '1000px' }}
            >
              <div
                className={`
                  relative w-full min-h-[300px] rounded-2xl border-2 p-8
                  transition-transform duration-500 preserve-3d
                  ${flipped ? 'rotate-y-180' : ''}
                `}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 rounded-2xl border-2 bg-slate-800"
                  style={{
                    backfaceVisibility: 'hidden',
                    borderColor: set.color,
                  }}
                >
                  <p className="text-4xl sm:text-5xl font-bold text-slate-100 text-center mb-4">
                    {currentCard.front_text}
                  </p>
                  <p className="text-sm text-slate-500">Tap to reveal</p>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 rounded-2xl border-2 bg-slate-800"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    borderColor: set.color,
                  }}
                >
                  <p className="text-2xl sm:text-3xl font-bold text-slate-100 text-center mb-3">
                    {currentCard.back_text}
                  </p>
                  {currentCard.reading && (
                    <p className="text-lg text-slate-400 text-center mb-4">
                      {currentCard.reading}
                    </p>
                  )}
                  {currentCard.example_japanese && (
                    <div className="mt-4 pt-4 border-t border-slate-700 w-full text-center">
                      <p className="text-sm text-slate-300">{currentCard.example_japanese}</p>
                      {currentCard.example_reading && (
                        <p className="text-xs text-slate-500 mt-1">{currentCard.example_reading}</p>
                      )}
                      {currentCard.example_translation && (
                        <p className="text-xs text-slate-400 mt-1">{currentCard.example_translation}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Buttons - only show when flipped */}
            {flipped && (
              <div className="flex gap-4 mt-6 justify-center">
                <button
                  onClick={handleReviewAgain}
                  className="flex-1 max-w-[160px] py-4 px-6 rounded-xl font-semibold text-red-300 bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 transition-colors"
                >
                  Review Again
                </button>
                <button
                  onClick={handleGotIt}
                  className="flex-1 max-w-[160px] py-4 px-6 rounded-xl font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
                >
                  Got It!
                </button>
              </div>
            )}

            {/* Remaining cards info */}
            <p className="text-center text-sm text-slate-500 mt-6">
              {deck.length} card{deck.length !== 1 ? 's' : ''} remaining
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

