/**
 * =============================================================================
 * CONTENT TYPE UTILITIES
 * =============================================================================
 *
 * PURPOSE: Utilities for detecting and filtering content by type.
 *
 * WHAT IT DOES:
 * - Re-exports CardContentType from types.ts for convenience
 * - Provides getCardType() to get a card's content type
 *
 * WHY IT EXISTS:
 * Centralizes the type detection logic used by FilterBar and StudyView.
 * Uses the explicit contentType field on RefCard for robust filtering.
 *
 * HOW IT WORKS:
 * - Each RefCard has a contentType field: 'vocabulary' | 'grammar' | 'kanji'
 * - getCardType() returns this field directly
 *
 * CONSTRAINTS/GOTCHAS:
 * - All RefCards must have contentType set (it's a required field)
 * - 'other' is no longer needed as all cards have explicit types
 *
 * DEPENDENCIES:
 * - Uses: RefCard, CardContentType from app/data/types.ts
 * - Used by: components/FilterBar.tsx, components/StudyView.tsx
 *
 * RELATED FILES:
 * - components/FilterBar.tsx - Uses ContentType for filter buttons
 * - components/StudyView.tsx - Uses getCardType() for filtering logic
 * - app/data/genki-lessons.ts - All cards have contentType field
 * - app/data/kanji.ts - All cards have contentType field
 * =============================================================================
 */

import { RefCard, CardContentType } from '@/app/data/types';

export type ContentType = CardContentType;

export function getCardType(card: RefCard): ContentType {
  return card.contentType;
}

