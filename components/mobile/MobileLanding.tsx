"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { AppWindow, ArrowLeftRight, ArrowUpRight, Check, Languages, Minus, Wand2 } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Band } from "@/components/landing/Band";
import { Doodle } from "@/components/landing/Doodle";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
import { SectionIntro, SHELL } from "@/components/landing/PageBlocks";
import { Parallax } from "@/components/landing/Parallax";
import { Reveal, RevealWords } from "@/components/landing/Reveal";
import { trackPlayStoreOutbound } from "@/lib/analytics";
import { MOBILE_FAQS, PLAY_STORE_URL } from "./content";
import { PhoneDemo, SCENES } from "./PhoneDemo";

const SAND = "var(--o-band-sand)";
const PAPER = "var(--o-paper)";
const CANVAS = "var(--o-canvas)";
const CLAY = "var(--o-band-clay)";
const MIST = "var(--o-band-mist)";
const BLUSH = "var(--o-blush)";

type Variant = "mobile-page" | "android-page";

function AndroidMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
    </svg>
  );
}

function StoreButtons({ variant, centred = false }: { variant: Variant; centred?: boolean }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${centred ? "justify-center" : ""}`}>
      <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackPlayStoreOutbound(variant)} className="btn-primary">
        Get it on Google Play
        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </a>
      <span aria-disabled="true" title="iOS coming soon" className="btn-secondary cursor-default text-ink-soft">
        iOS coming soon
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Feature tiles, each with a small moving picture.                          */
/* ------------------------------------------------------------------------ */

function useLoop(length: number, ms: number) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!inView || reduceMotion) return;
    const id = setTimeout(() => setI((n) => (n + 1) % length), ms);
    return () => clearTimeout(id);
  }, [i, inView, reduceMotion, length, ms]);
  return { ref, i };
}

function AnywhereArt() {
  const apps = ["@", "#", "W", "in", "N", "G"];
  const { ref, i } = useLoop(apps.length, 1300);
  return (
    <div ref={ref} className="flex items-center gap-2">
      {apps.map((a, n) => (
        <span
          key={a}
          className={`flex h-9 w-9 items-center justify-center rounded-lg font-display text-[12px] font-bold transition-all duration-300 ${
            n === i ? "-translate-y-1 bg-cloud text-cloud-ink ring-1 ring-cloud-line shadow-[0_8px_16px_-8px_rgba(42,33,27,0.6)]" : "bg-raised text-ink-soft ring-1 ring-line"
          }`}
        >
          {a}
        </span>
      ))}
    </div>
  );
}

const LANGS = [
  ["¿Listo para la reunión?", "Ready for the meeting?"],
  ["मैं पाँच बजे तक भेज दूँगा", "I'll send it by five."],
  ["C'est parfait, merci", "That's perfect, thank you."],
];

function LanguagesArt() {
  const { ref, i } = useLoop(LANGS.length, 2400);
  return (
    <div ref={ref} className="relative h-[52px] overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
          <p className="text-[13px] italic text-ink-faint">{LANGS[i][0]}</p>
          <p className="mt-1 font-display text-[14px] font-semibold text-ink">→ {LANGS[i][1]}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function SwitchArt() {
  const { ref, i } = useLoop(2, 1800);
  return (
    <div ref={ref} className="relative h-[52px] w-[150px]">
      {["Slack", "Email"].map((name, n) => (
        <motion.span
          key={name}
          className="absolute top-0 flex h-[44px] w-[100px] items-center gap-1.5 rounded-lg bg-raised px-2.5 font-display text-[11.5px] font-semibold text-ink-soft shadow-[0_0_0_1px_var(--o-line),0_8px_16px_-10px_rgba(51,48,42,0.4)]"
          animate={{ x: n === i ? 0 : 48, y: n === i ? 6 : 0, zIndex: n === i ? 2 : 1, scale: n === i ? 1 : 0.94 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${n === i ? "bg-brand" : "bg-line"}`} />
          {name}
        </motion.span>
      ))}
    </div>
  );
}

function EditsArt() {
  const { ref, i } = useLoop(2, 2200);
  return (
    <div ref={ref} className="text-[14px] leading-relaxed text-ink">
      <span className={`transition-all duration-500 ${i ? "text-ink-faint line-through decoration-brand decoration-2" : ""}`}>um so </span>
      see you at
      <span className={`transition-all duration-500 ${i ? "text-ink-faint line-through decoration-brand decoration-2" : ""}`}> four, no, </span>
      five
      <span className={`transition-opacity duration-500 ${i ? "opacity-100" : "opacity-0"}`}>.</span>
    </div>
  );
}

const FEATURES: { title: string; description: string; icon: ReactNode; art: ReactNode }[] = [
  {
    title: "Use it anywhere you write",
    description: "Oravo works wherever you're already typing: any app, any text field.",
    icon: <AppWindow className="h-4 w-4" />,
    art: <AnywhereArt />,
  },
  {
    title: "100+ languages",
    description: "Speak naturally in the language you prefer. Oravo can turn it into English as you go.",
    icon: <Languages className="h-4 w-4" />,
    art: <LanguagesArt />,
  },
  {
    title: "Keep talking as you move between apps",
    description: "Oravo keeps up, even as you switch apps mid-thought.",
    icon: <ArrowLeftRight className="h-4 w-4" />,
    art: <SwitchArt />,
  },
  {
    title: "Oravo edits as you speak",
    description: "Clean, formatted text without extra effort. Filler words go, and your corrections stick.",
    icon: <Wand2 className="h-4 w-4" />,
    art: <EditsArt />,
  },
];

/* ------------------------------------------------------------------------ */
/* Any app: tabs drive the phone.                                            */
/* ------------------------------------------------------------------------ */

function AnyApp() {
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);
  const next = useCallback(() => {
    if (auto) setIndex((i) => (i + 1) % SCENES.length);
  }, [auto]);

  return (
    <div className={`${SHELL} grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16`}>
      <div>
        <SectionIntro
          align="left"
          doodle="windows"
          eyebrow="Works system-wide"
          title="Type in any app. Just speak."
          lede="Slack, email, LinkedIn, WhatsApp: Oravo types wherever you do, as a floating bubble next to your keyboard."
        />
        <Reveal delay={0.2}>
          <div className="mt-8 grid grid-cols-3 gap-2 sm:max-w-md" role="tablist" aria-label="Pick an app">
            {SCENES.map((s, i) => {
              const on = i === index;
              return (
                <button
                  key={s.app}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => {
                    setAuto(false);
                    setIndex(i);
                  }}
                  className={`relative flex items-center gap-2 rounded-lg px-3 py-2.5 text-left font-display text-[13px] font-semibold ring-1 transition-colors ${
                    on ? "bg-raised text-ink ring-ink/20" : "bg-raised/40 text-ink-soft ring-line hover:bg-raised/70 hover:text-ink"
                  }`}
                >
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[10px] font-bold ${on ? "bg-cloud text-cloud-ink ring-1 ring-cloud-line" : "bg-canvas text-ink-faint"}`}>{s.glyph}</span>
                  {s.app}
                </button>
              );
            })}
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-4 font-display text-[12px] text-ink-faint">Sample phrases, played back. No microphone needed.</p>
        </Reveal>
      </div>
      <Reveal delay={0.1} y={24}>
        <Parallax speed={24}>
          <PhoneDemo scene={SCENES[index]} onLoopEnd={auto ? next : undefined} />
        </Parallax>
      </Reveal>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Built-in voice typing vs Oravo, on the same sentence.                     */
/* ------------------------------------------------------------------------ */

const SPOKEN = "hey sarah umm there are two no wait actually three things oravo does really well its fast its accurate and uh it fixes your mistakes";
const CLEAN = "Hey Sarah, there are three things Oravo does really well: it's fast, accurate, and fixes your mistakes automatically.";
const FILLERS = new Set(["umm", "uh", "two", "no", "wait", "actually"]);

const ORAVO_POINTS = ["Polishes speech in real time", "Adapts as you rethink or rephrase", "Formats text automatically", "Removes filler words (um, like)", "Translates to English as you speak"];
const BUILTIN_POINTS = ["Captures exactly what you say, mistakes included", "Gets messy when you change your mind", "Plain text with minimal formatting", "Keeps every filler word", "Usually no translation"];

function VersusStage() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4, once: true });
  const [chars, setChars] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) return setChars(CLEAN.length);
    if (chars >= CLEAN.length) return;
    const id = setTimeout(() => setChars((c) => c + 2), chars === 0 ? 900 : 24);
    return () => clearTimeout(id);
  }, [inView, chars, reduceMotion]);

  return (
    <div ref={ref} className="mx-auto max-w-5xl">
      <Reveal>
        <div className="mx-auto flex max-w-2xl items-center gap-4 rounded-xl bg-raised/80 px-4 py-3 ring-1 ring-line">
          <span className="flex h-6 shrink-0 items-center gap-[2px]" aria-hidden="true">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.span
                key={i}
                className="w-[2.5px] rounded-full bg-brand"
                animate={reduceMotion ? { height: 6 } : { height: [4, 8 + ((i * 5) % 14), 5] }}
                transition={{ duration: 0.7 + (i % 3) * 0.15, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </span>
          <p className="font-display text-[13px] italic leading-snug text-ink-soft">You say: “{SPOKEN}”</p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col rounded-2xl bg-raised p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] sm:p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand font-display text-[14px] font-bold text-raised">O</span>
              <h3 className="display-3 text-ink">Oravo</h3>
            </div>
            <div className="mt-5 min-h-[96px] rounded-xl bg-canvas p-4 text-[14.5px] leading-relaxed text-ink ring-1 ring-line">
              {CLEAN.slice(0, chars)}
              {chars < CLEAN.length && <span className="o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-ink" />}
            </div>
            <ul className="mt-5 grid gap-2.5">
              {ORAVO_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[14px] text-ink">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-soft text-brand">
                    <Check aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex h-full flex-col rounded-2xl bg-raised/60 p-6 ring-1 ring-line sm:p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-canvas font-display text-[13px] font-bold text-ink-faint">Aa</span>
              <h3 className="display-3 text-ink-soft">Built-in voice typing</h3>
            </div>
            <div className="mt-5 min-h-[96px] rounded-xl bg-canvas p-4 text-[14.5px] leading-relaxed text-ink-soft ring-1 ring-line">
              {SPOKEN.split(" ").map((w, i) => (
                <span key={i} className={FILLERS.has(w) ? "rounded-sm bg-brand-soft text-brand" : ""}>
                  {w}
                  {" "}
                </span>
              ))}
            </div>
            <ul className="mt-5 grid gap-2.5">
              {BUILTIN_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[14px] text-ink-soft">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-canvas text-ink-faint ring-1 ring-line">
                    <Minus aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */

const USES = [
  {
    title: "Keep up with messages",
    description: "Respond quickly without typing or reworking your words.",
    said: "tell him yes, saturday works, I bring the cake",
    sent: "Yes, Saturday works. I'll bring the cake!",
  },
  {
    title: "Draft polished emails",
    description: "Dictate emails that sound professional and ready to send.",
    said: "please find the invoice, payment is due on the fifteen",
    sent: "Please find the invoice attached. Payment is due on the 15th.",
  },
  {
    title: "Capture notes & to-dos",
    description: "Jot down ideas the moment they come to you. No keyboard required.",
    said: "todo, call the bank, renew passport, buy milk",
    sent: "To-do:\n• Call the bank\n• Renew passport\n• Buy milk",
  },
];

/* ------------------------------------------------------------------------ */

export default function MobileLanding({ variant }: { variant: Variant }) {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <Band color={SAND} className="pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Parallax speed={140} className="absolute -left-40 top-16 sm:-left-24">
            <div className="h-[360px] w-[360px] rounded-full bg-sand-deep sm:h-[440px] sm:w-[440px]" />
          </Parallax>
          <Parallax speed={-90} className="absolute -right-32 top-[50%] sm:-right-16">
            <div className="h-[280px] w-[280px] rotate-12 rounded-[56px] bg-clay sm:h-[340px] sm:w-[340px]" />
          </Parallax>
          <Parallax speed={50} className="absolute right-[4%] top-[130px] hidden xl:block">
            <Doodle name="speech" className="w-36" />
          </Parallax>
        </div>

        <div className={`${SHELL} relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]`}>
          <div>
            <Parallax speed={20}>
              <Doodle name="mic" className="mb-5 w-24" />
            </Parallax>
            <Reveal>
              <p className="eyebrow inline-flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-raised text-ink ring-1 ring-line">
                  <AndroidMark className="h-3.5 w-3.5" />
                </span>
                {variant === "mobile-page" ? "Oravo mobile · Now on Android" : "Now on Android"}
              </p>
            </Reveal>
            <h1 className="display-1 mt-4 text-ink">
              <span className="block">
                <RevealWords text="Stop translating in your head." delay={0.05} />
              </span>
              <span className="block text-accent">
                <RevealWords text="Just speak." delay={0.3} />
              </span>
            </h1>
            <Reveal delay={0.3}>
              <p className="subtitle mt-5 max-w-[500px]">
                Voice-to-text that turns messy speech into ready-to-send text in any app. Works system-wide on Android.
              </p>
            </Reveal>
            <Reveal delay={0.4} className="mt-8">
              <StoreButtons variant={variant} />
            </Reveal>
            <Reveal delay={0.5}>
              <p className="mt-4 font-display text-[12.5px] text-ink-faint">Free + unlimited during launch · Android 13 or newer</p>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={28}>
            <div className="relative">
              <div className="frame-dotted absolute inset-x-6 -inset-y-4 hidden sm:block" aria-hidden="true" />
              <PhoneDemo scene={SCENES[0]} />
            </div>
          </Reveal>
        </div>
      </Band>

      {/* ───────── Features ───────── */}
      <Band color={PAPER} from={SAND} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-28">
        <div className={SHELL}>
          <SectionIntro
            doodle="sparkle"
            eyebrow="Speak the way you think"
            title="Turn your voice into polished text."
            lede="Just speak the way you think. Oravo turns it into writing you can send."
          />
          <Reveal className="mt-12">
            <div className="grid gap-px overflow-hidden rounded-2xl bg-line shadow-[0_0_0_1px_var(--o-line)] sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex flex-col bg-raised p-6 sm:p-8">
                  <div className="flex h-[60px] items-center">{f.art}</div>
                  <div className="mt-6 flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-soft text-brand">{f.icon}</span>
                    <h3 className="font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">{f.title}</h3>
                  </div>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{f.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Band>

      {/* ───────── Any app ───────── */}
      <Band color={CLAY} from={PAPER} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-28">
        <AnyApp />
      </Band>

      {/* ───────── Versus (light mist band) ───────── */}
      <Band color={MIST} from={CLAY} blend={220} className="pt-28 pb-24 sm:pt-36 sm:pb-28">
        <Parallax speed={90} className="pointer-events-none absolute -left-24 top-1/4" aria-hidden="true">
          <div className="h-72 w-72 rounded-full bg-[#d3e0e6]" />
        </Parallax>
        <div className={`${SHELL} relative`}>
          <SectionIntro
            doodle="scales"
            eyebrow="Same words, two results"
            title="Oravo vs. built-in voice mode"
            lede="Oravo cleans up your text while you talk, so you can just speak it and send it."
          />
          <div className="mt-12">
            <VersusStage />
          </div>
        </div>
      </Band>

      {/* ───────── Use cases ───────── */}
      <Band color={PAPER} from={MIST} blend={220} className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className={SHELL}>
          <SectionIntro doodle="bubbles" eyebrow="Everyday" title="How people use Oravo" />
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3 md:gap-0">
            {USES.map((u, i) => (
              <Reveal key={u.title} delay={0.1 + i * 0.12}>
                <article
                  className={`paper-ruled relative h-full rounded-2xl p-6 shadow-[0_0_0_1px_var(--o-line),0_24px_44px_-30px_rgba(51,48,42,0.5)] transition-transform duration-500 hover:z-10 hover:rotate-0 hover:-translate-y-1 md:mx-[-6px] ${
                    ["md:-rotate-2", "md:translate-y-5 md:rotate-1", "md:-rotate-1"][i]
                  }`}
                >
                  <span className="font-display text-xs font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display-3 mt-2 text-ink">{u.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{u.description}</p>
                  <div className="mt-5 space-y-2 border-t border-dashed border-ink/15 pt-4">
                    <p className="text-[12.5px] italic leading-snug text-ink-faint">“{u.said}”</p>
                    <p className="whitespace-pre-line font-display text-[13.5px] font-medium leading-snug text-ink">{u.sent}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Band>

      {/* ───────── FAQ ───────── */}
      <Band color={CANVAS} from={PAPER} className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <SectionIntro doodle="question" eyebrow="FAQ" title="Frequently asked" />
          <Reveal className="mt-10">
            <FaqAccordion items={MOBILE_FAQS} />
          </Reveal>
        </div>
      </Band>

      {/* ───────── CTA ───────── */}
      <Band color={BLUSH} from={CANVAS} className="pt-16 pb-20 sm:pt-20">
        <div className={SHELL}>
          <section className="relative isolate overflow-hidden rounded-3xl bg-sand px-6 py-16 text-center ring-1 ring-line sm:px-16 sm:py-20">
            <Parallax speed={80} className="pointer-events-none absolute -left-20 -top-16" aria-hidden="true">
              <div className="h-64 w-64 rounded-full bg-sand-deep" />
            </Parallax>
            <Parallax speed={-60} className="pointer-events-none absolute -bottom-24 -right-16" aria-hidden="true">
              <div className="h-72 w-72 rotate-12 rounded-[48px] bg-clay" />
            </Parallax>
            <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
              <Doodle name="plane" className="mb-4 w-28 sm:w-32" />
              <Reveal>
                <p className="eyebrow">Free + unlimited during launch</p>
              </Reveal>
              <h2 className="display-2 mt-3 text-ink">
                <RevealWords text="Write with your voice on Android" />
              </h2>
              <Reveal delay={0.12}>
                <p className="subtitle mx-auto mt-4 max-w-lg text-balance">Download Oravo and turn speech into clear writing wherever you are.</p>
              </Reveal>
              <Reveal delay={0.2} className="mt-8">
                <StoreButtons variant={variant} centred />
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-4 font-display text-[12.5px] text-ink-faint">Works alongside your keyboard, wherever you can type.</p>
              </Reveal>
            </div>
          </section>
        </div>
      </Band>
    </>
  );
}
