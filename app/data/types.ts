export interface ContentItem {
  id: string;
  label: string;
  value: string;
  subValue?: string; // For readings or translations
  chapter: number;
  tags?: string[];
}

export interface RefCard {
  id: string;
  title: string;
  description?: string;
  items: ContentItem[];
  chapter?: number; // If the whole card is specific to one chapter
}

export interface Topic {
  id: string;
  title: string;
  cards: RefCard[];
}

