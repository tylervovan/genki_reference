/**
 * =============================================================================
 * TOPICS AGGREGATOR
 * =============================================================================
 *
 * PURPOSE: Exports all content data as a single topics array.
 *
 * WHAT IT DOES:
 * - Imports lesson data from genki-lessons.ts (includes vocabulary, grammar, and kanji)
 * - Exports topics array for the application
 *
 * WHY IT EXISTS:
 * Single entry point for all content data. New data sources can be added
 * here without modifying consuming components.
 *
 * HOW IT WORKS:
 * - Exports genkiLessons which contains all content (vocab, grammar, kanji per lesson)
 * - Order determined by lesson order in genki-lessons.ts
 *
 * CONSTRAINTS/GOTCHAS:
 * - All data sources must export Topic[] arrays
 * - Kanji is now integrated into each lesson (not a separate topic)
 *
 * DEPENDENCIES:
 * - Uses: Topic type from ./types
 * - Uses: genkiLessons from ./genki-lessons.ts
 * - Used by: app/page.tsx → StudyView
 *
 * RELATED FILES:
 * - app/data/genki-lessons.ts - Main lesson content (vocab, grammar, kanji)
 * - app/page.tsx - Imports topics for StudyView
 * =============================================================================
 */

import { Topic } from './types';
import { genkiLessons } from './genki-lessons';

// Export all lesson data
export const topics: Topic[] = [...genkiLessons];
