import { CheatSheetTopic } from './types';

export const topics: CheatSheetTopic[] = [
  {
    id: 'greetings',
    title: 'Greetings & Basics',
    cards: [
      {
        id: 'basic-greetings',
        title: 'Essential Greetings',
        type: 'vocabulary',
        items: [
          { id: 'ohayou', japanese: 'おはよう', reading: 'ohayou', english: 'Good morning (Casual)', chapter: 1 },
          { id: 'ohayou-gozaimasu', japanese: 'おはようございます', reading: 'ohayou gozaimasu', english: 'Good morning (Polite)', chapter: 1 },
          { id: 'konnichiwa', japanese: 'こんにちは', reading: 'konnichiwa', english: 'Good afternoon', chapter: 1 },
          { id: 'konbanwa', japanese: 'こんばんは', reading: 'konbanwa', english: 'Good evening', chapter: 1 },
          { id: 'sayonara', japanese: 'さようなら', reading: 'sayounara', english: 'Goodbye', chapter: 1 },
        ],
      },
      {
        id: 'useful-expressions',
        title: 'Useful Expressions',
        type: 'vocabulary',
        items: [
          { id: 'arigatou', japanese: 'ありがとう', reading: 'arigatou', english: 'Thank you', chapter: 1 },
          { id: 'sumimasen', japanese: 'すみません', reading: 'sumimasen', english: 'Excuse me / I\'m sorry', chapter: 1 },
          { id: 'iie', japanese: 'いいえ', reading: 'iie', english: 'No / Not at all', chapter: 1 },
          { id: 'ittekimasu', japanese: 'いってきます', reading: 'ittekimasu', english: 'I\'ll go and come back', chapter: 3 },
        ],
      },
    ],
  },
  {
    id: 'particles',
    title: 'Particles',
    cards: [
      {
        id: 'topic-marker-wa',
        title: 'Topic Marker は (wa)',
        description: 'Indicates the topic of the sentence. Pronounced "wa", not "ha".',
        type: 'grammar',
        items: [
          { id: 'wa-ex-1', japanese: 'わたしは学生です。', reading: 'Watashi wa gakusei desu.', english: 'I am a student.', chapter: 1 },
          { id: 'wa-ex-2', japanese: 'これはペンです。', reading: 'Kore wa pen desu.', english: 'This is a pen.', chapter: 2 },
        ],
      },
      {
        id: 'question-particle-ka',
        title: 'Question Particle か (ka)',
        description: 'Added to the end of a sentence to turn it into a question.',
        type: 'grammar',
        items: [
          { id: 'ka-ex-1', japanese: '学生ですか。', reading: 'Gakusei desu ka.', english: 'Are you a student?', chapter: 1 },
          { id: 'ka-ex-2', japanese: 'いまなんじですか。', reading: 'Ima nanji desu ka.', english: 'What time is it now?', chapter: 1 },
        ],
      },
      {
        id: 'possessive-no',
        title: 'Possessive の (no)',
        description: 'Connects two nouns. noun1 の noun2 = "noun1\'s noun2".',
        type: 'grammar',
        items: [
          { id: 'no-ex-1', japanese: 'わたしの電話番号', reading: 'watashi no denwa bangou', english: 'My phone number', chapter: 1 },
          { id: 'no-ex-2', japanese: 'たけしさんの本', reading: 'Takeshi-san no hon', english: 'Takeshi\'s book', chapter: 2 },
        ],
      },
    ],
  },
  {
    id: 'verbs',
    title: 'Verbs',
    cards: [
      {
        id: 'dest-particle-ni-e',
        title: 'Destination Particles に/へ',
        description: 'Used with movement verbs (iku, kuru, kaeru).',
        type: 'grammar',
        items: [
          { id: 'ni-iku', japanese: '学校に行きます', reading: 'gakkou ni ikimasu', english: 'I go to school', chapter: 3 },
          { id: 'e-kaeru', japanese: 'うちへ帰ります', reading: 'uchi e kaerimasu', english: 'I return home', chapter: 3 },
        ],
      },
      {
        id: 'time-ref-ni',
        title: 'Time Reference に (ni)',
        description: 'Used with specific times (days, hours). Not used with "today", "tomorrow", etc.',
        type: 'grammar',
        items: [
          { id: 'time-ni-1', japanese: '日曜日に京都に行きます', reading: 'nichiyoubi ni kyouto ni ikimasu', english: 'I will go to Kyoto on Sunday', chapter: 3 },
          { id: 'time-ni-2', japanese: '１１時に寝ます', reading: 'juu-ichi ji ni nemasu', english: 'I sleep at 11:00', chapter: 3 },
        ],
      },
    ],
  },
  {
    id: 'numerals',
    title: 'Numbers & Time',
    cards: [
      {
        id: 'numbers-1-10',
        title: 'Numbers 1-10',
        type: 'vocabulary',
        items: [
          { id: 'ichi', japanese: 'いち', english: '1', chapter: 1 },
          { id: 'ni', japanese: 'に', english: '2', chapter: 1 },
          { id: 'san', japanese: 'さん', english: '3', chapter: 1 },
          { id: 'yon', japanese: 'よん / し', english: '4', chapter: 1 },
          { id: 'go', japanese: 'ご', english: '5', chapter: 1 },
          { id: 'roku', japanese: 'ろく', english: '6', chapter: 1 },
          { id: 'nana', japanese: 'なな / しち', english: '7', chapter: 1 },
          { id: 'hachi', japanese: 'はち', english: '8', chapter: 1 },
          { id: 'kyuu', japanese: 'きゅう', english: '9', chapter: 1 },
          { id: 'juu', japanese: 'じゅう', english: '10', chapter: 1 },
        ],
      },
      {
        id: 'time-hours',
        title: 'Time (Hours - ji)',
        type: 'vocabulary',
        items: [
          { id: 'ichiji', japanese: 'いちじ', english: '1:00', chapter: 1 },
          { id: 'yoji', japanese: 'よじ', english: '4:00 (irregular)', chapter: 1 },
          { id: 'shichiji', japanese: 'しちじ', english: '7:00 (irregular)', chapter: 1 },
          { id: 'kuji', japanese: 'くじ', english: '9:00 (irregular)', chapter: 1 },
        ],
      },
    ],
  },
];

