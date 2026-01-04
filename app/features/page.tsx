import type { Metadata } from "next";
import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voice to Text Features | AI Dictation & Speech Recognition | Oravo",
  description:
    "Discover Oravo's powerful voice-to-text features: real-time transcription, automatic punctuation, 100+ languages, smart formatting, custom vocabulary, and seamless app integration. Type 4x faster with AI dictation.",
  keywords: [
    "voice to text features",
    "speech to text software",
    "AI dictation features",
    "voice typing capabilities",
    "automatic punctuation",
    "multi-language dictation",
    "real-time translation",
    "voice recognition software",
    "dictation app features",
    "speech recognition technology",
    "hands-free typing",
    "voice keyboard features",
    "AI transcription",
    "voice input software",
    "dictation accuracy",
    "natural language processing",
    "voice commands",
    "text formatting voice",
    "professional dictation",
    "enterprise voice to text",
    "custom vocabulary dictation",
    "filler word removal",
    "voice shortcuts",
    "developer dictation",
    "code dictation",
    "whisper mode dictation",
    "backtrack voice correction",
    "voice snippets",
    "team dictation tools",
  ],
  openGraph: {
    title: "Voice to Text Features | AI Dictation & Speech Recognition | Oravo",
    description:
      "Speak naturally. Oravo transcribes, formats, and translates your words into polished text — in any app, any language. 4x faster than typing.",
    url: "https://oravo.ai/features",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice to Text Features | Oravo AI",
    description:
      "Discover Oravo's powerful voice-to-text features. Perfect transcription with automatic punctuation, 100+ languages, and seamless integration.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://oravo.ai/features",
  },
};

// Badge component - matching site design
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
        {icon}
      </div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  );
}

// Feature Card - matching landing page style
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="group p-5 bg-white border border-[#E0DEDB] rounded-xl flex flex-col gap-4 transition-all duration-200 hover:border-[#847971]">
      <div className="w-10 h-10 rounded-lg bg-[#F7F5F3] flex items-center justify-center text-[#605A57] group-hover:text-[#37322F] transition-colors">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#37322F] text-base font-semibold leading-tight font-sans">
          {title}
        </h3>
        <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
          {description}
        </p>
      </div>
    </article>
  );
}

// Mini Feature Card for sub-features
function MiniFeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-5 bg-white border border-[#E0DEDB] rounded-xl">
      <h4 className="text-[#37322F] text-base font-semibold font-sans mb-2">
        {title}
      </h4>
      <p className="text-[#605A57] text-sm leading-relaxed font-sans">
        {description}
      </p>
    </div>
  );
}

// FAQ Item - matching site design
function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="p-5 bg-white border border-[#E0DEDB] rounded-xl">
      <h4 className="text-[#37322F] text-base font-semibold font-sans mb-2">
        {question}
      </h4>
      <p className="text-[#605A57] text-sm leading-relaxed font-sans">
        {answer}
      </p>
    </div>
  );
}

export default function FeaturesPage() {
  const accentColor = "#1877F2";

  const faqs = [
    {
      question: "Does Oravo work in all apps?",
      answer:
        "Yes. Oravo works anywhere you can type—browsers, desktop apps, documents, emails, chat apps, and more. It's a system-level voice keyboard that works in Notion, Gmail, Google Docs, Slack, and any text field on your computer.",
    },
    {
      question: "How accurate is Oravo's transcription?",
      answer:
        "Oravo achieves 40% more accuracy than built-in dictation tools. Our AI learns your writing style, recognizes names, dates, and technical terms automatically. No more fixing typos in medical records or legal documents.",
    },
    {
      question: "Can I dictate in languages other than English?",
      answer:
        "Yes. Oravo supports 100+ languages including Spanish, Hindi, Chinese, Korean, Arabic, French, German, and more. You can also translate your speech in real-time—speak in Spanish, get text in English.",
    },
    {
      question: "Does Oravo clean up my speech automatically?",
      answer:
        "Yes. Oravo automatically removes filler words like 'um' and 'uh', adds punctuation based on your natural pauses, and handles corrections when you change your mind mid-sentence.",
    },
    {
      question: "Can I add industry-specific terminology?",
      answer:
        "Absolutely. Oravo learns your specialized vocabulary—medical terminology, legal phrases, tech acronyms—after hearing them once. Add terms manually or let Oravo learn from your corrections.",
    },
    {
      question: "Is my data secure with Oravo?",
      answer:
        "Yes. Oravo is privacy-first with zero data retention. Your transcripts are never stored on our servers. We're SOC 2 Type II certified and HIPAA-ready for healthcare professionals.",
    },
  ];

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0" />
          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0" />

          <Header />

          <main className="flex-1 w-full mt-20 md:mt-24 lg:mt-28 relative z-10">
            {/* Hero Section */}
            <section className="px-6 md:px-12 py-12 md:py-20 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <Badge
                    icon={
                      <svg
                        className="w-3.5 h-3.5 text-[#1877F2]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    }
                    text="Feature Highlights"
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Voice to Text, Perfected
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  Speak naturally. Oravo transcribes, formats, and translates
                  your words into polished text — in any app, any language.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/download"
                    className="self-center bg-[#37322F] text-white px-[30px] py-3 rounded-full font-sans text-base font-medium leading-6 hover:bg-[#1877F2] transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-[0px_1px_2px_rgba(105,81,255,0.05)]"
                  >
                    Download for Mac
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </Link>
                  <Link
                    href="/download"
                    className="self-center bg-white border border-[#E0DEDB] text-[#37322F] px-[30px] py-3 rounded-full font-sans text-base font-medium leading-6 hover:bg-[#F7F5F3] transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    Download for Windows
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#847971]">
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    4x faster than typing
                  </span>
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    40% more accurate
                  </span>
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Works everywhere
                  </span>
                </div>
              </div>
            </section>

            {/* SPEAK Section */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge
                      icon={
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#37322F"
                          strokeWidth="2"
                        >
                          <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      }
                      text="Dictation"
                    />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-stretch-semi-condensed font-medium leading-tight font-serif mb-4">
                    Speak Naturally. Oravo Does the Rest.
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    AI-powered dictation that understands context, accents, and technical jargon. Works in noisy environments.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    }
                    title="Works in Any App"
                    description="Notion, Gmail, Google Docs, Slack, WhatsApp, Cursor—anything with a text field. One voice keyboard for everything."
                  />
                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    }
                    title="Context-Aware Spelling"
                    description="Oravo uses surrounding context to spell names, technical terms, and product names correctly. No manual corrections."
                  />
                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                        />
                      </svg>
                    }
                    title="100+ Languages"
                    description="Dictate in Spanish, Hindi, Chinese, Korean, Arabic, French, German, and 90+ more languages."
                  />
                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                    }
                    title="Whisper Mode"
                    description="Works even when you're whispering. Dictate in shared spaces, quiet offices, or late at night."
                  />
                </div>
              </div>
            </section>

            {/* REFINE Section */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge
                      icon={
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#37322F"
                          strokeWidth="2"
                        >
                          <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      }
                      text="Auto-Formatting"
                    />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-stretch-semi-condensed font-medium leading-tight font-serif mb-4">
                    Clean, Polished Text. Automatically.
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    Punctuation, paragraphs, and capitalization added automatically. Just speak naturally.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <MiniFeatureCard
                    title="Instant Corrections"
                    description="Change your mind mid-sentence? Say 'Let's meet at 2… actually 3,' and Oravo writes the corrected version. No backspacing needed."
                  />
                  <MiniFeatureCard
                    title="Filler Word Removal"
                    description="Oravo automatically removes 'um,' 'uh,' 'like,' and verbal pauses. Your text comes out clean and professional every time."
                  />
                  <MiniFeatureCard
                    title="Smart Lists"
                    description="Just speak the numbers: 'First, apples. Second, bananas. Third, oranges.' Oravo turns it into a properly formatted list."
                  />
                  <MiniFeatureCard
                    title="Auto Punctuation"
                    description="Oravo detects punctuation from your natural pauses and tone. Dictate 'comma' or 'period' when you need precise control."
                  />
                </div>
              </div>
            </section>

            {/* PERSONALIZE Section */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge
                      icon={
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#37322F"
                          strokeWidth="2"
                        >
                          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      }
                      text="Personalization"
                    />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-stretch-semi-condensed font-medium leading-tight font-serif mb-4">
                    Learns Your Style. Speaks Your Language.
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    AI learns your writing style, recognizes names, dates, and technical terms automatically.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <article className="group p-5 bg-white border border-[#E0DEDB] rounded-xl flex flex-col gap-4 transition-all duration-200 hover:border-[#847971]">
                    <div className="w-10 h-10 rounded-lg bg-[#F7F5F3] flex items-center justify-center text-[#605A57] group-hover:text-[#37322F] transition-colors">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[#37322F] text-base font-semibold leading-tight font-sans">
                        Custom Dictionary
                      </h3>
                      <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                        Medical terms, legal phrases, tech acronyms—Oravo memorizes your specialized vocabulary after hearing it once.
                      </p>
                    </div>
                  </article>
                  <article className="group p-5 bg-white border border-[#E0DEDB] rounded-xl flex flex-col gap-4 transition-all duration-200 hover:border-[#847971]">
                    <div className="w-10 h-10 rounded-lg bg-[#F7F5F3] flex items-center justify-center text-[#605A57] group-hover:text-[#37322F] transition-colors">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[#37322F] text-base font-semibold leading-tight font-sans">
                        Voice Shortcuts
                      </h3>
                      <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                        Create shortcuts for things you say often—scheduling links, email signatures, FAQs. Speak the cue, get the full text.
                      </p>
                    </div>
                  </article>
                  <article className="group p-5 bg-white border border-[#E0DEDB] rounded-xl flex flex-col gap-4 transition-all duration-200 hover:border-[#847971]">
                    <div className="w-10 h-10 rounded-lg bg-[#F7F5F3] flex items-center justify-center text-[#605A57] group-hover:text-[#37322F] transition-colors">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[#37322F] text-base font-semibold leading-tight font-sans">
                        Adaptive Tone
                      </h3>
                      <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                        Formal in documents, casual in messages, enthusiastic in emails. Oravo adapts to match where you're writing.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </section>

            {/* DEVELOPER Section */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex justify-start mb-4">
                      <Badge
                        icon={
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#37322F"
                            strokeWidth="2"
                          >
                            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        }
                        text="For Developers"
                      />
                    </div>
                    <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-stretch-semi-condensed font-medium leading-tight font-serif mb-4">
                      Built for Code, Not Just Prose
                    </h2>
                    <p className="text-[#605A57] text-base md:text-lg leading-relaxed font-sans mb-6">
                      Oravo understands syntax, file names, and code formatting—so your voice fits seamlessly into your IDE.
                    </p>
                    <Link
                      href="/for-developers"
                      className="inline-flex items-center gap-2 text-[#1877F2] font-semibold hover:underline"
                    >
                      Learn more about developer features
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="space-y-4">
                    <MiniFeatureCard
                      title="File Tagging"
                      description="Using Cursor or VS Code? Oravo recognizes filenames as you speak and automatically tags the right file in your workspace."
                    />
                    <MiniFeatureCard
                      title="Syntax Awareness"
                      description="Preserves exact spacing, formatting, camelCase, snake_case, acronyms, and CLI commands. Code stays code."
                    />
                    <MiniFeatureCard
                      title="Dev Terminology"
                      description="Automatically recognizes Supabase, Cloudflare, Vercel, React, TypeScript, and thousands of tech terms."
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* PLATFORMS Section */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge
                      icon={
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#37322F"
                          strokeWidth="2"
                        >
                          <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      }
                      text="Platforms"
                    />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-stretch-semi-condensed font-medium leading-tight font-serif mb-4">
                    Available on All Your Devices
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    Native apps for Mac and Windows. Your vocabulary and settings sync across every device.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: "macOS", desc: "Native Mac app", comingSoon: false },
                    { name: "Windows", desc: "Native Windows app", comingSoon: false },
                    { name: "iOS", desc: "iPhone & iPad", comingSoon: true },
                    { name: "Android", desc: "All Android devices", comingSoon: true },
                  ].map((platform) => (
                    <article
                      key={platform.name}
                      className="group p-5 bg-white border border-[#E0DEDB] rounded-xl text-center transition-all duration-200 hover:border-[#847971] relative"
                    >
                      {platform.comingSoon && (
                        <span className="absolute top-3 right-3 px-2 py-0.5 bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-semibold rounded-full">
                          Coming soon
                        </span>
                      )}
                      <div className="w-10 h-10 rounded-lg bg-[#F7F5F3] flex items-center justify-center mx-auto mb-3 text-[#605A57] group-hover:text-[#37322F] transition-colors">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="text-[#37322F] font-semibold font-sans">
                        {platform.name}
                      </div>
                      <div className="text-[#847971] text-sm font-sans">
                        {platform.desc}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* PRIVACY Section */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="p-6 md:p-8 bg-white border border-[#E0DEDB] rounded-xl">
                      <ul className="space-y-4">
                        {[
                          "Zero data retention — nothing stored",
                          "Your data never trains our models",
                          "GDPR and CCPA compliant",
                          "SOC 2 Type II certified",
                          "HIPAA-ready for healthcare",
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-[#605A57] font-sans"
                          >
                            <svg
                              className="w-5 h-5 text-[#22C55E] flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex justify-start mb-4">
                      <Badge
                        icon={
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#37322F"
                            strokeWidth="2"
                          >
                            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        }
                        text="Privacy & Security"
                      />
                    </div>
                    <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-stretch-semi-condensed font-medium leading-tight font-serif mb-4">
                      Privacy-First Architecture
                    </h2>
                    <p className="text-[#605A57] text-base md:text-lg leading-relaxed font-sans">
                      Built for professionals who can't compromise on security. Encrypted processing, zero data retention, and complete control over your information.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge
                      icon={
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#37322F"
                          strokeWidth="2"
                        >
                          <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      }
                      text="FAQ"
                    />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-stretch-semi-condensed font-medium leading-tight font-serif mb-4">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <FAQItem
                      key={faq.question}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 md:px-12 py-16 md:py-20">
              <div className="max-w-[700px] mx-auto text-center">
                <div
                  className="rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(55,50,47,0.15)]"
                  style={{ background: accentColor }}
                >
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">
                    4x Faster Than Typing
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                    Try in your next email, Slack message, or AI prompt. It's free and works everywhere.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link
                      href="/download"
                      className="inline-flex h-14 px-8 bg-white hover:bg-gray-50 text-[#37322F] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg items-center justify-center"
                    >
                      Download Free
                    </Link>
                  </div>

                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm font-sans">
                    <span>No credit card required</span>
                    <span>•</span>
                    <span>2-minute setup</span>
                    <span>•</span>
                    <span>Works everywhere</span>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <FooterSection />
        </div>
      </div>
    </div>
  );
}
