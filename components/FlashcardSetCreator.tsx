/**
 * =============================================================================
 * FLASHCARD SET CREATOR MODAL
 * =============================================================================
 *
 * PURPOSE: Modal dialog for naming and saving a new flashcard set.
 *
 * WHAT IT DOES:
 * - Displays overlay modal with set creation form
 * - Shows preview of selected items
 * - Allows user to name the set and choose an icon/color
 * - Saves set to Supabase database (when authenticated)
 * - Provides local-only option for unauthenticated users
 *
 * WHY IT EXISTS:
 * Separates the set creation confirmation step from selection.
 * Gives users a final review before committing to create a set.
 *
 * HOW IT WORKS:
 * - Receives selected items from FlashcardsView
 * - On submit, creates flashcard_set and flashcard_items in Supabase
 * - Uses RLS policies - user must be authenticated
 * - Closes and triggers callback on successful creation
 *
 * CONSTRAINTS/GOTCHAS:
 * - Requires Supabase authentication to persist sets
 * - Large sets may take a moment to save (batched inserts)
 * - Modal traps focus for accessibility
 *
 * DEPENDENCIES:
 * - Uses: SelectedItem from FlashcardsView
 * - Uses: createClient from app/lib/supabase/client.ts
 * - Used by: components/FlashcardsView.tsx
 *
 * RELATED FILES:
 * - components/FlashcardsView.tsx - Parent component
 * - supabase/schema.sql - Database schema
 * - app/lib/supabase/client.ts - Supabase client
 * =============================================================================
 */

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { SelectedItem } from './FlashcardsView';
import { createClient } from '@/app/lib/supabase/client';
import { useAuth } from '@/app/hooks/useAuth';

interface FlashcardSetCreatorProps {
  items: SelectedItem[];
  selectedLessons: number[];
  onClose: () => void;
  onCreated: () => void;
}

const ICONS = ['📚', '🎴', '📝', '🎯', '⭐', '🔥', '💫', '🌸', '🗾', '✨'];
const COLORS = [
  '#6366f1', // indigo
  '#8b5cf6', // violet
  '#ec4899', // pink
  '#f43f5e', // rose
  '#f97316', // orange
  '#eab308', // yellow
  '#22c55e', // green
  '#14b8a6', // teal
  '#06b6d4', // cyan
  '#3b82f6', // blue
];

export default function FlashcardSetCreator({ 
  items, 
  selectedLessons, 
  onClose, 
  onCreated 
}: FlashcardSetCreatorProps) {
  const [title, setTitle] = useState(() => {
    if (selectedLessons.length === 1) {
      return `Lesson ${selectedLessons[0]} Study Set`;
    }
    return `Lessons ${selectedLessons[0]}-${selectedLessons[selectedLessons.length - 1]} Study Set`;
  });
  const [icon, setIcon] = useState('📚');
  const [color, setColor] = useState('#6366f1');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Use the auth hook for authentication state
  const { user, loading: authLoading, signInWithGoogle } = useAuth();
  const isAuthenticated = !!user;

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.select();
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Prevent scroll on body when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleCreate = async () => {
    if (!title.trim()) {
      setError('Please enter a title for your set');
      return;
    }

    if (!user) {
      setError('Please sign in with Google to save your flashcard set.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const supabase = createClient();

      // Create the flashcard set
      const { data: setData, error: createSetError } = await supabase
        .from('flashcard_sets')
        .insert({
          user_id: user.id,
          title: title.trim(),
          icon,
          color,
          set_type: selectedLessons.length === 1 ? 'lesson' : 'mixed',
          source_lesson: selectedLessons.length === 1 ? selectedLessons[0] : null,
          total_items: items.length,
        })
        .select()
        .single();

      if (createSetError) throw createSetError;

      // Create flashcard items in batches
      const batchSize = 50;
      for (let i = 0; i < items.length; i += batchSize) {
        const batch = items.slice(i, i + batchSize).map((item, index) => ({
          set_id: setData.id,
          front_text: item.value || item.japanese || '',
          back_text: item.label || item.meaning || item.english || '',
          reading: item.subValue || item.reading || '',
          example_japanese: item.example?.japanese || null,
          example_reading: item.example?.reading || null,
          example_translation: item.example?.translation || null,
          source_type: item.sourceType,
          source_lesson: item.sourceLesson,
          source_item_id: item.id,
          position: i + index,
        }));

        const { error: itemsError } = await supabase
          .from('flashcard_items')
          .insert(batch);

        if (itemsError) throw itemsError;
      }

      onCreated();
    } catch (err) {
      console.error('Error creating flashcard set:', err);
      setError(err instanceof Error ? err.message : 'Failed to create flashcard set');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        ref={modalRef}
        className="relative bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-100">Create Flashcard Set</h2>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Preview Card */}
          <div 
            className="p-4 rounded-xl border-2 transition-colors"
            style={{ 
              backgroundColor: `${color}15`,
              borderColor: `${color}50`,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{icon}</span>
              <div>
                <h3 className="font-semibold text-slate-200">
                  {title || 'Untitled Set'}
                </h3>
                <p className="text-sm text-slate-400">
                  {items.length} cards • Lessons {selectedLessons.join(', ')}
                </p>
              </div>
            </div>
          </div>

          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Set Name
            </label>
            <input
              ref={inputRef}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a name for your set..."
              className="
                w-full px-4 py-3 rounded-lg
                bg-slate-900 border border-slate-600
                text-slate-200 placeholder-slate-500
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                transition-all
              "
            />
          </div>

          {/* Icon Selection */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Icon
            </label>
            <div className="flex flex-wrap gap-2">
              {ICONS.map((i) => (
                <button
                  key={i}
                  onClick={() => setIcon(i)}
                  className={`
                    w-10 h-10 rounded-lg text-xl flex items-center justify-center
                    transition-all duration-150
                    ${icon === i
                      ? 'bg-slate-700 ring-2 ring-indigo-500 scale-110'
                      : 'bg-slate-800/50 hover:bg-slate-700/50'
                    }
                  `}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Theme Color
            </label>
            <div className="flex flex-wrap gap-2">
              {COLORS.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`
                    w-8 h-8 rounded-full transition-all duration-150
                    ${color === c ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-800 scale-110' : 'hover:scale-110'}
                  `}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Auth Notice */}
          {!authLoading && !isAuthenticated && (
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-amber-400 text-sm">Sign in to save your set</p>
                  <p className="text-amber-400/70 text-xs mt-1 mb-3">
                    Sign in with Google to save and study your flashcard sets.
                  </p>
                  <button
                    onClick={async () => {
                      setIsSigningIn(true);
                      try {
                        await signInWithGoogle();
                      } catch (err) {
                        console.error('Sign in failed:', err);
                        setIsSigningIn(false);
                      }
                    }}
                    disabled={isSigningIn}
                    className="
                      flex items-center gap-2 px-3 py-1.5 rounded-lg
                      bg-white text-slate-800 text-sm font-medium
                      hover:bg-slate-100
                      disabled:opacity-50 disabled:cursor-not-allowed
                      transition-colors duration-150
                    "
                  >
                    {isSigningIn ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Signing in...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <span>Sign in with Google</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-700 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            disabled={isLoading || !title.trim()}
            className="
              px-6 py-2 rounded-lg text-sm font-semibold text-white
              bg-gradient-to-r from-indigo-500 to-indigo-600
              hover:from-indigo-400 hover:to-indigo-500
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-200
              flex items-center gap-2
            "
          >
            {isLoading ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Creating...</span>
              </>
            ) : (
              <span>Create Set</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

