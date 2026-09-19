"use client";

import { useEffect } from "react";
import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import { trackEvent } from "@/lib/analytics";

function trackCta(cta: string, destination: string) {
  trackEvent("notetaker_interest_click", {
    product: "oravo_notetaker",
    variant: "premium-speed-v2",
    cta,
    destination,
  });
}

const moments = [
  ["Decision", "Launch the Android pilot with the five approved accent cohorts."],
  ["Owner", "Maya will share the final test build by Thursday."],
  ["Next step", "Raju reviews the benchmark report before any public claim ships."],
];

export default function NotetakerLanding() {
  useEffect(() => {
    trackEvent("notetaker_landing_view", {
      product: "oravo_notetaker",
      variant: "premium-speed-v2",
      landing_path: window.location.pathname,
      device: window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop",
    });
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F5F3] text-[#37322F]">
      <Header />
      <div className="mx-auto w-full max-w-[1060px] border-x border-[rgba(55,50,47,0.12)]">
        <section className="relative px-5 pb-14 pt-40 text-center sm:px-10 sm:pb-20 sm:pt-36 md:px-16 md:pt-44">
          <div className="pointer-events-none absolute inset-x-0 top-20 h-[420px] bg-[radial-gradient(circle_at_center,rgba(255,132,55,0.17),transparent_64%)]" />
          <div className="relative mx-auto max-w-[860px]">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#E7DDD5] bg-white/90 px-4 py-2 text-xs font-semibold text-[#F97316] shadow-[0_0_0_4px_rgba(55,50,47,0.035)]">
              <span className="h-2 w-2 rounded-full bg-[#FF7A2A]" />
              Oravo Notetaker
            </div>
            <h1 className="text-balance font-serif text-[50px] leading-[0.96] tracking-[-0.03em] sm:text-[80px] md:text-[96px]">
              The meeting ends.
              <br />
              The work is ready.
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] text-base font-medium leading-relaxed text-[#605A57] sm:mt-8 sm:text-xl">
              Turn a one-hour meeting transcript into a clear summary, decisions, and action items in about 30 seconds.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#experience"
                onClick={() => trackCta("see_how_it_works", "experience")}
                className="rounded-full bg-gradient-to-b from-[#FF8C42] to-[#FF6B1A] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(255,107,26,0.30)] transition-transform hover:scale-[1.02]"
              >
                See how it works
              </a>
              <a
                href="#speed"
                onClick={() => trackCta("see_speed", "speed")}
                className="rounded-full border border-[#DDD7D2] bg-white px-7 py-3.5 text-sm font-semibold text-[#37322F] hover:bg-[#FFF9F4]"
              >
                Why it feels instant
              </a>
            </div>
          </div>

          <div className="relative mx-auto mt-12 max-w-[920px] [font-family:var(--font-plus-jakarta)] rounded-[28px] border border-[#DCD6D1] bg-[#292524] p-2 shadow-[0_28px_70px_rgba(55,50,47,0.20)] sm:mt-16 sm:p-3">
            <div className="overflow-hidden rounded-[22px] bg-white text-left">
              <div className="flex items-center justify-between border-b border-[#ECE8E4] px-4 py-3 sm:px-6 sm:py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF7A2A]" />
                  <p className="text-xs font-semibold sm:text-sm">Product launch review</p>
                </div>
                <span className="oravo-ready-pulse rounded-full bg-[#EFF8F0] px-3 py-1 text-[10px] font-semibold text-[#4F7A5A] sm:text-xs">Ready in 28s</span>
              </div>
              <div className="grid min-h-[420px] md:grid-cols-[0.72fr_1.28fr]">
                <aside className="border-b border-[#ECE8E4] bg-[#FAF8F6] p-4 md:border-b-0 md:border-r sm:p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9A9089]">Meeting</p>
                  <p className="mt-3 text-sm font-semibold">Sep 19 · 60 min</p>
                  <div className="mt-5 flex -space-x-2">
                    {["RY", "MK", "AS", "+2"].map((person, index) => (
                      <span key={person} className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#FAF8F6] text-[10px] font-semibold ${index === 0 ? "bg-[#292524] text-white" : "bg-[#FFE9DA] text-[#A74B14]"}`}>{person}</span>
                    ))}
                  </div>
                  <div className="mt-7 hidden space-y-3 md:block">
                    {["Overview", "Transcript", "Decisions", "Action items"].map((item, index) => (
                      <div key={item} className={`rounded-xl px-3 py-2.5 text-xs font-medium ${index === 0 ? "bg-white text-[#37322F] shadow-sm" : "text-[#847971]"}`}>{item}</div>
                    ))}
                  </div>
                </aside>
                <div className="p-5 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F97316]">Summary</p>
                      <h2 className="mt-2 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">Ready to move.</h2>
                    </div>
                    <button className="hidden rounded-full border border-[#E4DEDA] px-4 py-2 text-xs font-semibold sm:block" type="button">Copy notes</button>
                  </div>
                  <p className="mt-4 max-w-[540px] text-sm font-medium leading-relaxed text-[#605A57]">
                    The team aligned on an Android-first benchmark pilot, confirmed the first five cohorts, and kept every public performance claim behind measured results.
                  </p>
                  <div className="mt-6 grid gap-3">
                    {moments.map(([label, copy], index) => (
                      <div key={label} style={{ animationDelay: `${220 + index * 140}ms` }} className="oravo-story-reveal flex gap-3 rounded-2xl border border-[#ECE7E2] bg-[#FFFDFC] p-3.5 sm:p-4">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFF0E6] text-[10px] font-bold text-[#F97316]">{index + 1}</span>
                        <div><p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9A9089]">{label}</p><p className="mt-1 text-xs leading-relaxed text-[#49423D] sm:text-sm">{copy}</p></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mx-auto mt-5 max-w-[700px] text-xs leading-relaxed text-[#978D86]">About 30 seconds is the target after the transcript is ready. Public performance reporting will include test conditions and latency percentiles.</p>
        </section>

        <section id="speed" className="border-t border-[rgba(55,50,47,0.12)] px-5 py-16 sm:px-10 sm:py-24 md:px-16">
          <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F97316]">No post-meeting limbo</p>
              <h2 className="mt-4 font-serif text-5xl leading-[1.02] sm:text-7xl">Your next step should not wait for your notes.</h2>
              <p className="mt-5 text-base font-medium leading-relaxed text-[#605A57] sm:text-lg">Oravo is built around a fast handoff from conversation to action, so you can send the follow-up while the meeting is still fresh.</p>
            </div>
            <div className="rounded-[28px] bg-[#292524] p-7 text-white shadow-[0_20px_50px_rgba(55,50,47,0.18)] sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">One-hour transcript</p>
              <div className="mt-6 flex items-end gap-3"><span className="font-serif text-8xl leading-none sm:text-9xl">~30</span><span className="pb-3 text-xl text-white/60">seconds</span></div>
              <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="oravo-receipt-fill h-full rounded-full bg-gradient-to-r from-[#FF9B59] to-[#FF6B1A]" /></div>
              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-center">
                <div className="oravo-story-reveal" style={{ animationDelay: "220ms" }}><p className="text-lg font-semibold">Summary</p><p className="mt-1 text-[10px] text-white/45">what happened</p></div>
                <div className="oravo-story-reveal" style={{ animationDelay: "360ms" }}><p className="text-lg font-semibold">Decisions</p><p className="mt-1 text-[10px] text-white/45">what changed</p></div>
                <div className="oravo-story-reveal" style={{ animationDelay: "500ms" }}><p className="text-lg font-semibold">Actions</p><p className="mt-1 text-[10px] text-white/45">what is next</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="border-t border-[rgba(55,50,47,0.12)] bg-[#FFF9F4] px-5 py-16 sm:px-10 sm:py-24 md:px-16">
          <div className="mx-auto max-w-[720px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F97316]">From talk to traction</p>
            <h2 className="mt-4 font-serif text-5xl leading-[1.04] sm:text-7xl">The details stay connected to the source.</h2>
            <p className="mt-5 text-base font-medium leading-relaxed text-[#605A57] sm:text-lg">Open the transcript, check the moment behind a decision, edit the summary, and carry action items into the work that follows.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Find the exact moment", "Search speaker-by-speaker notes and jump from a summary point back to the transcript."],
              ["Know what was decided", "Pull decisions, open questions, and risks into a clear record that the team can inspect."],
              ["Leave with the next move", "Turn action items into a focused follow-up list with owners and editable details."],
            ].map(([title, copy], index) => (
              <article key={title} className="rounded-[22px] border border-[#E6DED8] bg-white p-6 shadow-[0_8px_24px_rgba(55,50,47,0.045)]">
                <span className="text-xs font-bold text-[#F97316]">0{index + 1}</span>
                <h3 className="mt-7 font-serif text-4xl leading-[1.05]">{title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-[#605A57]">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[rgba(55,50,47,0.12)] px-5 py-16 text-center sm:px-10 sm:py-24 md:px-16">
          <div className="mx-auto max-w-[780px] rounded-[30px] border border-[#E0DEDB] bg-white px-6 py-12 shadow-[0_18px_50px_rgba(55,50,47,0.07)] sm:px-12 sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F97316]">One voice workflow</p>
            <h2 className="mt-4 font-serif text-5xl leading-[1.04] sm:text-7xl">Capture the meeting. Write what comes next.</h2>
            <p className="mx-auto mt-5 max-w-[600px] text-base font-medium leading-relaxed text-[#605A57]">Notetaker turns the conversation into a usable record. Oravo dictation helps you turn that record into the emails, updates, and documents that move the work.</p>
            <a href="#experience" onClick={() => trackCta("final_see_experience", "experience")} className="mt-8 inline-flex rounded-full bg-[#1877F2] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(24,119,242,0.22)]">Explore the experience</a>
          </div>
        </section>
        <FooterSection />
      </div>
    </main>
  );
}
