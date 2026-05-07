const HANGUL_CONSONANTS = [
  { char: "ㄱ", romanization: "g/k", sound: "like 'g' in go" },
  { char: "ㄴ", romanization: "n",   sound: "like 'n' in no" },
  { char: "ㄷ", romanization: "d/t", sound: "like 'd' in do" },
  { char: "ㄹ", romanization: "r/l", sound: "between 'r' and 'l'" },
  { char: "ㅁ", romanization: "m",   sound: "like 'm' in me" },
  { char: "ㅂ", romanization: "b/p", sound: "like 'b' in boy" },
  { char: "ㅅ", romanization: "s",   sound: "like 's' in sun" },
  { char: "ㅇ", romanization: "ng/silent", sound: "silent at start, 'ng' at end" },
  { char: "ㅈ", romanization: "j",   sound: "like 'j' in joy" },
  { char: "ㅊ", romanization: "ch",  sound: "like 'ch' in chair" },
  { char: "ㅋ", romanization: "k",   sound: "aspirated 'k'" },
  { char: "ㅌ", romanization: "t",   sound: "aspirated 't'" },
  { char: "ㅍ", romanization: "p",   sound: "aspirated 'p'" },
  { char: "ㅎ", romanization: "h",   sound: "like 'h' in hat" },
];

const HANGUL_VOWELS = [
  { char: "ㅏ", romanization: "a",   sound: "like 'a' in father" },
  { char: "ㅑ", romanization: "ya",  sound: "like 'ya' in yard" },
  { char: "ㅓ", romanization: "eo",  sound: "like 'u' in fun" },
  { char: "ㅕ", romanization: "yeo", sound: "like 'yuh'" },
  { char: "ㅗ", romanization: "o",   sound: "like 'o' in old" },
  { char: "ㅛ", romanization: "yo",  sound: "like 'yo' in yoga" },
  { char: "ㅜ", romanization: "u",   sound: "like 'oo' in food" },
  { char: "ㅠ", romanization: "yu",  sound: "like 'yu' in you" },
  { char: "ㅡ", romanization: "eu",  sound: "no English equivalent" },
  { char: "ㅣ", romanization: "i",   sound: "like 'ee' in see" },
];

const VOCABULARY = [
  // ── Greetings ──────────────────────────────────────────────────────────────
  { korean: "안녕하세요",  romanization: "annyeonghaseyo",  english: "Hello (formal)",        category: "Greetings" },
  { korean: "안녕",       romanization: "annyeong",        english: "Hi / Bye (informal)",   category: "Greetings" },
  { korean: "감사합니다", romanization: "gamsahamnida",    english: "Thank you (formal)",     category: "Greetings" },
  { korean: "고마워요",   romanization: "gomawoyo",        english: "Thank you (casual)",     category: "Greetings" },
  { korean: "죄송합니다", romanization: "joesonghamnida",  english: "I'm sorry (formal)",     category: "Greetings" },
  { korean: "괜찮아요",   romanization: "gwaenchanayo",    english: "It's okay / I'm fine",   category: "Greetings" },
  { korean: "네",         romanization: "ne",              english: "Yes",                    category: "Greetings" },
  { korean: "아니요",     romanization: "aniyo",           english: "No",                     category: "Greetings" },
  { korean: "안녕히 가세요", romanization: "annyeonghi gaseyo", english: "Goodbye (to one leaving)", category: "Greetings" },
  { korean: "만나서 반가워요", romanization: "mannaseo bangawoyo", english: "Nice to meet you", category: "Greetings" },
  { korean: "잘 지내요?", romanization: "jal jinaeyo",    english: "How are you?",            category: "Greetings" },
  { korean: "잘 지내요",  romanization: "jal jinaeyo",    english: "I'm doing well",          category: "Greetings" },

  // ── People ─────────────────────────────────────────────────────────────────
  { korean: "나",    romanization: "na",       english: "I / Me (informal)", category: "People" },
  { korean: "저",    romanization: "jeo",      english: "I / Me (formal)",   category: "People" },
  { korean: "우리",  romanization: "uri",      english: "We / Our",          category: "People" },
  { korean: "친구",  romanization: "chingu",   english: "Friend",            category: "People" },
  { korean: "가족",  romanization: "gajok",    english: "Family",            category: "People" },
  { korean: "엄마",  romanization: "eomma",    english: "Mom",               category: "People" },
  { korean: "아빠",  romanization: "appa",     english: "Dad",               category: "People" },
  { korean: "오빠",  romanization: "oppa",     english: "Older brother (female speaker)", category: "People" },
  { korean: "언니",  romanization: "eonni",    english: "Older sister (female speaker)",  category: "People" },
  { korean: "형",    romanization: "hyeong",   english: "Older brother (male speaker)",   category: "People" },
  { korean: "누나",  romanization: "nuna",     english: "Older sister (male speaker)",    category: "People" },
  { korean: "선생님", romanization: "seonsaengnim", english: "Teacher",       category: "People" },
  { korean: "학생",  romanization: "haksaeng", english: "Student",           category: "People" },

  // ── Numbers ────────────────────────────────────────────────────────────────
  { korean: "일",   romanization: "il",    english: "1 (Sino-Korean)",    category: "Numbers" },
  { korean: "이",   romanization: "i",     english: "2 (Sino-Korean)",    category: "Numbers" },
  { korean: "삼",   romanization: "sam",   english: "3 (Sino-Korean)",    category: "Numbers" },
  { korean: "사",   romanization: "sa",    english: "4 (Sino-Korean)",    category: "Numbers" },
  { korean: "오",   romanization: "o",     english: "5 (Sino-Korean)",    category: "Numbers" },
  { korean: "육",   romanization: "yuk",   english: "6 (Sino-Korean)",    category: "Numbers" },
  { korean: "칠",   romanization: "chil",  english: "7 (Sino-Korean)",    category: "Numbers" },
  { korean: "팔",   romanization: "pal",   english: "8 (Sino-Korean)",    category: "Numbers" },
  { korean: "구",   romanization: "gu",    english: "9 (Sino-Korean)",    category: "Numbers" },
  { korean: "십",   romanization: "sip",   english: "10 (Sino-Korean)",   category: "Numbers" },
  { korean: "하나", romanization: "hana",  english: "1 (Native Korean)",  category: "Numbers" },
  { korean: "둘",   romanization: "dul",   english: "2 (Native Korean)",  category: "Numbers" },
  { korean: "셋",   romanization: "set",   english: "3 (Native Korean)",  category: "Numbers" },
  { korean: "넷",   romanization: "net",   english: "4 (Native Korean)",  category: "Numbers" },
  { korean: "다섯", romanization: "daseot", english: "5 (Native Korean)", category: "Numbers" },

  // ── Food & Drink ───────────────────────────────────────────────────────────
  { korean: "물",     romanization: "mul",       english: "Water",               category: "Food" },
  { korean: "밥",     romanization: "bap",       english: "Rice / Meal",         category: "Food" },
  { korean: "빵",     romanization: "ppang",     english: "Bread",               category: "Food" },
  { korean: "고기",   romanization: "gogi",      english: "Meat",                category: "Food" },
  { korean: "생선",   romanization: "saengseon", english: "Fish",                category: "Food" },
  { korean: "채소",   romanization: "chaeso",    english: "Vegetables",          category: "Food" },
  { korean: "과일",   romanization: "gwail",     english: "Fruit",               category: "Food" },
  { korean: "김치",   romanization: "gimchi",    english: "Kimchi",              category: "Food" },
  { korean: "불고기", romanization: "bulgogi",   english: "Bulgogi",             category: "Food" },
  { korean: "비빔밥", romanization: "bibimbap",  english: "Bibimbap",            category: "Food" },
  { korean: "떡볶이", romanization: "tteokbokki", english: "Spicy rice cakes",  category: "Food" },
  { korean: "커피",   romanization: "keopi",     english: "Coffee",              category: "Food" },
  { korean: "차",     romanization: "cha",       english: "Tea",                 category: "Food" },
  { korean: "주스",   romanization: "juseu",     english: "Juice",               category: "Food" },
  { korean: "맛있어요", romanization: "massisseoyo", english: "It's delicious",  category: "Food" },
  { korean: "맛없어요", romanization: "maseopseoyo", english: "It's not tasty",  category: "Food" },

  // ── Places ─────────────────────────────────────────────────────────────────
  { korean: "학교",   romanization: "hakgyo",     english: "School",       category: "Places" },
  { korean: "집",     romanization: "jip",        english: "House / Home", category: "Places" },
  { korean: "식당",   romanization: "sikdang",    english: "Restaurant",   category: "Places" },
  { korean: "병원",   romanization: "byeongwon",  english: "Hospital",     category: "Places" },
  { korean: "은행",   romanization: "eunhaeng",   english: "Bank",         category: "Places" },
  { korean: "편의점", romanization: "pyeonuijeom", english: "Convenience store", category: "Places" },
  { korean: "공항",   romanization: "gonghang",   english: "Airport",      category: "Places" },
  { korean: "지하철역", romanization: "jihacheol yeok", english: "Subway station", category: "Places" },
  { korean: "공원",   romanization: "gongwon",    english: "Park",         category: "Places" },
  { korean: "서울",   romanization: "seoul",      english: "Seoul",        category: "Places" },

  // ── Verbs ──────────────────────────────────────────────────────────────────
  { korean: "가다",    romanization: "gada",      english: "To go",         category: "Verbs" },
  { korean: "오다",    romanization: "oda",       english: "To come",       category: "Verbs" },
  { korean: "먹다",    romanization: "meokda",    english: "To eat",        category: "Verbs" },
  { korean: "마시다",  romanization: "masida",    english: "To drink",      category: "Verbs" },
  { korean: "자다",    romanization: "jada",      english: "To sleep",      category: "Verbs" },
  { korean: "일어나다", romanization: "ireonada", english: "To wake up",    category: "Verbs" },
  { korean: "공부하다", romanization: "gongbuhada", english: "To study",    category: "Verbs" },
  { korean: "일하다",  romanization: "ilhada",    english: "To work",       category: "Verbs" },
  { korean: "보다",    romanization: "boda",      english: "To see / watch", category: "Verbs" },
  { korean: "듣다",    romanization: "deutda",    english: "To listen",     category: "Verbs" },
  { korean: "말하다",  romanization: "malhada",   english: "To speak",      category: "Verbs" },
  { korean: "읽다",    romanization: "ikda",      english: "To read",       category: "Verbs" },
  { korean: "쓰다",    romanization: "sseuda",    english: "To write",      category: "Verbs" },
  { korean: "사다",    romanization: "sada",      english: "To buy",        category: "Verbs" },
  { korean: "만나다",  romanization: "mannada",   english: "To meet",       category: "Verbs" },
  { korean: "알다",    romanization: "alda",      english: "To know",       category: "Verbs" },
  { korean: "좋아하다", romanization: "joahada",  english: "To like",       category: "Verbs" },
  { korean: "사랑하다", romanization: "saranghada", english: "To love",     category: "Verbs" },
  { korean: "있다",    romanization: "itda",      english: "To have / exist", category: "Verbs" },
  { korean: "없다",    romanization: "eopda",     english: "To not have / not exist", category: "Verbs" },

  // ── Adjectives ─────────────────────────────────────────────────────────────
  { korean: "크다",     romanization: "keuda",      english: "Big / Large",      category: "Adjectives" },
  { korean: "작다",     romanization: "jakda",      english: "Small / Little",   category: "Adjectives" },
  { korean: "많다",     romanization: "manta",      english: "Many / A lot",     category: "Adjectives" },
  { korean: "적다",     romanization: "jeokda",     english: "Few / Little",     category: "Adjectives" },
  { korean: "좋다",     romanization: "jota",       english: "Good",             category: "Adjectives" },
  { korean: "나쁘다",   romanization: "nappeuda",   english: "Bad",              category: "Adjectives" },
  { korean: "빠르다",   romanization: "ppareuda",   english: "Fast",             category: "Adjectives" },
  { korean: "느리다",   romanization: "neurida",    english: "Slow",             category: "Adjectives" },
  { korean: "예쁘다",   romanization: "yeppeuda",   english: "Pretty / Beautiful", category: "Adjectives" },
  { korean: "멋있다",   romanization: "meositda",   english: "Cool / Stylish",   category: "Adjectives" },
  { korean: "재미있다", romanization: "jaemiitda",  english: "Interesting / Fun", category: "Adjectives" },
  { korean: "어렵다",   romanization: "eoryeopda",  english: "Difficult",        category: "Adjectives" },
  { korean: "쉽다",     romanization: "swipda",     english: "Easy",             category: "Adjectives" },
  { korean: "덥다",     romanization: "deobda",     english: "Hot (weather)",    category: "Adjectives" },
  { korean: "춥다",     romanization: "chupda",     english: "Cold (weather)",   category: "Adjectives" },

  // ── Time ───────────────────────────────────────────────────────────────────
  { korean: "오늘",  romanization: "oneul",   english: "Today",      category: "Time" },
  { korean: "내일",  romanization: "naeil",   english: "Tomorrow",   category: "Time" },
  { korean: "어제",  romanization: "eoje",    english: "Yesterday",  category: "Time" },
  { korean: "지금",  romanization: "jigeum",  english: "Now",        category: "Time" },
  { korean: "아침",  romanization: "achim",   english: "Morning",    category: "Time" },
  { korean: "점심",  romanization: "jeomsim", english: "Lunch / Noon", category: "Time" },
  { korean: "저녁",  romanization: "jeonyeok", english: "Evening",   category: "Time" },
  { korean: "밤",    romanization: "bam",     english: "Night",      category: "Time" },
  { korean: "월요일", romanization: "woryoil", english: "Monday",    category: "Time" },
  { korean: "화요일", romanization: "hwayoil", english: "Tuesday",   category: "Time" },
  { korean: "수요일", romanization: "suyoil",  english: "Wednesday", category: "Time" },
  { korean: "목요일", romanization: "mogyoil", english: "Thursday",  category: "Time" },
  { korean: "금요일", romanization: "geumyoil", english: "Friday",   category: "Time" },
  { korean: "토요일", romanization: "toyoil",  english: "Saturday",  category: "Time" },
  { korean: "일요일", romanization: "iryoil",  english: "Sunday",    category: "Time" },

  // ── Colors ─────────────────────────────────────────────────────────────────
  { korean: "빨간색", romanization: "ppalgansaek", english: "Red",    category: "Colors" },
  { korean: "파란색", romanization: "paransaek",   english: "Blue",   category: "Colors" },
  { korean: "초록색", romanization: "choroksaek",  english: "Green",  category: "Colors" },
  { korean: "노란색", romanization: "noransaek",   english: "Yellow", category: "Colors" },
  { korean: "흰색",   romanization: "huinsaek",    english: "White",  category: "Colors" },
  { korean: "검은색", romanization: "geomeunsaek", english: "Black",  category: "Colors" },
  { korean: "보라색", romanization: "borasaek",    english: "Purple", category: "Colors" },
  { korean: "주황색", romanization: "juhwangsaek", english: "Orange", category: "Colors" },
  { korean: "분홍색", romanization: "bunhongsaek", english: "Pink",   category: "Colors" },
  { korean: "갈색",   romanization: "galsaek",     english: "Brown",  category: "Colors" },

  // ── Emotions ───────────────────────────────────────────────────────────────
  { korean: "행복해요",  romanization: "haengbokhaeyo", english: "Happy",     category: "Emotions" },
  { korean: "슬퍼요",   romanization: "seulpeoyo",     english: "Sad",       category: "Emotions" },
  { korean: "화나요",   romanization: "hwanayo",       english: "Angry",     category: "Emotions" },
  { korean: "무서워요", romanization: "museowoyo",     english: "Scared",    category: "Emotions" },
  { korean: "피곤해요", romanization: "pigonhaeyo",    english: "Tired",     category: "Emotions" },
  { korean: "배고파요", romanization: "baegopayo",     english: "Hungry",    category: "Emotions" },
  { korean: "배불러요", romanization: "baebulleoyo",   english: "Full (after eating)", category: "Emotions" },
  { korean: "심심해요", romanization: "simsimhaeyo",   english: "Bored",     category: "Emotions" },
  { korean: "신나요",   romanization: "sinnayo",       english: "Excited",   category: "Emotions" },
  { korean: "걱정돼요", romanization: "geokjeongdwaeyo", english: "Worried", category: "Emotions" },
];

// ── Sentence Patterns ────────────────────────────────────────────────────────
const SENTENCE_PATTERNS = [
  {
    id: "sov",
    title: "Word Order: SOV",
    badge: "Core Rule",
    badgeColor: "#6c63ff",
    summary: "Korean sentences follow Subject → Object → Verb order. The verb always comes last.",
    explanation: "In English you say 'I eat rice.' In Korean the verb 먹어요 (eat) comes at the end: 나는 밥을 먹어요. This applies to all Korean sentences — the verb is always the final element.",
    examples: [
      { korean: "나는 밥을 먹어요",     romanization: "naneun babeul meogeoyo",   english: "I eat rice",          parts: ["나는·I (topic)", "밥을·rice (object)", "먹어요·eat"] },
      { korean: "저는 물을 마셔요",     romanization: "jeoneun mureul mashyeoyo", english: "I drink water",       parts: ["저는·I (topic)", "물을·water (object)", "마셔요·drink"] },
      { korean: "친구는 음악을 들어요", romanization: "chinguneun eumageul deureoyo", english: "My friend listens to music", parts: ["친구는·friend (topic)", "음악을·music (object)", "들어요·listens"] },
    ],
  },
  {
    id: "topic",
    title: "Topic Particle 은/는",
    badge: "Particles",
    badgeColor: "#ff6584",
    summary: "은 (after consonant) / 는 (after vowel) marks what the sentence is about.",
    explanation: "The topic particle tells the listener what you're talking about. Use 은 when the preceding syllable ends in a consonant, and 는 when it ends in a vowel. Topics are often things already known in the conversation.",
    examples: [
      { korean: "저는 학생이에요",   romanization: "jeoneun haksaengieyo",  english: "I am a student",     parts: ["저는·I (topic)", "학생이에요·am a student"] },
      { korean: "오늘은 더워요",    romanization: "oneureun deowoyo",      english: "Today is hot",        parts: ["오늘은·today (topic)", "더워요·is hot"] },
      { korean: "이 책은 재미있어요", romanization: "i chaegeun jaemiisseoyo", english: "This book is interesting", parts: ["이 책은·this book (topic)", "재미있어요·is interesting"] },
    ],
  },
  {
    id: "subject",
    title: "Subject Particle 이/가",
    badge: "Particles",
    badgeColor: "#ff6584",
    summary: "이 (after consonant) / 가 (after vowel) marks the grammatical subject — often new information.",
    explanation: "While 은/는 marks the topic (what you're talking about), 이/가 marks the subject (who/what performs the action). It often introduces new information or emphasizes the subject. Use 이 after a consonant, 가 after a vowel.",
    examples: [
      { korean: "비가 와요",        romanization: "biga wayo",         english: "Rain is coming / It's raining", parts: ["비가·rain (subject)", "와요·comes"] },
      { korean: "친구가 전화했어요", romanization: "chinguga jeonhwahaesseoyo", english: "My friend called",  parts: ["친구가·friend (subject)", "전화했어요·called"] },
      { korean: "고양이가 자요",    romanization: "goyangi ga jayo",   english: "The cat is sleeping",  parts: ["고양이가·cat (subject)", "자요·sleeps"] },
    ],
  },
  {
    id: "object",
    title: "Object Particle 을/를",
    badge: "Particles",
    badgeColor: "#ff6584",
    summary: "을 (after consonant) / 를 (after vowel) marks the direct object of a verb.",
    explanation: "This particle attaches to the noun receiving the action. Use 을 when the noun ends in a consonant, and 를 when it ends in a vowel. The object always comes before the verb.",
    examples: [
      { korean: "사과를 먹어요",   romanization: "sagwareul meogeoyo",  english: "I eat an apple",      parts: ["사과를·apple (object)", "먹어요·eat"] },
      { korean: "한국어를 공부해요", romanization: "hangugeo reul gongbuhaeyo", english: "I study Korean", parts: ["한국어를·Korean (object)", "공부해요·study"] },
      { korean: "음악을 들어요",   romanization: "eumageul deureoyo",  english: "I listen to music",   parts: ["음악을·music (object)", "들어요·listen"] },
    ],
  },
  {
    id: "location",
    title: "Location: 에 vs 에서",
    badge: "Particles",
    badgeColor: "#ff6584",
    summary: "에 = static location or direction. 에서 = location of an action.",
    explanation: "에 is used for where something exists (있어요/없어요) or where you're going (direction). 에서 is used for where an action takes place. Think of 에 as 'at/to' and 에서 as 'at (doing something here)' or 'from'.",
    examples: [
      { korean: "학교에 가요",    romanization: "hakgyoe gayo",      english: "I go to school",        parts: ["학교에·to school", "가요·go"] },
      { korean: "집에 있어요",   romanization: "jibe isseoyo",      english: "I am at home",          parts: ["집에·at home", "있어요·am/exist"] },
      { korean: "카페에서 공부해요", romanization: "kapeeseo gongbuhaeyo", english: "I study at the café", parts: ["카페에서·at the café", "공부해요·study"] },
    ],
  },
  {
    id: "negation",
    title: "Negation with 안",
    badge: "Grammar",
    badgeColor: "#43e97b",
    summary: "Place 안 directly before the verb to make it negative.",
    explanation: "안 is the simple negation adverb meaning 'not'. Put it right before the verb or adjective. For compound verbs ending in 하다 (to do), insert 안 before 하다: 공부 안 해요. This is the everyday spoken negation.",
    examples: [
      { korean: "안 먹어요",       romanization: "an meogeoyo",        english: "I don't eat",          parts: ["안·not", "먹어요·eat"] },
      { korean: "안 가요",        romanization: "an gayo",            english: "I'm not going",        parts: ["안·not", "가요·go"] },
      { korean: "공부 안 해요",   romanization: "gongbu an haeyo",    english: "I don't study",        parts: ["공부·study", "안·not", "해요·do"] },
    ],
  },
  {
    id: "tobe",
    title: "To Be: 이에요/예요",
    badge: "Grammar",
    badgeColor: "#43e97b",
    summary: "이에요 (after consonant) / 예요 (after vowel) = 'am/is/are' for identification.",
    explanation: "To say someone IS something (a noun), attach 이에요 to nouns ending in a consonant, or 예요 to nouns ending in a vowel. This is different from 있어요 which means to exist or have. For negative: noun + 이/가 아니에요 (is not).",
    examples: [
      { korean: "저는 학생이에요",  romanization: "jeoneun haksaengieyo",  english: "I am a student",     parts: ["저는·I (topic)", "학생이에요·am a student"] },
      { korean: "이거 뭐예요?",    romanization: "igeo mwoyeyo",         english: "What is this?",       parts: ["이거·this", "뭐예요?·what is?"] },
      { korean: "저는 선생님이 아니에요", romanization: "jeoneun seonsaengnimi anieyo", english: "I'm not a teacher", parts: ["저는·I", "선생님이·teacher", "아니에요·am not"] },
    ],
  },
  {
    id: "polite",
    title: "Polite Endings: 아요/어요",
    badge: "Verbs",
    badgeColor: "#ffa94d",
    summary: "Most verbs in polite speech end in 아요 or 어요 — the everyday standard form.",
    explanation: "Remove 다 from the dictionary form, then add 아요 if the last vowel is ㅏ or ㅗ, or 어요 for all others. 하다 verbs become 해요. This is the polite informal level you'll use most of the time.",
    examples: [
      { korean: "가요",    romanization: "gayo",     english: "go (polite)",    parts: ["가다 → 가·stem", "요·polite ending"] },
      { korean: "먹어요",  romanization: "meogeoyo", english: "eat (polite)",   parts: ["먹다 → 먹·stem", "어요·polite ending"] },
      { korean: "공부해요", romanization: "gongbuhaeyo", english: "study (polite)", parts: ["공부하다 → 공부·stem", "해요·do (polite)"] },
    ],
  },
  {
    id: "question",
    title: "Asking Questions",
    badge: "Grammar",
    badgeColor: "#43e97b",
    summary: "Korean questions use the same word order as statements — just change your intonation or add a question word.",
    explanation: "You can make any statement a yes/no question just by raising your voice at the end. Question words (뭐=what, 어디=where, 언제=when, 누구=who, 왜=why, 어떻게=how) slot into the sentence where the answer would go. The verb still comes last.",
    examples: [
      { korean: "밥을 먹어요?",    romanization: "babeul meogeoyo?",   english: "Do you eat rice?",     parts: ["밥을·rice (object)", "먹어요?·eat? (rising intonation)"] },
      { korean: "뭐를 먹어요?",   romanization: "mworeul meogeoyo?",  english: "What do you eat?",     parts: ["뭐를·what (object)", "먹어요?·eat?"] },
      { korean: "어디에 가요?",   romanization: "eodie gayo?",        english: "Where are you going?",  parts: ["어디에·where (to)", "가요?·go?"] },
    ],
  },
  {
    id: "past",
    title: "Past Tense: 았어요/었어요",
    badge: "Verbs",
    badgeColor: "#ffa94d",
    summary: "Add 았어요 (after ㅏ/ㅗ vowels) or 었어요 (all others) to the verb stem for past tense.",
    explanation: "Past tense in Korean is formed by taking the verb stem and adding 았어요 or 었어요. The rule is the same as 아요/어요 — ㅏ or ㅗ takes 았, everything else takes 었. 하다 becomes 했어요.",
    examples: [
      { korean: "먹었어요",    romanization: "meogeosseoyo",  english: "I ate",         parts: ["먹·stem", "었어요·past tense ending"] },
      { korean: "갔어요",     romanization: "gasseoyo",      english: "I went",        parts: ["가·stem", "았어요·past tense ending"] },
      { korean: "공부했어요",  romanization: "gongbuhaesseoyo", english: "I studied",  parts: ["공부하·stem", "았어요 → 했어요·past"] },
    ],
  },
];

// ── Sentence Builder Exercises ────────────────────────────────────────────────
const SENTENCE_BUILDER = [
  { english: "I eat rice",             words: ["나는", "밥을", "먹어요"],              pattern: "sov" },
  { english: "I drink water",          words: ["저는", "물을", "마셔요"],              pattern: "sov" },
  { english: "I go to school",         words: ["저는", "학교에", "가요"],             pattern: "location" },
  { english: "I study at home",        words: ["저는", "집에서", "공부해요"],         pattern: "location" },
  { english: "I am a student",         words: ["저는", "학생이에요"],                 pattern: "tobe" },
  { english: "I don't eat",            words: ["저는", "안", "먹어요"],               pattern: "negation" },
  { english: "I don't go",             words: ["저는", "안", "가요"],                 pattern: "negation" },
  { english: "I listen to music",      words: ["저는", "음악을", "들어요"],           pattern: "object" },
  { english: "Where are you going?",   words: ["어디에", "가요?"],                    pattern: "question" },
  { english: "What do you eat?",       words: ["뭐를", "먹어요?"],                    pattern: "question" },
  { english: "I studied Korean",       words: ["저는", "한국어를", "공부했어요"],     pattern: "past" },
  { english: "I ate rice",             words: ["저는", "밥을", "먹었어요"],           pattern: "past" },
  { english: "My friend is coming",    words: ["친구가", "와요"],                     pattern: "subject" },
  { english: "It is raining",          words: ["비가", "와요"],                       pattern: "subject" },
  { english: "I like Korean food",     words: ["저는", "한국 음식을", "좋아해요"],    pattern: "object" },
  { english: "Today is hot",           words: ["오늘은", "더워요"],                   pattern: "topic" },
  { english: "I went to the hospital", words: ["저는", "병원에", "갔어요"],           pattern: "past" },
  { english: "I don't study",          words: ["공부", "안", "해요"],                 pattern: "negation" },
];

// ── Grammar Quiz Questions ────────────────────────────────────────────────────
const GRAMMAR_QUIZ = [
  // ── Particles ──
  { q: "Which particle marks the TOPIC of a sentence?",
    opts: ["은/는", "이/가", "을/를", "에서"], a: "은/는",
    tip: "은/는 marks the topic (what you're talking about). Use 은 after consonants, 는 after vowels." },

  { q: "Which particle marks the DIRECT OBJECT?",
    opts: ["을/를", "은/는", "이/가", "에"], a: "을/를",
    tip: "을/를 marks the object receiving the action. Use 을 after consonants, 를 after vowels." },

  { q: "Which particle marks the grammatical SUBJECT (new info)?",
    opts: ["이/가", "은/는", "을/를", "에서"], a: "이/가",
    tip: "이/가 marks the subject, often introducing new or emphasized information." },

  { q: "Fill in the blank: 저___ 밥을 먹어요 (I eat rice)",
    opts: ["는", "가", "를", "에"], a: "는",
    tip: "저 ends in a vowel, so the topic particle 는 is used. (저 + 는 = 저는)" },

  { q: "Fill in the blank: 친구___ 학교에 가요 (My friend goes to school)",
    opts: ["가", "는", "를", "에서"], a: "가",
    tip: "친구 ends in a vowel, so the subject particle 가 is used. (친구 + 가 = 친구가)" },

  { q: "Fill in the blank: 저는 물___ 마셔요 (I drink water)",
    opts: ["을", "는", "가", "에서"], a: "을",
    tip: "물 ends in the consonant ㄹ, so the object particle 을 is used. (물 + 을 = 물을)" },

  { q: "Fill in the blank: 저는 한국어___ 공부해요 (I study Korean)",
    opts: ["를", "을", "는", "가"], a: "를",
    tip: "한국어 ends in a vowel, so the object particle 를 is used." },

  // ── Location ──
  { q: "Which particle means 'where an ACTION takes place'?",
    opts: ["에서", "에", "을/를", "이/가"], a: "에서",
    tip: "에서 marks where an action happens (study, eat, work). 에 marks static location or direction." },

  { q: "Fill in the blank: 학교___ 가요 (I go to school)",
    opts: ["에", "에서", "는", "가"], a: "에",
    tip: "에 is used with direction/movement verbs like 가다 and 오다." },

  { q: "Fill in the blank: 카페___ 공부해요 (I study at the café)",
    opts: ["에서", "에", "가", "를"], a: "에서",
    tip: "에서 is used because studying is an action being performed at the café." },

  { q: "Fill in the blank: 집___ 있어요 (I am at home)",
    opts: ["에", "에서", "가", "를"], a: "에",
    tip: "있다 (to exist/be) uses 에 for location, not 에서." },

  // ── Negation ──
  { q: "How do you say 'I don't eat'?",
    opts: ["안 먹어요", "먹 안 어요", "먹어요 안", "못 있어요"], a: "안 먹어요",
    tip: "안 goes directly in front of the verb to negate it: 안 + verb." },

  { q: "How do you say 'I don't study' (공부하다)?",
    opts: ["공부 안 해요", "안 공부해요", "공부해요 안", "안 공부 해요"], a: "공부 안 해요",
    tip: "For 하다 compound verbs, 안 goes between the noun and 하다: noun + 안 + 해요." },

  { q: "Where does 안 go in a sentence to negate a verb?",
    opts: ["Directly before the verb", "At the very start", "After the verb", "After the subject"], a: "Directly before the verb",
    tip: "안 always sits right before the verb (or 하다 in compound verbs)." },

  // ── To Be ──
  { q: "Which ending means 'am/is/are' after a noun ending in a CONSONANT?",
    opts: ["이에요", "예요", "있어요", "해요"], a: "이에요",
    tip: "이에요 follows nouns ending in a consonant. 예요 follows nouns ending in a vowel." },

  { q: "Which ending means 'am/is/are' after a noun ending in a VOWEL?",
    opts: ["예요", "이에요", "있어요", "가요"], a: "예요",
    tip: "예요 follows nouns ending in a vowel. 이에요 follows consonant-ending nouns." },

  { q: "How do you say 'I am a student'? (저, 학생)",
    opts: ["저는 학생이에요", "저는 학생예요", "저가 학생이에요", "저는 학생있어요"], a: "저는 학생이에요",
    tip: "학생 ends in ㅇ (a consonant), so 이에요 is used. Topic particle 는 after 저." },

  { q: "What is 'I am not a teacher'? (저, 선생님)",
    opts: ["저는 선생님이 아니에요", "저는 선생님 없어요", "저는 안 선생님이에요", "저는 선생님이에요 안"], a: "저는 선생님이 아니에요",
    tip: "Negative of 이에요/예요 is 이/가 아니에요. The subject particle 이 attaches to 선생님." },

  // ── Word Order ──
  { q: "What is the correct word order in Korean?",
    opts: ["Subject + Object + Verb", "Subject + Verb + Object", "Verb + Subject + Object", "Object + Subject + Verb"], a: "Subject + Object + Verb",
    tip: "Korean is an SOV language. The verb ALWAYS comes at the very end of the sentence." },

  { q: "Which sentence has the correct Korean word order?",
    opts: ["저는 밥을 먹어요", "저는 먹어요 밥을", "먹어요 저는 밥을", "밥을 먹어요 저는"], a: "저는 밥을 먹어요",
    tip: "Correct: Subject (저는) → Object (밥을) → Verb (먹어요). Verb always last!" },

  { q: "In Korean, where does the verb always go?",
    opts: ["At the end of the sentence", "At the beginning", "After the subject", "Before the object"], a: "At the end of the sentence",
    tip: "This is the most important rule of Korean grammar — the verb is always the final word." },

  // ── Verb Endings ──
  { q: "What is the polite present tense ending for most verbs?",
    opts: ["아요/어요", "았어요/었어요", "겠어요", "이에요"], a: "아요/어요",
    tip: "아요 follows ㅏ or ㅗ vowel stems. 어요 follows all other stems. 하다 → 해요." },

  { q: "What is the polite PAST tense ending?",
    opts: ["았어요/었어요", "아요/어요", "겠어요", "이에요"], a: "았어요/었어요",
    tip: "았어요 follows ㅏ/ㅗ stems. 었어요 follows all others. 하다 → 했어요." },

  { q: "What is the past tense of 가다 (to go)?",
    opts: ["갔어요", "가었어요", "가요", "갔요"], a: "갔어요",
    tip: "가 + 았어요 contracts: 가았어요 → 갔어요. ㅏ vowels contract with 았." },

  { q: "What is the past tense of 먹다 (to eat)?",
    opts: ["먹었어요", "먹았어요", "먹어요", "먹겠어요"], a: "먹었어요",
    tip: "먹 has the vowel ㅓ, which is not ㅏ or ㅗ, so 었어요 is used: 먹 + 었어요." },

  { q: "What is the polite form of 공부하다 (to study)?",
    opts: ["공부해요", "공부하요", "공부어요", "공부았어요"], a: "공부해요",
    tip: "All 하다 verbs follow the same pattern: 하다 → 해요 in polite speech." },

  { q: "What is the past tense of 공부하다 (to study)?",
    opts: ["공부했어요", "공부하었어요", "공부해어요", "공부았어요"], a: "공부했어요",
    tip: "하다 past tense: 하 + 였어요 → 했어요. So 공부하다 → 공부했어요." },

  // ── Questions ──
  { q: "How do you form a yes/no question in Korean?",
    opts: ["Same word order as a statement, raise intonation", "Move the verb to the front", "Add 까 to the start", "Add 요? before the subject"], a: "Same word order as a statement, raise intonation",
    tip: "Korean yes/no questions keep the exact same word order. Just raise your intonation at the end." },

  { q: "Where do question words (뭐, 어디, 언제, 누구) go?",
    opts: ["Where the answer would go", "Always at the very start", "Always just before the verb", "After the topic particle"], a: "Where the answer would go",
    tip: "Question words slot in where their answer belongs. The verb still comes last." },

  { q: "How do you say 'Where are you going?'",
    opts: ["어디에 가요?", "가요 어디에?", "어디에요 가?", "가요? 어디에"], a: "어디에 가요?",
    tip: "어디 (where) + 에 (direction) comes before the verb 가요. The verb stays at the end even in questions." },

  // ── 있다/없다 ──
  { q: "What does 있어요 mean?",
    opts: ["There is / I have", "There isn't / I don't have", "I am", "I go"], a: "There is / I have",
    tip: "있다 means to exist or to have. Its opposite is 없다 (없어요) — to not exist / not have." },

  { q: "How do you say 'I don't have time'? (시간)",
    opts: ["시간이 없어요", "시간이 있어요", "시간은 안 있어요", "시간가 없어요"], a: "시간이 없어요",
    tip: "시간 (time) + 이 (subject particle, after consonant) + 없어요 (don't have)." },

  // ── Mixed application ──
  { q: "Which sentence correctly means 'I like Korean food'?",
    opts: ["저는 한국 음식을 좋아해요", "저는 한국 음식이 좋아해요", "저는 좋아해요 한국 음식을", "한국 음식은 저를 좋아해요"], a: "저는 한국 음식을 좋아해요",
    tip: "좋아하다 (to like) takes an object with 을/를. Word order: Subject + Object + Verb." },

  { q: "Which sentence correctly means 'It is raining'?",
    opts: ["비가 와요", "비는 와요", "비를 와요", "비에서 와요"], a: "비가 와요",
    tip: "비 (rain) is the subject performing 와요 (comes/falls), so the subject particle 가 is used." },

  { q: "Which is the correct way to say 'I went to school'?",
    opts: ["저는 학교에 갔어요", "저는 학교에서 갔어요", "저는 학교가 갔어요", "저는 학교를 갔어요"], a: "저는 학교에 갔어요",
    tip: "에 marks direction/destination with movement verbs. Past tense: 가다 → 갔어요." },
];
