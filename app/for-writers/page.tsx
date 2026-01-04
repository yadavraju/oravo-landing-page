import type { Metadata } from "next";
import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voice Typing for Writers | Beat Writer's Block | Oravo AI",
  description:
    "Beat writer's block by speaking your first draft. Get words flowing at the natural pace of human thought. Write 4x faster with AI voice dictation for authors and writers.",
  keywords: [
    "voice typing for writers",
    "dictation for authors",
    "writer voice to text",
    "beat writer's block",
    "author dictation software",
    "novel writing voice",
    "book writing dictation",
    "creative writing voice",
    "first draft dictation",
    "writing productivity",
    "author tools",
    "manuscript dictation",
    "fiction writing voice",
    "non-fiction dictation",
    "writing flow state",
    "writer productivity app",
  ],
  openGraph: {
    title: "Voice Typing for Writers | Beat Writer's Block | Oravo AI",
    description:
      "Beat writer's block by speaking your first draft. Get words flowing at the natural pace of human thought.",
    url: "https://oravo.ai/for-writers",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Typing for Writers | Oravo AI",
    description: "Beat writer's block by speaking your first draft. Write 4x faster.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://oravo.ai/for-writers",
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
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-[#8B5CF6]/10">{icon}</div>
      <h3 className="text-[#37322F] text-lg md:text-xl font-semibold font-sans mb-3">{title}</h3>
      <p className="text-[#605A57] text-sm md:text-base leading-relaxed font-sans">{description}</p>
    </div>
  );
}

function UseCaseCard({ title, description, timeSaved }: { title: string; description: string; timeSaved?: string }) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[rgba(55,50,47,0.12)]">
      <h4 className="text-[#37322F] text-lg font-semibold font-sans mb-3">{title}</h4>
      <p className="text-[#605A57] text-sm leading-relaxed font-sans mb-3">{description}</p>
      {timeSaved && (
        <div className="inline-block px-3 py-1 bg-[#22C55E]/10 rounded-full">
          <span className="text-[#22C55E] text-xs font-semibold">Time saved: {timeSaved}</span>
        </div>
      )}
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

export default function ForWritersPage() {
  const accentColor = "#8B5CF6";

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0" />
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0" />

          <Header />

          <main className="flex-1 w-full mt-20 md:mt-24 lg:mt-28 relative z-10">
            <section className="px-6 md:px-12 py-12 md:py-20 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <Badge icon={<svg className="w-3.5 h-3.5" fill={accentColor} viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>} text="For Writers & Authors" />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Voice Typing for Writers
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  Beat writer&apos;s block by speaking your first draft. Get words flowing at the natural pace of human thought.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/download" className="inline-flex h-14 px-8 text-white text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0px_4px_12px_rgba(139,92,246,0.4)] items-center justify-center" style={{ background: accentColor }}>
                    Download Free
                  </Link>
                  <Link href="/how-to-use" className="inline-flex h-14 px-8 bg-white border border-[#E0DEDB] text-[#37322F] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#F7F5F3] items-center justify-center">
                    See How It Works
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#847971]">
                  <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Write 4x faster</span>
                  <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Beat writer&apos;s block</span>
                  <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Natural flow state</span>
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mb-4">Write Like You Think</h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">Speaking is faster than typing. Let your ideas flow at the speed of thought.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeatureCard icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>} title="Beat Writer's Block" description="When you're stuck, just start talking. Speaking activates different parts of your brain than typing, helping ideas flow more freely." />
                  <FeatureCard icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} title="First Drafts, Fast" description="Get the first draft down at speaking speed—2,000-3,000 words per hour instead of 500-800 typing. Edit and polish later." />
                  <FeatureCard icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>} title="Natural Voice" description="Your authentic voice comes through when you speak. Oravo captures your natural rhythm, tone, and style." />
                  <FeatureCard icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>} title="Auto Formatting" description="Oravo handles punctuation, paragraphs, and capitalization automatically. Speak naturally; get polished text." />
                  <FeatureCard icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} title="Works Anywhere" description="Scrivener, Google Docs, Word, Notion—Oravo works in any writing app. Your workflow, enhanced." />
                  <FeatureCard icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>} title="100+ Languages" description="Write in any language. Perfect for multilingual authors or translation workflows." />
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mb-4">Writer Workflows</h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">See how authors use Oravo to write more, faster.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <UseCaseCard title="Novel Writing" description="Dictate chapters while walking, pacing, or lying down. Many authors find they write better when moving." timeSaved="60-70%" />
                  <UseCaseCard title="Blog Posts & Articles" description="Draft blog posts and articles at speaking speed. Get your ideas down fast, then edit for polish." timeSaved="50-60%" />
                  <UseCaseCard title="Journaling" description="Capture daily reflections, morning pages, and stream-of-consciousness writing effortlessly." timeSaved="40-50%" />
                  <UseCaseCard title="Research Notes" description="Dictate notes while reading sources. Capture insights without breaking your reading flow." timeSaved="50-60%" />
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mb-4">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                  <FAQItem question="Does speaking really help with writer's block?" answer="Yes! Speaking activates different neural pathways than typing. Many writers find that when they're stuck, talking through their ideas unlocks creativity that typing doesn't." />
                  <FAQItem question="Will my writing still sound like me?" answer="Absolutely. Oravo transcribes your exact words. Many writers find their authentic voice comes through more naturally when speaking than when typing." />
                  <FAQItem question="Can I use it with Scrivener?" answer="Yes. Oravo works in Scrivener, Google Docs, Microsoft Word, Notion, and any other writing app with a text field." />
                  <FAQItem question="What about dialogue and character voices?" answer="Oravo captures exactly what you say. Many fiction writers dictate dialogue by voicing their characters out loud—it often sounds more natural than typed dialogue." />
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-16 md:py-20">
              <div className="max-w-[700px] mx-auto text-center">
                <div className="rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(55,50,47,0.15)]" style={{ background: accentColor }}>
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">Write at the Speed of Thought</h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">Join thousands of writers who broke through their blocks and write 4x faster with Oravo.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link href="/download" className="inline-flex h-14 px-8 bg-white hover:bg-gray-50 text-[#37322F] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg items-center justify-center">Download Free</Link>
                  </div>
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm font-sans">
                    <span>No credit card required</span><span>•</span><span>2-minute setup</span><span>•</span><span>Works everywhere</span>
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

