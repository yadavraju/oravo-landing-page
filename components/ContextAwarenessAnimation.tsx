"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ContextAwarenessAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const examples = [
    {
      input: "Send the report to Jhon",
      correction: "John",
      context: "Contact: John Smith",
    },
    {
      input: "Schedule with Kathrine",
      correction: "Katherine",
      context: "Team: Katherine Lee",
    },
    {
      input: "Update the Akount details",
      correction: "Account",
      context: "CRM: Account Settings",
    },
  ];

  const current = examples[step];

  return (
    <div className="w-full h-full bg-[#F7F5F3] flex items-center justify-center p-8 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/keyboard.avif"
          alt="Keyboard"
          className="w-full h-full object-contain"
          style={{
            opacity: 0.7,
            filter: "brightness(1.2) contrast(1.05) saturate(0.85)",
          }}
        />
      </div>

      <div className="w-full max-w-md space-y-6 relative z-10">
        {/* Context panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border-l-4 border-emerald-500"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs text-gray-600 font-medium">
              Context detected
            </span>
          </div>
          <motion.p
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-gray-700 mt-1 font-medium"
          >
            {current.context}
          </motion.p>
        </motion.div>

        {/* Input text with error */}
        <div className="bg-white rounded-xl p-5 shadow-xl relative">
          <motion.div
            key={`input-${step}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <p className="text-base text-gray-800">
              {current.input.split(" ").map((word, i) => {
                const isError = word.toLowerCase().includes(
                  current.correction.slice(0, 3).toLowerCase()
                );
                return (
                  <span key={i}>
                    {isError ? (
                      <motion.span
                        animate={{
                          textDecorationColor: ["#ef4444", "#f87171", "#ef4444"],
                        }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="relative inline-block"
                        style={{
                          textDecoration: "underline wavy",
                          textDecorationColor: "#ef4444",
                        }}
                      >
                        {word}
                        {/* Error tooltip */}
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap"
                        >
                          Typo detected
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rotate-45" />
                        </motion.div>
                      </motion.span>
                    ) : (
                      word
                    )}{" "}
                  </span>
                );
              })}
            </p>
          </motion.div>

          {/* Auto-correction animation */}
          <motion.div
            key={`correction-${step}`}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M5 12L10 17L20 7"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>
                <span className="text-sm font-medium text-emerald-700">
                  Corrected to:{" "}
                  <span className="font-bold">{current.correction}</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* AI confidence score */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="bg-white/70 rounded-lg p-3"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-600">Confidence</span>
            <span className="text-xs font-bold text-emerald-600">98%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "98%" }}
              transition={{ duration: 1, delay: 2.2 }}
              className="h-full bg-gradient-to-r from-emerald-500 to-green-400"
            />
          </div>
        </motion.div>

        {/* Context sources */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="flex gap-2 flex-wrap justify-center"
        >
          {["Contacts", "Calendar", "Recent docs"].map((source, i) => (
            <motion.div
              key={source}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5 + i * 0.1 }}
              className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-medium flex items-center gap-1"
            >
              <div className="w-1 h-1 bg-emerald-500 rounded-full" />
              {source}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
