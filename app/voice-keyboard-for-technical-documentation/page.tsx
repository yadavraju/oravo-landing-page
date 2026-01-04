import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice Keyboard for Technical Documentation: Write Docs 4x Faster | Oravo AI",
  description:
    "Transform technical documentation with Oravo's voice keyboard. Dictate code docs, API references, READMEs & developer guides 4x faster. Understands technical terminology.",
  keywords: [
    "technical documentation voice to text",
    "dictate technical docs",
    "developer documentation voice typing",
    "code documentation dictation",
    "API documentation voice",
    "README voice typing",
    "software documentation voice",
    "engineering docs dictation",
    "technical writing voice to text",
    "developer docs speech to text",
  ],
  openGraph: {
    title: "Voice Keyboard for Technical Documentation | Oravo AI",
    description:
      "Transform technical documentation with Oravo's voice keyboard. Write docs 4x faster with technical terminology support.",
    url: "https://oravo.ai/voice-keyboard-for-technical-documentation",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Keyboard for Technical Documentation | Oravo AI",
    description:
      "Dictate technical docs 4x faster with Oravo. Understands code, APIs, and developer terminology.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://oravo.ai/voice-keyboard-for-technical-documentation",
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
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/20 flex items-center justify-center mb-4">
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
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-b from-[#10B981] to-[#059669] flex items-center justify-center">
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
        <span className="font-medium text-[#10B981]">With Oravo:</span>{" "}
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

export default function VoiceKeyboardForTechnicalDocsPage() {
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
                        stroke="#10B981"
                        strokeWidth="2"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                    }
                    text="Developer Tools"
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Voice Keyboard for Technical Documentation
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  Oravo AI understands technical terminology, code concepts, and
                  developer jargon. Write documentation, API references, and
                  READMEs 4x faster than typing—with 98%+ accuracy on technical
                  content.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/download"
                    className="inline-flex h-14 px-8 bg-gradient-to-b from-[#10B981] to-[#059669] text-white text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0px_4px_12px_rgba(16,185,129,0.4)] items-center justify-center"
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
                    Technical vocabulary
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
                    Works in any editor
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
                    Custom dictionary
                  </span>
                </div>
              </div>
            </section>

            {/* Technical Terminology Section */}
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
                        <path d="M16 18l6-6-6-6" />
                        <path d="M8 6l-6 6 6 6" />
                      </svg>
                    }
                    text="Technical AI"
                  />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                    Understands Developer Language
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Oravo is trained on technical content and recognizes
                    developer terminology
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[rgba(55,50,47,0.12)]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-[#37322F] text-sm font-semibold font-sans mb-3 uppercase tracking-wide">
                        Programming Languages
                      </h4>
                      <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                        JavaScript, TypeScript, Python, Rust, Go, Java, C++,
                        Ruby, PHP, Swift, Kotlin, and more—Oravo recognizes
                        language names and common syntax patterns.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[#37322F] text-sm font-semibold font-sans mb-3 uppercase tracking-wide">
                        Frameworks & Libraries
                      </h4>
                      <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                        React, Vue, Angular, Next.js, Django, Rails, Express,
                        FastAPI, TensorFlow, PyTorch—say framework names
                        naturally and Oravo transcribes correctly.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[#37322F] text-sm font-semibold font-sans mb-3 uppercase tracking-wide">
                        Cloud & DevOps
                      </h4>
                      <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                        AWS, GCP, Azure, Kubernetes, Docker, CI/CD, Terraform,
                        Ansible—cloud and DevOps terminology recognized
                        out-of-the-box.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[#37322F] text-sm font-semibold font-sans mb-3 uppercase tracking-wide">
                        API & Architecture
                      </h4>
                      <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                        REST, GraphQL, gRPC, WebSocket, OAuth, JWT,
                        microservices, serverless—architectural concepts
                        transcribed accurately.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-[rgba(55,50,47,0.08)]">
                    <div className="bg-[#F7F5F3] rounded-lg p-4">
                      <p className="text-[#37322F] text-sm font-medium font-sans mb-2">
                        Add your custom terms:
                      </p>
                      <p className="text-[#605A57] text-sm font-sans">
                        Company-specific APIs, internal tools, product names,
                        and proprietary terminology—add them to your custom
                        dictionary for 99%+ accuracy on your specific tech
                        stack.
                      </p>
                    </div>
                  </div>
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
                    Documentation Workflows Transformed
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    Write the documentation your team deserves—without the time
                    investment
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#10B981]"
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
                    title="API Documentation"
                    description="Dictate endpoint descriptions, parameter explanations, and usage examples. Document APIs at speaking speed with accurate technical terminology."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#10B981]"
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
                    title="READMEs & Guides"
                    description="Create comprehensive README files, setup guides, and contribution documentation. Get ideas documented before you forget them."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#10B981]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    }
                    title="Code Comments"
                    description="Add inline comments and docstrings by voice. Document functions, classes, and complex logic without breaking your coding flow."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#10B981]"
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
                    title="Architecture Docs"
                    description="Document system architecture, design decisions, and technical rationale. Explain complex systems at speaking speed."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#10B981]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    }
                    title="Onboarding Materials"
                    description="Create comprehensive onboarding documentation for new developers. Share tribal knowledge at speaking speed."
                  />

                  <FeatureCard
                    icon={
                      <svg
                        className="w-6 h-6 text-[#10B981]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    }
                    title="Changelog & Release Notes"
                    description="Document changes, new features, and breaking changes. Create detailed release notes at the end of each sprint."
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
                    Start Dictating Technical Docs
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Works in any editor, wiki, or documentation platform
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-[rgba(55,50,47,0.12)]">
                  <div className="space-y-8">
                    <StepCard
                      number={1}
                      title="Install Oravo"
                      description="Download for Mac, Windows, iOS, or Android. 2-minute setup with automatic configuration."
                    />
                    <StepCard
                      number={2}
                      title="Add Technical Terms"
                      description="Import your project's specific terminology—API names, internal tools, product names—for 99%+ accuracy."
                    />
                    <StepCard
                      number={3}
                      title="Open Your Editor"
                      description="Works in VS Code, Notion, Confluence, GitHub, GitLab, Markdown editors, and any text input."
                    />
                    <StepCard
                      number={4}
                      title="Press Hotkey & Speak"
                      description="Use your customizable hotkey and speak naturally. Use technical terms as you normally would."
                    />
                    <StepCard
                      number={5}
                      title="Get Formatted Docs"
                      description="Your speech becomes properly formatted documentation with accurate technical terminology."
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
                    Real Developer Workflows
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    How engineering teams use Oravo for documentation
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <UseCaseCard
                    title="Document While You Code"
                    scenario="Working on a new feature that needs documentation"
                    withOravo="Explain the feature verbally while looking at your code. Dictate into a Notion doc or README in the same window. Document decisions while context is fresh."
                    result="Documentation written during development, not after"
                  />

                  <UseCaseCard
                    title="Code Review Comments"
                    scenario="Reviewing PRs with detailed feedback needed"
                    withOravo="Speak thorough review comments explaining issues, suggestions, and architectural concerns. Detailed feedback at speaking speed."
                    result="Higher quality code reviews, faster turnaround"
                  />

                  <UseCaseCard
                    title="Sprint Documentation"
                    scenario="End-of-sprint technical documentation updates"
                    withOravo="Walk through changes verbally and have Oravo transcribe release notes, changelog entries, and updated docs."
                    result="Sprint documentation that actually gets done"
                  />

                  <UseCaseCard
                    title="Knowledge Transfer"
                    scenario="Senior developer leaving or transitioning roles"
                    withOravo="Verbal brain dump of system knowledge, gotchas, and tribal information. Capture years of context in hours."
                    result="Institutional knowledge preserved, not lost"
                  />
                </div>
              </div>
            </section>

            {/* Integration Section */}
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
                        <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    }
                    text="Integrations"
                  />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">
                    Works Where You Document
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "VS Code",
                    "Notion",
                    "Confluence",
                    "GitHub",
                    "GitLab",
                    "Markdown",
                    "Docusaurus",
                    "ReadMe",
                    "Swagger",
                    "Postman",
                    "Linear",
                    "Jira",
                  ].map((tool) => (
                    <div
                      key={tool}
                      className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-[rgba(55,50,47,0.12)] text-center"
                    >
                      <span className="text-[#37322F] text-sm font-medium font-sans">
                        {tool}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-center text-[#847971] text-sm mt-6 font-sans">
                  + Any text input in any application. Oravo works universally.
                </p>
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
                    question="How accurate is it with technical terminology?"
                    answer="Out of the box, Oravo achieves 98%+ accuracy on common technical terms—programming languages, frameworks, cloud services, and architectural concepts. Add your custom dictionary for 99%+ on company-specific terminology."
                  />

                  <FAQItem
                    question="Can it handle code snippets and syntax?"
                    answer="Oravo is optimized for documentation prose, not code syntax. Use it to write explanations, descriptions, and documentation around code—then paste code snippets manually. Perfect for READMEs, API docs, and comments."
                  />

                  <FAQItem
                    question="Does it work in VS Code?"
                    answer="Yes! Oravo works in VS Code, any JetBrains IDE, Vim, Emacs, and any editor with text input. Dictate comments, README content, and documentation directly in your development environment."
                  />

                  <FAQItem
                    question="How do I add my project's custom terms?"
                    answer="Open Oravo settings and add terms to your custom dictionary. Include API names, internal tools, product names, and any proprietary terminology. Changes apply instantly."
                  />

                  <FAQItem
                    question="Can teams share a custom dictionary?"
                    answer="Yes! Enterprise plans include shared team dictionaries. Add company terminology once and every team member benefits automatically."
                  />

                  <FAQItem
                    question="Does it understand acronyms like API, REST, gRPC?"
                    answer="Yes! Oravo recognizes common technical acronyms out of the box. It knows API, REST, GraphQL, gRPC, JWT, OAuth, AWS, GCP, and hundreds more. Add custom acronyms to your dictionary as needed."
                  />
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 md:px-12 py-16 md:py-20">
              <div className="max-w-[700px] mx-auto text-center">
                <div className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(16,185,129,0.3)]">
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">
                    Write Documentation That Actually Gets Written
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                    Stop putting off documentation. Write API docs, READMEs, and
                    technical guides 4x faster with voice typing that
                    understands your tech stack.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link
                      href="/download"
                      className="inline-flex h-14 px-8 bg-white hover:bg-gray-50 text-[#10B981] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg items-center justify-center"
                    >
                      Start Free Trial
                    </Link>
                  </div>

                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm">
                    <span>Technical vocabulary included</span>
                    <span>•</span>
                    <span>Custom dictionary support</span>
                    <span>•</span>
                    <span>Works in any editor</span>
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
