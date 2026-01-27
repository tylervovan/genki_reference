/**
 * =============================================================================
 * GENKI LESSONS DATA
 * =============================================================================
 *
 * PURPOSE: Contains all vocabulary, grammar, and kanji content from Genki I textbook.
 *
 * WHAT IT DOES:
 * - Exports genkiLessons array containing Topic objects for each lesson
 * - Each lesson contains multiple RefCards (vocabulary groups, grammar points, kanji)
 * - Each card contains ContentItems with Japanese text, readings, meanings
 *
 * WHY IT EXISTS:
 * Primary content data source for the application. Structured to match
 * Genki textbook lesson organization for intuitive study.
 *
 * HOW IT WORKS:
 * Data structure follows: Topic[] → RefCard[] → ContentItem[]
 *
 * STRUCTURE EXAMPLE:
 * {
 *   id: "lesson-1",
 *   title: "Lesson 1: New Friends",
 *   cards: [
 *     {
 *       id: "l1-vocab-school",  // ID pattern: l{n}-vocab/grammar-{topic}
 *       title: "School",
 *       chapter: 1,
 *       items: [
 *         {
 *           id: "l1-vocab-school-1",
 *           label: "college; university",  // English meaning
 *           value: "だいがく",              // Japanese text
 *           subValue: "daigaku",            // Reading/romaji
 *           chapter: 1
 *         }
 *       ]
 *     }
 *   ]
 * }
 *
 * CONSTRAINTS/GOTCHAS:
 * - LARGE FILE (~6000+ lines) - Do not load entirely into context
 * - All cards must have explicit contentType field for filtering
 * - Chapter numbers must be accurate for potential chapter filtering
 * - Content is based on Genki I 3rd Edition
 * - Kanji cards are at the end of each lesson (lessons 3-11)
 *
 * CARD CONTENT TYPES:
 * - contentType: "vocabulary" for vocab cards
 * - contentType: "grammar" for grammar cards
 * - contentType: "kanji" for kanji cards
 *
 * ID NAMING CONVENTIONS:
 * - Topic IDs: lesson-{n}
 * - Vocab card IDs: l{n}-vocab-{category}
 * - Grammar card IDs: l{n}-grammar or l{n}-grammar-{topic}
 * - Kanji card IDs: lesson-{n}-kanji
 *
 * DEPENDENCIES:
 * - Uses: Topic type from ./types
 * - Used by: app/data/topics.ts
 *
 * RELATED FILES:
 * - app/data/types.ts - Type definitions
 * - app/data/topics.ts - Exports topics for the app
 * =============================================================================
 */

import { Topic } from './types';

export const genkiLessons: Topic[] = [
  {
    "id": "lesson-1",
    "title": "Lesson 1: New Friends (あたらしいともだち)",
    "cards": [
      {
        "id": "l1-vocab-school",
        "contentType": "vocabulary",
        "title": "School",
        "chapter": 1,
        "items": [
          {
            "id": "l1-vocab-school-1",
            "label": "college; university",
            "value": "だいがく",
            "subValue": "daigaku",
            "chapter": 1
          },
          {
            "id": "l1-vocab-school-2",
            "label": "high school",
            "value": "こうこう",
            "subValue": "kookoo",
            "chapter": 1
          },
          {
            "id": "l1-vocab-school-3",
            "label": "student",
            "value": "がくせい",
            "subValue": "gakusee",
            "chapter": 1
          },
          {
            "id": "l1-vocab-school-4",
            "label": "college student",
            "value": "だいがくせい",
            "subValue": "daigakusee",
            "chapter": 1
          },
          {
            "id": "l1-vocab-school-5",
            "label": "international student",
            "value": "りゅうがくせい",
            "subValue": "ryuugakusee",
            "chapter": 1
          },
          {
            "id": "l1-vocab-school-6",
            "label": "teacher; Professor...",
            "value": "せんせい",
            "subValue": "sensee",
            "chapter": 1
          },
          {
            "id": "l1-vocab-school-7",
            "label": "...year student",
            "value": "〜ねんせい",
            "subValue": "...nensee",
            "chapter": 1
          },
          {
            "id": "l1-vocab-school-8",
            "label": "first-year student",
            "value": "いちねんせい",
            "subValue": "ichinensee",
            "chapter": 1
          },
          {
            "id": "l1-vocab-school-9",
            "label": "major",
            "value": "せんこう",
            "subValue": "senkoo",
            "chapter": 1
          }
        ]
      },
      {
        "id": "l1-vocab-person",
        "contentType": "vocabulary",
        "title": "Person",
        "chapter": 1,
        "items": [
          {
            "id": "l1-vocab-person-1",
            "label": "I",
            "value": "わたし",
            "subValue": "watashi",
            "chapter": 1
          },
          {
            "id": "l1-vocab-person-2",
            "label": "friend",
            "value": "ともだち",
            "subValue": "tomodachi",
            "chapter": 1
          },
          {
            "id": "l1-vocab-person-3",
            "label": "Mr./Ms....",
            "value": "〜さん",
            "subValue": "...san",
            "chapter": 1
          },
          {
            "id": "l1-vocab-person-4",
            "label": "...people (nationality)",
            "value": "〜じん",
            "subValue": "...jin",
            "chapter": 1
          },
          {
            "id": "l1-vocab-person-5",
            "label": "Japanese people",
            "value": "にほんじん",
            "subValue": "nihonjin",
            "chapter": 1
          }
        ]
      },
      {
        "id": "l1-vocab-time",
        "contentType": "vocabulary",
        "title": "Time",
        "chapter": 1,
        "items": [
          {
            "id": "l1-vocab-time-1",
            "label": "now",
            "value": "いま",
            "subValue": "ima",
            "chapter": 1
          },
          {
            "id": "l1-vocab-time-2",
            "label": "A.M.",
            "value": "ごぜん",
            "subValue": "gozen",
            "chapter": 1
          },
          {
            "id": "l1-vocab-time-3",
            "label": "P.M.",
            "value": "ごご",
            "subValue": "gogo",
            "chapter": 1
          },
          {
            "id": "l1-vocab-time-4",
            "label": "o'clock",
            "value": "〜じ",
            "subValue": "...ji",
            "chapter": 1
          },
          {
            "id": "l1-vocab-time-5",
            "label": "one o'clock",
            "value": "いちじ",
            "subValue": "ichiji",
            "chapter": 1
          },
          {
            "id": "l1-vocab-time-6",
            "label": "half",
            "value": "はん",
            "subValue": "han",
            "chapter": 1
          },
          {
            "id": "l1-vocab-time-7",
            "label": "half past two",
            "value": "にじはん",
            "subValue": "niji han",
            "chapter": 1
          }
        ]
      },
      {
        "id": "l1-vocab-place",
        "contentType": "vocabulary",
        "title": "Place",
        "chapter": 1,
        "items": [
          {
            "id": "l1-vocab-place-1",
            "label": "Japan",
            "value": "にほん",
            "subValue": "Nihon",
            "chapter": 1
          },
          {
            "id": "l1-vocab-place-2",
            "label": "U.S.A.",
            "value": "アメリカ",
            "subValue": "Amerika",
            "chapter": 1
          }
        ]
      },
      {
        "id": "l1-vocab-language",
        "contentType": "vocabulary",
        "title": "Language",
        "chapter": 1,
        "items": [
          {
            "id": "l1-vocab-language-1",
            "label": "...language",
            "value": "〜ご",
            "subValue": "...go",
            "chapter": 1
          },
          {
            "id": "l1-vocab-language-2",
            "label": "Japanese language",
            "value": "にほんご",
            "subValue": "nihongo",
            "chapter": 1
          }
        ]
      },
      {
        "id": "l1-vocab-age",
        "contentType": "vocabulary",
        "title": "Age",
        "chapter": 1,
        "items": [
          {
            "id": "l1-vocab-age-1",
            "label": "...years old",
            "value": "〜さい",
            "subValue": "...sai",
            "chapter": 1
          }
        ]
      },
      {
        "id": "l1-vocab-item",
        "contentType": "vocabulary",
        "title": "Item",
        "chapter": 1,
        "items": [
          {
            "id": "l1-vocab-item-1",
            "label": "telephone",
            "value": "でんわ",
            "subValue": "denwa",
            "chapter": 1
          }
        ]
      },
      {
        "id": "l1-vocab-suffix",
        "contentType": "vocabulary",
        "title": "Suffix",
        "chapter": 1,
        "items": [
          {
            "id": "l1-vocab-suffix-1",
            "label": "number...",
            "value": "〜ばん",
            "subValue": "...ban",
            "chapter": 1
          }
        ]
      },
      {
        "id": "l1-vocab-noun",
        "contentType": "vocabulary",
        "title": "Noun",
        "chapter": 1,
        "items": [
          {
            "id": "l1-vocab-noun-1",
            "label": "number",
            "value": "ばんごう",
            "subValue": "bangoo",
            "chapter": 1
          },
          {
            "id": "l1-vocab-noun-2",
            "label": "name",
            "value": "なまえ",
            "subValue": "namae",
            "chapter": 1
          },
          {
            "id": "l1-vocab-noun-3",
            "label": "what",
            "value": "なん/なに",
            "subValue": "nan/nani",
            "chapter": 1
          }
        ]
      },
      {
        "id": "l1-vocab-expression",
        "contentType": "vocabulary",
        "title": "Expression",
        "chapter": 1,
        "items": [
          {
            "id": "l1-vocab-expression-1",
            "label": "um...",
            "value": "あのう",
            "subValue": "anoo",
            "chapter": 1
          },
          {
            "id": "l1-vocab-expression-2",
            "label": "yes",
            "value": "はい",
            "subValue": "hai",
            "chapter": 1
          },
          {
            "id": "l1-vocab-expression-3",
            "label": "That's right.",
            "value": "そうです",
            "subValue": "soo desu",
            "chapter": 1
          },
          {
            "id": "l1-vocab-expression-4",
            "label": "I see.; Is that so?",
            "value": "そうですか",
            "subValue": "soo desu ka",
            "chapter": 1
          }
        ]
      },
      {
        "id": "l1-vocab-country",
        "contentType": "vocabulary",
        "title": "Country",
        "chapter": 1,
        "items": [
          {
            "id": "l1-vocab-country-1",
            "label": "Britain",
            "value": "イギリス",
            "subValue": "Igirisu",
            "chapter": 1
          },
          {
            "id": "l1-vocab-country-2",
            "label": "Australia",
            "value": "オーストラリア",
            "subValue": "Oosutoraria",
            "chapter": 1
          },
          {
            "id": "l1-vocab-country-3",
            "label": "Korea",
            "value": "かんこく",
            "subValue": "Kankoku",
            "chapter": 1
          },
          {
            "id": "l1-vocab-country-4",
            "label": "Canada",
            "value": "カナダ",
            "subValue": "Kanada",
            "chapter": 1
          },
          {
            "id": "l1-vocab-country-5",
            "label": "China",
            "value": "ちゅうごく",
            "subValue": "Chuugoku",
            "chapter": 1
          },
          {
            "id": "l1-vocab-country-6",
            "label": "India",
            "value": "インド",
            "subValue": "Indo",
            "chapter": 1
          },
          {
            "id": "l1-vocab-country-7",
            "label": "Egypt",
            "value": "エジプト",
            "subValue": "Ejiputo",
            "chapter": 1
          },
          {
            "id": "l1-vocab-country-8",
            "label": "Philippines",
            "value": "フィリピン",
            "subValue": "Firipin",
            "chapter": 1
          }
        ]
      },
      {
        "id": "l1-vocab-major",
        "contentType": "vocabulary",
        "title": "Major",
        "chapter": 1,
        "items": [
          {
            "id": "l1-vocab-major-1",
            "label": "Asian studies",
            "value": "アジアけんきゅう",
            "subValue": "ajia kenkyuu",
            "chapter": 1
          },
          {
            "id": "l1-vocab-major-2",
            "label": "economics",
            "value": "けいざい",
            "subValue": "keezai",
            "chapter": 1
          },
          {
            "id": "l1-vocab-major-3",
            "label": "engineering",
            "value": "こうがく",
            "subValue": "koogaku",
            "chapter": 1
          },
          {
            "id": "l1-vocab-major-4",
            "label": "international relations",
            "value": "こくさいかんけい",
            "subValue": "kokusaikankee",
            "chapter": 1
          },
          {
            "id": "l1-vocab-major-5",
            "label": "computer",
            "value": "コンピューター",
            "subValue": "konpyuutaa",
            "chapter": 1
          },
          {
            "id": "l1-vocab-major-6",
            "label": "politics",
            "value": "せいじ",
            "subValue": "seeji",
            "chapter": 1
          },
          {
            "id": "l1-vocab-major-7",
            "label": "biology",
            "value": "せいぶつがく",
            "subValue": "seebutsugaku",
            "chapter": 1
          },
          {
            "id": "l1-vocab-major-8",
            "label": "business",
            "value": "ビジネス",
            "subValue": "bijinesu",
            "chapter": 1
          },
          {
            "id": "l1-vocab-major-9",
            "label": "literature",
            "value": "ぶんがく",
            "subValue": "bungaku",
            "chapter": 1
          },
          {
            "id": "l1-vocab-major-10",
            "label": "history",
            "value": "れきし",
            "subValue": "rekishi",
            "chapter": 1
          }
        ]
      },
      {
        "id": "l1-vocab-occupation",
        "contentType": "vocabulary",
        "title": "Occupation",
        "chapter": 1,
        "items": [
          {
            "id": "l1-vocab-occupation-1",
            "label": "doctor",
            "value": "いしゃ",
            "subValue": "isha",
            "chapter": 1
          },
          {
            "id": "l1-vocab-occupation-2",
            "label": "office worker",
            "value": "かいしゃいん",
            "subValue": "kaishain",
            "chapter": 1
          },
          {
            "id": "l1-vocab-occupation-3",
            "label": "nurse",
            "value": "かんごし",
            "subValue": "kangoshi",
            "chapter": 1
          },
          {
            "id": "l1-vocab-occupation-4",
            "label": "high school student",
            "value": "こうこうせい",
            "subValue": "kookoosee",
            "chapter": 1
          },
          {
            "id": "l1-vocab-occupation-5",
            "label": "housewife",
            "value": "しゅふ",
            "subValue": "shufu",
            "chapter": 1
          },
          {
            "id": "l1-vocab-occupation-6",
            "label": "graduate student",
            "value": "だいがくいんせい",
            "subValue": "daigakuinsee",
            "chapter": 1
          },
          {
            "id": "l1-vocab-occupation-7",
            "label": "lawyer",
            "value": "べんごし",
            "subValue": "bengoshi",
            "chapter": 1
          }
        ]
      },
      {
        "id": "l1-vocab-family",
        "contentType": "vocabulary",
        "title": "Family",
        "chapter": 1,
        "items": [
          {
            "id": "l1-vocab-family-1",
            "label": "mother",
            "value": "おかあさん",
            "subValue": "okaasan",
            "chapter": 1
          },
          {
            "id": "l1-vocab-family-2",
            "label": "father",
            "value": "おとうさん",
            "subValue": "otoosan",
            "chapter": 1
          },
          {
            "id": "l1-vocab-family-3",
            "label": "older sister",
            "value": "おねえさん",
            "subValue": "oneesan",
            "chapter": 1
          },
          {
            "id": "l1-vocab-family-4",
            "label": "older brother",
            "value": "おにいさん",
            "subValue": "oniisan",
            "chapter": 1
          },
          {
            "id": "l1-vocab-family-5",
            "label": "younger sister",
            "value": "いもうと",
            "subValue": "imooto",
            "chapter": 1
          },
          {
            "id": "l1-vocab-family-6",
            "label": "younger brother",
            "value": "おとうと",
            "subValue": "otooto",
            "chapter": 1
          }
        ]
      },
      {
        "id": "l1-grammar-x-is-y",
        "contentType": "grammar",
        "title": "X is Y",
        "chapter": 1,
        "items": [
          {
            "id": "l1-grammar-1",
            "label": "X is Y",
            "value": "X wa Y desu",
            "subValue": "\"Wa\" marks the topic. \"Desu\" is the copula (is/am/are).",
            "chapter": 1,
            "example": {
              "japanese": "わたしはがくせいです。",
              "reading": "Watashi wa gakusee desu.",
              "translation": "I am a student."
            }
          }
        ]
      },
      {
        "id": "l1-grammar-question",
        "contentType": "grammar",
        "title": "Question Particle",
        "chapter": 1,
        "items": [
          {
            "id": "l1-grammar-2",
            "label": "Question Particle",
            "value": "...ka",
            "subValue": "Add \"ka\" to the end of a sentence to make it a question.",
            "chapter": 1,
            "example": {
              "japanese": "せんこうはなんですか。",
              "reading": "Senkoo wa nan desu ka.",
              "translation": "What is your major?"
            }
          }
        ]
      },
      {
        "id": "l1-grammar-possessive",
        "contentType": "grammar",
        "title": "Possessive/Modifier",
        "chapter": 1,
        "items": [
          {
            "id": "l1-grammar-3",
            "label": "Possessive/Modifier",
            "value": "Noun1 no Noun2",
            "subValue": "Connects two nouns. Noun2 is the main idea; Noun1 modifies it.",
            "chapter": 1,
            "example": {
              "japanese": "たけしさんのでんわばんごう",
              "reading": "Takeshi-san no denwa bangoo",
              "translation": "Takeshi's phone number"
            }
          }
        ]
      },
      {
        "id": "l1-grammar-time-age",
        "contentType": "grammar",
        "title": "Time / Age",
        "chapter": 1,
        "items": [
          {
            "id": "l1-grammar-4",
            "label": "Time",
            "value": "Nanji / Nansai",
            "subValue": "Question words for \"What time\" and \"How old\".",
            "chapter": 1,
            "example": {
              "japanese": "いまなんじですか。／なんさいですか。",
              "reading": "Ima nanji desu ka. / Nansai desu ka.",
              "translation": "What time is it now? / How old are you?"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "lesson-2",
    "title": "Lesson 2: Shopping (かいもの)",
    "cards": [
      {
        "id": "l2-vocab-demonstrative",
        "contentType": "vocabulary",
        "title": "Demonstrative",
        "chapter": 2,
        "items": [
          {
            "id": "l2-vocab-demonstrative-1",
            "label": "this one (near speaker)",
            "value": "これ",
            "subValue": "kore",
            "chapter": 2
          },
          {
            "id": "l2-vocab-demonstrative-2",
            "label": "that one (near listener)",
            "value": "それ",
            "subValue": "sore",
            "chapter": 2
          },
          {
            "id": "l2-vocab-demonstrative-3",
            "label": "that one (over there)",
            "value": "あれ",
            "subValue": "are",
            "chapter": 2
          },
          {
            "id": "l2-vocab-demonstrative-4",
            "label": "which one",
            "value": "どれ",
            "subValue": "dore",
            "chapter": 2
          },
          {
            "id": "l2-vocab-demonstrative-5",
            "label": "this... (+noun)",
            "value": "この",
            "subValue": "kono",
            "chapter": 2
          },
          {
            "id": "l2-vocab-demonstrative-6",
            "label": "that... (+noun)",
            "value": "その",
            "subValue": "sono",
            "chapter": 2
          },
          {
            "id": "l2-vocab-demonstrative-7",
            "label": "that... (over there) (+noun)",
            "value": "あの",
            "subValue": "ano",
            "chapter": 2
          },
          {
            "id": "l2-vocab-demonstrative-8",
            "label": "which... (+noun)",
            "value": "どの",
            "subValue": "dono",
            "chapter": 2
          }
        ]
      },
      {
        "id": "l2-vocab-place",
        "contentType": "vocabulary",
        "title": "Place",
        "chapter": 2,
        "items": [
          {
            "id": "l2-vocab-place-1",
            "label": "here",
            "value": "ここ",
            "subValue": "koko",
            "chapter": 2
          },
          {
            "id": "l2-vocab-place-2",
            "label": "there",
            "value": "そこ",
            "subValue": "soko",
            "chapter": 2
          },
          {
            "id": "l2-vocab-place-3",
            "label": "over there",
            "value": "あそこ",
            "subValue": "asoko",
            "chapter": 2
          },
          {
            "id": "l2-vocab-place-4",
            "label": "where",
            "value": "どこ",
            "subValue": "doko",
            "chapter": 2
          },
          {
            "id": "l2-vocab-place-5",
            "label": "bank",
            "value": "ぎんこう",
            "subValue": "ginkoo",
            "chapter": 2
          },
          {
            "id": "l2-vocab-place-6",
            "label": "convenience store",
            "value": "コンビニ",
            "subValue": "konbini",
            "chapter": 2
          },
          {
            "id": "l2-vocab-place-7",
            "label": "toilet; restroom",
            "value": "トイレ",
            "subValue": "toire",
            "chapter": 2
          },
          {
            "id": "l2-vocab-place-8",
            "label": "library",
            "value": "としょかん",
            "subValue": "toshokan",
            "chapter": 2
          },
          {
            "id": "l2-vocab-place-9",
            "label": "post office",
            "value": "ゆうびんきょく",
            "subValue": "yuubinkyoku",
            "chapter": 2
          }
        ]
      },
      {
        "id": "l2-vocab-person",
        "contentType": "vocabulary",
        "title": "Person",
        "chapter": 2,
        "items": [
          {
            "id": "l2-vocab-person-1",
            "label": "who",
            "value": "だれ",
            "subValue": "dare",
            "chapter": 2
          }
        ]
      },
      {
        "id": "l2-vocab-food",
        "contentType": "vocabulary",
        "title": "Food",
        "chapter": 2,
        "items": [
          {
            "id": "l2-vocab-food-1",
            "label": "delicious",
            "value": "おいしい",
            "subValue": "oishii",
            "chapter": 2
          },
          {
            "id": "l2-vocab-food-2",
            "label": "fish",
            "value": "さかな",
            "subValue": "sakana",
            "chapter": 2
          },
          {
            "id": "l2-vocab-food-3",
            "label": "pork cutlet",
            "value": "とんかつ",
            "subValue": "tonkatsu",
            "chapter": 2
          },
          {
            "id": "l2-vocab-food-4",
            "label": "meat",
            "value": "にく",
            "subValue": "niku",
            "chapter": 2
          },
          {
            "id": "l2-vocab-food-5",
            "label": "menu",
            "value": "メニュー",
            "subValue": "menyuu",
            "chapter": 2
          },
          {
            "id": "l2-vocab-food-6",
            "label": "vegetable",
            "value": "やさい",
            "subValue": "yasai",
            "chapter": 2
          }
        ]
      },
      {
        "id": "l2-vocab-item",
        "contentType": "vocabulary",
        "title": "Item",
        "chapter": 2,
        "items": [
          {
            "id": "l2-vocab-item-1",
            "label": "umbrella",
            "value": "かさ",
            "subValue": "kasa",
            "chapter": 2
          },
          {
            "id": "l2-vocab-item-2",
            "label": "bag",
            "value": "かばん",
            "subValue": "kaban",
            "chapter": 2
          },
          {
            "id": "l2-vocab-item-3",
            "label": "shoes",
            "value": "くつ",
            "subValue": "kutsu",
            "chapter": 2
          },
          {
            "id": "l2-vocab-item-4",
            "label": "wallet",
            "value": "さいふ",
            "subValue": "saifu",
            "chapter": 2
          },
          {
            "id": "l2-vocab-item-5",
            "label": "jeans",
            "value": "ジーンズ",
            "subValue": "jiinzu",
            "chapter": 2
          },
          {
            "id": "l2-vocab-item-6",
            "label": "bicycle",
            "value": "じてんしゃ",
            "subValue": "jitensha",
            "chapter": 2
          },
          {
            "id": "l2-vocab-item-7",
            "label": "newspaper",
            "value": "しんぶん",
            "subValue": "shinbun",
            "chapter": 2
          },
          {
            "id": "l2-vocab-item-8",
            "label": "smartphone; mobile",
            "value": "スマホ",
            "subValue": "sumaho",
            "chapter": 2
          },
          {
            "id": "l2-vocab-item-9",
            "label": "T-shirt",
            "value": "Tシャツ",
            "subValue": "tiishatsu",
            "chapter": 2
          },
          {
            "id": "l2-vocab-item-10",
            "label": "watch; clock",
            "value": "とけい",
            "subValue": "tokee",
            "chapter": 2
          },
          {
            "id": "l2-vocab-item-11",
            "label": "notebook",
            "value": "ノート",
            "subValue": "nooto",
            "chapter": 2
          },
          {
            "id": "l2-vocab-item-12",
            "label": "pen",
            "value": "ペン",
            "subValue": "pen",
            "chapter": 2
          },
          {
            "id": "l2-vocab-item-13",
            "label": "hat; cap",
            "value": "ぼうし",
            "subValue": "booshi",
            "chapter": 2
          },
          {
            "id": "l2-vocab-item-14",
            "label": "book",
            "value": "ほん",
            "subValue": "hon",
            "chapter": 2
          }
        ]
      },
      {
        "id": "l2-vocab-major",
        "contentType": "vocabulary",
        "title": "Major",
        "chapter": 2,
        "items": [
          {
            "id": "l2-vocab-major-1",
            "label": "English (language)",
            "value": "えいご",
            "subValue": "eego",
            "chapter": 2
          }
        ]
      },
      {
        "id": "l2-vocab-money",
        "contentType": "vocabulary",
        "title": "Money",
        "chapter": 2,
        "items": [
          {
            "id": "l2-vocab-money-1",
            "label": "how much",
            "value": "いくら",
            "subValue": "ikura",
            "chapter": 2
          },
          {
            "id": "l2-vocab-money-2",
            "label": "...yen",
            "value": "〜えん",
            "subValue": "...en",
            "chapter": 2
          }
        ]
      },
      {
        "id": "l2-vocab-adjective",
        "contentType": "vocabulary",
        "title": "Adjective",
        "chapter": 2,
        "items": [
          {
            "id": "l2-vocab-adjective-1",
            "label": "expensive; high",
            "value": "たかい",
            "subValue": "takai",
            "chapter": 2
          }
        ]
      },
      {
        "id": "l2-vocab-expression",
        "contentType": "vocabulary",
        "title": "Expression",
        "chapter": 2,
        "items": [
          {
            "id": "l2-vocab-expression-1",
            "label": "Welcome (to our store).",
            "value": "いらっしゃいませ",
            "subValue": "irasshaimase",
            "chapter": 2
          },
          {
            "id": "l2-vocab-expression-2",
            "label": "..., please.",
            "value": "(~を)おねがいします",
            "subValue": "...o onegaishimasu",
            "chapter": 2
          },
          {
            "id": "l2-vocab-expression-3",
            "label": "Please give me...",
            "value": "(~を)ください",
            "subValue": "...o kudasai",
            "chapter": 2
          },
          {
            "id": "l2-vocab-expression-4",
            "label": "then...; if that is the case...",
            "value": "じゃあ",
            "subValue": "jaa",
            "chapter": 2
          },
          {
            "id": "l2-vocab-expression-5",
            "label": "Please.; Here it is.",
            "value": "どうぞ",
            "subValue": "doozo",
            "chapter": 2
          },
          {
            "id": "l2-vocab-expression-6",
            "label": "Thank you.",
            "value": "どうも",
            "subValue": "doomo",
            "chapter": 2
          }
        ]
      },
      {
        "id": "l2-grammar-demonstrative-noun",
        "contentType": "grammar",
        "title": "Demonstratives (Noun)",
        "chapter": 2,
        "items": [
          {
            "id": "l2-grammar-1",
            "label": "Demonstratives (Noun)",
            "value": "Kore / Sore / Are",
            "subValue": "\"This one\", \"That one\", \"That one over there\".",
            "chapter": 2,
            "example": {
              "japanese": "それはわたしのペンです。",
              "reading": "Sore wa watashi no pen desu.",
              "translation": "That is my pen."
            }
          }
        ]
      },
      {
        "id": "l2-grammar-demonstrative-det",
        "contentType": "grammar",
        "title": "Demonstratives (Det)",
        "chapter": 2,
        "items": [
          {
            "id": "l2-grammar-2",
            "label": "Demonstratives (Det)",
            "value": "Kono / Sono / Ano + Noun",
            "subValue": "\"This X\", \"That X\", \"That X over there\".",
            "chapter": 2,
            "example": {
              "japanese": "そのとけいはさんぜんえんです。",
              "reading": "Sono tokee wa sanzen-en desu.",
              "translation": "That watch is 3,000 yen."
            }
          }
        ]
      },
      {
        "id": "l2-grammar-place",
        "contentType": "grammar",
        "title": "Place Words",
        "chapter": 2,
        "items": [
          {
            "id": "l2-grammar-3",
            "label": "Place Words",
            "value": "Koko / Soko / Asoko",
            "subValue": "\"Here\", \"There\", \"Over there\".",
            "chapter": 2,
            "example": {
              "japanese": "トイレはあそこです。",
              "reading": "Toire wa asoko desu.",
              "translation": "The toilet is over there."
            }
          }
        ]
      },
      {
        "id": "l2-grammar-whose",
        "contentType": "grammar",
        "title": "Whose",
        "chapter": 2,
        "items": [
          {
            "id": "l2-grammar-4",
            "label": "Whose",
            "value": "Dare no Noun",
            "subValue": "\"Whose X\".",
            "chapter": 2,
            "example": {
              "japanese": "これはだれのかばんですか。",
              "reading": "Kore wa dare no kaban desu ka.",
              "translation": "Whose bag is this?"
            }
          }
        ]
      },
      {
        "id": "l2-grammar-mo",
        "contentType": "grammar",
        "title": "Particle Mo",
        "chapter": 2,
        "items": [
          {
            "id": "l2-grammar-5",
            "label": "Particle Mo",
            "value": "Noun + mo",
            "subValue": "\"Noun also/too\". Replaces \"wa\".",
            "chapter": 2,
            "example": {
              "japanese": "みちこさんもにほんじんです。",
              "reading": "Michiko-san mo Nihonjin desu.",
              "translation": "Michiko is Japanese, too."
            }
          }
        ]
      },
      {
        "id": "l2-grammar-negation",
        "contentType": "grammar",
        "title": "Negation",
        "chapter": 2,
        "items": [
          {
            "id": "l2-grammar-6",
            "label": "Negation",
            "value": "Noun + ja nai desu",
            "subValue": "\"Is not X\". (Formal: de wa arimasen).",
            "chapter": 2,
            "example": {
              "japanese": "やまださんはがくせいじゃないです。",
              "reading": "Yamada-san wa gakusee ja nai desu.",
              "translation": "Mr. Yamada is not a student."
            }
          }
        ]
      },
      {
        "id": "l2-grammar-tags",
        "contentType": "grammar",
        "title": "Sentence Tags",
        "chapter": 2,
        "items": [
          {
            "id": "l2-grammar-7",
            "label": "Sentence Tag",
            "value": "~ne",
            "subValue": "Seeking confirmation (\"right?\").",
            "chapter": 2,
            "example": {
              "japanese": "このほんはたかいですね。",
              "reading": "Kono hon wa takai desu ne.",
              "translation": "This book is expensive, isn't it?"
            }
          },
          {
            "id": "l2-grammar-8",
            "label": "Sentence Tag",
            "value": "~yo",
            "subValue": "Giving assurance/new info (\"I tell you\").",
            "chapter": 2,
            "example": {
              "japanese": "おいしいですよ。",
              "reading": "Oishii desu yo.",
              "translation": "It is delicious, I tell you."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "lesson-3",
    "title": "Lesson 3: Making a Date (デートの約束)",
    "cards": [
      {
        "id": "l3-vocab-entertainment",
        "contentType": "vocabulary",
        "title": "Entertainment",
        "chapter": 3,
        "items": [
          {
            "id": "l3-vocab-entertainment-1",
            "label": "movie",
            "value": "えいが",
            "subValue": "eiga",
            "chapter": 3
          },
          {
            "id": "l3-vocab-entertainment-2",
            "label": "music",
            "value": "おんがく",
            "subValue": "ongaku",
            "chapter": 3
          },
          {
            "id": "l3-vocab-entertainment-3",
            "label": "magazine",
            "value": "ざっし",
            "subValue": "zasshi",
            "chapter": 3
          },
          {
            "id": "l3-vocab-entertainment-4",
            "label": "sports",
            "value": "スポーツ",
            "subValue": "supootsu",
            "chapter": 3
          },
          {
            "id": "l3-vocab-entertainment-5",
            "label": "date (romantic)",
            "value": "デート",
            "subValue": "deeto",
            "chapter": 3
          },
          {
            "id": "l3-vocab-entertainment-6",
            "label": "tennis",
            "value": "テニス",
            "subValue": "tenisu",
            "chapter": 3
          },
          {
            "id": "l3-vocab-entertainment-7",
            "label": "TV",
            "value": "テレビ",
            "subValue": "terebi",
            "chapter": 3
          }
        ]
      },
      {
        "id": "l3-vocab-food",
        "contentType": "vocabulary",
        "title": "Food",
        "chapter": 3,
        "items": [
          {
            "id": "l3-vocab-food-1",
            "label": "ice cream",
            "value": "アイスクリーム",
            "subValue": "aisukuriimu",
            "chapter": 3
          },
          {
            "id": "l3-vocab-food-2",
            "label": "hamburger",
            "value": "ハンバーガー",
            "subValue": "hanbaagaa",
            "chapter": 3
          },
          {
            "id": "l3-vocab-food-3",
            "label": "sake; alcoholic drink",
            "value": "おさけ",
            "subValue": "osake",
            "chapter": 3
          },
          {
            "id": "l3-vocab-food-4",
            "label": "green tea",
            "value": "おちゃ",
            "subValue": "ocha",
            "chapter": 3
          },
          {
            "id": "l3-vocab-food-5",
            "label": "coffee",
            "value": "コーヒー",
            "subValue": "koohii",
            "chapter": 3
          },
          {
            "id": "l3-vocab-food-6",
            "label": "water",
            "value": "みず",
            "subValue": "mizu",
            "chapter": 3
          },
          {
            "id": "l3-vocab-food-7",
            "label": "breakfast",
            "value": "あさごはん",
            "subValue": "asagohan",
            "chapter": 3
          },
          {
            "id": "l3-vocab-food-8",
            "label": "lunch",
            "value": "ひるごはん",
            "subValue": "hirugohan",
            "chapter": 3
          },
          {
            "id": "l3-vocab-food-9",
            "label": "dinner",
            "value": "ばんごはん",
            "subValue": "bangohan",
            "chapter": 3
          }
        ]
      },
      {
        "id": "l3-vocab-place",
        "contentType": "vocabulary",
        "title": "Place",
        "chapter": 3,
        "items": [
          {
            "id": "l3-vocab-place-1",
            "label": "home; house",
            "value": "いえ",
            "subValue": "ie",
            "chapter": 3
          },
          {
            "id": "l3-vocab-place-2",
            "label": "home; house; my place",
            "value": "うち",
            "subValue": "uchi",
            "chapter": 3
          },
          {
            "id": "l3-vocab-place-3",
            "label": "school",
            "value": "がっこう",
            "subValue": "gakkoo",
            "chapter": 3
          },
          {
            "id": "l3-vocab-place-4",
            "label": "cafe",
            "value": "カフェ",
            "subValue": "kafe",
            "chapter": 3
          }
        ]
      },
      {
        "id": "l3-vocab-time",
        "contentType": "vocabulary",
        "title": "Time",
        "chapter": 3,
        "items": [
          {
            "id": "l3-vocab-time-1",
            "label": "tomorrow",
            "value": "あした",
            "subValue": "ashita",
            "chapter": 3
          },
          {
            "id": "l3-vocab-time-2",
            "label": "today",
            "value": "きょう",
            "subValue": "kyoo",
            "chapter": 3
          },
          {
            "id": "l3-vocab-time-3",
            "label": "morning",
            "value": "あさ",
            "subValue": "asa",
            "chapter": 3
          },
          {
            "id": "l3-vocab-time-4",
            "label": "tonight",
            "value": "こんばん",
            "subValue": "konban",
            "chapter": 3
          },
          {
            "id": "l3-vocab-time-5",
            "label": "every day",
            "value": "まいにち",
            "subValue": "mainichi",
            "chapter": 3
          },
          {
            "id": "l3-vocab-time-6",
            "label": "every night",
            "value": "まいばん",
            "subValue": "maiban",
            "chapter": 3
          },
          {
            "id": "l3-vocab-time-7",
            "label": "weekend",
            "value": "しゅうまつ",
            "subValue": "shuumatsu",
            "chapter": 3
          },
          {
            "id": "l3-vocab-time-8",
            "label": "Saturday",
            "value": "どようび",
            "subValue": "doyoobi",
            "chapter": 3
          },
          {
            "id": "l3-vocab-time-9",
            "label": "Sunday",
            "value": "にちようび",
            "subValue": "nichiyoobi",
            "chapter": 3
          },
          {
            "id": "l3-vocab-time-10",
            "label": "when",
            "value": "いつ",
            "subValue": "itsu",
            "chapter": 3
          },
          {
            "id": "l3-vocab-time-11",
            "label": "at about...",
            "value": "〜ごろ",
            "subValue": "...goro",
            "chapter": 3
          }
        ]
      },
      {
        "id": "l3-vocab-verb-(u)",
        "contentType": "vocabulary",
        "title": "Verb (U)",
        "chapter": 3,
        "items": [
          {
            "id": "l3-vocab-verb-(u)-1",
            "label": "to go",
            "value": "いく",
            "subValue": "iku",
            "chapter": 3
          },
          {
            "id": "l3-vocab-verb-(u)-2",
            "label": "to go back; to return",
            "value": "かえる",
            "subValue": "kaeru",
            "chapter": 3
          },
          {
            "id": "l3-vocab-verb-(u)-3",
            "label": "to listen; to hear",
            "value": "きく",
            "subValue": "kiku",
            "chapter": 3
          },
          {
            "id": "l3-vocab-verb-(u)-4",
            "label": "to drink",
            "value": "のむ",
            "subValue": "nomu",
            "chapter": 3
          },
          {
            "id": "l3-vocab-verb-(u)-5",
            "label": "to speak; to talk",
            "value": "はなす",
            "subValue": "hanasu",
            "chapter": 3
          },
          {
            "id": "l3-vocab-verb-(u)-6",
            "label": "to read",
            "value": "よむ",
            "subValue": "yomu",
            "chapter": 3
          }
        ]
      },
      {
        "id": "l3-vocab-verb-(ru)",
        "contentType": "vocabulary",
        "title": "Verb (Ru)",
        "chapter": 3,
        "items": [
          {
            "id": "l3-vocab-verb-(ru)-1",
            "label": "to get up",
            "value": "おきる",
            "subValue": "okiru",
            "chapter": 3
          },
          {
            "id": "l3-vocab-verb-(ru)-2",
            "label": "to eat",
            "value": "たべる",
            "subValue": "taberu",
            "chapter": 3
          },
          {
            "id": "l3-vocab-verb-(ru)-3",
            "label": "to sleep",
            "value": "ねる",
            "subValue": "neru",
            "chapter": 3
          },
          {
            "id": "l3-vocab-verb-(ru)-4",
            "label": "to see; to watch",
            "value": "みる",
            "subValue": "miru",
            "chapter": 3
          }
        ]
      },
      {
        "id": "l3-vocab-verb-(irr)",
        "contentType": "vocabulary",
        "title": "Verb (Irr)",
        "chapter": 3,
        "items": [
          {
            "id": "l3-vocab-verb-(irr)-1",
            "label": "to come",
            "value": "くる",
            "subValue": "kuru",
            "chapter": 3
          },
          {
            "id": "l3-vocab-verb-(irr)-2",
            "label": "to do",
            "value": "する",
            "subValue": "suru",
            "chapter": 3
          },
          {
            "id": "l3-vocab-verb-(irr)-3",
            "label": "to study",
            "value": "べんきょうする",
            "subValue": "benkyoosuru",
            "chapter": 3
          }
        ]
      },
      {
        "id": "l3-vocab-adjective",
        "contentType": "vocabulary",
        "title": "Adjective",
        "chapter": 3,
        "items": [
          {
            "id": "l3-vocab-adjective-1",
            "label": "good",
            "value": "いい",
            "subValue": "ii",
            "chapter": 3
          },
          {
            "id": "l3-vocab-adjective-2",
            "label": "early",
            "value": "はやい",
            "subValue": "hayai",
            "chapter": 3
          }
        ]
      },
      {
        "id": "l3-vocab-adverb",
        "contentType": "vocabulary",
        "title": "Adverb",
        "chapter": 3,
        "items": [
          {
            "id": "l3-vocab-adverb-1",
            "label": "not much (+negative)",
            "value": "あまり",
            "subValue": "amari",
            "chapter": 3
          },
          {
            "id": "l3-vocab-adverb-2",
            "label": "not at all (+negative)",
            "value": "ぜんぜん",
            "subValue": "zenzen",
            "chapter": 3
          },
          {
            "id": "l3-vocab-adverb-3",
            "label": "usually",
            "value": "たいてい",
            "subValue": "taitei",
            "chapter": 3
          },
          {
            "id": "l3-vocab-adverb-4",
            "label": "a little",
            "value": "ちょっと",
            "subValue": "chotto",
            "chapter": 3
          },
          {
            "id": "l3-vocab-adverb-5",
            "label": "sometimes",
            "value": "ときどき",
            "subValue": "tokidoki",
            "chapter": 3
          },
          {
            "id": "l3-vocab-adverb-6",
            "label": "often; much",
            "value": "よく",
            "subValue": "yoku",
            "chapter": 3
          }
        ]
      },
      {
        "id": "l3-vocab-expression",
        "contentType": "vocabulary",
        "title": "Expression",
        "chapter": 3,
        "items": [
          {
            "id": "l3-vocab-expression-1",
            "label": "That's right.; Let me see.",
            "value": "そうですね",
            "subValue": "soo desu ne",
            "chapter": 3
          },
          {
            "id": "l3-vocab-expression-2",
            "label": "but",
            "value": "でも",
            "subValue": "demo",
            "chapter": 3
          },
          {
            "id": "l3-vocab-expression-3",
            "label": "How about...?; How is...?",
            "value": "どうですか",
            "subValue": "doo desu ka",
            "chapter": 3
          }
        ]
      },
      {
        "id": "l3-grammar-conjugation",
        "contentType": "grammar",
        "title": "Verb Conjugation",
        "chapter": 3,
        "items": [
          {
            "id": "l3-grammar-1",
            "label": "Verb Conjugation",
            "value": "-",
            "subValue": "Verbs are split into Ru-verbs, U-verbs, and Irregular verbs.",
            "chapter": 3,
            "example": {
              "japanese": "わたしはテニスをします。",
              "reading": "Watashi wa tenisu o shimasu.",
              "translation": "I play tennis."
            }
          },
          {
            "id": "l3-grammar-2",
            "label": "Ru-Verbs",
            "value": "Stem + ます",
            "subValue": "End in -eru or -iru. Drop -ru and add -masu/-masen.",
            "chapter": 3
          },
          {
            "id": "l3-grammar-3",
            "label": "U-Verbs",
            "value": "Stem(i) + ます",
            "subValue": "End in u-vowel sounds. Change 'u' to 'i' and add -masu/-masen.",
            "chapter": 3
          },
          {
            "id": "l3-grammar-4",
            "label": "Irregular Verbs",
            "value": "します / きます",
            "subValue": "\"Suru\" becomes \"shimasu\". \"Kuru\" becomes \"kimasu\".",
            "chapter": 3
          }
        ]
      },
      {
        "id": "l3-grammar-particle-o",
        "contentType": "grammar",
        "title": "Particle O (を)",
        "chapter": 3,
        "items": [
          {
            "id": "l3-grammar-5",
            "label": "Particle O (を)",
            "value": "Noun を Verb",
            "subValue": "Marks the direct object of an action.",
            "chapter": 3,
            "example": {
              "japanese": "コーヒーをのみます。",
              "reading": "Koohii o nomimasu.",
              "translation": "I drink coffee."
            }
          }
        ]
      },
      {
        "id": "l3-grammar-particle-de",
        "contentType": "grammar",
        "title": "Particle De (で)",
        "chapter": 3,
        "items": [
          {
            "id": "l3-grammar-6",
            "label": "Particle De (で)",
            "value": "Place で Verb",
            "subValue": "Marks the location where an action takes place.",
            "chapter": 3,
            "example": {
              "japanese": "カフェでハンバーガーをたべます。",
              "reading": "Kafe de hanbaagaa o tabemasu.",
              "translation": "I eat a hamburger at a cafe."
            }
          }
        ]
      },
      {
        "id": "l3-grammar-particle-ni-he",
        "contentType": "grammar",
        "title": "Particle Ni (に) / He (へ)",
        "chapter": 3,
        "items": [
          {
            "id": "l3-grammar-7",
            "label": "Particle Ni (に)",
            "value": "Goal に / Time に",
            "subValue": "Marks the goal of movement (to) OR specific time (at).",
            "chapter": 3,
            "example": {
              "japanese": "しゅうまつにきょうとにいきます。",
              "reading": "Shuumatsu ni Kyooto ni ikimasu.",
              "translation": "I will go to Kyoto on the weekend."
            }
          },
          {
            "id": "l3-grammar-8",
            "label": "Particle He (へ)",
            "value": "Goal へ 行く",
            "subValue": "Marks the direction of movement (to). Pronounced \"e\".",
            "chapter": 3
          }
        ]
      },
      {
        "id": "l3-grammar-time-reference",
        "contentType": "grammar",
        "title": "Time Reference",
        "chapter": 3,
        "items": [
          {
            "id": "l3-grammar-9",
            "label": "Time Reference",
            "value": "Time に Verb",
            "subValue": "Use \"ni\" for specific dates/times. Do not use \"ni\" for relative time (today, tomorrow, when).",
            "chapter": 3,
            "example": {
              "japanese": "あした、がっこうにいきません。",
              "reading": "Ashita, gakkoo ni ikimasen.",
              "translation": "I will not go to school tomorrow. (No particle for \"tomorrow\")"
            }
          }
        ]
      },
      {
        "id": "l3-grammar-invitation",
        "contentType": "grammar",
        "title": "Invitation",
        "chapter": 3,
        "items": [
          {
            "id": "l3-grammar-10",
            "label": "Invitation",
            "value": "Verb(ません)か",
            "subValue": "~masenka",
            "chapter": 3,
            "example": {
              "japanese": "いっしょにえいがをみませんか。",
              "reading": "Issho ni eiga o mimasen ka.",
              "translation": "Won't you watch a movie with me?"
            }
          }
        ]
      },
      {
        "id": "l3-grammar-frequency-adverbs",
        "contentType": "grammar",
        "title": "Frequency Adverbs",
        "chapter": 3,
        "items": [
          {
            "id": "l3-grammar-11",
            "label": "Frequency Adverbs",
            "value": "Adverb + Verb",
            "subValue": "Words like \"yoku\", \"tokidoki\" usually appear before the object or verb.",
            "chapter": 3,
            "example": {
              "japanese": "わたしはときどきざっしをよみます。",
              "reading": "Watashi wa tokidoki zasshi o yomimasu.",
              "translation": "I sometimes read magazines."
            }
          }
        ]
      },
      {
        "id": "l3-grammar-topic-wa",
        "contentType": "grammar",
        "title": "Topic Particle Wa (は)",
        "chapter": 3,
        "items": [
          {
            "id": "l3-grammar-12",
            "label": "Topic Particle Wa (は)",
            "value": "Topic は",
            "subValue": "Can mark time or other elements as the topic.",
            "chapter": 3,
            "example": {
              "japanese": "ばんごはんはなにをたべますか。",
              "reading": "Bangohan wa nani o tabemasu ka.",
              "translation": "As for dinner, what will you eat?"
            }
          }
        ]
      },
      {
        "id": "lesson-3-kanji",
        "contentType": "kanji",
        "title": "Lesson 3 Kanji: Numbers and Time",
        "chapter": 3,
        "items": [
          { "id": "lesson-3-kanji-1", "label": "one (thing)", "value": "一つ", "subValue": "ひとつ", "chapter": 3 },
          { "id": "lesson-3-kanji-2", "label": "one o'clock", "value": "一時", "subValue": "いちじ", "chapter": 3 },
          { "id": "lesson-3-kanji-3", "label": "first-year student", "value": "一年生", "subValue": "いちねんせい", "chapter": 3 },
          { "id": "lesson-3-kanji-4", "label": "two (things)", "value": "二つ", "subValue": "ふたつ", "chapter": 3 },
          { "id": "lesson-3-kanji-5", "label": "two o'clock", "value": "二時", "subValue": "にじ", "chapter": 3 },
          { "id": "lesson-3-kanji-6", "label": "second-year student", "value": "二年生", "subValue": "にねんせい", "chapter": 3 },
          { "id": "lesson-3-kanji-7", "label": "three (things)", "value": "三つ", "subValue": "みっつ", "chapter": 3 },
          { "id": "lesson-3-kanji-8", "label": "three o'clock", "value": "三時", "subValue": "さんじ", "chapter": 3 },
          { "id": "lesson-3-kanji-9", "label": "March", "value": "三月", "subValue": "さんがつ", "chapter": 3 },
          { "id": "lesson-3-kanji-10", "label": "four (things)", "value": "四つ", "subValue": "よっつ", "chapter": 3 },
          { "id": "lesson-3-kanji-11", "label": "four o'clock", "value": "四時", "subValue": "よじ", "chapter": 3 },
          { "id": "lesson-3-kanji-12", "label": "April", "value": "四月", "subValue": "しがつ", "chapter": 3 },
          { "id": "lesson-3-kanji-13", "label": "five (things)", "value": "五つ", "subValue": "いつつ", "chapter": 3 },
          { "id": "lesson-3-kanji-14", "label": "five o'clock", "value": "五時", "subValue": "ごじ", "chapter": 3 },
          { "id": "lesson-3-kanji-15", "label": "May", "value": "五月", "subValue": "ごがつ", "chapter": 3 },
          { "id": "lesson-3-kanji-16", "label": "six (things)", "value": "六つ", "subValue": "むっつ", "chapter": 3 },
          { "id": "lesson-3-kanji-17", "label": "six o'clock", "value": "六時", "subValue": "ろくじ", "chapter": 3 },
          { "id": "lesson-3-kanji-18", "label": "six hundred", "value": "六百", "subValue": "ろっぴゃく", "chapter": 3 },
          { "id": "lesson-3-kanji-19", "label": "seven (things)", "value": "七つ", "subValue": "ななつ", "chapter": 3 },
          { "id": "lesson-3-kanji-20", "label": "seven o'clock", "value": "七時", "subValue": "しちじ", "chapter": 3 },
          { "id": "lesson-3-kanji-21", "label": "July", "value": "七月", "subValue": "しちがつ", "chapter": 3 },
          { "id": "lesson-3-kanji-22", "label": "eight (things)", "value": "八つ", "subValue": "やっつ", "chapter": 3 },
          { "id": "lesson-3-kanji-23", "label": "eight o'clock", "value": "八時", "subValue": "はちじ", "chapter": 3 },
          { "id": "lesson-3-kanji-24", "label": "eight hundred", "value": "八百", "subValue": "はっぴゃく", "chapter": 3 },
          { "id": "lesson-3-kanji-25", "label": "nine (things)", "value": "九つ", "subValue": "ここのつ", "chapter": 3 },
          { "id": "lesson-3-kanji-26", "label": "nine o'clock", "value": "九時", "subValue": "くじ", "chapter": 3 },
          { "id": "lesson-3-kanji-27", "label": "September", "value": "九月", "subValue": "くがつ", "chapter": 3 },
          { "id": "lesson-3-kanji-28", "label": "ten (things)", "value": "十", "subValue": "とお", "chapter": 3 },
          { "id": "lesson-3-kanji-29", "label": "ten o'clock", "value": "十時", "subValue": "じゅうじ", "chapter": 3 },
          { "id": "lesson-3-kanji-30", "label": "October", "value": "十月", "subValue": "じゅうがつ", "chapter": 3 },
          { "id": "lesson-3-kanji-31", "label": "hundred", "value": "百", "subValue": "ひゃく", "chapter": 3 },
          { "id": "lesson-3-kanji-32", "label": "three hundred", "value": "三百", "subValue": "さんびゃく", "chapter": 3 },
          { "id": "lesson-3-kanji-33", "label": "thousand", "value": "千", "subValue": "せん", "chapter": 3 },
          { "id": "lesson-3-kanji-34", "label": "three thousand", "value": "三千", "subValue": "さんぜん", "chapter": 3 },
          { "id": "lesson-3-kanji-35", "label": "eight thousand", "value": "八千", "subValue": "はっせん", "chapter": 3 },
          { "id": "lesson-3-kanji-36", "label": "one thousand yen", "value": "千円", "subValue": "せんえん", "chapter": 3 },
          { "id": "lesson-3-kanji-37", "label": "ten thousand", "value": "一万", "subValue": "いちまん", "chapter": 3 },
          { "id": "lesson-3-kanji-38", "label": "one hundred thousand", "value": "十万", "subValue": "じゅうまん", "chapter": 3 },
          { "id": "lesson-3-kanji-39", "label": "one million", "value": "百万", "subValue": "ひゃくまん", "chapter": 3 },
          { "id": "lesson-3-kanji-40", "label": "100 yen", "value": "百円", "subValue": "ひゃくえん", "chapter": 3 },
          { "id": "lesson-3-kanji-41", "label": "sometimes", "value": "時々", "subValue": "ときどき", "chapter": 3 },
          { "id": "lesson-3-kanji-42", "label": "watch; clock", "value": "時計", "subValue": "とけい", "chapter": 3 }
        ]
      }
    ]
  },
  {
    "id": "lesson-4",
    "title": "Lesson 4: The First Date (はじめてのデート)",
    "cards": [
      {
        "id": "l4-vocab-topic",
        "contentType": "vocabulary",
        "title": "Topic",
        "chapter": 4,
        "items": [
          {
            "id": "l4-vocab-topic-1",
            "label": "game",
            "value": "ゲーム",
            "subValue": "geemu",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-2",
            "label": "part-time job",
            "value": "アルバイト",
            "subValue": "arubaito",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-3",
            "label": "shopping",
            "value": "かいもの",
            "subValue": "kaimono",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-4",
            "label": "class",
            "value": "クラス",
            "subValue": "kurasu",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-5",
            "label": "dog",
            "value": "いぬ",
            "subValue": "inu",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-6",
            "label": "cat",
            "value": "ねこ",
            "subValue": "neko",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-7",
            "label": "person",
            "value": "ひと",
            "subValue": "hito",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-8",
            "label": "child",
            "value": "こども",
            "subValue": "kodomo",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-9",
            "label": "you",
            "value": "あなた",
            "subValue": "anata",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-10",
            "label": "chair",
            "value": "いす",
            "subValue": "isu",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-11",
            "label": "desk",
            "value": "つくえ",
            "subValue": "tsukue",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-12",
            "label": "picture; photograph",
            "value": "しゃしん",
            "subValue": "shashin",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-13",
            "label": "flower",
            "value": "はな",
            "subValue": "hana",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-14",
            "label": "(term) paper",
            "value": "レポート",
            "subValue": "repooto",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-15",
            "label": "rice; meal",
            "value": "ごはん",
            "subValue": "gohan",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-16",
            "label": "bread",
            "value": "パン",
            "subValue": "pan",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-17",
            "label": "temple",
            "value": "おてら",
            "subValue": "otera",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-18",
            "label": "park",
            "value": "こうえん",
            "subValue": "kooen",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-19",
            "label": "supermarket",
            "value": "スーパー",
            "subValue": "suupaa",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-20",
            "label": "bus stop",
            "value": "バスてい",
            "subValue": "basutei",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-21",
            "label": "hospital",
            "value": "びょういん",
            "subValue": "byooin",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-22",
            "label": "hotel",
            "value": "ホテル",
            "subValue": "hoteru",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-23",
            "label": "bookstore",
            "value": "ほんや",
            "subValue": "honya",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-24",
            "label": "town; city",
            "value": "まち",
            "subValue": "machi",
            "chapter": 4
          },
          {
            "id": "l4-vocab-topic-25",
            "label": "restaurant",
            "value": "レストラン",
            "subValue": "resutoran",
            "chapter": 4
          }
        ]
      },
      {
        "id": "l4-vocab-time",
        "contentType": "vocabulary",
        "title": "Time",
        "chapter": 4,
        "items": [
          {
            "id": "l4-vocab-time-1",
            "label": "yesterday",
            "value": "きのう",
            "subValue": "kinoo",
            "chapter": 4
          },
          {
            "id": "l4-vocab-time-2",
            "label": "...hours",
            "value": "〜じかん",
            "subValue": "...jikan",
            "chapter": 4
          },
          {
            "id": "l4-vocab-time-3",
            "label": "one hour",
            "value": "いちじかん",
            "subValue": "ichijikan",
            "chapter": 4
          },
          {
            "id": "l4-vocab-time-4",
            "label": "last week",
            "value": "せんしゅう",
            "subValue": "senshuu",
            "chapter": 4
          },
          {
            "id": "l4-vocab-time-5",
            "label": "when...; at the time of... (〜の)",
            "value": "とき",
            "subValue": "toki",
            "chapter": 4
          },
          {
            "id": "l4-vocab-time-6",
            "label": "Monday",
            "value": "げつようび",
            "subValue": "getsuyoobi",
            "chapter": 4
          },
          {
            "id": "l4-vocab-time-7",
            "label": "Tuesday",
            "value": "かようび",
            "subValue": "kayoobi",
            "chapter": 4
          },
          {
            "id": "l4-vocab-time-8",
            "label": "Wednesday",
            "value": "すいようび",
            "subValue": "suiyoobi",
            "chapter": 4
          },
          {
            "id": "l4-vocab-time-9",
            "label": "Thursday",
            "value": "もくようび",
            "subValue": "mokuyoobi",
            "chapter": 4
          },
          {
            "id": "l4-vocab-time-10",
            "label": "Friday",
            "value": "きんようび",
            "subValue": "kinyoobi",
            "chapter": 4
          }
        ]
      },
      {
        "id": "l4-vocab-verb-(u)",
        "contentType": "vocabulary",
        "title": "Verb (U)",
        "chapter": 4,
        "items": [
          {
            "id": "l4-vocab-verb-(u)-1",
            "label": "to meet; to see (a person) (に)",
            "value": "あう",
            "subValue": "au",
            "chapter": 4
          },
          {
            "id": "l4-vocab-verb-(u)-2",
            "label": "there is... (place に thing が)",
            "value": "ある",
            "subValue": "aru",
            "chapter": 4
          },
          {
            "id": "l4-vocab-verb-(u)-3",
            "label": "to buy (を)",
            "value": "かう",
            "subValue": "kau",
            "chapter": 4
          },
          {
            "id": "l4-vocab-verb-(u)-4",
            "label": "to write (person に thing を)",
            "value": "かく",
            "subValue": "kaku",
            "chapter": 4
          },
          {
            "id": "l4-vocab-verb-(u)-5",
            "label": "to take (a picture) (を)",
            "value": "とる",
            "subValue": "toru",
            "chapter": 4
          },
          {
            "id": "l4-vocab-verb-(u)-6",
            "label": "to wait (を)",
            "value": "まつ",
            "subValue": "matsu",
            "chapter": 4
          },
          {
            "id": "l4-vocab-verb-(u)-7",
            "label": "to understand (が)",
            "value": "わかる",
            "subValue": "wakaru",
            "chapter": 4
          }
        ]
      },
      {
        "id": "l4-vocab-verb-(ru)",
        "contentType": "vocabulary",
        "title": "Verb (Ru)",
        "chapter": 4,
        "items": [
          {
            "id": "l4-vocab-verb-(ru)-1",
            "label": "(a person) is in...; stays at... (place に person が)",
            "value": "いる",
            "subValue": "iru",
            "chapter": 4
          }
        ]
      },
      {
        "id": "l4-vocab-expression",
        "contentType": "vocabulary",
        "title": "Expression",
        "chapter": 4,
        "items": [
          {
            "id": "l4-vocab-expression-1",
            "label": "about (approximate measurement)",
            "value": "〜ぐらい",
            "subValue": "...gurai",
            "chapter": 4
          },
          {
            "id": "l4-vocab-expression-2",
            "label": "I'm sorry.",
            "value": "ごめんなさい",
            "subValue": "gomennasai",
            "chapter": 4
          },
          {
            "id": "l4-vocab-expression-3",
            "label": "so; therefore",
            "value": "だから",
            "subValue": "dakara",
            "chapter": 4
          },
          {
            "id": "l4-vocab-expression-4",
            "label": "many; a lot",
            "value": "たくさん",
            "subValue": "takusan",
            "chapter": 4
          },
          {
            "id": "l4-vocab-expression-5",
            "label": "together with (a person); and",
            "value": "〜と",
            "subValue": "...to",
            "chapter": 4
          },
          {
            "id": "l4-vocab-expression-6",
            "label": "why",
            "value": "どうして",
            "subValue": "dooshite",
            "chapter": 4
          },
          {
            "id": "l4-vocab-expression-7",
            "label": "alone",
            "value": "ひとりで",
            "subValue": "hitoride",
            "chapter": 4
          }
        ]
      },
      {
        "id": "l4-vocab-place",
        "contentType": "vocabulary",
        "title": "Place",
        "chapter": 4,
        "items": [
          {
            "id": "l4-vocab-place-1",
            "label": "right",
            "value": "みぎ",
            "subValue": "migi",
            "chapter": 4
          },
          {
            "id": "l4-vocab-place-2",
            "label": "left",
            "value": "ひだり",
            "subValue": "hidari",
            "chapter": 4
          },
          {
            "id": "l4-vocab-place-3",
            "label": "front",
            "value": "まえ",
            "subValue": "mae",
            "chapter": 4
          },
          {
            "id": "l4-vocab-place-4",
            "label": "back",
            "value": "うしろ",
            "subValue": "ushiro",
            "chapter": 4
          },
          {
            "id": "l4-vocab-place-5",
            "label": "inside",
            "value": "なか",
            "subValue": "naka",
            "chapter": 4
          },
          {
            "id": "l4-vocab-place-6",
            "label": "on; above",
            "value": "うえ",
            "subValue": "ue",
            "chapter": 4
          },
          {
            "id": "l4-vocab-place-7",
            "label": "under",
            "value": "した",
            "subValue": "shita",
            "chapter": 4
          },
          {
            "id": "l4-vocab-place-8",
            "label": "near; nearby",
            "value": "ちかく",
            "subValue": "chikaku",
            "chapter": 4
          },
          {
            "id": "l4-vocab-place-9",
            "label": "next to",
            "value": "となり",
            "subValue": "tonari",
            "chapter": 4
          },
          {
            "id": "l4-vocab-place-10",
            "label": "between (A と B の)",
            "value": "あいだ",
            "subValue": "aida",
            "chapter": 4
          }
        ]
      },
      {
        "id": "l4-grammar-existence-inanimate",
        "contentType": "grammar",
        "title": "Existence (Inanimate)",
        "chapter": 4,
        "items": [
          {
            "id": "l4-grammar-1",
            "label": "Existence (Inanimate)",
            "value": "X があります",
            "subValue": "X ga arimasu. (There is/I have X). Used for non-living things.",
            "chapter": 4,
            "example": {
              "japanese": "あそこにマクドナルドがあります。",
              "reading": "Asoko ni Makudonarudo ga arimasu.",
              "translation": "There is a McDonald's over there."
            }
          }
        ]
      },
      {
        "id": "l4-grammar-existence-animate",
        "contentType": "grammar",
        "title": "Existence (Animate)",
        "chapter": 4,
        "items": [
          {
            "id": "l4-grammar-2",
            "label": "Existence (Animate)",
            "value": "X がいます",
            "subValue": "X ga imasu. (There is/I have X). Used for living things (people, animals).",
            "chapter": 4,
            "example": {
              "japanese": "ここにねこがいます。",
              "reading": "Koko ni neko ga imasu.",
              "translation": "There is a cat here."
            }
          }
        ]
      },
      {
        "id": "l4-grammar-location",
        "contentType": "grammar",
        "title": "Location Particles",
        "chapter": 4,
        "items": [
          {
            "id": "l4-grammar-3",
            "label": "Location Particles",
            "value": "X は Y の [Loc] です",
            "subValue": "X wa Y no [location word] desu. (X is [location] of Y). Example: Tsukue no shita (Under the desk).",
            "chapter": 4,
            "example": {
              "japanese": "ほんはつくえのうえです。",
              "reading": "Hon wa tsukue no ue desu.",
              "translation": "The book is on the desk."
            }
          }
        ]
      },
      {
        "id": "l4-grammar-past-noun-adj",
        "contentType": "grammar",
        "title": "Past Tense (Noun/Adj)",
        "chapter": 4,
        "items": [
          {
            "id": "l4-grammar-4",
            "label": "Past Tense (Noun/Adj)",
            "value": "でした / じゃなかった",
            "subValue": "Desu -> Deshita (was). Ja nai desu -> Ja nakatta desu (was not).",
            "chapter": 4,
            "example": {
              "japanese": "きのうはにちようびでした。",
              "reading": "Kinoo wa nichiyoobi deshita.",
              "translation": "Yesterday was Sunday."
            }
          }
        ]
      },
      {
        "id": "l4-grammar-past-verbs",
        "contentType": "grammar",
        "title": "Past Tense (Verbs)",
        "chapter": 4,
        "items": [
          {
            "id": "l4-grammar-5",
            "label": "Past Tense (Verbs)",
            "value": "ました / ませんでした",
            "subValue": "Masu -> Mashita (did). Masen -> Masen deshita (did not).",
            "chapter": 4,
            "example": {
              "japanese": "きのう、シャシンをとりました。",
              "reading": "Kinoo, shashin o torimashita.",
              "translation": "I took a picture yesterday."
            }
          }
        ]
      },
      {
        "id": "l4-grammar-mo-past",
        "contentType": "grammar",
        "title": "Particle Mo (Past)",
        "chapter": 4,
        "items": [
          {
            "id": "l4-grammar-6",
            "label": "Particle Mo (Past)",
            "value": "Noun も",
            "subValue": "\"Mo\" acts the same in past tense (did also).",
            "chapter": 4
          }
        ]
      },
      {
        "id": "l4-grammar-duration",
        "contentType": "grammar",
        "title": "Duration",
        "chapter": 4,
        "items": [
          {
            "id": "l4-grammar-7",
            "label": "Duration",
            "value": "...時間 + Verb",
            "subValue": "~jikan (hours). No particle needed after duration.",
            "chapter": 4,
            "example": {
              "japanese": "メアリーさんをいちじかんまちました。",
              "reading": "Mearii-san o ichijikan machimashita.",
              "translation": "I waited for Mary for one hour."
            }
          }
        ]
      },
      {
        "id": "l4-grammar-particle-to",
        "contentType": "grammar",
        "title": "Particle To",
        "chapter": 4,
        "items": [
          {
            "id": "l4-grammar-8",
            "label": "Particle To",
            "value": "Noun と Noun",
            "subValue": "Noun1 to Noun2 (and). Person to (with Person).",
            "chapter": 4,
            "example": {
              "japanese": "ソラさんとデートをしました。",
              "reading": "Sora-san to deeto o shimashita.",
              "translation": "I went on a date with Sora."
            }
          }
        ]
      },
      {
        "id": "lesson-4-kanji",
        "contentType": "kanji",
        "title": "Lesson 4 Kanji: Days and Positions",
        "chapter": 4,
        "items": [
          { "id": "lesson-4-kanji-1", "label": "Japan", "value": "日本", "subValue": "にほん", "chapter": 4 },
          { "id": "lesson-4-kanji-2", "label": "Sunday", "value": "日曜日", "subValue": "にちようび", "chapter": 4 },
          { "id": "lesson-4-kanji-3", "label": "every day", "value": "毎日", "subValue": "まいにち", "chapter": 4 },
          { "id": "lesson-4-kanji-4", "label": "Mother's Day", "value": "母の日", "subValue": "ははのひ", "chapter": 4 },
          { "id": "lesson-4-kanji-5", "label": "book", "value": "本", "subValue": "ほん", "chapter": 4 },
          { "id": "lesson-4-kanji-6", "label": "Japanese language", "value": "日本語", "subValue": "にほんご", "chapter": 4 },
          { "id": "lesson-4-kanji-7", "label": "Mr./Ms. Yamamoto", "value": "山本さん", "subValue": "やまもとさん", "chapter": 4 },
          { "id": "lesson-4-kanji-8", "label": "person", "value": "人", "subValue": "ひと", "chapter": 4 },
          { "id": "lesson-4-kanji-9", "label": "Japanese people", "value": "日本人", "subValue": "にほんじん", "chapter": 4 },
          { "id": "lesson-4-kanji-10", "label": "alone", "value": "一人で", "subValue": "ひとりで", "chapter": 4 },
          { "id": "lesson-4-kanji-11", "label": "Monday", "value": "月曜日", "subValue": "げつようび", "chapter": 4 },
          { "id": "lesson-4-kanji-12", "label": "January", "value": "一月", "subValue": "いちがつ", "chapter": 4 },
          { "id": "lesson-4-kanji-13", "label": "moon", "value": "月", "subValue": "つき", "chapter": 4 },
          { "id": "lesson-4-kanji-14", "label": "Tuesday", "value": "火曜日", "subValue": "かようび", "chapter": 4 },
          { "id": "lesson-4-kanji-15", "label": "fire", "value": "火", "subValue": "ひ", "chapter": 4 },
          { "id": "lesson-4-kanji-16", "label": "Wednesday", "value": "水曜日", "subValue": "すいようび", "chapter": 4 },
          { "id": "lesson-4-kanji-17", "label": "water", "value": "水", "subValue": "みず", "chapter": 4 },
          { "id": "lesson-4-kanji-18", "label": "Thursday", "value": "木曜日", "subValue": "もくようび", "chapter": 4 },
          { "id": "lesson-4-kanji-19", "label": "tree", "value": "木", "subValue": "き", "chapter": 4 },
          { "id": "lesson-4-kanji-20", "label": "Friday", "value": "金曜日", "subValue": "きんようび", "chapter": 4 },
          { "id": "lesson-4-kanji-21", "label": "money", "value": "お金", "subValue": "おかね", "chapter": 4 },
          { "id": "lesson-4-kanji-22", "label": "Saturday", "value": "土曜日", "subValue": "どようび", "chapter": 4 },
          { "id": "lesson-4-kanji-23", "label": "soil", "value": "土", "subValue": "つち", "chapter": 4 },
          { "id": "lesson-4-kanji-24", "label": "day of the week", "value": "曜日", "subValue": "ようび", "chapter": 4 },
          { "id": "lesson-4-kanji-25", "label": "top; above", "value": "上", "subValue": "うえ", "chapter": 4 },
          { "id": "lesson-4-kanji-26", "label": "please come up", "value": "上がってください", "subValue": "あがってください", "chapter": 4 },
          { "id": "lesson-4-kanji-27", "label": "under", "value": "下", "subValue": "した", "chapter": 4 },
          { "id": "lesson-4-kanji-28", "label": "please go down", "value": "下がってください", "subValue": "さがってください", "chapter": 4 },
          { "id": "lesson-4-kanji-29", "label": "subway", "value": "地下鉄", "subValue": "ちかてつ", "chapter": 4 },
          { "id": "lesson-4-kanji-30", "label": "inside", "value": "中", "subValue": "なか", "chapter": 4 },
          { "id": "lesson-4-kanji-31", "label": "China", "value": "中国", "subValue": "ちゅうごく", "chapter": 4 },
          { "id": "lesson-4-kanji-32", "label": "all day long", "value": "一日中", "subValue": "いちにちじゅう", "chapter": 4 },
          { "id": "lesson-4-kanji-33", "label": "3:30", "value": "三時半", "subValue": "さんじはん", "chapter": 4 },
          { "id": "lesson-4-kanji-34", "label": "half", "value": "半分", "subValue": "はんぶん", "chapter": 4 }
        ]
      }
    ]
  },
  {
    "id": "lesson-5",
    "title": "Lesson 5: A Trip to Okinawa (おきなわりょこう)",
    "cards": [
      {
        "id": "l5-vocab-food",
        "contentType": "vocabulary",
        "title": "Food",
        "chapter": 5,
        "items": [
          {
            "id": "l5-vocab-food-1",
            "label": "food",
            "value": "たべもの",
            "subValue": "tabemono",
            "chapter": 5
          },
          {
            "id": "l5-vocab-food-2",
            "label": "drink",
            "value": "のみもの",
            "subValue": "nomimono",
            "chapter": 5
          },
          {
            "id": "l5-vocab-food-3",
            "label": "fruit",
            "value": "くだもの",
            "subValue": "kudamono",
            "chapter": 5
          }
        ]
      },
      {
        "id": "l5-vocab-topic",
        "contentType": "vocabulary",
        "title": "Topic",
        "chapter": 5,
        "items": [
          {
            "id": "l5-vocab-topic-1",
            "label": "holiday; absence; rest",
            "value": "やすみ",
            "subValue": "yasumi",
            "chapter": 5
          },
          {
            "id": "l5-vocab-topic-2",
            "label": "travel; trip",
            "value": "りょこう",
            "subValue": "ryokoo",
            "chapter": 5
          },
          {
            "id": "l5-vocab-topic-3",
            "label": "sea; ocean",
            "value": "うみ",
            "subValue": "umi",
            "chapter": 5
          },
          {
            "id": "l5-vocab-topic-4",
            "label": "surfing",
            "value": "サーフィン",
            "subValue": "saafin",
            "chapter": 5
          },
          {
            "id": "l5-vocab-topic-5",
            "label": "souvenir",
            "value": "おみやげ",
            "subValue": "omiyage",
            "chapter": 5
          },
          {
            "id": "l5-vocab-topic-6",
            "label": "bus",
            "value": "バス",
            "subValue": "basu",
            "chapter": 5
          },
          {
            "id": "l5-vocab-topic-7",
            "label": "weather",
            "value": "てんき",
            "subValue": "tenki",
            "chapter": 5
          },
          {
            "id": "l5-vocab-topic-8",
            "label": "homework",
            "value": "しゅくだい",
            "subValue": "shukudai",
            "chapter": 5
          },
          {
            "id": "l5-vocab-topic-9",
            "label": "test",
            "value": "テスト",
            "subValue": "tesuto",
            "chapter": 5
          },
          {
            "id": "l5-vocab-topic-10",
            "label": "birthday",
            "value": "たんじょうび",
            "subValue": "tanjoobi",
            "chapter": 5
          },
          {
            "id": "l5-vocab-topic-11",
            "label": "room",
            "value": "へや",
            "subValue": "heya",
            "chapter": 5
          },
          {
            "id": "l5-vocab-topic-12",
            "label": "I (used by men)",
            "value": "ぼく",
            "subValue": "boku",
            "chapter": 5
          }
        ]
      },
      {
        "id": "l5-vocab-size",
        "contentType": "vocabulary",
        "title": "Size",
        "chapter": 5,
        "items": [
          {
            "id": "l5-vocab-size-1",
            "label": "size L",
            "value": "Lサイズ",
            "subValue": "eru-saizu",
            "chapter": 5
          }
        ]
      },
      {
        "id": "l5-vocab-adj-(i)",
        "contentType": "vocabulary",
        "title": "Adj (I)",
        "chapter": 5,
        "items": [
          {
            "id": "l5-vocab-adj-(i)-1",
            "label": "new",
            "value": "あたらしい",
            "subValue": "atarashii",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(i)-2",
            "label": "old (thing)",
            "value": "ふるい",
            "subValue": "furui",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(i)-3",
            "label": "hot (weather)",
            "value": "あつい",
            "subValue": "atsui",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(i)-4",
            "label": "hot (thing)",
            "value": "あつい",
            "subValue": "atsui",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(i)-5",
            "label": "cold (weather)",
            "value": "さむい",
            "subValue": "samui",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(i)-6",
            "label": "cold (thing/people)",
            "value": "つめたい",
            "subValue": "tsumetai",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(i)-7",
            "label": "busy (people/days)",
            "value": "いそがしい",
            "subValue": "isogashii",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(i)-8",
            "label": "large",
            "value": "おおきい",
            "subValue": "ookii",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(i)-9",
            "label": "small",
            "value": "ちいさい",
            "subValue": "chiisai",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(i)-10",
            "label": "interesting; funny",
            "value": "おもしろい",
            "subValue": "omoshiroi",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(i)-11",
            "label": "boring",
            "value": "つまらない",
            "subValue": "tsumaranai",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(i)-12",
            "label": "easy (problem); kind (person)",
            "value": "やさしい",
            "subValue": "yasashii",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(i)-13",
            "label": "difficult",
            "value": "むずかしい",
            "subValue": "muzukashii",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(i)-14",
            "label": "good-looking",
            "value": "かっこいい",
            "subValue": "kakkoii",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(i)-15",
            "label": "frightening",
            "value": "こわい",
            "subValue": "kowai",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(i)-16",
            "label": "fun",
            "value": "たのしい",
            "subValue": "tanoshii",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(i)-17",
            "label": "inexpensive; cheap (thing)",
            "value": "やすい",
            "subValue": "yasui",
            "chapter": 5
          }
        ]
      },
      {
        "id": "l5-vocab-adj-(na)",
        "contentType": "vocabulary",
        "title": "Adj (Na)",
        "chapter": 5,
        "items": [
          {
            "id": "l5-vocab-adj-(na)-1",
            "label": "fond of; to like (が)",
            "value": "すき",
            "subValue": "suki",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(na)-2",
            "label": "disgusted with; to dislike (が)",
            "value": "きらい",
            "subValue": "kirai",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(na)-3",
            "label": "very fond of; to love (が)",
            "value": "だいすき",
            "subValue": "daisuki",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(na)-4",
            "label": "to hate (が)",
            "value": "だいきらい",
            "subValue": "daikirai",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(na)-5",
            "label": "beautiful; clean",
            "value": "きれい",
            "subValue": "kirei",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(na)-6",
            "label": "healthy; energetic",
            "value": "げんき",
            "subValue": "genki",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(na)-7",
            "label": "quiet",
            "value": "しずか",
            "subValue": "shizuka",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(na)-8",
            "label": "lively",
            "value": "にぎやか",
            "subValue": "nigiyaka",
            "chapter": 5
          },
          {
            "id": "l5-vocab-adj-(na)-9",
            "label": "not busy; idle",
            "value": "ひま",
            "subValue": "hima",
            "chapter": 5
          }
        ]
      },
      {
        "id": "l5-vocab-verb-(u)",
        "contentType": "vocabulary",
        "title": "Verb (U)",
        "chapter": 5,
        "items": [
          {
            "id": "l5-vocab-verb-(u)-1",
            "label": "to swim",
            "value": "およぐ",
            "subValue": "oyogu",
            "chapter": 5
          },
          {
            "id": "l5-vocab-verb-(u)-2",
            "label": "to ask (person に)",
            "value": "きく",
            "subValue": "kiku",
            "chapter": 5
          },
          {
            "id": "l5-vocab-verb-(u)-3",
            "label": "to ride; to board (に)",
            "value": "のる",
            "subValue": "noru",
            "chapter": 5
          },
          {
            "id": "l5-vocab-verb-(u)-4",
            "label": "to do; to perform (を)",
            "value": "やる",
            "subValue": "yaru",
            "chapter": 5
          }
        ]
      },
      {
        "id": "l5-vocab-verb-(ru)",
        "contentType": "vocabulary",
        "title": "Verb (Ru)",
        "chapter": 5,
        "items": [
          {
            "id": "l5-vocab-verb-(ru)-1",
            "label": "to go out",
            "value": "でかける",
            "subValue": "dekakeru",
            "chapter": 5
          }
        ]
      },
      {
        "id": "l5-vocab-expression",
        "contentType": "vocabulary",
        "title": "Expression",
        "chapter": 5,
        "items": [
          {
            "id": "l5-vocab-expression-1",
            "label": "together",
            "value": "いっしょに",
            "subValue": "isshoni",
            "chapter": 5
          },
          {
            "id": "l5-vocab-expression-2",
            "label": "extremely",
            "value": "すごく",
            "subValue": "sugoku",
            "chapter": 5
          },
          {
            "id": "l5-vocab-expression-3",
            "label": "It's okay.; Not to worry.",
            "value": "だいじょうぶ",
            "subValue": "daijoobu",
            "chapter": 5
          },
          {
            "id": "l5-vocab-expression-4",
            "label": "very",
            "value": "とても",
            "subValue": "totemo",
            "chapter": 5
          },
          {
            "id": "l5-vocab-expression-5",
            "label": "what kind of...",
            "value": "どんな",
            "subValue": "donna",
            "chapter": 5
          },
          {
            "id": "l5-vocab-expression-6",
            "label": "counter for flat objects",
            "value": "〜まい",
            "subValue": "...mai",
            "chapter": 5
          }
        ]
      },
      {
        "id": "l5-grammar-adjectives-types",
        "contentType": "grammar",
        "title": "Adjectives (Types)",
        "chapter": 5,
        "items": [
          {
            "id": "l5-grammar-1",
            "label": "Adjectives (Types)",
            "value": "-",
            "subValue": "I-Adjectives (end in 'i') and Na-Adjectives (end in 'na' when modifying).",
            "chapter": 5
          }
        ]
      },
      {
        "id": "l5-grammar-adjectives-present",
        "contentType": "grammar",
        "title": "Adjectives (Present)",
        "chapter": 5,
        "items": [
          {
            "id": "l5-grammar-2",
            "label": "Adj Conjugation (Present)",
            "value": "...いです / ...くないです",
            "subValue": "**I-Adj:** Desu (aff), Kunai desu (neg). **Na-Adj:** Desu (aff), Ja nai desu (neg).",
            "chapter": 5,
            "example": {
              "japanese": "このうみはきれいです。／いそがしくないです。",
              "reading": "Kono umi wa kirei desu. / Isogashiku nai desu.",
              "translation": "This ocean is beautiful. / I am not busy."
            }
          }
        ]
      },
      {
        "id": "l5-grammar-adjectives-past",
        "contentType": "grammar",
        "title": "Adjectives (Past)",
        "chapter": 5,
        "items": [
          {
            "id": "l5-grammar-3",
            "label": "Adj Conjugation (Past)",
            "value": "...かったです / ...なかった",
            "subValue": "**I-Adj:** Katta desu (aff), Kunakatta desu (neg). **Na-Adj:** Deshita (aff), Ja nakatta desu (neg).",
            "chapter": 5,
            "example": {
              "japanese": "りょこうはたのしかったです。",
              "reading": "Ryokoo wa tanoshikatta desu.",
              "translation": "The trip was fun."
            }
          }
        ]
      },
      {
        "id": "l5-grammar-adjectives-modifiers",
        "contentType": "grammar",
        "title": "Adjective Modifiers",
        "chapter": 5,
        "items": [
          {
            "id": "l5-grammar-4",
            "label": "Adj Modifiers",
            "value": "Adj + Noun",
            "subValue": "**I-Adj:** [Adj] + Noun. **Na-Adj:** [Adj] + na + Noun.",
            "chapter": 5
          }
        ]
      },
      {
        "id": "l5-grammar-likes-dislikes",
        "contentType": "grammar",
        "title": "Likes / Dislikes",
        "chapter": 5,
        "items": [
          {
            "id": "l5-grammar-5",
            "label": "Likes/Dislikes",
            "value": "X は Y がすき/きらい",
            "subValue": "X wa Y ga suki/kirai desu. (X likes/dislikes Y).",
            "chapter": 5,
            "example": {
              "japanese": "わたしはサーフィンがだいすきです。",
              "reading": "Watashi wa saafin ga daisuki desu.",
              "translation": "I love surfing."
            }
          }
        ]
      },
      {
        "id": "l5-grammar-lets",
        "contentType": "grammar",
        "title": "Let's...",
        "chapter": 5,
        "items": [
          {
            "id": "l5-grammar-6",
            "label": "Let's...",
            "value": "〜ましょう / 〜ましょうか",
            "subValue": "~mashoo (Let's do). ~mashoo ka (Shall we do?).",
            "chapter": 5,
            "example": {
              "japanese": "いっしょにしゃしんをとりましょう。",
              "reading": "Issho ni shashin o torimashoo.",
              "translation": "Let's take a picture together."
            }
          }
        ]
      },
      {
        "id": "l5-grammar-counting",
        "contentType": "grammar",
        "title": "Counting",
        "chapter": 5,
        "items": [
          {
            "id": "l5-grammar-7",
            "label": "Counting",
            "value": "Number + Counter",
            "subValue": "Use specific counters (mai for flat objects).",
            "chapter": 5,
            "example": {
              "japanese": "はがきをさんまいかいました。",
              "reading": "Hagaki o san-mai kaimashita.",
              "translation": "I bought three postcards."
            }
          }
        ]
      },
      {
        "id": "lesson-5-kanji",
        "contentType": "kanji",
        "title": "Lesson 5 Kanji: Adjectives and Verbs",
        "chapter": 5,
        "items": [
          { "id": "lesson-5-kanji-1", "label": "mountain", "value": "山", "subValue": "やま", "chapter": 5 },
          { "id": "lesson-5-kanji-2", "label": "Mt. Fuji", "value": "富士山", "subValue": "ふじさん", "chapter": 5 },
          { "id": "lesson-5-kanji-3", "label": "Professor Yamashita", "value": "山下先生", "subValue": "やましたせんせい", "chapter": 5 },
          { "id": "lesson-5-kanji-4", "label": "river", "value": "川", "subValue": "かわ", "chapter": 5 },
          { "id": "lesson-5-kanji-5", "label": "Mr./Ms. Yamakawa", "value": "山川さん", "subValue": "やまかわさん", "chapter": 5 },
          { "id": "lesson-5-kanji-6", "label": "healthy; fine", "value": "元気な", "subValue": "げんきな", "chapter": 5 },
          { "id": "lesson-5-kanji-7", "label": "weather", "value": "天気", "subValue": "てんき", "chapter": 5 },
          { "id": "lesson-5-kanji-8", "label": "electricity; light", "value": "電気", "subValue": "でんき", "chapter": 5 },
          { "id": "lesson-5-kanji-9", "label": "feeling", "value": "気持ち", "subValue": "きもち", "chapter": 5 },
          { "id": "lesson-5-kanji-10", "label": "popularity", "value": "人気", "subValue": "にんき", "chapter": 5 },
          { "id": "lesson-5-kanji-11", "label": "heaven", "value": "天国", "subValue": "てんごく", "chapter": 5 },
          { "id": "lesson-5-kanji-12", "label": "I", "value": "私", "subValue": "わたし", "chapter": 5 },
          { "id": "lesson-5-kanji-13", "label": "private university", "value": "私立大学", "subValue": "しりつだいがく", "chapter": 5 },
          { "id": "lesson-5-kanji-14", "label": "now", "value": "今", "subValue": "いま", "chapter": 5 },
          { "id": "lesson-5-kanji-15", "label": "today", "value": "今日", "subValue": "きょう", "chapter": 5 },
          { "id": "lesson-5-kanji-16", "label": "tonight", "value": "今晩", "subValue": "こんばん", "chapter": 5 },
          { "id": "lesson-5-kanji-17", "label": "this month", "value": "今月", "subValue": "こんげつ", "chapter": 5 },
          { "id": "lesson-5-kanji-18", "label": "Mr./Ms. Tanaka", "value": "田中さん", "subValue": "たなかさん", "chapter": 5 },
          { "id": "lesson-5-kanji-19", "label": "Mr./Ms. Yamada", "value": "山田さん", "subValue": "やまださん", "chapter": 5 },
          { "id": "lesson-5-kanji-20", "label": "rice field", "value": "田んぼ", "subValue": "たんぼ", "chapter": 5 },
          { "id": "lesson-5-kanji-21", "label": "woman", "value": "女の人", "subValue": "おんなのひと", "chapter": 5 },
          { "id": "lesson-5-kanji-22", "label": "woman (formal)", "value": "女性", "subValue": "じょせい", "chapter": 5 },
          { "id": "lesson-5-kanji-23", "label": "girl", "value": "女の子", "subValue": "おんなのこ", "chapter": 5 },
          { "id": "lesson-5-kanji-24", "label": "man", "value": "男の人", "subValue": "おとこのひと", "chapter": 5 },
          { "id": "lesson-5-kanji-25", "label": "man (formal)", "value": "男性", "subValue": "だんせい", "chapter": 5 },
          { "id": "lesson-5-kanji-26", "label": "boy", "value": "男の子", "subValue": "おとこのこ", "chapter": 5 },
          { "id": "lesson-5-kanji-27", "label": "to see", "value": "見る", "subValue": "みる", "chapter": 5 },
          { "id": "lesson-5-kanji-28", "label": "sightseeing", "value": "見物", "subValue": "けんぶつ", "chapter": 5 },
          { "id": "lesson-5-kanji-29", "label": "opinion", "value": "意見", "subValue": "いけん", "chapter": 5 },
          { "id": "lesson-5-kanji-30", "label": "to go", "value": "行く", "subValue": "いく", "chapter": 5 },
          { "id": "lesson-5-kanji-31", "label": "bank", "value": "銀行", "subValue": "ぎんこう", "chapter": 5 },
          { "id": "lesson-5-kanji-32", "label": "travel", "value": "旅行", "subValue": "りょこう", "chapter": 5 },
          { "id": "lesson-5-kanji-33", "label": "to eat", "value": "食べる", "subValue": "たべる", "chapter": 5 },
          { "id": "lesson-5-kanji-34", "label": "food", "value": "食べ物", "subValue": "たべもの", "chapter": 5 },
          { "id": "lesson-5-kanji-35", "label": "cafeteria", "value": "食堂", "subValue": "しょくどう", "chapter": 5 },
          { "id": "lesson-5-kanji-36", "label": "meal", "value": "食事", "subValue": "しょくじ", "chapter": 5 },
          { "id": "lesson-5-kanji-37", "label": "to drink", "value": "飲む", "subValue": "のむ", "chapter": 5 },
          { "id": "lesson-5-kanji-38", "label": "drink", "value": "飲み物", "subValue": "のみもの", "chapter": 5 }
        ]
      }
    ]
  },
  {
    "id": "lesson-6",
    "title": "Lesson 6: A Day in Robert's Life (ロバートさんの一日)",
    "cards": [
      {
        "id": "l6-vocab-food",
        "contentType": "vocabulary",
        "title": "Food",
        "chapter": 6,
        "items": [
          {
            "id": "l6-vocab-food-1",
            "label": "food",
            "value": "たべもの",
            "subValue": "tabemono",
            "chapter": 6
          }
        ]
      },
      {
        "id": "l6-vocab-topic",
        "contentType": "vocabulary",
        "title": "Topic",
        "chapter": 6,
        "items": [
          {
            "id": "l6-vocab-topic-1",
            "label": "money",
            "value": "おかね",
            "subValue": "okane",
            "chapter": 6
          },
          {
            "id": "l6-vocab-topic-2",
            "label": "bath",
            "value": "おふろ",
            "subValue": "ofuro",
            "chapter": 6
          },
          {
            "id": "l6-vocab-topic-3",
            "label": "kanji",
            "value": "かんじ",
            "subValue": "kanji",
            "chapter": 6
          },
          {
            "id": "l6-vocab-topic-4",
            "label": "textbook",
            "value": "きょうかしょ",
            "subValue": "kyookasho",
            "chapter": 6
          },
          {
            "id": "l6-vocab-topic-5",
            "label": "this week",
            "value": "こんしゅう",
            "subValue": "konshuu",
            "chapter": 6
          },
          {
            "id": "l6-vocab-topic-6",
            "label": "CD",
            "value": "シーディー",
            "subValue": "shiidii",
            "chapter": 6
          },
          {
            "id": "l6-vocab-topic-7",
            "label": "municipal hospital",
            "value": "しみんびょういん",
            "subValue": "shiminbyooin",
            "chapter": 6
          },
          {
            "id": "l6-vocab-topic-8",
            "label": "shower",
            "value": "シャワー",
            "subValue": "shawaa",
            "chapter": 6
          },
          {
            "id": "l6-vocab-topic-9",
            "label": "next",
            "value": "つぎ",
            "subValue": "tsugi",
            "chapter": 6
          },
          {
            "id": "l6-vocab-topic-10",
            "label": "electricity; light",
            "value": "でんき",
            "subValue": "denki",
            "chapter": 6
          },
          {
            "id": "l6-vocab-topic-11",
            "label": "train",
            "value": "でんしゃ",
            "subValue": "densha",
            "chapter": 6
          },
          {
            "id": "l6-vocab-topic-12",
            "label": "baggage",
            "value": "にもつ",
            "subValue": "nimotsu",
            "chapter": 6
          },
          {
            "id": "l6-vocab-topic-13",
            "label": "PC; laptop",
            "value": "パソコン",
            "subValue": "pasokon",
            "chapter": 6
          },
          {
            "id": "l6-vocab-topic-14",
            "label": "page",
            "value": "ページ",
            "subValue": "peeji",
            "chapter": 6
          },
          {
            "id": "l6-vocab-topic-15",
            "label": "window",
            "value": "まど",
            "subValue": "mado",
            "chapter": 6
          },
          {
            "id": "l6-vocab-topic-16",
            "label": "night",
            "value": "よる",
            "subValue": "yoru",
            "chapter": 6
          },
          {
            "id": "l6-vocab-topic-17",
            "label": "next week",
            "value": "らいしゅう",
            "subValue": "raishuu",
            "chapter": 6
          },
          {
            "id": "l6-vocab-topic-18",
            "label": "next year",
            "value": "らいねん",
            "subValue": "rainen",
            "chapter": 6
          }
        ]
      },
      {
        "id": "l6-vocab-adj-(na)",
        "contentType": "vocabulary",
        "title": "Adj (Na)",
        "chapter": 6,
        "items": [
          {
            "id": "l6-vocab-adj-(na)-1",
            "label": "tough (situation)",
            "value": "たいへん",
            "subValue": "taihen",
            "chapter": 6
          }
        ]
      },
      {
        "id": "l6-vocab-verb-(u)",
        "contentType": "vocabulary",
        "title": "Verb (U)",
        "chapter": 6,
        "items": [
          {
            "id": "l6-vocab-verb-(u)-1",
            "label": "to play",
            "value": "あそぶ",
            "subValue": "asobu",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(u)-2",
            "label": "to hurry",
            "value": "いそぐ",
            "subValue": "isogu",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(u)-3",
            "label": "to take a bath",
            "value": "おふろにはいる",
            "subValue": "ofuronihairu",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(u)-4",
            "label": "to return (a thing) (person に thing を)",
            "value": "かえす",
            "subValue": "kaesu",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(u)-5",
            "label": "to turn off; to erase (を)",
            "value": "けす",
            "subValue": "kesu",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(u)-6",
            "label": "to die",
            "value": "しぬ",
            "subValue": "shinu",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(u)-7",
            "label": "to sit down (seat に)",
            "value": "すわる",
            "subValue": "suwaru",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(u)-8",
            "label": "to stand up",
            "value": "たつ",
            "subValue": "tatsu",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(u)-9",
            "label": "to smoke",
            "value": "たばこをすう",
            "subValue": "tabakoosuu",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(u)-10",
            "label": "to use (を)",
            "value": "つかう",
            "subValue": "tsukau",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(u)-11",
            "label": "to help (person/task を)",
            "value": "てつだう",
            "subValue": "tetsudau",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(u)-12",
            "label": "to enter (に)",
            "value": "はいる",
            "subValue": "hairu",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(u)-13",
            "label": "to carry; to hold (を)",
            "value": "もつ",
            "subValue": "motsu",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(u)-14",
            "label": "to be absent (from) (を); to rest",
            "value": "やすむ",
            "subValue": "yasumu",
            "chapter": 6
          }
        ]
      },
      {
        "id": "l6-vocab-verb-(ru)",
        "contentType": "vocabulary",
        "title": "Verb (Ru)",
        "chapter": 6,
        "items": [
          {
            "id": "l6-vocab-verb-(ru)-1",
            "label": "to open (something) (を)",
            "value": "あける",
            "subValue": "akeru",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(ru)-2",
            "label": "to teach (person に thing を)",
            "value": "おしえる",
            "subValue": "oshieru",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(ru)-3",
            "label": "to get off (を)",
            "value": "おりる",
            "subValue": "oriru",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(ru)-4",
            "label": "to borrow (person に thing を)",
            "value": "かりる",
            "subValue": "kariru",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(ru)-5",
            "label": "to close (something) (を)",
            "value": "しめる",
            "subValue": "shimeru",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(ru)-6",
            "label": "to take a shower",
            "value": "シャワーをあびる",
            "subValue": "shawaaoabiru",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(ru)-7",
            "label": "to turn on (を)",
            "value": "つける",
            "subValue": "tsukeru",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(ru)-8",
            "label": "to make a phone call (に)",
            "value": "でんわをかける",
            "subValue": "denwaokakeru",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(ru)-9",
            "label": "to forget; to leave behind (を)",
            "value": "わすれる",
            "subValue": "wasureru",
            "chapter": 6
          }
        ]
      },
      {
        "id": "l6-vocab-verb-(irr)",
        "contentType": "vocabulary",
        "title": "Verb (Irr)",
        "chapter": 6,
        "items": [
          {
            "id": "l6-vocab-verb-(irr)-1",
            "label": "to bring (a person) (を)",
            "value": "つれてくる",
            "subValue": "tsuretekuru",
            "chapter": 6
          },
          {
            "id": "l6-vocab-verb-(irr)-2",
            "label": "to bring (a thing) (を)",
            "value": "もってくる",
            "subValue": "mottekuru",
            "chapter": 6
          }
        ]
      },
      {
        "id": "l6-vocab-expression",
        "contentType": "vocabulary",
        "title": "Expression",
        "chapter": 6,
        "items": [
          {
            "id": "l6-vocab-expression-1",
            "label": "later on",
            "value": "あとで",
            "subValue": "atode",
            "chapter": 6
          },
          {
            "id": "l6-vocab-expression-2",
            "label": "(do something) late",
            "value": "おそく",
            "subValue": "osoku",
            "chapter": 6
          },
          {
            "id": "l6-vocab-expression-3",
            "label": "because...",
            "value": "〜から",
            "subValue": "...kara",
            "chapter": 6
          },
          {
            "id": "l6-vocab-expression-4",
            "label": "That would be fine.; That wouldn't be necessary.",
            "value": "けっこうです",
            "subValue": "kekkoodesu",
            "chapter": 6
          },
          {
            "id": "l6-vocab-expression-5",
            "label": "right away",
            "value": "すぐ",
            "subValue": "sugu",
            "chapter": 6
          },
          {
            "id": "l6-vocab-expression-6",
            "label": "Really?",
            "value": "ほんとうですか",
            "subValue": "hontoodesuka",
            "chapter": 6
          },
          {
            "id": "l6-vocab-expression-7",
            "label": "slowly; leisurely",
            "value": "ゆっくり",
            "subValue": "yukkuri",
            "chapter": 6
          }
        ]
      },
      {
        "id": "l6-grammar-te-form-conjugation",
        "contentType": "grammar",
        "title": "Te-form Conjugation",
        "chapter": 6,
        "items": [
          {
            "id": "l6-grammar-1",
            "label": "Te-form (Use)",
            "value": "Verb-て",
            "subValue": "Used for connecting verbs, making requests, asking permission, etc.",
            "chapter": 6
          },
          {
            "id": "l6-grammar-2",
            "label": "Te-form (Ru-verbs)",
            "value": "Drop -ru + て",
            "subValue": "Drop -ru, add -te.",
            "chapter": 6
          },
          {
            "id": "l6-grammar-3",
            "label": "Te-form (U-verbs)",
            "value": "...て / ...で",
            "subValue": "u/tsu/ru -> tte; mu/bu/nu -> nde; ku -> ite; gu -> ide; su -> shite. (Exception: iku -> itte).",
            "chapter": 6
          },
          {
            "id": "l6-grammar-4",
            "label": "Te-form (Irr)",
            "value": "して / きて",
            "subValue": "suru -> shite; kuru -> kite.",
            "chapter": 6
          }
        ]
      },
      {
        "id": "l6-grammar-requests",
        "contentType": "grammar",
        "title": "Requests",
        "chapter": 6,
        "items": [
          {
            "id": "l6-grammar-5",
            "label": "Requests",
            "value": "〜てください",
            "subValue": "~te kudasai. (Please do...).",
            "chapter": 6,
            "example": {
              "japanese": "きょうかしょをみてください。",
              "reading": "Kyookasho o mite kudasai.",
              "translation": "Please look at the textbook."
            }
          }
        ]
      },
      {
        "id": "l6-grammar-prohibition",
        "contentType": "grammar",
        "title": "Prohibition",
        "chapter": 6,
        "items": [
          {
            "id": "l6-grammar-6",
            "label": "Prohibition",
            "value": "〜てはいけません",
            "subValue": "~te wa ikemasen. (You must not...).",
            "chapter": 6,
            "example": {
              "japanese": "ここでタバコをすってはいけません。",
              "reading": "Koko de tabako o sutte wa ikemasen.",
              "translation": "You must not smoke here."
            }
          }
        ]
      },
      {
        "id": "l6-grammar-permission",
        "contentType": "grammar",
        "title": "Permission",
        "chapter": 6,
        "items": [
          {
            "id": "l6-grammar-7",
            "label": "Permission",
            "value": "〜てもいいです",
            "subValue": "~te mo ii desu. (You may...).",
            "chapter": 6,
            "example": {
              "japanese": "しゃしんをとってもいいですか。",
              "reading": "Shashin o totte mo ii desu ka.",
              "translation": "May I take a picture?"
            }
          }
        ]
      },
      {
        "id": "l6-grammar-connecting-verbs",
        "contentType": "grammar",
        "title": "Connecting Verbs",
        "chapter": 6,
        "items": [
          {
            "id": "l6-grammar-8",
            "label": "Connecting Verbs",
            "value": "Verb-て, Verb",
            "subValue": "~te, [verb]. (I did this, and then did that).",
            "chapter": 6,
            "example": {
              "japanese": "としょかんにいって、ほんを借ります。",
              "reading": "Toshokan ni itte, hon o karimasu.",
              "translation": "I will go to the library and borrow a book."
            }
          }
        ]
      },
      {
        "id": "l6-grammar-reason",
        "contentType": "grammar",
        "title": "Reason",
        "chapter": 6,
        "items": [
          {
            "id": "l6-grammar-9",
            "label": "Reason",
            "value": "Situation. Explanation から.",
            "subValue": "[Situation]. [Explanation] kara. (Situation, because Explanation).",
            "chapter": 6,
            "example": {
              "japanese": "あしたテストがあるから、べんきょうします。",
              "reading": "Ashita tesuto ga aru kara, benkyoo shimasu.",
              "translation": "I will study because there is a test tomorrow."
            }
          }
        ]
      },
      {
        "id": "lesson-6-kanji",
        "contentType": "kanji",
        "title": "Lesson 6 Kanji: School and Directions",
        "chapter": 6,
        "items": [
          { "id": "lesson-6-kanji-1", "label": "east", "value": "東", "subValue": "ひがし", "chapter": 6 },
          { "id": "lesson-6-kanji-2", "label": "east exit", "value": "東口", "subValue": "ひがしぐち", "chapter": 6 },
          { "id": "lesson-6-kanji-3", "label": "Tokyo", "value": "東京", "subValue": "とうきょう", "chapter": 6 },
          { "id": "lesson-6-kanji-4", "label": "west", "value": "西", "subValue": "にし", "chapter": 6 },
          { "id": "lesson-6-kanji-5", "label": "west exit", "value": "西口", "subValue": "にしぐち", "chapter": 6 },
          { "id": "lesson-6-kanji-6", "label": "south", "value": "南", "subValue": "みなみ", "chapter": 6 },
          { "id": "lesson-6-kanji-7", "label": "south exit", "value": "南口", "subValue": "みなみぐち", "chapter": 6 },
          { "id": "lesson-6-kanji-8", "label": "north", "value": "北", "subValue": "きた", "chapter": 6 },
          { "id": "lesson-6-kanji-9", "label": "north exit", "value": "北口", "subValue": "きたぐち", "chapter": 6 },
          { "id": "lesson-6-kanji-10", "label": "exit", "value": "出口", "subValue": "でぐち", "chapter": 6 },
          { "id": "lesson-6-kanji-11", "label": "entrance", "value": "入口", "subValue": "いりぐち", "chapter": 6 },
          { "id": "lesson-6-kanji-12", "label": "mouth", "value": "口", "subValue": "くち", "chapter": 6 },
          { "id": "lesson-6-kanji-13", "label": "to exit", "value": "出る", "subValue": "でる", "chapter": 6 },
          { "id": "lesson-6-kanji-14", "label": "to go out", "value": "出かける", "subValue": "でかける", "chapter": 6 },
          { "id": "lesson-6-kanji-15", "label": "right", "value": "右", "subValue": "みぎ", "chapter": 6 },
          { "id": "lesson-6-kanji-16", "label": "left", "value": "左", "subValue": "ひだり", "chapter": 6 },
          { "id": "lesson-6-kanji-17", "label": "5 minutes", "value": "五分", "subValue": "ごふん", "chapter": 6 },
          { "id": "lesson-6-kanji-18", "label": "10 minutes", "value": "十分", "subValue": "じゅっぷん", "chapter": 6 },
          { "id": "lesson-6-kanji-19", "label": "to understand", "value": "分かる", "subValue": "わかる", "chapter": 6 },
          { "id": "lesson-6-kanji-20", "label": "teacher", "value": "先生", "subValue": "せんせい", "chapter": 6 },
          { "id": "lesson-6-kanji-21", "label": "last week", "value": "先週", "subValue": "せんしゅう", "chapter": 6 },
          { "id": "lesson-6-kanji-22", "label": "ahead", "value": "先に", "subValue": "さきに", "chapter": 6 },
          { "id": "lesson-6-kanji-23", "label": "student", "value": "学生", "subValue": "がくせい", "chapter": 6 },
          { "id": "lesson-6-kanji-24", "label": "to be born", "value": "生まれる", "subValue": "うまれる", "chapter": 6 },
          { "id": "lesson-6-kanji-25", "label": "big", "value": "大きい", "subValue": "おおきい", "chapter": 6 },
          { "id": "lesson-6-kanji-26", "label": "college student", "value": "大学生", "subValue": "だいがくせい", "chapter": 6 },
          { "id": "lesson-6-kanji-27", "label": "adult", "value": "大人", "subValue": "おとな", "chapter": 6 },
          { "id": "lesson-6-kanji-28", "label": "university", "value": "大学", "subValue": "だいがく", "chapter": 6 },
          { "id": "lesson-6-kanji-29", "label": "school", "value": "学校", "subValue": "がっこう", "chapter": 6 },
          { "id": "lesson-6-kanji-30", "label": "foreign country", "value": "外国", "subValue": "がいこく", "chapter": 6 },
          { "id": "lesson-6-kanji-31", "label": "foreigner", "value": "外国人", "subValue": "がいこくじん", "chapter": 6 },
          { "id": "lesson-6-kanji-32", "label": "outside", "value": "外", "subValue": "そと", "chapter": 6 },
          { "id": "lesson-6-kanji-33", "label": "country", "value": "国", "subValue": "くに", "chapter": 6 },
          { "id": "lesson-6-kanji-34", "label": "China", "value": "中国", "subValue": "ちゅうごく", "chapter": 6 }
        ]
      }
    ]
  },
  {
    "id": "lesson-7",
    "title": "Lesson 7: Family Picture (かぞくのしゃしん)",
    "cards": [
      {
        "id": "l7-vocab-family",
        "contentType": "vocabulary",
        "title": "Family",
        "chapter": 7,
        "items": [
          {
            "id": "l7-vocab-family-1",
            "label": "family",
            "value": "かぞく",
            "subValue": "kazoku",
            "chapter": 7
          },
          {
            "id": "l7-vocab-family-2",
            "label": "grandfather; old man",
            "value": "おじいさん",
            "subValue": "ojiisan",
            "chapter": 7
          },
          {
            "id": "l7-vocab-family-3",
            "label": "grandmother; old woman",
            "value": "おばあさん",
            "subValue": "obaasan",
            "chapter": 7
          },
          {
            "id": "l7-vocab-family-4",
            "label": "older brother",
            "value": "おにいさん",
            "subValue": "oniisan",
            "chapter": 7
          },
          {
            "id": "l7-vocab-family-5",
            "label": "older sister",
            "value": "おねえさん",
            "subValue": "oneesan",
            "chapter": 7
          },
          {
            "id": "l7-vocab-family-6",
            "label": "(my) father",
            "value": "ちち",
            "subValue": "chichi",
            "chapter": 7
          },
          {
            "id": "l7-vocab-family-7",
            "label": "(my) mother",
            "value": "はは",
            "subValue": "haha",
            "chapter": 7
          },
          {
            "id": "l7-vocab-family-8",
            "label": "(my) older brother",
            "value": "あに",
            "subValue": "ani",
            "chapter": 7
          },
          {
            "id": "l7-vocab-family-9",
            "label": "(my) older sister",
            "value": "あね",
            "subValue": "ane",
            "chapter": 7
          },
          {
            "id": "l7-vocab-family-10",
            "label": "younger sister",
            "value": "いもうと",
            "subValue": "imooto",
            "chapter": 7
          },
          {
            "id": "l7-vocab-family-11",
            "label": "younger brother",
            "value": "おとうと",
            "subValue": "otooto",
            "chapter": 7
          },
          {
            "id": "l7-vocab-family-12",
            "label": "brothers and sisters",
            "value": "きょうだい",
            "subValue": "kyoodai",
            "chapter": 7
          }
        ]
      },
      {
        "id": "l7-vocab-topic",
        "contentType": "vocabulary",
        "title": "Topic",
        "chapter": 7,
        "items": [
          {
            "id": "l7-vocab-topic-1",
            "label": "man",
            "value": "おとこのひと",
            "subValue": "otokonohito",
            "chapter": 7
          },
          {
            "id": "l7-vocab-topic-2",
            "label": "woman",
            "value": "おんなのひと",
            "subValue": "onnanohito",
            "chapter": 7
          },
          {
            "id": "l7-vocab-topic-3",
            "label": "company",
            "value": "かいしゃ",
            "subValue": "kaisha",
            "chapter": 7
          },
          {
            "id": "l7-vocab-topic-4",
            "label": "cafeteria; dining commons",
            "value": "しょくどう",
            "subValue": "shokudoo",
            "chapter": 7
          },
          {
            "id": "l7-vocab-topic-5",
            "label": "department store",
            "value": "デパート",
            "subValue": "depaato",
            "chapter": 7
          },
          {
            "id": "l7-vocab-topic-6",
            "label": "hair",
            "value": "かみ",
            "subValue": "kami",
            "chapter": 7
          },
          {
            "id": "l7-vocab-topic-7",
            "label": "mouth",
            "value": "くち",
            "subValue": "kuchi",
            "chapter": 7
          },
          {
            "id": "l7-vocab-topic-8",
            "label": "eye",
            "value": "め",
            "subValue": "me",
            "chapter": 7
          },
          {
            "id": "l7-vocab-topic-9",
            "label": "glasses",
            "value": "めがね",
            "subValue": "megane",
            "chapter": 7
          },
          {
            "id": "l7-vocab-topic-10",
            "label": "song",
            "value": "うた",
            "subValue": "uta",
            "chapter": 7
          },
          {
            "id": "l7-vocab-topic-11",
            "label": "club activity",
            "value": "サークル",
            "subValue": "saakuru",
            "chapter": 7
          },
          {
            "id": "l7-vocab-topic-12",
            "label": "car",
            "value": "くるま",
            "subValue": "kuruma",
            "chapter": 7
          }
        ]
      },
      {
        "id": "l7-vocab-adj-(i)",
        "contentType": "vocabulary",
        "title": "Adj (I)",
        "chapter": 7,
        "items": [
          {
            "id": "l7-vocab-adj-(i)-1",
            "label": "long",
            "value": "ながい",
            "subValue": "nagai",
            "chapter": 7
          },
          {
            "id": "l7-vocab-adj-(i)-2",
            "label": "short (length)",
            "value": "みじかい",
            "subValue": "mijikai",
            "chapter": 7
          },
          {
            "id": "l7-vocab-adj-(i)-3",
            "label": "fast",
            "value": "はやい",
            "subValue": "hayai",
            "chapter": 7
          },
          {
            "id": "l7-vocab-adj-(i)-4",
            "label": "tall (stature)",
            "value": "せがたかい",
            "subValue": "segatakai",
            "chapter": 7
          },
          {
            "id": "l7-vocab-adj-(i)-5",
            "label": "short (stature)",
            "value": "せがひくい",
            "subValue": "segahikui",
            "chapter": 7
          },
          {
            "id": "l7-vocab-adj-(i)-6",
            "label": "bright; smart",
            "value": "あたまがいい",
            "subValue": "atamagaii",
            "chapter": 7
          },
          {
            "id": "l7-vocab-adj-(i)-7",
            "label": "cute",
            "value": "かわいい",
            "subValue": "kawaii",
            "chapter": 7
          }
        ]
      },
      {
        "id": "l7-vocab-adj-(na)",
        "contentType": "vocabulary",
        "title": "Adj (Na)",
        "chapter": 7,
        "items": [
          {
            "id": "l7-vocab-adj-(na)-1",
            "label": "kind",
            "value": "しんせつ",
            "subValue": "shinsetsu",
            "chapter": 7
          },
          {
            "id": "l7-vocab-adj-(na)-2",
            "label": "convenient",
            "value": "べんり",
            "subValue": "benri",
            "chapter": 7
          }
        ]
      },
      {
        "id": "l7-vocab-verb-(u)",
        "contentType": "vocabulary",
        "title": "Verb (U)",
        "chapter": 7,
        "items": [
          {
            "id": "l7-vocab-verb-(u)-1",
            "label": "to sing (を)",
            "value": "うたう",
            "subValue": "utau",
            "chapter": 7
          },
          {
            "id": "l7-vocab-verb-(u)-2",
            "label": "to put on (a hat) (を)",
            "value": "かぶる",
            "subValue": "kaburu",
            "chapter": 7
          },
          {
            "id": "l7-vocab-verb-(u)-3",
            "label": "to get to know",
            "value": "しる",
            "subValue": "shiru",
            "chapter": 7
          },
          {
            "id": "l7-vocab-verb-(u)-4",
            "label": "I know",
            "value": "しっています",
            "subValue": "shitteimasu",
            "chapter": 7
          },
          {
            "id": "l7-vocab-verb-(u)-5",
            "label": "I do not know",
            "value": "しりません",
            "subValue": "shirimasen",
            "chapter": 7
          },
          {
            "id": "l7-vocab-verb-(u)-6",
            "label": "to live (〜にすんでいます)",
            "value": "すむ",
            "subValue": "sumu",
            "chapter": 7
          },
          {
            "id": "l7-vocab-verb-(u)-7",
            "label": "to put on (items below waist) (を)",
            "value": "はく",
            "subValue": "haku",
            "chapter": 7
          },
          {
            "id": "l7-vocab-verb-(u)-8",
            "label": "to gain weight",
            "value": "ふとる",
            "subValue": "futoru",
            "chapter": 7
          },
          {
            "id": "l7-vocab-verb-(u)-9",
            "label": "to be on the heavy side",
            "value": "ふとっています",
            "subValue": "futotteimasu",
            "chapter": 7
          }
        ]
      },
      {
        "id": "l7-vocab-verb-(ru)",
        "contentType": "vocabulary",
        "title": "Verb (Ru)",
        "chapter": 7,
        "items": [
          {
            "id": "l7-vocab-verb-(ru)-1",
            "label": "to put on (glasses)",
            "value": "(めがねを)かける",
            "subValue": "kakeru",
            "chapter": 7
          },
          {
            "id": "l7-vocab-verb-(ru)-2",
            "label": "to put on (items above waist) (を)",
            "value": "きる",
            "subValue": "kiru",
            "chapter": 7
          },
          {
            "id": "l7-vocab-verb-(ru)-3",
            "label": "to work for (〜につとめています)",
            "value": "つとめる",
            "subValue": "tsutomeru",
            "chapter": 7
          },
          {
            "id": "l7-vocab-verb-(ru)-4",
            "label": "to lose weight",
            "value": "やせる",
            "subValue": "yaseru",
            "chapter": 7
          },
          {
            "id": "l7-vocab-verb-(ru)-5",
            "label": "to be thin",
            "value": "やせています",
            "subValue": "yaseteimasu",
            "chapter": 7
          }
        ]
      },
      {
        "id": "l7-vocab-verb-(irr)",
        "contentType": "vocabulary",
        "title": "Verb (Irr)",
        "chapter": 7,
        "items": [
          {
            "id": "l7-vocab-verb-(irr)-1",
            "label": "to get married (〜と)",
            "value": "けっこんする",
            "subValue": "kekkonsuru",
            "chapter": 7
          }
        ]
      },
      {
        "id": "l7-vocab-expression",
        "contentType": "vocabulary",
        "title": "Expression",
        "chapter": 7,
        "items": [
          {
            "id": "l7-vocab-expression-1",
            "label": "Do your best.",
            "value": "がんばってください",
            "subValue": "ganbattekudasai",
            "chapter": 7
          },
          {
            "id": "l7-vocab-expression-2",
            "label": "counter for people",
            "value": "〜にん",
            "subValue": "...nin",
            "chapter": 7
          },
          {
            "id": "l7-vocab-expression-3",
            "label": "one person",
            "value": "ひとり",
            "subValue": "hitori",
            "chapter": 7
          },
          {
            "id": "l7-vocab-expression-4",
            "label": "two people",
            "value": "ふたり",
            "subValue": "futari",
            "chapter": 7
          },
          {
            "id": "l7-vocab-expression-5",
            "label": "nothing in particular (+negative)",
            "value": "べつに",
            "subValue": "betsu ni",
            "chapter": 7
          },
          {
            "id": "l7-vocab-expression-6",
            "label": "of course",
            "value": "もちろん",
            "subValue": "mochiron",
            "chapter": 7
          },
          {
            "id": "l7-vocab-expression-7",
            "label": "if you like",
            "value": "よかったら",
            "subValue": "yokattara",
            "chapter": 7
          }
        ]
      },
      {
        "id": "l7-grammar-action-in-progress",
        "contentType": "grammar",
        "title": "Action in Progress",
        "chapter": 7,
        "items": [
          {
            "id": "l7-grammar-1",
            "label": "Action in Progress",
            "value": "〜ています",
            "subValue": "~te imasu. (I am doing...).",
            "chapter": 7,
            "example": {
              "japanese": "ロバートさんは今、ねています。",
              "reading": "Robaato-san wa ima, nete imasu.",
              "translation": "Robert is sleeping right now."
            }
          }
        ]
      },
      {
        "id": "l7-grammar-resultant-state",
        "contentType": "grammar",
        "title": "Resultant State",
        "chapter": 7,
        "items": [
          {
            "id": "l7-grammar-2",
            "label": "Resultant State",
            "value": "〜ています",
            "subValue": "~te imasu. (I am married / I live in... / I have [verb]ed).",
            "chapter": 7,
            "example": {
              "japanese": "おねえさんはけっこんしています。",
              "reading": "Oneesan wa kekkon shite imasu.",
              "translation": "My older sister is married."
            }
          }
        ]
      },
      {
        "id": "l7-grammar-body-parts",
        "contentType": "grammar",
        "title": "Body Parts",
        "chapter": 7,
        "items": [
          {
            "id": "l7-grammar-3",
            "label": "Body Parts",
            "value": "A は B が Adj です",
            "subValue": "Person wa [body part] ga [adjective] desu. (Person has [adjective] [body part]).",
            "chapter": 7,
            "example": {
              "japanese": "トムさんはかみがながいです。",
              "reading": "Tomu-san wa kami ga nagai desu.",
              "translation": "Tom has long hair."
            }
          }
        ]
      },
      {
        "id": "l7-grammar-te-forms-adjectives",
        "contentType": "grammar",
        "title": "Te-forms (Adjectives/Joining)",
        "chapter": 7,
        "items": [
          {
            "id": "l7-grammar-4",
            "label": "Te-forms (Adjectives)",
            "value": "〜くて / 〜で",
            "subValue": "Join sentences. **I-Adj:** Drop -i, add -kute. **Na-Adj:** Add -de. **Noun:** Add -de.",
            "chapter": 7,
            "example": {
              "japanese": "このみせのたべものはやすくて、おいしいです。",
              "reading": "Kono mise no tabemono wa yasukute, oishii desu.",
              "translation": "The food at this store is cheap and delicious."
            }
          }
        ]
      },
      {
        "id": "l7-grammar-movement-purpose",
        "contentType": "grammar",
        "title": "Movement Purpose",
        "chapter": 7,
        "items": [
          {
            "id": "l7-grammar-5",
            "label": "Movement Purpose",
            "value": "Stem に行きます",
            "subValue": "Destination ni/e Purpose(stem) ni ikimasu. (Go to [place] to do [purpose]).",
            "chapter": 7,
            "example": {
              "japanese": "デパートにかばんをかいにいきます。",
              "reading": "Depaato ni kaban o kai ni ikimasu.",
              "translation": "I am going to the department store to buy a bag."
            }
          }
        ]
      },
      {
        "id": "l7-grammar-counting-people",
        "contentType": "grammar",
        "title": "Counting People",
        "chapter": 7,
        "items": [
          {
            "id": "l7-grammar-6",
            "label": "Counting People",
            "value": "〜人",
            "subValue": "Hitori, Futari, San-nin, Yo-nin...",
            "chapter": 7,
            "example": {
              "japanese": "クラスにアメリカ人がふたりいます。",
              "reading": "Kurasu ni Amerikajin ga futari imasu.",
              "translation": "There are two Americans in the class."
            }
          }
        ]
      },
      {
        "id": "lesson-7-kanji",
        "contentType": "kanji",
        "title": "Lesson 7 Kanji: Family",
        "chapter": 7,
        "items": [
          { "id": "lesson-7-kanji-1", "label": "Tokyo", "value": "東京", "subValue": "とうきょう", "chapter": 7 },
          { "id": "lesson-7-kanji-2", "label": "Kyoko", "value": "京子", "subValue": "きょうこ", "chapter": 7 },
          { "id": "lesson-7-kanji-3", "label": "child", "value": "子ども", "subValue": "こども", "chapter": 7 },
          { "id": "lesson-7-kanji-4", "label": "e-mail", "value": "電子メール", "subValue": "でんしメール", "chapter": 7 },
          { "id": "lesson-7-kanji-5", "label": "small", "value": "小さい", "subValue": "ちいさい", "chapter": 7 },
          { "id": "lesson-7-kanji-6", "label": "elementary school", "value": "小学校", "subValue": "しょうがっこう", "chapter": 7 },
          { "id": "lesson-7-kanji-7", "label": "to meet", "value": "会う", "subValue": "あう", "chapter": 7 },
          { "id": "lesson-7-kanji-8", "label": "company", "value": "会社", "subValue": "かいしゃ", "chapter": 7 },
          { "id": "lesson-7-kanji-9", "label": "church", "value": "教会", "subValue": "きょうかい", "chapter": 7 },
          { "id": "lesson-7-kanji-10", "label": "sociology; society", "value": "社会", "subValue": "しゃかい", "chapter": 7 },
          { "id": "lesson-7-kanji-11", "label": "shrine", "value": "神社", "subValue": "じんじゃ", "chapter": 7 },
          { "id": "lesson-7-kanji-12", "label": "(my) father", "value": "父", "subValue": "ちち", "chapter": 7 },
          { "id": "lesson-7-kanji-13", "label": "father", "value": "お父さん", "subValue": "おとうさん", "chapter": 7 },
          { "id": "lesson-7-kanji-14", "label": "father and mother", "value": "父母", "subValue": "ふぼ", "chapter": 7 },
          { "id": "lesson-7-kanji-15", "label": "(my) mother", "value": "母", "subValue": "はは", "chapter": 7 },
          { "id": "lesson-7-kanji-16", "label": "mother", "value": "お母さん", "subValue": "おかあさん", "chapter": 7 },
          { "id": "lesson-7-kanji-17", "label": "mother tongue", "value": "母国語", "subValue": "ぼこくご", "chapter": 7 },
          { "id": "lesson-7-kanji-18", "label": "expensive; high", "value": "高い", "subValue": "たかい", "chapter": 7 },
          { "id": "lesson-7-kanji-19", "label": "high school", "value": "高校", "subValue": "こうこう", "chapter": 7 },
          { "id": "lesson-7-kanji-20", "label": "high school student", "value": "高校生", "subValue": "こうこうせい", "chapter": 7 },
          { "id": "lesson-7-kanji-21", "label": "school", "value": "学校", "subValue": "がっこう", "chapter": 7 },
          { "id": "lesson-7-kanji-22", "label": "junior high school", "value": "中学校", "subValue": "ちゅうがっこう", "chapter": 7 },
          { "id": "lesson-7-kanji-23", "label": "every day", "value": "毎日", "subValue": "まいにち", "chapter": 7 },
          { "id": "lesson-7-kanji-24", "label": "every week", "value": "毎週", "subValue": "まいしゅう", "chapter": 7 },
          { "id": "lesson-7-kanji-25", "label": "every night", "value": "毎晩", "subValue": "まいばん", "chapter": 7 },
          { "id": "lesson-7-kanji-26", "label": "every year", "value": "毎年", "subValue": "まいとし", "chapter": 7 },
          { "id": "lesson-7-kanji-27", "label": "Japanese language", "value": "日本語", "subValue": "にほんご", "chapter": 7 },
          { "id": "lesson-7-kanji-28", "label": "English language", "value": "英語", "subValue": "えいご", "chapter": 7 },
          { "id": "lesson-7-kanji-29", "label": "honorifics", "value": "敬語", "subValue": "けいご", "chapter": 7 },
          { "id": "lesson-7-kanji-30", "label": "literature", "value": "文学", "subValue": "ぶんがく", "chapter": 7 },
          { "id": "lesson-7-kanji-31", "label": "composition", "value": "作文", "subValue": "さくぶん", "chapter": 7 },
          { "id": "lesson-7-kanji-32", "label": "letter; character", "value": "文字", "subValue": "もじ", "chapter": 7 },
          { "id": "lesson-7-kanji-33", "label": "culture", "value": "文化", "subValue": "ぶんか", "chapter": 7 },
          { "id": "lesson-7-kanji-34", "label": "to return", "value": "帰る", "subValue": "かえる", "chapter": 7 },
          { "id": "lesson-7-kanji-35", "label": "going home (to one's country)", "value": "帰国", "subValue": "きこく", "chapter": 7 },
          { "id": "lesson-7-kanji-36", "label": "to enter", "value": "入る", "subValue": "はいる", "chapter": 7 },
          { "id": "lesson-7-kanji-37", "label": "to put something in", "value": "入れる", "subValue": "いれる", "chapter": 7 },
          { "id": "lesson-7-kanji-38", "label": "entrance", "value": "入口", "subValue": "いりぐち", "chapter": 7 },
          { "id": "lesson-7-kanji-39", "label": "import", "value": "輸入", "subValue": "ゆにゅう", "chapter": 7 }
        ]
      }
    ]
  },
  {
    "id": "lesson-8",
    "title": "Lesson 8: Barbecue (バーベキュー)",
    "cards": [
      {
        "id": "l8-vocab-topic",
        "contentType": "vocabulary",
        "title": "Topic",
        "chapter": 8,
        "items": [
          {
            "id": "l8-vocab-topic-1",
            "label": "the day after tomorrow",
            "value": "あさって",
            "subValue": "asatte",
            "chapter": 8
          },
          {
            "id": "l8-vocab-topic-2",
            "label": "rain",
            "value": "あめ",
            "subValue": "ame",
            "chapter": 8
          },
          {
            "id": "l8-vocab-topic-3",
            "label": "office worker",
            "value": "かいしゃいん",
            "subValue": "kaishain",
            "chapter": 8
          },
          {
            "id": "l8-vocab-topic-4",
            "label": "camera",
            "value": "カメラ",
            "subValue": "kamera",
            "chapter": 8
          },
          {
            "id": "l8-vocab-topic-5",
            "label": "karaoke",
            "value": "カラオケ",
            "subValue": "karaoke",
            "chapter": 8
          },
          {
            "id": "l8-vocab-topic-6",
            "label": "air",
            "value": "くうき",
            "subValue": "kuuki",
            "chapter": 8
          },
          {
            "id": "l8-vocab-topic-7",
            "label": "this morning",
            "value": "けさ",
            "subValue": "kesa",
            "chapter": 8
          },
          {
            "id": "l8-vocab-topic-8",
            "label": "blackboard",
            "value": "こくばん",
            "subValue": "kokuban",
            "chapter": 8
          },
          {
            "id": "l8-vocab-topic-9",
            "label": "this month",
            "value": "こんげつ",
            "subValue": "kongetsu",
            "chapter": 8
          },
          {
            "id": "l8-vocab-topic-10",
            "label": "job; work",
            "value": "しごと",
            "subValue": "shigoto",
            "chapter": 8
          },
          {
            "id": "l8-vocab-topic-11",
            "label": "college student",
            "value": "だいがくせい",
            "subValue": "daigakusee",
            "chapter": 8
          },
          {
            "id": "l8-vocab-topic-12",
            "label": "weather forecast",
            "value": "てんきよほう",
            "subValue": "tenkiyopoo",
            "chapter": 8
          },
          {
            "id": "l8-vocab-topic-13",
            "label": "tomato",
            "value": "トマト",
            "subValue": "tomato",
            "chapter": 8
          },
          {
            "id": "l8-vocab-topic-14",
            "label": "summer",
            "value": "なつ",
            "subValue": "natsu",
            "chapter": 8
          },
          {
            "id": "l8-vocab-topic-15",
            "label": "something",
            "value": "なにか",
            "subValue": "nanika",
            "chapter": 8
          },
          {
            "id": "l8-vocab-topic-16",
            "label": "party",
            "value": "パーティー",
            "subValue": "paatii",
            "chapter": 8
          },
          {
            "id": "l8-vocab-topic-17",
            "label": "barbecue",
            "value": "バーベキュー",
            "subValue": "baabekyuu",
            "chapter": 8
          },
          {
            "id": "l8-vocab-topic-18",
            "label": "chopsticks",
            "value": "はし",
            "subValue": "hashi",
            "chapter": 8
          },
          {
            "id": "l8-vocab-topic-19",
            "label": "winter",
            "value": "ふゆ",
            "subValue": "fuyu",
            "chapter": 8
          },
          {
            "id": "l8-vocab-topic-20",
            "label": "homestay",
            "value": "ホームステイ",
            "subValue": "hoomusutei",
            "chapter": 8
          },
          {
            "id": "l8-vocab-topic-21",
            "label": "every week",
            "value": "まいしゅう",
            "subValue": "maishuu",
            "chapter": 8
          },
          {
            "id": "l8-vocab-topic-22",
            "label": "next month",
            "value": "らいげつ",
            "subValue": "raigetsu",
            "chapter": 8
          }
        ]
      },
      {
        "id": "l8-vocab-adj-(i)",
        "contentType": "vocabulary",
        "title": "Adj (I)",
        "chapter": 8,
        "items": [
          {
            "id": "l8-vocab-adj-(i)-1",
            "label": "skillful; good at... (が)",
            "value": "じょうず",
            "subValue": "joozu",
            "chapter": 8
          },
          {
            "id": "l8-vocab-adj-(i)-2",
            "label": "clumsy; poor at... (が)",
            "value": "へた",
            "subValue": "heta",
            "chapter": 8
          },
          {
            "id": "l8-vocab-adj-(i)-3",
            "label": "famous",
            "value": "ゆうめい",
            "subValue": "yuumei",
            "chapter": 8
          }
        ]
      },
      {
        "id": "l8-vocab-verb-(u)",
        "contentType": "vocabulary",
        "title": "Verb (U)",
        "chapter": 8,
        "items": [
          {
            "id": "l8-vocab-verb-(u)-1",
            "label": "to wash (を)",
            "value": "あらう",
            "subValue": "arau",
            "chapter": 8
          },
          {
            "id": "l8-vocab-verb-(u)-2",
            "label": "to need (が)",
            "value": "いる",
            "subValue": "iru",
            "chapter": 8
          },
          {
            "id": "l8-vocab-verb-(u)-3",
            "label": "to be late",
            "value": "おそくなる",
            "subValue": "osokunaru",
            "chapter": 8
          },
          {
            "id": "l8-vocab-verb-(u)-4",
            "label": "to take a bath",
            "value": "おふろにはいる",
            "subValue": "ofuronihairu",
            "chapter": 8
          },
          {
            "id": "l8-vocab-verb-(u)-5",
            "label": "to think",
            "value": "おもう",
            "subValue": "omou",
            "chapter": 8
          },
          {
            "id": "l8-vocab-verb-(u)-6",
            "label": "to cut (を)",
            "value": "きる",
            "subValue": "kiru",
            "chapter": 8
          },
          {
            "id": "l8-vocab-verb-(u)-7",
            "label": "to make (を)",
            "value": "つくる",
            "subValue": "tsukuru",
            "chapter": 8
          },
          {
            "id": "l8-vocab-verb-(u)-8",
            "label": "(rain/snow) falls",
            "value": "(あめ/ゆきが)ふる",
            "subValue": "furu",
            "chapter": 8
          },
          {
            "id": "l8-vocab-verb-(u)-9",
            "label": "to take (a thing) (を)",
            "value": "もっていく",
            "subValue": "motteiku",
            "chapter": 8
          }
        ]
      },
      {
        "id": "l8-vocab-verb-(ru)",
        "contentType": "vocabulary",
        "title": "Verb (Ru)",
        "chapter": 8,
        "items": [
          {
            "id": "l8-vocab-verb-(ru)-1",
            "label": "to throw away (を)",
            "value": "すてる",
            "subValue": "suteru",
            "chapter": 8
          },
          {
            "id": "l8-vocab-verb-(ru)-2",
            "label": "to begin (を)",
            "value": "はじめる",
            "subValue": "hajimeru",
            "chapter": 8
          }
        ]
      },
      {
        "id": "l8-vocab-verb-(irr)",
        "contentType": "vocabulary",
        "title": "Verb (Irr)",
        "chapter": 8,
        "items": [
          {
            "id": "l8-vocab-verb-(irr)-1",
            "label": "to drive (を)",
            "value": "うんてんする",
            "subValue": "untensuru",
            "chapter": 8
          },
          {
            "id": "l8-vocab-verb-(irr)-2",
            "label": "to do laundry (を)",
            "value": "せんたくする",
            "subValue": "sentakusuru",
            "chapter": 8
          },
          {
            "id": "l8-vocab-verb-(irr)-3",
            "label": "to clean (を)",
            "value": "そうじする",
            "subValue": "soojisuru",
            "chapter": 8
          },
          {
            "id": "l8-vocab-verb-(irr)-4",
            "label": "to cook",
            "value": "りょうりする",
            "subValue": "ryoorisuru",
            "chapter": 8
          }
        ]
      },
      {
        "id": "l8-vocab-expression",
        "contentType": "vocabulary",
        "title": "Expression",
        "chapter": 8,
        "items": [
          {
            "id": "l8-vocab-expression-1",
            "label": "uh-uh; no",
            "value": "ううん",
            "subValue": "uun",
            "chapter": 8
          },
          {
            "id": "l8-vocab-expression-2",
            "label": "uh-huh; yes",
            "value": "うん",
            "subValue": "un",
            "chapter": 8
          },
          {
            "id": "l8-vocab-expression-3",
            "label": "Cheers! (a toast)",
            "value": "かんぱい",
            "subValue": "kanpai",
            "chapter": 8
          },
          {
            "id": "l8-vocab-expression-4",
            "label": "That's too bad.",
            "value": "ざんねん(ですね)",
            "subValue": "zannen(desu ne)",
            "chapter": 8
          },
          {
            "id": "l8-vocab-expression-5",
            "label": "not... yet",
            "value": "まだ",
            "subValue": "mada",
            "chapter": 8
          }
        ]
      },
      {
        "id": "l8-grammar-short-forms",
        "contentType": "grammar",
        "title": "Short Forms (Verbs)",
        "chapter": 8,
        "items": [
          {
            "id": "l8-grammar-1",
            "label": "Short Forms (Verbs)",
            "value": "Dict / Nai-form",
            "subValue": "Informal speech foundation. **Present Aff:** Dictionary form. **Present Neg:** Nai-form.",
            "chapter": 8
          }
        ]
      },
      {
        "id": "l8-grammar-informal-speech",
        "contentType": "grammar",
        "title": "Informal Speech",
        "chapter": 8,
        "items": [
          {
            "id": "l8-grammar-2",
            "label": "Informal Speech",
            "value": "Short Form",
            "subValue": "Use short forms instead of Masu/Desu forms. Drop particles sometimes.",
            "chapter": 8,
            "example": {
              "japanese": "今日、がっこうにいく？",
              "reading": "Kyoo, gakkoo ni iku?",
              "translation": "Are you going to school today? (Informal)"
            }
          }
        ]
      },
      {
        "id": "l8-grammar-quotations-think",
        "contentType": "grammar",
        "title": "Quotations (Think)",
        "chapter": 8,
        "items": [
          {
            "id": "l8-grammar-3",
            "label": "Quotations (Think)",
            "value": "Short Form + と思います",
            "subValue": "[Short Form] to omoimasu. (I think that...).",
            "chapter": 8,
            "example": {
              "japanese": "たけしさんはひまだとおもいます。",
              "reading": "Takeshi-san wa hima da to omoimasu.",
              "translation": "I think Takeshi is free."
            }
          }
        ]
      },
      {
        "id": "l8-grammar-quotations-say",
        "contentType": "grammar",
        "title": "Quotations (Say)",
        "chapter": 8,
        "items": [
          {
            "id": "l8-grammar-4",
            "label": "Quotations (Say)",
            "value": "Short Form + と言っていました",
            "subValue": "[Short Form] to itte imashita. (They said that...).",
            "chapter": 8,
            "example": {
              "japanese": "メアリーさんはパーティーにいかないといっていました。",
              "reading": "Mearii-san wa paatii ni ikanai to itte imashita.",
              "translation": "Mary said she wouldn't go to the party."
            }
          }
        ]
      },
      {
        "id": "l8-grammar-negative-request",
        "contentType": "grammar",
        "title": "Negative Request",
        "chapter": 8,
        "items": [
          {
            "id": "l8-grammar-5",
            "label": "Negative Request",
            "value": "〜ないでください",
            "subValue": "~nai de kudasai. (Please don't...).",
            "chapter": 8,
            "example": {
              "japanese": "まどをあけないでください。",
              "reading": "Mado o akenai de kudasai.",
              "translation": "Please don't open the window."
            }
          }
        ]
      },
      {
        "id": "l8-grammar-nominalization",
        "contentType": "grammar",
        "title": "Verb Nominalization",
        "chapter": 8,
        "items": [
          {
            "id": "l8-grammar-6",
            "label": "Verb Nominalization",
            "value": "Verb(short) + の",
            "subValue": "Verb(short) + no. (e.g., *Nihongo o hanasu no* ga suki desu).",
            "chapter": 8,
            "example": {
              "japanese": "わたしはえをみるのがすきです。",
              "reading": "Watashi wa e o miru no ga suki desu.",
              "translation": "I like looking at paintings."
            }
          }
        ]
      },
      {
        "id": "l8-grammar-particle-ga",
        "contentType": "grammar",
        "title": "Particle Ga",
        "chapter": 8,
        "items": [
          {
            "id": "l8-grammar-7",
            "label": "Particle Ga",
            "value": "Subject が",
            "subValue": "Emphasizes the subject (Who did it? *Mary* did it).",
            "chapter": 8
          }
        ]
      },
      {
        "id": "lesson-8-kanji",
        "contentType": "kanji",
        "title": "Lesson 8 Kanji: Work and Routine",
        "chapter": 8,
        "items": [
          { "id": "lesson-8-kanji-1", "label": "office worker", "value": "会社員", "subValue": "かいしゃいん", "chapter": 8 },
          { "id": "lesson-8-kanji-2", "label": "store clerk", "value": "店員", "subValue": "てんいん", "chapter": 8 },
          { "id": "lesson-8-kanji-3", "label": "member", "value": "会員", "subValue": "かいいん", "chapter": 8 },
          { "id": "lesson-8-kanji-4", "label": "new", "value": "新しい", "subValue": "あたらしい", "chapter": 8 },
          { "id": "lesson-8-kanji-5", "label": "newspaper", "value": "新聞", "subValue": "しんぶん", "chapter": 8 },
          { "id": "lesson-8-kanji-6", "label": "Bullet Train", "value": "新幹線", "subValue": "しんかんせん", "chapter": 8 },
          { "id": "lesson-8-kanji-7", "label": "to listen", "value": "聞く", "subValue": "きく", "chapter": 8 },
          { "id": "lesson-8-kanji-8", "label": "can be heard", "value": "聞こえる", "subValue": "きこえる", "chapter": 8 },
          { "id": "lesson-8-kanji-9", "label": "to make", "value": "作る", "subValue": "つくる", "chapter": 8 },
          { "id": "lesson-8-kanji-10", "label": "composition", "value": "作文", "subValue": "さくぶん", "chapter": 8 },
          { "id": "lesson-8-kanji-11", "label": "artistic piece", "value": "作品", "subValue": "さくひん", "chapter": 8 },
          { "id": "lesson-8-kanji-12", "label": "job; work", "value": "仕事", "subValue": "しごと", "chapter": 8 },
          { "id": "lesson-8-kanji-13", "label": "it cannot be helped", "value": "仕方がない", "subValue": "しかたがない", "chapter": 8 },
          { "id": "lesson-8-kanji-14", "label": "thing", "value": "事", "subValue": "こと", "chapter": 8 },
          { "id": "lesson-8-kanji-15", "label": "meal", "value": "食事", "subValue": "しょくじ", "chapter": 8 },
          { "id": "lesson-8-kanji-16", "label": "train", "value": "電車", "subValue": "でんしゃ", "chapter": 8 },
          { "id": "lesson-8-kanji-17", "label": "electricity", "value": "電気", "subValue": "でんき", "chapter": 8 },
          { "id": "lesson-8-kanji-18", "label": "telephone", "value": "電話", "subValue": "でんわ", "chapter": 8 },
          { "id": "lesson-8-kanji-19", "label": "car", "value": "車", "subValue": "くるま", "chapter": 8 },
          { "id": "lesson-8-kanji-20", "label": "bicycle", "value": "自転車", "subValue": "じてんしゃ", "chapter": 8 },
          { "id": "lesson-8-kanji-21", "label": "to be absent; to rest", "value": "休む", "subValue": "やすむ", "chapter": 8 },
          { "id": "lesson-8-kanji-22", "label": "holiday; absence", "value": "休み", "subValue": "やすみ", "chapter": 8 },
          { "id": "lesson-8-kanji-23", "label": "holiday", "value": "休日", "subValue": "きゅうじつ", "chapter": 8 },
          { "id": "lesson-8-kanji-24", "label": "to say", "value": "言う", "subValue": "いう", "chapter": 8 },
          { "id": "lesson-8-kanji-25", "label": "language", "value": "言語", "subValue": "げんご", "chapter": 8 },
          { "id": "lesson-8-kanji-26", "label": "word; language", "value": "言葉", "subValue": "ことば", "chapter": 8 },
          { "id": "lesson-8-kanji-27", "label": "to read", "value": "読む", "subValue": "よむ", "chapter": 8 },
          { "id": "lesson-8-kanji-28", "label": "reading books", "value": "読書", "subValue": "どくしょ", "chapter": 8 },
          { "id": "lesson-8-kanji-29", "label": "to think", "value": "思う", "subValue": "おもう", "chapter": 8 },
          { "id": "lesson-8-kanji-30", "label": "next", "value": "次", "subValue": "つぎ", "chapter": 8 },
          { "id": "lesson-8-kanji-31", "label": "second daughter", "value": "次女", "subValue": "じじょ", "chapter": 8 },
          { "id": "lesson-8-kanji-32", "label": "what", "value": "何", "subValue": "なに", "chapter": 8 },
          { "id": "lesson-8-kanji-33", "label": "what time", "value": "何時", "subValue": "なんじ", "chapter": 8 },
          { "id": "lesson-8-kanji-34", "label": "how many people", "value": "何人", "subValue": "なんにん", "chapter": 8 },
          { "id": "lesson-8-kanji-35", "label": "something", "value": "何か", "subValue": "なにか", "chapter": 8 }
        ]
      }
    ]
  },
  {
    "id": "lesson-9",
    "title": "Lesson 9: Kabuki (かぶき)",
    "cards": [
      {
        "id": "l9-vocab-topic",
        "contentType": "vocabulary",
        "title": "Topic",
        "chapter": 9,
        "items": [
          {
            "id": "l9-vocab-topic-1",
            "label": "good child",
            "value": "いいこ",
            "subValue": "iiko",
            "chapter": 9
          },
          {
            "id": "l9-vocab-topic-2",
            "label": "color",
            "value": "いろ",
            "subValue": "iro",
            "chapter": 9
          },
          {
            "id": "l9-vocab-topic-3",
            "label": "boxed lunch",
            "value": "おべんとう",
            "subValue": "obentoo",
            "chapter": 9
          },
          {
            "id": "l9-vocab-topic-4",
            "label": "Kabuki; traditional Japanese theatrical art",
            "value": "かぶき",
            "subValue": "kabuki",
            "chapter": 9
          },
          {
            "id": "l9-vocab-topic-5",
            "label": "guitar",
            "value": "ギター",
            "subValue": "gitaa",
            "chapter": 9
          },
          {
            "id": "l9-vocab-topic-6",
            "label": "last year",
            "value": "きょねん",
            "subValue": "kyonen",
            "chapter": 9
          },
          {
            "id": "l9-vocab-topic-7",
            "label": "medicine",
            "value": "くすり",
            "subValue": "kusuri",
            "chapter": 9
          },
          {
            "id": "l9-vocab-topic-8",
            "label": "to take medicine",
            "value": "くすりをのむ",
            "subValue": "kusurionomu",
            "chapter": 9
          },
          {
            "id": "l9-vocab-topic-9",
            "label": "concert",
            "value": "コンサート",
            "subValue": "konsaato",
            "chapter": 9
          },
          {
            "id": "l9-vocab-topic-10",
            "label": "near future",
            "value": "こんど",
            "subValue": "kondo",
            "chapter": 9
          },
          {
            "id": "l9-vocab-topic-11",
            "label": "essay; composition",
            "value": "さくぶん",
            "subValue": "sakubun",
            "chapter": 9
          },
          {
            "id": "l9-vocab-topic-12",
            "label": "exam",
            "value": "しけん",
            "subValue": "shiken",
            "chapter": 9
          },
          {
            "id": "l9-vocab-topic-13",
            "label": "ski",
            "value": "スキー",
            "subValue": "sukii",
            "chapter": 9
          },
          {
            "id": "l9-vocab-topic-14",
            "label": "last month",
            "value": "せんげつ",
            "subValue": "sengetsu",
            "chapter": 9
          },
          {
            "id": "l9-vocab-topic-15",
            "label": "word; vocabulary",
            "value": "たんご",
            "subValue": "tango",
            "chapter": 9
          },
          {
            "id": "l9-vocab-topic-16",
            "label": "piano",
            "value": "ピアノ",
            "subValue": "piano",
            "chapter": 9
          },
          {
            "id": "l9-vocab-topic-17",
            "label": "pizza",
            "value": "ピザ",
            "subValue": "piza",
            "chapter": 9
          },
          {
            "id": "l9-vocab-topic-18",
            "label": "illness; sickness",
            "value": "びょうき",
            "subValue": "byooki",
            "chapter": 9
          }
        ]
      },
      {
        "id": "l9-vocab-adj-(i)",
        "contentType": "vocabulary",
        "title": "Adj (I)",
        "chapter": 9,
        "items": [
          {
            "id": "l9-vocab-adj-(i)-1",
            "label": "blue",
            "value": "あおい",
            "subValue": "aoi",
            "chapter": 9
          },
          {
            "id": "l9-vocab-adj-(i)-2",
            "label": "red",
            "value": "あかい",
            "subValue": "akai",
            "chapter": 9
          },
          {
            "id": "l9-vocab-adj-(i)-3",
            "label": "black",
            "value": "くろい",
            "subValue": "kuroi",
            "chapter": 9
          },
          {
            "id": "l9-vocab-adj-(i)-4",
            "label": "lonely",
            "value": "さびしい",
            "subValue": "sabishii",
            "chapter": 9
          },
          {
            "id": "l9-vocab-adj-(i)-5",
            "label": "white",
            "value": "しろい",
            "subValue": "shiroi",
            "chapter": 9
          },
          {
            "id": "l9-vocab-adj-(i)-6",
            "label": "young",
            "value": "わかい",
            "subValue": "wakai",
            "chapter": 9
          }
        ]
      },
      {
        "id": "l9-vocab-adj-(na)",
        "contentType": "vocabulary",
        "title": "Adj (Na)",
        "chapter": 9,
        "items": [
          {
            "id": "l9-vocab-adj-(na)-1",
            "label": "mean-spirited",
            "value": "いじわる",
            "subValue": "ijiwaru",
            "chapter": 9
          }
        ]
      },
      {
        "id": "l9-vocab-verb-(u)",
        "contentType": "vocabulary",
        "title": "Verb (U)",
        "chapter": 9,
        "items": [
          {
            "id": "l9-vocab-verb-(u)-1",
            "label": "to dance",
            "value": "おどる",
            "subValue": "odoru",
            "chapter": 9
          },
          {
            "id": "l9-vocab-verb-(u)-2",
            "label": "(something) ends (が)",
            "value": "おわる",
            "subValue": "owaru",
            "chapter": 9
          },
          {
            "id": "l9-vocab-verb-(u)-3",
            "label": "to be popular",
            "value": "にんきがある",
            "subValue": "ninkigaaru",
            "chapter": 9
          },
          {
            "id": "l9-vocab-verb-(u)-4",
            "label": "(something) begins (が)",
            "value": "はじまる",
            "subValue": "hajimaru",
            "chapter": 9
          },
          {
            "id": "l9-vocab-verb-(u)-5",
            "label": "to play (a string instrument or piano) (を)",
            "value": "ひく",
            "subValue": "hiku",
            "chapter": 9
          },
          {
            "id": "l9-vocab-verb-(u)-6",
            "label": "to get (from somebody) (person に thing を)",
            "value": "もらう",
            "subValue": "morau",
            "chapter": 9
          }
        ]
      },
      {
        "id": "l9-vocab-verb-(ru)",
        "contentType": "vocabulary",
        "title": "Verb (Ru)",
        "chapter": 9,
        "items": [
          {
            "id": "l9-vocab-verb-(ru)-1",
            "label": "to memorize",
            "value": "おぼえる",
            "subValue": "oboeru",
            "chapter": 9
          },
          {
            "id": "l9-vocab-verb-(ru)-2",
            "label": "to appear; to attend (に); to exit (を)",
            "value": "でる",
            "subValue": "deru",
            "chapter": 9
          }
        ]
      },
      {
        "id": "l9-vocab-verb-(irr)",
        "contentType": "vocabulary",
        "title": "Verb (Irr)",
        "chapter": 9,
        "items": [
          {
            "id": "l9-vocab-verb-(irr)-1",
            "label": "to do physical exercises",
            "value": "うんどうする",
            "subValue": "undoosuru",
            "chapter": 9
          },
          {
            "id": "l9-vocab-verb-(irr)-2",
            "label": "to take a walk",
            "value": "さんぽする",
            "subValue": "sanposuru",
            "chapter": 9
          }
        ]
      },
      {
        "id": "l9-vocab-expression",
        "contentType": "vocabulary",
        "title": "Expression",
        "chapter": 9,
        "items": [
          {
            "id": "l9-vocab-expression-1",
            "label": "from...",
            "value": "〜から",
            "subValue": "...kara",
            "chapter": 9
          },
          {
            "id": "l9-vocab-expression-2",
            "label": "by all means",
            "value": "ぜひ",
            "subValue": "zehi",
            "chapter": 9
          },
          {
            "id": "l9-vocab-expression-3",
            "label": "by the way",
            "value": "ところで",
            "subValue": "tokorode",
            "chapter": 9
          },
          {
            "id": "l9-vocab-expression-4",
            "label": "all",
            "value": "みんな",
            "subValue": "minna",
            "chapter": 9
          },
          {
            "id": "l9-vocab-expression-5",
            "label": "already",
            "value": "もう",
            "subValue": "moo",
            "chapter": 9
          }
        ]
      },
      {
        "id": "l9-grammar-past-tense-short",
        "contentType": "grammar",
        "title": "Past Tense (Short)",
        "chapter": 9,
        "items": [
          {
            "id": "l9-grammar-1",
            "label": "Past Tense (Short)",
            "value": "Ta-form / Nakatta-form",
            "subValue": "**Verbs:** Ta-form (Affirmative), Nakatta-form (Negative).",
            "chapter": 9,
            "example": {
              "japanese": "きのう、べんきょうしなかった。",
              "reading": "Kinoo, benkyoo shinakatta.",
              "translation": "I didn't study yesterday. (Informal)"
            }
          }
        ]
      },
      {
        "id": "l9-grammar-ta-form",
        "contentType": "grammar",
        "title": "Ta-form",
        "chapter": 9,
        "items": [
          {
            "id": "l9-grammar-2",
            "label": "Ta-form",
            "value": "〜た / 〜だ",
            "subValue": "Constructed exactly like Te-form, but replace 'te' with 'ta'.",
            "chapter": 9
          }
        ]
      },
      {
        "id": "l9-grammar-nakatta-form",
        "contentType": "grammar",
        "title": "Nakatta-form",
        "chapter": 9,
        "items": [
          {
            "id": "l9-grammar-3",
            "label": "Nakatta-form",
            "value": "〜なかった",
            "subValue": "Replace 'nai' in present negative with 'nakatta'.",
            "chapter": 9
          }
        ]
      },
      {
        "id": "l9-grammar-past-tense-adj-noun",
        "contentType": "grammar",
        "title": "Past Tense (Adj/Noun)",
        "chapter": 9,
        "items": [
          {
            "id": "l9-grammar-4",
            "label": "Past Tense (Adj/Noun)",
            "value": "〜かった / 〜だった",
            "subValue": "**I-Adj:** -katta. **Na-Adj/Noun:** -datta.",
            "chapter": 9
          }
        ]
      },
      {
        "id": "l9-grammar-qualifying-nouns",
        "contentType": "grammar",
        "title": "Qualifying Nouns",
        "chapter": 9,
        "items": [
          {
            "id": "l9-grammar-5",
            "label": "Qualifying Nouns",
            "value": "Short Form + Noun",
            "subValue": "Use Short Form verbs/adjectives before a noun to modify it.",
            "chapter": 9,
            "example": {
              "japanese": "きのうとったしゃしんはどこですか。",
              "reading": "Kinoo totta shashin wa doko desu ka.",
              "translation": "Where is the picture I took yesterday?"
            }
          }
        ]
      },
      {
        "id": "l9-grammar-mada-moo",
        "contentType": "grammar",
        "title": "Mada / Moo",
        "chapter": 9,
        "items": [
          {
            "id": "l9-grammar-6",
            "label": "Mada/Moo",
            "value": "もう + Past / まだ + Te-iru",
            "subValue": "**Moo** + Past Affirmative (Already did). **Mada** + Te-form iru (Haven't done yet).",
            "chapter": 9,
            "example": {
              "japanese": "もうひるごはんをたべました。",
              "reading": "Moo hirugohan o tabemashita.",
              "translation": "I already ate lunch."
            }
          }
        ]
      },
      {
        "id": "l9-grammar-explanation",
        "contentType": "grammar",
        "title": "Explanation",
        "chapter": 9,
        "items": [
          {
            "id": "l9-grammar-7",
            "label": "Explanation",
            "value": "Reason から, Situation",
            "subValue": "[Reason] kara, [Situation]. (Because [Reason], [Situation]).",
            "chapter": 9,
            "example": {
              "japanese": "びょうきだから、学校にいきません。",
              "reading": "Byooki dakara, gakkoo ni ikimasen.",
              "translation": "Because I am sick, I will not go to school."
            }
          }
        ]
      },
      {
        "id": "lesson-9-kanji",
        "contentType": "kanji",
        "title": "Lesson 9 Kanji: Past Tense",
        "chapter": 9,
        "items": [
          { "id": "lesson-9-kanji-1", "label": "A.M.", "value": "午前", "subValue": "ごぜん", "chapter": 9 },
          { "id": "lesson-9-kanji-2", "label": "P.M.", "value": "午後", "subValue": "ごご", "chapter": 9 },
          { "id": "lesson-9-kanji-3", "label": "in the morning", "value": "午前中", "subValue": "ごぜんちゅう", "chapter": 9 },
          { "id": "lesson-9-kanji-4", "label": "after...", "value": "〜の後", "subValue": "〜のあと", "chapter": 9 },
          { "id": "lesson-9-kanji-5", "label": "later", "value": "後で", "subValue": "あとで", "chapter": 9 },
          { "id": "lesson-9-kanji-6", "label": "back; behind", "value": "後ろ", "subValue": "うしろ", "chapter": 9 },
          { "id": "lesson-9-kanji-7", "label": "before; front", "value": "前", "subValue": "まえ", "chapter": 9 },
          { "id": "lesson-9-kanji-8", "label": "name", "value": "名前", "subValue": "なまえ", "chapter": 9 },
          { "id": "lesson-9-kanji-9", "label": "famous", "value": "有名な", "subValue": "ゆうめいな", "chapter": 9 },
          { "id": "lesson-9-kanji-10", "label": "white", "value": "白い", "subValue": "しろい", "chapter": 9 },
          { "id": "lesson-9-kanji-11", "label": "rain", "value": "雨", "subValue": "あめ", "chapter": 9 },
          { "id": "lesson-9-kanji-12", "label": "to write", "value": "書く", "subValue": "かく", "chapter": 9 },
          { "id": "lesson-9-kanji-13", "label": "dictionary", "value": "辞書", "subValue": "じしょ", "chapter": 9 },
          { "id": "lesson-9-kanji-14", "label": "library", "value": "図書館", "subValue": "としょかん", "chapter": 9 },
          { "id": "lesson-9-kanji-15", "label": "friend", "value": "友だち", "subValue": "ともだち", "chapter": 9 },
          { "id": "lesson-9-kanji-16", "label": "best friend", "value": "親友", "subValue": "しんゆう", "chapter": 9 },
          { "id": "lesson-9-kanji-17", "label": "between", "value": "間", "subValue": "あいだ", "chapter": 9 },
          { "id": "lesson-9-kanji-18", "label": "time", "value": "時間", "subValue": "じかん", "chapter": 9 },
          { "id": "lesson-9-kanji-19", "label": "two hours", "value": "二時間", "subValue": "にじかん", "chapter": 9 },
          { "id": "lesson-9-kanji-20", "label": "human being", "value": "人間", "subValue": "にんげん", "chapter": 9 },
          { "id": "lesson-9-kanji-21", "label": "house", "value": "家", "subValue": "いえ", "chapter": 9 },
          { "id": "lesson-9-kanji-22", "label": "family", "value": "家族", "subValue": "かぞく", "chapter": 9 },
          { "id": "lesson-9-kanji-23", "label": "to speak", "value": "話す", "subValue": "はなす", "chapter": 9 },
          { "id": "lesson-9-kanji-24", "label": "talk; story", "value": "話", "subValue": "はなし", "chapter": 9 },
          { "id": "lesson-9-kanji-25", "label": "telephone", "value": "電話", "subValue": "でんわ", "chapter": 9 },
          { "id": "lesson-9-kanji-26", "label": "conversation", "value": "会話", "subValue": "かいわ", "chapter": 9 },
          { "id": "lesson-9-kanji-27", "label": "little", "value": "少し", "subValue": "すこし", "chapter": 9 },
          { "id": "lesson-9-kanji-28", "label": "boy", "value": "少年", "subValue": "しょうねん", "chapter": 9 },
          { "id": "lesson-9-kanji-29", "label": "old (for things)", "value": "古い", "subValue": "ふるい", "chapter": 9 },
          { "id": "lesson-9-kanji-30", "label": "secondhand", "value": "中古", "subValue": "ちゅうこ", "chapter": 9 },
          { "id": "lesson-9-kanji-31", "label": "to know", "value": "知る", "subValue": "しる", "chapter": 9 },
          { "id": "lesson-9-kanji-32", "label": "acquaintance", "value": "知人", "subValue": "ちじん", "chapter": 9 },
          { "id": "lesson-9-kanji-33", "label": "to come", "value": "来る", "subValue": "くる", "chapter": 9 },
          { "id": "lesson-9-kanji-34", "label": "to come (masu form)", "value": "来ます", "subValue": "きます", "chapter": 9 },
          { "id": "lesson-9-kanji-35", "label": "not to come", "value": "来ない", "subValue": "こない", "chapter": 9 },
          { "id": "lesson-9-kanji-36", "label": "next week", "value": "来週", "subValue": "らいしゅう", "chapter": 9 }
        ]
      }
    ]
  },
  {
    "id": "lesson-10",
    "title": "Lesson 10: Winter Vacation Plans (ふゆやすみのよてい)",
    "cards": [
      {
        "id": "l10-vocab-topic",
        "contentType": "vocabulary",
        "title": "Topic",
        "chapter": 10,
        "items": [
          {
            "id": "l10-vocab-topic-1",
            "label": "autumn",
            "value": "あき",
            "subValue": "aki",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-2",
            "label": "doctor",
            "value": "いしゃ",
            "subValue": "isha",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-3",
            "label": "station",
            "value": "えき",
            "subValue": "eki",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-4",
            "label": "rich person",
            "value": "おかねもち",
            "subValue": "okanemochi",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-5",
            "label": "face",
            "value": "かお",
            "subValue": "kao",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-6",
            "label": "season",
            "value": "きせつ",
            "subValue": "kisetsu",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-7",
            "label": "credit card",
            "value": "クレジットカード",
            "subValue": "kurejittokaado",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-8",
            "label": "cake",
            "value": "ケーキ",
            "subValue": "keeki",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-9",
            "label": "this year",
            "value": "ことし",
            "subValue": "kotoshi",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-10",
            "label": "soccer",
            "value": "サッカー",
            "subValue": "sakkaa",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-11",
            "label": "shirt",
            "value": "シャツ",
            "subValue": "shatsu",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-12",
            "label": "Bullet Train",
            "value": "しんかんせん",
            "subValue": "shinkansen",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-13",
            "label": "sushi",
            "value": "すし",
            "subValue": "sushi",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-14",
            "label": "life; living",
            "value": "せいかつ",
            "subValue": "seikatsu",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-15",
            "label": "world",
            "value": "せかい",
            "subValue": "sekai",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-16",
            "label": "subway",
            "value": "ちかてつ",
            "subValue": "chikatetsu",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-17",
            "label": "gloves",
            "value": "てぶくろ",
            "subValue": "tebukuro",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-18",
            "label": "tempura",
            "value": "てんぷら",
            "subValue": "tenpura",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-19",
            "label": "barber's",
            "value": "とこや",
            "subValue": "tokoya",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-20",
            "label": "spring",
            "value": "はる",
            "subValue": "haru",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-21",
            "label": "pants",
            "value": "パンツ",
            "subValue": "pantsu",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-22",
            "label": "beauty parlor",
            "value": "びよういん",
            "subValue": "biyooin",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-23",
            "label": "flight",
            "value": "びん",
            "subValue": "bin",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-24",
            "label": "ship; boat",
            "value": "ふね",
            "subValue": "fune",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-25",
            "label": "baseball",
            "value": "やきゅう",
            "subValue": "yakyuu",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-26",
            "label": "celebrity",
            "value": "ゆうめいじん",
            "subValue": "yuumeijin",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-27",
            "label": "reservation",
            "value": "よやく",
            "subValue": "yoyaku",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-28",
            "label": "next semester",
            "value": "らいがっき",
            "subValue": "raigakki",
            "chapter": 10
          },
          {
            "id": "l10-vocab-topic-29",
            "label": "apple",
            "value": "りんご",
            "subValue": "ringo",
            "chapter": 10
          }
        ]
      },
      {
        "id": "l10-vocab-adj-(i)",
        "contentType": "vocabulary",
        "title": "Adj (I)",
        "chapter": 10,
        "items": [
          {
            "id": "l10-vocab-adj-(i)-1",
            "label": "warm",
            "value": "あたたかい",
            "subValue": "atatakai",
            "chapter": 10
          },
          {
            "id": "l10-vocab-adj-(i)-2",
            "label": "slow; late",
            "value": "おそい",
            "subValue": "osoi",
            "chapter": 10
          },
          {
            "id": "l10-vocab-adj-(i)-3",
            "label": "cool (weather)",
            "value": "すずしい",
            "subValue": "suzushii",
            "chapter": 10
          },
          {
            "id": "l10-vocab-adj-(i)-4",
            "label": "cold (things/people)",
            "value": "つめたい",
            "subValue": "tsumetai",
            "chapter": 10
          },
          {
            "id": "l10-vocab-adj-(i)-5",
            "label": "sleepy",
            "value": "ねむい",
            "subValue": "nemui",
            "chapter": 10
          }
        ]
      },
      {
        "id": "l10-vocab-adj-(na)",
        "contentType": "vocabulary",
        "title": "Adj (Na)",
        "chapter": 10,
        "items": [
          {
            "id": "l10-vocab-adj-(na)-1",
            "label": "easy; simple",
            "value": "かんたん",
            "subValue": "kantan",
            "chapter": 10
          }
        ]
      },
      {
        "id": "l10-vocab-verb-(u)",
        "contentType": "vocabulary",
        "title": "Verb (U)",
        "chapter": 10,
        "items": [
          {
            "id": "l10-vocab-verb-(u)-1",
            "label": "to take (amount of time/money) (no particle)",
            "value": "かかる",
            "subValue": "kakaru",
            "chapter": 10
          },
          {
            "id": "l10-vocab-verb-(u)-2",
            "label": "to stay (at a hotel, etc.) (に)",
            "value": "とまる",
            "subValue": "tomaru",
            "chapter": 10
          },
          {
            "id": "l10-vocab-verb-(u)-3",
            "label": "to become",
            "value": "なる",
            "subValue": "naru",
            "chapter": 10
          },
          {
            "id": "l10-vocab-verb-(u)-4",
            "label": "to pay (を)",
            "value": "はらう",
            "subValue": "harau",
            "chapter": 10
          }
        ]
      },
      {
        "id": "l10-vocab-verb-(ru)",
        "contentType": "vocabulary",
        "title": "Verb (Ru)",
        "chapter": 10,
        "items": [
          {
            "id": "l10-vocab-verb-(ru)-1",
            "label": "to decide (を)",
            "value": "きめる",
            "subValue": "kimeru",
            "chapter": 10
          }
        ]
      },
      {
        "id": "l10-vocab-verb-(irr)",
        "contentType": "vocabulary",
        "title": "Verb (Irr)",
        "chapter": 10,
        "items": [
          {
            "id": "l10-vocab-verb-(irr)-1",
            "label": "to travel",
            "value": "りょこうする",
            "subValue": "ryokoosuru",
            "chapter": 10
          },
          {
            "id": "l10-vocab-verb-(irr)-2",
            "label": "to practice (を)",
            "value": "れんしゅうする",
            "subValue": "renshuusuru",
            "chapter": 10
          }
        ]
      },
      {
        "id": "l10-vocab-expression",
        "contentType": "vocabulary",
        "title": "Expression",
        "chapter": 10,
        "items": [
          {
            "id": "l10-vocab-expression-1",
            "label": "on foot",
            "value": "あるいて",
            "subValue": "aruite",
            "chapter": 10
          },
          {
            "id": "l10-vocab-expression-2",
            "label": "best",
            "value": "いちばん",
            "subValue": "ichiban",
            "chapter": 10
          },
          {
            "id": "l10-vocab-expression-3",
            "label": "or",
            "value": "〜か〜",
            "subValue": "...ka...",
            "chapter": 10
          },
          {
            "id": "l10-vocab-expression-4",
            "label": "for... months",
            "value": "〜かげつ",
            "subValue": "...kagetsu",
            "chapter": 10
          },
          {
            "id": "l10-vocab-expression-5",
            "label": "in... time; after...",
            "value": "〜ご",
            "subValue": "...go",
            "chapter": 10
          },
          {
            "id": "l10-vocab-expression-6",
            "label": "these days",
            "value": "このごろ",
            "subValue": "konogoro",
            "chapter": 10
          },
          {
            "id": "l10-vocab-expression-7",
            "label": "for... weeks",
            "value": "〜しゅうかん",
            "subValue": "...shuukan",
            "chapter": 10
          },
          {
            "id": "l10-vocab-expression-8",
            "label": "by (means of transportation); with (a tool)",
            "value": "〜で",
            "subValue": "...de",
            "chapter": 10
          },
          {
            "id": "l10-vocab-expression-9",
            "label": "how; by what means",
            "value": "どうやって",
            "subValue": "dooyatte",
            "chapter": 10
          },
          {
            "id": "l10-vocab-expression-10",
            "label": "which",
            "value": "どちら",
            "subValue": "dochira",
            "chapter": 10
          },
          {
            "id": "l10-vocab-expression-11",
            "label": "which",
            "value": "どっち",
            "subValue": "dotchi",
            "chapter": 10
          },
          {
            "id": "l10-vocab-expression-12",
            "label": "how much; how long",
            "value": "どのぐらい",
            "subValue": "donogurai",
            "chapter": 10
          },
          {
            "id": "l10-vocab-expression-13",
            "label": "...years",
            "value": "〜ねん",
            "subValue": "...nen",
            "chapter": 10
          },
          {
            "id": "l10-vocab-expression-14",
            "label": "(do something) early; fast",
            "value": "はやく",
            "subValue": "hayaku",
            "chapter": 10
          }
        ]
      },
      {
        "id": "l10-grammar-comparison-2-items",
        "contentType": "grammar",
        "title": "Comparison (2 Items)",
        "chapter": 10,
        "items": [
          {
            "id": "l10-grammar-1",
            "label": "Comparison (2 Items)",
            "value": "A のほうが B より...",
            "subValue": "A no hoo ga B yori [property] desu. (A is more [property] than B).",
            "chapter": 10,
            "example": {
              "japanese": "ちゅうごくのほうが日本よりおおきいです。",
              "reading": "Chuugoku no hoo ga Nihon yori ookii desu.",
              "translation": "China is larger than Japan."
            }
          }
        ]
      },
      {
        "id": "l10-grammar-comparison-question",
        "contentType": "grammar",
        "title": "Comparison (Question)",
        "chapter": 10,
        "items": [
          {
            "id": "l10-grammar-2",
            "label": "Comparison (Question)",
            "value": "A と B とどっち...",
            "subValue": "A to B to dotchi no hoo ga [property] desu ka. (Which is more [property], A or B?).",
            "chapter": 10
          }
        ]
      },
      {
        "id": "l10-grammar-comparison-3-items",
        "contentType": "grammar",
        "title": "Comparison (3+ Items)",
        "chapter": 10,
        "items": [
          {
            "id": "l10-grammar-3",
            "label": "Comparison (3+ Items)",
            "value": "...の中で A が一番...",
            "subValue": "[Class] no naka de A ga ichiban [property] desu. (A is the most [property] among [Class]).",
            "chapter": 10,
            "example": {
              "japanese": "くだもののなかで、リンゴがいちばんすきです。",
              "reading": "Kudamono no naka de, ringo ga ichiban suki desu.",
              "translation": "Among fruits, I like apples the best."
            }
          }
        ]
      },
      {
        "id": "l10-grammar-adj-noun-no",
        "contentType": "grammar",
        "title": "Adj/Noun + no",
        "chapter": 10,
        "items": [
          {
            "id": "l10-grammar-4",
            "label": "Adj/Noun + no",
            "value": "Noun/Na-Adj + の",
            "subValue": "Noun/Na-Adj + no (e.g., *kantan no* desu).",
            "chapter": 10,
            "example": {
              "japanese": "わたしのパソコンはあたらしくないです。あたらしいのがほしいです。",
              "reading": "Watashi no pasokon wa atarashiku nai desu. Atarashii no ga hoshii desu.",
              "translation": "My computer isn't new. I want a new one."
            }
          }
        ]
      },
      {
        "id": "l10-grammar-intention",
        "contentType": "grammar",
        "title": "Intention (Tsumori)",
        "chapter": 10,
        "items": [
          {
            "id": "l10-grammar-5",
            "label": "Intention (Tsumori)",
            "value": "Verb + つもりです",
            "subValue": "Verb(present short) + tsumori desu. (I intend to do...).",
            "chapter": 10,
            "example": {
              "japanese": "しゅうまつ、テニスをするつもりです。",
              "reading": "Shuumatsu, tenisu o suru tsumori desu.",
              "translation": "I intend to play tennis this weekend."
            }
          }
        ]
      },
      {
        "id": "l10-grammar-becoming",
        "contentType": "grammar",
        "title": "Becoming",
        "chapter": 10,
        "items": [
          {
            "id": "l10-grammar-6",
            "label": "Becoming",
            "value": "〜くなる / 〜になる",
            "subValue": "**I-Adj:** Drop -i, add -ku naru. **Na-Adj/Noun:** Add -ni naru.",
            "chapter": 10,
            "example": {
              "japanese": "さむくなりましたね。",
              "reading": "Samuku narimashita ne.",
              "translation": "It has become cold, hasn't it?"
            }
          }
        ]
      },
      {
        "id": "l10-grammar-transport-means",
        "contentType": "grammar",
        "title": "Transport/Means",
        "chapter": 10,
        "items": [
          {
            "id": "l10-grammar-7",
            "label": "Transport/Means",
            "value": "Noun + で",
            "subValue": "Particle **De**. (e.g., Basu de ikimasu).",
            "chapter": 10,
            "example": {
              "japanese": "バスでえきまでいきます。",
              "reading": "Basu de eki made ikimasu.",
              "translation": "I go to the station by bus."
            }
          }
        ]
      },
      {
        "id": "l10-grammar-travel-duration",
        "contentType": "grammar",
        "title": "Travel Duration",
        "chapter": 10,
        "items": [
          {
            "id": "l10-grammar-8",
            "label": "Travel Duration",
            "value": "...で [Duration] かかります",
            "subValue": "[Place] kara [Place] made [Method] de [Duration] kakarimasu.",
            "chapter": 10,
            "example": {
              "japanese": "うちから学校まで３０ぷんかかります。",
              "reading": "Uchi kara gakkoo made san-juppun kakarimasu.",
              "translation": "It takes 30 minutes from my house to school."
            }
          }
        ]
      },
      {
        "id": "lesson-10-kanji",
        "contentType": "kanji",
        "title": "Lesson 10 Kanji: Comparison and Travel",
        "chapter": 10,
        "items": [
          { "id": "lesson-10-kanji-1", "label": "to live", "value": "住む", "subValue": "すむ", "chapter": 10 },
          { "id": "lesson-10-kanji-2", "label": "address", "value": "住所", "subValue": "じゅうしょ", "chapter": 10 },
          { "id": "lesson-10-kanji-3", "label": "New Year", "value": "お正月", "subValue": "おしょうがつ", "chapter": 10 },
          { "id": "lesson-10-kanji-4", "label": "right; correct", "value": "正しい", "subValue": "ただしい", "chapter": 10 },
          { "id": "lesson-10-kanji-5", "label": "third-year student", "value": "三年生", "subValue": "さんねんせい", "chapter": 10 },
          { "id": "lesson-10-kanji-6", "label": "next year", "value": "来年", "subValue": "らいねん", "chapter": 10 },
          { "id": "lesson-10-kanji-7", "label": "this year", "value": "今年", "subValue": "ことし", "chapter": 10 },
          { "id": "lesson-10-kanji-8", "label": "year", "value": "年", "subValue": "とし", "chapter": 10 },
          { "id": "lesson-10-kanji-9", "label": "to sell", "value": "売る", "subValue": "うる", "chapter": 10 },
          { "id": "lesson-10-kanji-10", "label": "stand; kiosk", "value": "売店", "subValue": "ばいてん", "chapter": 10 },
          { "id": "lesson-10-kanji-11", "label": "to buy", "value": "買う", "subValue": "かう", "chapter": 10 },
          { "id": "lesson-10-kanji-12", "label": "shopping", "value": "買い物", "subValue": "かいもの", "chapter": 10 },
          { "id": "lesson-10-kanji-13", "label": "town", "value": "町", "subValue": "まち", "chapter": 10 },
          { "id": "lesson-10-kanji-14", "label": "long", "value": "長い", "subValue": "ながい", "chapter": 10 },
          { "id": "lesson-10-kanji-15", "label": "company president", "value": "社長", "subValue": "しゃちょう", "chapter": 10 },
          { "id": "lesson-10-kanji-16", "label": "way; road", "value": "道", "subValue": "みち", "chapter": 10 },
          { "id": "lesson-10-kanji-17", "label": "calligraphy", "value": "書道", "subValue": "しょどう", "chapter": 10 },
          { "id": "lesson-10-kanji-18", "label": "snow", "value": "雪", "subValue": "ゆき", "chapter": 10 },
          { "id": "lesson-10-kanji-19", "label": "new snow", "value": "新雪", "subValue": "しんせつ", "chapter": 10 },
          { "id": "lesson-10-kanji-20", "label": "to stand", "value": "立つ", "subValue": "たつ", "chapter": 10 },
          { "id": "lesson-10-kanji-21", "label": "national university", "value": "国立大学", "subValue": "こくりつだいがく", "chapter": 10 },
          { "id": "lesson-10-kanji-22", "label": "oneself", "value": "自分", "subValue": "じぶん", "chapter": 10 },
          { "id": "lesson-10-kanji-23", "label": "automobile", "value": "自動車", "subValue": "じどうしゃ", "chapter": 10 },
          { "id": "lesson-10-kanji-24", "label": "freedom", "value": "自由", "subValue": "じゆう", "chapter": 10 },
          { "id": "lesson-10-kanji-25", "label": "night", "value": "夜", "subValue": "よる", "chapter": 10 },
          { "id": "lesson-10-kanji-26", "label": "middle of the night", "value": "夜中", "subValue": "よなか", "chapter": 10 },
          { "id": "lesson-10-kanji-27", "label": "morning", "value": "朝", "subValue": "あさ", "chapter": 10 },
          { "id": "lesson-10-kanji-28", "label": "this morning", "value": "今朝", "subValue": "けさ", "chapter": 10 },
          { "id": "lesson-10-kanji-29", "label": "breakfast", "value": "朝食", "subValue": "ちょうしょく", "chapter": 10 },
          { "id": "lesson-10-kanji-30", "label": "to hold", "value": "持つ", "subValue": "もつ", "chapter": 10 },
          { "id": "lesson-10-kanji-31", "label": "to bring", "value": "持ってくる", "subValue": "もってくる", "chapter": 10 },
          { "id": "lesson-10-kanji-32", "label": "rich person", "value": "金持ち", "subValue": "かねもち", "chapter": 10 }
        ]
      }
    ]
  },
  {
    "id": "lesson-11",
    "title": "Lesson 11: After the Festival (おまつりのあと)",
    "cards": [
      {
        "id": "l11-vocab-place",
        "contentType": "vocabulary",
        "title": "Place",
        "chapter": 11,
        "items": [
          { "id": "l11-vocab-place-1", "label": "foreign country", "value": "がいこく", "subValue": "gaikoku", "chapter": 11 },
          { "id": "l11-vocab-place-2", "label": "Australia", "value": "オーストラリア", "subValue": "Oosutoraria", "chapter": 11 },
          { "id": "l11-vocab-place-3", "label": "river", "value": "かわ", "subValue": "kawa", "chapter": 11 },
          { "id": "l11-vocab-place-4", "label": "hot spring", "value": "おんせん", "subValue": "onsen", "chapter": 11 },
          { "id": "l11-vocab-place-5", "label": "lake", "value": "みずうみ", "subValue": "mizuumi", "chapter": 11 },
          { "id": "l11-vocab-place-6", "label": "mountain", "value": "やま", "subValue": "yama", "chapter": 11 },
          { "id": "l11-vocab-place-7", "label": "camp", "value": "キャンプ", "subValue": "kyanpu", "chapter": 11 },
          { "id": "l11-vocab-place-8", "label": "shrine", "value": "じんじゃ", "subValue": "jinja", "chapter": 11 },
          { "id": "l11-vocab-place-9", "label": "art museum", "value": "びじゅつかん", "subValue": "bijutsukan", "chapter": 11 }
        ]
      },
      {
        "id": "l11-vocab-activity",
        "contentType": "vocabulary",
        "title": "Activity",
        "chapter": 11,
        "items": [
          { "id": "l11-vocab-activity-1", "label": "fishing", "value": "つり", "subValue": "tsuri", "chapter": 11 },
          { "id": "l11-vocab-activity-2", "label": "drive", "value": "ドライブ", "subValue": "doraibu", "chapter": 11 }
        ]
      },
      {
        "id": "l11-vocab-person",
        "contentType": "vocabulary",
        "title": "Person",
        "chapter": 11,
        "items": [
          { "id": "l11-vocab-person-1", "label": "president of a company", "value": "しゃちょう", "subValue": "shachoo", "chapter": 11 },
          { "id": "l11-vocab-person-2", "label": "singer", "value": "かしゅ", "subValue": "kashu", "chapter": 11 },
          { "id": "l11-vocab-person-3", "label": "roommate", "value": "ルームメイト", "subValue": "ruumumeito", "chapter": 11 },
          { "id": "l11-vocab-person-4", "label": "host family", "value": "ホストファミリー", "subValue": "hosutofamirii", "chapter": 11 }
        ]
      },
      {
        "id": "l11-vocab-time",
        "contentType": "vocabulary",
        "title": "Time",
        "chapter": 11,
        "items": [
          { "id": "l11-vocab-time-1", "label": "future", "value": "しょうらい", "subValue": "shoorai", "chapter": 11 },
          { "id": "l11-vocab-time-2", "label": "this semester", "value": "こんがっき", "subValue": "kongakki", "chapter": 11 },
          { "id": "l11-vocab-time-3", "label": "next semester", "value": "らいがっき", "subValue": "raigakki", "chapter": 11 }
        ]
      },
      {
        "id": "l11-vocab-event",
        "contentType": "vocabulary",
        "title": "Event",
        "chapter": 11,
        "items": [
          { "id": "l11-vocab-event-1", "label": "festival", "value": "おまつり", "subValue": "omatsuri", "chapter": 11 },
          { "id": "l11-vocab-event-2", "label": "New Year's", "value": "おしょうがつ", "subValue": "oshoogatsu", "chapter": 11 },
          { "id": "l11-vocab-event-3", "label": "class", "value": "じゅぎょう", "subValue": "jugyoo", "chapter": 11 }
        ]
      },
      {
        "id": "l11-vocab-noun",
        "contentType": "vocabulary",
        "title": "Nouns",
        "chapter": 11,
        "items": [
          { "id": "l11-vocab-noun-1", "label": "dream", "value": "ゆめ", "subValue": "yume", "chapter": 11 },
          { "id": "l11-vocab-noun-2", "label": "snack; sweets", "value": "おかし", "subValue": "okashi", "chapter": 11 },
          { "id": "l11-vocab-noun-3", "label": "beer", "value": "ビール", "subValue": "biiru", "chapter": 11 },
          { "id": "l11-vocab-noun-4", "label": "toy", "value": "おもちゃ", "subValue": "omocha", "chapter": 11 }
        ]
      },
      {
        "id": "l11-vocab-expression",
        "contentType": "vocabulary",
        "title": "Expressions",
        "chapter": 11,
        "items": [
          { "id": "l11-vocab-expression-1", "label": "this person (polite)", "value": "こちら", "subValue": "kochira", "chapter": 11 },
          { "id": "l11-vocab-expression-2", "label": "to tell a lie", "value": "うそをつく", "subValue": "uso o tsuku", "chapter": 11 },
          { "id": "l11-vocab-expression-3", "label": "coming from (place の)", "value": "しゅっしん", "subValue": "shusshin", "chapter": 11 },
          { "id": "l11-vocab-expression-4", "label": "it has been a long time", "value": "ひさしぶり", "subValue": "hisashiburi", "chapter": 11 },
          { "id": "l11-vocab-expression-5", "label": "okay; so-so", "value": "まあまあ", "subValue": "maamaa", "chapter": 11 },
          { "id": "l11-vocab-expression-6", "label": "more", "value": "もっと", "subValue": "motto", "chapter": 11 },
          { "id": "l11-vocab-expression-7", "label": "after (an event) (〜の)", "value": "あと", "subValue": "ato", "chapter": 11 }
        ]
      },
      {
        "id": "l11-vocab-u-verb",
        "contentType": "vocabulary",
        "title": "U-Verbs",
        "chapter": 11,
        "items": [
          { "id": "l11-vocab-u-verb-1", "label": "to become hungry", "value": "おなかがすく", "subValue": "onaka ga suku", "chapter": 11 },
          { "id": "l11-vocab-u-verb-2", "label": "to own (a pet) (〜を)", "value": "かう", "subValue": "kau", "chapter": 11 },
          { "id": "l11-vocab-u-verb-3", "label": "to cut (classes) (〜を)", "value": "サボる", "subValue": "saboru", "chapter": 11 },
          { "id": "l11-vocab-u-verb-4", "label": "to take (a class); to get (a grade) (〜を)", "value": "とる", "subValue": "toru", "chapter": 11 },
          { "id": "l11-vocab-u-verb-5", "label": "to learn (〜を)", "value": "ならう", "subValue": "narau", "chapter": 11 },
          { "id": "l11-vocab-u-verb-6", "label": "to climb (place に)", "value": "のぼる", "subValue": "noboru", "chapter": 11 },
          { "id": "l11-vocab-u-verb-7", "label": "to run", "value": "はしる", "subValue": "hashiru", "chapter": 11 }
        ]
      },
      {
        "id": "l11-vocab-ru-verb",
        "contentType": "vocabulary",
        "title": "Ru-Verbs",
        "chapter": 11,
        "items": [
          { "id": "l11-vocab-ru-verb-1", "label": "to get tired", "value": "つかれる", "subValue": "tsukareru", "chapter": 11 },
          { "id": "l11-vocab-ru-verb-2", "label": "to quit (〜を)", "value": "やめる", "subValue": "yameru", "chapter": 11 }
        ]
      },
      {
        "id": "l11-vocab-irr-verb",
        "contentType": "vocabulary",
        "title": "Irregular Verbs",
        "chapter": 11,
        "items": [
          { "id": "l11-vocab-irr-verb-1", "label": "to have a fight; to quarrel", "value": "けんかする", "subValue": "kenkasuru", "chapter": 11 },
          { "id": "l11-vocab-irr-verb-2", "label": "to introduce (person に person を)", "value": "しょうかいする", "subValue": "shookaisuru", "chapter": 11 },
          { "id": "l11-vocab-irr-verb-3", "label": "to go on a diet", "value": "ダイエットする", "subValue": "daiettosuru", "chapter": 11 },
          { "id": "l11-vocab-irr-verb-4", "label": "to be late (for an appointment) (〜に)", "value": "ちこくする", "subValue": "chikokusuru", "chapter": 11 },
          { "id": "l11-vocab-irr-verb-5", "label": "to study abroad (place に)", "value": "りゅうがくする", "subValue": "ryuugakusuru", "chapter": 11 }
        ]
      },
      {
        "id": "l11-grammar-desire",
        "contentType": "grammar",
        "title": "Desire (Want to)",
        "chapter": 11,
        "items": [
          {
            "id": "l11-grammar-1",
            "label": "Desire (Want to)",
            "value": "Verb stem + たいです",
            "subValue": "Expresses 'I want to do...'. Conjugates like an I-Adjective (tai/takunai).",
            "chapter": 11
          }
        ]
      },
      {
        "id": "l11-grammar-activity-listing",
        "contentType": "grammar",
        "title": "Activity Listing",
        "chapter": 11,
        "items": [
          {
            "id": "l11-grammar-2",
            "label": "Activity Listing",
            "value": "A たり B たりする",
            "subValue": "Mentions non-exhaustive examples of actions. Use verb ta-form + ri.",
            "chapter": 11
          }
        ]
      },
      {
        "id": "l11-grammar-past-experience",
        "contentType": "grammar",
        "title": "Past Experience",
        "chapter": 11,
        "items": [
          {
            "id": "l11-grammar-3",
            "label": "Past Experience",
            "value": "Verb (ta) + ことがある",
            "subValue": "'I have the experience of...'. Used to describe things you have done in the past.",
            "chapter": 11
          }
        ]
      },
      {
        "id": "l11-grammar-noun-listing",
        "contentType": "grammar",
        "title": "Non-Exhaustive Noun Listing",
        "chapter": 11,
        "items": [
          {
            "id": "l11-grammar-4",
            "label": "Non-Exhaustive Noun Listing",
            "value": "A や B",
            "subValue": "Connects nouns like 'to', but implies there are other items not mentioned (A, B, etc.).",
            "chapter": 11
          }
        ]
      },
      {
        "id": "l11-grammar-informal-noun",
        "contentType": "grammar",
        "title": "Informal Noun Copula",
        "chapter": 11,
        "items": [
          {
            "id": "l11-grammar-5",
            "label": "Informal Noun Copula",
            "value": "Noun + だ",
            "subValue": "Informal version of 'desu'. Used with nouns and na-adjectives in casual speech.",
            "chapter": 11
          }
        ]
      },
      {
        "id": "lesson-11-kanji",
        "contentType": "kanji",
        "title": "Lesson 11 Kanji: Hand, Paper, and Daily Life",
        "chapter": 11,
        "items": [
          { "id": "lesson-11-kanji-1", "label": "hand", "value": "手", "subValue": "て", "chapter": 11 },
          { "id": "lesson-11-kanji-2", "label": "letter", "value": "手紙", "subValue": "てがみ", "chapter": 11 },
          { "id": "lesson-11-kanji-3", "label": "singer", "value": "歌手", "subValue": "かしゅ", "chapter": 11 },
          { "id": "lesson-11-kanji-4", "label": "letter", "value": "手紙", "subValue": "てがみ", "chapter": 11 },
          { "id": "lesson-11-kanji-5", "label": "Japanese paper", "value": "和紙", "subValue": "わし", "chapter": 11 },
          { "id": "lesson-11-kanji-6", "label": "to like", "value": "好きな", "subValue": "すきな", "chapter": 11 },
          { "id": "lesson-11-kanji-7", "label": "to love", "value": "大好きな", "subValue": "だいすきな", "chapter": 11 },
          { "id": "lesson-11-kanji-8", "label": "taste; liking", "value": "好み", "subValue": "このみ", "chapter": 11 },
          { "id": "lesson-11-kanji-9", "label": "near; nearby", "value": "近く", "subValue": "ちかく", "chapter": 11 },
          { "id": "lesson-11-kanji-10", "label": "neighborhood", "value": "近所", "subValue": "きんじょ", "chapter": 11 },
          { "id": "lesson-11-kanji-11", "label": "cheerful; bright", "value": "明るい", "subValue": "あかるい", "chapter": 11 },
          { "id": "lesson-11-kanji-12", "label": "tomorrow", "value": "明日", "subValue": "あした", "chapter": 11 },
          { "id": "lesson-11-kanji-13", "label": "hospital", "value": "病院", "subValue": "びょういん", "chapter": 11 },
          { "id": "lesson-11-kanji-14", "label": "illness", "value": "病気", "subValue": "びょうき", "chapter": 11 },
          { "id": "lesson-11-kanji-15", "label": "hospital", "value": "病院", "subValue": "びょういん", "chapter": 11 },
          { "id": "lesson-11-kanji-16", "label": "to be hospitalized", "value": "入院する", "subValue": "にゅういんする", "chapter": 11 },
          { "id": "lesson-11-kanji-17", "label": "graduate school", "value": "大学院", "subValue": "だいがくいん", "chapter": 11 },
          { "id": "lesson-11-kanji-18", "label": "movie", "value": "映画", "subValue": "えいが", "chapter": 11 },
          { "id": "lesson-11-kanji-19", "label": "movie", "value": "映画", "subValue": "えいが", "chapter": 11 },
          { "id": "lesson-11-kanji-20", "label": "painter", "value": "画家", "subValue": "がか", "chapter": 11 },
          { "id": "lesson-11-kanji-21", "label": "song", "value": "歌", "subValue": "うた", "chapter": 11 },
          { "id": "lesson-11-kanji-22", "label": "to sing", "value": "歌う", "subValue": "うたう", "chapter": 11 },
          { "id": "lesson-11-kanji-23", "label": "singer", "value": "歌手", "subValue": "かしゅ", "chapter": 11 },
          { "id": "lesson-11-kanji-24", "label": "city; market", "value": "市", "subValue": "いち", "chapter": 11 },
          { "id": "lesson-11-kanji-25", "label": "Kawaguchi City", "value": "川口市", "subValue": "かわぐちし", "chapter": 11 },
          { "id": "lesson-11-kanji-26", "label": "place", "value": "所", "subValue": "ところ", "chapter": 11 },
          { "id": "lesson-11-kanji-27", "label": "various places", "value": "いろいろな所", "subValue": "いろいろなところ", "chapter": 11 },
          { "id": "lesson-11-kanji-28", "label": "address", "value": "住所", "subValue": "じゅうしょ", "chapter": 11 },
          { "id": "lesson-11-kanji-29", "label": "to study", "value": "勉強する", "subValue": "べんきょうする", "chapter": 11 },
          { "id": "lesson-11-kanji-30", "label": "to study", "value": "勉強する", "subValue": "べんきょうする", "chapter": 11 },
          { "id": "lesson-11-kanji-31", "label": "strong", "value": "強い", "subValue": "つよい", "chapter": 11 },
          { "id": "lesson-11-kanji-32", "label": "famous", "value": "有名な", "subValue": "ゆうめいな", "chapter": 11 },
          { "id": "lesson-11-kanji-33", "label": "travel", "value": "旅行", "subValue": "りょこう", "chapter": 11 },
          { "id": "lesson-11-kanji-34", "label": "traveling alone", "value": "一人旅", "subValue": "ひとりたび", "chapter": 11 }
        ]
      }
    ]
  }
];
