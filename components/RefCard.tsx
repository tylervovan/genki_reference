/**
 * =============================================================================
 * REFERENCE CARD COMPONENT
 * =============================================================================
 *
 * PURPOSE: Displays a single reference card with vocabulary/grammar items in table format.
 *
 * WHAT IT DOES:
 * - Renders card header with title and optional chapter badge
 * - Shows optional description below header
 * - Displays content items in a striped table layout
 * - Renders usage examples if available (Japanese, reading, translation)
 * - Integrates SpeakerButton for audio pronunciation of Japanese text
 *
 * WHY IT EXISTS:
 * Core display unit for all content. Each card represents a related group
 * of items (e.g., "School Vocabulary", "Verb Conjugations").
 *
 * HOW IT WORKS:
 * - Receives a RefCard object from parent topic section
 * - Maps through card.items to render table rows
 * - Each row shows: label | value (Japanese) + subValue (reading)
 * - Speaker button attached to each value for TTS playback
 *
 * CONSTRAINTS/GOTCHAS:
 * - Uses break-inside-avoid for CSS columns layout compatibility
 * - Card IDs are used for anchor navigation (managed by StudyView's idsEnabled)
 * - Table layout is fixed at 1/3 for labels, rest for values
 *
 * DEPENDENCIES:
 * - Uses: RefCard type from app/data/types.ts
 * - Uses: SpeakerButton from app/components/SpeakerButton.tsx
 * - Used by: components/StudyView.tsx
 *
 * RELATED FILES:
 * - components/StudyView.tsx - Parent, renders cards within topics
 * - app/data/types.ts - Defines RefCard and ContentItem interfaces
 * - app/components/SpeakerButton.tsx - Audio playback button
 * =============================================================================
 */

'use client';

import React from 'react';
import { RefCard as RefCardType } from '@/app/data/types';
import SpeakerButton from '@/app/components/SpeakerButton';

interface RefCardProps {
  card: RefCardType;
}

export default function RefCard({ card }: RefCardProps) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow break-inside-avoid mb-6">
      <div className="px-4 py-3 border-b border-slate-700 flex justify-between items-center bg-slate-850/50">
        <h3 className="font-bold text-slate-200">{card.title}</h3>
        {card.chapter && (
          <span className="text-xs font-medium px-2 py-1 bg-indigo-900/60 text-indigo-200 rounded border border-indigo-800/50">
            Ch. {card.chapter}
          </span>
        )}
      </div>
      
      {card.description && (
        <div className="px-4 py-2 text-sm text-slate-300 border-b border-slate-700/50">
          {card.description}
        </div>
      )}

      <div className="p-0 overflow-x-hidden">
        <table className="w-full text-sm text-left table-fixed">
          <tbody>
            {card.items.map((item, idx) => (
              <tr 
                key={item.id} 
                className={`border-b border-slate-700/50 last:border-0 ${idx % 2 === 0 ? 'bg-slate-800' : 'bg-slate-800/50'}`}
              >
                <td className="px-4 py-2 text-slate-300 font-medium w-[35%] break-words">
                  {item.label}
                </td>
                <td className="px-4 py-2 text-slate-200 font-mono break-words">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-300">{item.value}</span>
                      {item.value && <SpeakerButton text={item.value} />}
                    </div>
                    {item.subValue && (
                      <span className="text-xs text-slate-300 select-none">
                        {item.subValue}
                      </span>
                    )}
                  </div>
                  {item.example && (
                    <div className="mt-2 pt-2 border-t border-slate-700/50 text-xs">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-indigo-300">{item.example.japanese}</span>
                        <SpeakerButton text={item.example.japanese} className="p-1 scale-90 origin-left" />
                      </div>
                      {item.example.reading && (
                        <div className="text-slate-400 mb-0.5">{item.example.reading}</div>
                      )}
                      <div className="text-slate-300 italic">{item.example.translation}</div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

