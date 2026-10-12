"use client";

import { useState, useEffect } from "react";
import { Doodle } from "./landing/Doodle";
import { Parallax } from "./landing/Parallax";
import { Reveal, RevealWords } from "./landing/Reveal";
import { AnimatePresence, motion } from "framer-motion";
import { ContextScene, HotkeyScene, StyleScene } from "./landing/HowItWorksScenes";


export default function DocumentationSection() {
  const [activeCard, setActiveCard] = useState(0);
  const [progress, setProgress] = useState(0);

  const cards = [
    {
      title: "1. Press your hotkey in any app",
      description:
        "One shortcut activates Oravo wherever your cursor is—Gmail, Slack, Notion, Google Docs, or any text field.",
      component: HotkeyScene,
      duration: 11000,
    },
    {
      title: "2. Speak naturally",
      description:
        "Dictate in fluent English or switch languages when you need to—Oravo understands technical terms, names from your contacts, and code-switching.",
      component: StyleScene,
      duration: 10800,
    },
    {
      title: "3. Oravo types with the right tone",
      description:
        "The right language, the right format, instantly where your cursor is. Casual in Slack, professional in email, technical in Notion.",
      component: ContextScene,
      duration: 12600,
    },
  ];

  // Each step stays up for one full loop of its scene, then hands over.
  useEffect(() => {
    const step = 100 / (cards[activeCard].duration / 100);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveCard((current) => (current + 1) % cards.length);
          return 0;
        }
        return Math.min(100, prev + step);
      });
    }, 100);

    return () => clearInterval(progressInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  const handleCardClick = (index: number) => {
    setActiveCard(index);
    setProgress(0);
  };

  return (
    <div id="how-it-works" className="w-full">
      {/* Header: doodle, eyebrow, serif title, lede, "works with" row */}
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center sm:px-8">
        <Parallax speed={18} className="mb-4">
          <Doodle name="hotkey" className="w-32 sm:w-36" />
        </Parallax>
        <Reveal><p className="eyebrow">How it works</p></Reveal>
        <h2 className="display-2 mt-3 text-ink">
          <RevealWords text="Press. Speak. Done." />
        </h2>
        <Reveal delay={0.12}>
          <p className="subtitle mx-auto mt-4 max-w-xl">
            Press your hotkey in any app. Speak naturally. Oravo types the right language with the
            right tone, instantly.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-6 flex items-center gap-3">
            <span className="font-display text-xs text-ink-faint">Works with</span>
            <div className="flex items-center gap-1.5">
              <span title="Gmail" className="flex h-8 w-8 items-center justify-center rounded-lg bg-raised ring-1 ring-line">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M20 18H4V8L12 13L20 8V18Z" fill="#EA4335"/>
                    <path d="M20 6H4L12 11L20 6Z" fill="#34A853"/>
                    <path d="M4 6V8L12 13L20 8V6H4Z" fill="#4285F4"/>
                    <path d="M4 8V18H6V10L12 13L18 10V18H20V8L12 13L4 8Z" fill="#FBBC05"/>
                  </svg>
              </span>
              <span title="Slack" className="flex h-8 w-8 items-center justify-center rounded-lg bg-raised ring-1 ring-line">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M6 15a2 2 0 01-2-2 2 2 0 012-2h2v2a2 2 0 01-2 2zM10 15a2 2 0 01-2-2V7a2 2 0 114 0v6a2 2 0 01-2 2z" fill="#E01E5A"/>
                    <path d="M10 6a2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2v2h-2zM10 10a2 2 0 012-2h6a2 2 0 110 4h-6a2 2 0 01-2-2z" fill="#36C5F0"/>
                    <path d="M20 10a2 2 0 01-2 2 2 2 0 01-2-2V8h2a2 2 0 012 2zM16 10a2 2 0 01-2 2v6a2 2 0 104 0v-6a2 2 0 00-2-2z" fill="#2EB67D"/>
                    <path d="M16 20a2 2 0 01-2-2 2 2 0 012-2h2v2a2 2 0 01-2 2zM16 14a2 2 0 01-2 2H8a2 2 0 110-4h6a2 2 0 012 2z" fill="#ECB22E"/>
                  </svg>
              </span>
              <span title="Notion" className="flex h-8 w-8 items-center justify-center rounded-lg bg-raised ring-1 ring-line">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#37322F">
                    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 2.122c-.42-.326-.98-.7-2.055-.607L3.01 2.795c-.467.047-.56.28-.374.466l1.823.947zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.84-.046.933-.56.933-1.167V6.354c0-.606-.233-.933-.746-.886l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.747 0-.933-.234-1.494-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.187 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933l3.222-.187zM2.778 1.4L16.1.066c1.634-.14 2.055-.047 3.082.7l4.25 2.986c.7.513.933.653.933 1.213v16.138c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.046-1.448-.094-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.986c0-.84.374-1.54 1.448-1.586z"/>
                  </svg>
              </span>
              <span title="VS Code" className="flex h-8 w-8 items-center justify-center rounded-lg bg-raised ring-1 ring-line">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M17 3L7 9L3 6V18L7 15L17 21V3Z" fill="#0078D4"/>
                    <path d="M17 3L7 9V15L17 21V3Z" fill="#0065C3"/>
                    <path d="M7 9L3 12L7 15V9Z" fill="#1F9CF0"/>
                  </svg>
              </span>
              <span className="flex h-8 items-center justify-center rounded-lg bg-canvas px-2 font-display text-[11px] font-semibold text-ink-soft ring-1 ring-line">
                +50
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Steps on the band, the scene on a dark stage beside them. */}
      <div className="mx-auto mt-12 grid w-full max-w-6xl items-stretch gap-8 px-5 sm:mt-14 sm:px-8 lg:grid-cols-[minmax(0,330px)_minmax(0,1fr)] lg:gap-10">
        <ol className="flex flex-col justify-center gap-2">
          {cards.map((card, index) => {
            const isActive = index === activeCard;
            return (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => handleCardClick(index)}
                  aria-current={isActive ? "step" : undefined}
                  className={`group relative w-full rounded-2xl px-5 py-4 text-left transition-colors duration-300 ${isActive ? "bg-raised/70 shadow-[0_0_0_1px_var(--o-line)]" : "hover:bg-raised/40"}`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className={`font-serif text-[34px] leading-none transition-colors duration-300 ${isActive ? "text-brand" : "text-ink-faint/60"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={`font-display text-[16px] font-semibold leading-snug transition-colors ${isActive ? "text-ink" : "text-ink-soft"}`}>
                      {card.title.replace(/^\d\.\s*/, "")}
                    </span>
                  </div>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden pl-[54px] text-[14px] leading-relaxed text-ink-soft"
                      >
                        <span className="block pt-2">{card.description}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                  {isActive && (
                    <span className="absolute inset-x-5 bottom-0 h-[2px] overflow-hidden rounded-full bg-line">
                      <span className="block h-full bg-brand transition-[width] duration-100 ease-linear" style={{ width: `${progress}%` }} />
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ol>

        {/* The stage: warm sand with a dot grid and a field of slowly drifting doodles. */}
        <div className="relative overflow-hidden rounded-[28px] bg-[#f6e8da] p-4 ring-1 ring-[#ead6c3] sm:p-7">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{ backgroundImage: "radial-gradient(rgba(122,53,25,0.10) 1px, transparent 1px)", backgroundSize: "20px 20px" }}
          />
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            {(
              [
                ["speech", "left-[3%] top-[6%] w-24", 0],
                ["sparkle", "right-[4%] top-[4%] w-20", 1.2],
                ["hotkey", "left-[2%] bottom-[8%] w-24", 2.1],
                ["bubbles", "right-[3%] bottom-[6%] w-24", 0.6],
                ["plane", "left-[42%] top-[1%] w-20", 1.8],
              ] as const
            ).map(([name, pos, delay]) => (
              <motion.div
                key={name}
                className={`absolute opacity-60 ${pos}`}
                animate={{ y: [0, -10, 0], rotate: [0, 3, 0, -2, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay }}
              >
                <Doodle name={name} className="w-full" />
              </motion.div>
            ))}
          </div>
          <div className="relative mx-auto h-[500px] max-w-[620px] sm:h-[540px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, y: 14, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.985 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                {(() => {
                  const Scene = cards[activeCard].component;
                  return <Scene />;
                })()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
