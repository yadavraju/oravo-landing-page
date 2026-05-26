import type { Metadata } from "next";
import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voice Typing — Type with Your Voice in Any App | Oravo",
  description:
    "Voice typing app that works everywhere — Gmail, Slack, Notion, Google Docs & 50+ apps. AI-powered, 99% accuracy, supports 60+ languages. Free to try.",
  keywords: [
    "voice typing",
    "voice typing app",
    "best voice typing app",
    "voice typing online",
    "voice typing for Mac",
    "voice typing for Windows",
    "voice typing software",
    "voice typing Chrome",
    "voice typing Google Docs",
    "free voice typing",
    "AI voice typing",
    "voice typing extension",
    "fastest voice typing",
    "real-time voice typing",
    "voice typing for professionals",
    "voice typing for non-native speakers",
    "voice typing with accent support",
    "voice typing tool",
    "voice typing desktop app",
    "voice typing for PC",
  ],
  openGraph: {
    title: "Voice Typing — Type with Your Voice in Any App | Oravo",
    description:
      "AI voice typing that works in every app. 99% accuracy, 60+ languages, accent support. 4x faster than keyboard typing.",
    url: "https://oravo.ai/voice-typing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Typing App | Oravo",
    description:
      "AI voice typing that works in every app. 99% accuracy, 60+ languages.",
  },
  alternates: {
    canonical: "https://oravo.ai/voice-typing",
  },
};

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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <article className="p-5 bg-white border border-[#E0DEDB] rounded-xl">
      <h4 className="text-[#37322F] text-base font-semibold font-sans mb-2">
        {question}
      </h4>
      <p className="text-[#605A57] text-sm leading-relaxed font-sans">
        {answer}
      </p>
    </article>
  );
}

export default function VoiceTypingPage() {
  const accentColor = "#F59E0B";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is voice typing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Voice typing is the process of converting spoken words into written text in real-time. Instead of pressing keys on a keyboard, you speak naturally and the software transcribes your voice into text. Oravo uses AI-powered voice typing to achieve 99% accuracy across 60+ languages.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best voice typing app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oravo is the best voice typing app for professionals and non-native English speakers. It works in any application (Gmail, Slack, Notion, Google Docs, and 50+ more), supports 60+ languages with real-time translation, and offers 99% accuracy even with accents.",
        },
      },
      {
        "@type": "Question",
        name: "Is voice typing free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Oravo offers 5,000 words free with no credit card required. You can use voice typing in any app immediately after installing. Pro plans start at $9.99/month for unlimited voice typing.",
        },
      },
      {
        "@type": "Question",
        name: "Does voice typing work with accents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oravo is specifically designed to understand all accents. Whether you're a non-native English speaker from India, China, Brazil, or anywhere else, Oravo's AI recognizes your speech patterns and produces accurate, natural English text.",
        },
      },
      {
        "@type": "Question",
        name: "How is voice typing different from speech-to-text?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Voice typing and speech-to-text are essentially the same technology — converting spoken words to written text. Voice typing typically refers to real-time dictation within apps (like typing an email with your voice), while speech-to-text can also include transcription of recorded audio files.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use voice typing in Google Docs, Gmail, and Slack?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Oravo works as a system-level voice typing tool, meaning it works in any application on your computer — Google Docs, Gmail, Slack, Notion, Microsoft Word, WhatsApp, LinkedIn, and 50+ more apps. No browser extension needed.",
        },
      },
    ],
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Oravo",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "macOS, Windows, Android, iOS",
    description:
      "AI voice typing app that works in any application. 99% accuracy, 60+ languages, accent support. Type 4x faster with your voice.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "5,000 words free, no credit card required",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "150",
    },
  };

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0" />
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
                        className="w-3.5 h-3.5"
                        fill={accentColor}
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    }
                    text="Voice Typing"
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Voice Typing That Works
                  <br />
                  in Every App
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  The fastest voice typing app for Mac, Windows, Android & iOS.
                  Press a hotkey, speak naturally, and get perfectly formatted
                  text in Gmail, Slack, Notion, Google Docs, and 50+ apps.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link
                    href="/download"
                    className="group relative h-12 px-8 overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      background: `linear-gradient(to bottom, ${accentColor}, #D97706)`,
                      boxShadow: `0px 0px 0px 2.5px rgba(255,255,255,0.08) inset, 0px 4px 12px ${accentColor}66`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none"></div>
                    <span className="text-white text-base font-medium leading-5 font-sans relative z-10">
                      Try Voice Typing Free
                    </span>
                    <svg
                      className="w-5 h-5 relative z-10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </Link>
                  <Link
                    href="/how-to-use"
                    className="group relative h-12 px-8 bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 shadow-[0px_0px_0px_2.5px_rgba(0,0,0,0.05)_inset,0px_4px_12px_rgba(0,0,0,0.1)] overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 border border-gray-200"
                  >
                    <span className="text-gray-800 text-base font-medium leading-5 font-sans relative z-10">
                      See How It Works
                    </span>
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
                    5,000 words free
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
                    Works in any app
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
                    60+ languages
                  </span>
                </div>
              </div>
            </section>

            {/* What is Voice Typing - SEO content section */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif mb-6 text-center">
                  What is Voice Typing?
                </h2>
                <div className="space-y-4 text-[#605A57] text-base leading-relaxed font-sans">
                  <p>
                    Voice typing lets you type with your voice instead of a
                    keyboard. Speak naturally into your microphone and your words
                    appear as text — in real-time, in any app on your computer or
                    phone.
                  </p>
                  <p>
                    Unlike basic built-in dictation (like Google Voice Typing or
                    Apple Dictation), Oravo is an AI-powered voice typing app
                    that works system-wide. That means you can voice type in
                    Gmail, Slack, Notion, Google Docs, WhatsApp, LinkedIn — any
                    text field on your device.
                  </p>
                  <p>
                    Oravo&apos;s voice typing is built for professionals and
                    non-native English speakers. It handles accents, adds
                    punctuation and formatting automatically, and even translates
                    from 60+ languages to English in real-time.
                  </p>
                </div>
              </div>
            </section>

            {/* Features */}
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
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5" />
                          <path d="M2 12l10 5 10-5" />
                        </svg>
                      }
                      text="Features"
                    />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif mb-4">
                    Why Oravo is the Best Voice Typing App
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    AI-powered voice typing with features built for real work.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        />
                      </svg>
                    }
                    title="4x Faster Than Typing"
                    description="Average typing speed is 40 WPM. With Oravo voice typing, you hit 150+ WPM — compose emails, documents, and messages in a fraction of the time."
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
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                      </svg>
                    }
                    title="99% Accuracy"
                    description="AI-powered speech recognition that understands context, adds punctuation, and gets names right. Rarely need to correct anything."
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
                          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    }
                    title="Works in Every App"
                    description="Gmail, Slack, Notion, Google Docs, Word, WhatsApp, LinkedIn, Salesforce — Oravo voice typing works in any text field on your computer."
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
                          d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                        />
                      </svg>
                    }
                    title="60+ Languages"
                    description="Voice type in English, Spanish, Hindi, Chinese, Arabic, and 60+ more. Or speak one language and get text in another with real-time translation."
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
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    }
                    title="Accent-Friendly"
                    description="Built for non-native English speakers. Whether you have an Indian, Chinese, Spanish, or any other accent — Oravo understands you perfectly."
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
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    }
                    title="Private & Secure"
                    description="Zero data retention. Your voice is processed and immediately discarded. HIPAA-ready for healthcare and legal professionals."
                  />
                </div>
              </div>
            </section>

            {/* Voice Typing vs Alternatives */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif mb-8 text-center">
                  Oravo vs Other Voice Typing Tools
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm font-sans border-collapse">
                    <thead>
                      <tr className="border-b border-[#E0DEDB]">
                        <th className="text-left py-3 pr-4 text-[#37322F] font-semibold">
                          Feature
                        </th>
                        <th className="text-center py-3 px-4 text-[#37322F] font-semibold">
                          Oravo
                        </th>
                        <th className="text-center py-3 px-4 text-[#605A57] font-medium">
                          Google Voice Typing
                        </th>
                        <th className="text-center py-3 px-4 text-[#605A57] font-medium">
                          Apple Dictation
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-[#605A57]">
                      <tr className="border-b border-[#F0EEEC]">
                        <td className="py-3 pr-4">Works in any app</td>
                        <td className="text-center py-3 px-4 text-green-600">
                          Yes
                        </td>
                        <td className="text-center py-3 px-4">Chrome only</td>
                        <td className="text-center py-3 px-4">
                          Apple apps only
                        </td>
                      </tr>
                      <tr className="border-b border-[#F0EEEC]">
                        <td className="py-3 pr-4">Accent support</td>
                        <td className="text-center py-3 px-4 text-green-600">
                          Excellent
                        </td>
                        <td className="text-center py-3 px-4">Fair</td>
                        <td className="text-center py-3 px-4">Fair</td>
                      </tr>
                      <tr className="border-b border-[#F0EEEC]">
                        <td className="py-3 pr-4">Real-time translation</td>
                        <td className="text-center py-3 px-4 text-green-600">
                          Yes
                        </td>
                        <td className="text-center py-3 px-4">No</td>
                        <td className="text-center py-3 px-4">No</td>
                      </tr>
                      <tr className="border-b border-[#F0EEEC]">
                        <td className="py-3 pr-4">Auto punctuation</td>
                        <td className="text-center py-3 px-4 text-green-600">
                          Yes
                        </td>
                        <td className="text-center py-3 px-4">Limited</td>
                        <td className="text-center py-3 px-4">Yes</td>
                      </tr>
                      <tr className="border-b border-[#F0EEEC]">
                        <td className="py-3 pr-4">Smart formatting</td>
                        <td className="text-center py-3 px-4 text-green-600">
                          Yes
                        </td>
                        <td className="text-center py-3 px-4">No</td>
                        <td className="text-center py-3 px-4">No</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Privacy (no data stored)</td>
                        <td className="text-center py-3 px-4 text-green-600">
                          Yes
                        </td>
                        <td className="text-center py-3 px-4">No</td>
                        <td className="text-center py-3 px-4">Partial</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* FAQ */}
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
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif mb-4">
                    Voice Typing FAQ
                  </h2>
                </div>

                <div className="space-y-4">
                  <FAQItem
                    question="What is voice typing?"
                    answer="Voice typing is the process of converting spoken words into written text in real-time. Instead of pressing keys on a keyboard, you speak naturally and the software transcribes your voice into text. Oravo uses AI-powered voice typing to achieve 99% accuracy across 60+ languages."
                  />
                  <FAQItem
                    question="What is the best voice typing app?"
                    answer="Oravo is the best voice typing app for professionals and non-native English speakers. It works in any application (Gmail, Slack, Notion, Google Docs, and 50+ more), supports 60+ languages with real-time translation, and offers 99% accuracy even with accents."
                  />
                  <FAQItem
                    question="Is voice typing free?"
                    answer="Yes! Oravo offers 5,000 words free with no credit card required. You can use voice typing in any app immediately after installing. Pro plans start at $9.99/month for unlimited voice typing."
                  />
                  <FAQItem
                    question="Does voice typing work with accents?"
                    answer="Oravo is specifically designed to understand all accents. Whether you're a non-native English speaker from India, China, Brazil, or anywhere else, Oravo's AI recognizes your speech patterns and produces accurate, natural English text."
                  />
                  <FAQItem
                    question="How is voice typing different from speech-to-text?"
                    answer="Voice typing and speech-to-text are essentially the same technology — converting spoken words to written text. Voice typing typically refers to real-time dictation within apps (like typing an email with your voice), while speech-to-text can also include transcription of recorded audio files."
                  />
                  <FAQItem
                    question="Can I use voice typing in Google Docs, Gmail, and Slack?"
                    answer="Yes! Oravo works as a system-level voice typing tool, meaning it works in any application on your computer — Google Docs, Gmail, Slack, Notion, Microsoft Word, WhatsApp, LinkedIn, Salesforce, and 50+ more apps. No browser extension needed."
                  />
                </div>
              </div>
            </section>

            {/* Related Pages */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <h3 className="text-[#37322F] text-lg font-semibold font-sans mb-4">
                  Related Topics
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/voice-to-text-app"
                    className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#F59E0B] hover:text-[#D97706] transition-colors"
                  >
                    Voice to Text App
                  </Link>
                  <Link
                    href="/voice-dictation-software"
                    className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#F59E0B] hover:text-[#D97706] transition-colors"
                  >
                    Voice Dictation Software
                  </Link>
                  <Link
                    href="/speech-to-text-mac"
                    className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#F59E0B] hover:text-[#D97706] transition-colors"
                  >
                    Speech to Text Mac
                  </Link>
                  <Link
                    href="/voice-typing-with-translation"
                    className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#F59E0B] hover:text-[#D97706] transition-colors"
                  >
                    Voice Typing with Translation
                  </Link>
                  <Link
                    href="/voice-typing-for-accents"
                    className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#F59E0B] hover:text-[#D97706] transition-colors"
                  >
                    Voice Typing for Accents
                  </Link>
                  <Link
                    href="/compare/google-voice-typing"
                    className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#F59E0B] hover:text-[#D97706] transition-colors"
                  >
                    vs Google Voice Typing
                  </Link>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="px-6 md:px-12 py-16 md:py-20">
              <div className="max-w-[700px] mx-auto text-center">
                <div
                  className="rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(55,50,47,0.15)]"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor}, #D97706)`,
                  }}
                >
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">
                    Start Voice Typing Today
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                    Join thousands who type 4x faster with their voice. 5,000
                    words free, no credit card required.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link
                      href="/download"
                      className="group relative h-12 px-8 bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 shadow-lg overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <span className="text-gray-800 text-base font-medium leading-5 font-sans relative z-10">
                        Download Free
                      </span>
                    </Link>
                  </div>
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm font-sans">
                    <span>Mac & Windows</span>
                    <span>&bull;</span>
                    <span>60+ languages</span>
                    <span>&bull;</span>
                    <span>5,000 words free</span>
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
