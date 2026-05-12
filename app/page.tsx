/**
 * =============================================================================
 * MAIN PAGE
 * =============================================================================
 *
 * PURPOSE: Next.js App Router home page - entry point for the application.
 *
 * WHAT IT DOES:
 * - Imports all content data via topics aggregator
 * - Renders AppShell which provides tab navigation between Reference and Flashcards
 *
 * WHY IT EXISTS:
 * Minimal page component that connects data to UI. Intentionally simple -
 * all complexity lives in child components (AppShell, StudyView, FlashcardsView).
 *
 * HOW IT WORKS:
 * - Server component (no 'use client' directive)
 * - topics data is loaded at build time (static)
 * - Passes topics to client-side AppShell component
 *
 * CONSTRAINTS/GOTCHAS:
 * - This is a server component; AppShell handles client interactivity
 * - Adding 'use client' here would impact performance
 * - topics import triggers loading of all lesson data
 *
 * DEPENDENCIES:
 * - Uses: topics from app/data/topics.ts
 * - Uses: AppShell from components/AppShell.tsx
 *
 * RELATED FILES:
 * - app/data/topics.ts - All content data
 * - components/AppShell.tsx - Main shell with tab navigation
 * - components/StudyView.tsx - Reference view
 * - components/FlashcardsView.tsx - Flashcard creation view
 * - app/layout.tsx - Wraps this page
 * =============================================================================
 */

import React from 'react';
import { topics } from '@/app/data/topics';
import AppShell from '@/components/AppShell';

const GITHUB_REPO = 'tylervovan/genki_reference';
const GITHUB_HREF = `https://github.com/${GITHUB_REPO}`;

async function fetchStarCount(): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}`, {
      headers: { Accept: 'application/vnd.github+json' },
      // The count doesn't need to be fresher than 1h.
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { stargazers_count?: number };
    return typeof data.stargazers_count === 'number' ? data.stargazers_count : null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const githubStars = await fetchStarCount();
  return (
    <AppShell topics={topics} githubHref={GITHUB_HREF} githubStars={githubStars} />
  );
}
