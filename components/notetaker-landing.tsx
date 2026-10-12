"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Square } from "lucide-react";
import { useEffect } from "react";
import { Band } from "@/components/landing/Band";
import { Doodle } from "@/components/landing/Doodle";
import { SectionIntro, SHELL } from "@/components/landing/PageBlocks";
import { Parallax } from "@/components/landing/Parallax";
import { Reveal, RevealWords } from "@/components/landing/Reveal";
import { TimeChip } from "@/components/notetaker/bits";
import { NT_VARIANT, trackCta } from "@/components/notetaker/data";
import { EditShare } from "@/components/notetaker/EditShare";
import { EvidenceExplorer } from "@/components/notetaker/EvidenceExplorer";
import { FollowUp } from "@/components/notetaker/FollowUp";
import { HeroNotepad } from "@/components/notetaker/HeroNotepad";
import { NoteAnatomy } from "@/components/notetaker/NoteAnatomy";
import { SpeedReceipt } from "@/components/notetaker/SpeedReceipt";
import { trackEvent } from "@/lib/analytics";

const SAND = "var(--o-band-sand)";
const PAPER = "var(--o-paper)";
const CANVAS = "var(--o-canvas)";
const CLAY = "var(--o-band-clay)";
const MIST = "var(--o-band-mist)";
const BLUSH = "var(--o-blush)";

const TARGET_NOTE = "Summary target: about 30 seconds after a one-hour transcript is ready.";

/* ------------------------------------------------------------------------ */
/* How it works: three beats, three materials.                               */
/* ------------------------------------------------------------------------ */

const BEATS = [
  {
    title: "Write what matters",
    copy: "Jot a few words while you talk, in your own shorthand. Oravo keeps a searchable transcript with speaker labels and timestamps underneath.",
  },
  {
    title: "End the meeting",
    copy: "Processing is visible the whole time, never a blank wait. The target is about 30 seconds once a one-hour transcript is ready.",
  },
  {
    title: "Check it, then send it",
    copy: "Your notes come back as a summary, decisions, risks, open questions and action items, each linked to its moment in the transcript.",
  },
];

function BeatArt({ i }: { i: number }) {
  if (i === 0) {
    return (
      <div className="paper-ruled h-full -rotate-[1.5deg] rounded-xl px-4 py-3 shadow-[0_0_0_1px_var(--o-line),0_14px_28px_-20px_rgba(51,48,42,0.4)]">
        <p className="font-mono text-[13px] leading-[28px] text-ink">
          – pricing → Q3?
          <br />– android pilot, 5 cohorts ok
          <br />– maya: test build thu
          <span className="o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[3px] bg-ink" />
        </p>
      </div>
    );
  }
  if (i === 1) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 rounded-xl bg-canvas px-4 py-4 ring-1 ring-line">
        <span className="inline-flex h-10 items-center gap-2 rounded-lg bg-espresso px-4 font-display text-[13.5px] font-semibold text-sand shadow-[0_10px_20px_-10px_rgba(42,33,27,0.6)]">
          <Square aria-hidden="true" className="h-3 w-3 fill-current" />
          End meeting
        </span>
        <div className="w-full max-w-[200px]">
          <div className="flex justify-between font-display text-[11px] text-ink-faint">
            <span>Processing</span>
            <span className="tabular-nums">target ~30s</span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-raised ring-1 ring-line">
            <motion.div
              className="h-full rounded-full bg-[#4E6B47]"
              initial={{ width: "8%" }}
              whileInView={{ width: "78%" }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 2.4, ease: "easeInOut", delay: 0.4 }}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="h-full rotate-[1.2deg] rounded-xl bg-raised px-4 py-3 shadow-[0_0_0_1px_var(--o-line),0_14px_28px_-20px_rgba(51,48,42,0.4)]">
      <p className="eyebrow !text-[9.5px]">Decisions</p>
      <p className="mt-1 flex items-start gap-2 text-[12.5px] leading-snug text-ink">
        <span className="flex-1">Android pilot with all five cohorts</span>
        <TimeChip at="08:12" />
      </p>
      <p className="eyebrow mt-2.5 !text-[9.5px]">Action items</p>
      <p className="mt-1 flex items-start gap-2 text-[12.5px] leading-snug text-ink">
        <span className="flex-1">
          <span className="font-semibold">Maya</span> · test build, Thu
        </span>
        <TimeChip at="34:05" />
      </p>
    </div>
  );
}

function ThreeBeats() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="relative">
      <svg className="pointer-events-none absolute left-[16%] right-[16%] top-[30px] hidden h-6 md:block" viewBox="0 0 100 6" preserveAspectRatio="none" aria-hidden="true">
        <motion.path
          d="M0 3 C 20 0, 30 6, 50 3 S 80 0, 100 3"
          fill="none"
          stroke="rgba(51,48,42,0.28)"
          strokeWidth="1.5"
          strokeDasharray="2 3"
          vectorEffect="non-scaling-stroke"
          initial={reduceMotion ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </svg>
      <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
        {BEATS.map((beat, i) => (
          <Reveal as="li" key={beat.title} delay={0.1 + i * 0.14}>
            <div className="flex h-full flex-col items-center text-center">
              <span className="relative z-10 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-paper font-serif text-[28px] text-brand ring-1 ring-line">
                {i + 1}
              </span>
              <div className="mt-6 h-[150px] w-full max-w-[290px]">
                <BeatArt i={i} />
              </div>
              <h3 className="display-3 mt-7 text-ink">{beat.title}</h3>
              <p className="mt-2 max-w-[320px] text-[14.5px] leading-relaxed text-ink-soft">{beat.copy}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------------ */

export default function NotetakerLanding() {
  useEffect(() => {
    trackEvent("notetaker_landing_view", {
      product: "oravo_notetaker",
      variant: NT_VARIANT,
      landing_path: window.location.pathname,
      device: window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop",
    });
  }, []);

  return (
    <>
      {/* ───────── Hero: copy on the left, the notepad demo on the right ───────── */}
      <Band color={SAND} className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Parallax speed={140} className="absolute -left-40 top-16 sm:-left-24">
            <div className="h-[360px] w-[360px] rounded-full bg-sand-deep sm:h-[440px] sm:w-[440px]" />
          </Parallax>
          <Parallax speed={-90} className="absolute -right-32 top-[52%] sm:-right-16">
            <div className="h-[280px] w-[280px] rotate-12 rounded-[56px] bg-clay sm:h-[340px] sm:w-[340px]" />
          </Parallax>
        </div>

        <div className={`${SHELL} relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14`}>
          <div>
            <Parallax speed={24}>
              <Doodle name="notebook" className="mb-5 w-28" />
            </Parallax>
            <Reveal>
              <p className="eyebrow">Oravo Notetaker</p>
            </Reveal>
            <h1 className="display-1 mt-4 text-ink">
              <span className="block">
                <RevealWords text="The meeting ends." delay={0.05} />
              </span>
              <span className="block text-accent">
                <RevealWords text="The work is ready." delay={0.25} />
              </span>
            </h1>
            <Reveal delay={0.3}>
              <p className="subtitle mt-5 max-w-[540px]">
                Jot rough notes while you talk. When the meeting ends, Oravo turns your notes and the transcript into a clear summary, decisions and action items, every point linked back to the moment it was said.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#experience" onClick={() => trackCta("see_how_it_works", "experience")} className="btn-primary">
                  See how it works
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
                <a href="#speed" onClick={() => trackCta("see_speed", "speed")} className="btn-secondary">
                  Why it feels instant
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.5}>
              <p className="mt-4 max-w-[460px] font-display text-[12.5px] leading-relaxed text-ink-faint">{TARGET_NOTE} Public performance reporting will include test conditions and latency percentiles.</p>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={24}>
            <HeroNotepad />
          </Reveal>
        </div>
      </Band>

      {/* ───────── How it works ───────── */}
      <Band id="experience" color={PAPER} from={SAND} blend={200} className="scroll-mt-20 pt-24 pb-20 sm:pt-28 sm:pb-28">
        <div className={SHELL}>
          <SectionIntro
            doodle="sparkle"
            eyebrow="From talk to traction"
            title="Your notes first. The transcript fills the gaps."
            lede="Oravo starts from what you thought mattered, then adds what you missed from the conversation, so the result still sounds like your meeting."
          />
          <div className="mt-16">
            <ThreeBeats />
          </div>
        </div>
      </Band>

      {/* ───────── Zoom to the moment ───────── */}
      <Band id="evidence" color={CANVAS} from={PAPER} blend={200} className="scroll-mt-20 pt-24 pb-20 sm:pt-28 sm:pb-28">
        <div className={SHELL}>
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <SectionIntro
              align="left"
              doodle="measure"
              eyebrow="Zoom to the moment"
              title="The details stay connected to the source."
              lede="Pick any decision, risk or action item and jump to the sentence behind it. Search the transcript by word or by speaker."
            />
            <Reveal delay={0.15}>
              <ul className="grid grid-cols-3 divide-x divide-line rounded-xl bg-raised/70 ring-1 ring-line">
                {[
                  ["Speakers", "labelled"],
                  ["Timestamps", "on every line"],
                  ["Search", "word or name"],
                ].map(([k, v]) => (
                  <li key={k} className="px-4 py-3.5">
                    <p className="font-display text-[14px] font-semibold text-ink">{k}</p>
                    <p className="mt-0.5 font-display text-[12px] text-ink-faint">{v}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="mt-12">
            <div className="frame-dotted bg-paper/60 p-3 sm:p-6">
              <EvidenceExplorer />
            </div>
          </Reveal>
        </div>
      </Band>

      {/* ───────── Speed (light mist band) ───────── */}
      <Band id="speed" color={MIST} from={CANVAS} blend={220} className="scroll-mt-20 pt-28 pb-24 sm:pt-36 sm:pb-32">
        <Parallax speed={100} className="pointer-events-none absolute -left-24 top-1/3" aria-hidden="true">
          <div className="h-72 w-72 rounded-full bg-[#d3e0e6]" />
        </Parallax>
        <Parallax speed={-70} className="pointer-events-none absolute -right-20 bottom-10" aria-hidden="true">
          <div className="h-64 w-64 rotate-12 rounded-[48px] bg-[#dae5ea]" />
        </Parallax>
        <div className={`${SHELL} relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.9fr]`}>
          <div>
            <SectionIntro
              align="left"
              doodle="speed"
              eyebrow="No post-meeting limbo"
              title="Your next step should not wait for your notes."
              lede="Oravo is built around a fast handoff from conversation to action, so you can send the follow-up while the meeting is still fresh."
            />
            <Reveal delay={0.2}>
              <div className="mt-8 max-w-xl border-l-2 border-brand/50 pl-4">
                <p className="font-display text-[13.5px] leading-relaxed text-ink-soft">
                  About 30 seconds is our <span className="font-semibold text-ink">target</span> for a one-hour transcript, timed from the moment the transcript is ready. It is not a guarantee yet: before we publish it as a promise, we will share p50 and p95 processing times and the conditions we tested under.
                </p>
              </div>
            </Reveal>
          </div>
          <SpeedReceipt />
        </div>
      </Band>

      {/* ───────── Anatomy of a note ───────── */}
      <Band color={CLAY} from={MIST} blend={220} className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className={SHELL}>
          <SectionIntro
            doodle="notebook"
            eyebrow="Know what was decided"
            title="Every note comes back in the same clear shape."
            lede="Decisions, risks and open questions in one record the team can inspect, and action items with an owner, a due date and the evidence."
          />
          <div className="mt-14">
            <NoteAnatomy />
          </div>
        </div>
      </Band>

      {/* ───────── Edit and share ───────── */}
      <Band color={PAPER} from={CLAY} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-28">
        <div className={`${SHELL} grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16`}>
          <div>
            <SectionIntro
              align="left"
              doodle="scribble"
              eyebrow="Leave with the next move"
              title="Fix a word, change an owner, then send it on."
              lede="Generated notes are a draft you control. Edit the summary and every action item, then copy the notes or export them for the work that follows."
            />
            <Reveal delay={0.2}>
              <ul className="mt-8 grid gap-3">
                {["Edit the summary and action items in place", "Owners and due dates you can change", "Copy or export when it reads right"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#E9ECDD] text-[#4E6B47]">
                      <Check aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.1} y={24}>
            <EditShare />
          </Reveal>
        </div>
      </Band>

      {/* ───────── Cross-sell: back to Dictation ───────── */}
      <Band color={BLUSH} from={PAPER} className="pt-16 pb-20 sm:pt-20">
        <div className={SHELL}>
          <section className="relative isolate overflow-hidden rounded-3xl bg-sand px-6 py-14 ring-1 ring-line sm:px-12 sm:py-16 lg:px-14">
            <Parallax speed={80} className="pointer-events-none absolute -left-20 -top-16" aria-hidden="true">
              <div className="h-64 w-64 rounded-full bg-sand-deep" />
            </Parallax>
            <Parallax speed={-60} className="pointer-events-none absolute -bottom-24 -right-16" aria-hidden="true">
              <div className="h-72 w-72 rotate-12 rounded-[48px] bg-clay" />
            </Parallax>
            <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
              <div>
                <Doodle name="plane" className="mb-4 w-28" />
                <Reveal>
                  <p className="eyebrow">One voice workflow</p>
                </Reveal>
                <h2 className="display-2 mt-3 text-ink">
                  <RevealWords text="Capture the meeting. Write what comes next." />
                </h2>
                <Reveal delay={0.12}>
                  <p className="subtitle mt-4 max-w-md">
                    Notetaker turns the conversation into a usable record. Oravo Dictation helps you write the follow-up: say it once and it lands as polished text in the app you are using.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a href="/download" onClick={() => trackCta("cross_sell_dictation", "download")} className="btn-primary">
                      Try Oravo Dictation
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </a>
                    <a href="#experience" onClick={() => trackCta("final_see_experience", "experience")} className="btn-secondary">
                      Explore the experience
                    </a>
                  </div>
                </Reveal>
              </div>
              <Reveal delay={0.15} y={20}>
                <FollowUp />
              </Reveal>
            </div>
          </section>
        </div>
      </Band>
    </>
  );
}
