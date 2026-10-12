// Shared FAQ content for /faq and /pricing (and their FAQPage JSON-LD).
//
// Wording follows the homepage's structured data, which was deliberately kept
// to claims Oravo can stand behind: no accuracy numbers or compliance badges
// until the accent benchmark and policies are published.
export type FaqItem = { question: string; answer: string };

export const FAQ_TITLE = "Frequently Asked Questions";
export const FAQ_LEDE = "Everything you need to know about Oravo, accents, translation, and privacy.";

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Does it really understand my accent?",
    answer:
      "Oravo is built for multilingual speakers and strong accents. We are running the same-script benchmark across five accent and language cohorts so you can inspect the method and results.",
  },
  {
    question: "Can I speak my native language and get English text?",
    answer:
      "Yes. Speak Spanish, Hindi, Mandarin, Arabic, French, Portuguese, Russian, German, Japanese, Korean, or 20+ other languages, and Oravo writes fluent, context-aware English.",
  },
  {
    question: "How is this different from Wispr Flow or Dragon?",
    answer:
      "Oravo focuses on multilingual voice typing, polished output, and accent-friendly workflows on Mac, Windows, and Android, with custom vocabulary on the free plan. Compare current platform support, features, and pricing for your needs.",
  },
  {
    question: "What apps does it work with?",
    answer:
      "Everywhere you can type: Gmail, Slack, Notion, Google Docs, Microsoft Word, Figma, VS Code, Jira, LinkedIn, WhatsApp, Teams, Salesforce, and any other text field.",
  },
  {
    question: "How does context awareness work?",
    answer:
      "Oravo reads which app you're using and adjusts tone, format, and structure automatically. The same sentence becomes casual in Slack, professional in Gmail, and technical in Notion, without you doing anything.",
  },
  {
    question: "Is my voice data private and secure?",
    answer:
      "Check Oravo's current privacy policy for exact details about voice processing, retention, and third-party services.",
  },
  {
    question: "Can I try before I pay?",
    answer:
      "Yes. The Starter plan is free, and Pro starts with a trial when you install the app, with no credit card. Current trial details are shown in the app at signup.",
  },
  {
    question: "What if I speak multiple languages in one sentence?",
    answer:
      "Oravo handles code-switching naturally. Speak “I need to email the cliente about the meeting” and Oravo understands and formats it correctly.",
  },
];

export function faqJsonLd(items: FaqItem[] = FAQ_ITEMS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
