"use client";

import { useState, useEffect } from "react";
import type React from "react";
import AutoFormattingAnimation from "./AutoFormattingAnimation";
import PersonalizationAnimation from "./PersonalizationAnimation";
import ContextAwarenessAnimation from "./ContextAwarenessAnimation";

// Badge component for consistency
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
        {icon}
      </div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  );
}

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
      title: "Auto formatting",
      description:
        "Clean, consistent formatting tailored to what you're writing and what's on your screen.",
      component: AutoFormattingAnimation,
    },
    {
      title: "Personalization",
      description:
        "It learns and adapts to your tone, formality, and natural style on any platform.",
      component: PersonalizationAnimation,
    },
    {
      title: "Context awareness",
      description:
        "oravo gets unique terms and names right using contextual cues. You don't have to go back and correct the spelling.",
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
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section - UNCHANGED */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4 shadow-none">
          <Badge
            icon={
              <div className="w-[10.50px] h-[10.50px] outline-[1.17px] outline-[#37322F] outline-offset-[-0.58px] rounded-full"></div>
            }
            text="Platform Features"
          />
          <h2 className="w-full text-center text-[#49423D] text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-stretch-semi-condensed font-medium leading-tight md:leading-[60px] font-serif px-4">
            Speak better, not harder.
          </h2>

          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Lightning-fast AI dictation that works across all your favorite
            apps.
          </div>
        </div>
      </div>

      {/* Content Section - REDESIGNED */}
      <div className="w-full max-w-[1100px] px-4 md:px-8 py-10 md:py-14">
        <div className="bg-white rounded-2xl border border-[#E0DEDB] shadow-[0px_8px_32px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Column - Feature Cards */}
            <div className="w-full lg:w-[360px] flex flex-col border-b lg:border-b-0 lg:border-r border-[#E0DEDB]">
              {cards.map((card, index) => {
                const isActive = index === activeCard;
                const isLast = index === cards.length - 1;

                return (
                  <div
                    key={index}
                    onClick={() => handleCardClick(index)}
                    className={`relative w-full transition-all duration-300 cursor-pointer ${
                      !isLast ? "border-b border-[#E0DEDB]" : ""
                    } ${isActive ? "bg-[#FAFAF9]" : "hover:bg-[#FAFAF9]/50"}`}
                  >
                    {/* Left progress indicator */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent overflow-hidden">
                      <div
                        className={`w-full bg-[#FF8C42] transition-all duration-100 ease-linear ${
                          isActive ? "" : "opacity-0"
                        }`}
                        style={{ height: isActive ? `${progress}%` : "0%" }}
                      />
                    </div>

                    <div className="p-5 pl-6 flex gap-4">
                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-[#FF8C42] text-white shadow-[0px_2px_8px_rgba(255,140,66,0.3)]"
                          : "bg-[#F7F5F3] text-[#605A57]"
                      }`}>
                        {featureIcons[index]}
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-1.5">
                        <div className={`text-sm font-semibold leading-tight font-sans transition-colors ${
                          isActive ? "text-[#37322F]" : "text-[#605A57]"
                        }`}>
                          {card.title}
                        </div>
                        <div className={`text-[13px] font-normal leading-[20px] font-sans transition-colors ${
                          isActive ? "text-[#605A57]" : "text-[#847971]"
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
            <div className="flex-1 p-4 md:p-6 flex flex-col items-center justify-center bg-gradient-to-br from-[#FAFAF9] to-[#F5F3F1]">
              {/* Hotkey indicator */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-[#E0DEDB] shadow-sm">
                  <kbd className="px-2 py-0.5 bg-[#37322F] text-white text-xs font-mono rounded">Fn</kbd>
                  <span className="text-xs text-[#847971]">or</span>
                  <kbd className="px-2 py-0.5 bg-[#37322F] text-white text-xs font-mono rounded">Ctrl</kbd>
                  <span className="text-[10px] text-[#847971]">+</span>
                  <kbd className="px-2 py-0.5 bg-[#37322F] text-white text-xs font-mono rounded">Win</kbd>
                </div>
                <span className="text-xs text-[#605A57]">to start dictating</span>
              </div>

              {/* Demo area */}
              <div className="w-full h-[320px] md:h-[440px] bg-white rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.08)] overflow-hidden relative border border-[#E0DEDB]">
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
              className={`h-2 rounded-full transition-all ${
                index === activeCard ? "bg-[#FF8C42] w-6" : "bg-[#E0DEDB] w-2"
              }`}
              aria-label={`View feature ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
