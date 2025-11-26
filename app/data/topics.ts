import { Topic } from './types';

export const topics: Topic[] = [
  {
    id: 'basics',
    title: 'Basics',
    cards: [
      {
        id: 'greetings',
        title: 'Greetings',
        chapter: 1,
        items: [
          { id: 'g1', label: 'Good morning', value: 'おはようございます', subValue: 'Ohayou gozaimasu', chapter: 1 },
          { id: 'g2', label: 'Good afternoon', value: 'こんにちは', subValue: 'Konnichiwa', chapter: 1 },
          { id: 'g3', label: 'Good evening', value: 'こんばんは', subValue: 'Konbanwa', chapter: 1 },
          { id: 'g4', label: 'Goodbye', value: 'さようなら', subValue: 'Sayounara', chapter: 1 },
          { id: 'g5', label: 'Thank you', value: 'ありがとうございます', subValue: 'Arigatou gozaimasu', chapter: 1 },
        ]
      },
      {
        id: 'numbers-1-10',
        title: 'Numbers 1-10',
        chapter: 1,
        items: [
          { id: 'n1', label: '1', value: 'いち', subValue: 'ichi', chapter: 1 },
          { id: 'n2', label: '2', value: 'に', subValue: 'ni', chapter: 1 },
          { id: 'n3', label: '3', value: 'さん', subValue: 'san', chapter: 1 },
          { id: 'n4', label: '4', value: 'よん / し', subValue: 'yon / shi', chapter: 1 },
          { id: 'n5', label: '5', value: 'ご', subValue: 'go', chapter: 1 },
          { id: 'n6', label: '6', value: 'ろく', subValue: 'roku', chapter: 1 },
          { id: 'n7', label: '7', value: 'なな / しち', subValue: 'nana / shichi', chapter: 1 },
          { id: 'n8', label: '8', value: 'はち', subValue: 'hachi', chapter: 1 },
          { id: 'n9', label: '9', value: 'きゅう', subValue: 'kyuu', chapter: 1 },
          { id: 'n10', label: '10', value: 'じゅう', subValue: 'juu', chapter: 1 },
        ]
      }
    ]
  },
  {
    id: 'particles',
    title: 'Particles',
    cards: [
      {
        id: 'topic-marker-wa',
        title: 'Topic Marker は (wa)',
        chapter: 1,
        description: 'Indicates the topic of the sentence.',
        items: [
          { id: 'p1', label: 'Usage', value: 'X は Y です', subValue: 'As for X, it is Y', chapter: 1 },
          { id: 'p2', label: 'Example', value: 'わたしは学生です', subValue: 'I am a student', chapter: 1 },
        ]
      },
      {
        id: 'possession-no',
        title: 'Possessive の (no)',
        chapter: 1,
        description: 'Connects two nouns; indicates possession or modification.',
        items: [
          { id: 'p3', label: 'Usage', value: 'Noun1 の Noun2', subValue: 'Noun1\'s Noun2', chapter: 1 },
          { id: 'p4', label: 'Example', value: 'たけしさんの電話番号', subValue: 'Takeshi\'s phone number', chapter: 1 },
        ]
      }
    ]
  },
  {
    id: 'verbs',
    title: 'Verbs',
    cards: [
      {
        id: 'desu-copula',
        title: 'Copula です (desu)',
        chapter: 1,
        description: 'To be (am, is, are).',
        items: [
          { id: 'v1', label: 'Present Affirmative', value: 'です', subValue: 'is / am / are', chapter: 1 },
          { id: 'v2', label: 'Present Negative', value: 'じゃないです', subValue: 'is not', chapter: 1 },
          { id: 'v3', label: 'Past Affirmative', value: 'でした', subValue: 'was', chapter: 4 },
          { id: 'v4', label: 'Past Negative', value: 'じゃなかったです', subValue: 'was not', chapter: 4 },
        ]
      }
    ]
  }
];

