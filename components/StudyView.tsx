'use client';

import React, { useState, useMemo } from 'react';
import { Topic } from '@/app/data/types';
import FilterBar from '@/components/FilterBar';
import RefCard from '@/components/RefCard';
import Sidebar from '@/components/Sidebar';
import { ContentType, getCardType } from '@/app/utils/content';

interface StudyViewProps {
  topics: Topic[];
}

export default function StudyView({ topics }: StudyViewProps) {
  const [activeFilters, setActiveFilters] = useState<ContentType[]>([]);

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

  // Check if only grammar is filtered
  const isGrammarOnly = activeFilters.length === 1 && activeFilters[0] === 'grammar';

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-indigo-500/30">
      <Sidebar topics={filteredTopics} />

      <main className="lg:pl-64">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header for Mobile (Sidebar hidden) */}
          <div className="lg:hidden mb-8">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
              GenkiRef
            </h1>
            <p className="text-slate-300 mt-2">Japanese Grammar & Vocabulary Cheat Sheets</p>
          </div>

          <div className="hidden lg:block mb-12 border-b border-slate-800 pb-8">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
              Reference
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Quick reference for Genki I (3rd Edition) grammar, vocabulary, and kanji.
            </p>
          </div>

          <FilterBar activeFilters={activeFilters} onToggle={handleToggleFilter} />

          <div className="space-y-16">
            {filteredTopics.map((topic) => (
              <section key={topic.id} id={topic.id} className="scroll-mt-12">
                <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center">
                  <span className="bg-indigo-500 w-2 h-8 mr-3 rounded-sm"></span>
                  {topic.title}
                </h3>

                <div className={isGrammarOnly 
                  ? "columns-1 md:columns-2 gap-6 space-y-6" 
                  : "columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6"
                }>
                  {topic.cards.map((card) => (
                    <div key={card.id} id={card.id} className="break-inside-avoid-column">
                      <RefCard card={card} />
                    </div>
                  ))}
                </div>
              </section>
            ))}
            {filteredTopics.length === 0 && (
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

          <footer className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-300 text-sm">
            <p>Based on Genki: An Integrated Course in Elementary Japanese.</p>
          </footer>
        </div>
      </main>
    </div>
  );
}

