import { Topic } from './types';

// Comprehensive Genki I data from Lessons 1-10
export const genkiLessons: Topic[] = [
  // ========== LESSON 1: New Friends ==========
  {
    id: 'lesson-1',
    title: 'Lesson 1: New Friends (あたらしいともだち)',
    cards: [
      {
        id: 'l1-vocab-school',
        title: 'School Vocabulary',
        chapter: 1,
        items: [
          { id: 'l1v1', label: 'college; university', value: 'だいがく', subValue: 'daigaku', chapter: 1 },
          { id: 'l1v2', label: 'high school', value: 'こうこう', subValue: 'kookoo', chapter: 1 },
          { id: 'l1v3', label: 'student', value: 'がくせい', subValue: 'gakusee', chapter: 1 },
          { id: 'l1v4', label: 'college student', value: 'だいがくせい', subValue: 'daigakusee', chapter: 1 },
          { id: 'l1v5', label: 'international student', value: 'りゅうがくせい', subValue: 'ryuugakusee', chapter: 1 },
          { id: 'l1v6', label: 'teacher; Professor', value: 'せんせい', subValue: 'sensee', chapter: 1 },
          { id: 'l1v7', label: '...year student', value: '〜ねんせい', subValue: '...nensee', chapter: 1 },
          { id: 'l1v8', label: 'first-year student', value: 'いちねんせい', subValue: 'ichinensee', chapter: 1 },
          { id: 'l1v9', label: 'major', value: 'せんこう', subValue: 'senkoo', chapter: 1 },
        ]
      },
      {
        id: 'l1-vocab-person',
        title: 'People',
        chapter: 1,
        items: [
          { id: 'l1v10', label: 'I', value: 'わたし', subValue: 'watashi', chapter: 1 },
          { id: 'l1v11', label: 'friend', value: 'ともだち', subValue: 'tomodachi', chapter: 1 },
          { id: 'l1v12', label: 'Mr./Ms....', value: '〜さん', subValue: '...san', chapter: 1 },
          { id: 'l1v13', label: '...people (nationality)', value: '〜じん', subValue: '...jin', chapter: 1 },
          { id: 'l1v14', label: 'Japanese people', value: 'にほんじん', subValue: 'nihonjin', chapter: 1 },
        ]
      },
      {
        id: 'l1-vocab-time',
        title: 'Time',
        chapter: 1,
        items: [
          { id: 'l1v15', label: 'now', value: 'いま', subValue: 'ima', chapter: 1 },
          { id: 'l1v16', label: 'A.M.', value: 'ごぜん', subValue: 'gozen', chapter: 1 },
          { id: 'l1v17', label: 'P.M.', value: 'ごご', subValue: 'gogo', chapter: 1 },
          { id: 'l1v18', label: "o'clock", value: '〜じ', subValue: '...ji', chapter: 1 },
          { id: 'l1v19', label: "one o'clock", value: 'いちじ', subValue: 'ichiji', chapter: 1 },
          { id: 'l1v20', label: 'half', value: 'はん', subValue: 'han', chapter: 1 },
          { id: 'l1v21', label: 'half past two', value: 'にじはん', subValue: 'niji han', chapter: 1 },
        ]
      },
      {
        id: 'l1-vocab-countries',
        title: 'Countries',
        chapter: 1,
        items: [
          { id: 'l1v22', label: 'Japan', value: 'にほん', subValue: 'Nihon', chapter: 1 },
          { id: 'l1v23', label: 'U.S.A.', value: 'アメリカ', subValue: 'Amerika', chapter: 1 },
          { id: 'l1v24', label: 'Britain', value: 'イギリス', subValue: 'Igirisu', chapter: 1 },
          { id: 'l1v25', label: 'Australia', value: 'オーストラリア', subValue: 'Oosutoraria', chapter: 1 },
          { id: 'l1v26', label: 'Korea', value: 'かんこく', subValue: 'Kankoku', chapter: 1 },
          { id: 'l1v27', label: 'Canada', value: 'カナダ', subValue: 'Kanada', chapter: 1 },
          { id: 'l1v28', label: 'China', value: 'ちゅうごく', subValue: 'Chuugoku', chapter: 1 },
          { id: 'l1v29', label: 'India', value: 'インド', subValue: 'Indo', chapter: 1 },
          { id: 'l1v30', label: 'Egypt', value: 'エジプト', subValue: 'Ejiputo', chapter: 1 },
          { id: 'l1v31', label: 'Philippines', value: 'フィリピン', subValue: 'Firipin', chapter: 1 },
        ]
      },
      {
        id: 'l1-vocab-majors',
        title: 'Majors',
        chapter: 1,
        items: [
          { id: 'l1v32', label: 'Asian studies', value: 'アジアけんきゅう', subValue: 'ajia kenkyuu', chapter: 1 },
          { id: 'l1v33', label: 'economics', value: 'けいざい', subValue: 'keezai', chapter: 1 },
          { id: 'l1v34', label: 'engineering', value: 'こうがく', subValue: 'koogaku', chapter: 1 },
          { id: 'l1v35', label: 'international relations', value: 'こくさいかんけい', subValue: 'kokusaikankee', chapter: 1 },
          { id: 'l1v36', label: 'computer', value: 'コンピューター', subValue: 'konpyuutaa', chapter: 1 },
          { id: 'l1v37', label: 'politics', value: 'せいじ', subValue: 'seeji', chapter: 1 },
          { id: 'l1v38', label: 'biology', value: 'せいぶつがく', subValue: 'seebutsugaku', chapter: 1 },
          { id: 'l1v39', label: 'business', value: 'ビジネス', subValue: 'bijinesu', chapter: 1 },
          { id: 'l1v40', label: 'literature', value: 'ぶんがく', subValue: 'bungaku', chapter: 1 },
          { id: 'l1v41', label: 'history', value: 'れきし', subValue: 'rekishi', chapter: 1 },
        ]
      },
      {
        id: 'l1-vocab-occupations',
        title: 'Occupations',
        chapter: 1,
        items: [
          { id: 'l1v42', label: 'doctor', value: 'いしゃ', subValue: 'isha', chapter: 1 },
          { id: 'l1v43', label: 'office worker', value: 'かいしゃいん', subValue: 'kaishain', chapter: 1 },
          { id: 'l1v44', label: 'nurse', value: 'かんごし', subValue: 'kangoshi', chapter: 1 },
          { id: 'l1v45', label: 'high school student', value: 'こうこうせい', subValue: 'kookoosee', chapter: 1 },
          { id: 'l1v46', label: 'housewife', value: 'しゅふ', subValue: 'shufu', chapter: 1 },
          { id: 'l1v47', label: 'graduate student', value: 'だいがくいんせい', subValue: 'daigakuinsee', chapter: 1 },
          { id: 'l1v48', label: 'lawyer', value: 'べんごし', subValue: 'bengoshi', chapter: 1 },
        ]
      },
      {
        id: 'l1-vocab-family',
        title: 'Family',
        chapter: 1,
        items: [
          { id: 'l1v49', label: 'mother', value: 'おかあさん', subValue: 'okaasan', chapter: 1 },
          { id: 'l1v50', label: 'father', value: 'おとうさん', subValue: 'otoosan', chapter: 1 },
          { id: 'l1v51', label: 'older sister', value: 'おねえさん', subValue: 'oneesan', chapter: 1 },
          { id: 'l1v52', label: 'older brother', value: 'おにいさん', subValue: 'oniisan', chapter: 1 },
          { id: 'l1v53', label: 'younger sister', value: 'いもうと', subValue: 'imooto', chapter: 1 },
          { id: 'l1v54', label: 'younger brother', value: 'おとうと', subValue: 'otooto', chapter: 1 },
        ]
      },
      {
        id: 'l1-grammar',
        title: 'Grammar Points',
        chapter: 1,
        description: 'Core grammar from Lesson 1',
        items: [
          { id: 'l1g1', label: 'X is Y', value: 'X wa Y desu', subValue: '"Wa" marks the topic. "Desu" is the copula (is/am/are).', chapter: 1 },
          { id: 'l1g2', label: 'Question Particle', value: '...ka', subValue: 'Add "ka" to the end of a sentence to make it a question.', chapter: 1 },
          { id: 'l1g3', label: 'Possessive/Modifier', value: 'Noun1 no Noun2', subValue: 'Connects two nouns. Noun2 is the main idea; Noun1 modifies it.', chapter: 1 },
          { id: 'l1g4', label: 'Time Questions', value: 'Nanji / Nansai', subValue: 'Question words for "What time" and "How old".', chapter: 1 },
        ]
      },
    ]
  },

  // ========== LESSON 2: Shopping ==========
  {
    id: 'lesson-2',
    title: 'Lesson 2: Shopping (かいもの)',
    cards: [
      {
        id: 'l2-vocab-demonstratives',
        title: 'Demonstratives',
        chapter: 2,
        items: [
          { id: 'l2v1', label: 'this one (near speaker)', value: 'これ', subValue: 'kore', chapter: 2 },
          { id: 'l2v2', label: 'that one (near listener)', value: 'それ', subValue: 'sore', chapter: 2 },
          { id: 'l2v3', label: 'that one (over there)', value: 'あれ', subValue: 'are', chapter: 2 },
          { id: 'l2v4', label: 'which one', value: 'どれ', subValue: 'dore', chapter: 2 },
          { id: 'l2v5', label: 'this... (+noun)', value: 'この', subValue: 'kono', chapter: 2 },
          { id: 'l2v6', label: 'that... (+noun)', value: 'その', subValue: 'sono', chapter: 2 },
          { id: 'l2v7', label: 'that... (over there) (+noun)', value: 'あの', subValue: 'ano', chapter: 2 },
          { id: 'l2v8', label: 'which... (+noun)', value: 'どの', subValue: 'dono', chapter: 2 },
        ]
      },
      {
        id: 'l2-vocab-places',
        title: 'Place Words',
        chapter: 2,
        items: [
          { id: 'l2v9', label: 'here', value: 'ここ', subValue: 'koko', chapter: 2 },
          { id: 'l2v10', label: 'there', value: 'そこ', subValue: 'soko', chapter: 2 },
          { id: 'l2v11', label: 'over there', value: 'あそこ', subValue: 'asoko', chapter: 2 },
          { id: 'l2v12', label: 'where', value: 'どこ', subValue: 'doko', chapter: 2 },
          { id: 'l2v13', label: 'bank', value: 'ぎんこう', subValue: 'ginkoo', chapter: 2 },
          { id: 'l2v14', label: 'convenience store', value: 'コンビニ', subValue: 'konbini', chapter: 2 },
          { id: 'l2v15', label: 'toilet; restroom', value: 'トイレ', subValue: 'toire', chapter: 2 },
          { id: 'l2v16', label: 'library', value: 'としょかん', subValue: 'toshokan', chapter: 2 },
          { id: 'l2v17', label: 'post office', value: 'ゆうびんきょく', subValue: 'yuubinkyoku', chapter: 2 },
        ]
      },
      {
        id: 'l2-vocab-food',
        title: 'Food',
        chapter: 2,
        items: [
          { id: 'l2v18', label: 'delicious', value: 'おいしい', subValue: 'oishii', chapter: 2 },
          { id: 'l2v19', label: 'fish', value: 'さかな', subValue: 'sakana', chapter: 2 },
          { id: 'l2v20', label: 'pork cutlet', value: 'とんかつ', subValue: 'tonkatsu', chapter: 2 },
          { id: 'l2v21', label: 'meat', value: 'にく', subValue: 'niku', chapter: 2 },
          { id: 'l2v22', label: 'menu', value: 'メニュー', subValue: 'menyuu', chapter: 2 },
          { id: 'l2v23', label: 'vegetable', value: 'やさい', subValue: 'yasai', chapter: 2 },
        ]
      },
      {
        id: 'l2-vocab-items',
        title: 'Items',
        chapter: 2,
        items: [
          { id: 'l2v24', label: 'umbrella', value: 'かさ', subValue: 'kasa', chapter: 2 },
          { id: 'l2v25', label: 'bag', value: 'かばん', subValue: 'kaban', chapter: 2 },
          { id: 'l2v26', label: 'shoes', value: 'くつ', subValue: 'kutsu', chapter: 2 },
          { id: 'l2v27', label: 'wallet', value: 'さいふ', subValue: 'saifu', chapter: 2 },
          { id: 'l2v28', label: 'jeans', value: 'ジーンズ', subValue: 'jiinzu', chapter: 2 },
          { id: 'l2v29', label: 'bicycle', value: 'じてんしゃ', subValue: 'jitensha', chapter: 2 },
          { id: 'l2v30', label: 'newspaper', value: 'しんぶん', subValue: 'shinbun', chapter: 2 },
          { id: 'l2v31', label: 'smartphone; mobile', value: 'スマホ', subValue: 'sumaho', chapter: 2 },
          { id: 'l2v32', label: 'T-shirt', value: 'Tシャツ', subValue: 'tiishatsu', chapter: 2 },
          { id: 'l2v33', label: 'watch; clock', value: 'とけい', subValue: 'tokee', chapter: 2 },
          { id: 'l2v34', label: 'notebook', value: 'ノート', subValue: 'nooto', chapter: 2 },
          { id: 'l2v35', label: 'pen', value: 'ペン', subValue: 'pen', chapter: 2 },
          { id: 'l2v36', label: 'hat; cap', value: 'ぼうし', subValue: 'booshi', chapter: 2 },
          { id: 'l2v37', label: 'book', value: 'ほん', subValue: 'hon', chapter: 2 },
        ]
      },
      {
        id: 'l2-grammar',
        title: 'Grammar Points',
        chapter: 2,
        description: 'Core grammar from Lesson 2',
        items: [
          { id: 'l2g1', label: 'Demonstratives (Noun)', value: 'Kore / Sore / Are', subValue: '"This one", "That one", "That one over there".', chapter: 2 },
          { id: 'l2g2', label: 'Demonstratives (Det)', value: 'Kono / Sono / Ano + Noun', subValue: '"This X", "That X", "That X over there".', chapter: 2 },
          { id: 'l2g3', label: 'Place Words', value: 'Koko / Soko / Asoko', subValue: '"Here", "There", "Over there".', chapter: 2 },
          { id: 'l2g4', label: 'Whose', value: 'Dare no Noun', subValue: '"Whose X".', chapter: 2 },
          { id: 'l2g5', label: 'Particle Mo', value: 'Noun + mo', subValue: '"Noun also/too". Replaces "wa".', chapter: 2 },
          { id: 'l2g6', label: 'Negation', value: 'Noun + ja nai desu', subValue: '"Is not X". (Formal: de wa arimasen).', chapter: 2 },
          { id: 'l2g7', label: 'Sentence Tag ~ne', value: '~ne', subValue: 'Seeking confirmation ("right?").', chapter: 2 },
          { id: 'l2g8', label: 'Sentence Tag ~yo', value: '~yo', subValue: 'Giving assurance/new info ("I tell you").', chapter: 2 },
        ]
      },
    ]
  },

  // ========== LESSON 3: Making a Date ==========
  {
    id: 'lesson-3',
    title: 'Lesson 3: Making a Date (デートの約束)',
    cards: [
      {
        id: 'l3-vocab-entertainment',
        title: 'Entertainment',
        chapter: 3,
        items: [
          { id: 'l3v1', label: 'movie', value: 'えいが (映画)', subValue: 'eiga', chapter: 3 },
          { id: 'l3v2', label: 'music', value: 'おんがく (音楽)', subValue: 'ongaku', chapter: 3 },
          { id: 'l3v3', label: 'magazine', value: 'ざっし (雑誌)', subValue: 'zasshi', chapter: 3 },
          { id: 'l3v4', label: 'sports', value: 'スポーツ', subValue: 'supootsu', chapter: 3 },
          { id: 'l3v5', label: 'date (romantic)', value: 'デート', subValue: 'deeto', chapter: 3 },
          { id: 'l3v6', label: 'tennis', value: 'テニス', subValue: 'tenisu', chapter: 3 },
          { id: 'l3v7', label: 'TV', value: 'テレビ', subValue: 'terebi', chapter: 3 },
        ]
      },
      {
        id: 'l3-vocab-food',
        title: 'Food & Drink',
        chapter: 3,
        items: [
          { id: 'l3v8', label: 'ice cream', value: 'アイスクリーム', subValue: 'aisukuriimu', chapter: 3 },
          { id: 'l3v9', label: 'hamburger', value: 'ハンバーガー', subValue: 'hanbaagaa', chapter: 3 },
          { id: 'l3v10', label: 'sake; alcoholic drink', value: 'おさけ (お酒)', subValue: 'osake', chapter: 3 },
          { id: 'l3v11', label: 'green tea', value: 'おちゃ (お茶)', subValue: 'ocha', chapter: 3 },
          { id: 'l3v12', label: 'coffee', value: 'コーヒー', subValue: 'koohii', chapter: 3 },
          { id: 'l3v13', label: 'water', value: 'みず (水)', subValue: 'mizu', chapter: 3 },
          { id: 'l3v14', label: 'breakfast', value: 'あさごはん (朝ご飯)', subValue: 'asagohan', chapter: 3 },
          { id: 'l3v15', label: 'lunch', value: 'ひるごはん (昼ご飯)', subValue: 'hirugohan', chapter: 3 },
          { id: 'l3v16', label: 'dinner', value: 'ばんごはん (晩ご飯)', subValue: 'bangohan', chapter: 3 },
        ]
      },
      {
        id: 'l3-vocab-time',
        title: 'Time Words',
        chapter: 3,
        items: [
          { id: 'l3v17', label: 'tomorrow', value: 'あした (明日)', subValue: 'ashita', chapter: 3 },
          { id: 'l3v18', label: 'today', value: 'きょう (今日)', subValue: 'kyoo', chapter: 3 },
          { id: 'l3v19', label: 'morning', value: 'あさ (朝)', subValue: 'asa', chapter: 3 },
          { id: 'l3v20', label: 'tonight', value: 'こんばん (今晩)', subValue: 'konban', chapter: 3 },
          { id: 'l3v21', label: 'every day', value: 'まいにち (毎日)', subValue: 'mainichi', chapter: 3 },
          { id: 'l3v22', label: 'every night', value: 'まいばん (毎晩)', subValue: 'maiban', chapter: 3 },
          { id: 'l3v23', label: 'weekend', value: 'しゅうまつ (週末)', subValue: 'shuumatsu', chapter: 3 },
          { id: 'l3v24', label: 'Saturday', value: 'どようび (土曜日)', subValue: 'doyoobi', chapter: 3 },
          { id: 'l3v25', label: 'Sunday', value: 'にちようび (日曜日)', subValue: 'nichiyoobi', chapter: 3 },
          { id: 'l3v26', label: 'when', value: 'いつ', subValue: 'itsu', chapter: 3 },
          { id: 'l3v27', label: 'at about...', value: '〜ごろ', subValue: '...goro', chapter: 3 },
        ]
      },
      {
        id: 'l3-verbs-u',
        title: 'U-Verbs',
        chapter: 3,
        items: [
          { id: 'l3v28', label: 'to go', value: 'いく (行く)', subValue: 'iku', chapter: 3 },
          { id: 'l3v29', label: 'to go back; to return', value: 'かえる (帰る)', subValue: 'kaeru', chapter: 3 },
          { id: 'l3v30', label: 'to listen; to hear', value: 'きく (聞く)', subValue: 'kiku', chapter: 3 },
          { id: 'l3v31', label: 'to drink', value: 'のむ (飲む)', subValue: 'nomu', chapter: 3 },
          { id: 'l3v32', label: 'to speak; to talk', value: 'はなす (話す)', subValue: 'hanasu', chapter: 3 },
          { id: 'l3v33', label: 'to read', value: 'よむ (読む)', subValue: 'yomu', chapter: 3 },
        ]
      },
      {
        id: 'l3-verbs-ru',
        title: 'Ru-Verbs',
        chapter: 3,
        items: [
          { id: 'l3v34', label: 'to get up', value: 'おきる (起きる)', subValue: 'okiru', chapter: 3 },
          { id: 'l3v35', label: 'to eat', value: 'たべる (食べる)', subValue: 'taberu', chapter: 3 },
          { id: 'l3v36', label: 'to sleep', value: 'ねる (寝る)', subValue: 'neru', chapter: 3 },
          { id: 'l3v37', label: 'to see; to watch', value: 'みる (見る)', subValue: 'miru', chapter: 3 },
        ]
      },
      {
        id: 'l3-verbs-irregular',
        title: 'Irregular Verbs',
        chapter: 3,
        items: [
          { id: 'l3v38', label: 'to come', value: 'くる (来る)', subValue: 'kuru', chapter: 3 },
          { id: 'l3v39', label: 'to do', value: 'する', subValue: 'suru', chapter: 3 },
          { id: 'l3v40', label: 'to study', value: 'べんきょうする (勉強する)', subValue: 'benkyoosuru', chapter: 3 },
        ]
      },
      {
        id: 'l3-grammar',
        title: 'Grammar Points',
        chapter: 3,
        description: 'Core grammar from Lesson 3',
        items: [
          { id: 'l3g1', label: 'Ru-Verbs', value: 'Drop -ru, add -masu/-masen', subValue: 'End in -eru or -iru', chapter: 3 },
          { id: 'l3g2', label: 'U-Verbs', value: "Change 'u' to 'i', add -masu/-masen", subValue: 'End in u-vowel sounds', chapter: 3 },
          { id: 'l3g3', label: 'Irregular Verbs', value: 'suru→shimasu, kuru→kimasu', subValue: 'Must memorize', chapter: 3 },
          { id: 'l3g4', label: 'Particle を (o)', value: 'Marks the direct object', subValue: 'Used with action verbs', chapter: 3 },
          { id: 'l3g5', label: 'Particle で (de)', value: 'Marks location of action', subValue: 'Where the action takes place', chapter: 3 },
          { id: 'l3g6', label: 'Particle に (ni)', value: 'Goal of movement OR specific time', subValue: 'Direction (to) or Time (at)', chapter: 3 },
          { id: 'l3g7', label: 'Particle へ (e)', value: 'Marks direction of movement', subValue: 'Pronounced "e", means "to"', chapter: 3 },
          { id: 'l3g8', label: 'Invitation ~masenka', value: 'Present negative form', subValue: '"Won\'t you...?" to invite', chapter: 3 },
        ]
      },
    ]
  },

  // ========== LESSON 4: The First Date ==========
  {
    id: 'lesson-4',
    title: 'Lesson 4: The First Date (はじめてのデート)',
    cards: [
      {
        id: 'l4-vocab-general',
        title: 'General Vocabulary',
        chapter: 4,
        items: [
          { id: 'l4v1', label: 'game', value: 'ゲーム', subValue: 'geemu', chapter: 4 },
          { id: 'l4v2', label: 'part-time job', value: 'アルバイト', subValue: 'arubaito', chapter: 4 },
          { id: 'l4v3', label: 'shopping', value: 'かいもの (買い物)', subValue: 'kaimono', chapter: 4 },
          { id: 'l4v4', label: 'class', value: 'クラス', subValue: 'kurasu', chapter: 4 },
          { id: 'l4v5', label: 'dog', value: 'いぬ (犬)', subValue: 'inu', chapter: 4 },
          { id: 'l4v6', label: 'cat', value: 'ねこ (猫)', subValue: 'neko', chapter: 4 },
          { id: 'l4v7', label: 'person', value: 'ひと (人)', subValue: 'hito', chapter: 4 },
          { id: 'l4v8', label: 'child', value: 'こども (子供)', subValue: 'kodomo', chapter: 4 },
          { id: 'l4v9', label: 'you', value: 'あなた', subValue: 'anata', chapter: 4 },
        ]
      },
      {
        id: 'l4-vocab-objects',
        title: 'Objects & Places',
        chapter: 4,
        items: [
          { id: 'l4v10', label: 'chair', value: 'いす', subValue: 'isu', chapter: 4 },
          { id: 'l4v11', label: 'desk', value: 'つくえ (机)', subValue: 'tsukue', chapter: 4 },
          { id: 'l4v12', label: 'picture; photograph', value: 'しゃしん (写真)', subValue: 'shashin', chapter: 4 },
          { id: 'l4v13', label: 'flower', value: 'はな (花)', subValue: 'hana', chapter: 4 },
          { id: 'l4v14', label: '(term) paper', value: 'レポート', subValue: 'repooto', chapter: 4 },
          { id: 'l4v15', label: 'rice; meal', value: 'ごはん (ご飯)', subValue: 'gohan', chapter: 4 },
          { id: 'l4v16', label: 'bread', value: 'パン', subValue: 'pan', chapter: 4 },
          { id: 'l4v17', label: 'temple', value: 'おてら (お寺)', subValue: 'otera', chapter: 4 },
          { id: 'l4v18', label: 'park', value: 'こうえん (公園)', subValue: 'kooen', chapter: 4 },
          { id: 'l4v19', label: 'supermarket', value: 'スーパー', subValue: 'suupaa', chapter: 4 },
          { id: 'l4v20', label: 'bus stop', value: 'バスてい (バス停)', subValue: 'basutei', chapter: 4 },
          { id: 'l4v21', label: 'hospital', value: 'びょういん (病院)', subValue: 'byooin', chapter: 4 },
          { id: 'l4v22', label: 'hotel', value: 'ホテル', subValue: 'hoteru', chapter: 4 },
          { id: 'l4v23', label: 'bookstore', value: 'ほんや (本屋)', subValue: 'honya', chapter: 4 },
          { id: 'l4v24', label: 'town; city', value: 'まち (町)', subValue: 'machi', chapter: 4 },
          { id: 'l4v25', label: 'restaurant', value: 'レストラン', subValue: 'resutoran', chapter: 4 },
        ]
      },
      {
        id: 'l4-vocab-time',
        title: 'Time & Days of Week',
        chapter: 4,
        items: [
          { id: 'l4v26', label: 'yesterday', value: 'きのう (昨日)', subValue: 'kinoo', chapter: 4 },
          { id: 'l4v27', label: '...hours', value: '〜じかん (〜時間)', subValue: '...jikan', chapter: 4 },
          { id: 'l4v28', label: 'one hour', value: 'いちじかん (一時間)', subValue: 'ichijikan', chapter: 4 },
          { id: 'l4v29', label: 'last week', value: 'せんしゅう (先週)', subValue: 'senshuu', chapter: 4 },
          { id: 'l4v30', label: 'Monday', value: 'げつようび (月曜日)', subValue: 'getsuyoobi', chapter: 4 },
          { id: 'l4v31', label: 'Tuesday', value: 'かようび (火曜日)', subValue: 'kayoobi', chapter: 4 },
          { id: 'l4v32', label: 'Wednesday', value: 'すいようび (水曜日)', subValue: 'suiyoobi', chapter: 4 },
          { id: 'l4v33', label: 'Thursday', value: 'もくようび (木曜日)', subValue: 'mokuyoobi', chapter: 4 },
          { id: 'l4v34', label: 'Friday', value: 'きんようび (金曜日)', subValue: 'kinyoobi', chapter: 4 },
        ]
      },
      {
        id: 'l4-vocab-location',
        title: 'Location Words',
        chapter: 4,
        items: [
          { id: 'l4v35', label: 'right', value: 'みぎ (右)', subValue: 'migi', chapter: 4 },
          { id: 'l4v36', label: 'left', value: 'ひだり (左)', subValue: 'hidari', chapter: 4 },
          { id: 'l4v37', label: 'front', value: 'まえ (前)', subValue: 'mae', chapter: 4 },
          { id: 'l4v38', label: 'back', value: 'うしろ (後ろ)', subValue: 'ushiro', chapter: 4 },
          { id: 'l4v39', label: 'inside', value: 'なか (中)', subValue: 'naka', chapter: 4 },
          { id: 'l4v40', label: 'on; above', value: 'うえ (上)', subValue: 'ue', chapter: 4 },
          { id: 'l4v41', label: 'under', value: 'した (下)', subValue: 'shita', chapter: 4 },
          { id: 'l4v42', label: 'near; nearby', value: 'ちかく (近く)', subValue: 'chikaku', chapter: 4 },
          { id: 'l4v43', label: 'next to', value: 'となり (隣)', subValue: 'tonari', chapter: 4 },
          { id: 'l4v44', label: 'between', value: 'あいだ (間)', subValue: 'aida', chapter: 4 },
        ]
      },
      {
        id: 'l4-verbs',
        title: 'Verbs',
        chapter: 4,
        items: [
          { id: 'l4v45', label: 'to meet; to see (a person)', value: 'あう (会う)', subValue: 'au', chapter: 4 },
          { id: 'l4v46', label: 'there is... (inanimate)', value: 'ある', subValue: 'aru', chapter: 4 },
          { id: 'l4v47', label: 'to buy', value: 'かう (買う)', subValue: 'kau', chapter: 4 },
          { id: 'l4v48', label: 'to write', value: 'かく (書く)', subValue: 'kaku', chapter: 4 },
          { id: 'l4v49', label: 'to take (a picture)', value: 'とる (撮る)', subValue: 'toru', chapter: 4 },
          { id: 'l4v50', label: 'to wait', value: 'まつ (待つ)', subValue: 'matsu', chapter: 4 },
          { id: 'l4v51', label: 'to understand', value: 'わかる', subValue: 'wakaru', chapter: 4 },
          { id: 'l4v52', label: '(a person) is in...', value: 'いる', subValue: 'iru', chapter: 4 },
        ]
      },
      {
        id: 'l4-grammar',
        title: 'Grammar Points',
        chapter: 4,
        description: 'Core grammar from Lesson 4',
        items: [
          { id: 'l4g1', label: 'Existence (Inanimate)', value: 'X ga arimasu', subValue: 'There is/I have X (non-living)', chapter: 4 },
          { id: 'l4g2', label: 'Existence (Animate)', value: 'X ga imasu', subValue: 'There is/I have X (living)', chapter: 4 },
          { id: 'l4g3', label: 'Past Tense (Noun/Adj)', value: 'desu→deshita', subValue: 'Was; ja nai→ja nakatta (was not)', chapter: 4 },
          { id: 'l4g4', label: 'Past Tense (Verbs)', value: 'masu→mashita', subValue: 'Did; masen→masen deshita (did not)', chapter: 4 },
          { id: 'l4g5', label: 'Duration', value: '~jikan', subValue: 'Hours (no particle needed)', chapter: 4 },
          { id: 'l4g6', label: 'Particle と (to)', value: 'Noun1 to Noun2', subValue: '"and" / "with Person"', chapter: 4 },
        ]
      },
    ]
  },

  // ========== LESSON 5: A Trip to Okinawa ==========
  {
    id: 'lesson-5',
    title: 'Lesson 5: A Trip to Okinawa (おきなわりょこう)',
    cards: [
      {
        id: 'l5-vocab-general',
        title: 'General Vocabulary',
        chapter: 5,
        items: [
          { id: 'l5v1', label: 'food', value: 'たべもの (食べ物)', subValue: 'tabemono', chapter: 5 },
          { id: 'l5v2', label: 'drink', value: 'のみもの (飲み物)', subValue: 'nomimono', chapter: 5 },
          { id: 'l5v3', label: 'fruit', value: 'くだもの (果物)', subValue: 'kudamono', chapter: 5 },
          { id: 'l5v4', label: 'holiday; absence; rest', value: 'やすみ (休み)', subValue: 'yasumi', chapter: 5 },
          { id: 'l5v5', label: 'travel; trip', value: 'りょこう (旅行)', subValue: 'ryokoo', chapter: 5 },
          { id: 'l5v6', label: 'sea; ocean', value: 'うみ (海)', subValue: 'umi', chapter: 5 },
          { id: 'l5v7', label: 'surfing', value: 'サーフィン', subValue: 'saafin', chapter: 5 },
          { id: 'l5v8', label: 'souvenir', value: 'おみやげ (お土産)', subValue: 'omiyage', chapter: 5 },
          { id: 'l5v9', label: 'bus', value: 'バス', subValue: 'basu', chapter: 5 },
          { id: 'l5v10', label: 'weather', value: 'てんき (天気)', subValue: 'tenki', chapter: 5 },
          { id: 'l5v11', label: 'homework', value: 'しゅくだい (宿題)', subValue: 'shukudai', chapter: 5 },
          { id: 'l5v12', label: 'test', value: 'テスト', subValue: 'tesuto', chapter: 5 },
          { id: 'l5v13', label: 'birthday', value: 'たんじょうび (誕生日)', subValue: 'tanjoobi', chapter: 5 },
          { id: 'l5v14', label: 'room', value: 'へや (部屋)', subValue: 'heya', chapter: 5 },
          { id: 'l5v15', label: 'I (used by men)', value: 'ぼく (僕)', subValue: 'boku', chapter: 5 },
        ]
      },
      {
        id: 'l5-adj-i',
        title: 'I-Adjectives',
        chapter: 5,
        items: [
          { id: 'l5v16', label: 'new', value: 'あたらしい (新しい)', subValue: 'atarashii', chapter: 5 },
          { id: 'l5v17', label: 'old (thing)', value: 'ふるい (古い)', subValue: 'furui', chapter: 5 },
          { id: 'l5v18', label: 'hot (weather)', value: 'あつい (暑い)', subValue: 'atsui', chapter: 5 },
          { id: 'l5v19', label: 'hot (thing)', value: 'あつい (熱い)', subValue: 'atsui', chapter: 5 },
          { id: 'l5v20', label: 'cold (weather)', value: 'さむい (寒い)', subValue: 'samui', chapter: 5 },
          { id: 'l5v21', label: 'cold (thing/people)', value: 'つめたい (冷たい)', subValue: 'tsumetai', chapter: 5 },
          { id: 'l5v22', label: 'busy (people/days)', value: 'いそがしい (忙しい)', subValue: 'isogashii', chapter: 5 },
          { id: 'l5v23', label: 'large', value: 'おおきい (大きい)', subValue: 'ookii', chapter: 5 },
          { id: 'l5v24', label: 'small', value: 'ちいさい (小さい)', subValue: 'chiisai', chapter: 5 },
          { id: 'l5v25', label: 'interesting; funny', value: 'おもしろい (面白い)', subValue: 'omoshiroi', chapter: 5 },
          { id: 'l5v26', label: 'boring', value: 'つまらない', subValue: 'tsumaranai', chapter: 5 },
          { id: 'l5v27', label: 'easy; kind (person)', value: 'やさしい', subValue: 'yasashii', chapter: 5 },
          { id: 'l5v28', label: 'difficult', value: 'むずかしい (難しい)', subValue: 'muzukashii', chapter: 5 },
          { id: 'l5v29', label: 'good-looking', value: 'かっこいい', subValue: 'kakkoii', chapter: 5 },
          { id: 'l5v30', label: 'frightening', value: 'こわい (怖い)', subValue: 'kowai', chapter: 5 },
          { id: 'l5v31', label: 'fun', value: 'たのしい (楽しい)', subValue: 'tanoshii', chapter: 5 },
          { id: 'l5v32', label: 'inexpensive; cheap', value: 'やすい (安い)', subValue: 'yasui', chapter: 5 },
        ]
      },
      {
        id: 'l5-adj-na',
        title: 'Na-Adjectives',
        chapter: 5,
        items: [
          { id: 'l5v33', label: 'fond of; to like', value: 'すき (好き)', subValue: 'suki', chapter: 5 },
          { id: 'l5v34', label: 'to dislike', value: 'きらい (嫌い)', subValue: 'kirai', chapter: 5 },
          { id: 'l5v35', label: 'very fond of; to love', value: 'だいすき (大好き)', subValue: 'daisuki', chapter: 5 },
          { id: 'l5v36', label: 'to hate', value: 'だいきらい (大嫌い)', subValue: 'daikirai', chapter: 5 },
          { id: 'l5v37', label: 'beautiful; clean', value: 'きれい', subValue: 'kirei', chapter: 5 },
          { id: 'l5v38', label: 'healthy; energetic', value: 'げんき (元気)', subValue: 'genki', chapter: 5 },
          { id: 'l5v39', label: 'quiet', value: 'しずか (静か)', subValue: 'shizuka', chapter: 5 },
          { id: 'l5v40', label: 'lively', value: 'にぎやか', subValue: 'nigiyaka', chapter: 5 },
          { id: 'l5v41', label: 'not busy; idle', value: 'ひま (暇)', subValue: 'hima', chapter: 5 },
        ]
      },
      {
        id: 'l5-grammar',
        title: 'Grammar Points',
        chapter: 5,
        description: 'Core grammar from Lesson 5',
        items: [
          { id: 'l5g1', label: 'I-Adj Present Aff', value: '~i desu', subValue: 'Ends in い + です', chapter: 5 },
          { id: 'l5g2', label: 'I-Adj Present Neg', value: '~kunai desu', subValue: 'Drop い, add くない', chapter: 5 },
          { id: 'l5g3', label: 'I-Adj Past Aff', value: '~katta desu', subValue: 'Drop い, add かった', chapter: 5 },
          { id: 'l5g4', label: 'I-Adj Past Neg', value: '~kunakatta desu', subValue: 'Drop い, add くなかった', chapter: 5 },
          { id: 'l5g5', label: 'Na-Adj Present', value: '~na/desu', subValue: 'Add な before noun, です at end', chapter: 5 },
          { id: 'l5g6', label: 'Likes/Dislikes', value: 'X wa Y ga suki desu', subValue: 'X likes Y (が marks the object)', chapter: 5 },
          { id: 'l5g7', label: "Let's", value: '~mashoo', subValue: 'Verb stem + ましょう', chapter: 5 },
          { id: 'l5g8', label: "Shall we?", value: '~mashoo ka', subValue: 'Verb stem + ましょうか', chapter: 5 },
        ]
      },
    ]
  },

  // ========== LESSON 6: A Day in Robert's Life ==========
  {
    id: 'lesson-6',
    title: "Lesson 6: A Day in Robert's Life (ロバートさんの一日)",
    cards: [
      {
        id: 'l6-vocab-general',
        title: 'General Vocabulary',
        chapter: 6,
        items: [
          { id: 'l6v1', label: 'money', value: 'おかね (お金)', subValue: 'okane', chapter: 6 },
          { id: 'l6v2', label: 'bath', value: 'おふろ (お風呂)', subValue: 'ofuro', chapter: 6 },
          { id: 'l6v3', label: 'kanji', value: 'かんじ (漢字)', subValue: 'kanji', chapter: 6 },
          { id: 'l6v4', label: 'textbook', value: 'きょうかしょ (教科書)', subValue: 'kyookasho', chapter: 6 },
          { id: 'l6v5', label: 'this week', value: 'こんしゅう (今週)', subValue: 'konshuu', chapter: 6 },
          { id: 'l6v6', label: 'CD', value: 'シーディー', subValue: 'shiidii', chapter: 6 },
          { id: 'l6v7', label: 'shower', value: 'シャワー', subValue: 'shawaa', chapter: 6 },
          { id: 'l6v8', label: 'next', value: 'つぎ (次)', subValue: 'tsugi', chapter: 6 },
          { id: 'l6v9', label: 'electricity; light', value: 'でんき (電気)', subValue: 'denki', chapter: 6 },
          { id: 'l6v10', label: 'train', value: 'でんしゃ (電車)', subValue: 'densha', chapter: 6 },
          { id: 'l6v11', label: 'baggage', value: 'にもつ (荷物)', subValue: 'nimotsu', chapter: 6 },
          { id: 'l6v12', label: 'PC; laptop', value: 'パソコン', subValue: 'pasokon', chapter: 6 },
          { id: 'l6v13', label: 'window', value: 'まど (窓)', subValue: 'mado', chapter: 6 },
          { id: 'l6v14', label: 'night', value: 'よる (夜)', subValue: 'yoru', chapter: 6 },
          { id: 'l6v15', label: 'next week', value: 'らいしゅう (来週)', subValue: 'raishuu', chapter: 6 },
          { id: 'l6v16', label: 'next year', value: 'らいねん (来年)', subValue: 'rainen', chapter: 6 },
        ]
      },
      {
        id: 'l6-verbs-u',
        title: 'U-Verbs',
        chapter: 6,
        items: [
          { id: 'l6v17', label: 'to play', value: 'あそぶ (遊ぶ)', subValue: 'asobu', chapter: 6 },
          { id: 'l6v18', label: 'to hurry', value: 'いそぐ (急ぐ)', subValue: 'isogu', chapter: 6 },
          { id: 'l6v19', label: 'to return (a thing)', value: 'かえす (返す)', subValue: 'kaesu', chapter: 6 },
          { id: 'l6v20', label: 'to turn off; to erase', value: 'けす (消す)', subValue: 'kesu', chapter: 6 },
          { id: 'l6v21', label: 'to die', value: 'しぬ (死ぬ)', subValue: 'shinu', chapter: 6 },
          { id: 'l6v22', label: 'to sit down', value: 'すわる (座る)', subValue: 'suwaru', chapter: 6 },
          { id: 'l6v23', label: 'to stand up', value: 'たつ (立つ)', subValue: 'tatsu', chapter: 6 },
          { id: 'l6v24', label: 'to smoke', value: 'たばこをすう', subValue: 'tabakoo suu', chapter: 6 },
          { id: 'l6v25', label: 'to use', value: 'つかう (使う)', subValue: 'tsukau', chapter: 6 },
          { id: 'l6v26', label: 'to help', value: 'てつだう (手伝う)', subValue: 'tetsudau', chapter: 6 },
          { id: 'l6v27', label: 'to enter', value: 'はいる (入る)', subValue: 'hairu', chapter: 6 },
          { id: 'l6v28', label: 'to carry; to hold', value: 'もつ (持つ)', subValue: 'motsu', chapter: 6 },
          { id: 'l6v29', label: 'to be absent; to rest', value: 'やすむ (休む)', subValue: 'yasumu', chapter: 6 },
        ]
      },
      {
        id: 'l6-verbs-ru',
        title: 'Ru-Verbs',
        chapter: 6,
        items: [
          { id: 'l6v30', label: 'to open', value: 'あける (開ける)', subValue: 'akeru', chapter: 6 },
          { id: 'l6v31', label: 'to teach', value: 'おしえる (教える)', subValue: 'oshieru', chapter: 6 },
          { id: 'l6v32', label: 'to get off', value: 'おりる (降りる)', subValue: 'oriru', chapter: 6 },
          { id: 'l6v33', label: 'to borrow', value: 'かりる (借りる)', subValue: 'kariru', chapter: 6 },
          { id: 'l6v34', label: 'to close', value: 'しめる (閉める)', subValue: 'shimeru', chapter: 6 },
          { id: 'l6v35', label: 'to take a shower', value: 'シャワーをあびる', subValue: 'shawaa o abiru', chapter: 6 },
          { id: 'l6v36', label: 'to turn on', value: 'つける', subValue: 'tsukeru', chapter: 6 },
          { id: 'l6v37', label: 'to make a phone call', value: 'でんわをかける', subValue: 'denwa o kakeru', chapter: 6 },
          { id: 'l6v38', label: 'to forget; to leave behind', value: 'わすれる (忘れる)', subValue: 'wasureru', chapter: 6 },
        ]
      },
      {
        id: 'l6-grammar',
        title: 'Grammar Points - Te-form',
        chapter: 6,
        description: 'Core grammar from Lesson 6',
        items: [
          { id: 'l6g1', label: 'Te-form (Ru-verbs)', value: 'Drop -ru, add -te', subValue: 'たべる → たべて', chapter: 6 },
          { id: 'l6g2', label: 'Te-form (U: u/tsu/ru)', value: '→ tte', subValue: 'かう → かって', chapter: 6 },
          { id: 'l6g3', label: 'Te-form (U: mu/bu/nu)', value: '→ nde', subValue: 'のむ → のんで', chapter: 6 },
          { id: 'l6g4', label: 'Te-form (U: ku)', value: '→ ite', subValue: 'かく → かいて', chapter: 6 },
          { id: 'l6g5', label: 'Te-form (U: gu)', value: '→ ide', subValue: 'いそぐ → いそいで', chapter: 6 },
          { id: 'l6g6', label: 'Te-form (U: su)', value: '→ shite', subValue: 'はなす → はなして', chapter: 6 },
          { id: 'l6g7', label: 'Te-form Exception', value: 'iku → itte', subValue: 'いく → いって', chapter: 6 },
          { id: 'l6g8', label: 'Requests', value: '~te kudasai', subValue: 'Please do...', chapter: 6 },
          { id: 'l6g9', label: 'Prohibition', value: '~te wa ikemasen', subValue: 'You must not...', chapter: 6 },
          { id: 'l6g10', label: 'Permission', value: '~te mo ii desu', subValue: 'You may...', chapter: 6 },
          { id: 'l6g11', label: 'Reason', value: '...kara', subValue: 'Because...', chapter: 6 },
        ]
      },
    ]
  },

  // ========== LESSON 7: Family Picture ==========
  {
    id: 'lesson-7',
    title: 'Lesson 7: Family Picture (かぞくのしゃしん)',
    cards: [
      {
        id: 'l7-vocab-family',
        title: 'Family Members',
        chapter: 7,
        items: [
          { id: 'l7v1', label: 'family', value: 'かぞく (家族)', subValue: 'kazoku', chapter: 7 },
          { id: 'l7v2', label: 'grandfather; old man', value: 'おじいさん', subValue: 'ojiisan', chapter: 7 },
          { id: 'l7v3', label: 'grandmother; old woman', value: 'おばあさん', subValue: 'obaasan', chapter: 7 },
          { id: 'l7v4', label: 'older brother', value: 'おにいさん (お兄さん)', subValue: 'oniisan', chapter: 7 },
          { id: 'l7v5', label: 'older sister', value: 'おねえさん (お姉さん)', subValue: 'oneesan', chapter: 7 },
          { id: 'l7v6', label: '(my) father', value: 'ちち (父)', subValue: 'chichi', chapter: 7 },
          { id: 'l7v7', label: '(my) mother', value: 'はは (母)', subValue: 'haha', chapter: 7 },
          { id: 'l7v8', label: '(my) older brother', value: 'あに (兄)', subValue: 'ani', chapter: 7 },
          { id: 'l7v9', label: '(my) older sister', value: 'あね (姉)', subValue: 'ane', chapter: 7 },
          { id: 'l7v10', label: 'younger sister', value: 'いもうと (妹)', subValue: 'imooto', chapter: 7 },
          { id: 'l7v11', label: 'younger brother', value: 'おとうと (弟)', subValue: 'otooto', chapter: 7 },
          { id: 'l7v12', label: 'brothers and sisters', value: 'きょうだい (兄弟)', subValue: 'kyoodai', chapter: 7 },
        ]
      },
      {
        id: 'l7-vocab-people-places',
        title: 'People & Places',
        chapter: 7,
        items: [
          { id: 'l7v13', label: 'man', value: 'おとこのひと (男の人)', subValue: 'otokonohito', chapter: 7 },
          { id: 'l7v14', label: 'woman', value: 'おんなのひと (女の人)', subValue: 'onnanohito', chapter: 7 },
          { id: 'l7v15', label: 'company', value: 'かいしゃ (会社)', subValue: 'kaisha', chapter: 7 },
          { id: 'l7v16', label: 'cafeteria', value: 'しょくどう (食堂)', subValue: 'shokudoo', chapter: 7 },
          { id: 'l7v17', label: 'department store', value: 'デパート', subValue: 'depaato', chapter: 7 },
        ]
      },
      {
        id: 'l7-vocab-body',
        title: 'Body Parts',
        chapter: 7,
        items: [
          { id: 'l7v18', label: 'hair', value: 'かみ (髪)', subValue: 'kami', chapter: 7 },
          { id: 'l7v19', label: 'mouth', value: 'くち (口)', subValue: 'kuchi', chapter: 7 },
          { id: 'l7v20', label: 'eye', value: 'め (目)', subValue: 'me', chapter: 7 },
          { id: 'l7v21', label: 'glasses', value: 'めがね (眼鏡)', subValue: 'megane', chapter: 7 },
        ]
      },
      {
        id: 'l7-adj',
        title: 'Adjectives',
        chapter: 7,
        items: [
          { id: 'l7v22', label: 'long', value: 'ながい (長い)', subValue: 'nagai', chapter: 7 },
          { id: 'l7v23', label: 'short (length)', value: 'みじかい (短い)', subValue: 'mijikai', chapter: 7 },
          { id: 'l7v24', label: 'fast', value: 'はやい (速い)', subValue: 'hayai', chapter: 7 },
          { id: 'l7v25', label: 'tall (stature)', value: 'せがたかい (背が高い)', subValue: 'segatakai', chapter: 7 },
          { id: 'l7v26', label: 'short (stature)', value: 'せがひくい (背が低い)', subValue: 'segahikui', chapter: 7 },
          { id: 'l7v27', label: 'bright; smart', value: 'あたまがいい (頭がいい)', subValue: 'atamagaii', chapter: 7 },
          { id: 'l7v28', label: 'cute', value: 'かわいい', subValue: 'kawaii', chapter: 7 },
          { id: 'l7v29', label: 'kind', value: 'しんせつ (親切)', subValue: 'shinsetsu', chapter: 7 },
          { id: 'l7v30', label: 'convenient', value: 'べんり (便利)', subValue: 'benri', chapter: 7 },
        ]
      },
      {
        id: 'l7-verbs',
        title: 'Verbs',
        chapter: 7,
        items: [
          { id: 'l7v31', label: 'to sing', value: 'うたう (歌う)', subValue: 'utau', chapter: 7 },
          { id: 'l7v32', label: 'to put on (a hat)', value: 'かぶる', subValue: 'kaburu', chapter: 7 },
          { id: 'l7v33', label: 'I know', value: 'しっています (知っています)', subValue: 'shitteimasu', chapter: 7 },
          { id: 'l7v34', label: 'I do not know', value: 'しりません (知りません)', subValue: 'shirimasen', chapter: 7 },
          { id: 'l7v35', label: 'to live (~ni sundeimasu)', value: 'すむ (住む)', subValue: 'sumu', chapter: 7 },
          { id: 'l7v36', label: 'to put on (below waist)', value: 'はく', subValue: 'haku', chapter: 7 },
          { id: 'l7v37', label: 'to be on the heavy side', value: 'ふとっています (太っています)', subValue: 'futotteimasu', chapter: 7 },
          { id: 'l7v38', label: 'to put on (glasses)', value: 'かける', subValue: 'kakeru', chapter: 7 },
          { id: 'l7v39', label: 'to put on (above waist)', value: 'きる (着る)', subValue: 'kiru', chapter: 7 },
          { id: 'l7v40', label: 'to work for (~ni tsutometeimasu)', value: 'つとめる (勤める)', subValue: 'tsutomeru', chapter: 7 },
          { id: 'l7v41', label: 'to be thin', value: 'やせています', subValue: 'yaseteimasu', chapter: 7 },
          { id: 'l7v42', label: 'to get married (~to)', value: 'けっこんする (結婚する)', subValue: 'kekkonsuru', chapter: 7 },
        ]
      },
      {
        id: 'l7-grammar',
        title: 'Grammar Points',
        chapter: 7,
        description: 'Core grammar from Lesson 7',
        items: [
          { id: 'l7g1', label: 'Action in Progress', value: '~te imasu', subValue: 'I am doing...', chapter: 7 },
          { id: 'l7g2', label: 'Resultant State', value: '~te imasu', subValue: 'I am married / I live in...', chapter: 7 },
          { id: 'l7g3', label: 'Body Parts', value: 'Person wa [body] ga [adj]', subValue: 'Person has [adj] [body part]', chapter: 7 },
          { id: 'l7g4', label: 'Te-form (I-Adj)', value: 'Drop -i, add -kute', subValue: 'Join sentences', chapter: 7 },
          { id: 'l7g5', label: 'Te-form (Na-Adj/Noun)', value: 'Add -de', subValue: 'Join sentences', chapter: 7 },
          { id: 'l7g6', label: 'Movement Purpose', value: 'ni [verb stem] ni ikimasu', subValue: 'Go to do [verb]', chapter: 7 },
          { id: 'l7g7', label: 'Counting People', value: 'hitori, futari, san-nin...', subValue: 'Special counters for people', chapter: 7 },
        ]
      },
    ]
  },

  // ========== LESSON 8: Barbecue ==========
  {
    id: 'lesson-8',
    title: 'Lesson 8: Barbecue (バーベキュー)',
    cards: [
      {
        id: 'l8-vocab-general',
        title: 'General Vocabulary',
        chapter: 8,
        items: [
          { id: 'l8v1', label: 'the day after tomorrow', value: 'あさって', subValue: 'asatte', chapter: 8 },
          { id: 'l8v2', label: 'rain', value: 'あめ (雨)', subValue: 'ame', chapter: 8 },
          { id: 'l8v3', label: 'office worker', value: 'かいしゃいん (会社員)', subValue: 'kaishain', chapter: 8 },
          { id: 'l8v4', label: 'camera', value: 'カメラ', subValue: 'kamera', chapter: 8 },
          { id: 'l8v5', label: 'karaoke', value: 'カラオケ', subValue: 'karaoke', chapter: 8 },
          { id: 'l8v6', label: 'air', value: 'くうき (空気)', subValue: 'kuuki', chapter: 8 },
          { id: 'l8v7', label: 'this morning', value: 'けさ (今朝)', subValue: 'kesa', chapter: 8 },
          { id: 'l8v8', label: 'blackboard', value: 'こくばん (黒板)', subValue: 'kokuban', chapter: 8 },
          { id: 'l8v9', label: 'this month', value: 'こんげつ (今月)', subValue: 'kongetsu', chapter: 8 },
          { id: 'l8v10', label: 'job; work', value: 'しごと (仕事)', subValue: 'shigoto', chapter: 8 },
          { id: 'l8v11', label: 'weather forecast', value: 'てんきよほう (天気予報)', subValue: 'tenkiyopoo', chapter: 8 },
          { id: 'l8v12', label: 'summer', value: 'なつ (夏)', subValue: 'natsu', chapter: 8 },
          { id: 'l8v13', label: 'winter', value: 'ふゆ (冬)', subValue: 'fuyu', chapter: 8 },
          { id: 'l8v14', label: 'homestay', value: 'ホームステイ', subValue: 'hoomusutei', chapter: 8 },
          { id: 'l8v15', label: 'every week', value: 'まいしゅう (毎週)', subValue: 'maishuu', chapter: 8 },
          { id: 'l8v16', label: 'next month', value: 'らいげつ (来月)', subValue: 'raigetsu', chapter: 8 },
        ]
      },
      {
        id: 'l8-adj',
        title: 'Adjectives',
        chapter: 8,
        items: [
          { id: 'l8v17', label: 'skillful; good at...', value: 'じょうず (上手)', subValue: 'joozu', chapter: 8 },
          { id: 'l8v18', label: 'clumsy; poor at...', value: 'へた (下手)', subValue: 'heta', chapter: 8 },
          { id: 'l8v19', label: 'famous', value: 'ゆうめい (有名)', subValue: 'yuumei', chapter: 8 },
        ]
      },
      {
        id: 'l8-verbs',
        title: 'Verbs',
        chapter: 8,
        items: [
          { id: 'l8v20', label: 'to wash', value: 'あらう (洗う)', subValue: 'arau', chapter: 8 },
          { id: 'l8v21', label: 'to need', value: 'いる', subValue: 'iru', chapter: 8 },
          { id: 'l8v22', label: 'to be late', value: 'おそくなる (遅くなる)', subValue: 'osokunaru', chapter: 8 },
          { id: 'l8v23', label: 'to think', value: 'おもう (思う)', subValue: 'omou', chapter: 8 },
          { id: 'l8v24', label: 'to cut', value: 'きる (切る)', subValue: 'kiru', chapter: 8 },
          { id: 'l8v25', label: 'to make', value: 'つくる (作る)', subValue: 'tsukuru', chapter: 8 },
          { id: 'l8v26', label: '(rain/snow) falls', value: 'ふる (降る)', subValue: 'furu', chapter: 8 },
          { id: 'l8v27', label: 'to take (a thing)', value: 'もっていく (持っていく)', subValue: 'motteiku', chapter: 8 },
          { id: 'l8v28', label: 'to throw away', value: 'すてる (捨てる)', subValue: 'suteru', chapter: 8 },
          { id: 'l8v29', label: 'to begin', value: 'はじめる (始める)', subValue: 'hajimeru', chapter: 8 },
          { id: 'l8v30', label: 'to drive', value: 'うんてんする (運転する)', subValue: 'untensuru', chapter: 8 },
          { id: 'l8v31', label: 'to do laundry', value: 'せんたくする (洗濯する)', subValue: 'sentakusuru', chapter: 8 },
          { id: 'l8v32', label: 'to clean', value: 'そうじする (掃除する)', subValue: 'soojisuru', chapter: 8 },
          { id: 'l8v33', label: 'to cook', value: 'りょうりする (料理する)', subValue: 'ryoorisuru', chapter: 8 },
        ]
      },
      {
        id: 'l8-grammar',
        title: 'Grammar Points',
        chapter: 8,
        description: 'Core grammar from Lesson 8',
        items: [
          { id: 'l8g1', label: 'Short Forms (Verbs)', value: 'Dictionary form / Nai-form', subValue: 'Informal speech foundation', chapter: 8 },
          { id: 'l8g2', label: 'Quotations (Think)', value: '[Short Form] to omoimasu', subValue: 'I think that...', chapter: 8 },
          { id: 'l8g3', label: 'Quotations (Say)', value: '[Short Form] to itte imashita', subValue: 'They said that...', chapter: 8 },
          { id: 'l8g4', label: 'Negative Request', value: '~nai de kudasai', subValue: "Please don't...", chapter: 8 },
          { id: 'l8g5', label: 'Verb Nominalization', value: 'Verb(short) + no', subValue: 'Turn verb into noun phrase', chapter: 8 },
          { id: 'l8g6', label: 'Particle が (Subject)', value: 'Emphasizes the subject', subValue: 'Who did it? Mary did it', chapter: 8 },
        ]
      },
    ]
  },

  // ========== LESSON 9: Kabuki ==========
  {
    id: 'lesson-9',
    title: 'Lesson 9: Kabuki (かぶき)',
    cards: [
      {
        id: 'l9-vocab-general',
        title: 'General Vocabulary',
        chapter: 9,
        items: [
          { id: 'l9v1', label: 'good child', value: 'いいこ (いい子)', subValue: 'iiko', chapter: 9 },
          { id: 'l9v2', label: 'color', value: 'いろ (色)', subValue: 'iro', chapter: 9 },
          { id: 'l9v3', label: 'boxed lunch', value: 'おべんとう (お弁当)', subValue: 'obentoo', chapter: 9 },
          { id: 'l9v4', label: 'Kabuki', value: 'かぶき (歌舞伎)', subValue: 'kabuki', chapter: 9 },
          { id: 'l9v5', label: 'guitar', value: 'ギター', subValue: 'gitaa', chapter: 9 },
          { id: 'l9v6', label: 'last year', value: 'きょねん (去年)', subValue: 'kyonen', chapter: 9 },
          { id: 'l9v7', label: 'medicine', value: 'くすり (薬)', subValue: 'kusuri', chapter: 9 },
          { id: 'l9v8', label: 'concert', value: 'コンサート', subValue: 'konsaato', chapter: 9 },
          { id: 'l9v9', label: 'near future', value: 'こんど (今度)', subValue: 'kondo', chapter: 9 },
          { id: 'l9v10', label: 'essay; composition', value: 'さくぶん (作文)', subValue: 'sakubun', chapter: 9 },
          { id: 'l9v11', label: 'exam', value: 'しけん (試験)', subValue: 'shiken', chapter: 9 },
          { id: 'l9v12', label: 'ski', value: 'スキー', subValue: 'sukii', chapter: 9 },
          { id: 'l9v13', label: 'last month', value: 'せんげつ (先月)', subValue: 'sengetsu', chapter: 9 },
          { id: 'l9v14', label: 'word; vocabulary', value: 'たんご (単語)', subValue: 'tango', chapter: 9 },
          { id: 'l9v15', label: 'piano', value: 'ピアノ', subValue: 'piano', chapter: 9 },
          { id: 'l9v16', label: 'pizza', value: 'ピザ', subValue: 'piza', chapter: 9 },
          { id: 'l9v17', label: 'illness; sickness', value: 'びょうき (病気)', subValue: 'byooki', chapter: 9 },
        ]
      },
      {
        id: 'l9-adj',
        title: 'Adjectives',
        chapter: 9,
        items: [
          { id: 'l9v18', label: 'blue', value: 'あおい (青い)', subValue: 'aoi', chapter: 9 },
          { id: 'l9v19', label: 'red', value: 'あかい (赤い)', subValue: 'akai', chapter: 9 },
          { id: 'l9v20', label: 'black', value: 'くろい (黒い)', subValue: 'kuroi', chapter: 9 },
          { id: 'l9v21', label: 'lonely', value: 'さびしい (寂しい)', subValue: 'sabishii', chapter: 9 },
          { id: 'l9v22', label: 'white', value: 'しろい (白い)', subValue: 'shiroi', chapter: 9 },
          { id: 'l9v23', label: 'young', value: 'わかい (若い)', subValue: 'wakai', chapter: 9 },
          { id: 'l9v24', label: 'mean-spirited', value: 'いじわる (意地悪)', subValue: 'ijiwaru', chapter: 9 },
        ]
      },
      {
        id: 'l9-verbs',
        title: 'Verbs',
        chapter: 9,
        items: [
          { id: 'l9v25', label: 'to dance', value: 'おどる (踊る)', subValue: 'odoru', chapter: 9 },
          { id: 'l9v26', label: '(something) ends', value: 'おわる (終わる)', subValue: 'owaru', chapter: 9 },
          { id: 'l9v27', label: 'to be popular', value: 'にんきがある (人気がある)', subValue: 'ninkigaaru', chapter: 9 },
          { id: 'l9v28', label: '(something) begins', value: 'はじまる (始まる)', subValue: 'hajimaru', chapter: 9 },
          { id: 'l9v29', label: 'to play (instrument)', value: 'ひく (弾く)', subValue: 'hiku', chapter: 9 },
          { id: 'l9v30', label: 'to get (from somebody)', value: 'もらう', subValue: 'morau', chapter: 9 },
          { id: 'l9v31', label: 'to memorize', value: 'おぼえる (覚える)', subValue: 'oboeru', chapter: 9 },
          { id: 'l9v32', label: 'to appear; to attend; to exit', value: 'でる (出る)', subValue: 'deru', chapter: 9 },
          { id: 'l9v33', label: 'to do physical exercises', value: 'うんどうする (運動する)', subValue: 'undoosuru', chapter: 9 },
          { id: 'l9v34', label: 'to take a walk', value: 'さんぽする (散歩する)', subValue: 'sanposuru', chapter: 9 },
        ]
      },
      {
        id: 'l9-grammar',
        title: 'Grammar Points',
        chapter: 9,
        description: 'Core grammar from Lesson 9',
        items: [
          { id: 'l9g1', label: 'Past Tense (Short)', value: 'Ta-form / Nakatta-form', subValue: 'Informal past tense', chapter: 9 },
          { id: 'l9g2', label: 'Ta-form', value: 'Like Te-form, replace te→ta', subValue: 'たべて → たべた', chapter: 9 },
          { id: 'l9g3', label: 'Nakatta-form', value: 'Replace nai→nakatta', subValue: 'たべない → たべなかった', chapter: 9 },
          { id: 'l9g4', label: 'Qualifying Nouns', value: 'Short Form + Noun', subValue: 'Use verbs/adj to modify nouns', chapter: 9 },
          { id: 'l9g5', label: 'Moo + Past Aff', value: 'moo + ta-form', subValue: 'Already did', chapter: 9 },
          { id: 'l9g6', label: 'Mada + Te-iru', value: 'mada + te-form imasu', subValue: "Haven't done yet", chapter: 9 },
          { id: 'l9g7', label: 'Explanation', value: '[Reason] kara, [Situation]', subValue: 'Because [Reason], [Situation]', chapter: 9 },
        ]
      },
    ]
  },

  // ========== LESSON 10: Winter Vacation Plans ==========
  {
    id: 'lesson-10',
    title: 'Lesson 10: Winter Vacation Plans (ふゆやすみのよてい)',
    cards: [
      {
        id: 'l10-vocab-general',
        title: 'General Vocabulary',
        chapter: 10,
        items: [
          { id: 'l10v1', label: 'autumn', value: 'あき (秋)', subValue: 'aki', chapter: 10 },
          { id: 'l10v2', label: 'doctor', value: 'いしゃ (医者)', subValue: 'isha', chapter: 10 },
          { id: 'l10v3', label: 'station', value: 'えき (駅)', subValue: 'eki', chapter: 10 },
          { id: 'l10v4', label: 'rich person', value: 'おかねもち (お金持ち)', subValue: 'okanemochi', chapter: 10 },
          { id: 'l10v5', label: 'face', value: 'かお (顔)', subValue: 'kao', chapter: 10 },
          { id: 'l10v6', label: 'season', value: 'きせつ (季節)', subValue: 'kisetsu', chapter: 10 },
          { id: 'l10v7', label: 'credit card', value: 'クレジットカード', subValue: 'kurejittokaado', chapter: 10 },
          { id: 'l10v8', label: 'cake', value: 'ケーキ', subValue: 'keeki', chapter: 10 },
          { id: 'l10v9', label: 'this year', value: 'ことし (今年)', subValue: 'kotoshi', chapter: 10 },
          { id: 'l10v10', label: 'soccer', value: 'サッカー', subValue: 'sakkaa', chapter: 10 },
          { id: 'l10v11', label: 'shirt', value: 'シャツ', subValue: 'shatsu', chapter: 10 },
          { id: 'l10v12', label: 'Bullet Train', value: 'しんかんせん (新幹線)', subValue: 'shinkansen', chapter: 10 },
          { id: 'l10v13', label: 'sushi', value: 'すし (寿司)', subValue: 'sushi', chapter: 10 },
          { id: 'l10v14', label: 'life; living', value: 'せいかつ (生活)', subValue: 'seikatsu', chapter: 10 },
          { id: 'l10v15', label: 'world', value: 'せかい (世界)', subValue: 'sekai', chapter: 10 },
          { id: 'l10v16', label: 'subway', value: 'ちかてつ (地下鉄)', subValue: 'chikatetsu', chapter: 10 },
          { id: 'l10v17', label: 'gloves', value: 'てぶくろ (手袋)', subValue: 'tebukuro', chapter: 10 },
          { id: 'l10v18', label: 'tempura', value: 'てんぷら (天ぷら)', subValue: 'tenpura', chapter: 10 },
          { id: 'l10v19', label: "barber's", value: 'とこや (床屋)', subValue: 'tokoya', chapter: 10 },
          { id: 'l10v20', label: 'spring', value: 'はる (春)', subValue: 'haru', chapter: 10 },
          { id: 'l10v21', label: 'pants', value: 'パンツ', subValue: 'pantsu', chapter: 10 },
          { id: 'l10v22', label: 'beauty parlor', value: 'びよういん (美容院)', subValue: 'biyooin', chapter: 10 },
          { id: 'l10v23', label: 'flight', value: 'びん (便)', subValue: 'bin', chapter: 10 },
          { id: 'l10v24', label: 'ship; boat', value: 'ふね (船)', subValue: 'fune', chapter: 10 },
          { id: 'l10v25', label: 'baseball', value: 'やきゅう (野球)', subValue: 'yakyuu', chapter: 10 },
          { id: 'l10v26', label: 'celebrity', value: 'ゆうめいじん (有名人)', subValue: 'yuumeijin', chapter: 10 },
          { id: 'l10v27', label: 'reservation', value: 'よやく (予約)', subValue: 'yoyaku', chapter: 10 },
          { id: 'l10v28', label: 'next semester', value: 'らいがっき (来学期)', subValue: 'raigakki', chapter: 10 },
          { id: 'l10v29', label: 'apple', value: 'りんご', subValue: 'ringo', chapter: 10 },
        ]
      },
      {
        id: 'l10-adj',
        title: 'Adjectives',
        chapter: 10,
        items: [
          { id: 'l10v30', label: 'warm', value: 'あたたかい (暖かい)', subValue: 'atatakai', chapter: 10 },
          { id: 'l10v31', label: 'slow; late', value: 'おそい (遅い)', subValue: 'osoi', chapter: 10 },
          { id: 'l10v32', label: 'cool (weather)', value: 'すずしい (涼しい)', subValue: 'suzushii', chapter: 10 },
          { id: 'l10v33', label: 'sleepy', value: 'ねむい (眠い)', subValue: 'nemui', chapter: 10 },
          { id: 'l10v34', label: 'easy; simple', value: 'かんたん (簡単)', subValue: 'kantan', chapter: 10 },
        ]
      },
      {
        id: 'l10-verbs',
        title: 'Verbs',
        chapter: 10,
        items: [
          { id: 'l10v35', label: 'to take (time/money)', value: 'かかる', subValue: 'kakaru', chapter: 10 },
          { id: 'l10v36', label: 'to stay (at a hotel)', value: 'とまる (泊まる)', subValue: 'tomaru', chapter: 10 },
          { id: 'l10v37', label: 'to become', value: 'なる', subValue: 'naru', chapter: 10 },
          { id: 'l10v38', label: 'to pay', value: 'はらう (払う)', subValue: 'harau', chapter: 10 },
          { id: 'l10v39', label: 'to decide', value: 'きめる (決める)', subValue: 'kimeru', chapter: 10 },
          { id: 'l10v40', label: 'to travel', value: 'りょこうする (旅行する)', subValue: 'ryokoosuru', chapter: 10 },
          { id: 'l10v41', label: 'to practice', value: 'れんしゅうする (練習する)', subValue: 'renshuusuru', chapter: 10 },
        ]
      },
      {
        id: 'l10-grammar',
        title: 'Grammar Points',
        chapter: 10,
        description: 'Core grammar from Lesson 10',
        items: [
          { id: 'l10g1', label: 'Comparison (2 Items)', value: 'A no hoo ga B yori [property]', subValue: 'A is more [property] than B', chapter: 10 },
          { id: 'l10g2', label: 'Comparison (Question)', value: 'A to B to dotchi no hoo ga...', subValue: 'Which is more..., A or B?', chapter: 10 },
          { id: 'l10g3', label: 'Comparison (3+ Items)', value: '[Class] no naka de A ga ichiban', subValue: 'A is the most... among [Class]', chapter: 10 },
          { id: 'l10g4', label: 'Intention (Tsumori)', value: 'Verb(present short) + tsumori desu', subValue: 'I intend to do...', chapter: 10 },
          { id: 'l10g5', label: 'Becoming (I-Adj)', value: 'Drop -i, add -ku naru', subValue: 'To become...', chapter: 10 },
          { id: 'l10g6', label: 'Becoming (Na-Adj/Noun)', value: 'Add -ni naru', subValue: 'To become...', chapter: 10 },
          { id: 'l10g7', label: 'Transport/Means', value: 'Particle で (de)', subValue: 'By bus / With a tool', chapter: 10 },
          { id: 'l10g8', label: 'Travel Duration', value: '[Place] kara [Place] made [Method] de [Duration] kakarimasu', subValue: 'It takes [Duration] from A to B by [Method]', chapter: 10 },
        ]
      },
    ]
  },
];

