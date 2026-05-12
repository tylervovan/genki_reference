/**
 * =============================================================================
 * APP SHELL COMPONENT
 * =============================================================================
 *
 * PURPOSE: Top-level client component that manages application navigation and views.
 *
 * WHAT IT DOES:
 * - Renders tab navigation between Reference and Flashcards views
 * - Manages active tab state
 * - Conditionally renders the appropriate view based on active tab
 * - Provides consistent layout wrapper for all views
 * - Displays user authentication UI (sign in / user menu)
 *
 * WHY IT EXISTS:
 * The main page.tsx is a Server Component. This client component handles
 * the interactive tab switching while keeping the server component minimal.
 *
 * HOW IT WORKS:
 * - Receives topics data from parent Server Component
 * - Maintains tab state in useState
 * - Renders TabNavigation and active view content
 * - Both views receive the same topics data
 *
 * CONSTRAINTS/GOTCHAS:
 * - Tab state resets on page navigation (client-side only)
 * - StudyView has complex progressive rendering - don't remove it
 * - FlashcardsView selections reset when switching tabs
 *
 * DEPENDENCIES:
 * - Uses: Topic from app/data/types.ts
 * - Uses: TabNavigation, StudyView, FlashcardsView, UserMenu components
 * - Used by: app/page.tsx
 *
 * RELATED FILES:
 * - app/page.tsx - Parent Server Component
 * - components/TabNavigation.tsx - Tab buttons
 * - components/StudyView.tsx - Reference view
 * - components/FlashcardsView.tsx - Flashcard creation view
 * - components/UserMenu.tsx - User authentication menu
 * =============================================================================
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Topic } from '@/app/data/types';
import StudyView from './StudyView';
import FlashcardsView from './FlashcardsView';
import UserMenu from './UserMenu';
import { GenkiMark, GenkiWordmark } from './GenkiMark';
import GithubStars from './GithubStars';

type ViewMode = 'reference' | 'flashcards';

interface AppShellProps {
  topics: Topic[];
  githubHref?: string;
  githubStars?: number | null;
}

export default function AppShell({ topics, githubHref, githubStars = null }: AppShellProps) {
  const [mode, setMode] = useState<ViewMode>('reference');

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        {/* Two-region header:
            - Left brand sits in the sidebar's gutter (lg:w-64, matching Sidebar's
              w-64 and its p-6 padding so the logo aligns with "GenkiRef" below).
            - Right region mirrors StudyView's `max-w-7xl mx-auto` so the Sign In
              button lines up with the rightmost card column. */}
        <div className="flex items-center h-14">
          <div className="flex-shrink-0 lg:w-64 px-4 sm:px-6 lg:pl-6 lg:pr-0">
            {/* 元気 Stamp brand mark + wordmark */}
            <Link href="/" aria-label="Genki Reference" className="inline-flex items-center gap-2.5 group">
              <GenkiMark size={32} />
              <h1 className="text-xl text-white leading-none">
                <GenkiWordmark />
              </h1>
            </Link>
          </div>
          <div className="flex-1 min-w-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end gap-3">
            {/* Mode Switch + User Menu */}
            <div className="flex items-center gap-3">
              {/* Mode Toggle */}
              <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
                <button
                  onClick={() => setMode('reference')}
                  title="Reference - Browse vocabulary, grammar, and kanji"
                  aria-label="Reference mode"
                  className={`group relative flex items-center gap-1.5 px-2 sm:px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                    mode === 'reference'
                      ? 'bg-indigo-500 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>📖</span>
                  <span className="sm:hidden text-[10px]">Ref</span>
                  {/* Desktop tooltip */}
                  <span className="hidden sm:block absolute -bottom-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-700 text-slate-200 text-[10px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-600 shadow-lg">
                    Reference
                  </span>
                </button>
                <button
                  onClick={() => setMode('flashcards')}
                  title="Flashcards - Create and study flashcard sets"
                  aria-label="Flashcards mode"
                  className={`group relative flex items-center gap-1.5 px-2 sm:px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                    mode === 'flashcards'
                      ? 'bg-indigo-500 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>🎴</span>
                  <span className="sm:hidden text-[10px]">Cards</span>
                  {/* Desktop tooltip */}
                  <span className="hidden sm:block absolute -bottom-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-700 text-slate-200 text-[10px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-600 shadow-lg">
                    Flashcards
                  </span>
                </button>
              </div>

              {githubHref && (
                <GithubStars href={githubHref} count={githubStars} />
              )}
              <UserMenu />
            </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-14">
        {mode === 'reference' ? (
          <StudyView topics={topics} />
        ) : (
          <FlashcardsView topics={topics} />
        )}
      </main>
    </div>
  );
}

