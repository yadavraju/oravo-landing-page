"use client";

import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MiniVoiceWaveform } from "./EmailComparisonSection";

interface SmartSimpleBrilliantProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  theme?: "light" | "dark";
}

/**
 * Voice Processing Visualization
 * Shows text flowing through waveform with processing notifications
 */
const SmartSimpleBrilliant: React.FC<SmartSimpleBrilliantProps> = ({
  width = 482,
  height = 300,
  className = "",
  theme = "dark",
}) => {
  const [currentToast, setCurrentToast] = useState<string | null>(null);

  // Processing notifications that appear
  const notifications = ["Split sentence", "Filler removed", "Fixed spelling"];

  // Sample text with filler words and repetition that flows through in sine wave
  const flowingText =
    "So uhh... I was, you know, talking to umm the team about, like, the project and we had, you know, a really really good start and I think, umm, we should continue with, like, this approach";
  const words = flowingText.split(" ");

  useEffect(() => {
    // Cycle through notifications
    let notificationIndex = 0;
    const notificationInterval = setInterval(() => {
      setCurrentToast(notifications[notificationIndex]);
      setTimeout(() => setCurrentToast(null), 1500);
      notificationIndex = (notificationIndex + 1) % notifications.length;
    }, 3000);

    return () => {
      clearInterval(notificationInterval);
    };
  }, []);

  const isDark = theme === "dark";

  return (
    <div
      className={className}
      style={{
        width,
        height,
        position: "relative",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      role="img"
      aria-label="Voice processing visualization with real-time editing"
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Toast Notifications */}
        <AnimatePresence>
          {currentToast && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute top-4 z-20 px-4 py-2 rounded-full shadow-lg border"
              style={{
                background: isDark
                  ? "rgba(30, 30, 30, 0.95)"
                  : "rgba(255, 255, 255, 0.95)",
                borderColor: isDark
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-green-500"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.6, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                />
                <span
                  className={`text-xs font-medium ${
                    isDark ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {currentToast}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Central Waveform with flowing text */}
        <div className="relative w-full h-32 flex items-center justify-center">
          {/* Flowing text in straight line - continuous marquee (left to right) */}
          <div className="absolute inset-0 flex items-center overflow-hidden">
            {/* First instance of scrolling text */}
            <motion.div
              className="flex whitespace-nowrap absolute"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {words.map((word, wordIndex) => {
                const totalWords = words.length;
                const progress = (wordIndex / totalWords) * 100;

                return (
                  <span
                    key={`first-${wordIndex}`}
                    className="inline-block mx-2 text-lg font-medium"
                    style={{
                      color: isDark
                        ? progress < 30
                          ? "rgb(107, 114, 128)"
                          : progress > 70
                          ? "rgb(255, 255, 255)"
                          : "rgb(156, 163, 175)"
                        : progress < 30
                        ? "rgb(156, 163, 175)"
                        : progress > 70
                        ? "rgb(17, 24, 39)"
                        : "rgb(107, 114, 128)",
                      textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      filter: progress > 45 && progress < 55 ? "blur(2px)" : "blur(0px)",
                      opacity: progress > 47 && progress < 53 ? 0.5 : 1,
                      transform: progress > 47 && progress < 53 ? "scale(0.9)" : "scale(1)",
                      transition: "filter 0.5s, opacity 0.5s, transform 0.5s",
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </motion.div>

            {/* Second instance for seamless loop - offset by 100% */}
            <motion.div
              className="flex whitespace-nowrap absolute"
              initial={{ x: "0%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {words.map((word, wordIndex) => {
                const totalWords = words.length;
                const progress = (wordIndex / totalWords) * 100;

                return (
                  <span
                    key={`second-${wordIndex}`}
                    className="inline-block mx-2 text-lg font-medium"
                    style={{
                      color: isDark
                        ? progress < 30
                          ? "rgb(107, 114, 128)"
                          : progress > 70
                          ? "rgb(255, 255, 255)"
                          : "rgb(156, 163, 175)"
                        : progress < 30
                        ? "rgb(156, 163, 175)"
                        : progress > 70
                        ? "rgb(17, 24, 39)"
                        : "rgb(107, 114, 128)",
                      textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      filter: progress > 45 && progress < 55 ? "blur(2px)" : "blur(0px)",
                      opacity: progress > 47 && progress < 53 ? 0.5 : 1,
                      transform: progress > 47 && progress < 53 ? "scale(0.9)" : "scale(1)",
                      transition: "filter 0.5s, opacity 0.5s, transform 0.5s",
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </motion.div>
          </div>

          {/* MiniVoiceWaveform in the center - using actual component */}
          <div className="relative z-30 scale-150">
            <MiniVoiceWaveform />
          </div>
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-4">
          <p
            className={`text-xs font-medium ${
              isDark ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Processing in real-time
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmartSimpleBrilliant;
