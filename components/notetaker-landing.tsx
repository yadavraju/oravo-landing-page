"use client";

import { useEffect } from "react";
import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import { trackEvent } from "@/lib/analytics";

const deliverables = [
  ["Transcript", "A searchable speaker-by-speaker record that keeps decisions and exact wording easy to find."],
  ["Summary", "A clear account of what happened, organized around decisions, risks, and open questions."],
  ["Action items", "Owners and next steps pulled into a focused list for follow-through."],
];

const requirements = [
  "Process a one-hour meeting transcript and generate its summary in about 30 seconds.",
  "Show processing state, elapsed time, and a clear completion receipt.",
  "Preserve speaker labels, timestamps, source transcript, and links back to evidence.",
  "Separate transcript facts from generated interpretation and make every summary editable.",
  "Support a structured summary, decisions, open questions, and action items with owners.",
  "Measure meeting upload started, processing completed, summary viewed, export, and follow-up actions.",
];

function trackCta(cta: string, destination: string) {
  trackEvent("notetaker_interest_click", {
    product: "oravo_notetaker",
    variant: "speed-proof-v1",
    cta,
    destination,
  });
}

export default function NotetakerLanding() {
  useEffect(() => {
    trackEvent("notetaker_landing_view", {
      product: "oravo_notetaker",
      variant: "speed-proof-v1",
      landing_path: window.location.pathname,
      device: window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop",
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#F7F5F3] text-[#37322F] overflow-x-hidden">
      <Header />
      <div className="mx-auto w-full max-w-[1060px] border-x border-[rgba(55,50,47,0.12)] bg-[#F7F5F3]">
        <section className="relative px-5 sm:px-10 md:px-16 pt-32 sm:pt-40 pb-20 sm:pb-28 text-center overflow-hidden">
          <div className="absolute inset-x-0 top-20 h-72 opacity-40 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.20),transparent_62%)]" />
          <div className="relative mx-auto max-w-[840px] flex flex-col items-center">
            <span className="mb-6 rounded-full border border-[#E8DDD4] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F97316] shadow-[0_0_0_4px_rgba(55,50,47,0.04)]">
              Oravo Notetaker · product direction
            </span>
            <h1 className="font-serif text-[42px] leading-[0.98] sm:text-6xl md:text-[78px] md:leading-[0.98] tracking-[-0.02em]">
              One hour of conversation.
              <br />
              Notes in about 30 seconds.
            </h1>
            <p className="mt-7 max-w-[690px] text-base sm:text-xl leading-relaxed text-[#605A57]">
              Oravo Notetaker is designed to turn a one-hour meeting transcript into a structured summary, decisions, and action items in about 30 seconds after the transcript is ready.
            </p>
            <p className="mt-3 max-w-[650px] text-sm leading-relaxed text-[#847971]">
              This is the target product experience under review. The public speed claim should ship only after the end-to-end benchmark and test conditions are published.
            </p>
            <div className="mt-9 flex w-full flex-col sm:w-auto sm:flex-row gap-3">
              <a
                href="#requirements"
                onClick={() => trackCta("review_requirements", "requirements")}
                className="rounded-full bg-gradient-to-b from-[#FF8C42] to-[#FF6B1A] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(255,107,26,0.28)] transition-transform hover:scale-[1.02]"
              >
                Review product requirements
              </a>
              <a
                href="#output"
                onClick={() => trackCta("see_output", "output")}
                className="rounded-full border border-[#DED8D3] bg-white px-7 py-3.5 text-sm font-semibold text-[#37322F] transition-colors hover:bg-[#FFF9F4]"
              >
                See the output
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-[rgba(55,50,47,0.12)] px-5 sm:px-10 md:px-16 py-14 sm:py-20">
          <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] items-stretch">
            <div className="rounded-3xl bg-[#292524] p-7 sm:p-9 text-white flex flex-col justify-between min-h-[360px]">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-white/55">Speed target</p>
                <p className="mt-5 font-serif text-7xl sm:text-8xl leading-none">~30s</p>
                <p className="mt-4 text-lg text-white/75">to process a one-hour transcript and generate the meeting summary</p>
              </div>
              <p className="mt-10 border-t border-white/15 pt-5 text-xs leading-relaxed text-white/55">
                Benchmark the complete path on representative transcripts. Publish p50/p95 processing time and failure rate before using this as an unqualified public promise.
              </p>
            </div>
            <div className="rounded-3xl border border-[#E0DEDB] bg-white p-7 sm:p-9 shadow-[0_12px_32px_rgba(55,50,47,0.06)]">
              <p className="text-xs uppercase tracking-[0.16em] text-[#847971]">Processing receipt</p>
              <div className="mt-6 grid gap-4">
                {["Transcript parsed", "Speakers and topics mapped", "Decisions and actions generated"].map((item, index) => (
                  <div key={item} className="flex items-center gap-4 rounded-2xl border border-[#ECE7E2] bg-[#FFFDFC] p-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF1E8] text-sm font-semibold text-[#F97316]">{index + 1}</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{item}</p>
                      <div className="mt-2 h-1.5 rounded-full bg-[#F1ECE8]"><div className="h-full w-full rounded-full bg-[#FF7A2A]" /></div>
                    </div>
                    <span className="text-xs font-medium text-[#5D8A67]">Done</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#F7F5F3] px-4 py-3 text-sm">
                <span className="text-[#605A57]">1:00:00 transcript</span>
                <span className="font-semibold">Summary ready</span>
              </div>
            </div>
          </div>
        </section>

        <section id="output" className="border-t border-[rgba(55,50,47,0.12)] px-5 sm:px-10 md:px-16 py-16 sm:py-24">
          <div className="mx-auto max-w-[700px] text-center">
            <p className="text-xs uppercase tracking-[0.16em] text-[#F97316]">Useful after the meeting</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-6xl leading-tight">The meeting becomes work you can use.</h2>
            <p className="mt-5 text-[#605A57] text-base sm:text-lg leading-relaxed">A fast summary matters only when people can trace it back to the conversation and act on it.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {deliverables.map(([title, copy], index) => (
              <article key={title} className="rounded-2xl border border-[#E0DEDB] bg-white p-6 shadow-[0_8px_24px_rgba(55,50,47,0.045)]">
                <span className="text-xs font-semibold text-[#F97316]">0{index + 1}</span>
                <h3 className="mt-5 font-serif text-3xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#605A57]">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="requirements" className="border-t border-[rgba(55,50,47,0.12)] bg-[#FFF9F4] px-5 sm:px-10 md:px-16 py-16 sm:py-24">
          <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-[#F97316]">Review requirements</p>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl leading-tight">Fast, inspectable, and ready for follow-through.</h2>
              <p className="mt-5 text-sm leading-relaxed text-[#605A57]">These are product requirements, not claims that every feature is live today.</p>
            </div>
            <ol className="grid gap-3">
              {requirements.map((item, index) => (
                <li key={item} className="flex gap-4 rounded-2xl border border-[#E8DDD4] bg-white p-4 sm:p-5">
                  <span className="text-xs font-semibold text-[#F97316] pt-1">0{index + 1}</span>
                  <span className="text-sm sm:text-base leading-relaxed text-[#49423D]">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-[rgba(55,50,47,0.12)] px-5 sm:px-10 md:px-16 py-16 sm:py-24 text-center">
          <div className="mx-auto max-w-[760px] rounded-3xl border border-[#E0DEDB] bg-white px-6 py-12 sm:px-12 shadow-[0_16px_48px_rgba(55,50,47,0.06)]">
            <p className="text-xs uppercase tracking-[0.16em] text-[#847971]">One Oravo workflow</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Talk in the meeting. Move the work after it.</h2>
            <p className="mx-auto mt-5 max-w-[590px] text-[#605A57] leading-relaxed">Notetaker turns the meeting into a source record and follow-up plan. Oravo dictation helps you write the emails, updates, and documents that come next.</p>
            <a
              href="#requirements"
              onClick={() => trackCta("final_review", "requirements")}
              className="mt-8 inline-flex rounded-full bg-[#1877F2] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(24,119,242,0.22)]"
            >
              Review the product direction
            </a>
          </div>
        </section>
        <FooterSection />
      </div>
    </main>
  );
}
