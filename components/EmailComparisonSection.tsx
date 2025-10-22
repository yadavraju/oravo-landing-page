"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const emailText = "Hey Marvin, let's meet on Friday at 2 PM... oh, wait";

// Character-by-character typing component (slow keyboard)
function KeyboardTyping() {
  const [displayedText, setDisplayedText] = useState("");
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < emailText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(emailText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        setProgress(((currentIndex + 1) / emailText.length) * 100);
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
    <div className="space-y-4">
      {/* Email UI */}
      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-5 shadow-sm border border-[#E8E6E3]/60 min-h-[180px] sm:min-h-[200px]">
        <div className="space-y-3">
          {/* Email Header */}
          <div className="flex items-center gap-2 text-xs text-[#78716C]">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-[#78716C]/20" />
              <div className="w-2 h-2 rounded-full bg-[#78716C]/20" />
              <div className="w-2 h-2 rounded-full bg-[#78716C]/20" />
            </div>
          </div>

          <div className="text-xs text-[#78716C] font-medium">Mark Watson</div>

          {/* Typing Area */}
          <div className="min-h-[80px] sm:min-h-[100px]">
            <p className="text-sm sm:text-base text-[#292524] font-normal leading-relaxed">
              {displayedText}
              <motion.span
                className="inline-block w-[2px] h-4 sm:h-5 bg-[#292524] ml-[1px]"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="h-1.5 bg-[#E8E6E3]/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#78716C] to-[#57534E] rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <div className="flex justify-between items-center text-xs text-[#78716C]">
          <span>Typing...</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
}

// Word-by-word streaming component (fast voice)
function VoiceStreaming() {
  const [displayedText, setDisplayedText] = useState("");
  const [progress, setProgress] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = emailText.split(" ");

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const timer = setTimeout(() => {
        const newText = words.slice(0, currentWordIndex + 1).join(" ");
        setDisplayedText(newText);
        setCurrentWordIndex(currentWordIndex + 1);
        setProgress(((currentWordIndex + 1) / words.length) * 100);
      }, 180); // Fast streaming (180ms per word)

      return () => clearTimeout(timer);
    } else {
      // Reset after completion
      const resetTimer = setTimeout(() => {
        setDisplayedText("");
        setCurrentWordIndex(0);
        setProgress(0);
      }, 2000);

      return () => clearTimeout(resetTimer);
    }
  }, [currentWordIndex, words]);

  return (
    <div className="space-y-4">
      {/* Email UI */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-5 shadow-lg border border-white/10 min-h-[180px] sm:min-h-[200px]">
        <div className="space-y-3">
          {/* Email Header */}
          <div className="flex items-center gap-2 text-xs text-white/50">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>
          </div>

          <div className="text-xs text-white/60 font-medium">Mark Watson</div>

          {/* Streaming Area */}
          <div className="min-h-[80px] sm:min-h-[100px]">
            <p className="text-sm sm:text-base text-white font-normal leading-relaxed">
              {displayedText}
              <motion.span
                className="inline-block w-[2px] h-4 sm:h-5 bg-white ml-[1px]"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <div className="flex justify-between items-center text-xs text-white/60">
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
      className="w-full h-full flex items-center justify-center p-2 sm:p-4"
    >
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
        {/* Left Card - Keyboard Typing (Slow) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] bg-gradient-to-br from-[#FAF9F6] via-[#F5F3F0] to-[#EBE9E6] shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-6 sm:p-8 group h-full min-h-[380px] sm:min-h-[420px]"
        >
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <p className="text-[10px] sm:text-xs text-[#78716C] font-semibold uppercase tracking-[0.2em] mb-3">
              Keyboard
            </p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#292524]">
                45
              </h3>
              <span className="text-sm sm:text-base text-[#44403C] font-medium">
                wpm
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#78716C] mt-2 leading-relaxed">
              Typing everything out, fixing mistakes,
              <br />
              formatting manually.
            </p>
          </div>

          {/* Keyboard Typing Animation */}
          <KeyboardTyping />

          {/* Border */}
          <div className="absolute inset-0 rounded-[20px] sm:rounded-[24px] ring-1 ring-inset ring-black/[0.08] group-hover:ring-black/[0.12] transition-all duration-500" />
        </motion.div>

        {/* Right Card - Voice Dictation (Fast) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] shadow-[0_8px_48px_rgba(0,0,0,0.2)] p-6 sm:p-8 group h-full min-h-[380px] sm:min-h-[420px]"
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#3B4A5C] via-[#2A3647] to-[#1F2937]"
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
          <div className="relative z-10">
            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <p className="text-[10px] sm:text-xs text-white/60 font-semibold uppercase tracking-[0.2em] mb-3">
                Oravo
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white">
                  220
                </h3>
                <span className="text-sm sm:text-base text-white/90 font-medium">
                  wpm
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 mt-2 leading-relaxed">
                <span className="text-violet-300 font-semibold">Just speak.</span> Oravo does the rest,
                <br />
                polished and in your style
              </p>
            </div>

            {/* Voice Streaming Animation */}
            <VoiceStreaming />
          </div>

          {/* Border */}
          <div className="absolute inset-0 rounded-[20px] sm:rounded-[24px] ring-1 ring-inset ring-white/10" />
        </motion.div>
      </div>
    </motion.section>
  );
}
