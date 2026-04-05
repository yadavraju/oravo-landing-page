import type { Metadata } from "next";
import type { ComparisonPageConfig } from "@/components/comparison/ComparisonPageTemplate";

const BASE_URL = "https://oravo.ai";

export function buildComparisonMetadata(config: ComparisonPageConfig): Metadata {
  return {
    title: config.heroBadgeText,
    description: config.heroDescription,
    keywords: [
      `oravo vs ${config.competitorName.toLowerCase()}`,
      `${config.competitorName.toLowerCase()} alternative`,
      `${config.competitorName.toLowerCase()} comparison`,
      "voice typing comparison",
      "ai dictation comparison",
      "best voice typing app",
      "speech to text comparison",
      "dictation software comparison",
    ],
    openGraph: {
      title: config.heroBadgeText,
      description: config.heroDescription,
      url: `${BASE_URL}${config.route}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.heroBadgeText,
      description: config.heroDescription,
    },
    alternates: {
      canonical: `${BASE_URL}${config.route}`,
    },
  };
}

export const wispFlowConfig: ComparisonPageConfig = {
  slug: "wispr-flow",
  route: "/compare/wispr-flow",
  competitorName: "Wispr Flow",
  accentColor: "#6366F1",

  heroBadgeText: "Oravo vs Wispr Flow — AI Voice Typing Compared (2026)",
  heroTitle: "Oravo vs Wispr Flow — Which AI Voice Typing App Is Right for You?",
  heroDescription:
    "How does Oravo compare to Wispr Flow? Real-time translation, accent support, app-aware tone matching, and pricing compared side by side.",

  comparisonFeatures: [
    { feature: "Voice typing in any app", oravo: true, competitor: true },
    { feature: "Auto formatting", oravo: true, competitor: true },
    { feature: "Filler word removal", oravo: true, competitor: true },
    { feature: "Style / tone matching", oravo: true, competitor: true },
    { feature: "Real-time two-way translation", oravo: "60+ languages", competitor: false },
    { feature: "Accent optimization", oravo: "100+ accents", competitor: "Limited" },
    { feature: "Custom dictionary", oravo: true, competitor: true },
    { feature: "Cross-platform (Mac, Windows, Android, iOS, Linux)", oravo: true, competitor: true },
    { feature: "Monthly price", oravo: "$9.99/mo", competitor: "$15/mo" },
    { feature: "Free plan", oravo: "5,000 words free", competitor: "2,000 words free" },
  ],

  differentiatorTitle: "Where Oravo Pulls Ahead",
  differentiatorDescription:
    "Both are great voice typing tools — but Oravo goes further for multilingual teams and privacy-conscious users.",
  differentiators: [
    {
      title: "Real-Time Translation",
      description:
        "Speak in your native language and get perfect English output — or translate between 60+ language pairs in real time. Wispr Flow doesn't offer translation.",
    },
    {
      title: "100+ Accent Profiles",
      description:
        "Oravo is optimized for non-native speakers with 100+ accent profiles for higher accuracy. No voice training required.",
    },
    {
      title: "33% Lower Price",
      description:
        "Oravo Pro is $9.99/mo vs Wispr Flow at $15/mo — with more features included. Same quality, better value.",
    },
    {
      title: "Zero Data Retention",
      description:
        "Your voice data is never stored. Oravo processes everything locally with end-to-end encryption and privacy-first architecture.",
    },
  ],

  oravoPricing: { plan: "Pro — unlimited voice typing", price: "$9.99/mo", note: "5,000 words free on the free plan" },
  competitorPricing: { plan: "Pro plan", price: "$15/mo", note: "2,000 words on free plan" },

  faqs: [
    {
      question: "Is Oravo really better than Wispr Flow?",
      answer:
        "Both are excellent voice typing tools. Oravo offers additional features like real-time translation, 100+ accent profiles, and cross-platform support — all at a lower price point ($9.99/mo vs $15/mo).",
    },
    {
      question: "Can I switch from Wispr Flow to Oravo easily?",
      answer:
        "Yes. Oravo works in any app just like Wispr Flow — simply download, set up in 2 minutes, and start dictating. No migration needed since both tools work as system-wide voice keyboards.",
    },
    {
      question: "Does Oravo support the same apps as Wispr Flow?",
      answer:
        "Oravo works in 1000+ apps including Google Docs, Gmail, Slack, Notion, and any text field on your computer — the same coverage as Wispr Flow, plus Windows support.",
    },
    {
      question: "Is Oravo good for non-native English speakers?",
      answer:
        "This is where Oravo truly shines. With 100+ accent profiles and real-time translation from 60+ languages, it's built specifically for multilingual users and non-native speakers.",
    },
  ],

  ctaTitle: "Try Oravo Free",
  ctaDescription:
    "See why thousands are switching from Wispr Flow. Get real-time translation, accent support, and cross-platform voice typing — all at a lower price.",
  ctaButtonText: "Try Oravo Free",
  ctaButtonHref: "/download",
};

export const willowVoiceConfig: ComparisonPageConfig = {
  slug: "willow-voice",
  route: "/compare/willow-voice",
  competitorName: "Willow Voice",
  accentColor: "#8B5CF6",

  heroBadgeText: "Oravo vs Willow Voice — Feature & Price Comparison (2026)",
  heroTitle: "Oravo vs Willow Voice — AI Dictation App Comparison",
  heroDescription:
    "Oravo vs Willow Voice compared. See how real-time translation, pricing, and accent support stack up.",

  comparisonFeatures: [
    { feature: "AI dictation", oravo: true, competitor: true },
    { feature: "Style matching", oravo: true, competitor: true },
    { feature: "Context awareness", oravo: true, competitor: true },
    { feature: "System-wide voice typing", oravo: true, competitor: true },
    { feature: "Real-time two-way translation", oravo: "60+ languages", competitor: false },
    { feature: "Accent profiles", oravo: "100+", competitor: "Limited" },
    { feature: "Android app", oravo: true, competitor: false },
    { feature: "iOS app", oravo: true, competitor: true },
    { feature: "Windows support", oravo: true, competitor: false },
    { feature: "Monthly price", oravo: "$9.99/mo", competitor: "$15/mo" },
    { feature: "Free plan", oravo: "5,000 words free", competitor: "Limited trial" },
  ],

  differentiatorTitle: "Why Users Choose Oravo",
  differentiatorDescription:
    "Both tools handle AI dictation well. Oravo adds translation, broader accent support, and cross-platform coverage at a lower price.",
  differentiators: [
    {
      title: "Two-Way Translation",
      description:
        "Speak in Spanish, get English. Speak in Japanese, get French. Oravo translates between 60+ language pairs in real time — Willow Voice doesn't.",
    },
    {
      title: "100+ Accent Profiles",
      description:
        "Oravo adapts to your accent automatically. Whether you speak English with an Indian, Brazilian, or Korean accent, accuracy stays above 97%.",
    },
    {
      title: "Windows Support",
      description:
        "Oravo works on both Mac and Windows. Willow Voice has an iOS app advantage, but Oravo covers the desktop platforms where most professional work happens.",
    },
    {
      title: "Better Value",
      description:
        "At $9.99/mo vs $15/mo, Oravo delivers more features for less. Translation, accent optimization, and cross-platform support are all included.",
    },
    {
      title: "Privacy First",
      description:
        "Zero data retention, local processing, and end-to-end encryption. Your voice and text never leave your device.",
    },
  ],

  oravoPricing: { plan: "Pro — unlimited voice typing", price: "$9.99/mo", note: "5,000 words free on the free plan" },
  competitorPricing: { plan: "Pro plan", price: "$15/mo", note: "Limited free trial" },

  faqs: [
    {
      question: "How does Oravo compare to Willow Voice?",
      answer:
        "Both offer AI dictation with style matching and context awareness. Oravo adds real-time translation (60+ languages), 100+ accent profiles, and Windows support — at $9.99/mo vs $15/mo.",
    },
    {
      question: "Does Willow Voice have features Oravo doesn't?",
      answer:
        "Willow Voice currently has an iOS app, which Oravo is developing. For desktop use (Mac and Windows), Oravo offers broader coverage and more features.",
    },
    {
      question: "Can I use Oravo if I'm a non-native English speaker?",
      answer:
        "Absolutely — Oravo is built for non-native speakers. With 100+ accent profiles and real-time translation, you can speak in your native language and get professionally written English.",
    },
  ],

  ctaTitle: "Try Oravo Free",
  ctaDescription:
    "Experience real-time translation, accent optimization, and privacy-first voice typing — all at $9.99/mo.",
  ctaButtonText: "Try Oravo Free",
  ctaButtonHref: "/download",
};

export const dragonConfig: ComparisonPageConfig = {
  slug: "dragon",
  route: "/compare/dragon",
  competitorName: "Dragon NaturallySpeaking",
  accentColor: "#DC2626",

  heroBadgeText: "Oravo vs Dragon NaturallySpeaking — Modern AI Dictation (2026)",
  heroTitle: "Oravo vs Dragon — Why Modern AI Dictation Is Better",
  heroDescription:
    "Comparing Oravo to Dragon dictation software. Cross-platform, no training, real-time translation, and 10x cheaper.",

  comparisonFeatures: [
    { feature: "Voice dictation", oravo: true, competitor: true },
    { feature: "Specialized vocabularies", oravo: "Context-aware AI", competitor: "Manual training" },
    { feature: "Voice training required", oravo: "None", competitor: "Hours of training" },
    { feature: "Real-time translation", oravo: "60+ languages", competitor: false },
    { feature: "AI auto-formatting", oravo: true, competitor: "Basic" },
    { feature: "Cross-platform", oravo: "Mac + Windows", competitor: "Windows only" },
    { feature: "Cloud-free / local processing", oravo: true, competitor: true },
    { feature: "Setup time", oravo: "2 minutes", competitor: "Hours" },
    { feature: "Price", oravo: "$9.99/mo", competitor: "$500+ one-time" },
    { feature: "Free plan", oravo: "5,000 words free", competitor: false },
    { feature: "Regular AI updates", oravo: true, competitor: "Discontinued updates" },
  ],

  differentiatorTitle: "Modern AI vs Legacy Software",
  differentiatorDescription:
    "Dragon was the gold standard for decades. Modern AI has made it obsolete.",
  differentiators: [
    {
      title: "No Voice Training",
      description:
        "Dragon requires hours of reading text to learn your voice. Oravo works perfectly from the first word — powered by modern AI that understands any voice instantly.",
    },
    {
      title: "10x Cheaper",
      description:
        "Dragon costs $500+ upfront (medical editions even more). Oravo is $9.99/mo with a free plan to start. Cancel anytime.",
    },
    {
      title: "Real-Time Translation",
      description:
        "Something Dragon never offered: speak in one language, type in another. Oravo translates between 60+ language pairs instantly.",
    },
    {
      title: "Works on Mac",
      description:
        "Dragon dropped Mac support years ago. Oravo works seamlessly on both Mac and Windows with the same features.",
    },
    {
      title: "Always Up to Date",
      description:
        "Dragon's consumer versions have been discontinued. Oravo receives continuous AI updates, getting smarter and more accurate over time.",
    },
    {
      title: "Context-Aware AI",
      description:
        "Instead of manual vocabulary training, Oravo's AI understands context automatically — medical terms, legal jargon, technical documentation, all without setup.",
    },
  ],

  oravoPricing: { plan: "Pro — unlimited voice typing", price: "$9.99/mo", note: "5,000 words free on the free plan" },
  competitorPricing: { plan: "One-time purchase", price: "$500+", note: "Medical editions $1,500+" },

  faqs: [
    {
      question: "Is Oravo as accurate as Dragon?",
      answer:
        "Oravo achieves 97%+ accuracy out of the box — without the hours of voice training Dragon requires. Modern AI transcription has surpassed traditional speech recognition in both accuracy and ease of use.",
    },
    {
      question: "Can Oravo handle medical terminology like Dragon Medical?",
      answer:
        "Yes. Oravo's AI recognizes medical terminology, drug names, and clinical abbreviations automatically. It also includes HIPAA-ready security on all plans — no need for a separate medical edition.",
    },
    {
      question: "Is Dragon still being updated?",
      answer:
        "Nuance (now owned by Microsoft) discontinued Dragon for consumers. The professional/medical editions still exist but receive limited updates. Oravo is actively developed with continuous AI improvements.",
    },
    {
      question: "Can I switch from Dragon to Oravo?",
      answer:
        "Yes — and it takes about 2 minutes. Download Oravo, and you're ready to dictate. No voice training, no profile setup, no lengthy installation process.",
    },
  ],

  ctaTitle: "Switch to Oravo — Free to Start",
  ctaDescription:
    "Modern AI dictation that works instantly. No training, no $500 price tag, no Windows-only limitation.",
  ctaButtonText: "Try Oravo Free",
  ctaButtonHref: "/download",
};

export const otterAiConfig: ComparisonPageConfig = {
  slug: "otter-ai",
  route: "/compare/otter-ai",
  competitorName: "Otter.ai",
  accentColor: "#10B981",

  heroBadgeText: "Oravo vs Otter.ai — Voice Typing vs Meeting Transcription (2026)",
  heroTitle: "Oravo vs Otter.ai — Different Tools for Different Jobs",
  heroDescription:
    "Oravo and Otter.ai solve different problems. See which AI voice tool is right for your workflow.",

  comparisonFeatures: [
    { feature: "Real-time voice typing (any app)", oravo: true, competitor: false },
    { feature: "Meeting transcription", oravo: true, competitor: true },
    { feature: "Speaker identification", oravo: true, competitor: true },
    { feature: "Meeting summaries", oravo: true, competitor: true },
    { feature: "Meeting recorder (no bot joins)", oravo: true, competitor: "Bot joins meeting" },
    { feature: "AI auto-formatting", oravo: true, competitor: false },
    { feature: "Style / tone matching", oravo: true, competitor: false },
    { feature: "Real-time translation", oravo: "60+ languages", competitor: false },
    { feature: "System-wide voice keyboard", oravo: true, competitor: false },
    { feature: "Works in Slack, Gmail, Notion", oravo: true, competitor: false },
    { feature: "Price", oravo: "$9.99/mo", competitor: "$16.99/mo" },
    { feature: "Free plan", oravo: "5,000 words free", competitor: "Limited" },
  ],

  differentiatorTitle: "Voice Typing + Meeting Notes — All in One",
  differentiatorDescription:
    "Otter.ai is just for meetings. Oravo does meetings AND voice typing everywhere else — with a better meeting experience.",
  differentiators: [
    {
      title: "Meeting Recording Without the Bot",
      description:
        "Oravo records and transcribes your meetings without an awkward bot joining the call. Your colleagues won't even know you're recording — it captures audio directly from your device.",
    },
    {
      title: "Voice Typing + Meeting Notes",
      description:
        "Oravo isn't just a meeting tool — it's a system-wide voice keyboard. Dictate in Gmail, Slack, Notion, Google Docs, and 1000+ apps. Plus get meeting transcription, speaker ID, and summaries in the Notes section.",
    },
    {
      title: "Real-Time Formatting",
      description:
        "Oravo doesn't just transcribe — it formats, punctuates, and polishes your text automatically. Professional-quality writing from speech.",
    },
    {
      title: "Translation Built In",
      description:
        "Speak in your language, get output in another. 60+ language pairs with real-time translation. Otter.ai only supports English transcription.",
    },
    {
      title: "Privacy First",
      description:
        "Oravo processes locally with zero data retention. No bot joining your calls, no recordings stored in the cloud. Your meetings stay private.",
    },
    {
      title: "One Tool, Not Two",
      description:
        "Why pay for Otter.ai ($16.99/mo) for meetings AND another tool for voice typing? Oravo does both for $9.99/mo.",
    },
  ],

  oravoPricing: { plan: "Pro — voice typing + meeting notes", price: "$9.99/mo", note: "5,000 words free on the free plan" },
  competitorPricing: { plan: "Pro plan", price: "$16.99/mo", note: "Free plan with limits" },

  faqs: [
    {
      question: "Should I use Oravo or Otter.ai?",
      answer:
        "Oravo does everything Otter.ai does — meeting transcription, speaker identification, and summaries — plus system-wide voice typing in any app. And Oravo's meeting recorder doesn't join as a bot, so there's no awkward notification for other participants.",
    },
    {
      question: "How does Oravo record meetings without a bot?",
      answer:
        "Oravo captures audio directly from your device — no bot needs to join the call. This means no awkward 'Otter.ai is joining' notification, no permission issues, and a more natural meeting experience for everyone.",
    },
    {
      question: "Can Oravo transcribe meetings like Otter.ai?",
      answer:
        "Yes! Oravo's Notes section provides meeting transcription, speaker identification, and AI-generated summaries. Plus you get system-wide voice typing in every app — something Otter.ai can't do.",
    },
    {
      question: "Is Oravo cheaper than Otter.ai?",
      answer:
        "Yes. Oravo Pro is $9.99/mo vs Otter.ai Pro at $16.99/mo. Oravo also includes 5,000 words free on the free plan, and you get both voice typing and meeting notes in one tool.",
    },
  ],

  ctaTitle: "Replace Otter.ai — Try Oravo Free",
  ctaDescription:
    "Meeting transcription without the bot. Voice typing everywhere. One tool, lower price. Start free today.",
  ctaButtonText: "Try Oravo Free",
  ctaButtonHref: "/download",
};

export const googleVoiceTypingConfig: ComparisonPageConfig = {
  slug: "google-voice-typing",
  route: "/compare/google-voice-typing",
  competitorName: "Google Voice Typing",
  accentColor: "#4285F4",

  heroBadgeText: "Oravo vs Google Voice Typing — AI Dictation Compared (2026)",
  heroTitle: "Oravo vs Google Voice Typing — Why Basic Dictation Isn't Enough",
  heroDescription:
    "Google Voice Typing is free but limited to Chrome and Google Docs. Oravo works in any app with real-time translation, auto formatting, and accent optimization.",

  comparisonFeatures: [
    { feature: "Voice typing in any app", oravo: true, competitor: "Google Docs / Chrome only" },
    { feature: "Auto formatting & punctuation", oravo: true, competitor: "Basic" },
    { feature: "Filler word removal", oravo: true, competitor: false },
    { feature: "Style / tone matching", oravo: true, competitor: false },
    { feature: "Real-time two-way translation", oravo: "60+ languages", competitor: false },
    { feature: "Accent optimization", oravo: "100+ accents", competitor: false },
    { feature: "Custom dictionary", oravo: true, competitor: false },
    { feature: "Cross-platform (Mac, Windows, Android, iOS)", oravo: true, competitor: "Chrome / Android only" },
    { feature: "Monthly price", oravo: "$9.99/mo", competitor: "Free" },
    { feature: "Free plan", oravo: "5,000 words free", competitor: "Fully free" },
  ],

  differentiatorTitle: "Beyond Basic Dictation",
  differentiatorDescription:
    "Google Voice Typing gets the job done in Google Docs. Oravo works everywhere — with intelligence Google can't match.",
  differentiators: [
    {
      title: "Works in Any App",
      description:
        "Google Voice Typing only works in Google Docs and Chrome. Oravo is a system-wide voice keyboard — use it in Slack, Gmail, Notion, VS Code, and 1000+ other apps.",
    },
    {
      title: "Real-Time Translation",
      description:
        "Speak in your native language and get output in English — or any of 60+ language pairs. Google Voice Typing has zero translation capability.",
    },
    {
      title: "Accent Optimization",
      description:
        "Oravo is optimized for 100+ accents, delivering 97%+ accuracy for non-native speakers. Google Voice Typing struggles with heavy accents and offers no accent profiles.",
    },
    {
      title: "Intelligent Formatting",
      description:
        "Oravo auto-formats your text, removes filler words, matches your writing tone, and punctuates perfectly. Google gives you raw, unformatted transcription.",
    },
  ],

  oravoPricing: { plan: "Pro — unlimited voice typing", price: "$9.99/mo", note: "5,000 words free on the free plan" },
  competitorPricing: { plan: "Free (built into Chrome/Android)", price: "Free", note: "No premium tier available" },

  faqs: [
    {
      question: "Why pay for Oravo when Google Voice Typing is free?",
      answer:
        "Google Voice Typing is great for simple dictation in Google Docs. But if you need voice typing in other apps, real-time translation, accent support, auto formatting, or filler word removal, Oravo delivers far more value at $9.99/mo — with a free plan to start.",
    },
    {
      question: "Does Oravo work in Google Docs like Google Voice Typing?",
      answer:
        "Yes — Oravo works in Google Docs and every other app on your computer. Unlike Google Voice Typing, it also auto-formats, removes filler words, and matches your writing style.",
    },
    {
      question: "Is Oravo more accurate than Google Voice Typing?",
      answer:
        "For native English speakers, both are highly accurate. For non-native speakers, Oravo is significantly better thanks to 100+ accent profiles. It also handles technical terminology and proper nouns more reliably with custom dictionary support.",
    },
    {
      question: "Can I use Oravo on Android like Google Voice Typing?",
      answer:
        "Yes. Oravo works on Android, iOS, Mac, Windows, and Linux — with the same features across all platforms. Google Voice Typing is limited to Chrome and Android.",
    },
  ],

  ctaTitle: "Upgrade from Google Voice Typing",
  ctaDescription:
    "Free doesn't mean best. Get real-time translation, accent support, and voice typing in every app — start free today.",
  ctaButtonText: "Try Oravo Free",
  ctaButtonHref: "/download",
};

export const appleDictationConfig: ComparisonPageConfig = {
  slug: "apple-dictation",
  route: "/compare/apple-dictation",
  competitorName: "Apple Dictation",
  accentColor: "#000000",

  heroBadgeText: "Oravo vs Apple Dictation — AI Voice Typing Compared (2026)",
  heroTitle: "Oravo vs Apple Dictation — Built-In vs Built Different",
  heroDescription:
    "Apple Dictation is convenient but limited. Oravo adds real-time translation, accent optimization, app-aware tone matching, and cross-platform support.",

  comparisonFeatures: [
    { feature: "Voice typing in any app", oravo: true, competitor: true },
    { feature: "Auto formatting & punctuation", oravo: true, competitor: "Basic" },
    { feature: "Filler word removal", oravo: true, competitor: false },
    { feature: "Style / tone matching", oravo: true, competitor: false },
    { feature: "Real-time two-way translation", oravo: "60+ languages", competitor: false },
    { feature: "Accent optimization", oravo: "100+ accents", competitor: false },
    { feature: "Custom dictionary", oravo: true, competitor: false },
    { feature: "Cross-platform", oravo: "Mac, Windows, Android, iOS, Linux", competitor: "Apple devices only" },
    { feature: "Offline mode", oravo: true, competitor: true },
    { feature: "Monthly price", oravo: "$9.99/mo", competitor: "Free" },
    { feature: "Free plan", oravo: "5,000 words free", competitor: "Fully free" },
  ],

  differentiatorTitle: "Why Power Users Switch to Oravo",
  differentiatorDescription:
    "Apple Dictation is fine for quick notes. Oravo is built for professionals who need more from their voice.",
  differentiators: [
    {
      title: "Real-Time Translation",
      description:
        "Speak in Spanish, get English. Translate between 60+ language pairs instantly. Apple Dictation only transcribes — it never translates.",
    },
    {
      title: "Accent Optimization",
      description:
        "Oravo recognizes 100+ accents with 97%+ accuracy. Apple Dictation has no accent profiles, and non-native speakers often see significantly lower accuracy.",
    },
    {
      title: "App-Aware Tone Matching",
      description:
        "Oravo detects the app you're using and adjusts tone — professional in email, casual in Slack, technical in code comments. Apple Dictation gives you the same raw output everywhere.",
    },
    {
      title: "Cross-Platform Freedom",
      description:
        "Apple Dictation locks you into the Apple ecosystem. Oravo works on Mac, Windows, Android, iOS, and Linux — same features everywhere.",
    },
  ],

  oravoPricing: { plan: "Pro — unlimited voice typing", price: "$9.99/mo", note: "5,000 words free on the free plan" },
  competitorPricing: { plan: "Free (built into macOS/iOS)", price: "Free", note: "No premium tier available" },

  faqs: [
    {
      question: "Why should I use Oravo instead of Apple Dictation?",
      answer:
        "Apple Dictation handles basic transcription. Oravo adds real-time translation (60+ languages), 100+ accent profiles, intelligent formatting, filler word removal, and app-aware tone matching. If you dictate more than casually, the upgrade is worth it.",
    },
    {
      question: "Does Oravo work offline like Apple Dictation?",
      answer:
        "Yes. Oravo supports offline voice typing with local processing. Your voice data stays on your device, just like Apple Dictation — but with more features and higher accuracy for non-native speakers.",
    },
    {
      question: "Can I use Oravo on my iPhone and Mac?",
      answer:
        "Absolutely. Oravo works on macOS, iOS, Windows, Android, and Linux. Unlike Apple Dictation, you get the same full feature set on every platform.",
    },
    {
      question: "Is Apple Dictation accurate enough for professional work?",
      answer:
        "Apple Dictation is decent for native English speakers doing simple notes. For professional writing, multilingual work, or non-native speakers, Oravo's accuracy and formatting intelligence make a meaningful difference.",
    },
  ],

  ctaTitle: "Go Beyond Apple Dictation",
  ctaDescription:
    "Translation, accent support, and intelligent formatting — everything Apple Dictation is missing. Start free today.",
  ctaButtonText: "Try Oravo Free",
  ctaButtonHref: "/download",
};

export const nottaConfig: ComparisonPageConfig = {
  slug: "notta",
  route: "/compare/notta",
  competitorName: "Notta",
  accentColor: "#6C5CE7",

  heroBadgeText: "Oravo vs Notta — Voice Typing vs Meeting Transcription (2026)",
  heroTitle: "Oravo vs Notta — Voice Typing in Every App vs Meeting Notes",
  heroDescription:
    "Notta focuses on meeting transcription. Oravo is a system-wide voice keyboard that works in any app — with translation, formatting, and accent support built in.",

  comparisonFeatures: [
    { feature: "Voice typing in any app", oravo: true, competitor: false },
    { feature: "System-wide voice keyboard", oravo: true, competitor: false },
    { feature: "Meeting transcription", oravo: true, competitor: true },
    { feature: "Speaker identification", oravo: true, competitor: true },
    { feature: "Real-time two-way translation", oravo: "60+ languages", competitor: "42 languages" },
    { feature: "Accent optimization", oravo: "100+ accents", competitor: false },
    { feature: "Auto formatting & tone matching", oravo: true, competitor: false },
    { feature: "Filler word removal", oravo: true, competitor: false },
    { feature: "Custom dictionary", oravo: true, competitor: false },
    { feature: "Monthly price", oravo: "$9.99/mo", competitor: "$14.99/mo" },
    { feature: "Free plan", oravo: "5,000 words free", competitor: "Limited (120 min/mo)" },
  ],

  differentiatorTitle: "More Than Meeting Notes",
  differentiatorDescription:
    "Notta records meetings. Oravo types everywhere — and still handles meetings too.",
  differentiators: [
    {
      title: "Works in Any App",
      description:
        "Notta is a separate app for meeting recording. Oravo is a system-wide voice keyboard — dictate in Gmail, Slack, Notion, Google Docs, and 1000+ apps without switching windows.",
    },
    {
      title: "Real-Time Voice Typing",
      description:
        "Oravo types as you speak, directly into any text field. Notta records first, then transcribes — great for meetings, but not for real-time writing.",
    },
    {
      title: "Accent Optimization",
      description:
        "Oravo adapts to 100+ accents for 97%+ accuracy. Non-native speakers get significantly better results than with Notta's standard transcription engine.",
    },
    {
      title: "33% Lower Price",
      description:
        "Oravo Pro is $9.99/mo vs Notta Pro at $14.99/mo. You get voice typing in every app, meeting notes, translation, and accent support — all included.",
    },
  ],

  oravoPricing: { plan: "Pro — voice typing + meeting notes", price: "$9.99/mo", note: "5,000 words free on the free plan" },
  competitorPricing: { plan: "Pro plan", price: "$14.99/mo", note: "Free plan: 120 min/month" },

  faqs: [
    {
      question: "Is Oravo a replacement for Notta?",
      answer:
        "If you mainly need meeting transcription, both tools work well. But Oravo also gives you system-wide voice typing in any app — something Notta doesn't offer. You get meetings plus everyday dictation in one tool.",
    },
    {
      question: "Can Oravo transcribe meetings like Notta?",
      answer:
        "Yes. Oravo includes meeting transcription with speaker identification and AI summaries. Plus it records without a bot joining your call — a more natural experience for all participants.",
    },
    {
      question: "Does Notta work as a voice keyboard?",
      answer:
        "No. Notta is designed for meeting recording and transcription — it doesn't let you dictate text directly into apps like Gmail, Slack, or Notion. Oravo works as a voice keyboard in any app on your computer.",
    },
    {
      question: "Which is cheaper, Oravo or Notta?",
      answer:
        "Oravo Pro is $9.99/mo vs Notta Pro at $14.99/mo. Oravo's free plan includes 5,000 words, while Notta's free plan limits you to 120 minutes per month with shorter transcription lengths.",
    },
  ],

  ctaTitle: "Voice Typing + Meeting Notes — One Tool",
  ctaDescription:
    "Why pay more for less? Get system-wide voice typing and meeting transcription at $9.99/mo. Start free today.",
  ctaButtonText: "Try Oravo Free",
  ctaButtonHref: "/download",
};

export const speechnotesConfig: ComparisonPageConfig = {
  slug: "speechnotes",
  route: "/compare/speechnotes",
  competitorName: "Speechnotes",
  accentColor: "#FF6B35",

  heroBadgeText: "Oravo vs Speechnotes — AI Voice Typing Compared (2026)",
  heroTitle: "Oravo vs Speechnotes — Simple Web Tool vs System-Wide Voice Keyboard",
  heroDescription:
    "Speechnotes is a free browser-based dictation tool. Oravo works system-wide in any app with real-time translation, auto formatting, and accent support.",

  comparisonFeatures: [
    { feature: "Voice typing in any app", oravo: true, competitor: "Browser only" },
    { feature: "Auto formatting & punctuation", oravo: true, competitor: "Basic" },
    { feature: "Filler word removal", oravo: true, competitor: false },
    { feature: "Style / tone matching", oravo: true, competitor: false },
    { feature: "Real-time two-way translation", oravo: "60+ languages", competitor: false },
    { feature: "Accent optimization", oravo: "100+ accents", competitor: false },
    { feature: "Custom dictionary", oravo: true, competitor: false },
    { feature: "Desktop app (system-wide)", oravo: true, competitor: false },
    { feature: "No signup required", oravo: "Free plan available", competitor: true },
    { feature: "Monthly price", oravo: "$9.99/mo", competitor: "Free (Premium $1.63/mo)" },
  ],

  differentiatorTitle: "From Notepad to Everywhere",
  differentiatorDescription:
    "Speechnotes is a simple dictation notepad. Oravo is an intelligent voice keyboard that works in every app on your computer.",
  differentiators: [
    {
      title: "System-Wide, Not Browser-Only",
      description:
        "Speechnotes runs in a browser tab. Oravo works directly in any app — Gmail, Slack, Google Docs, VS Code, Notion, and 1000+ more. No copy-pasting needed.",
    },
    {
      title: "Real-Time Translation",
      description:
        "Speak in your native language and get output in English — or any of 60+ language pairs. Speechnotes only transcribes in the language you speak.",
    },
    {
      title: "Intelligent Formatting",
      description:
        "Oravo auto-formats, removes filler words, matches your writing tone, and punctuates perfectly. Speechnotes gives you basic, unpolished transcription.",
    },
    {
      title: "Accent Support",
      description:
        "With 100+ accent profiles, Oravo delivers 97%+ accuracy for non-native speakers. Speechnotes relies on standard browser speech recognition with no accent optimization.",
    },
  ],

  oravoPricing: { plan: "Pro — unlimited voice typing", price: "$9.99/mo", note: "5,000 words free on the free plan" },
  competitorPricing: { plan: "Free / Premium", price: "Free ($1.63/mo premium)", note: "Premium removes ads, adds export" },

  faqs: [
    {
      question: "Why pay for Oravo when Speechnotes is free?",
      answer:
        "Speechnotes is a basic browser dictation pad — you type in its window and copy text elsewhere. Oravo works directly in any app, auto-formats your text, removes filler words, translates in real time, and supports 100+ accents. The free plan gives you 5,000 words to try it.",
    },
    {
      question: "Is Speechnotes good enough for professional work?",
      answer:
        "Speechnotes is fine for quick notes, but it lacks formatting intelligence, tone matching, and app integration. For professional writing in email, documents, or messaging apps, Oravo delivers polished, ready-to-send text.",
    },
    {
      question: "Does Oravo work in a browser like Speechnotes?",
      answer:
        "Oravo works everywhere — including browsers. But unlike Speechnotes, it also works as a system-wide voice keyboard in desktop apps, so you can dictate directly into any text field without switching windows.",
    },
    {
      question: "Can Oravo handle multiple languages like Speechnotes?",
      answer:
        "Oravo goes much further. While Speechnotes supports multiple input languages, Oravo offers real-time translation between 60+ language pairs — speak in one language and get output in another instantly.",
    },
  ],

  ctaTitle: "Upgrade from Speechnotes",
  ctaDescription:
    "System-wide voice typing with translation, formatting, and accent support. Start free — no credit card needed.",
  ctaButtonText: "Try Oravo Free",
  ctaButtonHref: "/download",
};
