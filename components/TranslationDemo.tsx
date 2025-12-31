"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const translations = [
  {
    input: { text: "Hola, ¿cómo estás hoy?", lang: "Spanish", flag: "🇪🇸" },
    output: { text: "Hello, how are you today?", lang: "English", flag: "🇺🇸" },
  },
  {
    input: { text: "Bonjour, comment allez-vous?", lang: "French", flag: "🇫🇷" },
    output: { text: "Hello, how are you?", lang: "English", flag: "🇺🇸" },
  },
  {
    input: { text: "こんにちは、お元気ですか？", lang: "Japanese", flag: "🇯🇵" },
    output: { text: "Hello, how are you?", lang: "English", flag: "🇺🇸" },
  },
  {
    input: { text: "नमस्ते, आप कैसे हैं?", lang: "Hindi", flag: "🇮🇳" },
    output: { text: "Hello, how are you?", lang: "English", flag: "🇺🇸" },
  },
  {
    input: { text: "مرحبا كيف حالك؟", lang: "Arabic", flag: "🇸🇦" },
    output: { text: "Hello, how are you?", lang: "English", flag: "🇺🇸" },
  },
];

export default function TranslationDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedInput, setDisplayedInput] = useState("");
  const [displayedOutput, setDisplayedOutput] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const current = translations[currentIndex];
    let inputIndex = 0;
    let outputIndex = 0;

    // Reset states
    setDisplayedInput("");
    setDisplayedOutput("");
    setShowOutput(false);
    setIsTyping(true);

    // Type input text
    const inputInterval = setInterval(() => {
      if (inputIndex < current.input.text.length) {
        setDisplayedInput(current.input.text.slice(0, inputIndex + 1));
        inputIndex++;
      } else {
        clearInterval(inputInterval);
        setIsTyping(false);

        // Wait a moment then show output
        setTimeout(() => {
          setShowOutput(true);

          // Type output text
          const outputInterval = setInterval(() => {
            if (outputIndex < current.output.text.length) {
              setDisplayedOutput(current.output.text.slice(0, outputIndex + 1));
              outputIndex++;
            } else {
              clearInterval(outputInterval);

              // Wait then move to next translation
              setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % translations.length);
              }, 2500);
            }
          }, 40);
        }, 600);
      }
    }, 60);

    return () => {
      clearInterval(inputInterval);
    };
  }, [currentIndex]);

  const current = translations[currentIndex];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-4">
      {/* Voice Input Section */}
      <div className="w-full max-w-[280px]">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs text-[#847971] font-medium uppercase tracking-wide">
            Speaking
          </span>
          <span className="text-lg ml-auto">{current.input.flag}</span>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-[#E0DEDB]/50 min-h-[60px]">
          <p className="text-[#37322F] text-sm font-medium">
            {displayedInput}
            {isTyping && (
              <span className="inline-block w-0.5 h-4 bg-[#37322F] ml-0.5 animate-pulse" />
            )}
          </p>
          <p className="text-[10px] text-[#847971] mt-1">{current.input.lang}</p>
        </div>
      </div>

      {/* Arrow Animation */}
      <AnimatePresence>
        {showOutput && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2"
          >
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-8 h-8 rounded-full bg-[#FF8C42] flex items-center justify-center shadow-lg"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5v14M19 12l-7 7-7-7"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Output Section */}
      <AnimatePresence>
        {showOutput && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-[280px]"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs text-[#847971] font-medium uppercase tracking-wide">
                Output
              </span>
              <span className="text-lg ml-auto">{current.output.flag}</span>
            </div>
            <div className="bg-[#37322F] rounded-xl p-4 shadow-lg min-h-[60px]">
              <p className="text-white text-sm font-medium">
                {displayedOutput}
                {displayedOutput.length < current.output.text.length && (
                  <span className="inline-block w-0.5 h-4 bg-white ml-0.5 animate-pulse" />
                )}
              </p>
              <p className="text-[10px] text-[#B2AEA9] mt-1">
                {current.output.lang}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Language Dots Indicator */}
      <div className="flex gap-1.5 mt-2">
        {translations.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#FF8C42] w-4" : "bg-[#E0DEDB]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
