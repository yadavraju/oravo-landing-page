"use client";

import { AnimatePresence, motion, useInView, useReducedMotion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Doodle } from "./Doodle";
import { Parallax } from "./Parallax";
import { Reveal, RevealWords } from "./Reveal";

type Testimonial = {
  quote: string;
  highlight: string;
  name: string;
  role: string;
  logo: string;
};

// Real customer quotes only. `highlight` is the phrase the pen underlines.
const TESTIMONIALS: Testimonial[] = [
  {
    quote: "I write 40+ emails a day. Oravo cut that time in half. The accuracy is shockingly good — I rarely need to fix anything.",
    highlight: "cut that time in half",
    name: "Abhinash Y.",
    role: "Software Engineer at OSU",
    logo: "/osu.svg",
  },
  {
    quote: "I can dictate observations during experiments and capture technical findings without breaking focus. It handles specialized terminology like dd-cfDNA and HLA nomenclature surprisingly well. Saves me hours every week on documentation.",
    highlight: "Saves me hours every week",
    name: "Archana Y.",
    role: "Research Scientist at CareDx",
    logo: "/caredx.png",
  },
  {
    quote: "Oravo's dictation speed and clarity blew me away. It's smoother than any speech tool I've tried and feels built for people who live in Slack and email all day. Worth every cent.",
    highlight: "feels built for people who live in Slack and email all day",
    name: "Rabin N.",
    role: "Customer Success Manager at NTT Data",
    logo: "/ntt.jpg",
  },
];

const HOLD = 7000;
const TILTS = [-2.5, 2, -1];

function Highlighted({ text, phrase, active }: { text: string; phrase: string; active: boolean }) {
  const reduceMotion = useReducedMotion();
  const [before, after] = text.split(phrase);
  return (
    <>
      {before}
      <span className="relative whitespace-normal">
        <span className="relative z-10">{phrase}</span>
        <svg className="absolute -bottom-1 left-0 z-0 h-3 w-full overflow-visible" viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true">
          <motion.path
            d="M1 8 C 20 3, 40 11, 60 6 S 90 4, 99 7"
            fill="none"
            stroke="var(--o-accent)"
            strokeOpacity={0.55}
            strokeWidth={3}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={reduceMotion ? false : { pathLength: 0 }}
            animate={{ pathLength: active ? 1 : 0 }}
            transition={{ duration: 0.9, delay: active ? 0.5 : 0, ease: [0.33, 0.1, 0.25, 1] }}
          />
        </svg>
      </span>
      {after}
    </>
  );
}

export default function TestimonialDeck() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const [order, setOrder] = useState(TESTIMONIALS.map((_, i) => i));
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);

  const next = () => {
    setDirection(1);
    setOrder((o) => [...o.slice(1), o[0]]);
  };
  const prev = () => {
    setDirection(-1);
    setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)]);
  };

  useEffect(() => {
    if (!inView || paused || reduceMotion) return;
    const id = setTimeout(next, HOLD);
    return () => clearTimeout(id);
  }, [order, inView, paused, reduceMotion]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -80) next();
    else if (info.offset.x > 80) prev();
  };

  const top = order[0];

  return (
    <div ref={ref} className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <div>
        <Parallax speed={18} className="mb-4">
          <Doodle name="quote" className="w-28 sm:w-32" />
        </Parallax>
        <Reveal><p className="eyebrow">In their words</p></Reveal>
        <h2 className="display-2 mt-3 text-ink">
          <RevealWords text="People who write all day, in their own words." />
        </h2>
        <Reveal delay={0.12}>
          <p className="subtitle mt-4 max-w-md">Engineers, researchers and customer teams who switched their keyboard for their voice.</p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-8 flex items-center gap-4">
            <button type="button" onClick={prev} aria-label="Previous testimonial" className="btn-secondary !h-10 !w-10 !border-line !p-0">
              <ChevronLeft aria-hidden="true" className="h-4 w-4" />
            </button>
            <button type="button" onClick={next} aria-label="Next testimonial" className="btn-secondary !h-10 !w-10 !border-line !p-0">
              <ChevronRight aria-hidden="true" className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2" aria-hidden="true">
              {TESTIMONIALS.map((_, i) => (
                <span key={i} className={`h-1 rounded-sm transition-all duration-500 ${i === top ? "w-8 bg-primary-500" : "w-3 bg-line"}`} />
              ))}
            </div>
            <span className="font-display text-[12px] tabular-nums text-ink-faint">
              {String(top + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
            </span>
          </div>
        </Reveal>
      </div>

      {/* The deck. The top card can be dragged; the others fan out behind it. */}
      <div
        className="relative mx-auto h-[400px] w-full max-w-[560px] sm:h-[380px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-live="polite"
      >
        <AnimatePresence initial={false} custom={direction}>
          {order
            .slice()
            .reverse()
            .map((index) => {
              const depth = order.indexOf(index);
              const item = TESTIMONIALS[index];
              const isTop = depth === 0;
              return (
                <motion.figure
                  key={index}
                  custom={direction}
                  drag={isTop && !reduceMotion ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onDragEnd={isTop ? onDragEnd : undefined}
                  initial={{ opacity: 0, y: 30, rotate: 0 }}
                  animate={{
                    opacity: depth > 2 ? 0 : 1,
                    y: depth * 14,
                    x: depth * 10,
                    scale: 1 - depth * 0.04,
                    rotate: TILTS[depth] ?? 0,
                    zIndex: 10 - depth,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  className={`paper-ruled absolute inset-0 flex cursor-grab flex-col rounded-2xl p-7 shadow-[0_0_0_1px_var(--o-line),0_24px_50px_-28px_rgba(51,48,42,0.45)] active:cursor-grabbing sm:p-9 ${
                    isTop ? "" : "pointer-events-none"
                  }`}
                >
                  <div className="pointer-events-none absolute inset-3 rounded-xl border-[1.5px] border-dashed border-ink/10" aria-hidden="true" />
                  <span className="font-serif text-6xl leading-none text-brand/60" aria-hidden="true">&ldquo;</span>
                  <blockquote className="relative -mt-4 font-serif text-[19px] leading-[1.5] text-ink sm:text-[21px]">
                    <Highlighted text={item.quote} phrase={item.highlight} active={isTop} />
                  </blockquote>
                  <figcaption className="relative mt-auto flex items-center gap-3 pt-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.logo} alt="" className="h-9 w-auto max-w-[72px] object-contain" />
                    <span className="leading-tight">
                      <span className="block font-display text-[14px] font-semibold text-ink">{item.name}</span>
                      <span className="block font-display text-[12.5px] text-ink-soft">{item.role}</span>
                    </span>
                  </figcaption>
                </motion.figure>
              );
            })}
        </AnimatePresence>
      </div>
    </div>
  );
}
