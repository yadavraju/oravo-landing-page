"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function AutoFormattingAnimation() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Simulated typing text (raw speech)
  const rawText = "hey sarah can we meet tomorrow at 3 pm to discuss the project budget dont forget to bring the reports";

  // Formatted output
  const formattedLines = [
    "Hey Sarah,",
    "",
    "Can we meet tomorrow at 3 PM to discuss the project budget?",
    "",
    "Don't forget to bring the reports.",
    "",
    "Best,",
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#FAFAF9] to-[#F0EEEC] flex flex-col p-6 relative overflow-hidden">
      {/* Header - Oravo listening indicator */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#37322F] rounded-full">
          {/* Animated white bars */}
          <div className="flex items-center gap-0.5 h-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                animate={{ height: ["40%", "100%", "40%"] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
                className="w-0.5 bg-white rounded-full"
                style={{ height: "40%" }}
              />
            ))}
          </div>
          <span className="text-xs font-medium text-white ml-1">Listening...</span>
        </div>
        <div className="flex-1 h-px bg-[#E0DEDB]" />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Voice input (raw) */}
        <div className="bg-white rounded-xl p-4 border border-[#E0DEDB] shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#847971" strokeWidth="2">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              <line x1="12" y1="19" x2="12" y2="23"/>
            </svg>
            <span className="text-xs text-[#847971] font-medium">Voice Input</span>
          </div>
          <motion.p
            className="text-sm text-[#605A57] font-mono leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {rawText.slice(0, Math.min(rawText.length, (phase + 1) * 25))}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-0.5 h-4 bg-[#FF8C42] ml-0.5 align-middle"
            />
          </motion.p>
        </div>

        {/* Arrow with AI processing indicator */}
        <div className="flex items-center justify-center gap-3">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-8 h-8 rounded-full bg-[#FF8C42] flex items-center justify-center shadow-lg"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
          <span className="text-xs text-[#847971] font-medium">Auto-formatting</span>
        </div>

        {/* Formatted output */}
        <div className="bg-white rounded-xl p-4 border-2 border-[#22C55E]/30 shadow-sm flex-1">
          <div className="flex items-center gap-2 mb-3">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-4 h-4 bg-[#22C55E] rounded-full flex items-center justify-center"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            <span className="text-xs text-[#22C55E] font-medium">Formatted Output</span>
          </div>

          <div className="space-y-0.5">
            {formattedLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: phase >= 1 ? 1 : 0, x: phase >= 1 ? 0 : -10 }}
                transition={{ delay: i * 0.1 }}
                className={`text-sm ${line === "" ? "h-2" : "text-[#37322F]"} ${i === 0 ? "font-semibold" : ""}`}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom badges */}
      <div className="flex gap-2 justify-center mt-4 flex-wrap">
        {[
          { label: "Capitalization", icon: "Aa" },
          { label: "Punctuation", icon: ".,?" },
          { label: "Paragraphs", icon: "¶" },
        ].map((badge, i) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: phase >= 2 ? 1 : 0.3, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 ${
              phase >= 2 ? "bg-[#FF8C42]/10 text-[#FF8C42]" : "bg-[#F7F5F3] text-[#847971]"
            }`}
          >
            <span className="font-mono text-[10px]">{badge.icon}</span>
            {badge.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
