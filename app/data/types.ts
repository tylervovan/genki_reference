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

export interface RefCard {
  id: string;
  title: string;
  description?: string;
  type?: 'list' | 'conjugation' | 'table' | 'vocabulary' | 'grammar';
  items: ContentItem[];
  chapter?: number; // If the whole card is specific to one chapter
}

export interface Topic {
  id: string;
  title: string;
  cards: RefCard[];
}

