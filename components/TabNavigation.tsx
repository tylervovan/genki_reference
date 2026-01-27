/**
 * =============================================================================
 * TAB NAVIGATION COMPONENT
 * =============================================================================
 *
 * PURPOSE: Provides tab-based navigation between main application views.
 *
 * WHAT IT DOES:
 * - Renders tab buttons for Reference and Flashcards views
 * - Shows visual indicator for active tab
 * - Triggers view changes via callback to parent
 *
 * WHY IT EXISTS:
 * Users need to switch between studying reference material and creating/
 * practicing flashcard sets. Tabs provide clear, familiar navigation.
 *
 * HOW IT WORKS:
 * - Controlled component - active tab state lives in parent
 * - Uses CSS transitions for smooth tab indicator animation
 * - Responsive: works on mobile and desktop layouts
 *
 * CONSTRAINTS/GOTCHAS:
 * - Tab switching clears any unsaved flashcard selections
 * - Active tab is visually distinguished with accent color
 *
 * DEPENDENCIES:
 * - Uses: None (pure React component)
 * - Used by: app/page.tsx or components/AppShell.tsx
 *
 * RELATED FILES:
 * - components/StudyView.tsx - Reference tab content
 * - components/FlashcardsView.tsx - Flashcards tab content
 * =============================================================================
 */

'use client';

import React from 'react';

export type TabType = 'reference' | 'flashcards';

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'reference', label: 'Reference', icon: '📖' },
    { id: 'flashcards', label: 'Flashcards', icon: '🎴' },
  ];

  return (
    <div className="flex items-center gap-1 p-1 bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-sm">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium
              transition-all duration-200 ease-out whitespace-nowrap
              ${isActive 
                ? 'bg-gradient-to-r from-indigo-500/90 to-indigo-600/90 text-white shadow-lg shadow-indigo-500/20' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
              }
            `}
          >
            <span className="text-sm sm:text-base">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

