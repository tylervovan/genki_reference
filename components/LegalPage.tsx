/**
 * =============================================================================
 * LEGAL PAGE LAYOUT
 * =============================================================================
 *
 * PURPOSE: Shared layout shell for Privacy Policy and Terms of Service pages.
 * WHAT IT DOES: Renders a centered prose container with the app header style.
 * WHY IT EXISTS: Keep /privacy and /terms visually consistent without copy-paste.
 * =============================================================================
 */

import Link from 'next/link';
import { GenkiMark, GenkiWordmark } from './GenkiMark';

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-slate-900">
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center">
          <Link href="/" aria-label="Genki Reference" className="inline-flex items-center gap-2.5">
            <GenkiMark size={32} />
            <h1 className="text-xl text-white leading-none">
              <GenkiWordmark />
            </h1>
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
        <p className="text-sm text-slate-400 mb-8">Last updated: {lastUpdated}</p>
        <article
          className="
            text-slate-300 leading-relaxed space-y-4
            [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-3
            [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-6 [&_h3]:mb-2
            [&_p]:mb-4
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ul]:mb-4
            [&_li]:text-slate-300
            [&_a]:text-indigo-400 [&_a]:underline hover:[&_a]:text-indigo-300
            [&_strong]:text-slate-100
          "
        >
          {children}
        </article>
        <div className="mt-12 pt-6 border-t border-slate-800 text-sm text-slate-400">
          <Link href="/" className="text-indigo-400 hover:text-indigo-300">
            ← Back to Genki Reference
          </Link>
        </div>
      </main>
    </div>
  );
}
