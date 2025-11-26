import { Topic } from './types';
import { genkiLessons } from './genki-lessons';
import { kanjiTopics } from './kanji';

// Combine quick reference with all lesson data
export const topics: Topic[] = [...genkiLessons, ...kanjiTopics];
