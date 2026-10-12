"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, CornerDownLeft, FileCode2, Folder, Moon } from "lucide-react";
import { useState, type ReactNode } from "react";
import { siGmail, siGoogledocs, siNotion, siSlack, siWhatsapp } from "simple-icons";
import { Reveal } from "@/components/landing/Reveal";
import { AppGlyph, Caret, DemoWindow, ListeningPill, Segmented, Waveform, scriptPhases, useAutoAdvance, useSlotClock, type IconData } from "./kit";

/*
 * The interactive demos on /features. Each one is a small scripted scene that
 * plays while it is on screen and settles to its finished state under reduced
 * motion. Warm palette only: ink and a touch of terracotta.
 */

const icon = (i: { title: string; hex: string; path: string }): IconData => ({ title: i.title, hex: i.hex, path: i.path });
const GMAIL = icon(siGmail);
const SLACK = icon(siSlack);
const NOTION = icon(siNotion);
const DOCS = icon(siGoogledocs);
const WHATSAPP = icon(siWhatsapp);

/* ------------------------------------------------------------------------ */
/* Hero: one voice keyboard, a deck of apps.                                 */
/* ------------------------------------------------------------------------ */

const DECK = [
  {
    app: "Gmail",
    icon: GMAIL,
    color: "#EA4335",
    field: "Reply",
    raw: "hi priya thanks for sending the deck um I'll review it tonight and send notes tomorrow morning",
    polished: "Hi Priya, thanks for sending the deck. I'll review it tonight and send notes tomorrow morning.",
  },
  {
    app: "Slack",
    icon: SLACK,
    color: "#4A154B",
    field: "#launch",
    raw: "quick update the build is green uh so we can ship the release right after lunch",
    polished: "Quick update: the build is green, so we can ship the release right after lunch.",
  },
  {
    app: "Notion",
    icon: NOTION,
    color: "#33302A",
    field: "Meeting notes",
    raw: "action items first finalize pricing second book the venue third send the invite",
    polished: "Action items:\n1. Finalize pricing\n2. Book the venue\n3. Send the invite",
  },
  {
    app: "Cursor",
    icon: null,
    color: "#33302A",
    field: "Prompt",
    raw: "refactor the use auth hook so it retries the token refresh twice before logging out",
    polished: "Refactor the useAuth hook so it retries the token refresh twice before logging out.",
  },
];

const DECK_SLOT = 8200;

export function AppDeckHero() {
  const { ref, index, t } = useSlotClock(DECK.length, DECK_SLOT);
  const order = [0, 1, 2].map((d) => (index + d) % DECK.length);

  return (
    <div ref={ref} className="relative pt-10 sm:pt-12">
      <div className="frame-dotted absolute -inset-4 top-2 hidden sm:block" aria-hidden="true" />
      <div className="relative h-[372px] sm:h-[352px]">
        {order
          .slice()
          .reverse()
          .map((sampleIndex) => {
            const depth = order.indexOf(sampleIndex);
            const sample = DECK[sampleIndex];
            const front = depth === 0;
            const s = scriptPhases(front ? t : DECK_SLOT, sample.raw, sample.polished, { wordMs: 115, charMs: 17 });
            return (
              <motion.div
                key={sample.app}
                className="absolute inset-x-0 top-0"
                initial={false}
                animate={{ y: depth * -22, scale: 1 - depth * 0.05, opacity: front ? 1 : depth === 1 ? 0.9 : 0.7, zIndex: 10 - depth }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "50% 0%" }}
              >
                <DemoWindow
                  title={sample.app}
                  subtitle={sample.field}
                  leading={<AppGlyph icon={sample.icon} color={sample.color} size={22} title={sample.app} tone={front ? "brand" : "ink"} />}
                >
                  <div className={front ? "" : "invisible"} aria-hidden={!front}>
                    <p className="eyebrow">You say</p>
                    <p className="mt-1.5 min-h-[44px] text-[13.5px] italic leading-relaxed text-ink-soft">
                      {s.heard}
                      {s.state === "listening" && <Caret />}
                    </p>
                    <div className="mt-3 min-h-[118px] rounded-xl bg-canvas p-4 ring-1 ring-line">
                      <p className="eyebrow">In {sample.app}</p>
                      <p className="mt-1.5 whitespace-pre-line text-[15px] leading-relaxed text-ink">
                        {s.typed}
                        {s.state === "done" && !s.complete && <Caret className="bg-brand" />}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <ListeningPill state={s.state} />
                      <span className="flex items-center gap-1.5" aria-hidden="true">
                        {DECK.map((d, i) => (
                          <span key={d.app} className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-5 bg-brand" : "w-1.5 bg-ink/20"}`} />
                        ))}
                      </span>
                    </div>
                  </div>
                </DemoWindow>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Speak: four capabilities, one stage.                                      */
/* ------------------------------------------------------------------------ */

const SPEAK = [
  {
    title: "Works in Any App",
    short: "Any app",
    description: "Notion, Gmail, Google Docs, Slack, WhatsApp, Cursor—anything with a text field. One voice keyboard for everything.",
  },
  {
    title: "Context-Aware Spelling",
    short: "Spelling",
    description: "Oravo uses surrounding context to spell names, technical terms, and product names correctly. No manual corrections.",
  },
  {
    title: "60+ Languages",
    short: "60+ languages",
    description: "Dictate in Spanish, Hindi, Chinese, Korean, Arabic, French, German, and dozens more languages.",
  },
  {
    title: "Whisper Mode",
    short: "Whisper mode",
    description: "Works even when you're whispering. Dictate in shared spaces, quiet offices, or late at night.",
  },
];

export function SpeakShowcase({ intro }: { intro?: ReactNode }) {
  const { ref, index, select, progress } = useAutoAdvance(SPEAK.length, 6400);
  const item = SPEAK[index];
  return (
    <div ref={ref} className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
      <div>
        {intro}
        <Segmented
          className="mt-8"
          label="Dictation features"
          idPrefix="speak-tab"
          options={SPEAK.map((s) => ({ id: s.title, label: s.short }))}
          value={index}
          onChange={select}
          progress={progress}
        />
        <div className="relative mt-6 min-h-[132px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="border-l-2 border-brand/60 pl-5"
            >
              <p className="font-display text-[12px] font-semibold text-ink-faint">
                {String(index + 1).padStart(2, "0")} / {String(SPEAK.length).padStart(2, "0")}
              </p>
              <h3 className="display-3 mt-1.5 text-ink">{item.title}</h3>
              <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-soft">{item.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="relative">
        <div className="frame-dotted absolute -inset-3 sm:-inset-4" aria-hidden="true" />
        <div id="speak-stage" role="tabpanel" aria-labelledby={`speak-tab-${index}`} className="relative min-h-[380px] overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_24px_50px_-30px_rgba(51,48,42,0.4)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="h-full p-5 sm:p-7"
            >
              {index === 0 && <AnyAppStage />}
              {index === 1 && <SpellingStage />}
              {index === 2 && <LanguagesStage />}
              {index === 3 && <WhisperStage />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

const ANY_APPS = [
  { app: "Notion", icon: NOTION, color: "#33302A", text: "Q3 goals: ship the Android widget and halve onboarding time." },
  { app: "Gmail", icon: GMAIL, color: "#EA4335", text: "Thanks for the intro, Sam. Happy to find time next week." },
  { app: "Google Docs", icon: DOCS, color: "#4285F4", text: "Section 2 covers the pilot results and what we learned." },
  { app: "Slack", icon: SLACK, color: "#4A154B", text: "On it. I'll post the numbers in this thread by noon." },
  { app: "WhatsApp", icon: WHATSAPP, color: "#25D366", text: "Landing at 6, see you at the usual place for dinner?" },
  { app: "Cursor", icon: null, color: "#33302A", text: "Add a loading state to the checkout button and disable double clicks." },
];

function AnyAppStage() {
  const { ref, index, t } = useSlotClock(ANY_APPS.length, 3400);
  const item = ANY_APPS[index];
  const typed = item.text.slice(0, Math.floor(Math.max(0, t - 350) / 26));
  return (
    <div ref={ref}>
      <p className="eyebrow">One hotkey, every text field</p>
      <div className="mt-5 grid grid-cols-6 gap-2 sm:gap-3">
        {ANY_APPS.map((a, i) => (
          <motion.div
            key={a.app}
            animate={{ y: i === index ? -6 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className={`flex flex-col items-center gap-2 rounded-xl py-3 transition-colors ${i === index ? "bg-canvas ring-1 ring-ink/15" : ""}`}
          >
            <AppGlyph icon={a.icon} color={a.color} size={36} title={a.app} tone={i === index ? "brand" : "ink"} />
            <span className="hidden font-display text-[10.5px] font-semibold text-ink-soft sm:block">{a.app}</span>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 rounded-xl bg-canvas p-4 ring-1 ring-line">
        <p className="font-display text-[11.5px] font-semibold text-ink-faint">{item.app}</p>
        <p className="mt-2 min-h-[54px] text-[16px] leading-relaxed text-ink">
          {typed}
          {typed.length < item.text.length && <Caret className="bg-brand" />}
        </p>
      </div>
      <div className="mt-5">
        <ListeningPill state={typed.length < item.text.length ? "listening" : "done"} labels={{ done: `Typed in ${item.app}` }} />
      </div>
    </div>
  );
}

const SPELL = [
  { heard: "super base", right: "Supabase" },
  { heard: "cloud flair", right: "Cloudflare" },
  { heard: "korea ragu nathan", right: "Priya Raghunathan" },
  { heard: "next j s", right: "Next.js" },
];

function SpellingStage() {
  const { ref, t } = useSlotClock(1, 7200);
  const fixed = Math.floor(Math.max(0, t - 900) / 1100);
  const word = (i: number) => {
    const done = i < fixed;
    return (
      <span className="relative inline-block whitespace-nowrap">
        <AnimatePresence mode="wait" initial={false}>
          {done ? (
            <motion.span
              key="right"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-semibold text-ink underline decoration-brand decoration-2 underline-offset-[5px]"
            >
              {SPELL[i].right}
            </motion.span>
          ) : (
            <motion.span key="heard" exit={{ opacity: 0, y: -6 }} className="text-ink-faint line-through decoration-brand/60">
              {SPELL[i].heard}
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    );
  };
  return (
    <div ref={ref}>
      <p className="eyebrow">Spelled from context</p>
      <p className="mt-5 font-serif text-[1.45rem] leading-[1.7] text-ink-soft sm:text-[1.6rem]">
        Deploy the {word(0)} function behind {word(1)}, then ask {word(2)} to review the {word(3)} upgrade.
      </p>
      <ul className="mt-6 grid grid-cols-2 gap-2">
        {SPELL.map((s, i) => (
          <li key={s.right} className={`flex items-center gap-2 rounded-lg px-3 py-2 font-display text-[12px] ring-1 transition-colors duration-500 ${i < fixed ? "bg-brand-soft/50 text-ink ring-brand/25" : "bg-canvas text-ink-faint ring-line"}`}>
            <Check aria-hidden="true" className={`h-3.5 w-3.5 ${i < fixed ? "text-brand" : "text-ink-faint/50"}`} strokeWidth={2.5} />
            {s.right}
          </li>
        ))}
      </ul>
    </div>
  );
}

const LANGS = [
  { name: "Español", text: "Confirmo la reunión del jueves a las diez." },
  { name: "हिन्दी", text: "मैं शाम तक रिपोर्ट भेज दूँगा।" },
  { name: "한국어", text: "회의 자료는 오늘 오후에 공유할게요." },
  { name: "Français", text: "Je vous envoie le contrat signé demain matin." },
  { name: "العربية", text: "سأرسل لك الملف بعد الاجتماع.", rtl: true },
];

function LanguagesStage() {
  const { ref, index, t } = useSlotClock(LANGS.length, 2800);
  return (
    <div ref={ref}>
      <p className="eyebrow">Dictate in the language you think in</p>
      <ul className="mt-4 divide-y divide-line">
        {LANGS.map((l, i) => {
          const active = i === index;
          const shown = active ? l.text.slice(0, Math.floor(Math.max(0, t - 200) / 45)) : i < index ? l.text : "";
          return (
            <li key={l.name} className="grid grid-cols-[88px_1fr] items-center gap-3 py-3 sm:grid-cols-[104px_1fr]">
              <span className={`font-display text-[12.5px] font-semibold transition-colors ${active ? "text-brand" : "text-ink-faint"}`}>{l.name}</span>
              <span dir={l.rtl ? "rtl" : undefined} className={`min-h-[26px] text-[15.5px] leading-snug ${active ? "text-ink" : "text-ink-soft"} ${l.rtl ? "text-right" : ""}`}>
                {shown}
                {active && shown.length < l.text.length && <Caret className="bg-brand" />}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function WhisperStage() {
  const text = "Running ten minutes late. Start without me and I'll catch up on the notes.";
  const { ref, t } = useSlotClock(1, 7000);
  const typed = text.slice(0, Math.floor(Math.max(0, t - 1200) / 40));
  const reduce = useReducedMotion();
  return (
    <div ref={ref}>
      <div className="flex items-center justify-between">
        <p className="eyebrow">Whisper mode</p>
        <span className="inline-flex items-center gap-1.5 rounded-md bg-canvas px-2 py-1 font-display text-[11px] font-semibold text-ink-soft ring-1 ring-line">
          <Moon aria-hidden="true" className="h-3 w-3" /> Shared office · 11:40 pm
        </span>
      </div>
      <div className="mt-6 flex h-24 items-center justify-center gap-[3px] rounded-xl bg-canvas px-4 ring-1 ring-line" aria-hidden="true">
        {Array.from({ length: 42 }).map((_, i) => (
          <motion.span
            key={i}
            className="w-[3px] rounded-full bg-brand/70"
            initial={{ height: 3 }}
            animate={reduce ? { height: 6 } : { height: [3, 4 + ((i * 5) % 9), 3] }}
            transition={{ duration: 1.1, repeat: reduce ? 0 : Infinity, delay: (i % 7) * 0.08 }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between font-display text-[11px] text-ink-faint">
        <span>Input level: a whisper</span>
        <span>Still understood</span>
      </div>
      <p className="mt-5 min-h-[56px] text-[16.5px] leading-relaxed text-ink">
        {typed}
        {typed.length < text.length && <Caret className="bg-brand" />}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Refine: what you said, what Oravo wrote.                                  */
/* ------------------------------------------------------------------------ */

type Token = { w: string; drop?: boolean; pause?: boolean };
const tk = (line: string): Token[] =>
  line.split(" ").map((w) => (w === "|" ? { w: "pause", pause: true, drop: true } : w.startsWith("~") ? { w: w.slice(1).replace(/_/g, " "), drop: true } : { w }));

const REFINE = [
  {
    title: "Instant Corrections",
    description: "Change your mind mid-sentence? Say “Let's meet at 2… actually 3,” and Oravo writes the corrected version. No backspacing needed.",
    raw: tk("let's meet at ~2… ~actually 3 on thursday in the ~small big conference room"),
    final: "Let's meet at 3 on Thursday in the big conference room.",
  },
  {
    title: "Filler Word Removal",
    description: "Oravo automatically removes ‘um,’ ‘uh,’ ‘like,’ and verbal pauses. Your text comes out clean and professional every time.",
    raw: tk("~um so the report is ~like basically done ~uh and ~you_know ready for review"),
    final: "So the report is basically done and ready for review.",
  },
  {
    title: "Smart Lists",
    description: "Just speak the numbers: ‘First, apples. Second, bananas. Third, oranges.’ Oravo turns it into a properly formatted list.",
    raw: tk("groceries ~first apples ~second bananas ~third oranges"),
    final: "Groceries:\n1. Apples\n2. Bananas\n3. Oranges",
  },
  {
    title: "Auto Punctuation",
    description: "Oravo detects punctuation from your natural pauses and tone. Dictate ‘comma’ or ‘period’ when you need precise control.",
    raw: tk("can you send me the file | I need it before the call | thanks so much"),
    final: "Can you send me the file? I need it before the call. Thanks so much!",
  },
];

const REFINE_SLOT = 7600;

export function RefineShowcase() {
  const { ref, index, setIndex, t } = useSlotClock(REFINE.length, REFINE_SLOT);
  const item = REFINE[index];
  const shownWords = Math.min(item.raw.length, Math.floor(Math.max(0, t - 300) / 150));
  const markAt = 300 + item.raw.length * 150 + 300;
  const marking = t >= markAt;
  const writeAt = markAt + 900;
  const written = item.final.slice(0, Math.max(0, Math.floor((t - writeAt) / 22)));

  return (
    <div ref={ref}>
      <Reveal className="flex justify-center">
        <Segmented
          label="Auto-formatting examples"
          options={REFINE.map((r) => ({ id: r.title, label: r.title }))}
          value={index}
          onChange={setIndex}
          progress={t / REFINE_SLOT}
        />
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.p
          key={item.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mx-auto mt-5 max-w-xl text-center text-[14.5px] leading-relaxed text-ink-soft"
        >
          {item.description}
        </motion.p>
      </AnimatePresence>

      <Reveal delay={0.1}>
        <div className="relative mt-10 grid gap-5 md:grid-cols-2 md:gap-0">
          <div className="rounded-2xl bg-canvas p-6 ring-1 ring-line md:rounded-r-none sm:p-7">
            <div className="flex items-center justify-between">
              <span className="eyebrow">You said</span>
              <Waveform active={!marking} className="bg-ink-faint" />
            </div>
            <p className="mt-4 min-h-[132px] font-serif text-[1.3rem] leading-[1.75] text-ink-soft">
              {item.raw.slice(0, shownWords).map((tok, i) =>
                tok.pause ? (
                  <span key={i} className={`mx-1 inline-flex translate-y-[-2px] items-center rounded px-1.5 py-0.5 align-middle font-display text-[10px] font-semibold uppercase tracking-wider ring-1 transition-colors duration-500 ${marking ? "bg-brand-soft text-brand ring-brand/30" : "text-ink-faint ring-line"}`}>
                    pause
                  </span>
                ) : (
                  <span key={i}>
                    <span
                      className={`transition-all duration-500 ${tok.drop && marking ? "text-ink-faint line-through decoration-brand decoration-2" : ""}`}
                    >
                      {tok.w}
                    </span>{" "}
                  </span>
                ),
              )}
              {shownWords < item.raw.length && <Caret />}
            </p>
          </div>
          <div className="paper-ruled rounded-2xl p-6 shadow-[0_0_0_1px_var(--o-line),0_24px_50px_-32px_rgba(51,48,42,0.45)] md:-ml-px md:rounded-l-none sm:p-7">
            <div className="flex items-center justify-between">
              <span className="eyebrow">Oravo wrote</span>
              {written.length >= item.final.length && (
                <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-1 font-display text-[11.5px] font-semibold text-brand">
                  <Check aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2.5} /> Clean
                </motion.span>
              )}
            </div>
            <p className="mt-4 min-h-[132px] whitespace-pre-line text-[17px] font-medium leading-[1.75] text-ink">
              {written}
              {marking && written.length < item.final.length && <Caret className="bg-brand" />}
            </p>
          </div>
          <span className="absolute left-1/2 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-raised text-ink-soft shadow-[0_0_0_1px_var(--o-line),0_8px_20px_-10px_rgba(51,48,42,0.4)] md:flex" aria-hidden="true">
            <CornerDownLeft className="h-4 w-4 -scale-x-100" />
          </span>
        </div>
      </Reveal>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Personalize: tone, dictionary, shortcuts.                                 */
/* ------------------------------------------------------------------------ */

const TONES = [
  {
    app: "Slack",
    icon: SLACK,
    color: "#4A154B",
    where: "#product · message",
    body: "Heads up, team: launch moves to Friday. QA caught two bugs we want fixed first.",
  },
  {
    app: "Gmail",
    icon: GMAIL,
    color: "#EA4335",
    where: "To: Leadership",
    body: "Hi all,\n\nA quick update: we've moved the launch to Friday so we can resolve two issues QA found in testing.\n\nBest,\nAsha",
  },
  {
    app: "Google Docs",
    icon: DOCS,
    color: "#4285F4",
    where: "Launch plan · Status",
    body: "Status update\nThe launch date has moved to Friday. QA identified two defects, which will be resolved before release.",
  },
];

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`relative overflow-hidden rounded-2xl bg-raised p-6 shadow-[0_0_0_1px_var(--o-line),0_18px_40px_-30px_rgba(51,48,42,0.4)] sm:p-7 ${className}`}>{children}</div>;
}

function ToneCard() {
  const { ref, index, select, progress } = useAutoAdvance(TONES.length, 4200);
  const tone = TONES[index];
  return (
    <Card className="flex h-full flex-col">
      <div ref={ref} className="flex h-full flex-col">
        <span className="font-display text-xs font-semibold text-brand">01</span>
        <h3 className="display-3 mt-2 text-ink">Adaptive Tone</h3>
        <p className="mt-2 max-w-md text-[14.5px] leading-relaxed text-ink-soft">
          Formal in documents, casual in messages, enthusiastic in emails. Oravo adapts to match where you&apos;re writing.
        </p>

        <div className="mt-6 rounded-xl bg-canvas p-4 ring-1 ring-line">
          <p className="eyebrow">You say, once</p>
          <p className="mt-1.5 text-[14px] italic leading-relaxed text-ink-soft">&ldquo;tell the team the launch moved to friday because QA found two bugs&rdquo;</p>
        </div>

        <Segmented
          className="mt-5"
          label="Where you're writing"
          options={TONES.map((tn) => ({ id: tn.app, label: tn.app }))}
          value={index}
          onChange={select}
          progress={progress}
        />

        <div className="relative mt-4 min-h-[188px] flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={tone.app}
              initial={{ opacity: 0, y: 10, rotate: -0.6 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="paper-ruled h-full rounded-xl p-4 ring-1 ring-line"
            >
              <p className="font-display text-[11.5px] font-semibold text-ink-faint">
                {tone.app} · {tone.where}
              </p>
              <p className={`mt-2 whitespace-pre-line leading-[1.75] text-ink ${tone.app === "Google Docs" ? "font-serif text-[16px]" : "text-[14.5px]"}`}>{tone.body}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Card>
  );
}

const TERMS = [
  { term: "Kubernetes", field: "Engineering" },
  { term: "metoprolol", field: "Healthcare" },
  { term: "Raghunathan", field: "Names" },
  { term: "res judicata", field: "Legal" },
  { term: "OKRs", field: "Acronyms" },
];

function DictionaryCard() {
  const { ref, t } = useSlotClock(1, 8000);
  const learned = Math.min(TERMS.length, Math.floor(Math.max(0, t - 500) / 1100));
  return (
    <Card>
      <div ref={ref}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="font-display text-xs font-semibold text-brand">02</span>
            <h3 className="display-3 mt-2 text-ink">Custom Dictionary</h3>
          </div>
          <span className="mt-1 font-display text-[11.5px] font-semibold text-ink-faint">{learned}/{TERMS.length} learned</span>
        </div>
        <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
          Medical terms, legal phrases, tech acronyms—Oravo memorizes your specialized vocabulary after hearing it once.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {TERMS.map((term, i) => {
            const on = i < learned;
            return (
              <motion.li
                key={term.term}
                animate={{ scale: on ? [1, 1.06, 1] : 1 }}
                transition={{ duration: 0.4 }}
                className={`inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 ring-1 transition-colors duration-500 ${on ? "bg-brand-soft/60 ring-brand/30" : "bg-canvas ring-line"}`}
              >
                <span className={`flex h-4 w-4 items-center justify-center rounded ${on ? "bg-brand text-white" : "bg-raised ring-1 ring-line"}`}>
                  {on && <Check aria-hidden="true" className="h-3 w-3" strokeWidth={3} />}
                </span>
                <span className={`font-display text-[12.5px] font-semibold ${on ? "text-ink" : "text-ink-faint"}`}>{term.term}</span>
                <span className="font-display text-[10.5px] text-ink-faint">{term.field}</span>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
}

const SHORTCUTS = [
  { cue: "my calendar link", text: "Grab any slot that works for you: cal.com/asha/30min" },
  { cue: "sign off", text: "Best,\nAsha Menon · Product Lead" },
  { cue: "refund answer", text: "No problem. I've started your refund; it should reach your card within 5 to 7 days." },
];

function ShortcutCard() {
  const { ref, index, t } = useSlotClock(SHORTCUTS.length, 4200);
  const s = SHORTCUTS[index];
  const typed = s.text.slice(0, Math.floor(Math.max(0, t - 900) / 22));
  return (
    <Card>
      <div ref={ref}>
        <span className="font-display text-xs font-semibold text-brand">03</span>
        <h3 className="display-3 mt-2 text-ink">Voice Shortcuts</h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
          Create shortcuts for things you say often—scheduling links, email signatures, FAQs. Speak the cue, get the full text.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="font-display text-[11.5px] font-semibold text-ink-faint">You say</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={s.cue}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="rounded-md bg-raised px-2.5 py-1 font-display text-[12.5px] font-semibold text-ink shadow-[0_0_0_1px_var(--o-line),0_2px_0_rgba(51,48,42,0.12)]"
            >
              &ldquo;{s.cue}&rdquo;
            </motion.span>
          </AnimatePresence>
        </div>
        <p className="mt-3 min-h-[72px] whitespace-pre-line rounded-xl bg-canvas p-3.5 text-[14.5px] leading-relaxed text-ink ring-1 ring-line">
          {typed}
          {typed.length < s.text.length && t > 900 && <Caret className="bg-brand" />}
        </p>
      </div>
    </Card>
  );
}

export function PersonalizeBento() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr]">
      <Reveal className="lg:row-span-2">
        <ToneCard />
      </Reveal>
      <Reveal delay={0.08}>
        <DictionaryCard />
      </Reveal>
      <Reveal delay={0.16}>
        <ShortcutCard />
      </Reveal>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Developers: a prompt that knows your files.                               */
/* ------------------------------------------------------------------------ */

type Piece = { text: string; kind?: "file" | "code" };
const DEV_HEARD = "in use auth dot ts make refresh token retry twice then call log out";
const DEV_PIECES: Piece[] = [
  { text: "In " },
  { text: "useAuth.ts", kind: "file" },
  { text: ", make " },
  { text: "refreshToken()", kind: "code" },
  { text: " retry twice, then call " },
  { text: "logout()", kind: "code" },
  { text: "." },
];
const FILES = ["api.ts", "useAuth.ts", "session.ts", "Checkout.tsx"];

export function DevEditorDemo() {
  const { ref, t } = useSlotClock(1, 9600);
  const heardWords = DEV_HEARD.split(" ");
  const heard = heardWords.slice(0, Math.floor(Math.max(0, t - 400) / 130)).join(" ");
  const writeAt = 400 + heardWords.length * 130 + 800;
  let budget = Math.max(0, Math.floor((t - writeAt) / 28));
  const fileTagged = budget > 3 + "useAuth.ts".length;
  const total = DEV_PIECES.reduce((n, p) => n + p.text.length, 0);
  const writing = t >= writeAt && budget < total;

  const listening = t < writeAt - 800;
  return (
    <div ref={ref} className="relative">
      <div className="frame-dotted absolute -inset-4 hidden sm:block" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-30px_rgba(51,48,42,0.45)]">
        <div className="flex items-center gap-2 border-b border-line bg-canvas px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="ml-2 font-display text-[12.5px] font-semibold text-ink">Cursor</span>
          <span className="text-[12px] text-ink-faint">— acme-web</span>
        </div>
        <div className="grid grid-cols-[124px_1fr] sm:grid-cols-[156px_1fr]">
          <div className="border-r border-line bg-canvas/60 p-3 font-mono text-[11.5px] text-ink-soft">
            <p className="flex items-center gap-1.5 px-1.5 py-1 text-ink-faint">
              <Folder aria-hidden="true" className="h-3.5 w-3.5" /> src/auth
            </p>
            {FILES.map((f) => {
              const hot = f === "useAuth.ts" && fileTagged;
              return (
                <p key={f} className={`mt-0.5 flex items-center gap-1.5 rounded-md px-1.5 py-1 pl-4 transition-colors duration-500 ${hot ? "bg-raised text-ink shadow-[0_0_0_1px_var(--o-line)]" : ""}`}>
                  <FileCode2 aria-hidden="true" className={`h-3.5 w-3.5 shrink-0 ${hot ? "text-brand" : ""}`} /> <span className="truncate">{f}</span>
                </p>
              );
            })}
          </div>
          <div className="p-4 sm:p-5">
            <p className="eyebrow">You say</p>
            <p className="mt-1.5 min-h-[44px] text-[13px] italic leading-relaxed text-ink-soft">
              {heard}
              {listening && <Caret />}
            </p>
            <div className="mt-3 rounded-xl bg-canvas p-3.5 ring-1 ring-line">
              <p className="eyebrow">Prompt</p>
              <p className="mt-2 min-h-[52px] text-[14.5px] leading-[1.8] text-ink">
                {DEV_PIECES.map((p, i) => {
                  if (budget <= 0) return null;
                  const shown = p.text.slice(0, budget);
                  budget -= p.text.length;
                  if (p.kind === "file")
                    return (
                      <span key={i} className="mx-0.5 rounded-md bg-raised px-1.5 py-0.5 font-mono text-[12.5px] text-brand ring-1 ring-line">
                        @{shown}
                      </span>
                    );
                  if (p.kind === "code")
                    return (
                      <code key={i} className="rounded bg-ink/[0.06] px-1 py-0.5 font-mono text-[12.5px] text-ink">
                        {shown}
                      </code>
                    );
                  return <span key={i}>{shown}</span>;
                })}
                {writing && <Caret className="bg-brand" />}
              </p>
            </div>
            <div className="mt-4">
              <ListeningPill state={listening ? "listening" : writing ? "polishing" : "done"} labels={{ polishing: "Formatting code…", done: "File tagged, code kept as code" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Platforms: drawn devices.                                                 */
/* ------------------------------------------------------------------------ */

const DEVICES = [
  { name: "macOS", desc: "Native Mac app", status: "Available", art: "M14 18 H82 V66 H14 Z M6 72 H90 L84 78 H12 Z M42 72 H54" },
  { name: "Windows", desc: "Native Windows app", status: "Available", art: "M10 14 H86 V64 H10 Z M40 64 L36 78 H60 L56 64 M30 78 H66" },
  { name: "Android", desc: "Android phones", status: "Available", art: "M32 8 H64 Q70 8 70 14 V82 Q70 88 64 88 H32 Q26 88 26 82 V14 Q26 8 32 8 Z M42 80 H54" },
  { name: "iOS", desc: "iPhone & iPad", status: "Coming soon", art: "M32 8 H64 Q70 8 70 14 V82 Q70 88 64 88 H32 Q26 88 26 82 V14 Q26 8 32 8 Z M42 14 H54" },
];

export function PlatformShelf() {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState<number | null>(null);
  return (
    <Reveal>
      <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line shadow-[0_0_0_1px_var(--o-line)] lg:grid-cols-4">
        {DEVICES.map((d, i) => {
          const soon = d.status !== "Available";
          return (
            <li
              key={d.name}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className={`flex flex-col items-center px-4 pb-7 pt-8 text-center ${soon ? "bg-canvas" : "bg-raised"}`}
            >
              <motion.svg
                viewBox="0 0 96 96"
                className="h-20 w-20 sm:h-24 sm:w-24"
                fill="none"
                aria-hidden="true"
                animate={hover === i && !reduce ? { y: -4, rotate: -2 } : { y: 0, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <motion.path
                  d={d.art}
                  stroke={soon ? "rgba(51,48,42,0.3)" : "rgba(51,48,42,0.6)"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={soon ? "4 5" : undefined}
                  initial={reduce ? false : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1.4, delay: 0.15 * i, ease: "easeInOut" }}
                />
                {!soon && (
                  <motion.path
                    d="M38 40 Q48 30 58 40 M42 46 Q48 40 54 46"
                    stroke="var(--o-accent)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    initial={reduce ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 + 0.15 * i }}
                    transform={d.name === "Android" ? "translate(0 4)" : undefined}
                  />
                )}
              </motion.svg>
              <h3 className="mt-4 font-display text-[16px] font-semibold text-ink">{d.name}</h3>
              <p className="mt-1 text-[13.5px] text-ink-soft">{d.desc}</p>
              <span className={`mt-3 inline-flex items-center gap-1.5 font-display text-[11.5px] font-semibold ${soon ? "text-ink-faint" : "text-ink"}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${soon ? "bg-ink-faint/60" : "bg-brand"}`} aria-hidden="true" />
                {d.status}
              </span>
            </li>
          );
        })}
      </ul>
    </Reveal>
  );
}
