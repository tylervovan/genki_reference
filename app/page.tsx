import React from 'react';
import { topics } from '@/app/data/topics';
import { RefCard } from '@/components/RefCard';
import { Sidebar } from '@/components/Sidebar';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-indigo-500/30">
      <Sidebar sections={topics} />
      
      <main className="lg:pl-64">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header for Mobile (Sidebar hidden) */}
          <div className="lg:hidden mb-8">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
              GenkiRef
            </h1>
            <p className="text-slate-400 mt-2">Japanese Grammar & Vocabulary Cheat Sheets</p>
          </div>

          <div className="hidden lg:block mb-12 border-b border-slate-800 pb-8">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
              Reference
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Quick reference for Genki I (3rd Edition) grammar, vocabulary, and kanji.
            </p>
          </div>

          <div className="space-y-16">
            {topics.map((topic) => (
              <section key={topic.id} id={topic.id} className="scroll-mt-12">
                <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center">
                  <span className="bg-indigo-500 w-2 h-8 mr-3 rounded-sm"></span>
                  {topic.title}
                </h3>
                
                <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
                  {topic.cards.map((card) => (
                    <div key={card.id} id={card.id} className="break-inside-avoid-column">
                      <RefCard card={card} />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
          
          <footer className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>Based on Genki: An Integrated Course in Elementary Japanese.</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
