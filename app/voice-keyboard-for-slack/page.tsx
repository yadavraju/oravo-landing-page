import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice Keyboard for Slack: 4x Faster Messages | Oravo AI",
  description:
    "Transform Slack communication with Oravo's voice keyboard. Dictate messages, threads & channels 4x faster than typing. Works in browser & desktop app.",
  keywords: [
    "slack voice to text",
    "voice keyboard for slack",
    "dictate slack messages",
    "slack speech to text",
    "voice typing slack",
    "slack voice dictation",
    "speak to text slack",
    "voice messages slack",
    "slack voice input",
    "hands-free slack messaging",
  ],
  openGraph: {
    title: "Voice Keyboard for Slack: 4x Faster Messages | Oravo AI",
    description:
      "Transform Slack communication with Oravo's voice keyboard. Dictate messages, threads & channels 4x faster than typing.",
    url: "https://oravo.ai/voice-keyboard-for-slack",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Keyboard for Slack | Oravo AI",
    description:
      "Dictate Slack messages 4x faster with Oravo's AI voice keyboard. Works in browser & desktop app.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://oravo.ai/voice-keyboard-for-slack",
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
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1877F2]/10 to-[#166FE5]/10 flex items-center justify-center mb-4">
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
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-b from-[#1877F2] to-[#166FE5] flex items-center justify-center">
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
  osVoice,
}: {
  feature: string;
  oravo: string;
  osVoice: string;
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
      <div className="text-[#847971] text-sm font-sans">{osVoice}</div>
    </div>
  );
}

// Use Case Card Component
function UseCaseCard({
  title,
  scenario,
  withOravo,
  result,
  timeSaved,
}: {
  title: string;
  scenario?: string;
  withOravo: string;
  result?: string;
  timeSaved?: string;
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
        <span className="font-medium text-[#1877F2]">With Oravo:</span>{" "}
        {withOravo}
      </p>
      {result && (
        <p className="text-[#22C55E] text-sm font-medium font-sans">
          Result: {result}
        </p>
      )}
      {timeSaved && (
        <div className="mt-3 inline-block px-3 py-1 bg-[#22C55E]/10 rounded-full">
          <span className="text-[#22C55E] text-xs font-semibold">
            Time saved: {timeSaved}
          </span>
        </div>
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

// Pricing Card Component
function PricingCard({
  name,
  price,
  period,
  description,
  features,
  isPopular,
  ctaText,
  ctaHref,
}: {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaHref: string;
}) {
  return (
    <div
      className={`relative bg-white rounded-2xl p-6 md:p-8 border ${
        isPopular
          ? "border-[#1877F2] shadow-[0px_8px_32px_rgba(24,119,242,0.15)]"
          : "border-[rgba(55,50,47,0.12)]"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-[#1877F2] to-[#166FE5] rounded-full">
          <span className="text-white text-xs font-semibold">Most Popular</span>
        </div>
      )}
      <h4 className="text-[#37322F] text-xl font-semibold font-sans mb-1">
        {name}
      </h4>
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-[#37322F] text-3xl font-bold font-sans">
          {price}
        </span>
        {period && (
          <span className="text-[#847971] text-sm font-sans">{period}</span>
        )}
      </div>
      <p className="text-[#605A57] text-sm font-sans mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <svg
              className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-[#605A57] text-sm font-sans">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className={`w-full inline-flex h-12 justify-center items-center rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
          isPopular
            ? "bg-gradient-to-b from-[#1877F2] to-[#166FE5] text-white shadow-[0px_4px_12px_rgba(24,119,242,0.4)]"
            : "bg-white border border-[#E0DEDB] text-[#37322F] hover:bg-[#F7F5F3]"
        }`}
      >
        {ctaText}
      </Link>
    </div>
  );
}

export default function VoiceKeyboardForSlackPage() {
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
                          d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.124 2.521a2.528 2.528 0 0 1 2.52-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.52V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.166 0a2.528 2.528 0 0 1 2.521 2.522v6.312zm-2.521 10.124a2.528 2.528 0 0 1 2.521 2.52A2.528 2.528 0 0 1 15.166 24a2.528 2.528 0 0 1-2.521-2.522v-2.52h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.312A2.528 2.528 0 0 1 24 15.166a2.528 2.528 0 0 1-2.522 2.521h-6.312z"
                          fill="#E01E5A"
                        />
                      </svg>
                    }
                    text="Slack Integration"
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Voice Keyboard for Slack
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  Oravo AI turns your speech into accurate, formatted Slack
                  messages in seconds across channels, threads, and DMs. 4x
                  faster than typing while maintaining the conversational tone
                  Slack teams expect.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/download"
                    className="inline-flex h-14 px-8 bg-gradient-to-b from-[#1877F2] to-[#166FE5] text-white text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0px_4px_12px_rgba(24,119,242,0.4)] items-center justify-center"
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
                    No credit card required
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
                    2-minute setup
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
                    What Oravo Lets You Do in Slack
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    Transform your Slack workflow with voice-powered
                    communication
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#1877F2]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    }
                    title="Dictate Messages in Any Channel"
                    description="Speak complete messages, paragraphs, or quick updates and see them appear as formatted text instantly. Oravo removes filler words automatically."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#1877F2]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                        />
                      </svg>
                    }
                    title="Respond to Threads Faster"
                    description="Keep up with busy thread conversations by speaking your responses. Perfect for technical discussions, project updates, or brainstorming sessions."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#1877F2]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                        />
                      </svg>
                    }
                    title="Send DMs at Speaking Speed"
                    description="Handle one-on-one conversations 4x faster. Provide detailed explanations, share feedback, or coordinate with teammates effortlessly."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#1877F2]"
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
                    title="Write Long-Form Posts"
                    description="Create comprehensive project updates, announcements, or documentation without typing fatigue. Speak naturally and Oravo handles formatting."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#1877F2]"
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
                    title="Multi-Task While Messaging"
                    description="Review documents, reference code, or watch presentations while dictating Slack messages—impossible with typing but natural with voice."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#1877F2]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    }
                    title="Works in Browser & Desktop"
                    description="Oravo integrates seamlessly with Slack in Chrome, Safari, Firefox, Edge, and the native desktop app on Mac and Windows."
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
                    Start Voice Typing in Slack
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Get up and running in under 2 minutes
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-[rgba(55,50,47,0.12)]">
                  <div className="space-y-8">
                    <StepCard
                      number={1}
                      title="Install Oravo AI"
                      description="Download Oravo for Mac, Windows, iOS, or Android. Setup takes 2 minutes with automatic microphone configuration."
                    />
                    <StepCard
                      number={2}
                      title="Open Slack"
                      description="Launch Slack in your preferred environment—web browser or native desktop application. Oravo works identically in both."
                    />
                    <StepCard
                      number={3}
                      title="Position Your Cursor"
                      description="Click into any Slack message box, thread reply field, channel post, or DM conversation."
                    />
                    <StepCard
                      number={4}
                      title="Press Your Hotkey and Speak"
                      description="Activate Oravo with your customizable hotkey (default: Cmd/Ctrl + Shift + Space). Speak naturally at conversational speed."
                    />
                    <StepCard
                      number={5}
                      title="Watch Your Message Appear"
                      description="Your speech transforms into formatted text in real-time. Oravo adds punctuation, capitalizes properly, and structures paragraphs—ready to send."
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Comparison Section */}
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
                    Why Oravo Beats Built-In Voice Features
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Slack doesn&apos;t offer built-in voice-to-text. OS-level
                    dictation has limitations.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[rgba(55,50,47,0.12)]">
                  {/* Header Row */}
                  <div className="grid grid-cols-3 gap-4 pb-4 border-b border-[rgba(55,50,47,0.12)] mb-4">
                    <div className="text-[#37322F] text-sm font-semibold font-sans">
                      Feature
                    </div>
                    <div className="text-[#1877F2] text-sm font-semibold font-sans">
                      Oravo AI
                    </div>
                    <div className="text-[#847971] text-sm font-semibold font-sans">
                      OS Voice Typing
                    </div>
                  </div>

                  <ComparisonRow
                    feature="Accuracy"
                    oravo="98%+ with context-aware AI"
                    osVoice="90-92% with frequent errors"
                  />
                  <ComparisonRow
                    feature="Formatting"
                    oravo="Automatic punctuation & paragraphs"
                    osVoice='Manual ("comma", "period")'
                  />
                  <ComparisonRow
                    feature="Filler Words"
                    oravo='Removes "um", "uh" automatically'
                    osVoice="Transcribes everything"
                  />
                  <ComparisonRow
                    feature="Technical Terms"
                    oravo="Learns your vocabulary"
                    osVoice="Requires voice training"
                  />
                  <ComparisonRow
                    feature="Cross-Platform"
                    oravo="Mac, Windows, iOS, Android"
                    osVoice="Platform-dependent quality"
                  />
                  <ComparisonRow
                    feature="Setup Time"
                    oravo="Works instantly"
                    osVoice="Often needs training"
                  />
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
                    Transform Your Slack Workflow
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Real scenarios where Oravo saves hours every week
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <UseCaseCard
                    title="Quick Status Updates"
                    withOravo='"Morning team! Finished the API integration. Tests passing, ready for review."'
                    timeSaved="80%"
                  />

                  <UseCaseCard
                    title="Technical Explanations"
                    scenario="Explaining a technical decision in an engineering channel"
                    withOravo="Speak conversationally while referencing documentation on another screen. Complete technical explanation in 45 seconds vs 5+ minutes typing."
                    result="8x faster with more detail"
                  />

                  <UseCaseCard
                    title="Remote Team Coordination"
                    scenario="Managing distributed team across time zones"
                    withOravo="Provide detailed context, reasoning, and instructions in voice speed—critical for async communication where thoroughness prevents confusion."
                    result="Team receives complete information first time"
                  />

                  <UseCaseCard
                    title="Customer Support"
                    scenario="Technical support team using Slack Connect"
                    withOravo="Respond to customer questions comprehensively and professionally at speaking speed—improving response time and satisfaction."
                    result="4.7/5 satisfaction vs 4.2/5"
                  />
                </div>
              </div>
            </section>

            {/* Slack-Specific Features */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-12">
                  <Badge
                    icon={
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="#E01E5A"
                      >
                        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" />
                      </svg>
                    }
                    text="Slack Features"
                  />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                    Slack-Specific Capabilities
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-[rgba(55,50,47,0.12)]">
                    <h4 className="text-[#37322F] text-lg font-semibold font-sans mb-2">
                      Emoji Integration
                    </h4>
                    <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                      Say &quot;thumbs up emoji&quot; or &quot;fire emoji&quot;
                      and Oravo transcribes the shortcode (:thumbs_up:, :fire:)
                      that Slack converts automatically.
                    </p>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-[rgba(55,50,47,0.12)]">
                    <h4 className="text-[#37322F] text-lg font-semibold font-sans mb-2">
                      @Mentions & #Channels
                    </h4>
                    <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                      Speak &quot;at mention Sarah&quot; or &quot;hashtag
                      engineering channel&quot; and Oravo formats proper Slack
                      syntax (@Sarah, #engineering).
                    </p>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-[rgba(55,50,47,0.12)]">
                    <h4 className="text-[#37322F] text-lg font-semibold font-sans mb-2">
                      Markdown Formatting
                    </h4>
                    <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                      Dictate &quot;bold important deadline bold&quot; to get
                      *important deadline*. Say &quot;code block&quot; for
                      inline code formatting.
                    </p>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-[rgba(55,50,47,0.12)]">
                    <h4 className="text-[#37322F] text-lg font-semibold font-sans mb-2">
                      Multi-Language Support
                    </h4>
                    <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                      Switch seamlessly between languages. Dictate English, then
                      Spanish for international teammates—Oravo handles 100+
                      languages.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Security Section */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[700px] mx-auto">
                <div className="text-center mb-8">
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
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    }
                    text="Security"
                  />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                    Enterprise-Grade Security
                  </h2>
                </div>

                <div className="bg-gradient-to-br from-[#1877F2] to-[#166FE5] rounded-3xl p-8 md:p-10">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-white font-semibold mb-1">
                        SOC 2 Type II
                      </h4>
                      <p className="text-white/80 text-sm">
                        Enterprise security certified
                      </p>
                    </div>
                    <div>
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                      </div>
                      <h4 className="text-white font-semibold mb-1">
                        HIPAA Ready
                      </h4>
                      <p className="text-white/80 text-sm">
                        Healthcare-safe processing
                      </p>
                    </div>
                    <div>
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                          />
                        </svg>
                      </div>
                      <h4 className="text-white font-semibold mb-1">
                        GDPR Compliant
                      </h4>
                      <p className="text-white/80 text-sm">
                        EU privacy adherence
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="flex flex-col sm:flex-row justify-center gap-4 text-center text-white/90 text-sm">
                      <span>No permanent voice storage</span>
                      <span className="hidden sm:inline">•</span>
                      <span>Encrypted transmission</span>
                      <span className="hidden sm:inline">•</span>
                      <span>Zero training on your data</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing Section */}
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
                        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    }
                    text="Pricing"
                  />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                    Plans for Every Slack Team
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <PricingCard
                    name="Starter"
                    price="Free"
                    description="Perfect for trying Oravo with Slack"
                    features={[
                      "2,000 words per week",
                      "Instant dictation",
                      "Smart formatting",
                      "Works in all apps",
                      "100+ languages",
                    ]}
                    ctaText="Start Free"
                    ctaHref="/download"
                  />

                  <PricingCard
                    name="Professional"
                    price="$9.99"
                    period="/month"
                    description="For Slack power users"
                    features={[
                      "Unlimited words",
                      "Smart memory of writing style",
                      "Advanced voice commands",
                      "Custom macros & shortcuts",
                      "Priority support",
                    ]}
                    isPopular={true}
                    ctaText="Start Free Trial"
                    ctaHref="/download"
                  />

                  <PricingCard
                    name="Enterprise"
                    price="$8.99"
                    period="/user/month"
                    description="For teams using Slack"
                    features={[
                      "Everything in Professional",
                      "Centralized billing",
                      "Admin controls",
                      "SSO & security compliance",
                      "Dedicated account manager",
                    ]}
                    ctaText="Contact Sales"
                    ctaHref="mailto:sales@oravo.ai"
                  />
                </div>

                <div className="mt-8 bg-[#F7F5F3] rounded-xl p-6 text-center">
                  <p className="text-[#605A57] text-sm font-sans">
                    <span className="font-semibold text-[#37322F]">
                      ROI for Teams:
                    </span>{" "}
                    A 10-person team saving 1 hour daily = $125,000 annually.
                    Oravo costs $1,079/year.{" "}
                    <span className="text-[#1877F2] font-semibold">
                      116x return on investment.
                    </span>
                  </p>
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
                    question="Does Oravo work in the Slack desktop app or just the browser?"
                    answer="Oravo works perfectly in both the Slack desktop application (Mac and Windows) and all web browsers (Chrome, Safari, Firefox, Edge, Arc). You get consistent voice dictation experience regardless of how you access Slack."
                  />

                  <FAQItem
                    question="Can I use voice dictation in Slack on mobile?"
                    answer="Yes! Oravo works on iOS (iPhone and iPad) and Android devices. Dictate Slack messages on mobile at the same speed and accuracy as desktop—perfect for responding while traveling."
                  />

                  <FAQItem
                    question="Will my teammates hear my voice or see that I'm using dictation?"
                    answer="No. Only the transcribed text appears in Slack—exactly as if you typed it. Voice dictation is completely invisible to your teammates."
                  />

                  <FAQItem
                    question="How accurate is Oravo for technical Slack discussions?"
                    answer="Oravo achieves 98%+ accuracy and recognizes technical terminology including programming languages, framework names, API terms, and architectural concepts. Add your company-specific vocabulary for 99%+ accuracy."
                  />

                  <FAQItem
                    question="Does Oravo work in Slack threads?"
                    answer="Yes, Oravo works identically in main channel messages, threaded replies, DMs, and any Slack text input field. Position your cursor and dictate—Oravo transcribes wherever you want to type."
                  />

                  <FAQItem
                    question="How does Oravo handle Slack emoji and formatting?"
                    answer='Speak naturally: "thumbs up emoji" becomes :thumbs_up:, "bold deadline bold" becomes *deadline*, "at mention John" becomes @John. Oravo understands Slack formatting syntax.'
                  />

                  <FAQItem
                    question="Is Oravo faster than Slack's voice message feature?"
                    answer="Different use cases. Slack voice messages require recipients to listen to audio. Oravo creates text messages 4x faster than typing—giving you speed benefits without forcing recipients to listen to recordings."
                  />
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 md:px-12 py-16 md:py-20">
              <div className="max-w-[700px] mx-auto text-center">
                <div className="bg-gradient-to-br from-[#1877F2] to-[#166FE5] rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(24,119,242,0.3)]">
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">
                    Try Oravo Voice Keyboard in Slack Today
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                    Transform your Slack productivity. Speak naturally and
                    communicate 4x faster than typing across channels, threads,
                    and DMs.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link
                      href="/download"
                      className="inline-flex h-14 px-8 bg-white hover:bg-gray-50 text-[#1877F2] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg items-center justify-center"
                    >
                      Start Free Trial
                    </Link>
                  </div>

                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm">
                    <span>No credit card required</span>
                    <span>•</span>
                    <span>2-minute setup</span>
                    <span>•</span>
                    <span>98%+ accuracy</span>
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
