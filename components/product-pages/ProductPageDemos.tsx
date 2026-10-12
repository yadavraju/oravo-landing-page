"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Check, Mic } from "lucide-react";
import { useState } from "react";
import { siGmail, siGoogledocs, siLinkedin, siNotion, siSlack, siWhatsapp } from "simple-icons";
import { AppGlyph, Caret, DemoWindow, ListeningPill, Segmented, Waveform, scriptPhases, useSlotClock, type IconData } from "./kit";

/*
 * Scripted demos for the SEO product pages (/dictation-app, /voice-typing,
 * /voice-dictation-software, /voice-to-text-app). Each loops while on screen,
 * pauses off screen and shows its finished state under reduced motion.
 */

const icon = (i: { title: string; hex: string; path: string }): IconData => ({ title: i.title, hex: i.hex, path: i.path });

/* ------------------------------------------------------------------------ */
/* /voice-typing hero: press the hotkey, speak, text lands in the app.       */
/* ------------------------------------------------------------------------ */

const HOTKEY_APPS = [
  {
    app: "Gmail",
    icon: icon(siGmail),
    color: "#EA4335",
    field: "New message",
    raw: "hi marco thanks for the quick turnaround um the numbers look good let's lock the plan on monday",
    polished: "Hi Marco, thanks for the quick turnaround. The numbers look good; let's lock the plan on Monday.",
  },
  {
    app: "Slack",
    icon: icon(siSlack),
    color: "#4A154B",
    field: "#design-review",
    raw: "love the new onboarding flow can we try a shorter headline on step two",
    polished: "Love the new onboarding flow! Can we try a shorter headline on step two?",
  },
  {
    app: "Google Docs",
    icon: icon(siGoogledocs),
    color: "#4285F4",
    field: "Q3 report",
    raw: "revenue grew eighteen percent quarter over quarter driven mostly by the new team plan",
    polished: "Revenue grew 18% quarter over quarter, driven mostly by the new Team plan.",
  },
  {
    app: "LinkedIn",
    icon: icon(siLinkedin),
    color: "#0A66C2",
    field: "Message",
    raw: "great to meet you at the summit would love to continue our chat about hiring over coffee",
    polished: "Great to meet you at the summit! I'd love to continue our chat about hiring over coffee.",
  },
];

const HOTKEY_SLOT = 8400;

export function HotkeyTypingDemo() {
  const { ref, index, t } = useSlotClock(HOTKEY_APPS.length, HOTKEY_SLOT);
  const item = HOTKEY_APPS[index];
  const s = scriptPhases(t, item.raw, item.polished, { lead: 700, wordMs: 115, charMs: 17 });
  const pressed = t > 250 && s.state === "listening";

  return (
    <div ref={ref} className="relative">
      <div className="frame-dotted absolute -inset-4 hidden sm:block" aria-hidden="true" />
      <DemoWindow
        title={item.app}
        subtitle={item.field}
        leading={<AppGlyph icon={item.icon} color={item.color} size={22} title={item.app} tone="brand" />}
      >
        <div className="min-h-[124px] rounded-xl bg-canvas p-4 ring-1 ring-line">
          <p className="whitespace-pre-line text-[15.5px] leading-relaxed text-ink">
            {s.typed}
            {(s.state !== "done" || !s.complete) && <Caret className={s.state === "done" ? "bg-brand" : "bg-ink-faint"} />}
          </p>
        </div>
        <p className="mt-3 min-h-[42px] text-[13px] italic leading-relaxed text-ink-faint">
          {s.state === "listening" ? s.heard : `“${item.raw}”`}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2" aria-hidden="true">
            {["fn", "space"].map((k) => (
              <motion.span
                key={k}
                animate={{ y: pressed ? 2 : 0, boxShadow: pressed ? "0 0 0 1px var(--o-line), 0 0 0 rgba(51,48,42,0)" : "0 0 0 1px var(--o-line), 0 3px 0 rgba(51,48,42,0.16)" }}
                transition={{ duration: 0.15 }}
                className={`flex h-9 items-center justify-center rounded-lg px-3 font-display text-[12px] font-semibold ${pressed ? "bg-brand-soft text-brand" : "bg-raised text-ink-soft"} ${k === "space" ? "w-24" : "w-11"}`}
              >
                {k}
              </motion.span>
            ))}
            <span className="ml-1 font-display text-[11.5px] text-ink-faint">{pressed ? "Hold to talk" : "Release to type"}</span>
          </div>
          <ListeningPill state={s.state} />
        </div>
      </DemoWindow>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* /voice-typing: keyboard vs voice, a race.                                 */
/* ------------------------------------------------------------------------ */

const RACE_TEXT =
  "Thanks for the update. I reviewed the proposal and the budget works for us. Let's schedule the kickoff for next Tuesday and loop in the design team so they can start on the wireframes.";

export function TypingRace() {
  const { ref, t, reduce } = useSlotClock(1, 11000);
  const words = RACE_TEXT.split(" ");
  // 40 WPM vs 150 WPM, played at 4x speed.
  const kb = reduce ? 9 : Math.min(words.length, Math.floor(Math.max(0, t - 600) / (60000 / 40 / 4)));
  const voice = reduce ? words.length : Math.min(words.length, Math.floor(Math.max(0, t - 600) / (60000 / 150 / 4)));
  const lanes = [
    { label: "Keyboard", wpm: 40, count: kb, tone: "bg-ink/25", text: "text-ink-soft" },
    { label: "Voice with Oravo", wpm: 150, count: voice, tone: "bg-brand", text: "text-ink" },
  ];
  return (
    <div ref={ref} className="relative">
      <div className="frame-dotted absolute -inset-4 hidden sm:block" aria-hidden="true" />
      <div className="relative space-y-4 rounded-2xl bg-raised p-5 shadow-[0_0_0_1px_var(--o-line),0_24px_50px_-30px_rgba(51,48,42,0.4)] sm:p-6">
        <div className="flex items-center justify-between">
          <span className="eyebrow">Same reply, two ways</span>
          <span className="font-display text-[11px] text-ink-faint">Played at 4x</span>
        </div>
        {lanes.map((lane) => (
          <div key={lane.label} className="rounded-xl bg-canvas p-4 ring-1 ring-line">
            <div className="flex items-center justify-between">
              <span className="font-display text-[12.5px] font-semibold text-ink">{lane.label}</span>
              <span className="font-display text-[12px] font-semibold text-ink-soft">
                <span className={lane.wpm > 100 ? "text-brand" : ""}>{lane.wpm}</span> WPM
              </span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/10">
              <div className={`h-full rounded-full ${lane.tone} transition-[width] duration-200`} style={{ width: `${(lane.count / words.length) * 100}%` }} />
            </div>
            <p className={`mt-3 h-[66px] overflow-hidden text-[13.5px] leading-relaxed ${lane.text}`}>
              {words.slice(0, lane.count).join(" ")}
              {lane.count < words.length && <Caret className={lane.wpm > 100 ? "bg-brand" : "bg-ink-faint"} />}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* /dictation-app: speak your language, get English.                         */
/* ------------------------------------------------------------------------ */

const TRANSLATE = [
  {
    id: "es",
    name: "Español",
    label: "Spanish",
    input: "Hola, necesito enviar este informe a mi jefe antes de las cinco de la tarde.",
    output: "Hi, I need to send this report to my boss before 5 PM today.",
  },
  { id: "hi", name: "हिन्दी", label: "Hindi", input: "मुझे कल की मीटिंग के लिए प्रेजेंटेशन तैयार करनी है।", output: "I need to prepare a presentation for tomorrow's meeting." },
  { id: "zh", name: "中文", label: "Mandarin", input: "我想预约下周三的会议室。", output: "I'd like to book the meeting room for next Wednesday." },
  { id: "ar", name: "العربية", label: "Arabic", input: "أريد أن أرسل هذا البريد الإلكتروني إلى العميل.", output: "I want to send this email to the client.", rtl: true },
  { id: "pt", name: "Português", label: "Portuguese", input: "Preciso revisar o contrato antes da reunião.", output: "I need to review the contract before the meeting." },
];

const TRANSLATE_SLOT = 6400;

export function LiveTranslateDemo() {
  const { ref, index, setIndex, t, reduce } = useSlotClock(TRANSLATE.length, TRANSLATE_SLOT);
  const pair = TRANSLATE[index];
  const input = reduce ? pair.input : pair.input.slice(0, Math.floor(Math.max(0, t - 250) / 40));
  const inputDone = input.length >= pair.input.length;
  const outStart = 250 + pair.input.length * 40 + 600;
  const output = reduce ? pair.output : pair.output.slice(0, Math.floor(Math.max(0, t - outStart) / 22));
  const translating = inputDone && output.length === 0;
  const done = output.length >= pair.output.length;

  return (
    <div ref={ref} className="mx-auto w-full max-w-4xl">
      <div className="flex justify-center">
        <Segmented
          label="Choose a language"
          options={TRANSLATE.map((p) => ({ id: p.id, label: p.name }))}
          value={index}
          onChange={setIndex}
          progress={reduce ? undefined : t / TRANSLATE_SLOT}
        />
      </div>

      <div className="relative mt-8 grid overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-34px_rgba(51,48,42,0.5)] md:grid-cols-2">
        <div className="border-b border-line p-6 md:border-b-0 md:border-r sm:p-7">
          <div className="flex items-center justify-between">
            <span className="eyebrow">You speak · {pair.label}</span>
            <Waveform active={!inputDone} className="bg-ink-faint" />
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={pair.id}
              dir={pair.rtl ? "rtl" : undefined}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className={`mt-4 min-h-[96px] font-serif text-[1.35rem] leading-snug text-ink-soft ${pair.rtl ? "text-right" : ""}`}
            >
              {input}
              {!inputDone && <Caret />}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="bg-canvas p-6 sm:p-7">
          <span className="eyebrow">Perfect English output</span>
          <p className="mt-4 min-h-[96px] text-[17px] font-medium leading-relaxed text-ink">
            {output}
            {output.length > 0 && !done && <Caret className="bg-brand" />}
            {translating && <span className="font-display text-[13px] font-normal text-ink-faint">Oravo is translating…</span>}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Auto-punctuated", "Grammar-corrected", "Professional tone"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={false}
                animate={{ opacity: done ? 1 : 0.35, y: done ? 0 : 3 }}
                transition={{ delay: done ? i * 0.12 : 0, duration: 0.3 }}
                className="inline-flex items-center gap-1.5 rounded-md bg-raised px-2 py-1 font-display text-[11.5px] font-semibold text-ink-soft ring-1 ring-line"
              >
                <Check aria-hidden="true" className="h-3 w-3 text-brand" strokeWidth={3} />
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
        <span className="absolute left-1/2 top-1/2 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 -rotate-90 items-center justify-center rounded-full bg-raised text-ink-soft shadow-[0_0_0_1px_var(--o-line),0_8px_20px_-10px_rgba(51,48,42,0.4)] md:flex" aria-hidden="true">
          <ArrowDown className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* /dictation-app hero: one mic, many accents.                               */
/* ------------------------------------------------------------------------ */

const ACCENTS = [
  { who: "Ananya · Bengaluru", accent: "Indian English", text: "Can we push the design review to Thursday? I'll share the updated mockups tonight." },
  { who: "Wei · Shenzhen", accent: "Mandarin-accented English", text: "The supplier confirmed the shipment. It should arrive at the warehouse on the 14th." },
  { who: "Chidi · Lagos", accent: "Nigerian English", text: "I've attached the signed contract. Let me know if legal needs anything else from us." },
  { who: "Lucía · Monterrey", accent: "Mexican Spanish-accented English", text: "Thanks for your patience. Your refund was processed and should appear in three days." },
];

export function AccentMicDemo() {
  const { ref, index, t, reduce } = useSlotClock(ACCENTS.length, 6200);
  const item = ACCENTS[index];
  const typed = reduce ? item.text : item.text.slice(0, Math.floor(Math.max(0, t - 900) / 30));
  const speaking = !reduce && t < 900 + item.text.length * 30;

  return (
    <div ref={ref} className="relative">
      <div className="frame-dotted absolute -inset-4 hidden sm:block" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-2xl bg-raised p-6 shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-30px_rgba(51,48,42,0.45)] sm:p-7">
        <div className="flex items-center gap-5">
          <span className="relative flex h-16 w-16 shrink-0 items-center justify-center">
            {[0, 1].map((ring) => (
              <motion.span
                key={ring}
                className="absolute inset-0 rounded-full bg-brand/20"
                animate={speaking ? { scale: [1, 1.7], opacity: [0.5, 0] } : { scale: 1, opacity: 0 }}
                transition={{ duration: 1.6, repeat: speaking ? Infinity : 0, delay: ring * 0.8, ease: "easeOut" }}
              />
            ))}
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-espresso text-white">
              <Mic aria-hidden="true" className="h-5 w-5" />
            </span>
          </span>
          <AnimatePresence mode="wait">
            <motion.div key={item.who} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }}>
              <p className="font-display text-[14px] font-semibold text-ink">{item.who}</p>
              <p className="mt-0.5 font-display text-[12px] text-ink-faint">Speaking {item.accent}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 min-h-[118px] rounded-xl bg-canvas p-4 ring-1 ring-line">
          <p className="eyebrow">Oravo types</p>
          <p className="mt-2 text-[16px] leading-relaxed text-ink">
            {typed}
            {typed.length < item.text.length && t > 900 && <Caret className="bg-brand" />}
          </p>
        </div>
        <div className="mt-5 flex items-center gap-1.5" aria-hidden="true">
          {ACCENTS.map((a, i) => (
            <span key={a.who} className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-6 bg-brand" : "w-1.5 bg-ink/20"}`} />
          ))}
          <span className="ml-auto font-display text-[11.5px] text-ink-faint">Built for accented speech</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* /voice-dictation-software hero: a memo, dictated.                         */
/* ------------------------------------------------------------------------ */

const MEMO = [
  { kind: "h", text: "Client memo: Raghunathan matter" },
  { kind: "p", text: "Following today's call, the client has agreed to the revised indemnification clause, subject to a 12-month cap." },
  { kind: "p", text: "Next steps:\n1. Circulate the redline by Friday\n2. Confirm the escrow terms with finance" },
] as const;
const VOCAB = ["Raghunathan", "indemnification", "escrow"];

export function MemoDictationDemo() {
  const total = MEMO.reduce((n, b) => n + b.text.length, 0);
  const { ref, t, reduce } = useSlotClock(1, 600 + total * 26 + 3600);
  let budget = reduce ? total : Math.max(0, Math.floor((t - 600) / 26));
  const typedSoFar = MEMO.map((b) => {
    const shown = b.text.slice(0, Math.max(0, budget));
    budget -= b.text.length;
    return shown;
  });
  const all = typedSoFar.join(" ");
  const writing = all.length < MEMO.map((b) => b.text).join(" ").length;

  return (
    <div ref={ref} className="relative">
      <div className="frame-dotted absolute -inset-4 hidden sm:block" aria-hidden="true" />
      <div className="relative grid overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-30px_rgba(51,48,42,0.45)] sm:grid-cols-[1fr_168px]">
        <div className="paper-ruled min-h-[330px] p-6 sm:p-7">
          <div className="flex items-center justify-between">
            <span className="font-display text-[11.5px] font-semibold text-ink-faint">Microsoft Word · Memo.docx</span>
            <ListeningPill state={writing ? "listening" : "done"} labels={{ listening: "Dictating…", done: "Formatted" }} />
          </div>
          <div className="mt-5 space-y-3">
            {MEMO.map((b, i) =>
              typedSoFar[i].length === 0 ? null : b.kind === "h" ? (
                <p key={i} className="font-serif text-[1.35rem] leading-tight text-ink">
                  {typedSoFar[i]}
                </p>
              ) : (
                <p key={i} className="whitespace-pre-line text-[14.5px] leading-[1.75] text-ink">
                  {typedSoFar[i]}
                </p>
              ),
            )}
            {writing && <Caret className="bg-brand" />}
          </div>
        </div>
        <div className="border-t border-line bg-canvas p-5 sm:border-l sm:border-t-0">
          <p className="eyebrow">Your vocabulary</p>
          <ul className="mt-3 space-y-2">
            {VOCAB.map((v) => {
              const hit = all.toLowerCase().includes(v.toLowerCase());
              return (
                <li key={v} className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 font-display text-[12px] font-semibold ring-1 transition-colors duration-500 ${hit ? "bg-brand-soft/60 text-ink ring-brand/30" : "bg-raised text-ink-faint ring-line"}`}>
                  <Check aria-hidden="true" className={`h-3 w-3 ${hit ? "text-brand" : "text-ink-faint/40"}`} strokeWidth={3} />
                  {v}
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-[11.5px] leading-relaxed text-ink-faint">Spelled right the first time, every time.</p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* /voice-to-text-app hero: a phone and a laptop, one voice.                 */
/* ------------------------------------------------------------------------ */

const CONVERT = [
  { device: "Android", app: "WhatsApp", icon: icon(siWhatsapp), color: "#25D366", text: "Running late! Order for me, I'll be there in ten." },
  { device: "Mac", app: "Notion", icon: icon(siNotion), color: "#33302A", text: "Interview notes: strong systems thinking, wants to lead a small team." },
  { device: "Windows", app: "Gmail", icon: icon(siGmail), color: "#EA4335", text: "Attached is the final invoice. Thank you for a great quarter!" },
];

export function DeviceConvertDemo() {
  const { ref, index, t, reduce } = useSlotClock(CONVERT.length, 5600);
  const item = CONVERT[index];
  const typed = reduce ? item.text : item.text.slice(0, Math.floor(Math.max(0, t - 1100) / 30));
  const listening = !reduce && t < 1100;
  const phone = item.device === "Android";
  const [hover, setHover] = useState(false);
  const r = useReducedMotion();

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="frame-dotted absolute -inset-4 hidden sm:block" aria-hidden="true" />
      <div className="relative grid grid-cols-[1fr_auto] items-end gap-4">
        {/* Laptop */}
        <motion.div animate={{ opacity: phone ? 0.55 : 1, y: phone ? 6 : 0 }} transition={{ duration: 0.5 }}>
          <DemoWindow
            title={phone ? "Your computer" : item.app}
            subtitle={phone ? undefined : item.device}
            leading={!phone ? <AppGlyph icon={item.icon} color={item.color} size={22} title={item.app} tone="brand" /> : undefined}
            bodyClassName="p-5"
          >
            <div className="min-h-[150px] rounded-xl bg-canvas p-4 ring-1 ring-line">
              <p className="eyebrow">{phone ? "Mac · Windows" : `In ${item.app}`}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink">
                {!phone && typed}
                {!phone && !listening && typed.length < item.text.length && <Caret className="bg-brand" />}
                {phone && <span className="text-ink-faint">Same hotkey, same voice, on every device.</span>}
              </p>
            </div>
          </DemoWindow>
        </motion.div>
        {/* Phone */}
        <motion.div
          animate={{ opacity: phone ? 1 : 0.55, y: phone ? -8 : 0, rotate: hover && !r ? -3 : 0 }}
          transition={{ duration: 0.5 }}
          className="w-[132px] rounded-[26px] bg-espresso p-2 shadow-[0_30px_50px_-24px_rgba(42,33,27,0.7)] sm:w-[148px]"
        >
          <div className="flex min-h-[238px] flex-col rounded-[20px] bg-raised p-2.5">
            <div className="mx-auto h-1.5 w-10 rounded-full bg-ink/15" />
            <div className="mt-3 flex items-center gap-1.5">
              <AppGlyph icon={CONVERT[0].icon} color={CONVERT[0].color} size={18} title="WhatsApp" tone={phone ? "brand" : "ink"} />
              <span className="font-display text-[10.5px] font-semibold text-ink">WhatsApp</span>
            </div>
            <div className="mt-auto rounded-xl bg-canvas p-2 text-[11.5px] leading-snug text-ink ring-1 ring-line">
              {phone ? typed || <span className="text-ink-faint">Message</span> : <span className="text-ink-faint">Message</span>}
              {phone && !listening && typed.length < item.text.length && <Caret className="bg-brand" />}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="relative mt-5 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-lg bg-espresso px-3 py-2 text-white">
          <Waveform active={listening || typed.length < item.text.length} className="bg-[#e8a07f]" />
          <span className="font-display text-[11.5px] font-semibold">{listening ? "Listening…" : typed.length < item.text.length ? "Converting voice to text…" : `Typed on ${item.device}`}</span>
        </span>
        <span className="flex gap-1.5" aria-hidden="true">
          {CONVERT.map((c, i) => (
            <span key={c.device} className={`rounded-md px-2 py-1 font-display text-[10.5px] font-semibold ring-1 transition-colors ${i === index ? "bg-raised text-ink ring-ink/20" : "text-ink-faint ring-transparent"}`}>
              {c.device}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* /voice-to-text-app: speak → convert → format, as one flow.                */
/* ------------------------------------------------------------------------ */

const FLOW_RAW = "so um the launch is on track uh design is done and qa starts monday";
const FLOW_FINAL = "The launch is on track. Design is done, and QA starts Monday.";

export function VoiceFlow({ steps }: { steps: { title: string; description: string }[] }) {
  const { ref, t, reduce } = useSlotClock(1, 9000);
  const stage = reduce ? 3 : t < 2600 ? 0 : t < 5200 ? 1 : 2;
  const raw = reduce ? FLOW_RAW : FLOW_RAW.slice(0, Math.floor(Math.max(0, t - 2600) / 30));
  const final = reduce ? FLOW_FINAL : FLOW_FINAL.slice(0, Math.floor(Math.max(0, t - 5400) / 28));

  return (
    <div ref={ref} className="relative">
      <svg className="pointer-events-none absolute left-[16%] right-[16%] top-[54px] hidden h-2 w-[68%] md:block" preserveAspectRatio="none" viewBox="0 0 100 2" aria-hidden="true">
        <line x1="0" y1="1" x2="100" y2="1" stroke="rgba(51,48,42,0.2)" strokeWidth="1.5" strokeDasharray="1.2 1.6" vectorEffect="non-scaling-stroke" />
        <motion.line
          x1="0"
          y1="1"
          x2="100"
          y2="1"
          stroke="var(--o-accent)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          initial={false}
          animate={{ pathLength: reduce ? 1 : stage === 0 ? 0.05 : stage === 1 ? 0.5 : 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </svg>
      <ol className="relative grid gap-8 md:grid-cols-3 md:gap-5">
        {steps.map((step, i) => {
          const on = stage === i || reduce;
          return (
            <li key={step.title} className="flex flex-col">
              <div
                className={`relative flex h-[112px] items-center justify-center rounded-2xl px-4 transition-[background-color,box-shadow] duration-500 ${
                  on ? "bg-raised shadow-[0_0_0_1px_rgba(51,48,42,0.18),0_18px_36px_-24px_rgba(51,48,42,0.45)]" : "bg-canvas shadow-[0_0_0_1px_var(--o-line)]"
                }`}
              >
                {i === 0 && (
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-canvas text-ink-soft ring-1 ring-line">
                      <Mic aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <Waveform active={stage === 0 && !reduce} bars={16} height={28} className="bg-brand/70" />
                  </span>
                )}
                {i === 1 && (
                  <p className="line-clamp-3 text-center text-[13px] italic leading-relaxed text-ink-soft">
                    {raw || <span className="text-ink-faint">Words appear as you speak…</span>}
                    {stage === 1 && <Caret />}
                  </p>
                )}
                {i === 2 && (
                  <p className="text-center text-[14px] font-medium leading-relaxed text-ink">
                    {final || <span className="font-normal text-ink-faint">Punctuated and capitalized</span>}
                    {stage === 2 && final.length < FLOW_FINAL.length && <Caret className="bg-brand" />}
                  </p>
                )}
                <span
                  className={`absolute -top-3 left-5 rounded-md px-2 py-0.5 font-display text-[11px] font-semibold ring-1 transition-colors duration-500 ${
                    on ? "bg-raised text-brand ring-brand/30" : "bg-canvas text-ink-faint ring-line"
                  }`}
                >
                  Step {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-[16.5px] font-semibold tracking-[-0.01em] text-ink">{step.title}</h3>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">{step.description}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
