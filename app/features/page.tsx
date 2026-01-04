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

// Mini Feature Card for sub-features
function MiniFeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-[rgba(55,50,47,0.12)]">
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

  const faqs = [
    {
      question: "Does Oravo work in all apps?",
      answer:
        "Yes. Oravo works anywhere you can type—browsers, desktop apps, documents, emails, chat apps, and more. It's a system-level voice keyboard that works in Notion, Gmail, Google Docs, Slack, WhatsApp, Cursor, and any text field.",
    },
    {
      question: "How accurate is the transcription?",
      answer:
        "Oravo achieves 98%+ accuracy for most users. It uses advanced AI models trained on diverse speech patterns, understands context to spell names correctly, and continuously improves with your corrections.",
    },
    {
      question: "Can I use Oravo in multiple languages?",
      answer:
        "Yes. Oravo supports 100+ languages including Spanish, Hindi, Chinese, Korean, Arabic, and more. You can also translate your speech in real-time to a different language.",
    },
    {
      question: "Does Oravo remove filler words automatically?",
      answer:
        "Yes. Oravo automatically removes 'um,' 'uh,' and other filler words so your text is clean and professional. It also handles corrections naturally when you change your mind mid-sentence.",
    },
    {
      question: "Can I add custom vocabulary and terms?",
      answer:
        "Yes. Oravo learns your words as you go. When you correct a spelling, it's added to your personal dictionary. You can also manually add industry terms, product names, or unique spellings.",
    },
    {
      question: "What platforms does Oravo support?",
      answer:
        "Oravo is available on macOS, Windows, iOS, and Android. One subscription works across all your devices, keeping your settings and vocabulary in sync.",
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
                    text="Do More With Your Voice"
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
                    AI edits built in
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
                    text="Speak"
                  />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                    Speak Naturally. Oravo Writes It Perfectly.
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    Oravo works wherever you work. Any app, device, or language.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FeatureCard
                    icon={
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
                    }
                    title="Speak Into Any App"
                    description="Oravo works everywhere: Notion, Gmail, Google Docs, Slack, WhatsApp, Cursor, VS Code—anything with a text field. One voice keyboard for your entire workflow."
                  />
                  <FeatureCard
                    icon={
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    }
                    title="Spells Names Right"
                    description="Oravo uses surrounding context to spell uncommon names, technical terms, and product names correctly—so you don't have to fix them later."
                  />
                  <FeatureCard
                    icon={
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
                    }
                    title="100+ Languages"
                    description="Oravo works in 100+ languages, so you can dictate in Español, हिन्दी, 中文, 한국어, العربية, Français, Deutsch, and more."
                  />
                  <FeatureCard
                    icon={
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
                          d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                    }
                    title="Whisper Mode"
                    description="Oravo works even when you're whispering, so you can keep dictating in shared spaces, quiet offices, or late at night without disturbing anyone."
                  />
                </div>
              </div>
            </section>

            {/* REFINE Section */}
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
                        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    }
                    text="Refine"
                  />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                    Oravo Edits While You Speak
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    Oravo goes beyond basic dictation: cleaning up filler words, formatting lists, catching punctuation, and understanding corrections in real time.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <MiniFeatureCard
                    title="Backtrack Corrections"
                    description="Oravo understands when you change your mind. Say 'Let's meet at 2… actually 3,' and Oravo writes the corrected version instantly. No manual editing needed."
                  />
                  <MiniFeatureCard
                    title="Remove Filler Words"
                    description="Oravo automatically removes 'um,' 'uh,' 'like,' and other verbal pauses so your text is clean, professional, and natural."
                  />
                  <MiniFeatureCard
                    title="Numbered Lists"
                    description="Just speak the numbers: 'Going to the store for 1. Apples 2. Bananas 3. Oranges.' Oravo turns it into a properly formatted list."
                  />
                  <MiniFeatureCard
                    title="Auto Punctuation"
                    description="Oravo detects punctuation naturally from your pauses and tone. You can also dictate marks like 'comma' or 'question mark' for precision when needed."
                  />
                </div>
              </div>
            </section>

            {/* PERSONALIZE Section */}
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
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    }
                    text="Personalize"
                  />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                    Oravo Adapts to You
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    Oravo learns your words, phrases, and tone—and keeps them consistent across every app and device.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[rgba(55,50,47,0.12)]">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "#1877F215" }}
                    >
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
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <h3 className="text-[#37322F] text-lg font-semibold font-sans mb-2">
                      Custom Dictionary
                    </h3>
                    <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                      Oravo learns your words as you go. When you correct a spelling, it's added automatically to your personal dictionary. Add industry terms, names, or unique spellings manually too.
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[rgba(55,50,47,0.12)]">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "#1877F215" }}
                    >
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
                    </div>
                    <h3 className="text-[#37322F] text-lg font-semibold font-sans mb-2">
                      Voice Snippets
                    </h3>
                    <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                      Create voice shortcuts for things you say often—scheduling links, intros, FAQs, email signatures. Just speak the cue, and Oravo pastes the full, formatted text instantly.
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[rgba(55,50,47,0.12)]">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "#1877F215" }}
                    >
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
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        />
                      </svg>
                    </div>
                    <h3 className="text-[#37322F] text-lg font-semibold font-sans mb-2">
                      Adaptive Styles
                    </h3>
                    <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                      Let Oravo shape your tone based on where you're writing. Go from formal in documents, to casual in messages, to enthusiastic in emails—always sounding like you.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* DEVELOPER Section */}
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
                          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      }
                      text="For Developers"
                    />
                    <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                      Built for Developers, Not Just Dictation
                    </h2>
                    <p className="text-[#605A57] text-base md:text-lg leading-relaxed font-sans mb-6">
                      Oravo understands syntax, file names, and code formatting—so your voice fits seamlessly into your developer workflow.
                    </p>
                    <Link
                      href="/voice-keyboard-for-cursor"
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
                      description="Using Cursor or VS Code? Oravo recognizes filenames as you speak and automatically tags the right file, bringing all its context into your prompt for more precise AI responses."
                    />
                    <MiniFeatureCard
                      title="Syntax Awareness"
                      description="Oravo parses your speech with full syntax awareness—preserving exact spacing, formatting, camelCase, snake_case, acronyms, and CLI commands."
                    />
                    <MiniFeatureCard
                      title="Dev Terminology"
                      description="Oravo automatically recognizes developer-specific terms like Supabase, Cloudflare, Vercel, React, and TypeScript. Add custom terms to your dictionary with a single correction."
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* PLATFORMS Section */}
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
                        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                    text="Works Everywhere"
                  />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                    Available on All Your Devices
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    Oravo runs seamlessly on Mac, Windows, iPhone, and Android—keeping your voice, vocabulary, and settings in sync across every device.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { name: "macOS", icon: "🍎", desc: "Native Mac app" },
                    { name: "Windows", icon: "🪟", desc: "Native Windows app" },
                    { name: "iOS", icon: "📱", desc: "iPhone & iPad" },
                    { name: "Android", icon: "🤖", desc: "All Android devices" },
                  ].map((platform) => (
                    <div
                      key={platform.name}
                      className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[rgba(55,50,47,0.12)] text-center hover:shadow-[0px_4px_12px_rgba(55,50,47,0.08)] transition-all"
                    >
                      <div className="text-4xl mb-3">{platform.icon}</div>
                      <div className="text-[#37322F] font-semibold font-sans">
                        {platform.name}
                      </div>
                      <div className="text-[#847971] text-sm font-sans">
                        {platform.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PRIVACY Section */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[rgba(55,50,47,0.12)]">
                      <ul className="space-y-4">
                        {[
                          "No audio stored on servers",
                          "Your data never trains our models",
                          "GDPR and CCPA compliant",
                          "SOC 2 Type II certified",
                          "Enterprise-grade security",
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
                    <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                      Your Data, Your Control
                    </h2>
                    <p className="text-[#605A57] text-base md:text-lg leading-relaxed font-sans">
                      Built for professionals who value privacy. Oravo uses encrypted processing, never stores your audio, and gives you complete control over your data.
                    </p>
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
                    Ready to Flow?
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                    Effortless voice dictation on Mac, Windows, and mobile. 4x faster than typing, with AI edits built in.
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
