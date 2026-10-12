import type { FaqItem } from "@/lib/faq";

// Shared by /mobile and /android (and their FAQPage JSON-LD), so it stays
// importable from server components.

export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=ai.oravo";

export const MOBILE_FAQS: FaqItem[] = [
  {
    question: "What devices and Android versions are supported?",
    answer:
      "Oravo supports Android OS 13 or newer on phones and tablets from all major manufacturers. While Oravo supports tablets and foldables, the experience is optimized for phones.",
  },
  {
    question: "How much does Oravo for Android cost?",
    answer: "Unlimited dictation on Android is free for all users at launch. Pro features will be available on our paid plans in the future.",
  },
  {
    question: "Which features are available on Android at launch?",
    answer:
      "Android supports the core Oravo experience including: unlimited dictation, auto punctuation, filler word removal, self-corrections, numbered lists, and 100+ languages with real-time translation.",
  },
  {
    question: "What languages does Oravo support?",
    answer:
      "Oravo supports 100+ languages including Spanish, Portuguese, French, Italian, Hindi, Chinese, Japanese, Korean, Russian, Arabic, and more. For best results, we recommend selecting your preferred language(s) in Settings.",
  },
  {
    question: "Is Oravo available on iPhone?",
    answer: "Not yet. iOS is coming soon. Oravo is available today on Android, Mac and Windows.",
  },
  {
    question: "Does Oravo work offline?",
    answer: "No. Oravo requires an internet connection to transcribe and translate your speech using our fastest AI models.",
  },
  {
    question: "Does Oravo replace my Android keyboard?",
    answer: "No. Oravo works alongside your existing keyboard as a floating bubble. You can type normally at any time.",
  },
];
