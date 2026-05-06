const HANGUL_CONSONANTS = [
  { char: "ㄱ", romanization: "g/k", sound: "like 'g' in go" },
  { char: "ㄴ", romanization: "n", sound: "like 'n' in no" },
  { char: "ㄷ", romanization: "d/t", sound: "like 'd' in do" },
  { char: "ㄹ", romanization: "r/l", sound: "between 'r' and 'l'" },
  { char: "ㅁ", romanization: "m", sound: "like 'm' in me" },
  { char: "ㅂ", romanization: "b/p", sound: "like 'b' in boy" },
  { char: "ㅅ", romanization: "s", sound: "like 's' in sun" },
  { char: "ㅇ", romanization: "ng/silent", sound: "silent at start, 'ng' at end" },
  { char: "ㅈ", romanization: "j", sound: "like 'j' in joy" },
  { char: "ㅊ", romanization: "ch", sound: "like 'ch' in chair" },
  { char: "ㅋ", romanization: "k", sound: "like 'k' in kite (aspirated)" },
  { char: "ㅌ", romanization: "t", sound: "like 't' in top (aspirated)" },
  { char: "ㅍ", romanization: "p", sound: "like 'p' in pop (aspirated)" },
  { char: "ㅎ", romanization: "h", sound: "like 'h' in hat" },
];

const HANGUL_VOWELS = [
  { char: "ㅏ", romanization: "a", sound: "like 'a' in father" },
  { char: "ㅑ", romanization: "ya", sound: "like 'ya' in yard" },
  { char: "ㅓ", romanization: "eo", sound: "like 'u' in fun" },
  { char: "ㅕ", romanization: "yeo", sound: "like 'yuh'" },
  { char: "ㅗ", romanization: "o", sound: "like 'o' in old" },
  { char: "ㅛ", romanization: "yo", sound: "like 'yo' in yoga" },
  { char: "ㅜ", romanization: "u", sound: "like 'oo' in food" },
  { char: "ㅠ", romanization: "yu", sound: "like 'yu' in you" },
  { char: "ㅡ", romanization: "eu", sound: "like 'eu', no English equiv." },
  { char: "ㅣ", romanization: "i", sound: "like 'ee' in see" },
];

const VOCABULARY = [
  // Greetings
  { korean: "안녕하세요", romanization: "annyeonghaseyo", english: "Hello (formal)", category: "Greetings" },
  { korean: "안녕", romanization: "annyeong", english: "Hi / Bye (informal)", category: "Greetings" },
  { korean: "감사합니다", romanization: "gamsahamnida", english: "Thank you (formal)", category: "Greetings" },
  { korean: "고마워요", romanization: "gomawoyo", english: "Thank you (casual)", category: "Greetings" },
  { korean: "죄송합니다", romanization: "joesonghamnida", english: "I'm sorry (formal)", category: "Greetings" },
  { korean: "괜찮아요", romanization: "gwaenchanayo", english: "It's okay / I'm fine", category: "Greetings" },
  { korean: "네", romanization: "ne", english: "Yes", category: "Greetings" },
  { korean: "아니요", romanization: "aniyo", english: "No", category: "Greetings" },

  // People
  { korean: "나", romanization: "na", english: "I / Me (informal)", category: "People" },
  { korean: "저", romanization: "jeo", english: "I / Me (formal)", category: "People" },
  { korean: "당신", romanization: "dangsin", english: "You (formal)", category: "People" },
  { korean: "친구", romanization: "chingu", english: "Friend", category: "People" },
  { korean: "가족", romanization: "gajok", english: "Family", category: "People" },
  { korean: "엄마", romanization: "eomma", english: "Mom", category: "People" },
  { korean: "아빠", romanization: "appa", english: "Dad", category: "People" },

  // Numbers
  { korean: "일", romanization: "il", english: "1 (Sino-Korean)", category: "Numbers" },
  { korean: "이", romanization: "i", english: "2 (Sino-Korean)", category: "Numbers" },
  { korean: "삼", romanization: "sam", english: "3 (Sino-Korean)", category: "Numbers" },
  { korean: "사", romanization: "sa", english: "4 (Sino-Korean)", category: "Numbers" },
  { korean: "오", romanization: "o", english: "5 (Sino-Korean)", category: "Numbers" },
  { korean: "하나", romanization: "hana", english: "1 (Native Korean)", category: "Numbers" },
  { korean: "둘", romanization: "dul", english: "2 (Native Korean)", category: "Numbers" },
  { korean: "셋", romanization: "set", english: "3 (Native Korean)", category: "Numbers" },

  // Food & Drink
  { korean: "물", romanization: "mul", english: "Water", category: "Food" },
  { korean: "밥", romanization: "bap", english: "Rice / Meal", category: "Food" },
  { korean: "김치", romanization: "gimchi", english: "Kimchi", category: "Food" },
  { korean: "불고기", romanization: "bulgogi", english: "Bulgogi (grilled beef)", category: "Food" },
  { korean: "커피", romanization: "keopi", english: "Coffee", category: "Food" },
  { korean: "맛있어요", romanization: "massisseoyo", english: "It's delicious", category: "Food" },

  // Places
  { korean: "학교", romanization: "hakgyo", english: "School", category: "Places" },
  { korean: "집", romanization: "jip", english: "House / Home", category: "Places" },
  { korean: "식당", romanization: "sikdang", english: "Restaurant", category: "Places" },
  { korean: "병원", romanization: "byeongwon", english: "Hospital", category: "Places" },
  { korean: "서울", romanization: "seoul", english: "Seoul", category: "Places" },

  // Verbs
  { korean: "가다", romanization: "gada", english: "To go", category: "Verbs" },
  { korean: "오다", romanization: "oda", english: "To come", category: "Verbs" },
  { korean: "먹다", romanization: "meokda", english: "To eat", category: "Verbs" },
  { korean: "마시다", romanization: "masida", english: "To drink", category: "Verbs" },
  { korean: "자다", romanization: "jada", english: "To sleep", category: "Verbs" },
  { korean: "공부하다", romanization: "gongbuhada", english: "To study", category: "Verbs" },
  { korean: "사랑하다", romanization: "saranghada", english: "To love", category: "Verbs" },
];
