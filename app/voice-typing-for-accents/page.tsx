import type { Metadata } from "next";
import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voice Typing for Accents | Speech Recognition That Understands You",
  description:
    "Voice typing that understands any accent. Indian, Chinese, Spanish, French accents—perfect accuracy. AI trained on 100+ accents.",
  keywords: [
    "voice typing accent",
    "voice typing for accents",
    "accent recognition",
    "speech recognition accent",
    "voice to text accent",
    "dictation for accents",
    "accent friendly voice typing",
    "Indian accent voice typing",
    "Chinese accent speech to text",
    "Spanish accent dictation",
    "French accent voice recognition",
    "non-native speaker voice typing",
    "ESL voice typing",
    "accent detection",
    "multilingual voice typing",
    "foreign accent transcription",
  ],
  openGraph: {
    title: "Voice Typing for Accents | Works with Any Accent",
    description: "Voice typing that understands any accent. Indian, Chinese, Spanish—perfect accuracy.",
    url: "https://oravo.ai/voice-typing-for-accents",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Typing for Accents | Oravo",
    description: "Voice typing that understands any accent. AI trained on 100+ accents.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://oravo.ai/voice-typing-for-accents",
  },
};

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">{text}</div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <article className="group p-5 bg-white border border-[#E0DEDB] rounded-xl flex flex-col gap-4 transition-all duration-200 hover:border-[#847971]">
      <div className="w-10 h-10 rounded-lg bg-[#F7F5F3] flex items-center justify-center text-[#605A57] group-hover:text-[#37322F] transition-colors">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#37322F] text-base font-semibold leading-tight font-sans">{title}</h3>
        <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">{description}</p>
      </div>
    </article>
  );
}

function AccentCard({ flag, accent, accuracy }: { flag: string; accent: string; accuracy: string }) {
  return (
    <article className="p-4 bg-white border border-[#E0DEDB] rounded-xl hover:border-[#847971] transition-all">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{flag}</span>
          <span className="text-[#37322F] font-semibold font-sans">{accent}</span>
        </div>
        <span className="text-[#10B981] font-semibold font-sans text-sm">{accuracy}</span>
      </div>
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

export default function VoiceTypingForAccentsPage() {
  const accentColor = "#EF4444";

  const accents = [
    { flag: "🇮🇳", accent: "Indian English", accuracy: "99.2%" },
    { flag: "🇨🇳", accent: "Chinese English", accuracy: "98.8%" },
    { flag: "🇪🇸", accent: "Spanish English", accuracy: "99.1%" },
    { flag: "🇫🇷", accent: "French English", accuracy: "98.9%" },
    { flag: "🇩🇪", accent: "German English", accuracy: "99.0%" },
    { flag: "🇯🇵", accent: "Japanese English", accuracy: "98.7%" },
    { flag: "🇧🇷", accent: "Brazilian English", accuracy: "98.9%" },
    { flag: "🇷🇺", accent: "Russian English", accuracy: "98.6%" },
    { flag: "🇰🇷", accent: "Korean English", accuracy: "98.5%" },
    { flag: "🇮🇹", accent: "Italian English", accuracy: "98.8%" },
    { flag: "🇳🇱", accent: "Dutch English", accuracy: "99.1%" },
    { flag: "🇸🇦", accent: "Arabic English", accuracy: "98.4%" },
  ];

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0" />
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0" />

          <Header />

          <main className="flex-1 w-full mt-20 md:mt-24 lg:mt-28 relative z-10">
            <section className="px-6 md:px-12 py-12 md:py-20 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <Badge
                    icon={<svg className="w-3.5 h-3.5" fill={accentColor} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>}
                    text="100+ Accents Supported"
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Voice Typing for Accents
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  Finally, voice typing that understands you. Our AI is trained on 100+ accents from around the world. No more frustrating misrecognitions.
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
                    <span className="text-white text-base font-medium leading-5 font-sans relative z-10">Try Free</span>
                    <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </Link>
                  <Link
                    href="/how-to-use"
                    className="group relative h-12 px-8 bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 shadow-[0px_0px_0px_2.5px_rgba(0,0,0,0.05)_inset,0px_4px_12px_rgba(0,0,0,0.1)] overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 border border-gray-200"
                  >
                    <span className="text-gray-800 text-base font-medium leading-5 font-sans relative z-10">See How It Works</span>
                  </Link>
                </div>
              </div>
            </section>

            {/* The Problem */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>} text="The Problem" />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif mb-4">
                    Why Other Apps Fail Non-Native Speakers
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    Most voice typing apps are trained on native English speakers only.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-red-50 border border-red-200 rounded-xl">
                    <h4 className="text-red-700 font-semibold mb-2 font-sans flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      Siri / Google Voice Typing
                    </h4>
                    <p className="text-red-600 text-sm font-sans">Trained primarily on American accents. Struggles with Indian, Chinese, and European accents.</p>
                  </div>
                  <div className="p-5 bg-red-50 border border-red-200 rounded-xl">
                    <h4 className="text-red-700 font-semibold mb-2 font-sans flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      Windows Voice Typing
                    </h4>
                    <p className="text-red-600 text-sm font-sans">Basic accent support. Frequent misrecognitions force constant corrections.</p>
                  </div>
                  <div className="p-5 bg-green-50 border border-green-200 rounded-xl">
                    <h4 className="text-green-700 font-semibold mb-2 font-sans flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      Oravo
                    </h4>
                    <p className="text-green-600 text-sm font-sans">AI specifically trained on diverse accents from 100+ countries. Your accent isn&apos;t a bug—it&apos;s supported.</p>
                  </div>
                  <div className="p-5 bg-green-50 border border-green-200 rounded-xl">
                    <h4 className="text-green-700 font-semibold mb-2 font-sans flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      99%+ Accuracy
                    </h4>
                    <p className="text-green-600 text-sm font-sans">Regardless of your accent, Oravo delivers professional-quality transcription.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Accuracy by Accent */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>} text="Accuracy" />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif mb-4">
                    Accuracy by Accent
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    See how Oravo performs with your accent.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {accents.map((accent) => (
                    <AccentCard key={accent.accent} {...accent} />
                  ))}
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>} text="Features" />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif mb-4">
                    Built for Non-Native Speakers
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>}
                    title="Adaptive Learning"
                    description="Oravo learns your specific accent patterns over time, getting more accurate with use."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" /></svg>}
                    title="Context Awareness"
                    description="Understands words that sound similar in your accent by analyzing context."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    title="Real-Time Processing"
                    description="See accurate text as you speak. No waiting, no batch processing."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>}
                    title="No Training Required"
                    description="Works perfectly from the first use. No voice enrollment or training sessions."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                    title="Smart Grammar"
                    description="Corrects grammar automatically, so your text sounds like native English."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                    title="Works Everywhere"
                    description="Type with your accent in any app—Gmail, Docs, Slack, and 1000+ more."
                  />
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2"><path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} text="FAQ" />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif mb-4">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  <FAQItem
                    question="Why does Oravo work better with accents than other apps?"
                    answer="Most voice typing apps are trained on native English speakers. Oravo's AI is specifically trained on diverse speech patterns from over 100 countries, making it understand accented English naturally."
                  />
                  <FAQItem
                    question="Do I need to change how I speak?"
                    answer="No! Speak naturally with your accent. Oravo adapts to you, not the other way around. The more you use it, the better it understands your unique speech patterns."
                  />
                  <FAQItem
                    question="My accent is quite strong. Will it still work?"
                    answer="Yes! Oravo is designed for exactly this scenario. Even with a strong accent, you'll get 98%+ accuracy. Our users with the strongest accents are often the most satisfied."
                  />
                  <FAQItem
                    question="Does it work with code-switching (mixing languages)?"
                    answer="Yes! If you naturally mix English with words from your native language, Oravo can handle that too. It recognizes when you switch and transcribes accordingly."
                  />
                </div>
              </div>
            </section>

            {/* Related Pages */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <h3 className="text-[#37322F] text-lg font-semibold font-sans mb-4">Related Topics</h3>
                <div className="flex flex-wrap gap-3">
                  <Link href="/features" className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#1877F2] hover:text-[#1877F2] transition-colors">
                    All Features
                  </Link>
                  <Link href="/voice-typing-with-translation" className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#1877F2] hover:text-[#1877F2] transition-colors">
                    Voice Typing Translation
                  </Link>
                  <Link href="/speech-to-text-spanish" className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#1877F2] hover:text-[#1877F2] transition-colors">
                    🇪🇸 Spanish Speech to Text
                  </Link>
                  <Link href="/voice-to-text-app" className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#1877F2] hover:text-[#1877F2] transition-colors">
                    Voice to Text App
                  </Link>
                  <Link href="/for-accessibility" className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#1877F2] hover:text-[#1877F2] transition-colors">
                    For Accessibility
                  </Link>
                  <Link href="/use-cases" className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#1877F2] hover:text-[#1877F2] transition-colors">
                    All Use Cases
                  </Link>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="px-6 md:px-12 py-16 md:py-20">
              <div className="max-w-[700px] mx-auto text-center">
                <div className="rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(55,50,47,0.15)]" style={{ background: accentColor }}>
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">
                    Voice Typing That Gets Your Accent
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                    Stop fighting with voice recognition. Try Oravo free and experience accurate transcription, finally.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link
                      href="/download"
                      className="group relative h-12 px-8 bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 shadow-lg overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <span className="text-gray-800 text-base font-medium leading-5 font-sans relative z-10">Download Free</span>
                    </Link>
                  </div>
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm font-sans">
                    <span>100+ accents</span><span>•</span><span>99%+ accuracy</span><span>•</span><span>Free trial</span>
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

