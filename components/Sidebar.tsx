/**
 * =============================================================================
 * SIDEBAR NAVIGATION COMPONENT
 * =============================================================================
 *
 * PURPOSE: Fixed navigation sidebar for jumping to topics and cards.
 *
 * WHAT IT DOES:
 * - Displays application title and tagline
 * - Lists all topics as clickable anchor links
 * - Shows nested list of cards under each topic
 * - Provides quick navigation via hash anchors
 *
 * WHY IT EXISTS:
 * With thousands of content items, users need quick navigation to any section.
 * The sidebar provides an always-visible table of contents.
 *
 * HOW IT WORKS:
 * - Receives filtered topics array from StudyView
 * - Renders topics with hash links (#topic-id)
 * - Card links use same hash navigation pattern
 * - Fixed positioning keeps it visible while scrolling main content
 *
 * CONSTRAINTS/GOTCHAS:
 * - Hidden on mobile (lg:block) - responsive design consideration
 * - Uses custom scrollbar styling from globals.css (.sidebar-scrollbar)
 * - Hash navigation depends on StudyView's idsEnabled state
 * - Links won't work until render phase is 'complete' (see StudyView docs)
 *
 * DEPENDENCIES:
 * - Uses: Topic type from app/data/types.ts
 * - Uses: Next.js Link component for topic links
 * - Used by: components/StudyView.tsx
 *
 * RELATED FILES:
 * - components/StudyView.tsx - Parent, controls hash navigation system
 * - app/globals.css - Contains .sidebar-scrollbar styles
 * =============================================================================
 */

import React from 'react';
import { Topic } from '@/app/data/types';
import Link from 'next/link';

interface SidebarProps {
  topics: Topic[];
}

export default function Sidebar({ topics }: SidebarProps) {
  return (
    <nav className="w-64 hidden lg:block fixed top-14 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-slate-800 bg-slate-900 p-6 sidebar-scrollbar">
      <div className="space-y-6">
        {topics.map((topic) => (
          <div key={topic.id}>
            <Link 
              href={`#${topic.id}`}
              className="block text-sm font-bold text-slate-200 hover:text-indigo-300 mb-2 uppercase tracking-wider"
            >
              {topic.title}
            </Link>
            <ul className="space-y-1 border-l border-slate-800 ml-1">
              {topic.cards.map((card) => (
                <li key={card.id}>
                  <a 
                    href={`#${card.id}`} // Assuming we add IDs to cards in the main view
                    className="block pl-4 py-1 text-sm text-slate-300 hover:text-slate-200 hover:border-l-2 hover:border-indigo-500 -ml-[1px] transition-colors"
                  >
                    {card.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

