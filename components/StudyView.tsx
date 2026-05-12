'use client';

/**
 * =============================================================================
 * ARCHITECTURE NOTE: Progressive Rendering System
 * =============================================================================
 * 
 * This component uses phased rendering to prevent a critical bug:
 * `RangeError: Maximum call stack size exceeded` on mobile devices (especially iOS)
 * 
 * The bug occurred when:
 * - User navigates with hash anchor (e.g., /#l1-grammar)
 * - Browser attempts native hash scroll during initial render
 * - Thousands of cards in CSS columns cause infinite layout recursion
 * 
 * SOLUTION:
 * 1. Suppress element IDs until render is complete (idsEnabled pattern)
 * 2. Render content progressively in phases: initial → skeleton → content → complete
 * 3. Manually handle hash navigation after content stabilizes
 * 4. Use requestIdleCallback to render when browser is idle
 * 
 * KEY CONSTRAINTS:
 * - Element IDs only exist when `idsEnabled === true` (renderPhase === 'complete')
 * - Browser native hash scroll is disabled via history.scrollRestoration
 * - Hash is removed from URL immediately, restored after we control scrolling
 * 
 * WHEN MODIFYING THIS FILE:
 * - Understand the render phases before making changes
 * - New anchor-linked elements must use: id={idsEnabled ? elementId : undefined}
 * - Test with: http://localhost:3000/#l1-grammar
 * 
 * See: .cursorrules for full documentation
 * =============================================================================
 */

import React, { useState, useMemo, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Topic } from '@/app/data/types';
import FilterBar from '@/components/FilterBar';
import RefCard from '@/components/RefCard';
import Sidebar from '@/components/Sidebar';
import { ContentType, getCardType } from '@/app/utils/content';

interface StudyViewProps {
  topics: Topic[];
}

// Rendering phases for progressive loading
type RenderPhase = 'initial' | 'skeleton' | 'content' | 'complete';

// Helper to schedule work when browser is idle
const scheduleWhenIdle = (callback: () => void, timeout = 500): number => {
  if (typeof window === 'undefined') return 0;
  
  // Check for requestIdleCallback support
  const win = window as Window & { requestIdleCallback?: (cb: IdleRequestCallback, opts?: IdleRequestOptions) => number };
  if (win.requestIdleCallback) {
    return win.requestIdleCallback(callback, { timeout });
  }
  // Fallback for browsers without requestIdleCallback (e.g., Safari)
  return window.setTimeout(callback, 100);
};

const cancelIdleSchedule = (id: number): void => {
  if (typeof window === 'undefined') return;
  
  const win = window as Window & { cancelIdleCallback?: (handle: number) => void };
  if (win.cancelIdleCallback) {
    win.cancelIdleCallback(id);
  } else {
    window.clearTimeout(id);
  }
};

export default function StudyView({ topics }: StudyViewProps) {
  const [activeFilters, setActiveFilters] = useState<ContentType[]>([]);
  
  // Progressive rendering state to prevent stack overflow from rendering
  // thousands of elements at once with complex CSS columns layout
  const [renderPhase, setRenderPhase] = useState<RenderPhase>('initial');
  
  // Track which topics have been rendered (for progressive loading)
  const [renderedTopicCount, setRenderedTopicCount] = useState(0);
  
  const scrollAttemptRef = useRef(0);
  const initialHashRef = useRef<string | null>(null);
  const maxScrollAttempts = 15;

  // Handle hash navigation after layout is complete
  const scrollToHash = useCallback((hash: string) => {
    const targetId = hash.replace('#', '');
    if (!targetId) return;

    const attemptScroll = () => {
      const element = document.getElementById(targetId);
      if (element) {
        // Use requestIdleCallback to scroll when browser is not busy
        scheduleWhenIdle(() => {
          // Double-check element still exists
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
        scrollAttemptRef.current = 0;
      } else if (scrollAttemptRef.current < maxScrollAttempts) {
        // Element not found yet, retry after a short delay
        scrollAttemptRef.current++;
        setTimeout(attemptScroll, 200);
      } else {
        // Give up after max attempts
        scrollAttemptRef.current = 0;
      }
    };

    attemptScroll();
  }, []);

  // Use useLayoutEffect to run synchronously BEFORE paint
  // This is critical to prevent the browser from ever attempting native hash scroll
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. Disable browser's automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // 2. Capture and IMMEDIATELY REMOVE the hash from URL
    // This completely prevents the browser from attempting native hash navigation
    const currentHash = window.location.hash;
    if (currentHash) {
      initialHashRef.current = currentHash;
      // Remove hash from URL without triggering navigation or adding to history
      const urlWithoutHash = window.location.pathname + window.location.search;
      history.replaceState(null, '', urlWithoutHash);
    }

    // 3. Force scroll to top to prevent any partial scroll attempts
    window.scrollTo(0, 0);

    return () => {
      // Restore default scroll behavior on unmount
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    };
  }, []);

  // Progressive rendering: Phase 1 -> Show skeleton immediately
  useEffect(() => {
    // Move to skeleton phase on next tick to let initial render complete
    const timer = requestAnimationFrame(() => {
      setRenderPhase('skeleton');
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  // Progressive rendering: Phase 2 -> Start rendering content after skeleton is shown
  useEffect(() => {
    if (renderPhase !== 'skeleton') return;
    
    // Wait for skeleton to be painted before starting heavy content render
    const timer = setTimeout(() => {
      setRenderPhase('content');
      setRenderedTopicCount(1); // Start with first topic
    }, 50);
    
    return () => clearTimeout(timer);
  }, [renderPhase]);

  // Progressive rendering: Phase 3 -> Render topics one at a time
  useEffect(() => {
    if (renderPhase !== 'content') return;
    
    // Calculate filtered count directly to ensure correct dependency tracking
    const filteredCount = activeFilters.length === 0 
      ? topics.length 
      : topics.filter(topic => 
          topic.cards.some(card => activeFilters.includes(getCardType(card) as ContentType))
        ).length;
    
    if (renderedTopicCount < filteredCount) {
      // Render next topic when browser is idle
      const idleId = scheduleWhenIdle(() => {
        setRenderedTopicCount(prev => Math.min(prev + 2, filteredCount)); // Render 2 at a time
      }, 100);
      
      return () => cancelIdleSchedule(idleId);
    } else {
      // All topics rendered, move to complete phase
      setRenderPhase('complete');
    }
  }, [renderPhase, renderedTopicCount, topics, activeFilters]);

  // Handle initial hash navigation after rendering is complete
  useEffect(() => {
    if (renderPhase !== 'complete') return;

    const hash = initialHashRef.current;
    if (hash) {
      // Clear the ref so we don't scroll again on re-renders
      initialHashRef.current = null;

      // Restore the hash to the URL now that we've taken control of scrolling
      const targetId = hash.replace('#', '');
      if (targetId) {
        history.replaceState(null, '', hash);
      }

      // Use requestIdleCallback to wait until browser is idle before scrolling
      // This prevents triggering scroll during heavy layout work
      const idleId = scheduleWhenIdle(() => {
        scrollToHash(hash);
      }, 300);

      return () => cancelIdleSchedule(idleId);
    }
  }, [renderPhase, scrollToHash]);

  // Handle hash changes during navigation (not initial load)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && renderPhase === 'complete') {
        scrollToHash(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [scrollToHash, renderPhase]);

  const handleToggleFilter = (type: ContentType) => {
    setActiveFilters((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const filteredTopics = useMemo(() => {
    if (activeFilters.length === 0) {
      return topics;
    }

    return topics
      .map((topic) => ({
        ...topic,
        cards: topic.cards.filter((card) =>
          activeFilters.includes(getCardType(card) as ContentType)
        ),
      }))
      .filter((topic) => topic.cards.length > 0);
  }, [topics, activeFilters]);

  // Topics to render based on progressive loading state
  const topicsToRender = useMemo(() => {
    if (renderPhase === 'initial' || renderPhase === 'skeleton') {
      return []; // Don't render any topics during initial/skeleton phase
    }
    if (renderPhase === 'content') {
      return filteredTopics.slice(0, renderedTopicCount);
    }
    return filteredTopics; // 'complete' phase - render all
  }, [filteredTopics, renderPhase, renderedTopicCount]);

  // Check if only grammar is filtered
  const isGrammarOnly = activeFilters.length === 1 && activeFilters[0] === 'grammar';
  
  // Only enable IDs after rendering is complete to prevent native hash scrolling
  const idsEnabled = renderPhase === 'complete';

  return (
    <div className="text-slate-200 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      <Sidebar topics={filteredTopics} />

      <main className="lg:pl-64">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8 lg:mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-100">
              Reference
            </h2>
            <p className="mt-2 text-sm lg:text-base text-slate-400">
              Quick reference for Genki I (3rd Edition) grammar, vocabulary, and kanji.
            </p>
          </div>

          <FilterBar activeFilters={activeFilters} onToggle={handleToggleFilter} />

          <div className="space-y-16">
            {/* Loading skeleton during initial render phases */}
            {(renderPhase === 'initial' || renderPhase === 'skeleton') && (
              <div className="animate-pulse space-y-16">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-4">
                    <div className="h-8 bg-slate-800 rounded w-48"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      {[1, 2, 3].map((j) => (
                        <div key={j} className="h-32 bg-slate-800 rounded-lg"></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Progressive content rendering */}
            {topicsToRender.map((topic) => (
              <section 
                key={topic.id} 
                id={idsEnabled ? topic.id : undefined} 
                className="scroll-mt-12 topic-section"
              >
                <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center">
                  <span className="bg-indigo-500 w-2 h-8 mr-3 rounded-sm"></span>
                  {topic.title}
                </h3>

                <div className={isGrammarOnly 
                  ? "columns-1 md:columns-2 gap-6 space-y-6" 
                  : "columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6"
                }>
                  {topic.cards.map((card) => (
                    <div 
                      key={card.id} 
                      id={idsEnabled ? card.id : undefined} 
                      className="break-inside-avoid-column"
                    >
                      <RefCard card={card} />
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* Loading indicator while progressively rendering */}
            {renderPhase === 'content' && renderedTopicCount < filteredTopics.length && (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
              </div>
            )}

            {filteredTopics.length === 0 && renderPhase === 'complete' && (
              <div className="text-center py-20 text-slate-300">
                <p>No items match the selected filters.</p>
                <button 
                  onClick={() => setActiveFilters([])}
                  className="mt-4 text-indigo-300 hover:text-indigo-200 underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          <footer className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-300 text-sm space-y-2">
            <p>Based on Genki: An Integrated Course in Elementary Japanese.</p>
            <p className="text-slate-400">
              <Link href="/privacy" className="hover:text-slate-200 underline-offset-2 hover:underline">
                Privacy
              </Link>
              <span className="mx-2 text-slate-600">·</span>
              <Link href="/terms" className="hover:text-slate-200 underline-offset-2 hover:underline">
                Terms
              </Link>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}

