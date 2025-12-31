import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manifesto - Oravo.ai",
  description:
    "Why voice? Why now? Discover how Oravo is transforming the way we interact with technology through privacy-focused, lightning-fast AI voice dictation.",
};

export default function ManifestoPage() {
  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Main container with proper margins */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-1 w-full mt-20 md:mt-24 lg:mt-28 relative z-10">
            <div className="max-w-[800px] mx-auto px-6 md:px-12 py-12 md:py-16">
              {/* Title Section */}
              <div className="mb-16">
                <h1 className="text-[#37322F] text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Why Voice? Why Now?
                </h1>
              </div>

              {/* Content Sections */}
              <div className="prose prose-lg max-w-none">
                {/* THE CHALLENGE */}
                <section className="mb-16">
                  <div className="mb-6">
                    <h2 className="text-[#37322F] text-xs font-semibold uppercase tracking-wider mb-3 font-sans">
                      THE CHALLENGE
                    </h2>
                    <h3 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-6">
                      Your Thoughts Move Faster Than Your Fingers
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[#605A57] text-base leading-7 font-sans">
                      Communication should be effortless. Speaking is how we
                      naturally express ideas—instant, intuitive, and
                      authentically human. Yet in our daily digital
                      interactions, we're constrained by keyboards and touch
                      screens designed decades ago.
                    </p>

                    <p className="text-[#605A57] text-base leading-7 font-sans">
                      Consider the paradox: We live in an era where AI
                      generates entire articles, where algorithms drive vehicles
                      autonomously, and where global connectivity happens at
                      light speed. But to interact with all this technology?
                      We're still pecking away at keyboards, wrestling with
                      autocorrect, and watching our thoughts slow to a crawl.
                    </p>
                  </div>
                </section>

                {/* THE REALITY */}
                <section className="mb-16">
                  <div className="mb-6">
                    <h2 className="text-[#37322F] text-xs font-semibold uppercase tracking-wider mb-3 font-sans">
                      THE REALITY
                    </h2>
                    <h3 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-6">
                      Speech Technology Finally Caught Up
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[#605A57] text-base leading-7 font-sans">
                      For years, voice input has been a promise just out of
                      reach. We don't process information in typed characters—our
                      minds work in spoken language, conversation, and narrative
                      flow.
                    </p>

                    <p className="text-[#605A57] text-base leading-7 font-sans">
                      The last 18 months have marked a turning point in
                      AI-powered speech understanding. Modern language models
                      now grasp nuance, handle diverse accents seamlessly, and
                      learn from context in ways previously impossible.
                    </p>

                    <p className="text-[#605A57] text-base leading-7 font-sans">
                      Every major platform offers some form of voice input.
                      Siri, Google Assistant, dictation features across
                      operating systems—they've existed for years. But the gap
                      between promise and performance has kept most of us
                      reaching for the keyboard when accuracy matters.
                    </p>
                  </div>
                </section>

                {/* THE BREAKTHROUGH */}
                <section className="mb-16">
                  <div className="mb-6">
                    <h2 className="text-[#37322F] text-xs font-semibold uppercase tracking-wider mb-3 font-sans">
                      THE BREAKTHROUGH
                    </h2>
                    <h3 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-6">
                      Meet Oravo: Privacy-First Voice Input That Actually Works
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[#605A57] text-base leading-7 font-sans">
                      We built Oravo because we experienced that frustration
                      firsthand. Next-generation voice dictation isn't about
                      incremental improvements—it's about finally closing the
                      gap between how fast you think and how quickly you can
                      capture those thoughts.
                    </p>

                    <p className="text-[#605A57] text-base leading-7 font-sans">
                      Oravo's AI engine recognizes context, learns your unique
                      vocabulary, and adapts to your communication style. The
                      result? Transcription accuracy that feels effortless,
                      natural, and reliable enough to trust with your most
                      important work—all while keeping your data private and
                      secure.
                    </p>
                  </div>
                </section>

                {/* Picture Your Workflow */}
                <section className="mb-16">
                  <h3 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-6">
                    Picture Your Workflow Transformed
                  </h3>

                  <div className="space-y-4">
                    <p className="text-[#605A57] text-base leading-7 font-sans">
                      Content creators drafting entire articles by voice.
                      Developers documenting code through natural conversation.
                      Professionals capturing meeting notes without breaking eye
                      contact. Students transcribing lectures in real-time with
                      perfect accuracy.
                    </p>

                    <p className="text-[#605A57] text-base leading-7 font-sans">
                      This isn't speculation—it's already happening with Oravo
                      users today.
                    </p>
                  </div>
                </section>

                {/* One Voice Engine */}
                <section className="mb-16">
                  <h3 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-6">
                    One Voice Engine, Every Application
                  </h3>

                  <div className="space-y-4">
                    <p className="text-[#605A57] text-base leading-7 font-sans">
                      The future isn't dozens of disconnected speech tools, each
                      learning your voice from scratch. Oravo creates a unified
                      voice intelligence layer—one system that understands you,
                      learns continuously, and works seamlessly across your
                      entire digital workflow.
                    </p>

                    <p className="text-[#605A57] text-base leading-7 font-sans">
                      From quick messages to long-form content creation, from
                      technical documentation to creative writing, Oravo adapts
                      to whatever you need to express.
                    </p>
                  </div>
                </section>

                {/* Privacy & Speed */}
                <section className="mb-16 bg-gradient-to-br from-[#1877F2]/5 to-[#166FE5]/5 rounded-2xl p-8 md:p-10 border border-[rgba(24,119,242,0.1)]">
                  <h3 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-6">
                    Privacy-Focused. Lightning-Fast.
                  </h3>

                  <div className="space-y-4">
                    <p className="text-[#605A57] text-base leading-7 font-sans">
                      Your voice data is yours. Oravo is built with privacy at
                      its core—no unnecessary data collection, no selling your
                      information, no compromises. You control what data is
                      shared, and we're transparent about how it's used.
                    </p>

                    <p className="text-[#605A57] text-base leading-7 font-sans">
                      Speed matters when you're capturing thoughts in real-time.
                      Oravo delivers the fastest voice-to-text transcription
                      available, with near-zero latency that keeps pace with
                      natural speech. Think it, speak it, see it—instantly.
                    </p>
                  </div>
                </section>

                {/* Closing */}
                <section className="mb-12">
                  <p className="text-[#37322F] text-xl md:text-2xl font-medium leading-relaxed font-sans mb-8">
                    The keyboard served us well. But it's time to move forward.
                  </p>

                  <div className="border-t border-[rgba(55,50,47,0.12)] pt-8 mt-8">
                    <p className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-6">
                      Ready to speak your mind? Welcome to Oravo.
                    </p>
                  </div>

                  <div className="border-t border-[rgba(55,50,47,0.12)] pt-8 mt-8">
                    <p className="text-[#605A57] text-sm leading-6 font-sans italic">
                      Professional-grade voice dictation powered by advanced AI.
                      Experience the difference when speech recognition actually
                      understands you—while respecting your privacy and
                      delivering unmatched speed.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </main>

          {/* Footer */}
          <FooterSection />
        </div>
      </div>
    </div>
  );
}
