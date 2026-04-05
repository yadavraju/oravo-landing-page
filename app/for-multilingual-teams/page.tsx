import type { Metadata } from "next";
import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voice Typing With Real-Time Translation for Global Teams | Oravo AI",
  description:
    "Break language barriers with AI voice typing that translates in real time. Speak your language, get perfect text in any language. Built for multilingual teams.",
  keywords: [
    "multilingual voice typing",
    "real-time translation voice typing",
    "voice typing for global teams",
    "multilingual dictation software",
    "translate speech to text",
    "voice typing translation",
    "team collaboration translation",
    "cross-language voice typing",
    "international team dictation",
    "multilingual productivity tools",
    "voice typing 20 languages",
    "real-time language translation",
    "global team communication",
    "ai translation voice",
    "speak one language type another",
  ],
  openGraph: {
    title: "Voice Typing With Real-Time Translation for Global Teams | Oravo AI",
    description:
      "Break language barriers with AI voice typing that translates in real time. Speak your language, get perfect text in any language.",
    url: "https://oravo.ai/for-multilingual-teams",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Typing With Real-Time Translation | Oravo AI",
    description:
      "Break language barriers with AI voice typing that translates in real time.",
  },
  alternates: {
    canonical: "https://oravo.ai/for-multilingual-teams",
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

function UseCaseCard({
  title,
  description,
  timeSaved,
}: {
  title: string;
  description: string;
  timeSaved?: string;
}) {
  return (
    <article className="group p-5 bg-white border border-[#E0DEDB] rounded-xl flex flex-col gap-3 transition-all duration-200 hover:border-[#847971]">
      <h4 className="text-[#37322F] text-base font-semibold font-sans">{title}</h4>
      <p className="text-[#605A57] text-sm leading-relaxed font-sans">{description}</p>
      {timeSaved && (
        <div className="inline-block px-3 py-1 bg-[#22C55E]/10 rounded-full w-fit">
          <span className="text-[#22C55E] text-xs font-semibold">
            Time saved: {timeSaved}
          </span>
        </div>
      )}
    </article>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <article className="p-5 bg-white border border-[#E0DEDB] rounded-xl">
      <h4 className="text-[#37322F] text-base font-semibold font-sans mb-2">{question}</h4>
      <p className="text-[#605A57] text-sm leading-relaxed font-sans">{answer}</p>
    </article>
  );
}

export default function ForMultilingualTeamsPage() {
  const accentColor = "#1877F2";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which languages does Oravo translate between?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oravo supports real-time translation between 60+ language pairs including English, Spanish, French, German, Japanese, Korean, Chinese, Hindi, Portuguese, Arabic, and more. New languages are added regularly.",
        },
      },
      {
        "@type": "Question",
        name: "How accurate is the translation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oravo uses advanced AI models for translation, producing professional-quality output that reads naturally — not like machine translation. It understands context, idioms, and business terminology.",
        },
      },
      {
        "@type": "Question",
        name: "Can team members use different languages simultaneously?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Each team member configures their own source and target language. One person speaks Japanese, another speaks Spanish — both output professional English (or any target language).",
        },
      },
      {
        "@type": "Question",
        name: "Is there a team/enterprise plan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Oravo offers team pricing at $10/user/month with centralized billing, admin controls, and priority support. Contact us for enterprise needs.",
        },
      },
    ],
  };

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
                      <svg className="w-3.5 h-3.5" fill={accentColor} viewBox="0 0 24 24">
                        <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
                      </svg>
                    }
                    text="For Multilingual Teams"
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Voice Typing With Real-Time Translation for Global Teams
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  Speak in your language. Get perfect text in any language. Oravo translates between 60+ language pairs in real time — no copy-paste, no extra tools.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link
                    href="/download"
                    className="group relative h-12 px-8 overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      background: `linear-gradient(to bottom, ${accentColor}, ${accentColor})`,
                      boxShadow: `0px 0px 0px 2.5px rgba(255,255,255,0.08) inset, 0px 4px 12px ${accentColor}66`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none"></div>
                    <span className="text-white text-base font-medium leading-5 font-sans relative z-10">
                      Try Oravo Free
                    </span>
                    <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </Link>
                  <Link
                    href="/how-to-use"
                    className="group relative h-12 px-8 bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 shadow-[0px_0px_0px_2.5px_rgba(0,0,0,0.05)_inset,0px_4px_12px_rgba(0,0,0,0.1)] overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 border border-gray-200"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/5 pointer-events-none"></div>
                    <span className="text-gray-800 text-base font-medium leading-5 font-sans relative z-10">
                      See How It Works
                    </span>
                    <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#847971]">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    60+ languages
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Real-time translation
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    100+ accents supported
                  </span>
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
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2">
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5" />
                          <path d="M2 12l10 5 10-5" />
                        </svg>
                      }
                      text="Features"
                    />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-stretch-semi-condensed font-medium leading-tight font-serif mb-4">
                    Built for Global Collaboration
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    Every feature designed to help multilingual teams communicate faster and more clearly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364V3m0 2.364a48.47 48.47 0 013.332.114M9 5.25c0 .804.106 1.583.306 2.326m-.306-2.326a48.474 48.474 0 00-6 .371m6-.371v2.326m0 0a48.467 48.467 0 016 .37M9 7.576V12m6.334-4.26V12m0-4.26a48.466 48.466 0 016 .371M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    title="Two-Way Translation"
                    description="Speak Spanish, get English. Speak Japanese, get German. Translate between 60+ language pairs in real time while you dictate."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg>}
                    title="100+ Accent Profiles"
                    description="Whether your team speaks English with Indian, Brazilian, German, or Korean accents, Oravo understands everyone with 97%+ accuracy."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>}
                    title="Team-Wide Consistency"
                    description="Everyone writes in the same professional tone regardless of their native language. Oravo adapts formatting to match your team's communication style."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>}
                    title="Works in Every App"
                    description="Slack, Gmail, Notion, Google Docs, Teams — Oravo works in 1000+ apps. Your multilingual team can dictate anywhere they work."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
                    title="Enterprise-Grade Security"
                    description="HIPAA-ready on all plans, zero data retention, and encrypted processing. Your team's voice data never leaves the device."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>}
                    title="4x Faster Than Typing"
                    description="Dictate at 220 words per minute vs 45 WPM typing. Multiply that by every team member across every language — the time savings are massive."
                  />
                </div>
              </div>
            </section>

            {/* Use Cases */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge
                      icon={
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2">
                          <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      }
                      text="Use Cases"
                    />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-stretch-semi-condensed font-medium leading-tight font-serif mb-4">
                    How Global Teams Use Oravo
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Real scenarios where multilingual voice typing transforms team productivity.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <UseCaseCard
                    title="Cross-Border Client Communication"
                    description="Your team in Tokyo speaks to clients in English — but thinks in Japanese. They speak Japanese, Oravo outputs professional English emails in Gmail, Slack, or any app."
                    timeSaved="60-70%"
                  />
                  <UseCaseCard
                    title="Multilingual Documentation"
                    description="Engineering teams across offices write docs in English regardless of their native language. Speak in Hindi, Portuguese, or Korean — get polished English documentation."
                    timeSaved="50-60%"
                  />
                  <UseCaseCard
                    title="International Sales Follow-Ups"
                    description="Sales reps speak their language after a call and get professional follow-up emails in the client's language. No translator needed, no awkward phrasing."
                    timeSaved="70-80%"
                  />
                  <UseCaseCard
                    title="Global Support Teams"
                    description="Support agents respond to tickets in any language by speaking their native tongue. Oravo translates and formats responses professionally."
                    timeSaved="50-60%"
                  />
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
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2">
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
                  <FAQItem
                    question="Which languages does Oravo translate between?"
                    answer="Oravo supports real-time translation between 60+ language pairs including English, Spanish, French, German, Japanese, Korean, Chinese, Hindi, Portuguese, Arabic, and more. New languages are added regularly."
                  />
                  <FAQItem
                    question="How accurate is the translation?"
                    answer="Oravo uses advanced AI models for translation, producing professional-quality output that reads naturally — not like machine translation. It understands context, idioms, and business terminology."
                  />
                  <FAQItem
                    question="Can team members use different languages simultaneously?"
                    answer="Yes. Each team member configures their own source and target language. One person speaks Japanese, another speaks Spanish — both output professional English (or any target language)."
                  />
                  <FAQItem
                    question="Is there a team/enterprise plan?"
                    answer="Yes. Oravo offers team pricing at $10/user/month with centralized billing, admin controls, and priority support. Contact us for enterprise needs."
                  />
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="px-6 md:px-12 py-16 md:py-20">
              <div className="max-w-[700px] mx-auto text-center">
                <div
                  className="rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(55,50,47,0.15)]"
                  style={{ background: accentColor }}
                >
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">
                    Break Language Barriers Today
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                    Give your global team the power to communicate in any language — effortlessly. Start with the free plan.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link
                      href="/download"
                      className="group relative h-12 px-8 bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 shadow-[0px_0px_0px_2.5px_rgba(0,0,0,0.05)_inset,0px_4px_12px_rgba(0,0,0,0.1)] overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/5 pointer-events-none"></div>
                      <span className="text-gray-800 text-base font-medium leading-5 font-sans relative z-10">
                        Try Oravo Free
                      </span>
                      <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                      </svg>
                    </Link>
                  </div>

                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm font-sans">
                    <span>60+ languages</span>
                    <span>•</span>
                    <span>100+ accents</span>
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
