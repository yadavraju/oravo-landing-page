import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice Keyboard for Gmail: Dictate Emails 4x Faster | Oravo AI",
  description:
    "Transform email productivity with Oravo's voice keyboard for Gmail. Dictate professional emails, replies & drafts 4x faster than typing. Works in browser & app.",
  keywords: [
    "dictation for gmail",
    "dictate emails in gmail",
    "gmail voice to text",
    "voice typing gmail",
    "gmail speech to text",
    "email dictation software",
    "voice to text email",
    "speak to type gmail",
    "gmail voice keyboard",
    "hands-free email writing",
  ],
  openGraph: {
    title: "Voice Keyboard for Gmail: Dictate Emails 4x Faster | Oravo AI",
    description:
      "Transform email productivity with Oravo's voice keyboard for Gmail. Dictate professional emails 4x faster than typing.",
    url: "https://oravo.ai/voice-keyboard-for-gmail",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Keyboard for Gmail | Oravo AI",
    description:
      "Dictate Gmail emails 4x faster with Oravo's AI voice keyboard. Professional formatting included.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://oravo.ai/voice-keyboard-for-gmail",
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
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EA4335]/10 to-[#EA4335]/20 flex items-center justify-center mb-4">
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
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-b from-[#EA4335] to-[#D33426] flex items-center justify-center">
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
        <span className="font-medium text-[#EA4335]">With Oravo:</span>{" "}
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

export default function VoiceKeyboardForGmailPage() {
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
                          d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
                          fill="#EA4335"
                        />
                      </svg>
                    }
                    text="Gmail Integration"
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Voice Keyboard for Gmail
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  Oravo AI transforms your speech into professionally formatted
                  emails. Compose, reply, and draft in Gmail 4x faster than
                  typing—with perfect punctuation, paragraphs, and professional
                  tone.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/download"
                    className="inline-flex h-14 px-8 bg-gradient-to-b from-[#EA4335] to-[#D33426] text-white text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0px_4px_12px_rgba(234,67,53,0.4)] items-center justify-center"
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
                    Professional formatting
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
                    Works in any browser
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
                    What Oravo Lets You Do in Gmail
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    Transform your email workflow with voice-powered
                    communication
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#EA4335]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    }
                    title="Compose Full Emails by Voice"
                    description="Speak complete emails from greeting to sign-off. Oravo formats paragraphs, adds punctuation, and maintains professional structure."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#EA4335]"
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
                    title="Quick Replies in Seconds"
                    description="Blast through your inbox with voice-dictated replies. Turn 5-minute email responses into 30-second voice messages."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#EA4335]"
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
                    title="Draft Long-Form Emails"
                    description="Create detailed proposals, reports, and communications without typing fatigue. Speak naturally for paragraphs at a time."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#EA4335]"
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
                    title="Multi-Language Emails"
                    description="Speak in your native language and get professionally written English emails. Perfect for international communication."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#EA4335]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    }
                    title="Schedule & Follow-Up Emails"
                    description="Quickly dictate meeting confirmations, follow-ups, and calendar-related communications at speaking speed."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#EA4335]"
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
                    title="Multi-Task While Emailing"
                    description="Review documents, check calendars, or reference other emails while dictating your response—impossible with typing."
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
                    Start Dictating Emails in Gmail
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Professional emails in seconds, not minutes
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-[rgba(55,50,47,0.12)]">
                  <div className="space-y-8">
                    <StepCard
                      number={1}
                      title="Install Oravo"
                      description="Download for Mac, Windows, iOS, or Android. Setup takes 2 minutes with automatic microphone configuration."
                    />
                    <StepCard
                      number={2}
                      title="Open Gmail"
                      description="Access Gmail in any browser—Chrome, Safari, Firefox, Edge. Oravo works identically in all environments."
                    />
                    <StepCard
                      number={3}
                      title="Compose or Reply"
                      description="Click Compose for new emails or Reply on existing threads. Position your cursor in the email body."
                    />
                    <StepCard
                      number={4}
                      title="Press Hotkey & Speak"
                      description="Activate with your hotkey (Cmd/Ctrl + Shift + Space) and speak your email naturally. Include greetings, body, and sign-off."
                    />
                    <StepCard
                      number={5}
                      title="Review & Send"
                      description="Your speech appears as professionally formatted text. Make any quick edits and hit Send—email complete."
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Email Examples Section */}
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
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    }
                    text="Examples"
                  />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                    Voice to Professional Email
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    See how natural speech becomes polished communication
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Example 1 */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[rgba(55,50,47,0.12)]">
                    <div className="mb-4">
                      <span className="text-[#EA4335] text-xs font-semibold uppercase tracking-wide">
                        You speak:
                      </span>
                    </div>
                    <p className="text-[#605A57] text-sm md:text-base italic mb-6 pb-6 border-b border-[rgba(55,50,47,0.08)]">
                      &quot;hi Sarah thanks for the meeting today I wanted to
                      follow up on the budget discussion we can definitely
                      accommodate the fifteen percent increase you mentioned
                      let&apos;s schedule a call next week to finalize the
                      details let me know what works for you best regards&quot;
                    </p>
                    <div className="mb-4">
                      <span className="text-[#22C55E] text-xs font-semibold uppercase tracking-wide">
                        Oravo writes:
                      </span>
                    </div>
                    <div className="bg-[#F7F5F3] rounded-lg p-4 text-[#37322F] text-sm md:text-base">
                      <p className="mb-4">Hi Sarah,</p>
                      <p className="mb-4">
                        Thanks for the meeting today. I wanted to follow up on
                        the budget discussion.
                      </p>
                      <p className="mb-4">
                        We can definitely accommodate the 15% increase you
                        mentioned. Let&apos;s schedule a call next week to
                        finalize the details. Let me know what works for you.
                      </p>
                      <p>Best regards</p>
                    </div>
                  </div>

                  {/* Example 2 */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[rgba(55,50,47,0.12)]">
                    <div className="mb-4">
                      <span className="text-[#EA4335] text-xs font-semibold uppercase tracking-wide">
                        Quick reply - You speak:
                      </span>
                    </div>
                    <p className="text-[#605A57] text-sm md:text-base italic mb-6 pb-6 border-b border-[rgba(55,50,47,0.08)]">
                      &quot;sounds good I&apos;ll have the report ready by
                      Friday let me know if you need anything else&quot;
                    </p>
                    <div className="mb-4">
                      <span className="text-[#22C55E] text-xs font-semibold uppercase tracking-wide">
                        Oravo writes:
                      </span>
                    </div>
                    <div className="bg-[#F7F5F3] rounded-lg p-4 text-[#37322F] text-sm md:text-base">
                      <p>
                        Sounds good! I&apos;ll have the report ready by Friday.
                        Let me know if you need anything else.
                      </p>
                    </div>
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
                    Transform Your Email Workflow
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Real scenarios where Oravo saves hours every week
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <UseCaseCard
                    title="Inbox Zero in Half the Time"
                    scenario="Processing 50+ daily emails"
                    withOravo="Voice-dictate replies at 4x typing speed. Clear your inbox during your morning coffee instead of throughout the day."
                    timeSaved="60%"
                  />

                  <UseCaseCard
                    title="Client Communication"
                    scenario="Detailed responses requiring professional tone"
                    withOravo="Speak thoughtfully while reviewing client history on screen. Produce comprehensive, personalized responses in minutes."
                    result="Higher client satisfaction scores"
                  />

                  <UseCaseCard
                    title="Sales Outreach"
                    scenario="Personalizing outreach emails at scale"
                    withOravo="Research prospect, then dictate personalized email referencing their company, role, and specific pain points. 10 emails in 20 minutes."
                    result="3x more outreach, same time investment"
                  />

                  <UseCaseCard
                    title="Executive Communication"
                    scenario="Busy executives managing heavy email loads"
                    withOravo="Dictate between meetings, during commute, or while reviewing documents. Never fall behind on email."
                    result="Email no longer controls your schedule"
                  />
                </div>
              </div>
            </section>

            {/* Comparison Section */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[700px] mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-[#37322F] text-2xl md:text-3xl font-normal font-serif mb-4">
                    Why Not Google&apos;s Built-In Voice Typing?
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Oravo is purpose-built for professional communication
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[rgba(55,50,47,0.12)]">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#EA4335] flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[#605A57] text-sm md:text-base font-sans">
                        <strong className="text-[#37322F]">
                          98% vs 92% accuracy:
                        </strong>{" "}
                        Oravo&apos;s AI understands context, names, and
                        professional terminology
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#EA4335] flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[#605A57] text-sm md:text-base font-sans">
                        <strong className="text-[#37322F]">
                          Auto-formatting:
                        </strong>{" "}
                        Paragraphs, punctuation, and capitalization happen
                        automatically
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#EA4335] flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[#605A57] text-sm md:text-base font-sans">
                        <strong className="text-[#37322F]">
                          No &quot;comma period new paragraph&quot;:
                        </strong>{" "}
                        Speak naturally, Oravo handles structure
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#EA4335] flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[#605A57] text-sm md:text-base font-sans">
                        <strong className="text-[#37322F]">
                          Removes filler words:
                        </strong>{" "}
                        &quot;Um&quot; and &quot;uh&quot; never appear in your
                        professional emails
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#EA4335] flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[#605A57] text-sm md:text-base font-sans">
                        <strong className="text-[#37322F]">
                          Works everywhere:
                        </strong>{" "}
                        Not just Docs—Gmail, Slack, Notion, and 1000+ other apps
                      </span>
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
                  <FAQItem
                    question="Does Oravo work with Gmail mobile app?"
                    answer="Yes! Oravo works on iOS and Android. Dictate emails on mobile at the same speed and accuracy as desktop—perfect for responding while commuting or away from your desk."
                  />

                  <FAQItem
                    question="Can I dictate the subject line too?"
                    answer="Absolutely. Click into the subject field, press your hotkey, and dictate. Oravo formats subject lines appropriately—capitalized and concise."
                  />

                  <FAQItem
                    question="How does it handle email signatures?"
                    answer="Say 'best regards' or 'thanks' and Oravo formats it properly. For your full signature, Gmail's built-in signature feature adds it automatically when you send."
                  />

                  <FAQItem
                    question="Does it work with Google Workspace?"
                    answer="Yes! Oravo works identically with personal Gmail and Google Workspace (formerly G Suite) accounts. Enterprise security features included."
                  />

                  <FAQItem
                    question="Can I dictate while viewing another email?"
                    answer="Yes! Open the email you're referencing in one tab, compose in another, and dictate while reading. Multi-tasking that's impossible with typing."
                  />

                  <FAQItem
                    question="What about confidential emails?"
                    answer="Oravo processes voice locally and transmits only for transcription with enterprise-grade encryption. SOC 2 Type II certified, HIPAA-ready, GDPR compliant. Your emails stay private."
                  />
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 md:px-12 py-16 md:py-20">
              <div className="max-w-[700px] mx-auto text-center">
                <div className="bg-gradient-to-br from-[#EA4335] to-[#D33426] rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(234,67,53,0.3)]">
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">
                    Transform Your Gmail Productivity
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                    Stop typing emails. Start speaking them. Compose, reply, and
                    draft 4x faster with professional formatting every time.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link
                      href="/download"
                      className="inline-flex h-14 px-8 bg-white hover:bg-gray-50 text-[#EA4335] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg items-center justify-center"
                    >
                      Start Free Trial
                    </Link>
                  </div>

                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm">
                    <span>No credit card required</span>
                    <span>•</span>
                    <span>2-minute setup</span>
                    <span>•</span>
                    <span>Professional formatting</span>
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
