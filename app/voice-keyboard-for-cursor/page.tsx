import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice Keyboard for Cursor: Code Faster with AI | Oravo",
  description:
    "Speak more context to Cursor AI and get better code. Oravo's voice keyboard lets developers describe complex requirements at speaking speed.",
  keywords: [
    "cursor ai voice",
    "voice keyboard for cursor",
    "cursor ide voice input",
    "cursor speech to text",
    "voice typing cursor",
    "cursor voice dictation",
    "speak to cursor ai",
    "cursor voice commands",
    "ai coding voice",
    "cursor productivity",
    "developer voice typing",
    "coding with voice",
    "cursor ai prompts",
    "vscode fork voice",
    "ai pair programming voice",
  ],
  openGraph: {
    title: "Voice Keyboard for Cursor: Code Faster with AI | Oravo",
    description: "Speak more context to Cursor AI. Better prompts = better code generation.",
    url: "https://oravo.ai/voice-keyboard-for-cursor",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Keyboard for Cursor | Oravo AI",
    description: "Code faster with Cursor AI using voice input. Speak context, get better code.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://oravo.ai/voice-keyboard-for-cursor",
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
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[rgba(55,50,47,0.12)] hover:shadow-[0px_4px_12px_rgba(55,50,47,0.08)] transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1877F2]/10 to-[#1877F2]/20 flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-[#37322F] text-lg md:text-xl font-semibold font-sans mb-3">{title}</h3>
      <p className="text-[#605A57] text-sm md:text-base leading-relaxed font-sans">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-b from-[#1877F2] to-[#166FE5] flex items-center justify-center">
        <span className="text-white text-lg font-semibold">{number}</span>
      </div>
      <div className="flex-1">
        <h4 className="text-[#37322F] text-lg font-semibold font-sans mb-2">{title}</h4>
        <p className="text-[#605A57] text-sm md:text-base leading-relaxed font-sans">{description}</p>
      </div>
    </div>
  );
}

function UseCaseCard({ title, scenario, withOravo, result, timeSaved }: { title: string; scenario?: string; withOravo: string; result?: string; timeSaved?: string }) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[rgba(55,50,47,0.12)]">
      <h4 className="text-[#37322F] text-lg font-semibold font-sans mb-4">{title}</h4>
      {scenario && <p className="text-[#847971] text-sm font-sans mb-3"><span className="font-medium">Scenario:</span> {scenario}</p>}
      <p className="text-[#605A57] text-sm leading-relaxed font-sans mb-3"><span className="font-medium text-[#1877F2]">With Oravo:</span> {withOravo}</p>
      {result && <p className="text-[#22C55E] text-sm font-medium font-sans">Result: {result}</p>}
      {timeSaved && <div className="mt-3 inline-block px-3 py-1 bg-[#22C55E]/10 rounded-full"><span className="text-[#22C55E] text-xs font-semibold">Time saved: {timeSaved}</span></div>}
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-[rgba(55,50,47,0.12)]">
      <h4 className="text-[#37322F] text-base font-semibold font-sans mb-2">{question}</h4>
      <p className="text-[#605A57] text-sm leading-relaxed font-sans">{answer}</p>
    </div>
  );
}

export default function VoiceKeyboardForCursorPage() {
  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          <Header />

          <main className="flex-1 w-full mt-20 md:mt-24 lg:mt-28 relative z-10">
            <section className="px-6 md:px-12 py-12 md:py-20 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <Badge
                    icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1877F2" strokeWidth="2"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
                    text="Cursor IDE Integration"
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Voice Keyboard for Cursor
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  Better context = better code. Speak detailed requirements to Cursor AI at thinking speed. Describe complex functionality that would take forever to type.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/download" className="inline-flex h-14 px-8 bg-gradient-to-b from-[#1877F2] to-[#166FE5] text-white text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0px_4px_12px_rgba(24,119,242,0.4)] items-center justify-center">
                    Start Free Trial
                  </Link>
                  <Link href="/how-to-use" className="inline-flex h-14 px-8 bg-white border border-[#E0DEDB] text-[#37322F] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#F7F5F3] items-center justify-center">
                    See How It Works
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#847971]">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Better AI prompts
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Technical accuracy
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Better code output
                  </span>
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <Badge icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>} text="Features" />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">Why Voice Input Makes Cursor Better</h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">More context to AI = more accurate code generation</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeatureCard icon={<svg className="w-6 h-6 text-[#1877F2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>} title="Describe Complex Logic" description="Speak the full requirement: edge cases, error handling, data flow. Get code that actually works the first time." />
                  <FeatureCard icon={<svg className="w-6 h-6 text-[#1877F2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} title="Better Composer Prompts" description="Speak detailed multi-file changes to Cursor Composer. Describe architecture, not just individual functions." />
                  <FeatureCard icon={<svg className="w-6 h-6 text-[#1877F2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>} title="Code Comments & Docs" description="Dictate comprehensive code comments, docstrings, and documentation at speaking speed." />
                  <FeatureCard icon={<svg className="w-6 h-6 text-[#1877F2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} title="Debug Conversations" description="Explain bugs in detail to Cursor Chat. Provide full context about what's failing and why." />
                  <FeatureCard icon={<svg className="w-6 h-6 text-[#1877F2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} title="Faster Iteration" description="Refine and iterate with AI at speaking speed. Build features in minutes, not hours." />
                  <FeatureCard icon={<svg className="w-6 h-6 text-[#1877F2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>} title="Technical Vocabulary" description="Oravo recognizes React, TypeScript, APIs, frameworks, and developer terminology accurately." />
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[700px] mx-auto">
                <div className="text-center mb-12">
                  <Badge icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2"><path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} text="How It Works" />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">Start Voice Coding in Cursor</h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">Better AI coding in 2 minutes</p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-[rgba(55,50,47,0.12)]">
                  <div className="space-y-8">
                    <StepCard number={1} title="Install Oravo" description="Download for Mac or Windows. Quick 2-minute setup alongside your Cursor installation." />
                    <StepCard number={2} title="Open Cursor" description="Launch Cursor IDE. Oravo works in all Cursor input fields—Chat, Composer, and inline editing." />
                    <StepCard number={3} title="Open AI Chat or Composer" description="Press Cmd/Ctrl+K for inline, Cmd/Ctrl+L for chat, or open Composer." />
                    <StepCard number={4} title="Press Hotkey & Describe" description="Activate Oravo and speak your full requirement. Describe the feature, edge cases, and expected behavior." />
                    <StepCard number={5} title="Get Better Code" description="Cursor AI generates more accurate code because you provided more context." />
                  </div>
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <Badge icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>} text="Use Cases" />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">Ship Code Faster with Voice</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <UseCaseCard title="Feature Development" scenario="Building new functionality" withOravo="Speak the complete user story, acceptance criteria, and technical constraints. Cursor generates comprehensive implementations." result="Better first-pass code" />
                  <UseCaseCard title="Multi-File Refactoring" scenario="Architecture changes across codebase" withOravo="Describe the refactoring goal, affected files, and migration approach to Composer. Get coordinated changes." timeSaved="70%" />
                  <UseCaseCard title="Code Review & Debugging" scenario="Understanding and fixing issues" withOravo="Explain the bug, reproduction steps, and expected behavior. Get targeted debugging suggestions." result="Faster bug resolution" />
                  <UseCaseCard title="Documentation" scenario="Writing code docs and comments" withOravo="Dictate comprehensive documentation at speaking speed. Explain complex logic conversationally." timeSaved="80%" />
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-12">
                  <Badge icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2"><path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} text="FAQ" />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                  <FAQItem question="Does Oravo understand programming terminology?" answer="Yes! Oravo recognizes React, TypeScript, Python, API terms, framework names, and developer jargon. It learns your codebase vocabulary over time." />
                  <FAQItem question="Does it work with Cursor Composer?" answer="Absolutely. Oravo works in all Cursor input fields—Chat, Composer, inline Cmd+K, and any text input. Speak complex multi-file requirements naturally." />
                  <FAQItem question="Can I dictate code directly?" answer="You can, but Oravo is best for AI prompts and documentation. For code generation, describe what you want and let Cursor AI write the code." />
                  <FAQItem question="Does it slow down my IDE?" answer="No. Oravo runs as a separate process and only activates when you press your hotkey. Zero performance impact on Cursor." />
                  <FAQItem question="What about code snippets with special characters?" answer="When describing code to Cursor AI, speak naturally. Oravo handles technical terms, and Cursor generates the actual syntax." />
                  <FAQItem question="Can I use it for commit messages?" answer="Yes! Dictate detailed commit messages and PR descriptions at speaking speed. Perfect for conventional commits and thorough documentation." />
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-16 md:py-20">
              <div className="max-w-[700px] mx-auto text-center">
                <div className="bg-gradient-to-br from-[#1877F2] to-[#166FE5] rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(24,119,242,0.3)]">
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">Code Faster with Voice</h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">Stop typing long prompts to Cursor. Speak detailed context and get better AI-generated code in less time.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link href="/download" className="inline-flex h-14 px-8 bg-white hover:bg-gray-50 text-[#1877F2] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg items-center justify-center">Download Free</Link>
                  </div>
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm">
                    <span>No credit card required</span>
                    <span>•</span>
                    <span>Works with all Cursor features</span>
                    <span>•</span>
                    <span>Better AI code</span>
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

