import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice Keyboard for ChatGPT: Better Prompts, Faster | Oravo AI",
  description:
    "Speak longer, more detailed prompts to ChatGPT with Oravo's voice keyboard. Get better AI responses by providing more context at speaking speed.",
  keywords: [
    "chatgpt voice to text",
    "voice keyboard for chatgpt",
    "dictate chatgpt prompts",
    "chatgpt speech to text",
    "voice typing chatgpt",
    "chatgpt voice dictation",
    "speak to chatgpt",
    "chatgpt voice input",
    "hands-free chatgpt",
    "chatgpt productivity",
    "better chatgpt prompts",
    "chatgpt voice commands",
    "ai prompt voice",
    "talk to chatgpt",
    "chatgpt dictation",
  ],
  openGraph: {
    title: "Voice Keyboard for ChatGPT: Better Prompts, Faster | Oravo AI",
    description: "Speak longer, more detailed prompts to ChatGPT. Get better AI responses with voice input.",
    url: "https://oravo.ai/voice-keyboard-for-chatgpt",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Keyboard for ChatGPT | Oravo AI",
    description: "Better ChatGPT prompts through voice. Speak more context, get better AI responses.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://oravo.ai/voice-keyboard-for-chatgpt",
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
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10A37F]/10 to-[#10A37F]/20 flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-[#37322F] text-lg md:text-xl font-semibold font-sans mb-3">{title}</h3>
      <p className="text-[#605A57] text-sm md:text-base leading-relaxed font-sans">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-b from-[#10A37F] to-[#0D8A6A] flex items-center justify-center">
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
      <p className="text-[#605A57] text-sm leading-relaxed font-sans mb-3"><span className="font-medium text-[#10A37F]">With Oravo:</span> {withOravo}</p>
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

export default function VoiceKeyboardForChatGPTPage() {
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
                    icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="#10A37F"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" /></svg>}
                    text="ChatGPT Integration"
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Voice Keyboard for ChatGPT
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  Better prompts = better responses. Speak longer, more detailed prompts to ChatGPT at thinking speed. More context means better AI output.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/download" className="inline-flex h-14 px-8 bg-gradient-to-b from-[#10A37F] to-[#0D8A6A] text-white text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0px_4px_12px_rgba(16,163,127,0.4)] items-center justify-center">
                    Start Free Trial
                  </Link>
                  <Link href="/how-to-use" className="inline-flex h-14 px-8 bg-white border border-[#E0DEDB] text-[#37322F] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#F7F5F3] items-center justify-center">
                    See How It Works
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#847971]">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Better prompts
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    More context
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Better responses
                  </span>
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <Badge icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>} text="Features" />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">Why Voice Input = Better ChatGPT Results</h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">Speak more context, get more accurate AI responses</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeatureCard icon={<svg className="w-6 h-6 text-[#10A37F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>} title="Longer, Better Prompts" description="Typing limits prompt length. Speaking lets you provide all the context ChatGPT needs for accurate responses." />
                  <FeatureCard icon={<svg className="w-6 h-6 text-[#10A37F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} title="4x Faster Prompting" description="Speak prompts at 150 WPM vs typing at 40 WPM. Get to your AI answer faster." />
                  <FeatureCard icon={<svg className="w-6 h-6 text-[#10A37F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>} title="Natural Thinking" description="Explain problems conversationally. Your natural speech patterns often convey nuance better than typed text." />
                  <FeatureCard icon={<svg className="w-6 h-6 text-[#10A37F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>} title="Follow-Up Conversations" description="Have natural back-and-forth conversations with ChatGPT. Refine and iterate at speaking speed." />
                  <FeatureCard icon={<svg className="w-6 h-6 text-[#10A37F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>} title="Complex Instructions" description="Describe multi-step processes and detailed requirements that would be tedious to type out." />
                  <FeatureCard icon={<svg className="w-6 h-6 text-[#10A37F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>} title="Multi-Task Prompting" description="Reference documents, read data, or review code while dictating your prompt to ChatGPT." />
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[700px] mx-auto">
                <div className="text-center mb-12">
                  <Badge icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2"><path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} text="How It Works" />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">Start Voice Prompting ChatGPT</h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">Better AI conversations in 2 minutes</p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-[rgba(55,50,47,0.12)]">
                  <div className="space-y-8">
                    <StepCard number={1} title="Install Oravo" description="Download for Mac, Windows, iOS, or Android. Quick 2-minute setup." />
                    <StepCard number={2} title="Open ChatGPT" description="Go to chat.openai.com or open the ChatGPT app. Oravo works in both." />
                    <StepCard number={3} title="Click the Prompt Box" description="Position your cursor in ChatGPT's message input field." />
                    <StepCard number={4} title="Press Hotkey & Speak" description="Activate Oravo and describe your problem, question, or task in detail." />
                    <StepCard number={5} title="Get Better Responses" description="Your detailed prompt leads to more accurate, useful ChatGPT responses." />
                  </div>
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <Badge icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>} text="Use Cases" />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">Get More From ChatGPT</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <UseCaseCard title="Code Debugging" scenario="Explaining complex code issues" withOravo="Speak the full context: what the code does, what's wrong, what you've tried. ChatGPT gives more accurate solutions." result="Fewer back-and-forth iterations" />
                  <UseCaseCard title="Writing Assistance" scenario="Getting help with content creation" withOravo="Describe tone, audience, purpose, and constraints conversationally. Get drafts that match your vision." result="Better first drafts" />
                  <UseCaseCard title="Research & Analysis" scenario="Complex research questions" withOravo="Provide all relevant background and context verbally. Get comprehensive, nuanced answers." timeSaved="60%" />
                  <UseCaseCard title="Business Strategy" scenario="Brainstorming and planning" withOravo="Think out loud with ChatGPT as your sounding board. Explore ideas at the speed of thought." result="More thorough exploration" />
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
                  <FAQItem question="Is this different from ChatGPT's voice feature?" answer="Yes. ChatGPT's voice feature is for conversation. Oravo converts speech to text for ANY input field—giving you perfectly formatted written prompts with more control over editing before sending." />
                  <FAQItem question="Does it work with ChatGPT Plus/GPT-4?" answer="Absolutely. Oravo works with all ChatGPT versions—Free, Plus, Team, and Enterprise. It simply types text into the prompt box." />
                  <FAQItem question="Can I edit before sending?" answer="Yes! Unlike voice conversation mode, Oravo gives you text you can review and edit before hitting send. Best of both worlds." />
                  <FAQItem question="Does it work with the ChatGPT mobile app?" answer="Yes! Oravo works on iOS and Android. Dictate ChatGPT prompts on mobile at the same quality as desktop." />
                  <FAQItem question="What about technical terms and code?" answer="Oravo recognizes programming terminology, framework names, and technical jargon. It handles code-related discussions accurately." />
                  <FAQItem question="Will ChatGPT know I'm using voice input?" answer="No. ChatGPT receives your prompt as text—identical to typing. It doesn't know or care how the text was created." />
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-16 md:py-20">
              <div className="max-w-[700px] mx-auto text-center">
                <div className="bg-gradient-to-br from-[#10A37F] to-[#0D8A6A] rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(16,163,127,0.3)]">
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">Better Prompts, Better AI</h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">Stop limiting your prompts to what you can type. Speak detailed context to ChatGPT and get the AI results you actually need.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link href="/download" className="inline-flex h-14 px-8 bg-white hover:bg-gray-50 text-[#10A37F] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg items-center justify-center">Download Free</Link>
                  </div>
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm">
                    <span>No credit card required</span>
                    <span>•</span>
                    <span>Works with all ChatGPT versions</span>
                    <span>•</span>
                    <span>Better AI responses</span>
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

