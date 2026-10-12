"use client";

import { useState, useEffect } from "react";
import { Doodle } from "./landing/Doodle";
import { Parallax } from "./landing/Parallax";
import { Reveal, RevealWords } from "./landing/Reveal";
import AutoFormattingAnimation from "./AutoFormattingAnimation";
import PersonalizationAnimation from "./PersonalizationAnimation";
import ContextAwarenessAnimation from "./ContextAwarenessAnimation";

// Icons for feature cards
const featureIcons = [
  // Auto formatting
  <svg key="format" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Personalization
  <svg key="person" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Context awareness
  <svg key="context" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
];

export default function DocumentationSection() {
  const [activeCard, setActiveCard] = useState(0);
  const [progress, setProgress] = useState(0);

  const cards = [
    {
      title: "1. Press your hotkey in any app",
      description:
        "One shortcut activates Oravo wherever your cursor is—Gmail, Slack, Notion, Google Docs, or any text field.",
      component: AutoFormattingAnimation,
    },
    {
      title: "2. Speak naturally",
      description:
        "Dictate in fluent English or switch languages when you need to—Oravo understands technical terms, names from your contacts, and code-switching.",
      component: PersonalizationAnimation,
    },
    {
      title: "3. Oravo types with the right tone",
      description:
        "The right language, the right format, instantly where your cursor is. Casual in Slack, professional in email, technical in Notion.",
      component: ContextAwarenessAnimation,
    },
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveCard((current) => (current + 1) % cards.length);
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [cards.length]);

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

      {/* Content Section - REDESIGNED */}
      <div className="mx-auto w-full max-w-6xl px-5 pt-12 sm:px-8 sm:pt-14">
        <div className="surface-solid overflow-hidden !rounded-2xl">
          <div className="flex flex-col lg:flex-row">
            {/* Left Column - Feature Cards */}
            <div className="w-full lg:w-[360px] flex flex-col border-b lg:border-b-0 lg:border-r border-line">
              {cards.map((card, index) => {
                const isActive = index === activeCard;
                const isLast = index === cards.length - 1;

                return (
                  <div
                    key={index}
                    onClick={() => handleCardClick(index)}
                    className={`relative w-full transition-all duration-300 cursor-pointer ${
                      !isLast ? "border-b border-line" : ""
                    } ${isActive ? "bg-canvas" : "hover:bg-canvas/60"}`}
                  >
                    {/* Left progress indicator */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent overflow-hidden">
                      <div
                        className={`w-full bg-primary-500 transition-all duration-100 ease-linear ${
                          isActive ? "" : "opacity-0"
                        }`}
                        style={{ height: isActive ? `${progress}%` : "0%" }}
                      />
                    </div>

                    <div className="p-5 pl-6 flex gap-4">
                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-lg shrink-0 flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-primary-500 text-white shadow-[0_4px_10px_-2px_rgba(15,106,158,0.4)]"
                          : "bg-canvas text-ink-soft ring-1 ring-line"
                      }`}>
                        {featureIcons[index]}
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-1.5">
                        <div className={`font-display text-sm font-semibold leading-tight transition-colors ${
                          isActive ? "text-ink" : "text-ink-soft"
                        }`}>
                          {card.title}
                        </div>
                        <div className={`text-[13px] font-normal leading-[20px] font-sans transition-colors ${
                          isActive ? "text-ink-soft" : "text-ink-faint"
                        }`}>
                          {card.description}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column - Animated Demo */}
            <div className="flex-1 p-4 md:p-6 flex flex-col items-center justify-center bg-canvas">
              {/* Hotkey indicator */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-raised rounded-lg ring-1 ring-line">
                  <kbd className="px-2 py-0.5 bg-ink text-white text-xs font-mono rounded">Fn</kbd>
                  <span className="text-xs text-ink-faint">or</span>
                  <kbd className="px-2 py-0.5 bg-ink text-white text-xs font-mono rounded">Ctrl</kbd>
                  <span className="text-[10px] text-ink-faint">+</span>
                  <kbd className="px-2 py-0.5 bg-ink text-white text-xs font-mono rounded">Win</kbd>
                </div>
                <span className="text-xs text-ink-soft">to start dictating</span>
              </div>

              {/* Demo area */}
              <div className="w-full h-[320px] md:h-[440px] bg-raised rounded-xl overflow-hidden relative ring-1 ring-line">
                {cards.map((card, index) => {
                  const Component = card.component;
                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 ${
                        activeCard === index
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      <Component />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile indicator dots */}
        <div className="flex justify-center gap-2 mt-4 lg:hidden">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              className={`h-1 rounded-sm transition-all ${
                index === activeCard ? "bg-primary-500 w-6" : "bg-line w-3"
              }`}
              aria-label={`View feature ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
