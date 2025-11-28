import React from 'react';
import { Topic } from '@/app/data/types';
import Link from 'next/link';

interface SidebarProps {
  topics: Topic[];
}

export default function Sidebar({ topics }: SidebarProps) {
  return (
    <nav className="w-64 hidden lg:block fixed h-screen overflow-y-auto border-r border-slate-800 bg-slate-900 p-6">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
          GenkiRef
        </h1>
        <p className="text-xs text-slate-300 mt-1">Japanese Cheat Sheets</p>
      </div>

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

