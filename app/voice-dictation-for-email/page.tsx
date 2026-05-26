import type { Metadata } from "next";
import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Voice Dictation for Email & Messaging Apps — Gmail, Slack, Teams | Oravo",
  description:
    "Voice dictation software built for email and messaging. Dictate emails in Gmail, messages in Slack & Teams, and replies in WhatsApp — 4x faster than typing. AI-powered, works system-wide.",
  keywords: [
    "voice dictation software for email",
    "voice dictation for messaging apps",
    "dictate emails",
    "voice typing Gmail",
    "voice typing Slack",
    "voice dictation email",
    "dictate messages",
    "voice typing for email",
    "speech to text email",
    "voice typing Teams",
    "voice typing WhatsApp",
    "dictation for business email",
    "voice email app",
    "hands-free email",
    "voice to text Gmail",
    "speak to type email",
    "voice dictation Outlook",
    "dictation for Slack messages",
    "voice typing for professional email",
    "AI email dictation",
  ],
  openGraph: {
    title: "Voice Dictation for Email & Messaging | Oravo",
    description:
      "Dictate emails and messages 4x faster. Works in Gmail, Slack, Teams, WhatsApp & more. AI-powered voice dictation.",
    url: "https://oravo.ai/voice-dictation-for-email",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Dictation for Email & Messaging | Oravo",
    description:
      "Dictate emails and messages 4x faster in Gmail, Slack, Teams & more.",
  },
  alternates: {
    canonical: "https://oravo.ai/voice-dictation-for-email",
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

export default function VoiceDictationForEmailPage() {
  const accentColor = "#3B82F6";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best voice dictation software for email?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oravo is the best voice dictation software for email. Unlike browser-only tools, Oravo works system-wide — dictate in Gmail, Outlook, Apple Mail, or any email client. It automatically adjusts tone for professional emails, adds punctuation, and formats your text. It's an alternative to Willow Voice, Voice In, and Dragon for email dictation.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use voice dictation in Gmail?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Oravo works perfectly with Gmail. Press a hotkey, speak your email, and Oravo types it out with proper formatting, punctuation, and professional tone. No Chrome extension required — it works at the system level.",
        },
      },
      {
        "@type": "Question",
        name: "Does voice dictation work in Slack and Microsoft Teams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Oravo works in Slack, Microsoft Teams, WhatsApp, Discord, and any messaging app. It detects the app context and adjusts tone automatically — casual in Slack, professional in email, concise in messaging.",
        },
      },
      {
        "@type": "Question",
        name: "How does Oravo compare to Willow Voice for email dictation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oravo offers context-aware dictation that Willow doesn't — it automatically adjusts tone based on whether you're in Gmail, Slack, or Teams. Oravo also supports 60+ languages with real-time translation, accent support for non-native speakers, and works in any app without browser extensions.",
        },
      },
      {
        "@type": "Question",
        name: "Is voice dictation for email secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oravo is built with privacy-first architecture. Zero data retention means your emails are never stored. HIPAA-ready and SOC 2 compliant, making it safe for sensitive business communications.",
        },
      },
    ],
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Oravo - Voice Dictation for Email",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "macOS, Windows, Android, iOS",
    description:
      "Voice dictation software for email and messaging apps. Dictate in Gmail, Slack, Teams, and 50+ apps with AI-powered accuracy.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "5,000 words free, no credit card required",
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
            {/* Hero */}
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
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    }
                    text="Email & Chat"
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Voice Dictation for
                  <br />
                  Email & Messaging Apps
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  Dictate emails in Gmail, messages in Slack, replies in Teams —
                  all with your voice. Oravo detects the app and adjusts tone
                  automatically. 4x faster than typing, with professional
                  formatting built in.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link
                    href="/download"
                    className="group relative h-12 px-8 overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      background: `linear-gradient(to bottom, ${accentColor}, #2563EB)`,
                      boxShadow: `0px 0px 0px 2.5px rgba(255,255,255,0.08) inset, 0px 4px 12px ${accentColor}66`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none"></div>
                    <span className="text-white text-base font-medium leading-5 font-sans relative z-10">
                      Try Free — 5,000 Words
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
                    Gmail, Outlook, Apple Mail
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
                    Slack, Teams, WhatsApp
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
                    No credit card
                  </span>
                </div>
              </div>
            </section>

            {/* How it works for email */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif mb-6 text-center">
                  How Voice Dictation Works for Email
                </h2>
                <div className="space-y-4 text-[#605A57] text-base leading-relaxed font-sans">
                  <p>
                    Most people write 40+ emails a day. At an average typing
                    speed of 40 WPM, that&apos;s hours spent on the keyboard.
                    Voice dictation for email lets you speak naturally at 150+
                    WPM and get professionally formatted messages — complete with
                    greetings, proper punctuation, and appropriate sign-offs.
                  </p>
                  <p>
                    Oravo is different from browser-based voice dictation tools
                    like Voice In or Dictation.io. It works at the system level,
                    so it&apos;s not limited to Chrome. Dictate in Gmail&apos;s
                    web interface, the Outlook desktop app, Apple Mail, or any
                    other email client. Same for messaging — Slack desktop app,
                    Teams, WhatsApp, iMessage, Discord, all work seamlessly.
                  </p>
                  <p>
                    What makes Oravo the best choice for email dictation is
                    context awareness. The AI detects whether you&apos;re in
                    Gmail (professional tone), Slack (casual tone), or Teams
                    (business casual) and formats accordingly. No need to switch
                    modes or correct tone manually.
                  </p>
                </div>
              </div>
            </section>

            {/* Supported Apps */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif mb-4">
                    Works in Every Email & Messaging App
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    No extensions, no plugins — just press a hotkey and dictate.
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
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    }
                    title="Gmail & Outlook"
                    description="Dictate professional emails with automatic formatting, greetings, and sign-offs. Context-aware tone adjustment."
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
                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        />
                      </svg>
                    }
                    title="Slack & Teams"
                    description="Quick voice messages with casual, natural tone. Perfect for status updates, standups, and team chat."
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
                          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                    }
                    title="WhatsApp & iMessage"
                    description="Hands-free messaging on desktop and mobile. Speak naturally and send polished messages instantly."
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
                    title="LinkedIn Messages"
                    description="Professional networking messages and connection requests. Sound polished without spending 10 minutes per message."
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
                    title="Secure & Private"
                    description="Zero data retention. Your emails and messages are never stored or used for AI training. HIPAA and SOC 2 ready."
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
                    title="Multilingual Support"
                    description="Speak in Spanish, Hindi, or any of 60+ languages and get English emails. Perfect for non-native English speakers."
                  />
                </div>
              </div>
            </section>

            {/* Comparison with competitors */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif mb-8 text-center">
                  Oravo vs Other Voice Dictation Tools for Email
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
                          Willow Voice
                        </th>
                        <th className="text-center py-3 px-4 text-[#605A57] font-medium">
                          Voice In
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-[#605A57]">
                      <tr className="border-b border-[#F0EEEC]">
                        <td className="py-3 pr-4">Works in desktop email apps</td>
                        <td className="text-center py-3 px-4 text-green-600">
                          Yes
                        </td>
                        <td className="text-center py-3 px-4">Yes</td>
                        <td className="text-center py-3 px-4">Chrome only</td>
                      </tr>
                      <tr className="border-b border-[#F0EEEC]">
                        <td className="py-3 pr-4">Context-aware tone</td>
                        <td className="text-center py-3 px-4 text-green-600">
                          Yes
                        </td>
                        <td className="text-center py-3 px-4">No</td>
                        <td className="text-center py-3 px-4">No</td>
                      </tr>
                      <tr className="border-b border-[#F0EEEC]">
                        <td className="py-3 pr-4">Real-time translation</td>
                        <td className="text-center py-3 px-4 text-green-600">
                          60+ languages
                        </td>
                        <td className="text-center py-3 px-4">Limited</td>
                        <td className="text-center py-3 px-4">No</td>
                      </tr>
                      <tr className="border-b border-[#F0EEEC]">
                        <td className="py-3 pr-4">Accent support</td>
                        <td className="text-center py-3 px-4 text-green-600">
                          Excellent
                        </td>
                        <td className="text-center py-3 px-4">Good</td>
                        <td className="text-center py-3 px-4">Fair</td>
                      </tr>
                      <tr className="border-b border-[#F0EEEC]">
                        <td className="py-3 pr-4">Works in Slack & Teams</td>
                        <td className="text-center py-3 px-4 text-green-600">
                          Yes
                        </td>
                        <td className="text-center py-3 px-4">Yes</td>
                        <td className="text-center py-3 px-4">Chrome only</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Free tier</td>
                        <td className="text-center py-3 px-4 text-green-600">
                          5,000 words
                        </td>
                        <td className="text-center py-3 px-4">Trial only</td>
                        <td className="text-center py-3 px-4">Limited</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-6 text-sm text-[#847971] text-center">
                  Looking for alternatives?{" "}
                  <Link
                    href="/compare/willow-voice"
                    className="underline hover:text-[#37322F]"
                  >
                    See full Oravo vs Willow comparison
                  </Link>
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif mb-4">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  <FAQItem
                    question="What is the best voice dictation software for email?"
                    answer="Oravo is the best voice dictation software for email. Unlike browser-only tools, Oravo works system-wide — dictate in Gmail, Outlook, Apple Mail, or any email client. It automatically adjusts tone for professional emails, adds punctuation, and formats your text. It's an alternative to Willow Voice, Voice In, and Dragon for email dictation."
                  />
                  <FAQItem
                    question="Can I use voice dictation in Gmail?"
                    answer="Yes! Oravo works perfectly with Gmail. Press a hotkey, speak your email, and Oravo types it out with proper formatting, punctuation, and professional tone. No Chrome extension required — it works at the system level."
                  />
                  <FAQItem
                    question="Does voice dictation work in Slack and Microsoft Teams?"
                    answer="Yes. Oravo works in Slack, Microsoft Teams, WhatsApp, Discord, and any messaging app. It detects the app context and adjusts tone automatically — casual in Slack, professional in email, concise in messaging."
                  />
                  <FAQItem
                    question="How does Oravo compare to Willow Voice for email dictation?"
                    answer="Oravo offers context-aware dictation that Willow doesn't — it automatically adjusts tone based on whether you're in Gmail, Slack, or Teams. Oravo also supports 60+ languages with real-time translation, accent support for non-native speakers, and works in any app without browser extensions."
                  />
                  <FAQItem
                    question="Is voice dictation for email secure?"
                    answer="Oravo is built with privacy-first architecture. Zero data retention means your emails are never stored. HIPAA-ready and SOC 2 compliant, making it safe for sensitive business communications."
                  />
                </div>
              </div>
            </section>

            {/* Related Pages */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <h3 className="text-[#37322F] text-lg font-semibold font-sans mb-4">
                  Related
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/voice-typing"
                    className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#3B82F6] hover:text-[#2563EB] transition-colors"
                  >
                    Voice Typing
                  </Link>
                  <Link
                    href="/voice-dictation-software"
                    className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#3B82F6] hover:text-[#2563EB] transition-colors"
                  >
                    Voice Dictation Software
                  </Link>
                  <Link
                    href="/voice-keyboard-for-gmail"
                    className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#3B82F6] hover:text-[#2563EB] transition-colors"
                  >
                    Voice Keyboard for Gmail
                  </Link>
                  <Link
                    href="/compare/willow-voice"
                    className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#3B82F6] hover:text-[#2563EB] transition-colors"
                  >
                    Oravo vs Willow Voice
                  </Link>
                  <Link
                    href="/voice-to-text-app"
                    className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#3B82F6] hover:text-[#2563EB] transition-colors"
                  >
                    Voice to Text App
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
                    background: `linear-gradient(135deg, ${accentColor}, #2563EB)`,
                  }}
                >
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">
                    Dictate Emails & Messages 4x Faster
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                    Stop typing every email. Speak naturally and let Oravo handle
                    formatting, tone, and punctuation. 5,000 words free.
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
                    <span>Gmail, Slack, Teams</span>
                    <span>&bull;</span>
                    <span>No credit card</span>
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
