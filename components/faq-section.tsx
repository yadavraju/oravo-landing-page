"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Can I try Oravo for free?",
    answer:
      "Yes! You can try Oravo completely free—no credit card required. Just download the app and start dictating instantly to experience how fast and effortless it feels.",
  },
  {
    question: "Is Oravo secure and private?",
    answer:
      "Absolutely. Privacy and security are at the heart of everything we do. Your transcripts are never collected or stored on our servers—they remain local to your device. You can optionally opt in to share anonymized data to help improve Oravo's models, but by default, your data stays private and secure. All processing is handled using enterprise-grade encryption and security standards. Oravo is SOC 2 and HIPAA compliant.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Not yet—but it's coming soon! Right now, we're focused on delivering the best native experience for macOS, Windows, and Linux. Our iOS and Android apps are already on the roadmap.",
  },
  {
    question: "Do you support languages other than English?",
    answer:
      "Yes! Oravo supports over 50 languages. You can speak naturally in your preferred language, and Oravo will accurately transcribe and format your text as if you were writing it yourself.",
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
          {/* <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Frequently Asked Questions
          </div> */}
          <div className="w-full flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-normal leading-tight md:leading-[60px] font-serif">
            Frequently Asked
            <br />
            Questions
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Seamless speech-to-text that understands
            <br />
            your voice, your flow and your apps.
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
