import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice Keyboard for Notion: Dictate Notes 4x Faster | Oravo AI",
  description:
    "Transform Notion productivity with Oravo's voice keyboard. Dictate notes, documents & databases 4x faster than typing. Auto-formatting included.",
  keywords: [
    "notion voice to text",
    "notion speech to text",
    "voice typing notion",
    "dictate notion notes",
    "notion voice keyboard",
    "notion dictation",
    "speak to text notion",
    "notion voice input",
    "hands-free notion writing",
    "voice to notion",
  ],
  openGraph: {
    title: "Voice Keyboard for Notion: Dictate Notes 4x Faster | Oravo AI",
    description:
      "Transform Notion productivity with Oravo's voice keyboard. Dictate notes and documents 4x faster than typing.",
    url: "https://oravo.ai/voice-keyboard-for-notion",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Keyboard for Notion | Oravo AI",
    description:
      "Dictate Notion notes 4x faster with Oravo's AI voice keyboard. Auto-formatting included.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://oravo.ai/voice-keyboard-for-notion",
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
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#000000]/10 to-[#000000]/5 flex items-center justify-center mb-4">
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
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-b from-[#000000] to-[#333333] flex items-center justify-center">
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
        <span className="font-medium text-[#000000]">With Oravo:</span>{" "}
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

export default function VoiceKeyboardForNotionPage() {
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
                        fill="#000000"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.934zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.22.186c-.094-.187 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.453-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933zM2.83 1.548l13.4-.84c1.634-.14 2.055-.047 3.082.7l4.25 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.355-1.12z" />
                      </svg>
                    }
                    text="Notion Integration"
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Voice Keyboard for Notion
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  Oravo AI transforms your speech into beautifully formatted
                  Notion content. Write notes, documents, wikis, and database
                  entries 4x faster than typing—with automatic structure and
                  formatting.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/download"
                    className="inline-flex h-14 px-8 bg-gradient-to-b from-[#000000] to-[#333333] text-white text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0px_4px_12px_rgba(0,0,0,0.3)] items-center justify-center"
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
                    Auto-formatting
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
                    Web & desktop app
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
                    What Oravo Lets You Do in Notion
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    Transform your second brain with voice-powered content
                    creation
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#000000]"
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
                    title="Write Pages by Voice"
                    description="Dictate entire Notion pages—meeting notes, project briefs, documentation. Oravo structures paragraphs, headings, and bullet points naturally."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#000000]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                        />
                      </svg>
                    }
                    title="Fill Database Entries"
                    description="Quickly populate database fields, task descriptions, and properties by speaking. Perfect for CRMs, project trackers, and content calendars."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#000000]"
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
                    title="Quick Capture Ideas"
                    description="Capture thoughts, ideas, and inspiration the moment they strike. Speak your brain dump and Oravo organizes it into coherent notes."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#000000]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    }
                    title="Build Wiki Content"
                    description="Create knowledge base articles, SOPs, and documentation at speaking speed. Transform expertise into searchable, organized wiki pages."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#000000]"
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
                    title="Daily Journaling"
                    description="Speak your daily journal, reflections, and thoughts. Oravo formats entries with dates and creates a searchable personal archive."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#000000]"
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
                    title="Works Everywhere"
                    description="Oravo works in Notion web app and desktop app on Mac and Windows. Same experience across all your devices."
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
                    Start Voice Typing in Notion
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Build your second brain at the speed of thought
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-[rgba(55,50,47,0.12)]">
                  <div className="space-y-8">
                    <StepCard
                      number={1}
                      title="Install Oravo"
                      description="Download for Mac, Windows, iOS, or Android. 2-minute setup with automatic microphone configuration."
                    />
                    <StepCard
                      number={2}
                      title="Open Notion"
                      description="Access Notion in your browser or desktop app. Oravo works identically in both environments."
                    />
                    <StepCard
                      number={3}
                      title="Click into Any Block"
                      description="Position your cursor in any text block, database field, page, or comment where you want to write."
                    />
                    <StepCard
                      number={4}
                      title="Press Hotkey & Speak"
                      description="Use your customizable hotkey and speak naturally. Dictate full paragraphs, bullet points, or quick notes."
                    />
                    <StepCard
                      number={5}
                      title="See Formatted Content"
                      description="Your speech appears as beautifully formatted Notion content—paragraphs, punctuation, and structure included."
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
                    Transform Your Notion Workflow
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Real scenarios where voice typing supercharges productivity
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <UseCaseCard
                    title="Meeting Notes in Real-Time"
                    scenario="Capturing key points during virtual meetings"
                    withOravo="Dictate meeting notes as discussions happen. Speak action items, decisions, and follow-ups directly into your Notion meeting template."
                    result="Complete meeting notes before the call ends"
                  />

                  <UseCaseCard
                    title="Content Creation"
                    scenario="Writing blog posts, articles, and marketing copy"
                    withOravo="Speak your first drafts at thinking speed. Get ideas out of your head and into Notion 4x faster, then refine the written version."
                    result="3x more content output, same time investment"
                  />

                  <UseCaseCard
                    title="Personal Knowledge Management"
                    scenario="Building a second brain for learning"
                    withOravo="Capture book highlights, podcast insights, and random ideas the moment they occur. Your knowledge base grows at speaking speed."
                    result="Actually use your second brain (not just build it)"
                  />

                  <UseCaseCard
                    title="Project Documentation"
                    scenario="Creating SOPs, wikis, and process docs"
                    withOravo="Walk through processes verbally and have Oravo transcribe step-by-step documentation. Perfect for onboarding materials and team wikis."
                    result="Documentation that actually gets written"
                  />
                </div>
              </div>
            </section>

            {/* Notion-Specific Features */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-12">
                  <Badge
                    icon={
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="#000000"
                      >
                        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466z" />
                      </svg>
                    }
                    text="Notion Features"
                  />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                    Built for Notion Power Users
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-[rgba(55,50,47,0.12)]">
                    <h4 className="text-[#37322F] text-lg font-semibold font-sans mb-2">
                      Natural Formatting
                    </h4>
                    <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                      Oravo infers paragraphs, line breaks, and structure from
                      your natural speech patterns. Say &quot;new
                      paragraph&quot; or just pause—it knows what you mean.
                    </p>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-[rgba(55,50,47,0.12)]">
                    <h4 className="text-[#37322F] text-lg font-semibold font-sans mb-2">
                      Bullet Point Detection
                    </h4>
                    <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                      Say &quot;bullet point&quot; or &quot;first, second,
                      third&quot; and Oravo creates proper list formatting. No
                      manual formatting needed.
                    </p>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-[rgba(55,50,47,0.12)]">
                    <h4 className="text-[#37322F] text-lg font-semibold font-sans mb-2">
                      Database Field Support
                    </h4>
                    <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                      Click into any database text field and dictate. Perfect
                      for task descriptions, CRM notes, and content calendar
                      entries.
                    </p>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-[rgba(55,50,47,0.12)]">
                    <h4 className="text-[#37322F] text-lg font-semibold font-sans mb-2">
                      Multi-Language Content
                    </h4>
                    <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                      Create Notion content in any of 100+ languages. Speak in
                      your native language and get perfectly formatted text.
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
                  <FAQItem
                    question="Does Oravo work with the Notion desktop app?"
                    answer="Yes! Oravo works seamlessly with both the Notion desktop app (Mac and Windows) and the web app in any browser. Same experience across all environments."
                  />

                  <FAQItem
                    question="Can I use this for Notion databases?"
                    answer="Absolutely. Click into any text field in a database—titles, descriptions, properties, notes—and dictate. Perfect for populating CRMs, task managers, and content calendars."
                  />

                  <FAQItem
                    question="Will it format bullet points and headings?"
                    answer='Oravo creates natural paragraphs automatically. For explicit formatting, say "bullet point" or "heading" and Oravo will format accordingly. Most users prefer the natural paragraph flow.'
                  />

                  <FAQItem
                    question="Can I dictate while viewing another Notion page?"
                    answer="Yes! Open reference material in one tab, dictate in another. Multi-tasking that's impossible with typing but natural with voice."
                  />

                  <FAQItem
                    question="Does it work with Notion templates?"
                    answer="Yes. Oravo works in any text block in Notion, regardless of template. Click into a field, dictate, and your content appears formatted."
                  />

                  <FAQItem
                    question="How does this compare to Notion AI?"
                    answer="Different tools for different purposes. Notion AI generates content based on prompts. Oravo transcribes YOUR speech into YOUR words—4x faster than typing, with perfect accuracy."
                  />
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 md:px-12 py-16 md:py-20">
              <div className="max-w-[700px] mx-auto text-center">
                <div className="bg-gradient-to-br from-[#000000] to-[#333333] rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(0,0,0,0.3)]">
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">
                    Build Your Second Brain Faster
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                    Stop typing in Notion. Start speaking. Create notes,
                    documents, and database entries 4x faster with voice-powered
                    content creation.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link
                      href="/download"
                      className="inline-flex h-14 px-8 bg-white hover:bg-gray-50 text-[#000000] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg items-center justify-center"
                    >
                      Start Free Trial
                    </Link>
                  </div>

                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm">
                    <span>No credit card required</span>
                    <span>•</span>
                    <span>2-minute setup</span>
                    <span>•</span>
                    <span>Auto-formatting included</span>
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
