"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Does it really understand my accent?",
    answer:
      "Yes. Oravo is trained on 100+ accents from every continent. If you can speak English (even with a strong accent), Oravo understands you. And if English is hard, just speak your native language—Oravo translates in real time.",
  },
  {
    question: "Can I speak my native language and get English text?",
    answer:
      "Absolutely. Speak Spanish, Hindi, Mandarin, Arabic, French, Portuguese, Russian, German, Japanese, Korean, or 20+ other languages—Oravo translates to fluent, context-aware English instantly.",
  },
  {
    question: "How is this different from Wispr Flow or Dragon?",
    answer:
      "vs Wispr Flow: They're great for native English speakers. We're built specifically for non-native speakers with real-time translation and accent optimization. vs Dragon: 10× cheaper, cross-platform (Mac + Windows), no training required, understands 100+ accents, has real-time translation. vs Otter.ai: Works in all apps (not just meetings), optimized for non-native speakers, real-time translation.",
  },
  {
    question: "What apps does it work with?",
    answer:
      "Everywhere you can type: Gmail, Slack, Notion, Google Docs, Microsoft Word, Figma, VSCode, Jira, LinkedIn, WhatsApp, Teams, Salesforce—literally any text field.",
  },
  {
    question: "How does context awareness work?",
    answer:
      "Oravo reads which app you're using and adjusts tone, format, and structure automatically. The same sentence becomes casual in Slack, professional in Gmail, and technical in Notion—without you doing anything.",
  },
  {
    question: "Is my voice data private and secure?",
    answer:
      "Yes. We're SOC 2 Type II and HIPAA-ready. Your voice data is encrypted, never stored permanently, and not used for AI training without explicit consent. Free plan has zero data retention.",
  },
  {
    question: "Can I try before I pay?",
    answer:
      "Yes. Free plan includes 30 minutes/month forever. Pro plan has 14-day free trial—no credit card required.",
  },
  {
    question: "What if I speak multiple languages in one sentence?",
    answer:
      "Oravo handles code-switching naturally. Speak \"I need to email the cliente about the meeting\"—Oravo understands and formats correctly.",
  },
];

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <h2 className="w-full text-left text-[#49423D] text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-stretch-semi-condensed font-medium leading-tight md:leading-[60px] font-serif px-4 lg:px-0">
            Frequently Asked Questions
          </h2>
          <div className="w-full text-left text-[#605A57] text-base font-normal leading-7 font-sans px-4 lg:px-0">
            Everything you need to know about Oravo,
            <br />
            accents, translation, and privacy.
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index);

              return (
                <div
                  key={index}
                  className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
