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
import LiquidBackground from "./landing/LiquidBackground";
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

  return (
    <div className="grain relative w-full min-h-screen bg-canvas text-ink overflow-x-hidden">
      <LandingAnalytics variant="liquid-glass-v1" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* One soft liquid field behind the whole page so every glass surface has colour to refract. */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-45" aria-hidden="true">
        <LiquidBackground />
      </div>
      <Header />

      {/* ───────────── Hero ───────────── */}
      <section className="relative isolate overflow-hidden px-4 pt-32 sm:px-6 sm:pt-40 lg:pt-44 pb-16 sm:pb-24">
        <LiquidBackground className="[mask-image:linear-gradient(180deg,#000_70%,transparent)]" />
        <div className="relative z-10 mx-auto flex max-w-[1120px] flex-col items-center text-center">
          <Reveal>
            <span className="glass-pill inline-flex items-center gap-2 px-4 py-1.5 font-display text-xs font-semibold text-ink-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              AI dictation for non-native English speakers
            </span>
          </Reveal>

          <h1 className="display-1 mt-7 max-w-[1120px] text-ink">
            <RevealWords text="Speak in your accent." delay={0.05} />
            <br />
            <span className="text-liquid">
              <RevealWords text="Write in flawless business English." delay={0.3} />
            </span>
          </h1>

          <Reveal delay={0.55}>
            <p className="subtitle mx-auto mt-6 max-w-[680px]">
              The AI dictation tool built specifically for non-native English speakers. Speak in your
              natural accent or directly in your native language, and Oravo instantly types perfect,
              professional English into the apps you already use.
            </p>
          </Reveal>

          <Reveal delay={0.7} className="mt-9 w-full" >
            <div id="download-section">
              <DownloadButtons variant="glass" />
            </div>
          </Reveal>

          <Reveal delay={0.85}>
            <div className="glass-pill mt-8 inline-flex flex-col items-center gap-3 px-4 py-3 sm:flex-row sm:px-5 sm:py-2.5">
              <div className="flex -space-x-2" aria-hidden="true">
                {[
                  ["AR", "#ffe3d1", "#b4532a"],
                  ["LM", "#e6defe", "#5b3fb8"],
                  ["RS", "#d9ecfb", "#24628f"],
                  ["KO", "#d6f1e3", "#2c6b4f"],
                ].map(([initials, bg, fg]) => (
                  <span
                    key={initials}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white font-display text-[10px] font-bold"
                    style={{ background: bg, color: fg }}
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <p className="text-[13px] leading-snug text-ink-soft sm:text-left">
                Trusted by <span className="font-semibold text-ink">10,000+</span> remote developers,
                international founders, and global agency owners.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4} y={48} className="relative z-10 mx-auto mt-16 max-w-[1120px] sm:mt-20">
          <AccentToSlackDemo />
        </Reveal>
      </section>

      {/* Logo marquee */}
      <section aria-label="Used by professionals at" className="relative z-10 py-6">
        <p className="eyebrow mb-5 text-center">Used by professionals at</p>
        <div className="[mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <TechCompanyMarquee />
        </div>
      </section>

      {/* ───────────── Section 2: The Agitation ───────────── */}
      <AgitationSection />

      <div className="relative z-10 mx-auto flex w-full max-w-[1120px] flex-col gap-24 px-4 pb-24 sm:gap-32 sm:px-6">
        {/* Keyboard vs. voice */}
        <Reveal>
          <div className="glass glass-rim rounded-[36px] p-3 sm:p-6">
            <EmailComparisonSection />
          </div>
        </Reveal>

        {/* Real-time translation */}
        <section className="relative" aria-labelledby="translation-heading">
          <div className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center gap-5 text-center">
            <Reveal><p className="eyebrow">Real-time translation</p></Reveal>
            <h2 id="translation-heading" className="display-2">
              <RevealWords text="Think in your language. Send it in English." />
            </h2>
            <Reveal delay={0.15}>
              <p className="subtitle max-w-[620px]">
                Speak Spanish, Hindi, Portuguese, or any of 60+ languages. Oravo writes fluent,
                context-aware English, and works in reverse when you need it to.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="relative z-10 mx-auto mt-12 max-w-[820px]">
            <div className="glass-strong glass-rim overflow-hidden rounded-[32px]">
              <div className="flex h-[320px] w-full items-center justify-center sm:h-[380px]">
                <TranslationDemo />
              </div>
            </div>
          </Reveal>
          <Reveal className="relative z-10 mt-10">
            <TwoWayExamples />
          </Reveal>
        </section>

        {/* Accent proof */}
        <Reveal>
          <section className="glass-dark relative overflow-hidden rounded-[36px] p-7 sm:p-12" aria-labelledby="accent-proof-heading">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#f2661c] opacity-30 blur-[90px]" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-32 left-10 h-80 w-80 rounded-full bg-[#7a5cd6] opacity-30 blur-[90px]" aria-hidden="true" />
            <div className="relative grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
              <div className="flex flex-col items-start gap-5">
                <p className="eyebrow !text-white/50">Accent proof, not vague claims</p>
                <h2 id="accent-proof-heading" className="display-2 text-white">
                  Built for real accents. Measured with the same script.
                </h2>
                <p className="max-w-[560px] text-base leading-relaxed text-white/70 sm:text-lg">
                  We are testing Oravo end to end across Hindi-accented English, Spanish-accented English, Hindi and Spanish speech to polished English, plus a native-English control.
                </p>
                <p className="max-w-[560px] text-sm leading-relaxed text-white/50">
                  The report will separate raw transcription from polished output and publish sample sizes, corrections, meaning errors, and time to final text. Until then, we will not turn an upstream model benchmark into an Oravo accuracy claim.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
                <p className="eyebrow !text-white/50 mb-5">Pilot scorecard</p>
                <ul className="grid gap-4 text-sm text-white/85 sm:text-base">
                  {[
                    "Same audio and scripts across cohorts",
                    "Raw transcript and final output scored separately",
                    "Corrections, meaning errors, and time reported",
                    "Failure cases included, not only the best demos",
                  ].map((item, i) => (
                    <li key={item} className="flex gap-3">
                      <span className="font-display text-[#ffb38a]">{String(i + 1).padStart(2, "0")}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/55">Pilot target: at least 10 speakers per cohort and 10 utterances per speaker before any strong accuracy claim.</p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Speak once. Get finished text. */}
        <section aria-labelledby="finished-text-heading">
          <div className="mx-auto flex max-w-[760px] flex-col items-center gap-5 text-center">
            <Reveal><p className="eyebrow">Polished, not just transcribed</p></Reveal>
            <h2 id="finished-text-heading" className="display-2">
              <RevealWords text="Speak once. Get finished text." />
            </h2>
            <Reveal delay={0.15}>
              <p className="subtitle max-w-[620px]">
                Oravo removes filler words, fixes grammar, adds punctuation, and matches the tone of
                whatever app you&apos;re writing in, automatically.
              </p>
            </Reveal>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {[
              {
                title: "Same thought, different apps.",
                body: "Oravo knows when you're in Slack vs. Gmail vs. Notion, and adjusts tone and formatting to match. Casual in chat. Professional in email. Structured in docs.",
                tint: "#ffc8a6",
              },
              {
                title: "No more “um, like, you know.”",
                body: "Oravo removes filler words, fixes false starts, and turns rambling thoughts into clean sentences, so what comes out sounds intentional, not dictated.",
                tint: "#d8cbff",
              },
              {
                title: "Punctuation, paragraphs, capitalization.",
                body: "Bullet lists when you say “three things.” Line breaks when you pause. Code blocks in technical contexts. You never touch the keyboard to fix formatting.",
                tint: "#c7e4fb",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 0.08}>
                <div className="glass glass-rim group relative h-full overflow-hidden rounded-[28px] p-7 transition-transform duration-500 ease-entrance hover:-translate-y-1">
                  <span
                    className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-70 blur-2xl transition-transform duration-700 ease-entrance group-hover:scale-125"
                    style={{ background: card.tint }}
                    aria-hidden="true"
                  />
                  <h3 className="display-3 relative text-ink">{card.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-ink-soft">{card.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Feature highlights bento */}
        <section aria-labelledby="features-heading">
          <div className="mx-auto flex max-w-[760px] flex-col items-center gap-5 text-center">
            <Reveal><p className="eyebrow">Feature highlights</p></Reveal>
            <h2 id="features-heading" className="display-2">
              <RevealWords text="Built for the way you actually work." />
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            <Reveal>
              <div className="glass glass-rim flex h-full flex-col gap-5 rounded-[32px] p-6 sm:p-8">
                <div className="flex flex-col gap-2">
                  <h3 className="display-3">Context-aware AI</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    Understands technical jargon, proper nouns from your contacts, and what you&apos;re
                    working on. Works in multilingual speech and professional vocabulary. Benchmark
                    results will be published with the method and sample sizes.
                  </p>
                </div>
                <div className="flex h-[280px] w-full items-center justify-center overflow-hidden rounded-[22px] bg-white/50 sm:h-[320px]">
                  <SmartSimpleBrilliant width="100%" height="100%" theme="light" className="scale-65 sm:scale-75 md:scale-85" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="glass glass-rim flex h-full flex-col gap-5 rounded-[32px] p-6 sm:p-8">
                <div className="flex flex-col gap-2">
                  <h3 className="display-3">Auto-format as you speak</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    Punctuation, paragraphs, capitalization, and lists, added automatically. Just
                    speak, no voice commands needed.
                  </p>
                </div>
                <div className="relative flex h-[280px] w-full items-center justify-center overflow-hidden rounded-[22px] bg-white/50 sm:h-[320px]">
                  <YourWorkInSync width="400" height="280" theme="light" className="scale-80 sm:scale-90" />
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="glass glass-rim flex h-full flex-col gap-5 rounded-[32px] p-6 sm:p-8">
                <div className="flex flex-col gap-2">
                  <h3 className="display-3">Matches your style</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    Oravo learns your tone over time. Short and direct in Slack. Warm and full in
                    email. Your voice, your style, every time.
                  </p>
                </div>
                <div className="relative flex h-[280px] w-full items-center justify-center overflow-hidden rounded-[22px] bg-white/50 sm:h-[320px]">
                  <div className="flex w-full max-w-[320px] flex-col items-center gap-5 px-6">
                    <div className="w-full text-center">
                      <p className="eyebrow mb-2">You say</p>
                      <p className="text-sm italic text-ink">&ldquo;tell them I&apos;ll be late&rdquo;</p>
                    </div>
                    <svg className="h-5 w-5 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <div className="flex w-full flex-col gap-3">
                      <div className="glass-strong rounded-2xl p-3">
                        <p className="eyebrow mb-1 !text-[10px]">Email</p>
                        <p className="text-sm text-ink">I&apos;ll be arriving shortly after the scheduled time.</p>
                      </div>
                      <div className="glass-strong rounded-2xl p-3">
                        <p className="eyebrow mb-1 !text-[10px]">Slack</p>
                        <p className="text-sm text-ink">Running a few mins late!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="glass glass-rim flex h-full flex-col gap-5 rounded-[32px] p-6 sm:p-8">
                <div className="flex flex-col gap-2">
                  <h3 className="display-3">Works where you write</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    Gmail, Slack, Notion, Google Docs, Word, Linear, Jira, Figma, VSCode, LinkedIn:
                    anywhere your cursor blinks, Oravo types.
                  </p>
                </div>
                <div className="relative flex h-[280px] w-full items-center justify-center overflow-hidden rounded-[22px] bg-white/50 sm:h-[320px]">
                  <EffortlessIntegration width={400} height={280} className="max-w-full max-h-full" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      {/* Long-form sections on one glass sheet: each keeps its own layout and motion. */}
      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:w-[1108px] lg:px-6">
        <div className="glass glass-rim overflow-hidden rounded-[40px]">
          <DocumentationSection />
          <MadeForYou />
          <TestimonialsSection />
          <PricingSection />
          <WisprSwitchSection />
          <FAQSection />
          <AskAISection />
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-24 w-full max-w-[1120px] px-4 sm:mt-32 sm:px-6">
        <CTASection />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1060px] px-4 sm:px-6 lg:px-0">
        {blogSection}
        <FooterSection />
      </div>
    </div>
  );
}
