import type { Metadata } from "next";

export type LanguagePairFaq = {
  question: string;
  answer: string;
};

export type LanguagePairFeature = {
  title: string;
  description: string;
};

export type LanguagePairConfig = {
  slug: string;
  route: string;
  sourceLanguage: string;
  targetLanguage: string;
  flag: string;
  accentColor: string;

  // Metadata
  metaTitle: string;
  metaDescription: string;
  keywords: string[];

  // Hero
  heroBadge: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  heroSubDescription: string;

  // Features (6 cards)
  features: LanguagePairFeature[];

  // How it works (3 steps)
  steps: { title: string; description: string }[];

  // FAQ (4 items)
  faqs: LanguagePairFaq[];

  // CTA
  ctaTitle: string;
  ctaDescription: string;
};

export function buildLanguagePairMetadata(config: LanguagePairConfig): Metadata {
  const canonical = `https://oravo.ai${config.route}`;
  return {
    title: config.metaTitle,
    description: config.metaDescription,
    keywords: config.keywords,
    alternates: { canonical },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url: canonical,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.metaTitle,
      description: config.metaDescription,
    },
  };
}

const configs: LanguagePairConfig[] = [
  // Hindi
  {
    slug: "voice-typing-hindi-to-english",
    route: "/voice-typing-hindi-to-english",
    sourceLanguage: "Hindi",
    targetLanguage: "English",
    flag: "\u{1F1EE}\u{1F1F3}",
    accentColor: "#FF9933",
    metaTitle: "Voice Typing Hindi to English | Speak Hindi, Type English | Oravo",
    metaDescription:
      "Voice typing from Hindi to English. Speak in Hindi or Hinglish, get perfect English text. Handles Devanagari-origin words, Hindi-English code-switching, and all regional accents.",
    keywords: [
      "voice typing hindi to english",
      "hindi to english voice typing",
      "speak hindi type english",
      "hindi voice to text english",
      "hindi english translation voice",
      "hinglish voice typing",
      "hindi accent voice recognition",
      "hindi speech to english text",
      "devanagari to english voice",
      "hindi dictation english output",
      "indian accent voice typing",
      "hindi english code switching voice",
    ],
    heroBadge: "Hindi \u2192 English",
    heroTitle: "Voice Typing",
    heroHighlight: "Hindi to English",
    heroDescription:
      "Speak in Hindi, get perfect English text. Oravo understands Hindi-English code-switching, Devanagari-origin vocabulary, and every regional accent from Delhi to Chennai.",
    heroSubDescription:
      "Built for Hindi speakers who think in Hindi but need to write in English.",
    features: [
      {
        title: "Hindi-English Code-Switching",
        description:
          "Mix Hindi and English naturally. Say 'Meeting ka time change karo' and Oravo produces clean English output.",
      },
      {
        title: "All Regional Accents",
        description:
          "Whether you speak with a Punjabi, Marathi, Bengali, or South Indian accent, Oravo understands you perfectly.",
      },
      {
        title: "Devanagari Vocabulary",
        description:
          "Handles Hindi-origin words and transliterations. Names, places, and cultural terms are recognized accurately.",
      },
      {
        title: "4x Faster Than Typing",
        description:
          "Think and speak in Hindi at 150 wpm instead of struggling to type in English at 40 wpm.",
      },
      {
        title: "Real-Time Translation",
        description:
          "See English text appear as you speak Hindi. No waiting, no copy-pasting from translation apps.",
      },
      {
        title: "Works in Every App",
        description:
          "Gmail, Slack, WhatsApp, Word, Google Docs\u2014write in English in any app using your Hindi voice.",
      },
    ],
    steps: [
      {
        title: "Install Oravo",
        description:
          "Download Oravo for Mac, Windows, iOS, or Android. Setup takes about 2 minutes.",
      },
      {
        title: "Select Hindi \u2192 English",
        description:
          "Choose Hindi as your input language. Oravo will translate your speech into professional English.",
      },
      {
        title: "Speak Hindi, Get English",
        description:
          "Press your hotkey, speak naturally in Hindi or Hinglish, and watch perfect English text appear instantly.",
      },
    ],
    faqs: [
      {
        question: "Does it understand Hinglish (Hindi-English mixing)?",
        answer:
          "Yes! Oravo is built for how Hindi speakers actually talk. Mix Hindi and English freely\u2014Oravo understands code-switching and produces clean English output.",
      },
      {
        question: "Which Hindi accents are supported?",
        answer:
          "All of them. Whether you speak with a North Indian, South Indian, Maharashtrian, or Bengali accent, Oravo recognizes your speech accurately.",
      },
      {
        question: "Can it handle Hindi names and cultural terms?",
        answer:
          "Yes. Oravo recognizes Indian names, places, and cultural terms from Devanagari-origin vocabulary and transliterates them correctly.",
      },
      {
        question: "Does it work offline?",
        answer:
          "Yes, Oravo can run offline on your Mac or Windows PC, ensuring privacy and speed even without internet.",
      },
    ],
    ctaTitle: "Speak Hindi, Write Perfect English",
    ctaDescription:
      "Join thousands of Hindi speakers writing in English 4x faster. No more struggling with English keyboards.",
  },

  // Arabic
  {
    slug: "voice-typing-arabic-to-english",
    route: "/voice-typing-arabic-to-english",
    sourceLanguage: "Arabic",
    targetLanguage: "English",
    flag: "\u{1F1F8}\u{1F1E6}",
    accentColor: "#006C35",
    metaTitle: "Voice Typing Arabic to English | Speak Arabic, Type English | Oravo",
    metaDescription:
      "Voice typing from Arabic to English. Speak Arabic in any dialect\u2014Egyptian, Levantine, Gulf, Maghrebi\u2014and get perfect English text. No more switching between RTL and LTR keyboards.",
    keywords: [
      "voice typing arabic to english",
      "arabic to english voice typing",
      "speak arabic type english",
      "arabic voice to text english",
      "arabic english translation voice",
      "arabic accent voice recognition",
      "arabic speech to english text",
      "egyptian arabic voice typing",
      "gulf arabic to english",
      "arabic dictation english output",
      "RTL to english voice typing",
      "arabic dialect voice recognition",
    ],
    heroBadge: "\u0639\u0631\u0628\u064A \u2192 English",
    heroTitle: "Voice Typing",
    heroHighlight: "Arabic to English",
    heroDescription:
      "Speak in Arabic, get perfect English text. Oravo understands all Arabic dialects\u2014Egyptian, Levantine, Gulf, and Maghrebi\u2014and eliminates the need to switch between RTL and LTR keyboards.",
    heroSubDescription:
      "Built for Arabic speakers who need to communicate professionally in English.",
    features: [
      {
        title: "All Arabic Dialects",
        description:
          "Egyptian, Levantine, Gulf, Iraqi, Maghrebi\u2014Oravo understands your regional dialect and produces accurate English.",
      },
      {
        title: "No RTL/LTR Switching",
        description:
          "Stop switching between Arabic and English keyboards. Just speak Arabic and get English text directly.",
      },
      {
        title: "Arabic Name Recognition",
        description:
          "Proper nouns, Arabic names, and cultural terms are recognized and transliterated accurately.",
      },
      {
        title: "4x Faster Than Typing",
        description:
          "Think and speak in Arabic at natural speed instead of hunting for English letters on a Latin keyboard.",
      },
      {
        title: "Real-Time Translation",
        description:
          "Watch English text appear as you speak Arabic. No delay, no external translation tools needed.",
      },
      {
        title: "Works in Every App",
        description:
          "Gmail, Teams, Slack, Word\u2014write professional English in any app using your Arabic voice.",
      },
    ],
    steps: [
      {
        title: "Install Oravo",
        description:
          "Download Oravo for Mac, Windows, iOS, or Android. Setup takes about 2 minutes.",
      },
      {
        title: "Select Arabic \u2192 English",
        description:
          "Choose Arabic as your input language. Oravo will translate your speech into professional English.",
      },
      {
        title: "Speak Arabic, Get English",
        description:
          "Press your hotkey, speak naturally in your Arabic dialect, and watch perfect English text appear instantly.",
      },
    ],
    faqs: [
      {
        question: "Does it understand Egyptian Arabic vs. Gulf Arabic?",
        answer:
          "Yes! Oravo supports all major Arabic dialects including Egyptian, Levantine, Gulf, Iraqi, and North African varieties. Speak in your natural dialect.",
      },
      {
        question: "Do I need to switch keyboards to use Oravo?",
        answer:
          "No. That's the whole point. Speak Arabic and Oravo types English for you\u2014no keyboard switching between RTL and LTR layouts.",
      },
      {
        question: "How does it handle Arabic names and terms?",
        answer:
          "Oravo recognizes Arabic proper nouns, place names, and cultural terms, transliterating them accurately into English.",
      },
      {
        question: "Can I use it for professional documents?",
        answer:
          "Absolutely. Oravo produces professional-grade English with proper grammar, punctuation, and business-appropriate tone.",
      },
    ],
    ctaTitle: "Speak Arabic, Write Perfect English",
    ctaDescription:
      "Join thousands of Arabic speakers writing in English 4x faster. No more RTL/LTR keyboard switching.",
  },

  // Chinese
  {
    slug: "voice-typing-chinese-to-english",
    route: "/voice-typing-chinese-to-english",
    sourceLanguage: "Chinese",
    targetLanguage: "English",
    flag: "\u{1F1E8}\u{1F1F3}",
    accentColor: "#DE2910",
    metaTitle: "Voice Typing Chinese to English | Speak Chinese, Type English | Oravo",
    metaDescription:
      "Voice typing from Chinese to English. Speak Mandarin or Cantonese, get perfect English text. Tonal recognition, no Pinyin input needed. AI-powered with 99% accuracy.",
    keywords: [
      "voice typing chinese to english",
      "chinese to english voice typing",
      "speak chinese type english",
      "mandarin voice to text english",
      "mandarin to english translation voice",
      "cantonese to english voice typing",
      "chinese accent voice recognition",
      "chinese speech to english text",
      "tonal language voice recognition",
      "chinese dictation english output",
      "mandarin english voice typing",
      "no pinyin voice typing",
    ],
    heroBadge: "\u4E2D\u6587 \u2192 English",
    heroTitle: "Voice Typing",
    heroHighlight: "Chinese to English",
    heroDescription:
      "Speak in Mandarin or Cantonese, get perfect English text. Oravo's tonal recognition accurately captures Chinese speech\u2014no Pinyin input, no Kanji complexity, just speak and get English.",
    heroSubDescription:
      "Built for Chinese speakers who need to write in English without the friction of typing.",
    features: [
      {
        title: "Mandarin & Cantonese",
        description:
          "Full support for both Mandarin and Cantonese, including regional accent variations across China, Taiwan, and Hong Kong.",
      },
      {
        title: "Tonal Recognition",
        description:
          "Oravo's AI accurately processes tonal differences in Chinese speech, ensuring correct meaning and translation.",
      },
      {
        title: "Skip Pinyin Input",
        description:
          "No more typing Pinyin and selecting characters, then translating. Just speak Chinese and get English directly.",
      },
      {
        title: "4x Faster Than Typing",
        description:
          "Express complex ideas in Chinese at speaking speed instead of laboriously typing English character by character.",
      },
      {
        title: "Real-Time Translation",
        description:
          "See English text appear as you speak Chinese. No waiting for translation or switching between input methods.",
      },
      {
        title: "Works in Every App",
        description:
          "Gmail, Slack, WeChat, Word, Google Docs\u2014write in English in any app using your Chinese voice.",
      },
    ],
    steps: [
      {
        title: "Install Oravo",
        description:
          "Download Oravo for Mac, Windows, iOS, or Android. Setup takes about 2 minutes.",
      },
      {
        title: "Select Chinese \u2192 English",
        description:
          "Choose Mandarin or Cantonese as your input language. Oravo will translate your speech into professional English.",
      },
      {
        title: "Speak Chinese, Get English",
        description:
          "Press your hotkey, speak naturally in Chinese, and watch perfect English text appear instantly.",
      },
    ],
    faqs: [
      {
        question: "Does it support both Mandarin and Cantonese?",
        answer:
          "Yes! Oravo supports both Mandarin and Cantonese, including regional variations from mainland China, Taiwan, Hong Kong, and overseas Chinese communities.",
      },
      {
        question: "How does it handle Chinese tones?",
        answer:
          "Oravo's AI is trained to recognize tonal differences in Chinese speech. It understands meaning from context and tone together, producing accurate English translations.",
      },
      {
        question: "Is this faster than Pinyin input?",
        answer:
          "Much faster. Instead of typing Pinyin, selecting characters, then mentally translating to English\u2014just speak Chinese and get English text directly.",
      },
      {
        question: "Can it handle technical and business vocabulary?",
        answer:
          "Yes. Oravo accurately translates Chinese technical terms, business jargon, and industry-specific vocabulary into professional English.",
      },
    ],
    ctaTitle: "Speak Chinese, Write Perfect English",
    ctaDescription:
      "Join thousands of Chinese speakers writing in English 4x faster. No Pinyin, no character selection\u2014just speak.",
  },

  // Japanese
  {
    slug: "voice-typing-japanese-to-english",
    route: "/voice-typing-japanese-to-english",
    sourceLanguage: "Japanese",
    targetLanguage: "English",
    flag: "\u{1F1EF}\u{1F1F5}",
    accentColor: "#BC002D",
    metaTitle: "Voice Typing Japanese to English | Speak Japanese, Type English | Oravo",
    metaDescription:
      "Voice typing from Japanese to English. Speak Japanese naturally, get perfect English text. No Kanji input needed, handles keigo formality levels. AI-powered with 99% accuracy.",
    keywords: [
      "voice typing japanese to english",
      "japanese to english voice typing",
      "speak japanese type english",
      "japanese voice to text english",
      "japanese english translation voice",
      "japanese accent voice recognition",
      "japanese speech to english text",
      "kanji alternative voice typing",
      "keigo to english translation",
      "japanese dictation english output",
      "nihongo to english voice",
      "japanese business english voice typing",
    ],
    heroBadge: "\u65E5\u672C\u8A9E \u2192 English",
    heroTitle: "Voice Typing",
    heroHighlight: "Japanese to English",
    heroDescription:
      "Speak in Japanese, get perfect English text. Skip Kanji input complexity and let Oravo handle keigo formality\u2014just speak naturally and get professional English.",
    heroSubDescription:
      "Built for Japanese speakers who need to communicate in English for work.",
    features: [
      {
        title: "Skip Kanji Complexity",
        description:
          "No more typing in Romaji, selecting Kanji, then translating. Speak Japanese and get English text directly.",
      },
      {
        title: "Keigo Awareness",
        description:
          "Oravo understands Japanese formality levels and produces appropriately professional English\u2014whether you speak casual or formal Japanese.",
      },
      {
        title: "Japanese Business Context",
        description:
          "Trained on business Japanese, including industry terms, company naming conventions, and professional etiquette.",
      },
      {
        title: "4x Faster Than Typing",
        description:
          "Express ideas in Japanese at speaking speed instead of the slow Romaji-to-Kanji-to-English workflow.",
      },
      {
        title: "Real-Time Translation",
        description:
          "See English text appear as you speak Japanese. No waiting for IME conversions or translation tools.",
      },
      {
        title: "Works in Every App",
        description:
          "Gmail, Slack, Teams, Word, Google Docs\u2014write English in any app using your Japanese voice.",
      },
    ],
    steps: [
      {
        title: "Install Oravo",
        description:
          "Download Oravo for Mac, Windows, iOS, or Android. Setup takes about 2 minutes.",
      },
      {
        title: "Select Japanese \u2192 English",
        description:
          "Choose Japanese as your input language. Oravo will translate your speech into professional English.",
      },
      {
        title: "Speak Japanese, Get English",
        description:
          "Press your hotkey, speak naturally in Japanese, and watch perfect English text appear instantly.",
      },
    ],
    faqs: [
      {
        question: "Does it understand both formal and casual Japanese?",
        answer:
          "Yes! Oravo understands all Japanese registers\u2014from casual conversation to keigo (formal/honorific speech). It adapts the English output to match the appropriate level of professionalism.",
      },
      {
        question: "Is this faster than typing with a Japanese IME?",
        answer:
          "Significantly. The traditional Romaji \u2192 Kana \u2192 Kanji conversion process is slow. Speaking Japanese directly and getting English eliminates multiple steps.",
      },
      {
        question: "Can it handle katakana loan words?",
        answer:
          "Yes. Oravo recognizes katakana-derived English loan words and translates them back to their original English forms correctly.",
      },
      {
        question: "Does it work for Japanese business communication?",
        answer:
          "Absolutely. Oravo is trained on business Japanese and produces professional English suitable for emails, reports, and client communication.",
      },
    ],
    ctaTitle: "Speak Japanese, Write Perfect English",
    ctaDescription:
      "Join thousands of Japanese speakers writing in English 4x faster. No Kanji input\u2014just speak naturally.",
  },

  // Korean
  {
    slug: "voice-typing-korean-to-english",
    route: "/voice-typing-korean-to-english",
    sourceLanguage: "Korean",
    targetLanguage: "English",
    flag: "\u{1F1F0}\u{1F1F7}",
    accentColor: "#003478",
    metaTitle: "Voice Typing Korean to English | Speak Korean, Type English | Oravo",
    metaDescription:
      "Voice typing from Korean to English. Speak Korean naturally, get perfect English text. Handles Hangul, Korean business context, and all regional accents. 99% accuracy.",
    keywords: [
      "voice typing korean to english",
      "korean to english voice typing",
      "speak korean type english",
      "korean voice to text english",
      "korean english translation voice",
      "korean accent voice recognition",
      "korean speech to english text",
      "hangul to english voice typing",
      "korean business english voice",
      "korean dictation english output",
      "한국어 to english voice",
      "korean professional voice typing",
    ],
    heroBadge: "\ud55c\uad6d\uc5b4 \u2192 English",
    heroTitle: "Voice Typing",
    heroHighlight: "Korean to English",
    heroDescription:
      "Speak in Korean, get perfect English text. Oravo understands Korean speech patterns, handles Hangul vocabulary, and is optimized for Korean business communication.",
    heroSubDescription:
      "Built for Korean speakers working in global business environments.",
    features: [
      {
        title: "Native Hangul Understanding",
        description:
          "Oravo processes Korean speech natively\u2014no need to think about romanization or Hangul input methods.",
      },
      {
        title: "Korean Business Context",
        description:
          "Trained on Korean corporate communication styles. Understands chaebol terminology, K-business etiquette, and formal Korean.",
      },
      {
        title: "Honorific Awareness",
        description:
          "Oravo understands Korean honorific levels (\uc874\ub313\ub9d0/\ubc18\ub9d0) and produces appropriately toned English.",
      },
      {
        title: "4x Faster Than Typing",
        description:
          "Express ideas in Korean at speaking speed instead of typing English on a dual-language keyboard.",
      },
      {
        title: "Real-Time Translation",
        description:
          "See English text appear as you speak Korean. No delays, no external translation apps needed.",
      },
      {
        title: "Works in Every App",
        description:
          "Gmail, Slack, KakaoWork, Teams, Word\u2014write in English in any app using your Korean voice.",
      },
    ],
    steps: [
      {
        title: "Install Oravo",
        description:
          "Download Oravo for Mac, Windows, iOS, or Android. Setup takes about 2 minutes.",
      },
      {
        title: "Select Korean \u2192 English",
        description:
          "Choose Korean as your input language. Oravo will translate your speech into professional English.",
      },
      {
        title: "Speak Korean, Get English",
        description:
          "Press your hotkey, speak naturally in Korean, and watch perfect English text appear instantly.",
      },
    ],
    faqs: [
      {
        question: "Does it understand Korean business terminology?",
        answer:
          "Yes! Oravo is trained on Korean corporate communication, including industry-specific terms, chaebol-related vocabulary, and professional Korean expressions.",
      },
      {
        question: "How does it handle Korean honorifics?",
        answer:
          "Oravo recognizes Korean formality levels and adjusts the English output accordingly\u2014formal Korean produces more professional English.",
      },
      {
        question: "Does it work with Konglish words?",
        answer:
          "Yes. Oravo recognizes Konglish (Korean-English hybrid words) and translates them correctly to standard English.",
      },
      {
        question: "Can I use it for work emails and documents?",
        answer:
          "Absolutely. Oravo produces professional English suitable for business emails, reports, presentations, and client communication.",
      },
    ],
    ctaTitle: "Speak Korean, Write Perfect English",
    ctaDescription:
      "Join thousands of Korean speakers writing in English 4x faster. No keyboard switching\u2014just speak.",
  },

  // Portuguese
  {
    slug: "voice-typing-portuguese-to-english",
    route: "/voice-typing-portuguese-to-english",
    sourceLanguage: "Portuguese",
    targetLanguage: "English",
    flag: "\u{1F1E7}\u{1F1F7}",
    accentColor: "#009739",
    metaTitle: "Voice Typing Portuguese to English | Speak Portuguese, Type English | Oravo",
    metaDescription:
      "Voice typing from Portuguese to English. Speak Brazilian or European Portuguese, get perfect English text. Handles all dialects and accents. AI-powered with 99% accuracy.",
    keywords: [
      "voice typing portuguese to english",
      "portuguese to english voice typing",
      "speak portuguese type english",
      "portuguese voice to text english",
      "portuguese english translation voice",
      "brazilian portuguese voice typing",
      "european portuguese to english",
      "portuguese accent voice recognition",
      "portuguese speech to english text",
      "portuguese dictation english output",
      "brasileiro to english voice",
      "PT-BR voice typing english",
    ],
    heroBadge: "Portugu\u00EAs \u2192 English",
    heroTitle: "Voice Typing",
    heroHighlight: "Portuguese to English",
    heroDescription:
      "Speak in Portuguese, get perfect English text. Oravo understands both Brazilian and European Portuguese\u2014including regional accents, slang, and pronunciation differences.",
    heroSubDescription:
      "Built for Portuguese speakers who need to write fluently in English.",
    features: [
      {
        title: "Brazilian & European Portuguese",
        description:
          "Full support for both PT-BR and PT-PT, including the distinct pronunciation, vocabulary, and slang differences.",
      },
      {
        title: "Regional Accent Support",
        description:
          "Carioca, Paulista, Mineiro, Nordestino, Lisboeta\u2014Oravo understands your specific regional accent.",
      },
      {
        title: "Portuguese Name Recognition",
        description:
          "Accurately recognizes Portuguese names, places, and cultural terms, transliterating them correctly.",
      },
      {
        title: "4x Faster Than Typing",
        description:
          "Think and speak in Portuguese at 150 wpm instead of typing in English at 40 wpm.",
      },
      {
        title: "Real-Time Translation",
        description:
          "See English text appear as you speak Portuguese. No waiting for translation or switching apps.",
      },
      {
        title: "Works in Every App",
        description:
          "Gmail, Slack, WhatsApp, Teams, Word\u2014write in English in any app using your Portuguese voice.",
      },
    ],
    steps: [
      {
        title: "Install Oravo",
        description:
          "Download Oravo for Mac, Windows, iOS, or Android. Setup takes about 2 minutes.",
      },
      {
        title: "Select Portuguese \u2192 English",
        description:
          "Choose Brazilian or European Portuguese as your input. Oravo will translate your speech into professional English.",
      },
      {
        title: "Speak Portuguese, Get English",
        description:
          "Press your hotkey, speak naturally in Portuguese, and watch perfect English text appear instantly.",
      },
    ],
    faqs: [
      {
        question: "Does it understand Brazilian Portuguese vs. European Portuguese?",
        answer:
          "Yes! Oravo supports both PT-BR and PT-PT, recognizing the significant differences in pronunciation, vocabulary, and grammar between the two variants.",
      },
      {
        question: "Which Brazilian accents are supported?",
        answer:
          "All of them\u2014Carioca (Rio), Paulista (S\u00E3o Paulo), Mineiro (Minas Gerais), Nordestino (Northeast), and Sul (South). Your regional accent works perfectly.",
      },
      {
        question: "Can it handle Portuguese slang and informal speech?",
        answer:
          "Yes. Oravo understands informal Portuguese and translates it into appropriate English, adjusting tone for professional contexts when needed.",
      },
      {
        question: "Does it work offline?",
        answer:
          "Yes, Oravo can run offline on your Mac or Windows PC, ensuring privacy and speed even without internet.",
      },
    ],
    ctaTitle: "Speak Portuguese, Write Perfect English",
    ctaDescription:
      "Join thousands of Portuguese speakers writing in English 4x faster. Brazilian or European\u2014we understand both.",
  },

  // French
  {
    slug: "voice-typing-french-to-english",
    route: "/voice-typing-french-to-english",
    sourceLanguage: "French",
    targetLanguage: "English",
    flag: "\u{1F1EB}\u{1F1F7}",
    accentColor: "#002395",
    metaTitle: "Voice Typing French to English | Speak French, Type English | Oravo",
    metaDescription:
      "Voice typing from French to English. Speak French naturally with liaison pronunciation, get perfect English text. Handles all French accents and dialects. 99% accuracy.",
    keywords: [
      "voice typing french to english",
      "french to english voice typing",
      "speak french type english",
      "french voice to text english",
      "french english translation voice",
      "french accent voice recognition",
      "french speech to english text",
      "french liaison voice recognition",
      "french dictation english output",
      "parisian french to english",
      "canadian french voice typing",
      "french professional voice typing",
    ],
    heroBadge: "Fran\u00E7ais \u2192 English",
    heroTitle: "Voice Typing",
    heroHighlight: "French to English",
    heroDescription:
      "Speak in French, get perfect English text. Oravo captures French pronunciation nuances\u2014liaisons, nasals, and silent letters\u2014and produces polished English every time.",
    heroSubDescription:
      "Built for French speakers who need to write professionally in English.",
    features: [
      {
        title: "French Pronunciation Mastery",
        description:
          "Oravo handles liaison pronunciation, nasal vowels, silent endings, and all the nuances that make French speech unique.",
      },
      {
        title: "All French Variants",
        description:
          "Parisian, Qu\u00E9b\u00E9cois, Belgian, Swiss, and African French\u2014Oravo understands every variety.",
      },
      {
        title: "Faux Amis Handling",
        description:
          "Oravo knows French-English false friends (faux amis) and translates them correctly, avoiding common bilingual mistakes.",
      },
      {
        title: "4x Faster Than Typing",
        description:
          "Think and speak in French at natural speed instead of composing English sentences in your head first.",
      },
      {
        title: "Real-Time Translation",
        description:
          "See English text appear as you speak French. No dictionaries, no translation tabs, no delays.",
      },
      {
        title: "Works in Every App",
        description:
          "Gmail, Slack, Teams, Word, Google Docs\u2014write professional English in any app using your French voice.",
      },
    ],
    steps: [
      {
        title: "Install Oravo",
        description:
          "Download Oravo for Mac, Windows, iOS, or Android. Setup takes about 2 minutes.",
      },
      {
        title: "Select French \u2192 English",
        description:
          "Choose French as your input language. Oravo will translate your speech into professional English.",
      },
      {
        title: "Speak French, Get English",
        description:
          "Press your hotkey, speak naturally in French, and watch perfect English text appear instantly.",
      },
    ],
    faqs: [
      {
        question: "Does it understand Canadian French (Qu\u00E9b\u00E9cois)?",
        answer:
          "Yes! Oravo supports all French variants including Parisian, Qu\u00E9b\u00E9cois, Belgian, Swiss, and various African French dialects.",
      },
      {
        question: "How does it handle French liaison and pronunciation?",
        answer:
          "Oravo's AI is trained on authentic French speech, including liaisons, enchaînements, nasal vowels, and silent letters. It understands how French is actually spoken.",
      },
      {
        question: "Does it correctly translate French expressions?",
        answer:
          "Yes. Oravo translates French idioms and expressions into natural English equivalents rather than doing literal word-for-word translation.",
      },
      {
        question: "Can I use it for professional correspondence?",
        answer:
          "Absolutely. Oravo produces polished, business-appropriate English. Perfect for emails, reports, and international communication.",
      },
    ],
    ctaTitle: "Speak French, Write Perfect English",
    ctaDescription:
      "Join thousands of French speakers writing in English 4x faster. Parlez fran\u00E7ais, \u00E9crivez en anglais.",
  },

  // German
  {
    slug: "voice-typing-german-to-english",
    route: "/voice-typing-german-to-english",
    sourceLanguage: "German",
    targetLanguage: "English",
    flag: "\u{1F1E9}\u{1F1EA}",
    accentColor: "#DD0000",
    metaTitle: "Voice Typing German to English | Speak German, Type English | Oravo",
    metaDescription:
      "Voice typing from German to English. Speak German naturally\u2014compound words, Umlauts, and all\u2014and get perfect English text. Handles Austrian and Swiss German too.",
    keywords: [
      "voice typing german to english",
      "german to english voice typing",
      "speak german type english",
      "german voice to text english",
      "german english translation voice",
      "german accent voice recognition",
      "german speech to english text",
      "german compound words translation",
      "umlaut voice recognition",
      "german dictation english output",
      "austrian german voice typing",
      "swiss german to english",
    ],
    heroBadge: "Deutsch \u2192 English",
    heroTitle: "Voice Typing",
    heroHighlight: "German to English",
    heroDescription:
      "Speak in German, get perfect English text. Oravo handles compound words, Umlauts (\u00E4\u00F6\u00FC), and German sentence structure\u2014producing natural English, not awkward translations.",
    heroSubDescription:
      "Built for German speakers who need to write in English for global communication.",
    features: [
      {
        title: "Compound Word Intelligence",
        description:
          "Oravo understands German compound words (Zusammensetzungen) and translates them into clear, natural English phrases.",
      },
      {
        title: "Umlaut & \u00DF Recognition",
        description:
          "Full support for German-specific characters\u2014\u00C4, \u00D6, \u00DC, \u00DF\u2014with accurate pronunciation recognition and translation.",
      },
      {
        title: "German, Austrian & Swiss",
        description:
          "Supports Hochdeutsch, Austrian German, and Swiss German variants, including regional pronunciation differences.",
      },
      {
        title: "4x Faster Than Typing",
        description:
          "Express complex German ideas at speaking speed instead of restructuring sentences for English word order.",
      },
      {
        title: "Real-Time Translation",
        description:
          "See English text appear as you speak German. No mental translation, no grammar restructuring needed.",
      },
      {
        title: "Works in Every App",
        description:
          "Gmail, Slack, Teams, Word, Google Docs\u2014write professional English in any app using your German voice.",
      },
    ],
    steps: [
      {
        title: "Install Oravo",
        description:
          "Download Oravo for Mac, Windows, iOS, or Android. Setup takes about 2 minutes.",
      },
      {
        title: "Select German \u2192 English",
        description:
          "Choose German as your input language. Oravo will translate your speech into professional English.",
      },
      {
        title: "Speak German, Get English",
        description:
          "Press your hotkey, speak naturally in German, and watch perfect English text appear instantly.",
      },
    ],
    faqs: [
      {
        question: "How does it handle German compound words?",
        answer:
          "Oravo breaks down German compound words and translates them into natural English phrases. 'Handschuhschneeballwerfer' becomes a clear English expression, not a confusing literal translation.",
      },
      {
        question: "Does it support Austrian and Swiss German?",
        answer:
          "Yes! Oravo understands Hochdeutsch, Austrian German (\u00D6sterreichisches Deutsch), and Swiss German (Schweizerdeutsch), including regional vocabulary differences.",
      },
      {
        question: "Does it handle German sentence structure correctly?",
        answer:
          "Yes. German and English have very different word orders. Oravo restructures sentences naturally\u2014no verb-at-the-end English output.",
      },
      {
        question: "Can I use it for technical German?",
        answer:
          "Absolutely. Oravo handles technical vocabulary from engineering, automotive, pharmaceutical, and other German-dominant industries.",
      },
    ],
    ctaTitle: "Speak German, Write Perfect English",
    ctaDescription:
      "Join thousands of German speakers writing in English 4x faster. Sprechen Sie Deutsch, schreiben Sie Englisch.",
  },

  // Tagalog
  {
    slug: "voice-typing-tagalog-to-english",
    route: "/voice-typing-tagalog-to-english",
    sourceLanguage: "Tagalog",
    targetLanguage: "English",
    flag: "\u{1F1F5}\u{1F1ED}",
    accentColor: "#0038A8",
    metaTitle: "Voice Typing Tagalog to English | Speak Tagalog, Type English | Oravo",
    metaDescription:
      "Voice typing from Tagalog to English. Speak Tagalog or Taglish, get perfect English text. Built for the Filipino diaspora\u2014handles code-switching naturally. 99% accuracy.",
    keywords: [
      "voice typing tagalog to english",
      "tagalog to english voice typing",
      "speak tagalog type english",
      "tagalog voice to text english",
      "tagalog english translation voice",
      "filipino voice typing english",
      "taglish voice recognition",
      "tagalog accent voice typing",
      "tagalog speech to english text",
      "filipino diaspora voice typing",
      "tagalog code switching voice",
      "philippine english voice typing",
    ],
    heroBadge: "Tagalog \u2192 English",
    heroTitle: "Voice Typing",
    heroHighlight: "Tagalog to English",
    heroDescription:
      "Speak in Tagalog or Taglish, get perfect English text. Oravo is built for the Filipino diaspora\u2014handling Taglish code-switching naturally and understanding Filipino accents perfectly.",
    heroSubDescription:
      "Built for Filipinos who communicate in both Tagalog and English daily.",
    features: [
      {
        title: "Taglish Code-Switching",
        description:
          "Mix Tagalog and English naturally\u2014just like you do in real life. Say 'Paki-send yung report sa client' and get clean English output.",
      },
      {
        title: "Filipino Diaspora Ready",
        description:
          "Built for Filipinos worldwide\u2014whether you're in Manila, Dubai, Singapore, the US, or Canada.",
      },
      {
        title: "Filipino Name & Place Recognition",
        description:
          "Accurately recognizes Filipino names, places, and cultural references, from Quezon City to Cebu.",
      },
      {
        title: "4x Faster Than Typing",
        description:
          "Think and speak in Tagalog at natural speed instead of composing English sentences from scratch.",
      },
      {
        title: "Real-Time Translation",
        description:
          "See English text appear as you speak Tagalog. No translation apps, no copy-paste workflows.",
      },
      {
        title: "Works in Every App",
        description:
          "Gmail, Slack, Messenger, Teams, Word\u2014write in English in any app using your Tagalog voice.",
      },
    ],
    steps: [
      {
        title: "Install Oravo",
        description:
          "Download Oravo for Mac, Windows, iOS, or Android. Setup takes about 2 minutes.",
      },
      {
        title: "Select Tagalog \u2192 English",
        description:
          "Choose Tagalog as your input language. Oravo will translate your speech into professional English.",
      },
      {
        title: "Speak Tagalog, Get English",
        description:
          "Press your hotkey, speak naturally in Tagalog or Taglish, and watch perfect English text appear instantly.",
      },
    ],
    faqs: [
      {
        question: "Does it understand Taglish (Tagalog-English mixing)?",
        answer:
          "Yes! Oravo is specifically designed for how Filipinos actually speak. Mix Tagalog and English freely\u2014Oravo handles code-switching seamlessly and produces clean English.",
      },
      {
        question: "Does it work for Filipinos abroad?",
        answer:
          "Absolutely. Oravo is built for the global Filipino diaspora\u2014whether you're in the Middle East, North America, Southeast Asia, or anywhere else.",
      },
      {
        question: "Can it handle other Philippine languages like Cebuano?",
        answer:
          "Currently optimized for Tagalog and Taglish. Support for Cebuano, Ilocano, and other Philippine languages is planned for future updates.",
      },
      {
        question: "Is it good for professional communication?",
        answer:
          "Yes. Oravo produces professional English suitable for work emails, reports, and business communication\u2014perfect for BPO professionals and overseas workers.",
      },
    ],
    ctaTitle: "Speak Tagalog, Write Perfect English",
    ctaDescription:
      "Join thousands of Filipinos writing in English 4x faster. Taglish welcome\u2014we understand how you really speak.",
  },

  // Vietnamese
  {
    slug: "voice-typing-vietnamese-to-english",
    route: "/voice-typing-vietnamese-to-english",
    sourceLanguage: "Vietnamese",
    targetLanguage: "English",
    flag: "\u{1F1FB}\u{1F1F3}",
    accentColor: "#DA251D",
    metaTitle: "Voice Typing Vietnamese to English | Speak Vietnamese, Type English | Oravo",
    metaDescription:
      "Voice typing from Vietnamese to English. Speak Vietnamese with all tones and diacritical marks understood\u2014get perfect English text. Northern, Central, and Southern dialects supported.",
    keywords: [
      "voice typing vietnamese to english",
      "vietnamese to english voice typing",
      "speak vietnamese type english",
      "vietnamese voice to text english",
      "vietnamese english translation voice",
      "vietnamese accent voice recognition",
      "vietnamese speech to english text",
      "vietnamese tonal voice recognition",
      "vietnamese diacritical marks voice",
      "vietnamese dictation english output",
      "tieng viet to english voice",
      "vietnamese professional voice typing",
    ],
    heroBadge: "Ti\u1EBFng Vi\u1EC7t \u2192 English",
    heroTitle: "Voice Typing",
    heroHighlight: "Vietnamese to English",
    heroDescription:
      "Speak in Vietnamese, get perfect English text. Oravo's AI accurately processes Vietnamese tones and diacritical marks\u2014producing natural English from Northern, Central, or Southern dialects.",
    heroSubDescription:
      "Built for Vietnamese speakers who need to write in English for work and life.",
    features: [
      {
        title: "Six-Tone Recognition",
        description:
          "Oravo's AI accurately distinguishes all six Vietnamese tones, ensuring correct meaning and precise English translation.",
      },
      {
        title: "All Regional Dialects",
        description:
          "Northern (Hanoi), Central (Hu\u1EBF), and Southern (Ho Chi Minh City) dialects are all fully supported.",
      },
      {
        title: "Diacritical Mark Processing",
        description:
          "Vietnamese uses extensive diacritical marks. Oravo understands spoken Vietnamese without needing typed diacritics.",
      },
      {
        title: "4x Faster Than Typing",
        description:
          "Speak Vietnamese naturally instead of typing English with a TELEX or VNI keyboard method.",
      },
      {
        title: "Real-Time Translation",
        description:
          "See English text appear as you speak Vietnamese. Skip the mental translation step entirely.",
      },
      {
        title: "Works in Every App",
        description:
          "Gmail, Slack, Zalo, Teams, Word\u2014write in English in any app using your Vietnamese voice.",
      },
    ],
    steps: [
      {
        title: "Install Oravo",
        description:
          "Download Oravo for Mac, Windows, iOS, or Android. Setup takes about 2 minutes.",
      },
      {
        title: "Select Vietnamese \u2192 English",
        description:
          "Choose Vietnamese as your input language. Oravo will translate your speech into professional English.",
      },
      {
        title: "Speak Vietnamese, Get English",
        description:
          "Press your hotkey, speak naturally in Vietnamese, and watch perfect English text appear instantly.",
      },
    ],
    faqs: [
      {
        question: "How does it handle Vietnamese tones?",
        answer:
          "Oravo's AI is trained to distinguish all six Vietnamese tones accurately. It uses tonal context along with word context to produce correct English translations.",
      },
      {
        question: "Does it support Northern and Southern Vietnamese?",
        answer:
          "Yes! Oravo fully supports Northern (Hanoi), Central (Hu\u1EBF), and Southern (Saigon/HCMC) dialects, including their distinct pronunciation patterns.",
      },
      {
        question: "Is this faster than typing with TELEX or VNI?",
        answer:
          "Much faster. Instead of typing diacritical marks with TELEX/VNI keyboard methods and then translating to English, just speak Vietnamese and get English directly.",
      },
      {
        question: "Can it handle Vietnamese names and places?",
        answer:
          "Yes. Oravo accurately recognizes Vietnamese proper nouns, place names, and cultural terms, transliterating them correctly into English.",
      },
    ],
    ctaTitle: "Speak Vietnamese, Write Perfect English",
    ctaDescription:
      "Join thousands of Vietnamese speakers writing in English 4x faster. All tones, all dialects\u2014perfectly understood.",
  },
];

export const languagePairPages: Record<string, LanguagePairConfig> = Object.fromEntries(
  configs.map((c) => [c.slug, c])
);
