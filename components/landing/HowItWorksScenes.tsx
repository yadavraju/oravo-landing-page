"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { AtSign, Check, Mail, MessageSquare, NotebookPen, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/*
 * The three "Press. Speak. Done." scenes.
 *
 * Each scene is a loop driven by one clock (`t`, in ms) so every element in it
 * derives its state from the same timeline and the pieces can never drift out
 * of step. The clock only runs while the scene is on screen, and under reduced
 * motion the scene renders its finished frame.
 */

function useClock(period: number) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const [t, setT] = useState(reduceMotion ? period - 1 : 0);

  useEffect(() => {
    if (reduceMotion) {
      setT(period - 1);
      return;
    }
    if (!inView) return;
    const started = performance.now() - t;
    const id = setInterval(() => setT((performance.now() - started) % period), 40);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion, period]);

  return { ref, t, reduceMotion };
}

const typed = (text: string, t: number, start: number, msPerChar: number) =>
  text.slice(0, Math.max(0, Math.min(text.length, Math.floor((t - start) / msPerChar))));

function Caret({ show = true, className = "bg-primary-500" }: { show?: boolean; className?: string }) {
  if (!show) return null;
  return <span className={`o-caret ml-px inline-block h-[1.05em] w-[2px] translate-y-[2px] ${className}`} />;
}

/* The Oravo pill: the little listening bar that floats over whatever app you are in. */
function OravoPill({ state }: { state: "idle" | "listening" | "polishing" | "done" }) {
  return (
    <motion.div
      layout
      className="flex items-center gap-2 rounded-lg bg-ink px-3 py-2 text-white shadow-[0_10px_24px_-10px_rgba(51,48,42,0.6)]"
      animate={{ opacity: state === "idle" ? 0 : 1, y: state === "idle" ? 8 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="flex h-4 items-center gap-[2px]" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => (
          <motion.span
            key={i}
            className="w-[2px] rounded-full bg-[#e8a07f]"
            animate={state === "listening" ? { height: [3, 6 + ((i * 7) % 9), 4] } : { height: 3 }}
            transition={{ duration: 0.7 + (i % 3) * 0.15, repeat: state === "listening" ? Infinity : 0, delay: i * 0.05 }}
          />
        ))}
      </span>
      <span className="font-display text-[11.5px] font-semibold">
        {state === "listening" ? "Listening…" : state === "polishing" ? "Polishing…" : "Typed by Oravo"}
      </span>
      {state === "done" && <Check aria-hidden="true" className="h-3.5 w-3.5 text-[#9fd3b4]" />}
    </motion.div>
  );
}

/* A warm app window: traffic lights, an app label, and content. */
function AppWindow({ icon: Icon, app, detail, children }: { icon: typeof Mail; app: string; detail: string; children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_20px_40px_-24px_rgba(51,48,42,0.35)]">
      <div className="flex items-center gap-2 border-b border-line bg-canvas px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <Icon aria-hidden="true" className="ml-2 h-3.5 w-3.5 text-ink-faint" />
        <span className="font-display text-[11.5px] font-semibold text-ink-soft">{app}</span>
        <span className="truncate text-[11.5px] text-ink-faint">{detail}</span>
      </div>
      <div className="relative flex-1 p-4 sm:p-5">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* 1. Press your hotkey: raw speech becomes a formatted email.              */
/* ------------------------------------------------------------------------ */

const RAW_EMAIL = "hey sarah can we meet tomorrow at 3 pm to discuss the project budget dont forget to bring the report";
const POLISHED_EMAIL = "Hey Sarah,\n\nCan we meet tomorrow at 3 PM to discuss the project budget?\n\nDon't forget to bring the report.\n\nBest,\nPriya";
const RULES = [
  { glyph: "Aa", label: "Capitalization", at: 5000 },
  { glyph: ".,?", label: "Punctuation", at: 5900 },
  { glyph: "¶", label: "Paragraphs", at: 6800 },
];

export function HotkeyScene() {
  const PERIOD = 11000;
  const { ref, t } = useClock(PERIOD);
  const pressed = t > 400 && t < 900;
  const pill = t < 700 ? "idle" : t < 3600 ? "listening" : t < 4400 ? "polishing" : "done";
  const raw = typed(RAW_EMAIL, t, 900, 26);
  const body = typed(POLISHED_EMAIL, t, 4400, 22);

  return (
    <div ref={ref} className="flex h-full flex-col gap-3">
      <div className="flex items-center justify-center gap-2" aria-hidden="true">
        {["Fn", "Ctrl", "Win"].map((key, i) => (
          <motion.kbd
            key={key}
            className="rounded-md border-b-[3px] border-[#d9cfc2] bg-raised px-2.5 py-1 font-mono text-[11px] font-semibold text-ink shadow-[0_0_0_1px_var(--o-line)]"
            animate={pressed && i === 0 ? { y: 2, borderBottomWidth: 1 } : { y: 0, borderBottomWidth: 3 }}
            transition={{ duration: 0.12 }}
          >
            {key}
          </motion.kbd>
        ))}
        <span className="ml-1 font-display text-[11.5px] text-ink-faint">hold to dictate</span>
      </div>

      <div className="relative flex-1 min-h-0">
        <AppWindow icon={Mail} app="Gmail" detail="— New message">
          <div className="mb-3 space-y-1.5 border-b border-line pb-3 text-[12px]">
            <p className="text-ink-faint">To <span className="ml-2 text-ink">sarah@acme.com</span></p>
            <p className="text-ink-faint">Subject <span className="ml-2 text-ink">Project budget</span></p>
          </div>
          <p className="whitespace-pre-line text-[13.5px] leading-relaxed text-ink">
            {body}
            <Caret show={t >= 4400 && body.length < POLISHED_EMAIL.length} />
          </p>

          <div className="absolute inset-x-4 bottom-4 flex flex-col items-start gap-2 sm:inset-x-5">
            <AnimatePresence>
              {t > 900 && t < 4400 && (
                <motion.div
                  key="raw"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                  className="max-w-full rounded-lg bg-canvas px-3 py-2 text-[12px] italic leading-snug text-ink-soft ring-1 ring-line"
                >
                  <span className="mr-1.5 not-italic font-display text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-faint">You said</span>
                  {raw}
                  <Caret show={pill === "listening"} className="bg-ink-faint" />
                </motion.div>
              )}
            </AnimatePresence>
            <OravoPill state={pill} />
          </div>
        </AppWindow>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {RULES.map((rule) => {
          const on = t >= rule.at;
          return (
            <div
              key={rule.label}
              className={`flex items-center gap-2 rounded-lg px-2.5 py-2 ring-1 transition-colors duration-500 ${on ? "bg-primary-soft ring-primary-500/30" : "bg-raised ring-line"}`}
            >
              <span className={`font-display text-[12px] font-bold transition-colors duration-500 ${on ? "text-primary-500" : "text-ink-faint"}`}>{rule.glyph}</span>
              <span className={`truncate font-display text-[11.5px] font-medium transition-colors duration-500 ${on ? "text-ink" : "text-ink-faint"}`}>{rule.label}</span>
              {on && <Check aria-hidden="true" className="ml-auto h-3 w-3 shrink-0 text-primary-500" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* 2. Speak naturally: one sentence, your style.                            */
/* ------------------------------------------------------------------------ */

const STYLES = [
  { id: "Professional", text: "Hi Mike,\n\nI wanted to follow up on our meeting. Could you share a time that works for you this week?\n\nBest regards," },
  { id: "Casual", text: "Hey Mike!\n\nJust checking in about our meeting. When works for you?\n\nCheers!" },
  { id: "Friendly", text: "Hi Mike,\n\nHope your week is going well! Can we find a time for our meeting? Happy to work around you.\n\nThanks so much!" },
];

export function StyleScene() {
  const SLOT = 3600;
  const PERIOD = SLOT * STYLES.length;
  const { ref, t } = useClock(PERIOD);
  const index = Math.floor(t / SLOT) % STYLES.length;
  const local = t % SLOT;
  const style = STYLES[index];
  const out = typed(style.text, local, 500, 16);
  const learned = Math.min(100, 30 + (t / PERIOD) * 70);

  return (
    <div ref={ref} className="flex h-full flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <p className="font-display text-[11.5px] text-ink-faint">
          <span className="font-semibold uppercase tracking-[0.12em]">You said</span>{" "}
          <span className="italic text-ink-soft">&ldquo;tell mike about the meeting&rdquo;</span>
        </p>
      </div>

      <div className="relative inline-flex self-start rounded-lg bg-canvas p-1 ring-1 ring-line">
        {STYLES.map((s, i) => (
          <span key={s.id} className="relative z-10 px-3 py-1.5 font-display text-[12px] font-semibold">
            {i === index && (
              <motion.span layoutId="style-pill" className="absolute inset-0 -z-10 rounded-md bg-primary-500 shadow-[0_2px_6px_-2px_rgba(15,106,158,0.5)]" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
            )}
            <span className={i === index ? "text-white" : "text-ink-soft"}>{s.id}</span>
          </span>
        ))}
      </div>

      <div className="relative flex-1 min-h-0">
        <AppWindow icon={Mail} app="Outlook" detail="— Re: Q3 sync">
          <AnimatePresence mode="wait">
            <motion.p
              key={style.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="whitespace-pre-line text-[13.5px] leading-relaxed text-ink"
            >
              {out}
              <Caret show={out.length < style.text.length} />
            </motion.p>
          </AnimatePresence>
          <div className="absolute bottom-4 left-4 sm:left-5">
            <OravoPill state={local < 500 ? "polishing" : "done"} />
          </div>
        </AppWindow>
      </div>

      <div className="rounded-lg bg-raised px-3 py-2.5 ring-1 ring-line">
        <div className="flex items-center justify-between font-display text-[11.5px]">
          <span className="font-semibold text-ink">Learns your style over time</span>
          <span className="tabular-nums text-ink-faint">{Math.round(learned)}%</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-sm bg-canvas">
          <div className="h-full rounded-sm bg-brand transition-[width] duration-300" style={{ width: `${learned}%` }} />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* 3. The right tone: context and names, spelled right.                     */
/* ------------------------------------------------------------------------ */

const CONTEXT = [
  { said: "send the report to dr patel", out: "Send the report to Dr. Patel.", entity: "Dr. Patel", source: "From your contacts", tag: "Names", app: "Slack", detail: "— #clinic-ops", icon: MessageSquare },
  { said: "push the fix to kubernetes and ping the sre team", out: "Push the fix to Kubernetes and ping the SRE team.", entity: "Kubernetes", source: "Technical vocabulary", tag: "Technical", app: "Linear", detail: "— ENG-482", icon: NotebookPen },
  { said: "file the nda with acme llc by friday", out: "File the NDA with Acme LLC by Friday.", entity: "Acme LLC", source: "Legal vocabulary", tag: "Legal", app: "Gmail", detail: "— Contracts", icon: AtSign },
];
const TAGS = ["Names", "Medical", "Legal", "Technical"];

export function ContextScene() {
  const SLOT = 4200;
  const PERIOD = SLOT * CONTEXT.length;
  const { ref, t } = useClock(PERIOD);
  const index = Math.floor(t / SLOT) % CONTEXT.length;
  const local = t % SLOT;
  const ex = CONTEXT[index];
  const said = typed(ex.said, local, 200, 28);
  const detected = local > 1700;
  const out = typed(ex.out, local, 2300, 24);
  const [before, after] = ex.out.split(ex.entity);

  return (
    <div ref={ref} className="flex h-full flex-col gap-3">
      <div className="flex min-h-[38px] items-center rounded-lg bg-canvas px-3 py-2 ring-1 ring-line">
        <p className="text-[12.5px] italic text-ink-soft">
          <span className="mr-1.5 not-italic font-display text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-faint">You said</span>
          {said}
          <Caret show={local < 1700} className="bg-ink-faint" />
        </p>
      </div>

      <AnimatePresence>
        {detected && (
          <motion.div
            key={`ctx-${index}`}
            initial={{ opacity: 0, x: -12, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 self-start rounded-lg bg-raised px-3 py-2 ring-1 ring-line"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary-soft text-primary-500">
              <User aria-hidden="true" className="h-3.5 w-3.5" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[12px] font-semibold text-ink">{ex.entity}</span>
              <span className="block font-display text-[11px] text-ink-faint">{ex.source}</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex-1 min-h-0">
        <AppWindow icon={ex.icon} app={ex.app} detail={ex.detail}>
          <p className="text-[14px] leading-relaxed text-ink">
            {out.length >= ex.out.length ? (
              <>
                {before}
                <motion.span
                  initial={{ backgroundColor: "rgba(15,106,158,0)" }}
                  animate={{ backgroundColor: "rgba(15,106,158,0.14)" }}
                  className="rounded px-0.5 font-semibold text-primary-500"
                >
                  {ex.entity}
                </motion.span>
                {after}
              </>
            ) : (
              out
            )}
            <Caret show={local > 2300 && out.length < ex.out.length} />
          </p>
          <div className="absolute bottom-4 left-4 sm:left-5">
            <OravoPill state={local < 1700 ? "listening" : local < 2300 ? "polishing" : "done"} />
          </div>
        </AppWindow>
      </div>

      <div className="flex flex-wrap gap-2">
        {TAGS.map((tag) => {
          const on = tag === ex.tag && detected;
          return (
            <span
              key={tag}
              className={`rounded-md px-2.5 py-1 font-display text-[11.5px] font-semibold ring-1 transition-colors duration-500 ${on ? "bg-brand-soft text-brand ring-brand/30" : "bg-raised text-ink-faint ring-line"}`}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
}
