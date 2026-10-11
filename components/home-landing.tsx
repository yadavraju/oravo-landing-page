"use client";

import React from "react";
import dynamic from "next/dynamic";

import { useEffect } from "react";
import CTASection from "../components/cta-section";
import DownloadButtons from "../components/DownloadButtons";
import LandingAnalytics from "../components/LandingAnalytics";
import EmailComparisonSection from "../components/EmailComparisonSection";
import { Header } from "../components/header";
import AccentToSlackDemo from "./landing/AccentToSlackDemo";
import AgitationSection from "./landing/AgitationSection";
import { Band } from "./landing/Band";
import { Parallax } from "./landing/Parallax";
import { Reveal, RevealWords } from "./landing/Reveal";


const DocumentationSection = dynamic(() => import("../components/documentation-section"));
const EffortlessIntegration = dynamic(() => import("../components/effortless-integration-updated"));
const FAQSection = dynamic(() => import("../components/faq-section"));
const AskAISection = dynamic(() => import("../components/ask-ai-section"));
const FooterSection = dynamic(() => import("../components/footer-section"));
const MadeForYou = dynamic(() => import("../components/MadeForYou"));
const PricingSection = dynamic(() => import("../components/pricing-section"));
const SmartSimpleBrilliant = dynamic(() => import("../components/smart-simple-brilliant"));
const TechCompanyMarquee = dynamic(() => import("../components/TechCompanyMarquee"));
const TestimonialsSection = dynamic(() => import("../components/testimonials-section"));
const WisprSwitchSection = dynamic(() => import("../components/wispr-switch-section"));
const YourWorkInSync = dynamic(() => import("../components/your-work-in-sync"));
const TranslationDemo = dynamic(() => import("../components/TranslationDemo"));
const TwoWayExamples = dynamic(() => import("../components/two-way-examples"));

export default function HomeLanding({ blogSection }: { blogSection?: React.ReactNode }) {
  // Handle hash navigation from other pages
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const sectionId = hash.replace("#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does it really understand my accent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oravo is built for multilingual speakers and strong accents. We are running the same-script benchmark across five accent and language cohorts so you can inspect the method and results.",
        },
      },
      {
        "@type": "Question",
        name: "Can I speak my native language and get English text?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Speak Spanish, Hindi, Mandarin, Arabic, French, Portuguese, Russian, German, Japanese, Korean, or 20+ other languages\u2014Oravo translates to fluent, context-aware English instantly.",
        },
      },
      {
        "@type": "Question",
        name: "How is Oravo different from Wispr Flow, Willow Voice, Dragon, and other dictation tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oravo focuses on multilingual voice typing, polished output, and accent-friendly workflows on Mac, Windows, and Android. Compare current platform support, features, and pricing for your needs.",
        },
      },
      {
        "@type": "Question",
        name: "What apps does it work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Everywhere you can type: Gmail, Slack, Notion, Google Docs, Microsoft Word, Figma, VSCode, Jira, LinkedIn, WhatsApp, Teams, Salesforce\u2014literally any text field.",
        },
      },
      {
        "@type": "Question",
        name: "How does context awareness work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oravo reads which app you're using and adjusts tone, format, and structure automatically. The same sentence becomes casual in Slack, professional in Gmail, and technical in Notion\u2014without you doing anything.",
        },
      },
      {
        "@type": "Question",
        name: "Is my voice data private and secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check Oravo's current privacy policy for exact details about voice processing, retention, and third-party services.",
        },
      },
      {
        "@type": "Question",
        name: "Can I try before I pay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Current trial and pricing details are shown in the app at signup.",
        },
      },
      {
        "@type": "Question",
        name: "What if I speak multiple languages in one sentence?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oravo handles code-switching naturally. Speak \"I need to email the cliente about the meeting\"\u2014Oravo understands and formats correctly.",
        },
      },
    ],
  };

  // Band colours, top to bottom. Each band blends out of the one above it.
  const SAND = "var(--o-band-sand)";
  const PAPER = "var(--o-paper)";
  const CANVAS = "var(--o-canvas)";
  const CLAY = "var(--o-band-clay)";
  const ESPRESSO = "var(--o-band-espresso)";
  const BLUSH = "var(--o-blush)";
  const SHELL = "mx-auto w-full max-w-6xl px-5 sm:px-8";

  return (
    <div className="grain relative w-full min-h-screen bg-paper text-ink overflow-x-hidden">
      <LandingAnalytics variant="warm-bands-v1" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />

      {/* ───────────── Hero: one warm solid colour, parallax shapes ───────────── */}
      <Band color={SAND} className="pt-28 sm:pt-36 pb-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Parallax speed={140} className="absolute -left-40 top-16 sm:-left-24">
            <div className="h-[380px] w-[380px] rounded-full bg-sand-deep sm:h-[460px] sm:w-[460px]" />
          </Parallax>
          <Parallax speed={-90} className="absolute -right-32 top-[38%] sm:-right-16">
            <div className="h-[300px] w-[300px] rotate-12 rounded-[56px] bg-clay sm:h-[360px] sm:w-[360px]" />
          </Parallax>
          <Parallax speed={220} className="absolute left-[14%] top-[58%] hidden md:block">
            <div className="h-4 w-4 rounded-full bg-brand" />
          </Parallax>
        </div>

        <div className={`${SHELL} relative`}>
          <Parallax speed={-30}>
            <div className="mx-auto flex max-w-[62rem] flex-col items-center text-center">
              <Reveal>
                <span className="chip px-3 py-1.5 font-display text-xs font-semibold text-ink-soft">
                  <span className="h-1.5 w-1.5 rounded-sm bg-brand" />
                  AI dictation for non-native English speakers
                </span>
              </Reveal>

              <h1 className="display-1 mt-6 text-ink">
                <span className="block text-balance">
                  <RevealWords text="Speak in your accent." delay={0.05} />
                </span>
                <span className="block text-balance">
                  <RevealWords text="Write in" delay={0.25} />{" "}
                  <span className="text-accent">
                    <RevealWords text="flawless business English." delay={0.37} />
                  </span>
                </span>
              </h1>

              <Reveal delay={0.5}>
                <p className="subtitle mx-auto mt-5 max-w-[640px] text-balance">
                  The AI dictation tool built specifically for non-native English speakers. Speak in
                  your natural accent or directly in your native language, and Oravo instantly types
                  perfect, professional English into the apps you already use.
                </p>
              </Reveal>

              <Reveal delay={0.6} className="mt-9 w-full">
                <div id="download-section">
                  <DownloadButtons variant="glass" />
                </div>
              </Reveal>

              <Reveal delay={0.7}>
                <div className="chip mt-8 flex-col px-4 py-3 sm:flex-row sm:py-2.5">
                  <div className="flex -space-x-1.5" aria-hidden="true">
                    {[
                      ["AR", "#f6dccd", "#9a4424"],
                      ["LM", "#efe4d3", "#6b5a3e"],
                      ["RS", "#e8dccf", "#5c4a3a"],
                      ["KO", "#f3e4d2", "#7a4d2c"],
                    ].map(([initials, bg, fg]) => (
                      <span
                        key={initials}
                        className="flex h-7 w-7 items-center justify-center rounded-md border-2 border-white font-display text-[10px] font-bold"
                        style={{ background: bg, color: fg }}
                      >
                        {initials}
                      </span>
                    ))}
                  </div>
                  <p className="text-[13px] leading-snug text-ink-soft sm:text-left">
                    Trusted by <span className="font-semibold text-ink">10,000+</span> remote
                    developers, international founders, and global agency owners.
                  </p>
                </div>
              </Reveal>
            </div>
          </Parallax>

          <Reveal delay={0.35} y={32} className="relative mt-14 sm:mt-16">
            <Parallax speed={36}>
              <AccentToSlackDemo />
            </Parallax>
          </Reveal>

          <div className="mt-16 sm:mt-20">
            <p className="eyebrow mb-4 text-center">Used by professionals at</p>
            <div className="[mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
              <TechCompanyMarquee />
            </div>
          </div>
        </div>
      </Band>

      {/* ───────────── Section 2: The Agitation ───────────── */}
      <Band color={PAPER} from={SAND} aria-label="The real problem">
        <AgitationSection />
      </Band>

      {/* Keyboard vs. voice */}
      <Band color={CANVAS} from={PAPER} className="py-16 sm:py-24">
        <div className={SHELL}>
          <Reveal>
            <div className="surface-solid !rounded-2xl p-3 sm:p-6">
              <EmailComparisonSection />
            </div>
          </Reveal>
        </div>
      </Band>

      {/* Real-time translation */}
      <Band color={CLAY} from={CANVAS} className="py-20 sm:py-28" aria-labelledby="translation-heading">
        <Parallax speed={110} className="pointer-events-none absolute -left-24 top-24 hidden lg:block" aria-hidden="true">
          <div className="h-56 w-56 rounded-full bg-sand-deep" />
        </Parallax>
        <div className={`${SHELL} relative`}>
          <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
            <Reveal><p className="eyebrow">Real-time translation</p></Reveal>
            <h2 id="translation-heading" className="display-2 mt-3">
              <RevealWords text="Think in your language. Send it in English." />
            </h2>
            <Reveal delay={0.12}>
              <p className="subtitle mt-4 max-w-xl">
                Speak Spanish, Hindi, Portuguese, or any of 60+ languages. Oravo writes fluent,
                context-aware English, and works in reverse when you need it to.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="mx-auto mt-12 max-w-[820px]">
            <Parallax speed={24}>
              <div className="surface-solid overflow-hidden !rounded-2xl">
                <div className="flex h-[320px] w-full items-center justify-center sm:h-[380px]">
                  <TranslationDemo />
                </div>
              </div>
            </Parallax>
          </Reveal>
          <Reveal className="mt-10">
            <TwoWayExamples />
          </Reveal>
        </div>
      </Band>

      {/* Accent proof: the one dark band */}
      <Band color={ESPRESSO} from={CLAY} blend={220} className="pt-36 pb-24 sm:pt-44 sm:pb-28" aria-labelledby="accent-proof-heading">
        <Parallax speed={-70} className="pointer-events-none absolute right-[6%] top-40 hidden md:block" aria-hidden="true">
          <div className="h-40 w-40 rotate-12 rounded-[36px] bg-white/[0.04]" />
        </Parallax>
        <div className={`${SHELL} relative grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]`}>
          <div className="flex flex-col items-start">
            <Reveal><p className="eyebrow !text-white/45">Accent proof, not vague claims</p></Reveal>
            <h2 id="accent-proof-heading" className="display-2 mt-3 text-white">
              <RevealWords text="Built for real accents. Measured with the same script." />
            </h2>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[560px] text-base leading-relaxed text-white/70 sm:text-lg">
                We are testing Oravo end to end across Hindi-accented English, Spanish-accented English, Hindi and Spanish speech to polished English, plus a native-English control.
              </p>
              <p className="mt-4 max-w-[560px] text-sm leading-relaxed text-white/50">
                The report will separate raw transcription from polished output and publish sample sizes, corrections, meaning errors, and time to final text. Until then, we will not turn an upstream model benchmark into an Oravo accuracy claim.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Parallax speed={30}>
              <div className="rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur-xl sm:p-7">
                <p className="eyebrow !text-white/45 mb-5">Pilot scorecard</p>
                <ul className="grid divide-y divide-white/10 text-sm text-white/85 sm:text-base">
                  {[
                    "Same audio and scripts across cohorts",
                    "Raw transcript and final output scored separately",
                    "Corrections, meaning errors, and time reported",
                    "Failure cases included, not only the best demos",
                  ].map((item, i) => (
                    <li key={item} className="flex gap-3 py-3 first:pt-0">
                      <span className="font-display text-[#e8a07f]">{String(i + 1).padStart(2, "0")}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/55">Pilot target: at least 10 speakers per cohort and 10 utterances per speaker before any strong accuracy claim.</p>
              </div>
            </Parallax>
          </Reveal>
        </div>
      </Band>

      {/* Speak once. Get finished text. */}
      <Band color={PAPER} from={ESPRESSO} blend={220} className="pt-36 pb-20 sm:pt-44 sm:pb-28" aria-labelledby="finished-text-heading">
        <div className={SHELL}>
          <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
            <Reveal><p className="eyebrow">Polished, not just transcribed</p></Reveal>
            <h2 id="finished-text-heading" className="display-2 mt-3">
              <RevealWords text="Speak once. Get finished text." />
            </h2>
            <Reveal delay={0.12}>
              <p className="subtitle mt-4 max-w-xl">
                Oravo removes filler words, fixes grammar, adds punctuation, and matches the tone of
                whatever app you&apos;re writing in, automatically.
              </p>
            </Reveal>
          </div>
          {/* One surface split by hairlines, video-shala style, instead of three floating boxes. */}
          <Reveal className="mt-12">
            <div className="surface-solid grid grid-cols-1 divide-y divide-line overflow-hidden md:grid-cols-3 md:divide-x md:divide-y-0">
              {[
                {
                  title: "Same thought, different apps.",
                  body: "Oravo knows when you're in Slack vs. Gmail vs. Notion, and adjusts tone and formatting to match. Casual in chat. Professional in email. Structured in docs.",
                },
                {
                  title: "No more “um, like, you know.”",
                  body: "Oravo removes filler words, fixes false starts, and turns rambling thoughts into clean sentences, so what comes out sounds intentional, not dictated.",
                },
                {
                  title: "Punctuation, paragraphs, capitalization.",
                  body: "Bullet lists when you say “three things.” Line breaks when you pause. Code blocks in technical contexts. You never touch the keyboard to fix formatting.",
                },
              ].map((card, i) => (
                <div key={card.title} className="p-7 sm:p-8">
                  <span className="font-display text-xs font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display-3 mt-3 text-ink">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{card.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Band>

      {/* Feature highlights */}
      <Band color={CANVAS} from={PAPER} className="py-20 sm:py-28" aria-labelledby="features-heading">
        <div className={SHELL}>
          <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
            <Reveal><p className="eyebrow">Feature highlights</p></Reveal>
            <h2 id="features-heading" className="display-2 mt-3">
              <RevealWords text="Built for the way you actually work." />
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            <Reveal>
              <div className="surface-solid surface-interactive flex h-full flex-col gap-5 p-6 sm:p-8">
                <div className="flex flex-col gap-2">
                  <h3 className="display-3">Context-aware AI</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    Understands technical jargon, proper nouns from your contacts, and what you&apos;re
                    working on. Works in multilingual speech and professional vocabulary. Benchmark
                    results will be published with the method and sample sizes.
                  </p>
                </div>
                <div className="flex h-[280px] w-full items-center justify-center overflow-hidden rounded-lg bg-canvas sm:h-[320px]">
                  <SmartSimpleBrilliant width="100%" height="100%" theme="light" className="scale-65 sm:scale-75 md:scale-85" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="surface-solid surface-interactive flex h-full flex-col gap-5 p-6 sm:p-8">
                <div className="flex flex-col gap-2">
                  <h3 className="display-3">Auto-format as you speak</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    Punctuation, paragraphs, capitalization, and lists, added automatically. Just
                    speak, no voice commands needed.
                  </p>
                </div>
                <div className="relative flex h-[280px] w-full items-center justify-center overflow-hidden rounded-lg bg-canvas sm:h-[320px]">
                  <YourWorkInSync width="400" height="280" theme="light" className="scale-80 sm:scale-90" />
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="surface-solid surface-interactive flex h-full flex-col gap-5 p-6 sm:p-8">
                <div className="flex flex-col gap-2">
                  <h3 className="display-3">Matches your style</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    Oravo learns your tone over time. Short and direct in Slack. Warm and full in
                    email. Your voice, your style, every time.
                  </p>
                </div>
                <div className="relative flex h-[280px] w-full items-center justify-center overflow-hidden rounded-lg bg-canvas sm:h-[320px]">
                  <div className="flex w-full max-w-[320px] flex-col items-center gap-5 px-6">
                    <div className="w-full text-center">
                      <p className="eyebrow mb-2">You say</p>
                      <p className="text-sm italic text-ink">&ldquo;tell them I&apos;ll be late&rdquo;</p>
                    </div>
                    <svg className="h-5 w-5 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <div className="flex w-full flex-col gap-3">
                      <div className="surface-solid !rounded-lg p-3">
                        <p className="eyebrow mb-1 !text-[10px]">Email</p>
                        <p className="text-sm text-ink">I&apos;ll be arriving shortly after the scheduled time.</p>
                      </div>
                      <div className="surface-solid !rounded-lg p-3">
                        <p className="eyebrow mb-1 !text-[10px]">Slack</p>
                        <p className="text-sm text-ink">Running a few mins late!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="surface-solid surface-interactive flex h-full flex-col gap-5 p-6 sm:p-8">
                <div className="flex flex-col gap-2">
                  <h3 className="display-3">Works where you write</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    Gmail, Slack, Notion, Google Docs, Word, Linear, Jira, Figma, VSCode, LinkedIn:
                    anywhere your cursor blinks, Oravo types.
                  </p>
                </div>
                <div className="relative flex h-[280px] w-full items-center justify-center overflow-hidden rounded-lg bg-canvas sm:h-[320px]">
                  <EffortlessIntegration width={400} height={280} className="max-w-full max-h-full" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Band>

      {/* Long-form sections: each keeps its own layout and motion. */}
      <Band color={PAPER} from={CANVAS} className="py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[1060px] px-5 sm:px-8 lg:px-0">
          <div className="surface-solid overflow-hidden !rounded-2xl">
            <DocumentationSection />
            <MadeForYou />
            <TestimonialsSection />
            <PricingSection />
            <WisprSwitchSection />
            <FAQSection />
            <AskAISection />
          </div>
        </div>
      </Band>

      {/* Closing CTA and footer share one warm ground, as in video-shala. */}
      <Band color={BLUSH} from={PAPER} className="pt-16 sm:pt-24">
        <div className={SHELL}>
          <CTASection />
        </div>
        <div className="mx-auto mt-16 w-full max-w-[1060px] px-5 sm:px-8 lg:px-0">
          {blogSection}
          <FooterSection />
        </div>
      </Band>
    </div>
  );
}
