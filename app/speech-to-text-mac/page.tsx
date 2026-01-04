import type { Metadata } from "next";
import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Speech to Text for Mac | Best Voice Typing App for macOS",
  description:
    "Best speech to text app for Mac. Native macOS voice typing with accent support. Works in all apps. 4x faster than typing. Try free.",
  keywords: [
    "speech to text mac",
    "speech to text for mac",
    "voice to text mac",
    "mac dictation app",
    "macOS speech to text",
    "voice typing mac",
    "mac voice recognition",
    "dictation software mac",
    "best speech to text mac",
    "mac voice to text app",
    "speech recognition macOS",
    "voice dictation mac",
    "macos voice typing",
    "apple speech to text",
    "mac transcription app",
    "speech to text macbook",
  ],
  openGraph: {
    title: "Speech to Text for Mac | Best Voice Typing App for macOS",
    description:
      "Best speech to text app for Mac. Native macOS voice typing with accent support. Works in all apps. 4x faster.",
    url: "https://oravo.ai/speech-to-text-mac",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Speech to Text for Mac | Oravo",
    description: "Best speech to text app for Mac. Works in all apps. 4x faster than typing.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://oravo.ai/speech-to-text-mac",
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <article className="p-5 bg-white border border-[#E0DEDB] rounded-xl">
      <h4 className="text-[#37322F] text-base font-semibold font-sans mb-2">{question}</h4>
      <p className="text-[#605A57] text-sm leading-relaxed font-sans">{answer}</p>
    </article>
  );
}

export default function SpeechToTextMacPage() {
  const accentColor = "#007AFF"; // Apple blue

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
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
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill={accentColor}>
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    }
                    text="For macOS"
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Speech to Text for Mac
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  The best speech to text app for macOS. Native Mac experience with AI-powered accuracy. Works in every app—type 4x faster with your voice.
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
                    <span className="text-white text-base font-medium leading-5 font-sans relative z-10">Download for Mac</span>
                    <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </Link>
                  <Link
                    href="/how-to-use"
                    className="group relative h-12 px-8 bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 shadow-[0px_0px_0px_2.5px_rgba(0,0,0,0.05)_inset,0px_4px_12px_rgba(0,0,0,0.1)] overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 border border-gray-200"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/5 pointer-events-none"></div>
                    <span className="text-gray-800 text-base font-medium leading-5 font-sans relative z-10">See How It Works</span>
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#847971]">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    macOS 12+ supported
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    M1/M2/M3 optimized
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Free to try
                  </span>
                </div>
              </div>
            </section>

            {/* Why Better Than Built-in */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>} text="Why Oravo" />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif mb-4">
                    Better Than Built-in Mac Dictation
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    Mac&apos;s built-in dictation is limited. Oravo gives you professional-grade speech to text.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>}
                    title="4x Faster Accuracy"
                    description="AI-powered speech recognition that's far more accurate than Apple's built-in dictation, especially for accents."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" /></svg>}
                    title="100+ Languages"
                    description="Speak in any language and get accurate transcription. Built-in Mac dictation only supports a few."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>}
                    title="Real-Time Translation"
                    description="Speak in Spanish, get English text. Mac dictation can't do this—Oravo translates as you speak."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                    title="Auto Formatting"
                    description="Automatic punctuation, paragraphs, and capitalization. Mac dictation gives you a wall of text."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
                    title="Zero Data Retention"
                    description="Your voice data is never stored. Mac dictation sends audio to Apple servers."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                    title="Works Everywhere"
                    description="Type in any app—Google Docs, Slack, Gmail, VS Code, and 1000+ more. No compatibility issues."
                  />
                </div>
              </div>
            </section>

            {/* Comparison Table */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif mb-4">
                    Oravo vs Mac Built-in Dictation
                  </h2>
                </div>

                <div className="bg-white border border-[#E0DEDB] rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#E0DEDB]">
                        <th className="text-left p-4 text-[#37322F] font-semibold">Feature</th>
                        <th className="text-center p-4 text-[#37322F] font-semibold">Oravo</th>
                        <th className="text-center p-4 text-[#605A57] font-semibold">Mac Dictation</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-[#E0DEDB]">
                        <td className="p-4 text-[#605A57]">Accuracy with accents</td>
                        <td className="p-4 text-center text-green-600">✓ Excellent</td>
                        <td className="p-4 text-center text-red-500">✗ Poor</td>
                      </tr>
                      <tr className="border-b border-[#E0DEDB]">
                        <td className="p-4 text-[#605A57]">Real-time translation</td>
                        <td className="p-4 text-center text-green-600">✓ Yes</td>
                        <td className="p-4 text-center text-red-500">✗ No</td>
                      </tr>
                      <tr className="border-b border-[#E0DEDB]">
                        <td className="p-4 text-[#605A57]">Auto punctuation</td>
                        <td className="p-4 text-center text-green-600">✓ Smart AI</td>
                        <td className="p-4 text-center text-yellow-600">~ Basic</td>
                      </tr>
                      <tr className="border-b border-[#E0DEDB]">
                        <td className="p-4 text-[#605A57]">Languages supported</td>
                        <td className="p-4 text-center text-green-600">100+</td>
                        <td className="p-4 text-center text-yellow-600">~20</td>
                      </tr>
                      <tr className="border-b border-[#E0DEDB]">
                        <td className="p-4 text-[#605A57]">Privacy (no data stored)</td>
                        <td className="p-4 text-center text-green-600">✓ Yes</td>
                        <td className="p-4 text-center text-red-500">✗ Sends to Apple</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#605A57]">Works offline</td>
                        <td className="p-4 text-center text-green-600">✓ Yes</td>
                        <td className="p-4 text-center text-yellow-600">~ Limited</td>
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
                    <Badge icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2"><path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} text="FAQ" />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif mb-4">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  <FAQItem
                    question="What macOS versions are supported?"
                    answer="Oravo supports macOS 12 (Monterey) and later. It's optimized for Apple Silicon (M1, M2, M3) but also works great on Intel Macs."
                  />
                  <FAQItem
                    question="Is Oravo better than Mac's built-in dictation?"
                    answer="Yes. Oravo offers significantly better accuracy (especially for non-native speakers), real-time translation, smart formatting, and privacy-first design. Mac's built-in dictation is basic and sends your audio to Apple."
                  />
                  <FAQItem
                    question="Does it work with all Mac apps?"
                    answer="Yes! Oravo works in any app where you can type—Google Docs, Microsoft Word, Slack, Gmail, VS Code, Notion, and thousands more."
                  />
                  <FAQItem
                    question="Can I use it offline?"
                    answer="Yes. Oravo can process speech locally on your Mac without an internet connection, unlike many cloud-based alternatives."
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
                  <Link href="/voice-to-text-app" className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#1877F2] hover:text-[#1877F2] transition-colors">
                    Voice to Text App
                  </Link>
                  <Link href="/dictation-app" className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#1877F2] hover:text-[#1877F2] transition-colors">
                    Best Dictation App
                  </Link>
                  <Link href="/voice-typing-for-accents" className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#1877F2] hover:text-[#1877F2] transition-colors">
                    Voice Typing for Accents
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
                    Try the Best Speech to Text for Mac
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                    Join thousands of Mac users who type 4x faster with Oravo. Free to try, no credit card required.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link
                      href="/download"
                      className="group relative h-12 px-8 bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 shadow-[0px_0px_0px_2.5px_rgba(0,0,0,0.05)_inset,0px_4px_12px_rgba(0,0,0,0.1)] overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <span className="text-gray-800 text-base font-medium leading-5 font-sans relative z-10">Download for Mac</span>
                    </Link>
                  </div>
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm font-sans">
                    <span>macOS 12+</span><span>•</span><span>M1/M2/M3 optimized</span><span>•</span><span>Free trial</span>
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

