import type { Metadata } from "next";
import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voice to Text for Creators | Dictate Scripts & Content | Oravo AI",
  description:
    "Dictate video scripts, podcast notes, and social media content at the speed of thought. Keep your creative flow uninterrupted with Oravo's AI voice typing for content creators.",
  keywords: [
    "voice to text for creators",
    "dictation for content creators",
    "video script dictation",
    "podcast notes voice typing",
    "social media content dictation",
    "youtube script voice to text",
    "content creator tools",
    "creative writing dictation",
    "blogger voice typing",
    "influencer productivity tools",
    "tiktok content creation",
    "voice typing for youtubers",
    "dictate blog posts",
    "creative flow tools",
    "hands-free content creation",
  ],
  openGraph: {
    title: "Voice to Text for Creators | Dictate Scripts & Content | Oravo AI",
    description:
      "Dictate video scripts, podcast notes, and social media content at the speed of thought. Keep your creative flow uninterrupted.",
    url: "https://oravo.ai/for-creators",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice to Text for Creators | Oravo AI",
    description:
      "Dictate video scripts, podcast notes, and social media content at the speed of thought.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://oravo.ai/for-creators",
  },
};

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
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-[#EC4899]/10">
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

function UseCaseCard({
  title,
  description,
  timeSaved,
}: {
  title: string;
  description: string;
  timeSaved?: string;
}) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[rgba(55,50,47,0.12)]">
      <h4 className="text-[#37322F] text-lg font-semibold font-sans mb-3">
        {title}
      </h4>
      <p className="text-[#605A57] text-sm leading-relaxed font-sans mb-3">
        {description}
      </p>
      {timeSaved && (
        <div className="inline-block px-3 py-1 bg-[#22C55E]/10 rounded-full">
          <span className="text-[#22C55E] text-xs font-semibold">
            Time saved: {timeSaved}
          </span>
        </div>
      )}
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
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

export default function ForCreatorsPage() {
  const accentColor = "#EC4899";

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0" />
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0" />

          <Header />

          <main className="flex-1 w-full mt-20 md:mt-24 lg:mt-28 relative z-10">
            {/* Hero */}
            <section className="px-6 md:px-12 py-12 md:py-20 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <Badge
                    icon={
                      <svg className="w-3.5 h-3.5" fill={accentColor} viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    }
                    text="For Content Creators"
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Voice to Text for Creators
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  Dictate video scripts, podcast notes, and social media content at the speed of thought. Keep your creative flow uninterrupted.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/download"
                    className="inline-flex h-14 px-8 text-white text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0px_4px_12px_rgba(236,72,153,0.4)] items-center justify-center"
                    style={{ background: accentColor }}
                  >
                    Download Free
                  </Link>
                  <Link
                    href="/how-to-use"
                    className="inline-flex h-14 px-8 bg-white border border-[#E0DEDB] text-[#37322F] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#F7F5F3] items-center justify-center"
                  >
                    See How It Works
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#847971]">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    4x faster than typing
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Never break creative flow
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Works in any app
                  </span>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mb-4">
                    Built for Creative Workflows
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    Capture ideas the moment they strike. No typing delays, no lost inspiration.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>}
                    title="Video Scripts"
                    description="Dictate YouTube scripts, TikTok hooks, and video outlines while pacing around your studio. Ideas flow naturally when you're not stuck typing."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>}
                    title="Podcast Notes"
                    description="Capture episode ideas, show notes, and interview prep at speaking speed. Perfect for planning content on the go."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>}
                    title="Social Media Content"
                    description="Draft tweets, LinkedIn posts, and Instagram captions in seconds. Batch content creation becomes effortless."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                    title="Blog Posts"
                    description="Beat writer's block by speaking your first draft. Edit and polish later—get the ideas down first."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                    title="Email Newsletters"
                    description="Write to your audience like you're talking to a friend. Voice captures your authentic tone perfectly."
                  />
                  <FeatureCard
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
                    title="Brainstorming"
                    description="Capture every idea in a creative session. Speak freely and let Oravo organize your thoughts into text."
                  />
                </div>
              </div>
            </section>

            {/* Use Cases */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mb-4">
                    Real Creator Workflows
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    See how creators use Oravo to produce more content, faster.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <UseCaseCard
                    title="YouTube Video Production"
                    description="Outline your video, dictate the full script, and write your description—all by voice. Edit in your video editor, not a text document."
                    timeSaved="60-70%"
                  />
                  <UseCaseCard
                    title="Content Batching"
                    description="Record a week's worth of social posts in one session. Speak your ideas, Oravo formats them, and you schedule them out."
                    timeSaved="50-60%"
                  />
                  <UseCaseCard
                    title="Podcast Show Notes"
                    description="Capture timestamps, key points, and resources while listening back. No more pausing to type—just speak and keep listening."
                    timeSaved="40-50%"
                  />
                  <UseCaseCard
                    title="Course Creation"
                    description="Outline modules, dictate lesson scripts, and write workbook content at the speed of thought. Create courses faster than ever."
                    timeSaved="50-70%"
                  />
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mb-4">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  <FAQItem
                    question="Can I use Oravo while editing video?"
                    answer="Yes! Oravo works in any app. Dictate into Premiere Pro, Final Cut, DaVinci Resolve—anywhere you can type, Oravo can transcribe."
                  />
                  <FAQItem
                    question="Does it capture my authentic voice and style?"
                    answer="Absolutely. Oravo transcribes exactly what you say with proper punctuation and formatting. Your voice, your words, your style—just faster."
                  />
                  <FAQItem
                    question="Can I dictate in different languages?"
                    answer="Yes, Oravo supports 100+ languages. Perfect for multilingual creators or reaching global audiences."
                  />
                  <FAQItem
                    question="Will it work with my content management tools?"
                    answer="Oravo works everywhere—Notion, Google Docs, WordPress, Substack, and any other tool with a text field."
                  />
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="px-6 md:px-12 py-16 md:py-20">
              <div className="max-w-[700px] mx-auto text-center">
                <div
                  className="rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(55,50,47,0.15)]"
                  style={{ background: accentColor }}
                >
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">
                    Create More. Type Less.
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                    Join thousands of creators who produce content 4x faster with Oravo. Your ideas deserve to be heard.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link
                      href="/download"
                      className="inline-flex h-14 px-8 bg-white hover:bg-gray-50 text-[#37322F] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg items-center justify-center"
                    >
                      Download Free
                    </Link>
                  </div>

                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm font-sans">
                    <span>No credit card required</span>
                    <span>•</span>
                    <span>2-minute setup</span>
                    <span>•</span>
                    <span>Works everywhere</span>
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

