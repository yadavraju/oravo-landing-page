"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function PersonalizationAnimation() {
  const [activeStyle, setActiveStyle] = useState(0);

  const styles = [
    {
      name: "Professional",
      color: "#3B82F6",
      bgColor: "#EFF6FF",
      input: "tell mike about the meeting",
      output: "Hi Mike,\n\nI wanted to follow up regarding our upcoming meeting. Please let me know your availability.\n\nBest regards,",
    },
    {
      name: "Casual",
      color: "#8B5CF6",
      bgColor: "#F5F3FF",
      input: "tell mike about the meeting",
      output: "Hey Mike!\n\nJust wanted to check in about our meeting. When works for you?\n\nCheers!",
    },
    {
      name: "Friendly",
      color: "#EC4899",
      bgColor: "#FDF2F8",
      input: "tell mike about the meeting",
      output: "Hi Mike! 👋\n\nHope you're doing well! Quick note about our meeting - excited to catch up!\n\nTalk soon!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStyle((prev) => (prev + 1) % styles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const current = styles[activeStyle];

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#FAFAF9] to-[#F0EEEC] flex flex-col p-6 relative overflow-hidden">
      {/* Header - Oravo listening indicator */}
      <div className="flex items-center justify-between mb-4">
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
        <span className="text-xs text-[#847971]">Your Writing Style</span>
      </div>

      {/* Style selector */}
      <div className="flex gap-2 mb-4">
        {styles.map((style, i) => (
          <motion.button
            key={style.name}
            onClick={() => setActiveStyle(i)}
            animate={{
              scale: activeStyle === i ? 1 : 0.95,
              opacity: activeStyle === i ? 1 : 0.5,
            }}
            className="flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all"
            style={{
              backgroundColor: activeStyle === i ? style.color : "#F7F5F3",
              color: activeStyle === i ? "white" : "#605A57",
            }}
          >
            {style.name}
          </motion.button>
        ))}
      </div>

      {/* Input section */}
      <div className="bg-white rounded-xl p-4 border border-[#E0DEDB] shadow-sm mb-3">
        <div className="flex items-center gap-2 mb-2">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2.5 h-2.5 bg-red-500 rounded-full"
          />
          <span className="text-xs text-[#847971] font-medium">You said:</span>
        </div>
        <p className="text-sm text-[#605A57] italic">"{current.input}"</p>
      </div>

      {/* Arrow */}
      <div className="flex justify-center mb-3">
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: current.color }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>

      {/* Output section */}
      <motion.div
        key={activeStyle}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 rounded-xl p-4 border-2 shadow-sm"
        style={{
          backgroundColor: current.bgColor,
          borderColor: `${current.color}40`,
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-4 h-4 rounded-full flex items-center justify-center"
            style={{ backgroundColor: current.color }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
            </svg>
          </motion.div>
          <span className="text-xs font-medium" style={{ color: current.color }}>
            {current.name} style applied
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-[#37322F] whitespace-pre-line leading-relaxed"
        >
          {current.output}
        </motion.div>
      </motion.div>

      {/* Bottom indicator */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: current.color }}
        />
        <span className="text-xs text-[#847971]">AI learns your preferences over time</span>
      </div>
    </div>
  );
}
