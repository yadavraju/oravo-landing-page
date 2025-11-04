"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const keyboardText = "Hey Kevin, let's meet on Friday at 2 PM... oh, wait";
const voiceText = `Hey Kevin, let's meet Friday at 2 PM for the quarterly review.

Best,
John`;

// Morphing Voice Waveform Component (small version for below progress bar)
export function MiniVoiceWaveform() {
  const bars = 12;

  return (
    <div className="relative flex items-center justify-center scale-90 sm:scale-100">
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 blur-lg opacity-40"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 rounded-full" />
      </motion.div>

      {/* Waveform bars */}
      <div className="relative flex items-center justify-center gap-[1.5px] sm:gap-[2px] px-3 py-1 sm:px-4 sm:py-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
        {Array.from({ length: bars }).map((_, i) => {
          const normalizedIndex = i / bars;
          const phase = Math.sin(normalizedIndex * Math.PI);

          return (
            <motion.div
              key={i}
              className="w-[1.5px] sm:w-[2px] bg-gradient-to-t from-blue-300 via-violet-300 to-purple-300 rounded-full"
              animate={{
                height: [6 + phase * 4, 12 + phase * 6, 6 + phase * 4],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 0.5 + normalizedIndex * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.04,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

// Typing Character Animation (A, B, C...)
function TypingCharacters() {
  const [currentChar, setCurrentChar] = useState(0);
  const chars = ["A", "B", "C", "D", "E"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentChar((prev) => (prev + 1) % chars.length);
    }, 300);

    return () => clearInterval(interval);
  }, [chars.length]);

  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      {chars.map((char, i) => (
        <motion.div
          key={char}
          className="w-6 h-6 sm:w-8 sm:h-8 rounded flex items-center justify-center bg-[#E8E6E3]/40 border border-[#78716C]/20"
          animate={{
            scale: currentChar === i ? [1, 1.1, 1] : 1,
            opacity: currentChar === i ? 1 : 0.4,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <span className="text-[10px] sm:text-xs font-semibold text-[#292524]">
            {char}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// Character-by-character typing component (slow keyboard)
function KeyboardTyping() {
  const [displayedText, setDisplayedText] = useState("");
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < keyboardText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(keyboardText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        setProgress(((currentIndex + 1) / keyboardText.length) * 100);
      }, 120); // Slow typing speed (120ms per character)

      return () => clearTimeout(timer);
    } else {
      // Reset after completion
      const resetTimer = setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex(0);
        setProgress(0);
      }, 2000);

      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Email UI */}
      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-5 shadow-sm border border-[#E8E6E3]/60 min-h-[100px] sm:min-h-[140px] md:min-h-[160px]">
        <div className="space-y-2 sm:space-y-3">
          {/* Email Header */}
          <div className="flex items-center gap-2 text-[10px] sm:text-xs text-[#78716C]">
            <div className="flex gap-0.5 sm:gap-1">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#78716C]/20" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#78716C]/20" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#78716C]/20" />
            </div>
          </div>

          <div className="text-[10px] sm:text-xs text-[#78716C] font-medium">
            Kevin Pietersen
          </div>

          {/* Typing Area */}
          <div className="h-[70px] sm:h-[110px] md:h-[130px]">
            <p
              className="text-xs sm:text-sm md:text-base text-[#292524] font-normal"
              style={{ lineHeight: "1.5" }}
            >
              {displayedText}
              <motion.span
                className="inline-block w-[2px] h-3 sm:h-4 md:h-5 bg-[#292524] ml-[1px]"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5 sm:space-y-2">
        <div className="h-1 sm:h-1.5 bg-[#E8E6E3]/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#78716C] to-[#57534E] rounded-full"
            style={{ width: `${progress}%` }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              mass: 0.5,
            }}
          />
        </div>
        <div className="flex justify-between items-center text-[10px] sm:text-xs text-[#78716C]">
          <span>Typing...</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
}

// Character-by-character streaming component (fast voice - 220 wpm)
function VoiceStreaming() {
  const [displayedText, setDisplayedText] = useState("");
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < voiceText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(voiceText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        setProgress(((currentIndex + 1) / voiceText.length) * 100);
      }, 25); // Fast typing speed (25ms per character - approximately 220 wpm)

      return () => clearTimeout(timer);
    } else {
      // Reset after completion
      const resetTimer = setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex(0);
        setProgress(0);
      }, 2000);

      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Email UI */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 md:p-5 shadow-lg border border-white/10 min-h-[100px] sm:min-h-[140px] md:min-h-[160px]">
        <div className="space-y-2 sm:space-y-3">
          {/* Email Header */}
          <div className="flex items-center gap-2 text-[10px] sm:text-xs text-white/50">
            <div className="flex gap-0.5 sm:gap-1">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/20" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/20" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/20" />
            </div>
          </div>

          <div className="text-[10px] sm:text-xs text-white/60 font-medium">
            Kevin Pietersen
          </div>

          {/* Streaming Area */}
          <div className="h-[70px] sm:h-[110px] md:h-[130px]">
            <p
              className="text-xs sm:text-sm md:text-base text-white font-normal whitespace-pre-line"
              style={{ lineHeight: "1.5" }}
            >
              {displayedText}
              <motion.span
                className="inline-block w-[2px] h-3 sm:h-4 md:h-5 bg-white ml-[1px]"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5 sm:space-y-2">
        <div className="h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              mass: 0.5,
            }}
          />
        </div>
        <div className="flex justify-between items-center text-[10px] sm:text-xs text-white/60">
          <span>Dictating...</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
}

export default function EmailComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full py-8 sm:py-12 md:py-16"
    >
      {/* Mobile & Tablet: Vertical Stack */}
      <div className="lg:hidden px-4">
        <div className="flex flex-col gap-6 sm:gap-8">
          {/* Left Card - Keyboard Typing (Slow) - Mobile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FAF9F6] via-[#F5F3F0] to-[#EBE9E6] shadow-[0_4px_24px_rgba(0,0,0,0.08)] group w-full"
          >
            {/* Keyboard Image Background */}
            <div className="absolute inset-0">
              <img
                src="/keyboard.avif"
                alt="Keyboard"
                className="w-full h-full object-cover"
                style={{
                  opacity: 0.7,
                  filter: "brightness(1.2) contrast(1.05) saturate(0.85)",
                }}
              />
            </div>

            {/* Lighter gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/10 via-[#FAF9F6]/50 to-[#FAF9F6]/85" />

            {/* Content */}
            <div className="relative z-10 p-5 sm:p-6 flex flex-col min-h-[380px] sm:min-h-[420px]">
              {/* Header */}
              <div className="mb-4 flex-shrink-0">
                <p className="text-[9px] sm:text-[10px] text-[#78716C] font-semibold uppercase tracking-[0.15em] mb-2">
                  Keyboard
                </p>
                <div className="flex items-baseline gap-1.5 sm:gap-2">
                  <h3 className="text-4xl sm:text-5xl font-serif text-[#292524]">
                    45
                  </h3>
                  <span className="text-xs sm:text-sm text-[#44403C] font-medium">
                    wpm
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#78716C] mt-1.5 leading-relaxed">
                  Typing everything out, fixing mistakes,
                  <br className="hidden sm:inline" /> formatting manually.
                </p>
              </div>

              {/* Keyboard Typing Animation */}
              <div className="flex-grow flex flex-col justify-center pb-14">
                <KeyboardTyping />
              </div>
            </div>

            {/* Typing Characters at Bottom */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
              <TypingCharacters />
            </div>

            {/* Border */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/[0.08] group-hover:ring-black/[0.12] transition-all duration-500" />
          </motion.div>

          {/* Right Card - Voice Dictation (Fast) - Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative overflow-hidden rounded-2xl shadow-[0_8px_48px_rgba(0,0,0,0.2)] group w-full"
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#3B4A5C] via-[#2A3647] to-[#1F2937]"
              style={{ willChange: "transform" }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Flowing gradient overlay */}
            <motion.div
              className="absolute inset-0"
              style={{ willChange: "background" }}
              animate={{
                background: [
                  "radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.25) 0%, transparent 60%)",
                  "radial-gradient(circle at 70% 60%, rgba(168, 85, 247, 0.25) 0%, transparent 60%)",
                  "radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.25) 0%, transparent 60%)",
                ],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Content */}
            <div
              className="relative z-10 p-5 flex flex-col"
              style={{ minHeight: "420px" }}
            >
              {/* Header */}
              <div className="mb-4 flex-shrink-0">
                <p className="text-[9px] text-white/60 font-semibold uppercase tracking-[0.15em] mb-2">
                  Oravo
                </p>
                <div className="flex items-baseline gap-1.5">
                  <h3 className="text-4xl font-serif text-white">220</h3>
                  <span className="text-xs text-white/90 font-medium">wpm</span>
                </div>
                <p className="text-[11px] text-white/70 mt-1.5 leading-relaxed">
                  <span className="text-violet-300 font-semibold">
                    Just speak.
                  </span>{" "}
                  Oravo does the rest, polished and in your style
                </p>
              </div>

              {/* Voice Streaming Animation */}
              <div className="flex-grow flex flex-col justify-center pb-14">
                <VoiceStreaming />
              </div>
            </div>

            {/* Voice Waveform at Bottom */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
              <MiniVoiceWaveform />
            </div>

            {/* Border */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </motion.div>
        </div>
      </div>

      {/* Desktop: Grid Layout */}
      <div className="hidden lg:block px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-6 xl:gap-8">
          {/* Left Card - Keyboard Typing (Slow) - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#FAF9F6] via-[#F5F3F0] to-[#EBE9E6] shadow-[0_4px_24px_rgba(0,0,0,0.08)] group min-h-[500px]"
          >
            {/* Keyboard Image Background */}
            <div className="absolute inset-0">
              <img
                src="/keyboard.avif"
                alt="Keyboard"
                className="w-full h-full object-cover"
                style={{
                  opacity: 0.7,
                  filter: "brightness(1.2) contrast(1.05) saturate(0.85)",
                }}
              />
            </div>

            {/* Lighter gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/10 via-[#FAF9F6]/50 to-[#FAF9F6]/85" />

            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              {/* Header */}
              <div className="mb-8 flex-shrink-0">
                <p className="text-xs text-[#78716C] font-semibold uppercase tracking-[0.2em] mb-3">
                  Keyboard
                </p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-6xl font-serif text-[#292524]">45</h3>
                  <span className="text-base text-[#44403C] font-medium">
                    wpm
                  </span>
                </div>
                <p className="text-sm text-[#78716C] mt-2 leading-relaxed">
                  Typing everything out, fixing mistakes,
                  <br />
                  formatting manually.
                </p>
              </div>

              {/* Keyboard Typing Animation */}
              <div className="flex-grow flex flex-col justify-center pb-14">
                <KeyboardTyping />
              </div>
            </div>

            {/* Typing Characters at Bottom */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
              <TypingCharacters />
            </div>

            {/* Border */}
            <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-black/[0.08] group-hover:ring-black/[0.12] transition-all duration-500" />
          </motion.div>

          {/* Right Card - Voice Dictation (Fast) - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative overflow-hidden rounded-[24px] shadow-[0_8px_48px_rgba(0,0,0,0.2)] group min-h-[500px]"
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#3B4A5C] via-[#2A3647] to-[#1F2937]"
              style={{ willChange: "transform" }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Flowing gradient overlay */}
            <motion.div
              className="absolute inset-0"
              style={{ willChange: "background" }}
              animate={{
                background: [
                  "radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.25) 0%, transparent 60%)",
                  "radial-gradient(circle at 70% 60%, rgba(168, 85, 247, 0.25) 0%, transparent 60%)",
                  "radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.25) 0%, transparent 60%)",
                ],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              {/* Header */}
              <div className="mb-8 flex-shrink-0">
                <p className="text-xs text-white/60 font-semibold uppercase tracking-[0.2em] mb-3">
                  Oravo
                </p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-6xl font-serif text-white">220</h3>
                  <span className="text-base text-white/90 font-medium">
                    wpm
                  </span>
                </div>
                <p className="text-sm text-white/70 mt-2 leading-relaxed">
                  <span className="text-violet-300 font-semibold">
                    Just speak.
                  </span>{" "}
                  Oravo does the rest,
                  <br />
                  polished and in your style
                </p>
              </div>

              {/* Voice Streaming Animation */}
              <div className="flex-grow flex flex-col justify-center pb-14">
                <VoiceStreaming />
              </div>
            </div>

            {/* Voice Waveform at Bottom */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
              <MiniVoiceWaveform />
            </div>

            {/* Border */}
            <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/10" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
