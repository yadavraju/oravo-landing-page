import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Band } from "@/components/landing/Band";
import { Doodle } from "@/components/landing/Doodle";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { Parallax } from "@/components/landing/Parallax";
import { Reveal, RevealWords } from "@/components/landing/Reveal";
import { DrawnUnderline, KeysVersusVoice, ReadingProgress } from "@/components/seo-pages/EditorialMotion";
import { DropCap, EssayPart, PullQuote } from "@/components/seo-pages/Essay";
import { BLUSH, CANVAS, CLAY, PAPER, SAND, SHELL } from "@/components/seo-pages/SeoSections";

export const metadata: Metadata = {
  title: "Our Manifesto | Oravo",
  description:
    "Why voice? Why now? Discover how Oravo is transforming the way we interact with technology through privacy-focused, lightning-fast AI voice dictation.",
  openGraph: {
    title: "Our Manifesto | Oravo",
    description: "Why we built Oravo",
    url: "https://oravo.ai/manifesto",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Manifesto | Oravo",
    description: "Why we built Oravo",
  },
  alternates: {
    canonical: "https://oravo.ai/manifesto",
  },
};

const WORKFLOWS = [
  { who: "Content creators", what: "drafting entire articles by voice." },
  { who: "Developers", what: "documenting code through natural conversation." },
  { who: "Professionals", what: "capturing meeting notes without breaking eye contact." },
  { who: "Students", what: "capturing lecture notes in real time." },
];

export default function ManifestoPage() {
  return (
    <MarketingShell>
      <ReadingProgress />

      {/* Title page */}
      <section className="relative w-full overflow-hidden bg-sand pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Parallax speed={130} className="absolute -left-40 top-20 sm:-left-24">
            <div className="h-[380px] w-[380px] rounded-full bg-sand-deep sm:h-[460px] sm:w-[460px]" />
          </Parallax>
          <Parallax speed={-80} className="absolute -right-28 top-[55%]">
            <div className="h-[300px] w-[300px] rotate-12 rounded-[56px] bg-clay" />
          </Parallax>
          <Parallax speed={60} className="absolute left-[6%] top-[58%] hidden xl:block">
            <Doodle name="mic" className="w-40" />
          </Parallax>
          <Parallax speed={-40} className="absolute right-[7%] top-[170px] hidden xl:block">
            <Doodle name="speech" className="w-40" />
          </Parallax>
        </div>
        <div className={`${SHELL} relative flex flex-col items-center text-center`}>
          <Reveal>
            <p className="eyebrow">Our manifesto</p>
          </Reveal>
          <h1 className="mt-6 font-serif text-[clamp(3.2rem,9vw,7rem)] font-normal leading-[0.98] tracking-[-0.035em] text-ink">
            <span className="block">
              <RevealWords text="Why Voice?" delay={0.05} />
            </span>
            <span className="block text-accent">
              <DrawnUnderline>
                <RevealWords text="Why Now?" delay={0.25} />
              </DrawnUnderline>
            </span>
          </h1>
          <Reveal delay={0.45}>
            <p className="mx-auto mt-8 max-w-[560px] font-serif text-[20px] italic leading-relaxed text-ink-soft sm:text-[22px]">
              On the keyboard, the voice, and why we built Oravo.
            </p>
          </Reveal>
          <Reveal delay={0.55}>
            <p className="mt-8 inline-flex items-center gap-3 font-display text-[12.5px] text-ink-faint">
              <span className="h-px w-10 bg-ink/20" />
              The Oravo team · 4 min read
              <span className="h-px w-10 bg-ink/20" />
            </p>
          </Reveal>
        </div>
      </section>

      {/* I + II */}
      <Band color={PAPER} from={SAND} blend={200} className="pt-24 pb-16 sm:pt-28">
        <div className="space-y-24 sm:space-y-28">
          <EssayPart numeral="I" label="The challenge" title="Your Thoughts Move Faster Than Your Fingers" doodle="speed" margin={<KeysVersusVoice />}>
            <DropCap>
              Communication should be effortless. Speaking is how we naturally express ideas: instant, intuitive, and authentically human. Yet in our daily digital
              interactions, we&apos;re constrained by keyboards and touch screens designed decades ago.
            </DropCap>
            <p>
              Consider the paradox: we live in an era where AI generates entire articles, where algorithms drive vehicles autonomously, and where global connectivity
              happens at light speed. But to interact with all this technology? We&apos;re still pecking away at keyboards, wrestling with autocorrect, and watching our
              thoughts slow to a crawl.
            </p>
          </EssayPart>

          <PullQuote>We don&apos;t process information in typed characters. Our minds work in spoken language.</PullQuote>

          <EssayPart numeral="II" label="The reality" title="Speech Technology Finally Caught Up" doodle="measure">
            <p>
              For years, voice input has been a promise just out of reach. We don&apos;t process information in typed characters. Our minds work in spoken language,
              conversation, and narrative flow.
            </p>
            <p>
              The last 18 months have marked a turning point in AI-powered speech understanding. Modern language models now grasp nuance, handle diverse accents far
              better, and learn from context in ways previously impossible.
            </p>
            <p>
              Every major platform offers some form of voice input. Siri, Google Assistant, dictation features across operating systems: they&apos;ve existed for years.
              But the gap between promise and performance has kept most of us reaching for the keyboard when accuracy matters.
            </p>
          </EssayPart>
        </div>
      </Band>

      {/* III */}
      <Band color={CANVAS} from={PAPER} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className="space-y-24 sm:space-y-28">
          <EssayPart numeral="III" label="The breakthrough" title="Meet Oravo: Privacy-First Voice Input That Actually Works" doodle="sparkle">
            <p>
              We built Oravo because we experienced that frustration firsthand. Next-generation voice dictation isn&apos;t about incremental improvements. It&apos;s about
              finally closing the gap between how fast you think and how quickly you can capture those thoughts.
            </p>
            <p>
              Oravo&apos;s AI engine recognizes context, learns your unique vocabulary, and adapts to your communication style. The result? Transcription that feels
              effortless, natural, and reliable enough to trust with your most important work, while keeping your data private and secure.
            </p>
          </EssayPart>

          <EssayPart numeral="IV" label="In practice" title="Picture Your Workflow Transformed" doodle="people">
            <ul className="not-prose -mt-1 divide-y divide-line border-y border-line">
              {WORKFLOWS.map((w) => (
                <li key={w.who} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="w-44 shrink-0 font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-ink">{w.who}</span>
                  <span className="italic">{w.what}</span>
                </li>
              ))}
            </ul>
            <p>This isn&apos;t speculation. It&apos;s already happening with Oravo users today.</p>
          </EssayPart>

          <EssayPart numeral="V" label="The idea" title="One Voice Engine, Every Application" doodle="windows">
            <p>
              The future isn&apos;t dozens of disconnected speech tools, each learning your voice from scratch. Oravo creates a unified voice intelligence layer: one system
              that understands you, learns continuously, and works seamlessly across your entire digital workflow.
            </p>
            <p>
              From quick messages to long-form content creation, from technical documentation to creative writing, Oravo adapts to whatever you need to express.
            </p>
          </EssayPart>
        </div>
      </Band>

      {/* Privacy & speed: two columns, like facing pages */}
      <Band color={CLAY} from={CANVAS} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <div className="mx-auto max-w-[900px] text-center">
            <Parallax speed={18} className="mx-auto mb-4 w-28">
              <Doodle name="notebook" className="w-28" />
            </Parallax>
            <Reveal>
              <p className="eyebrow">Two promises</p>
            </Reveal>
            <h2 className="display-2 mt-3 text-ink">
              <RevealWords text="Privacy-Focused. Lightning-Fast." />
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-[980px] overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_24px_48px_-30px_rgba(51,48,42,0.4)] md:grid-cols-2">
            <Reveal className="p-7 sm:p-10">
              <p className="font-serif text-[30px] leading-none text-brand">i.</p>
              <h3 className="display-3 mt-4 text-ink">Your voice data is yours.</h3>
              <p className="mt-4 font-serif text-[18px] leading-[1.7] text-ink-soft">
                Oravo is built with privacy at its core: no unnecessary data collection, no selling your information, no compromises. You control what data is shared,
                and we&apos;re transparent about how it&apos;s used.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="border-t border-line p-7 sm:p-10 md:border-l md:border-t-0">
              <p className="font-serif text-[30px] leading-none text-brand">ii.</p>
              <h3 className="display-3 mt-4 text-ink">Speed matters.</h3>
              <p className="mt-4 font-serif text-[18px] leading-[1.7] text-ink-soft">
                Speed matters when you&apos;re capturing thoughts in real time. Oravo is built to keep pace with natural speech, so the words land while the thought is
                still fresh. Think it, speak it, see it.
              </p>
            </Reveal>
          </div>
        </div>
      </Band>

      {/* Closing */}
      <Band color={BLUSH} from={CLAY} blend={200} className="pt-24 pb-24 sm:pt-28">
        <div className="space-y-14">
          <PullQuote>The keyboard served us well. But it&apos;s time to move forward.</PullQuote>
          <div className={`${SHELL} flex flex-col items-center text-center`}>
            <Reveal>
              <p className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] leading-snug text-ink">
                Ready to speak your mind? <span className="text-accent">Welcome to Oravo.</span>
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Doodle name="scribble" className="mx-auto mt-6 w-40" />
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a href="/download" className="btn-primary">
                  Download Oravo
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
                <a href="/how-to-use" className="btn-secondary">
                  See how it works
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-12 max-w-[560px] border-t border-line pt-8 font-serif text-[16px] italic leading-relaxed text-ink-faint">
                Professional-grade voice dictation powered by advanced AI. Experience the difference when speech recognition actually understands you, while respecting
                your privacy and keeping up with your thoughts.
              </p>
            </Reveal>
          </div>
        </div>
      </Band>
    </MarketingShell>
  );
}
