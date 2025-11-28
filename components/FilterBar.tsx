'use client';

import React from 'react';
import { ContentType } from '@/app/utils/content';

interface FilterBarProps {
  activeFilters: ContentType[];
  onToggle: (type: ContentType) => void;
}

export default function FilterBar({ activeFilters, onToggle }: FilterBarProps) {
  const filters: { type: ContentType; label: string }[] = [
    { type: 'grammar', label: 'Grammar' },
    { type: 'vocabulary', label: 'Vocabulary' },
    { type: 'kanji', label: 'Kanji' },
  ];

  return (
    <div className="flex items-center gap-3 mb-8 flex-wrap">
      <span className="text-sm font-medium text-slate-300 mr-2">Filter:</span>
      {filters.map((filter) => {
        const isActive = activeFilters.includes(filter.type);
        return (
          <button
            key={filter.type}
            onClick={() => onToggle(filter.type)}
            className={`
              px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ease-in-out
              border
              ${
                isActive
                  ? 'bg-indigo-500/30 border-indigo-500/50 text-indigo-200 shadow-[0_0_15px_rgba(99,102,241,0.15)]'
                  : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-600 hover:text-slate-200'
              }
            `}
          >
            {filter.label}
          </button>
        );
      })}
      {activeFilters.length > 0 && (
        <button
          onClick={() => activeFilters.forEach(f => onToggle(f))}
          className="text-xs text-slate-300 hover:text-slate-200 ml-auto"
        >
          Clear all
        </button>
      )}
    </div>
  );
}

