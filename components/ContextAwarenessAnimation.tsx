"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ContextAwarenessAnimation() {
  const [step, setStep] = useState(0);

  const examples = [
    {
      spoken: "send the report to dr patel",
      recognized: "Dr. Patel",
      context: "From your contacts",
      contextIcon: "👤",
      fullOutput: "Send the report to Dr. Patel",
    },
    {
      spoken: "schedule meeting about the kubernetes deployment",
      recognized: "Kubernetes",
      context: "Technical term",
      contextIcon: "💻",
      fullOutput: "Schedule meeting about the Kubernetes deployment",
    },
    {
      spoken: "remind me about the hipaa compliance review",
      recognized: "HIPAA",
      context: "Medical terminology",
      contextIcon: "🏥",
      fullOutput: "Remind me about the HIPAA compliance review",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % examples.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = examples[step];

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
        <span className="text-xs text-[#847971]">Context-Aware</span>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Voice input */}
        <div className="bg-white rounded-xl p-4 border border-[#E0DEDB] shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-3 h-3 bg-red-500 rounded-full"
            />
            <span className="text-xs text-[#847971] font-medium">You said:</span>
          </div>
          <motion.p
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-[#605A57] italic"
          >
            "{current.spoken}"
          </motion.p>
        </div>

        {/* Context detection card */}
        <motion.div
          key={`context-${step}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#ECFDF5] rounded-xl p-4 border border-[#10B981]/20"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#10B981]/20 flex items-center justify-center text-lg">
              {current.contextIcon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 bg-[#10B981] rounded-full"
                />
                <span className="text-xs text-[#10B981] font-medium">Context detected</span>
              </div>
              <p className="text-sm text-[#065F46] font-medium mt-1">{current.context}</p>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 }}
              className="w-6 h-6 bg-[#10B981] rounded-full flex items-center justify-center"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Arrow */}
        <div className="flex justify-center">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center shadow-lg"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>

        {/* Corrected output */}
        <motion.div
          key={`output-${step}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-white rounded-xl p-4 border-2 border-[#10B981]/30 shadow-sm flex-1"
        >
          <div className="flex items-center gap-2 mb-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
              <path d="M9 12l2 2 4-4"/>
              <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="text-xs text-[#10B981] font-medium">Correctly spelled</span>
          </div>

          <p className="text-sm text-[#37322F]">
            {current.fullOutput.split(current.recognized).map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <motion.span
                    initial={{ backgroundColor: "#D1FAE5" }}
                    animate={{ backgroundColor: ["#D1FAE5", "#A7F3D0", "#D1FAE5"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="font-semibold text-[#065F46] px-1 rounded"
                  >
                    {current.recognized}
                  </motion.span>
                )}
              </span>
            ))}
          </p>
        </motion.div>
      </div>

      {/* Bottom tags */}
      <div className="flex gap-2 justify-center mt-4 flex-wrap">
        {["Names", "Medical", "Legal", "Technical"].map((tag, i) => (
          <motion.div
            key={tag}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 + i * 0.1 }}
            className="px-3 py-1.5 bg-[#10B981]/10 text-[#10B981] rounded-full text-xs font-medium"
          >
            {tag}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
