/**
 * =============================================================================
 * QUIZLET EXPORT MODAL
 * =============================================================================
 *
 * PURPOSE: Export flashcard sets in Quizlet's import format.
 *
 * WHAT IT DOES:
 * - Formats cards as: term[TAB]definition (one per line)
 * - Provides one-click copy to clipboard
 *
 * HOW IT WORKS:
 * - Uses Quizlet's default delimiters (Tab between term/definition, Newline between cards)
 * - User copies text and pastes into Quizlet's import page
 *
 * DEPENDENCIES:
 * - Uses: FlashcardItem from FlashcardsView
 * - Used by: components/FlashcardsView.tsx
 * =============================================================================
 */

'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { FlashcardItem } from './FlashcardsView';

interface QuizletExportModalProps {
  items: FlashcardItem[];
  setTitle: string;
  onClose: () => void;
}

export default function QuizletExportModal({
  items,
  setTitle,
  onClose,
}: QuizletExportModalProps) {
  const [copied, setCopied] = useState(false);

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

  // Format for Quizlet: term[TAB]definition, one per line
  const exportText = useMemo(() => {
    return items.map(item => {
      const front = item.front_text || '';
      let back = item.back_text || '';
      if (item.reading) {
        back = `${back} (${item.reading})`;
      }
      return `${front}\t${back}`;
    }).join('\n');
  }, [items]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(exportText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
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
      <div className="relative bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-100">Export to Quizlet</h2>
            <p className="text-sm text-slate-400 mt-0.5">{setTitle} • {items.length} cards</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Instructions */}
          <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4 text-sm text-indigo-300">
            <p className="font-medium mb-2">How to import into Quizlet:</p>
            <ol className="list-decimal list-inside space-y-1 text-indigo-300/80">
              <li>Copy the text below</li>
              <li>Go to Quizlet → Create → Import</li>
              <li>Paste and click Import</li>
            </ol>
          </div>

          {/* Export Text */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-400">{items.length} cards ready to export</span>
              <button
                onClick={handleCopy}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${copied
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                    : 'bg-indigo-500 text-white hover:bg-indigo-400'
                  }
                `}
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>
            <textarea
              readOnly
              value={exportText}
              onClick={(e) => (e.target as HTMLTextAreaElement).select()}
              className="w-full h-48 px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-700 flex items-center justify-between">
          <a
            href="https://quizlet.com/create-set"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
          >
            Open Quizlet
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
