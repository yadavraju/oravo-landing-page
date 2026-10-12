"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// One real work message per language: what you say, and the English Oravo writes.
const SAMPLES: Record<string, { input: string; output: string; rtl?: boolean }[]> = {
  Hindi: [
    { input: "क्लाइंट को बता दो कि रिपोर्ट कल सुबह तक भेज देंगे।", output: "Please let the client know we'll send the report by tomorrow morning." },
    { input: "मीटिंग को गुरुवार तीन बजे तक शिफ्ट कर सकते हैं क्या?", output: "Could we move the meeting to Thursday at 3 PM?" },
  ],
  Arabic: [
    { input: "سأرسل لك العقد المعدّل بعد الظهر.", output: "I'll send you the revised contract this afternoon.", rtl: true },
    { input: "هل يمكننا تأجيل الاجتماع إلى يوم الخميس؟", output: "Could we postpone the meeting to Thursday?", rtl: true },
  ],
  Chinese: [
    { input: "我们下周一之前会把报价单发给你们。", output: "We'll send you the quote before next Monday." },
    { input: "这个问题我们已经修复了，今天下午会上线。", output: "We've fixed this issue, and the update goes live this afternoon." },
  ],
  Japanese: [
    { input: "資料は明日の朝までにお送りします。", output: "I'll send the materials over by tomorrow morning." },
    { input: "会議を木曜日に変更してもよろしいでしょうか？", output: "Would it be all right to move the meeting to Thursday?" },
  ],
  Korean: [
    { input: "수정된 견적서를 오늘 오후에 보내드리겠습니다.", output: "I'll send you the revised quote this afternoon." },
    { input: "회의를 목요일로 옮겨도 괜찮을까요?", output: "Would it be okay to move the meeting to Thursday?" },
  ],
  Portuguese: [
    { input: "Podemos remarcar a reunião para quinta? Tive um imprevisto.", output: "Could we move the meeting to Thursday? Something unexpected came up." },
    { input: "Já enviei a proposta revisada para o cliente.", output: "I've already sent the revised proposal to the client." },
  ],
  French: [
    { input: "Peux-tu dire à Paul que la présentation est prête ?", output: "Could you let Paul know the presentation is ready?" },
    { input: "Je serai en retard de dix minutes pour l'appel.", output: "I'll be ten minutes late for the call." },
  ],
  German: [
    { input: "Ich schicke dir das überarbeitete Angebot heute Nachmittag.", output: "I'll send you the revised proposal this afternoon." },
    { input: "Können wir das Meeting auf Donnerstag verschieben?", output: "Can we move the meeting to Thursday?" },
  ],
  Tagalog: [
    { input: "Ipapadala ko ang report bukas ng umaga.", output: "I'll send the report tomorrow morning." },
    { input: "Pwede ba nating ilipat ang meeting sa Huwebes?", output: "Could we move the meeting to Thursday?" },
  ],
  Vietnamese: [
    { input: "Tôi sẽ gửi báo giá cho anh trước thứ Hai tuần sau.", output: "I'll send you the quote before next Monday." },
    { input: "Chúng ta có thể dời cuộc họp sang thứ Năm không?", output: "Could we move the meeting to Thursday?" },
  ],
};

export function LanguagePairDemo({ language, flag, accent }: { language: string; flag: string; accent: string }) {
  const samples = SAMPLES[language] ?? SAMPLES.French;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const SLOT = 6500;
  const [t, setT] = useState(reduceMotion ? SLOT - 1 : 0);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    const started = performance.now() - t;
    const id = setInterval(() => setT((performance.now() - started) % (SLOT * samples.length)), 40);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion, samples.length]);

  const index = Math.floor(t / SLOT) % samples.length;
  const local = t % SLOT;
  const sample = samples[index];
  const input = sample.input.slice(0, Math.floor(Math.max(0, local - 200) / 45));
  const outStart = 200 + sample.input.length * 45 + 600;
  const output = sample.output.slice(0, Math.floor(Math.max(0, local - outStart) / 22));
  const translating = input.length >= sample.input.length && output.length === 0;

  return (
    <div ref={ref} className="relative">
      <div className="frame-dotted absolute -inset-4 hidden sm:block" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-2xl bg-raised p-5 shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-30px_rgba(51,48,42,0.45)] sm:p-7">
        <div className="flex items-center justify-between">
          <span className="eyebrow inline-flex items-center gap-2">
            <span className="text-base not-italic">{flag}</span> You speak {language}
          </span>
          <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
        </div>
        <p dir={sample.rtl ? "rtl" : undefined} className={`mt-3 min-h-[72px] font-serif text-[22px] leading-snug text-ink-soft sm:text-[24px] ${sample.rtl ? "text-right" : ""}`}>
          {input}
          {input.length < sample.input.length && <span className="o-caret ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[2px] bg-ink-faint" />}
        </p>
        <div className="my-5 flex items-center gap-3" aria-hidden="true">
          <span className="h-px flex-1 border-t-[1.5px] border-dashed border-line" />
          <motion.span
            className={`flex h-9 items-center gap-2 rounded-lg px-3 font-display text-[12px] font-semibold ${translating ? "bg-ink text-white" : "bg-canvas text-ink-soft ring-1 ring-line"}`}
            animate={translating ? { scale: [1, 1.05, 1] } : { scale: 1 }}
            transition={{ duration: 0.8, repeat: translating ? Infinity : 0 }}
          >
            <ArrowDown className="h-3.5 w-3.5" />
            {translating ? "Translating…" : "Oravo · English"}
          </motion.span>
          <span className="h-px flex-1 border-t-[1.5px] border-dashed border-line" />
        </div>
        <span className="eyebrow">Oravo writes</span>
        <div className="mt-3 min-h-[84px] rounded-xl bg-primary-soft/70 p-4 ring-1 ring-primary-500/15">
          <p className="text-[16.5px] font-medium leading-relaxed text-ink">
            {output}
            {output.length > 0 && output.length < sample.output.length && (
              <span className="o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-primary-500" />
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
