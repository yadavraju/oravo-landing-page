import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice Keyboard for Google Docs: Dictate Documents 4x Faster | Oravo AI",
  description:
    "Transform Google Docs productivity with Oravo's voice keyboard. Dictate documents, reports & content 4x faster than typing. Better than built-in voice typing.",
  keywords: [
    "google docs voice typing alternative",
    "docs voice to text",
    "voice typing google docs",
    "dictate google docs",
    "google docs speech to text",
    "google docs dictation",
    "speak to text google docs",
    "google docs voice input",
    "hands-free google docs",
    "voice to google docs",
  ],
  openGraph: {
    title: "Voice Keyboard for Google Docs: Dictate Documents 4x Faster | Oravo AI",
    description:
      "Transform Google Docs productivity with Oravo's voice keyboard. Dictate documents 4x faster than typing.",
    url: "https://oravo.ai/voice-keyboard-for-google-docs",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Keyboard for Google Docs | Oravo AI",
    description:
      "Dictate Google Docs 4x faster with Oravo's AI voice keyboard. Better than built-in voice typing.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://oravo.ai/voice-keyboard-for-google-docs",
  },
};

// Badge component
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

// Feature Card Component
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
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4285F4]/10 to-[#4285F4]/20 flex items-center justify-center mb-4">
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

// Step Card Component
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
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-b from-[#4285F4] to-[#3367D6] flex items-center justify-center">
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

// Comparison Row Component
function ComparisonRow({
  feature,
  oravo,
  google,
}: {
  feature: string;
  oravo: string;
  google: string;
}) {
  return (
    <div className="grid grid-cols-3 gap-4 py-4 border-b border-[rgba(55,50,47,0.08)] last:border-b-0">
      <div className="text-[#37322F] text-sm font-medium font-sans">
        {feature}
      </div>
      <div className="text-[#22C55E] text-sm font-sans flex items-center gap-2">
        <svg
          className="w-4 h-4 flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        {oravo}
      </div>
      <div className="text-[#847971] text-sm font-sans">{google}</div>
    </div>
  );
}

// Use Case Card Component
function UseCaseCard({
  title,
  scenario,
  withOravo,
  result,
}: {
  title: string;
  scenario?: string;
  withOravo: string;
  result?: string;
}) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[rgba(55,50,47,0.12)]">
      <h4 className="text-[#37322F] text-lg font-semibold font-sans mb-4">
        {title}
      </h4>
      {scenario && (
        <p className="text-[#847971] text-sm font-sans mb-3">
          <span className="font-medium">Scenario:</span> {scenario}
        </p>
      )}
      <p className="text-[#605A57] text-sm leading-relaxed font-sans mb-3">
        <span className="font-medium text-[#4285F4]">With Oravo:</span>{" "}
        {withOravo}
      </p>
      {result && (
        <p className="text-[#22C55E] text-sm font-medium font-sans">
          Result: {result}
        </p>
      )}
    </div>
  );
}

// FAQ Item Component
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

export default function VoiceKeyboardForGoogleDocsPage() {
  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-1 w-full mt-20 md:mt-24 lg:mt-28 relative z-10">
            {/* Hero Section */}
            <section className="px-6 md:px-12 py-12 md:py-20 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <Badge
                    icon={
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727h-6zm0 10.91H7.273v-1.455h7.454v1.454zm2.182-2.91H7.273v-1.454h9.636v1.454zm0-2.909H7.273v-1.454h9.636v1.454zM14.727 6h5.455l-5.455-5.455V6z"
                          fill="#4285F4"
                        />
                      </svg>
                    }
                    text="Google Docs Integration"
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Voice Keyboard for Google Docs
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  Oravo AI delivers 98%+ accuracy voice-to-text in Google
                  Docs—far beyond built-in voice typing. Write documents,
                  reports, and content 4x faster with automatic punctuation and
                  natural formatting.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/download"
                    className="inline-flex h-14 px-8 bg-gradient-to-b from-[#4285F4] to-[#3367D6] text-white text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0px_4px_12px_rgba(66,133,244,0.4)] items-center justify-center"
                  >
                    Start Free Trial
                  </Link>
                  <Link
                    href="/how-to-use"
                    className="inline-flex h-14 px-8 bg-white border border-[#E0DEDB] text-[#37322F] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#F7F5F3] items-center justify-center"
                  >
                    See How It Works
                  </Link>
                </div>

                {/* Trust Badges */}
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
                    98%+ accuracy
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
                    Auto-punctuation
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
                    Better than built-in
                  </span>
                </div>
              </div>
            </section>

            {/* Comparison Section - Above the fold for SEO */}
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
                        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    }
                    text="Comparison"
                  />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                    Why Oravo Beats Google&apos;s Voice Typing
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Google Docs has built-in voice typing—but it has significant
                    limitations
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[rgba(55,50,47,0.12)]">
                  {/* Header Row */}
                  <div className="grid grid-cols-3 gap-4 pb-4 border-b border-[rgba(55,50,47,0.12)] mb-4">
                    <div className="text-[#37322F] text-sm font-semibold font-sans">
                      Feature
                    </div>
                    <div className="text-[#4285F4] text-sm font-semibold font-sans">
                      Oravo AI
                    </div>
                    <div className="text-[#847971] text-sm font-semibold font-sans">
                      Google Voice Typing
                    </div>
                  </div>

                  <ComparisonRow
                    feature="Accuracy"
                    oravo="98%+ with AI context"
                    google="~90% with frequent errors"
                  />
                  <ComparisonRow
                    feature="Punctuation"
                    oravo="Automatic, natural"
                    google='Manual ("comma", "period")'
                  />
                  <ComparisonRow
                    feature="Filler Words"
                    oravo='Removes "um", "uh"'
                    google="Transcribes everything"
                  />
                  <ComparisonRow
                    feature="Paragraphs"
                    oravo="Auto-detected from speech"
                    google='Say "new paragraph"'
                  />
                  <ComparisonRow
                    feature="Works In"
                    oravo="1000+ apps (universal)"
                    google="Google Docs only"
                  />
                  <ComparisonRow
                    feature="Technical Terms"
                    oravo="Learns your vocabulary"
                    google="Generic dictionary"
                  />
                </div>

                <div className="mt-6 bg-[#EFF6FF] border-l-4 border-[#4285F4] rounded-lg p-4">
                  <p className="text-[#1E3A8A] text-sm font-sans">
                    <strong>Key difference:</strong> Google&apos;s voice typing
                    requires you to speak punctuation commands. Oravo lets you
                    speak naturally and adds punctuation intelligently.
                  </p>
                </div>
              </div>
            </section>

            {/* What You Can Do Section */}
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
                    text="Features"
                  />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                    What Oravo Lets You Do in Google Docs
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    Professional document creation at the speed of speech
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#4285F4]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    }
                    title="Write Full Documents"
                    description="Dictate entire documents—reports, proposals, articles—with proper paragraphs, punctuation, and professional formatting."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#4285F4]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    }
                    title="First Drafts at Thinking Speed"
                    description="Get ideas out of your head 4x faster. Speak your thoughts naturally and refine the written version—much faster than typing from scratch."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#4285F4]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                    }
                    title="Comments & Suggestions"
                    description="Add document comments by voice. Review and provide feedback at speaking speed without typing lengthy explanations."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#4285F4]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                        />
                      </svg>
                    }
                    title="Multi-Language Documents"
                    description="Create content in any of 100+ languages. Speak in your native language and get professionally formatted text in any language."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#4285F4]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                    }
                    title="Reference While Writing"
                    description="Keep research tabs open while dictating your document. Multi-task in ways impossible with keyboard typing."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#4285F4]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    }
                    title="Reduce Typing Fatigue"
                    description="Long documents no longer mean hours of typing. Speak naturally and let Oravo handle the transcription and formatting."
                  />
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
                    Start Voice Typing in Google Docs
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Better than built-in, ready in minutes
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-[rgba(55,50,47,0.12)]">
                  <div className="space-y-8">
                    <StepCard
                      number={1}
                      title="Install Oravo"
                      description="Download for Mac, Windows, iOS, or Android. 2-minute setup, works instantly—no training required."
                    />
                    <StepCard
                      number={2}
                      title="Open Google Docs"
                      description="Create a new document or open an existing one in any browser. Oravo works with all Google Workspace accounts."
                    />
                    <StepCard
                      number={3}
                      title="Position Your Cursor"
                      description="Click where you want to write in your document—anywhere in the body, headers, footers, or comments."
                    />
                    <StepCard
                      number={4}
                      title="Press Hotkey & Speak"
                      description="Use your customizable hotkey and speak naturally. Don't worry about punctuation commands—Oravo handles it."
                    />
                    <StepCard
                      number={5}
                      title="See Professional Text"
                      description="Your speech transforms into properly formatted text with punctuation, capitalization, and natural paragraph breaks."
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Use Cases Section */}
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
                        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                    text="Use Cases"
                  />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                    Transform Your Writing Workflow
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Real scenarios where voice typing accelerates productivity
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <UseCaseCard
                    title="Content Writers & Bloggers"
                    scenario="Creating 2,000+ word articles regularly"
                    withOravo="Speak your first draft at thinking speed. A 2,000-word article draft in 15 minutes instead of 2 hours of typing."
                    result="4x more content output, same time investment"
                  />

                  <UseCaseCard
                    title="Business Reports"
                    scenario="Weekly status reports and project documentation"
                    withOravo="Dictate comprehensive reports while reviewing data on screen. Thorough documentation without the typing burden."
                    result="Reports that actually get written on time"
                  />

                  <UseCaseCard
                    title="Academic Writing"
                    scenario="Research papers, dissertations, thesis chapters"
                    withOravo="Speak your analysis while referencing sources. Get ideas into the document before you forget them."
                    result="Break through writer's block with voice"
                  />

                  <UseCaseCard
                    title="Meeting Minutes"
                    scenario="Documenting meeting decisions and action items"
                    withOravo="Dictate comprehensive meeting notes immediately post-meeting while details are fresh. No more delayed or forgotten documentation."
                    result="Meeting notes done before the next meeting"
                  />
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
                  <FAQItem
                    question="Why use Oravo if Google Docs has built-in voice typing?"
                    answer="Google's voice typing requires speaking punctuation commands ('comma', 'period', 'new paragraph') and has ~90% accuracy. Oravo offers 98%+ accuracy with automatic punctuation—speak naturally and get professionally formatted text."
                  />

                  <FAQItem
                    question="Does Oravo work with Google Workspace accounts?"
                    answer="Yes! Oravo works with personal Google accounts and all Google Workspace (formerly G Suite) tiers. No special setup or permissions required."
                  />

                  <FAQItem
                    question="Can I use this for collaborative documents?"
                    answer="Absolutely. Oravo works in any Google Doc, including shared documents. Your voice-dictated text appears just like typed text—collaborators can't tell the difference."
                  />

                  <FAQItem
                    question="How do I add headings or formatting?"
                    answer="Oravo focuses on getting your content transcribed accurately. For headings and formatting, use Google Docs' built-in formatting after dictating, or say 'heading' and Oravo will format it accordingly."
                  />

                  <FAQItem
                    question="Will it work with Google Docs on mobile?"
                    answer="Yes! Oravo works on iOS and Android. Dictate into Google Docs mobile app at the same speed and accuracy as desktop."
                  />

                  <FAQItem
                    question="Can I dictate in languages other than English?"
                    answer="Yes! Oravo supports 100+ languages. Create documents in any language, or speak in your native language and translate to English."
                  />
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 md:px-12 py-16 md:py-20">
              <div className="max-w-[700px] mx-auto text-center">
                <div className="bg-gradient-to-br from-[#4285F4] to-[#3367D6] rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(66,133,244,0.3)]">
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">
                    Upgrade Your Google Docs Experience
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                    Stop fighting with built-in voice typing. Get 98%+ accuracy,
                    automatic punctuation, and natural formatting—write
                    documents 4x faster.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link
                      href="/download"
                      className="inline-flex h-14 px-8 bg-white hover:bg-gray-50 text-[#4285F4] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg items-center justify-center"
                    >
                      Start Free Trial
                    </Link>
                  </div>

                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm">
                    <span>No credit card required</span>
                    <span>•</span>
                    <span>2-minute setup</span>
                    <span>•</span>
                    <span>Better than built-in</span>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* Footer */}
          <FooterSection />
        </div>
      </div>
    </div>
  );
}
