import type { Metadata } from "next";
import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Dictation App 2024 | AI Voice to Text for Mac & Windows",
  description:
    "Best dictation app with AI accuracy. Understands every accent. Real-time translation. Works in all apps. 4x faster. Try free.",
  keywords: [
    "best dictation app",
    "dictation app",
    "dictation app free",
    "best free dictation app",
    "dictation app for mac",
    "dictation app for windows",
    "voice dictation app",
    "AI dictation app",
    "dictation app 2024",
    "top dictation apps",
    "dictation app for professionals",
    "free dictation app",
    "dictation app for pc",
    "best dictation software",
    "speech dictation app",
  ],
  openGraph: {
    title: "Best Dictation App 2024 | AI Voice to Text",
    description: "Best dictation app with AI accuracy. Understands every accent. 4x faster than typing.",
    url: "https://oravo.ai/dictation-app",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dictation App 2024 | Oravo",
    description: "Best dictation app with AI accuracy. Understands every accent.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://oravo.ai/dictation-app",
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

function TranslationDemo() {
  const languages = [
    { code: "es", name: "Spanish", flag: "🇪🇸", input: "Hola, necesito enviar este informe a mi jefe antes de las cinco de la tarde..." },
    { code: "hi", name: "Hindi", flag: "🇮🇳", input: "मुझे कल की मीटिंग के लिए प्रेजेंटेशन तैयार करनी है..." },
    { code: "zh", name: "Mandarin", flag: "🇨🇳", input: "我想预约下周三的会议室..." },
    { code: "ar", name: "Arabic", flag: "🇸🇦", input: "أريد أن أرسل هذا البريد الإلكتروني إلى العميل..." },
    { code: "pt", name: "Portuguese", flag: "🇧🇷", input: "Preciso revisar o contrato antes da reunião..." },
  ];
  
  const outputs = [
    "Hi, I need to send this report to my boss before 5 PM today.",
    "I need to prepare a presentation for tomorrow's meeting.",
    "I'd like to book the meeting room for next Wednesday.",
    "I want to send this email to the client.",
    "I need to review the contract before the meeting.",
  ];

  return (
    <div className="w-full max-w-[800px] mx-auto">
      <div className="bg-white rounded-2xl border border-[#E0DEDB] shadow-[0_4px_24px_rgba(55,50,47,0.08)] overflow-hidden">
        {/* Language Selector */}
        <div className="px-6 py-4 border-b border-[#E0DEDB] bg-[#FAFAF9]">
          <p className="text-[#847971] text-xs font-medium uppercase tracking-wider mb-3 font-sans">Select your language</p>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang, index) => (
              <button
                key={lang.code}
                className={`px-3 py-1.5 rounded-full text-sm font-medium font-sans transition-all ${
                  index === 0
                    ? "bg-[#F97316] text-white"
                    : "bg-white border border-[#E0DEDB] text-[#605A57] hover:border-[#847971]"
                }`}
              >
                <span className="mr-1.5">{lang.flag}</span>
                {lang.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Demo Area */}
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E0DEDB]">
          {/* Input Side */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#FFF7ED] flex items-center justify-center">
                <svg className="w-4 h-4 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <span className="text-[#37322F] text-sm font-semibold font-sans">You speak (Spanish)</span>
            </div>
            <div className="relative">
              <p className="text-[#605A57] text-base leading-relaxed font-sans italic">
                "{languages[0].input}"
              </p>
              <div className="absolute -bottom-1 left-0 w-full h-4 bg-gradient-to-t from-white to-transparent"></div>
            </div>
            {/* Sound Wave Animation */}
            <div className="mt-4 flex items-center justify-center gap-1">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-[#F97316] rounded-full animate-pulse"
                  style={{
                    height: `${Math.random() * 20 + 8}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Output Side */}
          <div className="p-6 bg-[#FAFAF9]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#DCFCE7] flex items-center justify-center">
                <svg className="w-4 h-4 text-[#16A34A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-[#37322F] text-sm font-semibold font-sans">Perfect English output</span>
            </div>
            <p className="text-[#37322F] text-base leading-relaxed font-sans font-medium">
              "{outputs[0]}"
            </p>
            {/* Features Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-white border border-[#E0DEDB] rounded text-xs text-[#605A57] font-sans">Auto-punctuated</span>
              <span className="px-2 py-1 bg-white border border-[#E0DEDB] rounded text-xs text-[#605A57] font-sans">Grammar-corrected</span>
              <span className="px-2 py-1 bg-white border border-[#E0DEDB] rounded text-xs text-[#605A57] font-sans">Professional tone</span>
            </div>
          </div>
        </div>
        
        {/* Arrow Indicator */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#F97316] items-center justify-center shadow-lg">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
      
      {/* Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-[#37322F] text-2xl md:text-3xl font-semibold font-sans">100+</p>
          <p className="text-[#847971] text-sm font-sans">Languages supported</p>
        </div>
        <div>
          <p className="text-[#37322F] text-2xl md:text-3xl font-semibold font-sans">Real-time</p>
          <p className="text-[#847971] text-sm font-sans">Translation speed</p>
        </div>
        <div>
          <p className="text-[#37322F] text-2xl md:text-3xl font-semibold font-sans">99%</p>
          <p className="text-[#847971] text-sm font-sans">Accuracy rate</p>
        </div>
      </div>
    </div>
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

export default function DictationAppPage() {
  const accentColor = "#F97316";

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
                    text="Best of 2024"
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Best Dictation App
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  The #1 rated dictation app for 2026. AI-powered accuracy that understands every accent. Type 4x faster with your voice.
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
                    <span className="text-white text-base font-medium leading-5 font-sans relative z-10">Download Free</span>
                    <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </Link>
                  <Link
                    href="/how-to-use"
                    className="group relative h-12 px-8 bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 shadow-[0px_0px_0px_2.5px_rgba(0,0,0,0.05)_inset,0px_4px_12px_rgba(0,0,0,0.1)] overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 border border-gray-200"
                  >
                    <span className="text-gray-800 text-base font-medium leading-5 font-sans relative z-10">Watch Demo</span>
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#847971]">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Free to try
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Mac & Windows
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    100+ Languages
                  </span>
                </div>
              </div>
            </section>

            {/* Hero-Level Translation Section - The Magic Moment */}
            <section className="px-6 md:px-12 py-16 md:py-20 border-b border-[rgba(55,50,47,0.12)] bg-gradient-to-b from-[#FFFBF7] to-[#F7F5F3]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge 
                      icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2"><path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>} 
                      text="The Magic" 
                    />
                  </div>
                  <h2 className="text-[#37322F] text-[32px] sm:text-4xl md:text-5xl font-normal leading-tight font-serif mb-4">
                    Speak Your Language.<br />Get Perfect English.
                  </h2>
                  <p className="text-[#605A57] text-lg md:text-xl font-sans max-w-[640px] mx-auto">
                    Think in your native language. Speak naturally. Oravo translates and polishes your words into professional English—instantly.
                  </p>
                </div>

                <TranslationDemo />

                <div className="mt-12 text-center">
                  <Link
                    href="/download"
                    className="group relative inline-flex h-14 px-10 overflow-hidden rounded-full items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      background: `linear-gradient(to bottom, ${accentColor}, ${accentColor})`,
                      boxShadow: `0px 0px 0px 2.5px rgba(255,255,255,0.08) inset, 0px 4px 12px ${accentColor}66`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none"></div>
                    <span className="text-white text-lg font-medium leading-5 font-sans relative z-10">Try It Free</span>
                    <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </section>

            {/* Features Section - 4 Cards */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>} text="More Power" />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif mb-4">
                    Voice to Text, Perfected
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    Beyond translation—Oravo understands context, adapts to your style, and works everywhere you do.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>}
                    title="AI Mode: Any Accent, Perfect Text"
                    description="Our AI is trained on voices from 100+ countries. Indian, Chinese, Spanish accents—all understood perfectly."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                    title="Auto-Format"
                    description="Smart punctuation, paragraphs, and capitalization. Speak naturally, get polished, professional text."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                    title="Works Everywhere"
                    description="Google Docs, Word, Slack, email, browser—if you can type there, Oravo works there. No copy-paste needed."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>}
                    title="Style-Matching"
                    description="Oravo adapts to your tone and writing style across different apps. Formal for emails, casual for Slack—always sounds like you."
                  />
                </div>
              </div>
            </section>

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
                    question="What is the best dictation app in 2024?"
                    answer="Oravo is consistently rated as the best dictation app for 2024, especially for non-native English speakers. It offers superior accent recognition, real-time translation, and works across all applications."
                  />
                  <FAQItem
                    question="Is there a free dictation app?"
                    answer="Yes! Oravo offers a free tier with generous usage limits. You can try all features before deciding if you need more capacity."
                  />
                  <FAQItem
                    question="What dictation app works with accents?"
                    answer="Oravo is specifically designed for accented speech. Unlike other apps optimized for native speakers, Oravo's AI is trained on diverse voices from over 100 countries."
                  />
                  <FAQItem
                    question="Can I use dictation app on Mac and Windows?"
                    answer="Yes! Oravo has native apps for both macOS and Windows, optimized for each platform's capabilities."
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
                  <Link href="/voice-dictation-software" className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#1877F2] hover:text-[#1877F2] transition-colors">
                    Voice Dictation Software
                  </Link>
                  <Link href="/voice-typing-for-accents" className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#1877F2] hover:text-[#1877F2] transition-colors">
                    Voice Typing for Accents
                  </Link>
                  <Link href="/for-writers" className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#1877F2] hover:text-[#1877F2] transition-colors">
                    For Writers
                  </Link>
                  <Link href="/use-cases" className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#1877F2] hover:text-[#1877F2] transition-colors">
                    All Use Cases
                  </Link>
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-16 md:py-20">
              <div className="max-w-[700px] mx-auto text-center">
                <div className="rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(55,50,47,0.15)]" style={{ background: accentColor }}>
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">
                    Try the Best Dictation App
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                    Join thousands who type 4x faster with Oravo. Free to try, no credit card required.
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
                    <span>Free tier available</span><span>•</span><span>Mac & Windows</span><span>•</span><span>No card required</span>
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

