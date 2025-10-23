"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function PersonalizationAnimation() {
  const [selectedTone, setSelectedTone] = useState(0);
  const tones = [
    { label: "Professional", color: "bg-blue-500" },
    { label: "Casual", color: "bg-purple-500" },
    { label: "Friendly", color: "bg-pink-500" },
  ];

  const messages = [
    "I hope this email finds you well. I would like to schedule a meeting.",
    "Hey! Want to grab coffee and chat about the project?",
    "Hi there! I'd love to catch up and discuss our plans.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTone((prev) => (prev + 1) % tones.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6">
        {/* Tone selector */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
          <p className="text-xs text-gray-500 mb-3 font-medium">
            Select your tone
          </p>
          <div className="flex gap-2">
            {tones.map((tone, i) => (
              <motion.button
                key={tone.label}
                animate={{
                  scale: selectedTone === i ? 1.05 : 1,
                  opacity: selectedTone === i ? 1 : 0.5,
                }}
                transition={{ duration: 0.3 }}
                className={`flex-1 px-3 py-2 rounded-lg ${tone.color} text-white text-xs font-medium transition-all`}
              >
                {tone.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Message output with typing effect */}
        <motion.div
          key={selectedTone}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-5 shadow-xl border-2 border-purple-200 relative"
        >
          {/* Animated pulse indicator */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className={`absolute -top-1 -right-1 w-3 h-3 ${tones[selectedTone].color} rounded-full`}
          />

          <motion.p
            key={selectedTone}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-gray-800 leading-relaxed"
          >
            {messages[selectedTone]}
          </motion.p>
        </motion.div>

        {/* AI learning indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-2 text-xs text-gray-600"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-4 h-4"
          >
            <svg viewBox="0 0 24 24" fill="none" className="text-purple-500">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                fill="currentColor"
                opacity="0.3"
              />
              <path
                d="M12 6v6l4 2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
          <span>AI adapting to your style...</span>
        </motion.div>

        {/* Style metrics */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Formality", value: selectedTone === 0 ? 90 : 40 },
            { label: "Warmth", value: selectedTone === 2 ? 85 : 50 },
            { label: "Brevity", value: selectedTone === 1 ? 95 : 60 },
          ].map((metric) => (
            <div
              key={metric.label}
              className="bg-white/70 rounded-lg p-2 text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-lg font-bold text-purple-600"
              >
                {metric.value}%
              </motion.div>
              <div className="text-[10px] text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
