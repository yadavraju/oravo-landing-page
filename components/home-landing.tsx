"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";

import CTASection from "../components/cta-section";
import DownloadButtons from "../components/DownloadButtons";
import LandingAnalytics from "../components/LandingAnalytics";
import EmailComparisonSection from "../components/EmailComparisonSection";
import { Header } from "../components/header";
import AccentToSlackDemo from "./landing/AccentToSlackDemo";
import AgitationSection from "./landing/AgitationSection";
import { Band } from "./landing/Band";
import { Doodle } from "./landing/Doodle";
import { Parallax } from "./landing/Parallax";
import { Reveal, RevealWords } from "./landing/Reveal";

const DocumentationSection = dynamic(() => import("../components/documentation-section"));
const SiteFooter = dynamic(() => import("./landing/SiteFooter"));
const MadeForYou = dynamic(() => import("../components/MadeForYou"));
const SwitchAndAsk = dynamic(() => import("./landing/SwitchAndAsk"));
const FinishedTextBento = dynamic(() => import("./landing/FinishedTextBento"));
const TechCompanyMarquee = dynamic(() => import("../components/TechCompanyMarquee"));
const TestimonialDeck = dynamic(() => import("./landing/TestimonialDeck"));
const ProductDuo = dynamic(() => import("./landing/ProductDuo"));
const TranslationShowcase = dynamic(() => import("./landing/TranslationShowcase"));

export default function HomeLanding({ blogSection }: { blogSection?: React.ReactNode }) {
  // Hash navigation from other pages. Pricing moved to its own page, so old
  // "/#pricing-section" links (ads, bookmarks) are sent there.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    if (hash === "pricing-section") {
      window.location.replace("/pricing");
      return;
    }
    const timer = setTimeout(() => {
      const element = document.getElementById(hash);
      if (!element) return;
      const top = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Band colours, top to bottom. Each band blends out of the one above it.
  const SAND = "var(--o-band-sand)";
  const PAPER = "var(--o-paper)";
  const CANVAS = "var(--o-canvas)";
  const CLAY = "var(--o-band-clay)";
  const MIST = "var(--o-band-mist)";
  const BLUSH = "var(--o-blush)";
  const SHELL = "mx-auto w-full max-w-6xl px-5 sm:px-8";

  return (
    <div className="grain relative w-full min-h-screen bg-paper text-ink overflow-x-clip">
      <LandingAnalytics variant="warm-bands-v2" />
      <Header />

      {/* ───────────── Hero: one warm solid colour, parallax shapes, drawn art ───────────── */}
      <Band color={SAND} className="flex flex-col justify-center pt-32 pb-12 sm:pt-40 lg:min-h-[min(100svh,920px)] lg:pt-36 lg:pb-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Parallax speed={140} className="absolute -left-40 top-16 sm:-left-24">
            <div className="h-[380px] w-[380px] rounded-full bg-sand-deep sm:h-[460px] sm:w-[460px]" />
          </Parallax>
          <Parallax speed={-90} className="absolute -right-32 top-[48%] sm:-right-16">
            <div className="h-[300px] w-[300px] rotate-12 rounded-[56px] bg-clay sm:h-[360px] sm:w-[360px]" />
          </Parallax>
          <Parallax speed={60} className="absolute left-[3%] top-[260px] hidden xl:block">
            <Doodle name="speech" className="w-44" />
          </Parallax>
          <Parallax speed={-40} className="absolute right-[3%] top-[150px] hidden xl:block">
            <Doodle name="plane" className="w-44" />
          </Parallax>
        </div>

        <div className={`${SHELL} relative`}>
          <Parallax speed={-30}>
            <div className="mx-auto flex max-w-[62rem] flex-col items-center text-center">
              <Doodle name="speech" className="mb-5 w-28 xl:hidden" />
              <h1 className="display-1 text-ink">
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

            </div>
          </Parallax>
        </div>
      </Band>

      {/* ───────────── Why typing is the bottleneck: blends out of the hero, no box ───────────── */}
      <Band color={PAPER} from={SAND} blend={240} className="pt-6 pb-16 sm:pb-20">
        <div className={`${SHELL} relative`}>
          <Reveal y={24}>
            <Parallax speed={24}>
              <EmailComparisonSection />
            </Parallax>
          </Reveal>

          <div className="mt-16 sm:mt-20">
            <p className="eyebrow mb-4 text-center">Used by professionals at</p>
            <TechCompanyMarquee />
              {/* Social proof as a caption, not a control: no box, no border. */}
              <Reveal>
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <div className="flex -space-x-2" aria-hidden="true">
                    {[
                      ["AR", "#f6dccd", "#9a4424"],
                      ["LM", "#e3f0f8", "#0f6a9e"],
                      ["RS", "#efe4d3", "#6b5a3e"],
                      ["KO", "#f0dcca", "#7a4d2c"],
                    ].map(([initials, bg, fg]) => (
                      <span
                        key={initials}
                        className="flex h-8 w-8 items-center justify-center rounded-full font-display text-[10px] font-bold ring-2 ring-[var(--o-paper)]"
                        style={{ background: bg, color: fg }}
                      >
                        {initials}
                      </span>
                    ))}
                  </div>
                  <p className="max-w-[420px] text-[13.5px] leading-snug text-ink-soft sm:text-left">
                    Trusted by <span className="font-semibold text-ink">10,000+</span> remote
                    developers, international founders, and global agency owners.
                  </p>
                </div>
              </Reveal>
          </div>
        </div>
      </Band>

      {/* ───────────── Both products, tried on the page ───────────── */}
      <Band color={CANVAS} from={PAPER} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-28" aria-label="Try Dictation and Notetaker">
        <ProductDuo />
      </Band>

      {/* ───────────── Section 2: The Agitation ───────────── */}
      <Band color={PAPER} from={CANVAS} aria-label="The real problem">
        <AgitationSection />
      </Band>

      {/* ───────────── Press. Speak. Done. ───────────── */}
      <Band color={CLAY} from={PAPER} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-28" aria-label="How it works">
        <Parallax speed={-60} className="pointer-events-none absolute -right-20 top-20 hidden lg:block" aria-hidden="true">
          <div className="h-60 w-60 rotate-12 rounded-[48px] bg-sand-deep/70" />
        </Parallax>
        <div className="relative">
          <DocumentationSection />
        </div>
      </Band>

      {/* ───────────── Accent in, business English out (Slack demo) ───────────── */}
      <Band color={PAPER} from={CLAY} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-28" aria-labelledby="slack-demo-heading">
        <div className={SHELL}>
          <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
            <Parallax speed={18} className="mb-4">
              <Doodle name="bubbles" className="w-32 sm:w-36" />
            </Parallax>
            <Reveal><p className="eyebrow">Accent in, business English out</p></Reveal>
            <h2 id="slack-demo-heading" className="display-2 mt-3 text-ink">
              <RevealWords text="Say it your way. Send it the right way." />
            </h2>
            <Reveal delay={0.12}>
              <p className="subtitle mt-4 max-w-xl">
                Raw, accented speech on the left. The message your client actually reads on the right.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} y={24} className="mt-12">
            <Parallax speed={28}>
              <AccentToSlackDemo />
            </Parallax>
          </Reveal>
        </div>
      </Band>

      {/* Real-time translation */}
      <Band color={SAND} from={PAPER} className="py-20 sm:py-28" aria-labelledby="translation-heading">
        <Parallax speed={110} className="pointer-events-none absolute -left-24 top-24 hidden lg:block" aria-hidden="true">
          <div className="h-56 w-56 rounded-full bg-clay" />
        </Parallax>
        <div className="relative">
          <TranslationShowcase />
        </div>
      </Band>

      {/* Accent proof: a whisper of sky blue */}
      <Band color={MIST} from={SAND} blend={220} className="pt-32 pb-24 sm:pt-40 sm:pb-28" aria-labelledby="accent-proof-heading">
        <Parallax speed={-70} className="pointer-events-none absolute right-[6%] top-40 hidden md:block" aria-hidden="true">
          <div className="h-40 w-40 rotate-12 rounded-[36px] bg-[#d3e0e6]" />
        </Parallax>
        <div className={`${SHELL} relative grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]`}>
          <div className="flex flex-col items-start">
            <Parallax speed={18} className="mb-4"><Doodle name="measure" className="w-32 sm:w-36" /></Parallax>
            <Reveal><p className="eyebrow">Accent proof, not vague claims</p></Reveal>
            <h2 id="accent-proof-heading" className="display-2 mt-3 text-ink">
              <RevealWords text="Built for real accents. Measured with the same script." />
            </h2>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[560px] text-base leading-relaxed text-ink-soft sm:text-lg">
                We are testing Oravo end to end across Hindi-accented English, Spanish-accented English, Hindi and Spanish speech to polished English, plus a native-English control.
              </p>
              <p className="mt-4 max-w-[560px] text-sm leading-relaxed text-ink-faint">
                The report will separate raw transcription from polished output and publish sample sizes, corrections, meaning errors, and time to final text. Until then, we will not turn an upstream model benchmark into an Oravo accuracy claim.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Parallax speed={30}>
              <div className="rounded-2xl bg-raised/80 p-6 ring-1 ring-[#cfdde4] backdrop-blur-xl sm:p-7">
                <p className="eyebrow mb-5">Pilot scorecard</p>
                <ul className="grid divide-y divide-line text-sm text-ink sm:text-base">
                  {[
                    "Same audio and scripts across cohorts",
                    "Raw transcript and final output scored separately",
                    "Corrections, meaning errors, and time reported",
                    "Failure cases included, not only the best demos",
                  ].map((item, i) => (
                    <li key={item} className="flex gap-3 py-3 first:pt-0">
                      <span className="font-display text-brand">{String(i + 1).padStart(2, "0")}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 border-t border-line pt-4 text-xs leading-relaxed text-ink-faint">Pilot target: at least 10 speakers per cohort and 10 utterances per speaker before any strong accuracy claim.</p>
              </div>
            </Parallax>
          </Reveal>
        </div>
      </Band>

      {/* ───────────── Speak once + built for the way you work (merged bento) ───────────── */}
      <Band color={PAPER} from={MIST} blend={200} className="pt-28 pb-20 sm:pt-32 sm:pb-28" aria-label="Speak once. Get finished text.">
        <FinishedTextBento />
      </Band>

      {/* ───────────── Made for you ───────────── */}
      <Band color={CANVAS} from={PAPER} className="py-20 sm:py-28">
        <MadeForYou />
      </Band>

      {/* ───────────── Testimonials: a deck of notes ───────────── */}
      <Band color={PAPER} from={CANVAS} className="py-20 sm:py-28">
        <TestimonialDeck />
      </Band>

      {/* ───────────── Why switch + Ask an AI ───────────── */}
      <Band color={CLAY} from={PAPER} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-28" aria-labelledby="switch-heading">
        <SwitchAndAsk />
      </Band>

      {/* From the blog: before the close, so the page ends on the CTA. */}
      {blogSection && (
        <Band color={PAPER} from={CLAY} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
          {blogSection}
        </Band>
      )}

      {/* The closing CTA; the footer's rounded top tucks over the end of it. */}
      <Band color={BLUSH} from={blogSection ? PAPER : CLAY} blend={200} className="pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className={SHELL}>
          <CTASection />
        </div>
      </Band>
      <SiteFooter />
    </div>
  );
}
