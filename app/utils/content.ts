import { RefCard } from '@/app/data/types';

export type ContentType = 'grammar' | 'vocabulary' | 'kanji';

export function getCardType(card: RefCard): ContentType | 'other' {
  if (card.id.includes('grammar')) return 'grammar';
  if (card.id.includes('vocab')) return 'vocabulary';
  if (card.id.includes('kanji')) return 'kanji';
  return 'other';
}

