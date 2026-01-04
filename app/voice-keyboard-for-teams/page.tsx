import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice Keyboard for Microsoft Teams: 4x Faster Messages | Oravo AI",
  description:
    "Transform Teams communication with Oravo's voice keyboard. Dictate messages, chat & meetings 4x faster than typing. Works in desktop app & browser.",
  keywords: [
    "teams speech to text",
    "microsoft teams voice to text",
    "voice typing teams",
    "dictate teams messages",
    "teams voice keyboard",
    "teams dictation",
    "speak to text teams",
    "ms teams voice input",
    "hands-free teams messaging",
    "teams voice dictation",
  ],
  openGraph: {
    title: "Voice Keyboard for Microsoft Teams: 4x Faster Messages | Oravo AI",
    description:
      "Transform Teams communication with Oravo's voice keyboard. Dictate messages 4x faster than typing.",
    url: "https://oravo.ai/voice-keyboard-for-teams",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Keyboard for Microsoft Teams | Oravo AI",
    description:
      "Dictate Teams messages 4x faster with Oravo's AI voice keyboard. Works in desktop & browser.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://oravo.ai/voice-keyboard-for-teams",
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
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6264A7]/10 to-[#6264A7]/20 flex items-center justify-center mb-4">
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
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-b from-[#6264A7] to-[#505298] flex items-center justify-center">
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
        <span className="font-medium text-[#6264A7]">With Oravo:</span>{" "}
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

export default function VoiceKeyboardForTeamsPage() {
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
                        fill="#6264A7"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.625 6.188a2.062 2.062 0 1 0 0-4.125 2.062 2.062 0 0 0 0 4.125zm-5.063.437a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5zm5.063 1.75h-2.75a2.75 2.75 0 0 0-2.563 1.75h-2.062v-1.5a3.437 3.437 0 0 0-3.438-3.438H5.5A3.437 3.437 0 0 0 2.062 8.625v6.188a.688.688 0 0 0 .688.687h3.438v4.125a.688.688 0 0 0 .687.688h6.188a.688.688 0 0 0 .687-.688V15.5h1.375a2.75 2.75 0 0 0 2.75-2.75v-1.625h2.75a.687.687 0 0 0 .688-.688v-1.374a.687.687 0 0 0-.688-.688z" />
                      </svg>
                    }
                    text="Teams Integration"
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Voice Keyboard for Microsoft Teams
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  Oravo AI transforms your speech into professionally formatted
                  Teams messages. Chat, collaborate, and communicate 4x faster
                  than typing—in channels, meetings, and direct messages.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/download"
                    className="inline-flex h-14 px-8 bg-gradient-to-b from-[#6264A7] to-[#505298] text-white text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0px_4px_12px_rgba(98,100,167,0.4)] items-center justify-center"
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
                    Enterprise ready
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
                    Works with M365
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
                    What Oravo Lets You Do in Teams
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    Transform your Microsoft 365 workflow with voice-powered
                    communication
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#6264A7]"
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
                    title="Chat in Any Channel"
                    description="Speak messages to team channels without stopping your work. Oravo transcribes instantly with perfect formatting and professional tone."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#6264A7]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    }
                    title="Meeting Chat Participation"
                    description="Send chat messages during meetings without unmuting. Dictate questions, comments, and links while staying focused on the presenter."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#6264A7]"
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
                    title="Direct Messages Fast"
                    description="Handle 1:1 and group chats 4x faster. Perfect for quick coordination, follow-ups, and collaborative discussions."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#6264A7]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    }
                    title="Project Updates"
                    description="Dictate comprehensive status updates, task summaries, and project communications. Speak naturally and let Oravo structure your message."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#6264A7]"
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
                    title="Reply to Threads"
                    description="Keep up with active threads by speaking your responses. Perfect for technical discussions and collaborative problem-solving."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#6264A7]"
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
                    title="Desktop & Browser"
                    description="Oravo works seamlessly with Teams desktop app and web app. Same voice-to-text experience across all environments."
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
                    Start Voice Typing in Teams
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Enterprise-ready voice typing in minutes
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-[rgba(55,50,47,0.12)]">
                  <div className="space-y-8">
                    <StepCard
                      number={1}
                      title="Install Oravo"
                      description="Download for Mac, Windows, iOS, or Android. IT-approved installation with enterprise security compliance."
                    />
                    <StepCard
                      number={2}
                      title="Open Microsoft Teams"
                      description="Launch Teams desktop app or access via browser. Oravo works identically in both environments."
                    />
                    <StepCard
                      number={3}
                      title="Click into Any Chat"
                      description="Position your cursor in any channel, DM, thread, or meeting chat where you want to type."
                    />
                    <StepCard
                      number={4}
                      title="Press Hotkey & Speak"
                      description="Use your customizable hotkey (Cmd/Ctrl + Shift + Space) and speak your message naturally."
                    />
                    <StepCard
                      number={5}
                      title="Send Professional Messages"
                      description="Your speech appears as formatted text with proper punctuation and structure—ready to send."
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
                    Transform Your Teams Workflow
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Real enterprise scenarios where Oravo saves hours
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <UseCaseCard
                    title="Meeting Multitasking"
                    scenario="Participating in back-to-back Teams meetings"
                    withOravo="Send meeting chat messages, ask questions, and share links by voice without disrupting the flow or unmuting. Stay engaged while contributing."
                    result="Active participation in every meeting"
                  />

                  <UseCaseCard
                    title="Cross-Team Coordination"
                    scenario="Managing communications across multiple channels"
                    withOravo="Quickly respond to different team channels with detailed, contextual messages. No more shallow responses due to typing time constraints."
                    result="4x more responsive team communication"
                  />

                  <UseCaseCard
                    title="Remote Team Management"
                    scenario="Leading distributed teams across time zones"
                    withOravo="Provide thorough context, instructions, and feedback in async messages. Voice speed means better documentation for team members in different time zones."
                    result="Clearer async communication, fewer follow-ups"
                  />

                  <UseCaseCard
                    title="IT Support Responses"
                    scenario="Help desk handling technical queries in Teams"
                    withOravo="Dictate detailed technical explanations and step-by-step instructions while referencing documentation. Comprehensive support at speaking speed."
                    result="Higher first-contact resolution rate"
                  />
                </div>
              </div>
            </section>

            {/* Enterprise Features */}
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
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    }
                    text="Enterprise Ready"
                  />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                    Built for Enterprise Security
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Security and compliance for Microsoft 365 environments
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#6264A7] to-[#505298] rounded-3xl p-8 md:p-10">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-8">
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
                        Enterprise audit certified
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
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-white font-semibold mb-1">
                        SSO Support
                      </h4>
                      <p className="text-white/80 text-sm">
                        Azure AD integration
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
                        EU data protection
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-white/20">
                    <div className="flex items-center gap-3 text-white/90 text-sm">
                      <svg
                        className="w-5 h-5 text-white flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      No permanent voice storage
                    </div>
                    <div className="flex items-center gap-3 text-white/90 text-sm">
                      <svg
                        className="w-5 h-5 text-white flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Encrypted end-to-end
                    </div>
                    <div className="flex items-center gap-3 text-white/90 text-sm">
                      <svg
                        className="w-5 h-5 text-white flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Admin deployment controls
                    </div>
                    <div className="flex items-center gap-3 text-white/90 text-sm">
                      <svg
                        className="w-5 h-5 text-white flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Zero training on your data
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
                    question="Does Oravo work with the Teams desktop app?"
                    answer="Yes! Oravo works perfectly with both the Microsoft Teams desktop app and the web version. You get the same voice-to-text experience regardless of how you access Teams."
                  />

                  <FAQItem
                    question="Can I use this during Teams meetings?"
                    answer="Absolutely. Oravo excels in meeting scenarios—dictate chat messages, share links, and ask questions without unmuting. Perfect for large meetings where you want to contribute without interrupting."
                  />

                  <FAQItem
                    question="Will this work with my company's Teams setup?"
                    answer="Yes. Oravo works with all Microsoft 365 configurations including Teams Free, Microsoft 365 Business, and Enterprise plans. It doesn't require any Teams admin setup or permissions."
                  />

                  <FAQItem
                    question="Does IT need to install this?"
                    answer="No special IT setup required. Users can install Oravo themselves. For enterprise deployments, we offer admin controls, bulk deployment, and SSO integration."
                  />

                  <FAQItem
                    question="How does this compare to Teams' live captions?"
                    answer="Different use cases. Live captions transcribe what others say during meetings. Oravo transcribes what YOU say into text messages—turning your speech into typed chat messages in any Teams conversation."
                  />

                  <FAQItem
                    question="Can Oravo handle Microsoft jargon and product names?"
                    answer="Yes! Oravo recognizes Microsoft terminology, product names (Azure, SharePoint, OneDrive, etc.), and common enterprise vocabulary. Add custom terms to your dictionary for 99%+ accuracy."
                  />
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 md:px-12 py-16 md:py-20">
              <div className="max-w-[700px] mx-auto text-center">
                <div className="bg-gradient-to-br from-[#6264A7] to-[#505298] rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(98,100,167,0.3)]">
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">
                    Transform Your Teams Productivity
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                    Stop typing in Teams. Start speaking. Chat, collaborate, and
                    communicate 4x faster with enterprise-grade voice typing.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link
                      href="/download"
                      className="inline-flex h-14 px-8 bg-white hover:bg-gray-50 text-[#6264A7] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg items-center justify-center"
                    >
                      Start Free Trial
                    </Link>
                  </div>

                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm">
                    <span>Enterprise ready</span>
                    <span>•</span>
                    <span>2-minute setup</span>
                    <span>•</span>
                    <span>SOC 2 certified</span>
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
