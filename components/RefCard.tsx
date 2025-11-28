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

      <div className="p-0">
        <table className="w-full text-sm text-left">
          <tbody>
            {card.items.map((item, idx) => (
              <tr 
                key={item.id} 
                className={`border-b border-slate-700/50 last:border-0 ${idx % 2 === 0 ? 'bg-slate-800' : 'bg-slate-800/50'}`}
              >
                <td className="px-4 py-2 text-slate-300 font-medium w-1/3">
                  {item.label}
                </td>
                <td className="px-4 py-2 text-slate-200 font-mono">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

