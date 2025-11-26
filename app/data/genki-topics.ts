import { CheatSheetData } from './types';

export const genkiData: CheatSheetData = {
  sections: [
    {
      id: 'greetings',
      title: 'Greetings & Expressions',
      icon: '👋',
      cards: [
        {
          title: 'Basic Greetings',
          type: 'list',
          items: [
            {
              japanese: 'おはよう（ございます）',
              reading: 'ohayou (gozaimasu)',
              meaning: 'Good morning',
              chapter: 1,
            },
            {
              japanese: 'こんにちは',
              reading: 'konnichiwa',
              meaning: 'Good afternoon / Hello',
              chapter: 1,
            },
            {
              japanese: 'こんばんは',
              reading: 'konbanwa',
              meaning: 'Good evening',
              chapter: 1,
            },
            {
              japanese: 'さようなら',
              reading: 'sayounara',
              meaning: 'Goodbye',
              chapter: 1,
            },
            {
              japanese: 'おやすみなさい',
              reading: 'oyasuminasai',
              meaning: 'Good night',
              chapter: 1,
            },
          ],
        },
        {
          title: 'Courtesy Expressions',
          type: 'list',
          items: [
            {
              japanese: 'ありがとうございます',
              reading: 'arigatou gozaimasu',
              meaning: 'Thank you',
              chapter: 1,
            },
            {
              japanese: 'すみません',
              reading: 'sumimasen',
              meaning: 'Excuse me / I\'m sorry',
              chapter: 1,
            },
            {
              japanese: 'いいえ',
              reading: 'iie',
              meaning: 'No / Not at all',
              chapter: 1,
            },
            {
              japanese: 'いってきます',
              reading: 'ittekimasu',
              meaning: 'I\'ll go and come back',
              chapter: 1,
            },
            {
              japanese: 'いってらっしゃい',
              reading: 'itterasshai',
              meaning: 'Please go and come back',
              chapter: 1,
            },
            {
              japanese: 'ただいま',
              reading: 'tadaima',
              meaning: 'I\'m home',
              chapter: 1,
            },
            {
              japanese: 'おかえりなさい',
              reading: 'okaerinasai',
              meaning: 'Welcome home',
              chapter: 1,
            },
          ],
        },
      ],
    },
    {
      id: 'particles',
      title: 'Particles',
      icon: '🔗',
      cards: [
        {
          title: 'は (wa) - Topic Marker',
          description: 'Marks the topic of a sentence',
          type: 'list',
          items: [
            {
              japanese: 'わたしは　がくせいです',
              reading: 'watashi wa gakusei desu',
              meaning: 'I am a student',
              chapter: 1,
              notes: 'は is written as "ha" but pronounced "wa" when used as a particle',
            },
            {
              japanese: 'たなかさんは　にほんじんです',
              reading: 'tanaka-san wa nihonjin desu',
              meaning: 'Mr./Ms. Tanaka is Japanese',
              chapter: 1,
            },
          ],
        },
        {
          title: 'の (no) - Possessive/Modification',
          description: 'Connects nouns to show possession or modification',
          type: 'list',
          items: [
            {
              japanese: 'わたしの　でんわ',
              reading: 'watashi no denwa',
              meaning: 'My phone',
              chapter: 1,
            },
            {
              japanese: 'にほんごの　せんせい',
              reading: 'nihongo no sensei',
              meaning: 'Japanese language teacher',
              chapter: 1,
            },
            {
              japanese: 'だいがくの　がくせい',
              reading: 'daigaku no gakusei',
              meaning: 'University student',
              chapter: 1,
            },
          ],
        },
        {
          title: 'も (mo) - Also/Too',
          description: 'Replaces は or を to mean "also"',
          type: 'list',
          items: [
            {
              japanese: 'わたしも　がくせいです',
              reading: 'watashi mo gakusei desu',
              meaning: 'I am also a student',
              chapter: 1,
            },
          ],
        },
        {
          title: 'を (wo/o) - Direct Object Marker',
          description: 'Marks the direct object of a verb',
          type: 'list',
          items: [
            {
              japanese: 'コーヒーを　のみます',
              reading: 'koohii wo nomimasu',
              meaning: 'I drink coffee',
              chapter: 3,
            },
            {
              japanese: 'テレビを　みます',
              reading: 'terebi wo mimasu',
              meaning: 'I watch TV',
              chapter: 3,
            },
          ],
        },
        {
          title: 'で (de) - Location of Action / Means',
          description: 'Indicates where an action takes place or the means by which something is done',
          type: 'list',
          items: [
            {
              japanese: 'としょかんで　べんきょうします',
              reading: 'toshokan de benkyou shimasu',
              meaning: 'I study at the library',
              chapter: 3,
            },
            {
              japanese: 'バスで　いきます',
              reading: 'basu de ikimasu',
              meaning: 'I go by bus',
              chapter: 3,
            },
          ],
        },
        {
          title: 'に (ni) - Direction/Time/Location of Existence',
          description: 'Marks destination, time, or location of existence',
          type: 'list',
          items: [
            {
              japanese: 'うちに　かえります',
              reading: 'uchi ni kaerimasu',
              meaning: 'I return home',
              chapter: 3,
            },
            {
              japanese: 'ろくじに　おきます',
              reading: 'rokuji ni okimasu',
              meaning: 'I wake up at 6 o\'clock',
              chapter: 3,
            },
          ],
        },
      ],
    },
    {
      id: 'verbs',
      title: 'Verbs',
      icon: '⚡',
      cards: [
        {
          title: 'Ru-verbs (Group 2)',
          description: 'Verbs ending in -る that drop る and add -ます',
          type: 'conjugation',
          items: [
            {
              japanese: 'たべる → たべます',
              reading: 'taberu → tabemasu',
              meaning: 'to eat → eat(s)',
              chapter: 3,
            },
            {
              japanese: 'ねる → ねます',
              reading: 'neru → nemasu',
              meaning: 'to sleep → sleep(s)',
              chapter: 3,
            },
            {
              japanese: 'みる → みます',
              reading: 'miru → mimasu',
              meaning: 'to see/watch → see(s)/watch(es)',
              chapter: 3,
            },
          ],
        },
        {
          title: 'U-verbs (Group 1)',
          description: 'Verbs that change their final う sound to い and add -ます',
          type: 'conjugation',
          items: [
            {
              japanese: 'いく → いきます',
              reading: 'iku → ikimasu',
              meaning: 'to go → go(es)',
              chapter: 3,
            },
            {
              japanese: 'のむ → のみます',
              reading: 'nomu → nomimasu',
              meaning: 'to drink → drink(s)',
              chapter: 3,
            },
            {
              japanese: 'よむ → よみます',
              reading: 'yomu → yomimasu',
              meaning: 'to read → read(s)',
              chapter: 3,
            },
            {
              japanese: 'はなす → はなします',
              reading: 'hanasu → hanashimasu',
              meaning: 'to speak → speak(s)',
              chapter: 3,
            },
            {
              japanese: 'きく → ききます',
              reading: 'kiku → kikimasu',
              meaning: 'to listen/ask → listen(s)/ask(s)',
              chapter: 3,
            },
          ],
        },
        {
          title: 'Irregular Verbs',
          description: 'Special verbs with irregular conjugations',
          type: 'conjugation',
          items: [
            {
              japanese: 'する → します',
              reading: 'suru → shimasu',
              meaning: 'to do → do(es)',
              chapter: 3,
            },
            {
              japanese: 'くる → きます',
              reading: 'kuru → kimasu',
              meaning: 'to come → come(s)',
              chapter: 3,
            },
          ],
        },
      ],
    },
    {
      id: 'numbers',
      title: 'Numbers & Time',
      icon: '🔢',
      cards: [
        {
          title: 'Basic Numbers (0-10)',
          type: 'list',
          items: [
            { japanese: 'ゼロ/れい', reading: 'zero/rei', meaning: '0', chapter: 1 },
            { japanese: 'いち', reading: 'ichi', meaning: '1', chapter: 1 },
            { japanese: 'に', reading: 'ni', meaning: '2', chapter: 1 },
            { japanese: 'さん', reading: 'san', meaning: '3', chapter: 1 },
            { japanese: 'よん/し', reading: 'yon/shi', meaning: '4', chapter: 1 },
            { japanese: 'ご', reading: 'go', meaning: '5', chapter: 1 },
            { japanese: 'ろく', reading: 'roku', meaning: '6', chapter: 1 },
            { japanese: 'なな/しち', reading: 'nana/shichi', meaning: '7', chapter: 1 },
            { japanese: 'はち', reading: 'hachi', meaning: '8', chapter: 1 },
            { japanese: 'きゅう/く', reading: 'kyuu/ku', meaning: '9', chapter: 1 },
            { japanese: 'じゅう', reading: 'juu', meaning: '10', chapter: 1 },
          ],
        },
        {
          title: 'Time (Hours)',
          type: 'list',
          items: [
            { japanese: 'いちじ', reading: 'ichiji', meaning: '1 o\'clock', chapter: 1 },
            { japanese: 'にじ', reading: 'niji', meaning: '2 o\'clock', chapter: 1 },
            { japanese: 'さんじ', reading: 'sanji', meaning: '3 o\'clock', chapter: 1 },
            { japanese: 'よじ', reading: 'yoji', meaning: '4 o\'clock', chapter: 1 },
            { japanese: 'ごじ', reading: 'goji', meaning: '5 o\'clock', chapter: 1 },
            { japanese: 'ろくじ', reading: 'rokuji', meaning: '6 o\'clock', chapter: 1 },
            { japanese: 'しちじ', reading: 'shichiji', meaning: '7 o\'clock', chapter: 1 },
            { japanese: 'はちじ', reading: 'hachiji', meaning: '8 o\'clock', chapter: 1 },
            { japanese: 'くじ', reading: 'kuji', meaning: '9 o\'clock', chapter: 1 },
            { japanese: 'じゅうじ', reading: 'juuji', meaning: '10 o\'clock', chapter: 1 },
          ],
        },
      ],
    },
    {
      id: 'question-words',
      title: 'Question Words',
      icon: '❓',
      cards: [
        {
          title: 'Common Question Words',
          type: 'list',
          items: [
            {
              japanese: 'なに/なん',
              reading: 'nani/nan',
              meaning: 'what',
              chapter: 1,
              example: {
                japanese: 'これは　なんですか',
                reading: 'kore wa nan desu ka',
                translation: 'What is this?',
              },
            },
            {
              japanese: 'だれ',
              reading: 'dare',
              meaning: 'who',
              chapter: 1,
              example: {
                japanese: 'あのひとは　だれですか',
                reading: 'ano hito wa dare desu ka',
                translation: 'Who is that person?',
              },
            },
            {
              japanese: 'どこ',
              reading: 'doko',
              meaning: 'where',
              chapter: 2,
            },
            {
              japanese: 'いつ',
              reading: 'itsu',
              meaning: 'when',
              chapter: 3,
            },
            {
              japanese: 'なんじ',
              reading: 'nanji',
              meaning: 'what time',
              chapter: 1,
            },
          ],
        },
      ],
    },
  ],
};

