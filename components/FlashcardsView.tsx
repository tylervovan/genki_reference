/**
 * =============================================================================
 * FLASHCARDS VIEW COMPONENT
 * =============================================================================
 *
 * PURPOSE: Displays saved flashcard sets and allows creating new ones.
 *
 * WHAT IT DOES:
 * - Shows "My Sets" grid with user's saved flashcard sets
 * - Provides lesson selection for creating new sets
 * - Opens study mode when user clicks "Study" on a set
 * - Allows deleting saved sets
 *
 * WHY IT EXISTS:
 * Users need a way to view, study, and manage their flashcard sets.
 *
 * HOW IT WORKS:
 * - Fetches user's sets from Supabase on mount
 * - Tracks selected lessons and content types for new set creation
 * - Launches FlashcardStudy component for study mode
 *
 * CONSTRAINTS/GOTCHAS:
 * - Selection state resets when switching tabs
 * - Requires authentication to save/view sets
 *
 * DEPENDENCIES:
 * - Uses: Topic, ContentItem types from app/data/types.ts
 * - Uses: FlashcardSetCreator, FlashcardStudy components
 * - Uses: useAuth hook for user state
 * - Used by: components/AppShell.tsx
 *
 * RELATED FILES:
 * - components/FlashcardSetCreator.tsx - Modal for naming/saving sets
 * - components/FlashcardStudy.tsx - Study mode UI
 * - supabase/schema.sql - Database schema for flashcard_sets
 * =============================================================================
 */

'use client';

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Topic, RefCard, ContentItem, CardContentType } from '@/app/data/types';
import FlashcardSetCreator from './FlashcardSetCreator';
import FlashcardStudy from './FlashcardStudy';
import QuizletExportModal from './QuizletExportModal';
import { useAuth } from '@/app/hooks/useAuth';
import { createClient } from '@/app/lib/supabase/client';

interface FlashcardsViewProps {
  topics: Topic[];
}

// Extended content item with source info for database storage
export interface SelectedItem extends ContentItem {
  sourceLesson: number;
  sourceType: CardContentType;
  cardTitle: string;
}

// Saved flashcard set from database
interface FlashcardSet {
  id: string;
  title: string;
  icon: string;
  color: string;
  total_items: number;
  created_at: string;
}

// Flashcard item from database
export interface FlashcardItem {
  id: string;
  front_text: string;
  back_text: string;
  reading: string | null;
  example_japanese: string | null;
  example_reading: string | null;
  example_translation: string | null;
}

export default function FlashcardsView({ topics }: FlashcardsViewProps) {
  const { user, loading: authLoading } = useAuth();
  const [supabase] = useState(() => createClient());

  // My Sets state
  const [sets, setSets] = useState<FlashcardSet[]>([]);
  const [setsLoading, setSetsLoading] = useState(true);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Study mode state
  const [studyingSet, setStudyingSet] = useState<{ set: FlashcardSet; items: FlashcardItem[] } | null>(null);

  // Export modal state
  const [exportingSet, setExportingSet] = useState<{ set: FlashcardSet; items: FlashcardItem[] } | null>(null);

  // Selection state for new set creation
  const [selectedLessons, setSelectedLessons] = useState<number[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<CardContentType[]>(['vocabulary', 'grammar', 'kanji']);
  
  // Modal state
  const [showCreator, setShowCreator] = useState(false);

  // Fetch user's sets
  const fetchSets = useCallback(async () => {
    if (!user) {
      setSets([]);
      setSetsLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('flashcard_sets')
      .select('id, title, icon, color, total_items, created_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching sets:', error);
    } else {
      setSets(data || []);
    }
    setSetsLoading(false);
  }, [user, supabase]);

  useEffect(() => {
    if (!authLoading) {
      fetchSets();
    }
  }, [authLoading, fetchSets]);

  // Delete a set
  const handleDeleteSet = async (setId: string) => {
    const { error } = await supabase
      .from('flashcard_sets')
      .delete()
      .eq('id', setId);

    if (error) {
      console.error('Error deleting set:', error);
    } else {
      setSets(prev => prev.filter(s => s.id !== setId));
    }
    setDeleteConfirmId(null);
  };

  // Start studying a set
  const handleStudySet = async (set: FlashcardSet) => {
    const { data, error } = await supabase
      .from('flashcard_items')
      .select('id, front_text, back_text, reading, example_japanese, example_reading, example_translation')
      .eq('set_id', set.id)
      .order('position');

    if (error) {
      console.error('Error fetching items:', error);
      return;
    }

    setStudyingSet({ set, items: data || [] });
  };

  // Export a set to Quizlet format
  const handleExportSet = async (set: FlashcardSet) => {
    const { data, error } = await supabase
      .from('flashcard_items')
      .select('id, front_text, back_text, reading, example_japanese, example_reading, example_translation')
      .eq('set_id', set.id)
      .order('position');

    if (error) {
      console.error('Error fetching items:', error);
      return;
    }

    setExportingSet({ set, items: data || [] });
  };
  
  // Extract lesson numbers and organize by lesson
  const lessonInfo = useMemo(() => {
    return topics.map((topic, index) => ({
      number: index + 1,
      title: topic.title,
      topicId: topic.id,
      vocabCount: topic.cards.filter(c => c.contentType === 'vocabulary').reduce((sum, c) => sum + c.items.length, 0),
      grammarCount: topic.cards.filter(c => c.contentType === 'grammar').reduce((sum, c) => sum + c.items.length, 0),
      kanjiCount: topic.cards.filter(c => c.contentType === 'kanji').reduce((sum, c) => sum + c.items.length, 0),
    }));
  }, [topics]);

  // Compute selected items
  const selectedItems = useMemo((): SelectedItem[] => {
    if (selectedLessons.length === 0 || selectedTypes.length === 0) {
      return [];
    }

    const items: SelectedItem[] = [];
    
    selectedLessons.forEach(lessonNum => {
      const topic = topics[lessonNum - 1];
      if (!topic) return;
      
      topic.cards
        .filter(card => selectedTypes.includes(card.contentType))
        .forEach(card => {
          card.items.forEach(item => {
            items.push({
              ...item,
              sourceLesson: lessonNum,
              sourceType: card.contentType,
              cardTitle: card.title,
            });
          });
        });
    });
    
    return items;
  }, [topics, selectedLessons, selectedTypes]);

  // Selection counts by type
  const selectionCounts = useMemo(() => {
    const counts = { vocabulary: 0, grammar: 0, kanji: 0 };
    selectedItems.forEach(item => {
      counts[item.sourceType]++;
    });
    return counts;
  }, [selectedItems]);

  const toggleLesson = (lessonNum: number) => {
    setSelectedLessons(prev =>
      prev.includes(lessonNum)
        ? prev.filter(n => n !== lessonNum)
        : [...prev, lessonNum].sort((a, b) => a - b)
    );
  };

  const toggleType = (type: CardContentType) => {
    setSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const selectAllLessons = () => {
    setSelectedLessons(lessonInfo.map(l => l.number));
  };

  const clearLessons = () => {
    setSelectedLessons([]);
  };

  const handleCreateSet = () => {
    if (selectedItems.length === 0) return;
    setShowCreator(true);
  };

  const handleSetCreated = () => {
    setShowCreator(false);
    setSelectedLessons([]);
    fetchSets(); // Refresh the sets list
  };

  // If studying, show study mode
  if (studyingSet) {
    return (
      <FlashcardStudy
        set={studyingSet.set}
        items={studyingSet.items}
        onClose={() => setStudyingSet(null)}
      />
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* My Sets Section */}
      {user && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-100 mb-2">My Sets</h2>
          <p className="text-slate-400 mb-6">
            Your saved flashcard sets. Click study to start practicing.
          </p>

          {setsLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 animate-pulse">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-slate-700 rounded-lg" />
                    <div className="flex-1">
                      <div className="h-4 bg-slate-700 rounded w-3/4 mb-2" />
                      <div className="h-3 bg-slate-700 rounded w-1/2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : sets.length === 0 ? (
            <div className="bg-slate-800/30 border border-slate-700/50 border-dashed rounded-xl p-8 text-center">
              <div className="text-4xl mb-3">🎴</div>
              <p className="text-slate-400 text-sm">No flashcard sets yet. Create one below!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sets.map(set => (
                <div
                  key={set.id}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-slate-600 transition-colors"
                  style={{ borderLeftColor: set.color, borderLeftWidth: '4px' }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{set.icon}</span>
                      <div>
                        <h3 className="font-semibold text-slate-200">{set.title}</h3>
                        <p className="text-xs text-slate-400">{set.total_items} cards</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => handleStudySet(set)}
                      className="flex-1 py-2 px-3 rounded-lg text-sm font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/30 transition-colors"
                    >
                      Study
                    </button>
                    <button
                      onClick={() => handleExportSet(set)}
                      className="py-2 px-3 rounded-lg text-sm font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
                      title="Export to Quizlet"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </button>
                    {deleteConfirmId === set.id ? (
                      <>
                        <button
                          onClick={() => handleDeleteSet(set.id)}
                          className="py-2 px-3 rounded-lg text-sm font-medium bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30 transition-colors"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => setDeleteConfirmId(null)}
                          className="py-2 px-3 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-300 transition-colors"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setDeleteConfirmId(set.id)}
                        className="py-2 px-3 rounded-lg text-sm text-slate-500 hover:text-red-400 transition-colors"
                        title="Delete set"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Create New Set Section */}
      <div className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-100 mb-2">Create New Set</h2>
        <p className="text-slate-400">
          Select lessons and content types to build your custom study set.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Panel - Lesson Selection */}
        <div className="lg:col-span-2 space-y-6">
          {/* Content Type Filter */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Content Types
            </h3>
            <div className="flex flex-wrap gap-3">
              {(['vocabulary', 'grammar', 'kanji'] as CardContentType[]).map(type => {
                const isActive = selectedTypes.includes(type);
                const colors = {
                  vocabulary: isActive ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300' : '',
                  grammar: isActive ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300' : '',
                  kanji: isActive ? 'bg-amber-500/20 border-amber-500/50 text-amber-300' : '',
                };
                
                return (
                  <button
                    key={type}
                    onClick={() => toggleType(type)}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                      border transition-all duration-200
                      ${isActive
                        ? colors[type]
                        : 'bg-slate-800 border-slate-600 text-slate-400 hover:text-slate-300 hover:border-slate-500'
                      }
                    `}
                  >
                    <span className="capitalize">{type}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Lesson Selection */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                Select Lessons
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={selectAllLessons}
                  className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Select All
                </button>
                <span className="text-slate-600">|</span>
                <button
                  onClick={clearLessons}
                  className="text-xs text-slate-400 hover:text-slate-300 transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {lessonInfo.map(lesson => {
                const isSelected = selectedLessons.includes(lesson.number);
                const totalItems = 
                  (selectedTypes.includes('vocabulary') ? lesson.vocabCount : 0) +
                  (selectedTypes.includes('grammar') ? lesson.grammarCount : 0) +
                  (selectedTypes.includes('kanji') ? lesson.kanjiCount : 0);
                
                return (
                  <button
                    key={lesson.number}
                    onClick={() => toggleLesson(lesson.number)}
                    className={`
                      relative p-4 rounded-lg border text-left transition-all duration-200
                      ${isSelected
                        ? 'bg-indigo-500/10 border-indigo-500/50 shadow-lg shadow-indigo-500/5'
                        : 'bg-slate-800/30 border-slate-700 hover:border-slate-600 hover:bg-slate-800/50'
                      }
                    `}
                  >
                    {/* Checkbox indicator */}
                    <div className={`
                      absolute top-3 right-3 w-5 h-5 rounded border-2 flex items-center justify-center
                      transition-all duration-200
                      ${isSelected 
                        ? 'bg-indigo-500 border-indigo-500' 
                        : 'border-slate-600'
                      }
                    `}>
                      {isSelected && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>

                    <div className="pr-8">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`
                          text-xs font-bold px-2 py-0.5 rounded
                          ${isSelected ? 'bg-indigo-500/30 text-indigo-300' : 'bg-slate-700 text-slate-400'}
                        `}>
                          L{lesson.number}
                        </span>
                      </div>
                      <h4 className={`text-sm font-medium truncate ${isSelected ? 'text-slate-200' : 'text-slate-300'}`}>
                        {lesson.title.replace(/^Lesson \d+:\s*/, '')}
                      </h4>
                      <div className="flex gap-3 mt-2 text-xs text-slate-500">
                        {selectedTypes.includes('vocabulary') && lesson.vocabCount > 0 && (
                          <span className="text-emerald-400/70">{lesson.vocabCount} vocab</span>
                        )}
                        {selectedTypes.includes('grammar') && lesson.grammarCount > 0 && (
                          <span className="text-indigo-400/70">{lesson.grammarCount} grammar</span>
                        )}
                        {selectedTypes.includes('kanji') && lesson.kanjiCount > 0 && (
                          <span className="text-amber-400/70">{lesson.kanjiCount} kanji</span>
                        )}
                        {totalItems === 0 && (
                          <span className="text-slate-600">No matching items</span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Panel - Selection Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 bg-slate-800/50 border border-slate-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Selection Summary
            </h3>

            {selectedItems.length === 0 ? (
              <div className="text-center py-8 text-slate-500">
                <div className="text-4xl mb-3">🎴</div>
                <p className="text-sm">Select lessons and content types to see your flashcard preview</p>
              </div>
            ) : (
              <>
                {/* Count Summary */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Total Cards</span>
                    <span className="text-xl font-bold text-slate-200">{selectedItems.length}</span>
                  </div>
                  
                  {selectionCounts.vocabulary > 0 && (
                    <div className="flex justify-between items-center py-1.5">
                      <span className="text-emerald-400/80 text-sm">
                        Vocabulary
                      </span>
                      <span className="text-slate-300 font-medium">{selectionCounts.vocabulary}</span>
                    </div>
                  )}
                  
                  {selectionCounts.grammar > 0 && (
                    <div className="flex justify-between items-center py-1.5">
                      <span className="text-indigo-400/80 text-sm">
                        Grammar
                      </span>
                      <span className="text-slate-300 font-medium">{selectionCounts.grammar}</span>
                    </div>
                  )}
                  
                  {selectionCounts.kanji > 0 && (
                    <div className="flex justify-between items-center py-1.5">
                      <span className="text-amber-400/80 text-sm">
                        Kanji
                      </span>
                      <span className="text-slate-300 font-medium">{selectionCounts.kanji}</span>
                    </div>
                  )}
                </div>

                {/* Lessons included */}
                <div className="mb-6">
                  <h4 className="text-xs text-slate-500 uppercase tracking-wider mb-2">Lessons Included</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedLessons.map(num => (
                      <span 
                        key={num}
                        className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded"
                      >
                        L{num}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Create Button */}
                <button
                  onClick={handleCreateSet}
                  className="
                    w-full py-3 px-4 rounded-lg font-semibold text-white
                    bg-gradient-to-r from-indigo-500 to-indigo-600
                    hover:from-indigo-400 hover:to-indigo-500
                    shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40
                    transition-all duration-200
                    flex items-center justify-center gap-2
                  "
                >
                  <span>Create Flashcard Set</span>
                  <span>→</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Creator Modal */}
      {showCreator && (
        <FlashcardSetCreator
          items={selectedItems}
          selectedLessons={selectedLessons}
          onClose={() => setShowCreator(false)}
          onCreated={handleSetCreated}
        />
      )}

      {/* Quizlet Export Modal */}
      {exportingSet && (
        <QuizletExportModal
          items={exportingSet.items}
          setTitle={exportingSet.set.title}
          onClose={() => setExportingSet(null)}
        />
      )}
    </div>
  );
}

