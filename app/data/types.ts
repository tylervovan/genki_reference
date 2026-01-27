/**
 * =============================================================================
 * DATA TYPE DEFINITIONS
 * =============================================================================
 *
 * PURPOSE: TypeScript interfaces defining the data structure for all content.
 *
 * WHAT IT DOES:
 * - Defines ContentItem: individual vocabulary/grammar item
 * - Defines RefCard: collection of related items with title and metadata
 * - Defines Topic: section containing multiple cards
 *
 * WHY IT EXISTS:
 * Type safety for the entire data layer. These interfaces ensure consistency
 * between data files (genki-lessons.ts, kanji.ts) and UI components.
 *
 * HOW IT WORKS:
 * Data hierarchy: Topic → RefCard[] → ContentItem[]
 * - Topics represent major sections (e.g., "Lesson 1: New Friends")
 * - Cards group related items (e.g., "School Vocabulary")
 * - Items are individual entries with Japanese, reading, meaning
 *
 * DATA FIELDS:
 * ContentItem:
 * - id: Unique identifier
 * - label: English description/meaning
 * - value: Japanese text (hiragana/katakana/kanji)
 * - subValue: Reading in romaji or additional hiragana
 * - example: Optional usage example with translation
 * - chapter: Genki chapter number
 *
 * RefCard:
 * - id: Unique identifier
 * - contentType: Explicit type for filtering ('vocabulary' | 'grammar' | 'kanji')
 * - title: Card header text
 * - items: Array of ContentItem
 *
 * Topic:
 * - id: Unique identifier for hash navigation
 * - title: Section header
 * - cards: Array of RefCard
 *
 * CONSTRAINTS/GOTCHAS:
 * - All RefCards must have contentType field set explicitly
 * - Some fields are optional for flexibility (label vs meaning/english)
 * - CheatSheetSection is an alias for Topic (legacy name)
 *
 * DEPENDENCIES:
 * - Used by: All data files and components
 *
 * RELATED FILES:
 * - app/data/genki-lessons.ts - Main content data
 * - app/data/kanji.ts - Kanji reference data
 * - app/data/topics.ts - Combines all data sources
 * - components/RefCard.tsx - Renders RefCard type
 * - components/StudyView.tsx - Renders Topic type
 * =============================================================================
 */

export interface ContentItem {
  id: string;
  label?: string;
  value?: string;
  subValue?: string; // For readings or translations
  // New properties expected by RefCard component
  japanese?: string;
  reading?: string;
  meaning?: string;
  english?: string; // Some data uses 'english' instead of 'meaning'
  example?: {
    japanese: string;
    reading?: string;
    translation: string;
  };
  notes?: string;
  chapter: number;
  tags?: string[];
}

/**
 * Content type for filtering purposes.
 * - 'vocabulary': Word/phrase cards
 * - 'grammar': Grammar point cards
 * - 'kanji': Kanji reference cards
 */
export type CardContentType = 'vocabulary' | 'grammar' | 'kanji';

export interface RefCard {
  id: string;
  title: string;
  description?: string;
  /** Explicit content type for filtering. Preferred over ID parsing. */
  contentType: CardContentType;
  /** Display type for rendering (list, table, etc.) */
  displayType?: 'list' | 'conjugation' | 'table';
  items: ContentItem[];
  chapter?: number; // If the whole card is specific to one chapter
}

export interface Topic {
  id: string;
  title: string;
  icon?: string;
  cards: RefCard[];
}

export type CheatSheetSection = Topic;
