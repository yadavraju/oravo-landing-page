import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice Keyboard for Discord: Fast Voice-to-Text Chat | Oravo AI",
  description:
    "Transform Discord communication with Oravo's voice keyboard. Dictate messages 4x faster than typing. Works in servers, DMs, threads & all Discord channels.",
  keywords: [
    "discord voice to text",
    "discord speech to text",
    "voice typing discord",
    "dictate discord messages",
    "discord voice keyboard",
    "discord dictation",
    "speak to text discord",
    "voice to text discord app",
    "discord voice input",
    "hands-free discord messaging",
  ],
  openGraph: {
    title: "Voice Keyboard for Discord: Fast Voice-to-Text Chat | Oravo AI",
    description:
      "Transform Discord communication with Oravo's voice keyboard. Dictate messages 4x faster than typing in servers, DMs, and threads.",
    url: "https://oravo.ai/voice-keyboard-for-discord",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Keyboard for Discord | Oravo AI",
    description:
      "Dictate Discord messages 4x faster with Oravo's AI voice keyboard. Works in servers, DMs & threads.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://oravo.ai/voice-keyboard-for-discord",
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
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5865F2]/10 to-[#5865F2]/20 flex items-center justify-center mb-4">
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
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-b from-[#5865F2] to-[#4752C4] flex items-center justify-center">
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
        <span className="font-medium text-[#5865F2]">With Oravo:</span>{" "}
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

export default function VoiceKeyboardForDiscordPage() {
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
                        fill="#5865F2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                      </svg>
                    }
                    text="Discord Integration"
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Voice Keyboard for Discord
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  Oravo AI transforms your speech into perfectly formatted
                  Discord messages. Chat in servers, DMs, and threads 4x faster
                  than typing—while gaming, streaming, or multitasking.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/download"
                    className="inline-flex h-14 px-8 bg-gradient-to-b from-[#5865F2] to-[#4752C4] text-white text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0px_4px_12px_rgba(88,101,242,0.4)] items-center justify-center"
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
                    Works while gaming
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
                    Desktop & browser
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
                    What Oravo Lets You Do in Discord
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    Level up your Discord communication with voice-powered messaging
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#5865F2]"
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
                    title="Chat in Any Server Channel"
                    description="Speak messages in text channels while your hands are busy gaming. Oravo transcribes instantly with perfect formatting."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#5865F2]"
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
                    title="DM Friends at Speaking Speed"
                    description="Send private messages 4x faster. Perfect for coordinating game sessions, making plans, or just catching up."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#5865F2]"
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
                    title="Reply in Threads Effortlessly"
                    description="Keep up with fast-moving conversations. Speak your replies without stopping what you're doing."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#5865F2]"
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
                    title="Chat While Streaming"
                    description="Engage with your audience by dictating messages while you stream. No need to stop your gameplay or content."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#5865F2]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    }
                    title="Emoji & Emote Support"
                    description='Say "laughing emoji" or "pog emote" and Oravo formats it correctly. Custom server emotes supported too.'
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#5865F2]"
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
                    title="Works Everywhere Discord Does"
                    description="Browser, desktop app, Mac, Windows—Oravo delivers consistent voice-to-text wherever you use Discord."
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
                    Start Voice Typing in Discord
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Set up in 2 minutes, chat hands-free forever
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-[rgba(55,50,47,0.12)]">
                  <div className="space-y-8">
                    <StepCard
                      number={1}
                      title="Download Oravo"
                      description="Get Oravo for Mac, Windows, iOS, or Android. Installation is automatic with instant microphone setup."
                    />
                    <StepCard
                      number={2}
                      title="Open Discord"
                      description="Launch Discord in browser or desktop app. Oravo works identically in both environments."
                    />
                    <StepCard
                      number={3}
                      title="Click into Any Text Field"
                      description="Position your cursor in any channel, DM, thread, or forum post where you want to type."
                    />
                    <StepCard
                      number={4}
                      title="Press Hotkey & Speak"
                      description="Use your customizable hotkey (Cmd/Ctrl + Shift + Space) and speak naturally. Say it like you'd type it."
                    />
                    <StepCard
                      number={5}
                      title="Send Your Message"
                      description="Your speech appears as formatted text instantly. Hit Enter to send—your Discord friends see regular text."
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Gaming Use Cases Section */}
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
                        <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    }
                    text="Use Cases"
                  />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                    Perfect for Gamers & Communities
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Real scenarios where voice typing transforms Discord
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <UseCaseCard
                    title="Mid-Game Coordination"
                    scenario="Calling out strategies while your hands are on keyboard/controller"
                    withOravo="Press hotkey and call out 'Enemy spotted at B site, rotating through mid' without losing focus on gameplay."
                    result="Never miss a callout or die while typing"
                  />

                  <UseCaseCard
                    title="Stream Chat Engagement"
                    scenario="Responding to viewers while maintaining content flow"
                    withOravo="Dictate responses to chat messages between gameplay segments. Keep your audience engaged without interrupting your stream."
                    result="Higher viewer retention and engagement"
                  />

                  <UseCaseCard
                    title="Community Management"
                    scenario="Moderating active servers with fast-moving conversations"
                    withOravo="Quickly respond to member questions, make announcements, and handle moderation tasks at speaking speed."
                    result="4x faster response time to community"
                  />

                  <UseCaseCard
                    title="LFG & Team Finding"
                    scenario="Posting in looking-for-group channels while queuing"
                    withOravo="Dictate detailed LFG posts with your requirements, rank, and availability while waiting for matches."
                    result="Better team matches, less typing fatigue"
                  />
                </div>
              </div>
            </section>

            {/* Discord-Specific Features */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-12">
                  <Badge
                    icon={
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="#5865F2"
                      >
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                      </svg>
                    }
                    text="Discord Features"
                  />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                    Built for Discord Users
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-[rgba(55,50,47,0.12)]">
                    <h4 className="text-[#37322F] text-lg font-semibold font-sans mb-2">
                      Emoji & Emote Support
                    </h4>
                    <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                      Say &quot;laughing emoji&quot; for 😂, &quot;fire
                      emoji&quot; for 🔥. Server-specific emotes like
                      &quot;:pepega:&quot; also work when you dictate them.
                    </p>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-[rgba(55,50,47,0.12)]">
                    <h4 className="text-[#37322F] text-lg font-semibold font-sans mb-2">
                      @Mentions & #Channels
                    </h4>
                    <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                      Say &quot;at everyone&quot; for @everyone, &quot;at
                      mention Alex&quot; for @Alex, or &quot;hashtag
                      general&quot; for #general channel links.
                    </p>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-[rgba(55,50,47,0.12)]">
                    <h4 className="text-[#37322F] text-lg font-semibold font-sans mb-2">
                      Markdown Formatting
                    </h4>
                    <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                      Discord&apos;s formatting works naturally: &quot;bold
                      important bold&quot; becomes **important**, &quot;code
                      block&quot; adds backticks.
                    </p>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-[rgba(55,50,47,0.12)]">
                    <h4 className="text-[#37322F] text-lg font-semibold font-sans mb-2">
                      Gaming Terminology
                    </h4>
                    <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                      Oravo understands gaming jargon: &quot;GG&quot;,
                      &quot;AFK&quot;, game-specific callouts, champion names,
                      map locations, and more.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Not Voice Chat Section */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[700px] mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-[#37322F] text-2xl md:text-3xl font-normal font-serif mb-4">
                    &quot;Why Not Just Use Voice Chat?&quot;
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Sometimes you need text instead of voice—here&apos;s why
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[rgba(55,50,47,0.12)]">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#5865F2] flex-shrink-0 mt-0.5"
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
                          Can&apos;t disturb others:
                        </strong>{" "}
                        Late night gaming, shared spaces, sleeping partners
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#5865F2] flex-shrink-0 mt-0.5"
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
                          Text-only channels:
                        </strong>{" "}
                        Many servers restrict voice to certain areas
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#5865F2] flex-shrink-0 mt-0.5"
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
                          Searchable messages:
                        </strong>{" "}
                        Text is searchable, voice disappears
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#5865F2] flex-shrink-0 mt-0.5"
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
                          No mic for Discord:
                        </strong>{" "}
                        Using game chat but need Discord text
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#5865F2] flex-shrink-0 mt-0.5"
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
                          Accessibility:
                        </strong>{" "}
                        Some people prefer or need text communication
                      </span>
                    </li>
                  </ul>
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
                    question="Does this work while I'm in a Discord voice call?"
                    answer="Yes! Oravo uses a separate audio input from Discord voice. You can be in a voice channel and still dictate text messages. Configure push-to-talk if you want to avoid overlap."
                  />

                  <FAQItem
                    question="Will Oravo pick up game audio or voice chat?"
                    answer="No. Oravo only activates when you press your hotkey and only captures from your selected microphone. Background sounds and voice chat won't affect your dictation."
                  />

                  <FAQItem
                    question="Can I use this on mobile Discord?"
                    answer="Yes! Oravo works on iOS and Android. Dictate messages in the Discord mobile app at the same speed and accuracy as desktop."
                  />

                  <FAQItem
                    question="Does it understand gaming terminology?"
                    answer="Absolutely. Oravo recognizes common gaming terms, game-specific vocabulary, champion/character names, map callouts, and slang. It learns your specific vocabulary over time."
                  />

                  <FAQItem
                    question="What about Discord's Nitro voice messages?"
                    answer="Different use case. Nitro voice messages are audio clips that recipients must listen to. Oravo converts your voice to text instantly—recipients read normal messages. Much better for fast-paced chat."
                  />

                  <FAQItem
                    question="Can my friends tell I'm using voice dictation?"
                    answer="No. Your dictated messages appear as regular text. There's no indicator, special formatting, or difference from typed messages."
                  />
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 md:px-12 py-16 md:py-20">
              <div className="max-w-[700px] mx-auto text-center">
                <div className="bg-gradient-to-br from-[#5865F2] to-[#4752C4] rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(88,101,242,0.3)]">
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">
                    Level Up Your Discord Experience
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                    Stop typing, start speaking. Chat in servers, DMs, and
                    threads 4x faster—without taking your hands off the game.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link
                      href="/download"
                      className="inline-flex h-14 px-8 bg-white hover:bg-gray-50 text-[#5865F2] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg items-center justify-center"
                    >
                      Download Free
                    </Link>
                  </div>

                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm">
                    <span>Free to start</span>
                    <span>•</span>
                    <span>2-minute setup</span>
                    <span>•</span>
                    <span>Works while gaming</span>
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
