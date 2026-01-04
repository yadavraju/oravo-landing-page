import type { Metadata } from "next";
import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voice to Text Features | AI Dictation & Speech Recognition | Oravo",
  description:
    "Discover Oravo's powerful voice-to-text features. Speak naturally and get perfect transcription with automatic punctuation, 100+ languages, real-time translation, and seamless app integration.",
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
  ],
  openGraph: {
    title: "Voice to Text Features | AI Dictation & Speech Recognition | Oravo",
    description:
      "Speak naturally. Oravo transcribes, formats, and translates your words into polished text — in any app, any language.",
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

// Feature Card - matching site design
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
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[rgba(55,50,47,0.12)] hover:shadow-[0px_4px_12px_rgba(55,50,47,0.08)] transition-all duration-300">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ background: "#1877F215" }}
      >
        {icon}
      </div>
      <h3 className="text-[#37322F] text-lg md:text-xl font-semibold font-sans mb-3">
        {title}
      </h3>
      <p className="text-[#605A57] text-sm md:text-base leading-relaxed font-sans">
        {description}
      </p>
    </div>
  );
}

// Step Card - matching site design
function StepCard({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
        style={{ background: "#1877F2" }}
      >
        <span className="text-white text-lg font-semibold">{number}</span>
      </div>
      <div className="flex-1">
        <h4 className="text-[#37322F] text-lg font-semibold font-sans mb-2">
          {title}
        </h4>
        <p className="text-[#605A57] text-sm md:text-base leading-relaxed font-sans">
          {description}
        </p>
      </div>
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
    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-[rgba(55,50,47,0.12)]">
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

  const features = [
    {
      title: "Real-Time Transcription",
      description:
        "Watch your words appear as you speak. Oravo transcribes in real-time with minimal latency for a seamless experience.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke={accentColor}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      ),
    },
    {
      title: "Automatic Punctuation",
      description:
        "Never say 'period' or 'comma' again. Oravo intelligently adds punctuation, capitalization, and paragraph breaks.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke={accentColor}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "100+ Languages",
      description:
        "Speak in your native language or switch between languages seamlessly. Oravo supports over 100 languages and dialects.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke={accentColor}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
      ),
    },
    {
      title: "Works Everywhere",
      description:
        "Type anywhere you can click. Oravo works in every app—browsers, documents, emails, chat apps, and more.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke={accentColor}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Privacy-First",
      description:
        "Your voice data stays private. Encrypted processing and no audio storage—designed for professionals who value security.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke={accentColor}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: "Custom Hotkey",
      description:
        "Activate with a single keypress. Set your preferred hotkey and start dictating instantly without interrupting your workflow.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke={accentColor}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  const howItWorksSteps = [
    {
      title: "Install Oravo",
      description:
        "Download Oravo for Mac, Windows, iOS, or Android. Setup takes about 2 minutes.",
    },
    {
      title: "Click any text field",
      description:
        "Place your cursor where you want to type—any app, any website, any document.",
    },
    {
      title: "Press your hotkey and speak",
      description:
        "Activate Oravo with your hotkey and speak naturally—Oravo adds punctuation and formatting automatically.",
    },
    {
      title: "Review and send",
      description:
        "Your speech appears as clean, polished text. Make quick edits if needed and hit send.",
    },
  ];

  const faqs = [
    {
      question: "Does Oravo work in all apps?",
      answer:
        "Yes. Oravo works anywhere you can type—browsers, desktop apps, documents, emails, chat apps, and more. It's a system-level voice keyboard.",
    },
    {
      question: "How accurate is the transcription?",
      answer:
        "Oravo achieves 98%+ accuracy for most users. It uses advanced AI models trained on diverse speech patterns and continuously improves.",
    },
    {
      question: "Can I use Oravo in multiple languages?",
      answer:
        "Yes. Oravo supports 100+ languages and can translate your speech in real-time to a different language.",
    },
    {
      question: "Is my voice data private?",
      answer:
        "Yes. Oravo uses encrypted processing and does not store your audio. Your data is never used to train models.",
    },
    {
      question: "Does it require an internet connection?",
      answer:
        "Oravo uses cloud processing for the best accuracy and language support. An internet connection is required.",
    },
    {
      question: "What platforms does Oravo support?",
      answer:
        "Oravo is available on macOS, Windows, iOS, and Android. One subscription works across all your devices.",
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
                    className="inline-flex h-14 px-8 text-white text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0px_4px_12px_rgba(24,119,242,0.4)] items-center justify-center"
                    style={{ background: accentColor }}
                  >
                    Download Free
                  </Link>
                  <Link
                    href="/how-to-use"
                    className="inline-flex h-14 px-8 bg-white border border-[#E0DEDB] text-[#37322F] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#F7F5F3] items-center justify-center"
                  >
                    See How It Works
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
                    100+ languages
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
                    98%+ accuracy
                  </span>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
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
                    text="Core Features"
                  />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                    Everything You Need to Write Faster
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    Powerful features designed to help you communicate more naturally and efficiently.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map((feature) => (
                    <FeatureCard
                      key={feature.title}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* How It Works Section */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[700px] mx-auto">
                <div className="text-center mb-12">
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
                        <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    }
                    text="How It Works"
                  />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                    Get Started in Minutes
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Simple setup, instant productivity boost.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-[rgba(55,50,47,0.12)]">
                  <div className="space-y-8">
                    {howItWorksSteps.map((step, idx) => (
                      <StepCard
                        key={step.title}
                        number={idx + 1}
                        title={step.title}
                        description={step.description}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Translation Feature Highlight */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
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
                          <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                      }
                      text="Real-Time Translation"
                    />
                    <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                      Speak in Any Language, Type in Another
                    </h2>
                    <p className="text-[#605A57] text-base md:text-lg leading-relaxed font-sans mb-6">
                      Break language barriers instantly. Speak in your native
                      language and Oravo translates your words to any target
                      language in real-time—perfect for international communication.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Speak Spanish, type in English",
                        "Dictate in Japanese, output in French",
                        "Real-time translation as you speak",
                        "Preserve tone and context across languages",
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
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[rgba(55,50,47,0.12)]">
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[rgba(55,50,47,0.08)]">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ background: `${accentColor}15` }}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke={accentColor}
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-[#847971] font-sans">
                          Speaking: Spanish
                        </div>
                        <div className="text-sm font-semibold text-[#37322F] font-sans">
                          Output: English
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-[#F7F5F3] rounded-lg p-4">
                        <div className="text-xs text-[#847971] mb-1 font-sans">
                          You said:
                        </div>
                        <div className="text-[#37322F] italic font-sans">
                          &quot;Hola, me gustaría programar una reunión para
                          mañana a las tres de la tarde.&quot;
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke={accentColor}
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>
                      <div
                        className="rounded-lg p-4 border"
                        style={{
                          background: `${accentColor}08`,
                          borderColor: `${accentColor}30`,
                        }}
                      >
                        <div
                          className="text-xs mb-1 font-sans"
                          style={{ color: accentColor }}
                        >
                          Typed:
                        </div>
                        <div className="text-[#37322F] font-medium font-sans">
                          &quot;Hello, I would like to schedule a meeting for
                          tomorrow at 3 PM.&quot;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-12">
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
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
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
                    Ready to Type at the Speed of Thought?
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                    Join thousands of professionals who write 4x faster with Oravo.
                    Start your free trial today.
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
