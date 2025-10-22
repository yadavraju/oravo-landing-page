"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Morphing Voice Waveform with Glow
function VoiceWaveform() {
  const bars = 18;

  return (
    <div className="relative">
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 blur-xl opacity-50"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 rounded-full" />
      </motion.div>

      {/* Waveform bars */}
      <div className="relative flex items-center justify-center gap-[3px] px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
        {Array.from({ length: bars }).map((_, i) => {
          const normalizedIndex = i / bars;
          const phase = Math.sin(normalizedIndex * Math.PI);

          return (
            <motion.div
              key={i}
              className="w-[2.5px] bg-gradient-to-t from-blue-300 via-violet-300 to-purple-300 rounded-full"
              animate={{
                height: [10 + phase * 8, 20 + phase * 12, 10 + phase * 8],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 0.6 + normalizedIndex * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.05,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

// Continuous Flowing Text - Spans across both cards
function FlowingText({
  text,
  variant = "dark",
  speed = "slow"
}: {
  text: string;
  variant?: "dark" | "light";
  speed?: "slow" | "fast";
}) {
  const words = text.split(" ");
  const isFast = speed === "fast";

  return (
    <div className="absolute bottom-12 sm:bottom-16 left-0 right-0 h-20 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute whitespace-nowrap"
        animate={{
          x: ["100%", "-100%"],
        }}
        transition={{
          duration: isFast ? 20 : 35, // Faster for right, slower for left
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="inline-flex items-center gap-2">
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-flex">
              {word.split("").map((char, charIndex) => {
                const totalIndex = wordIndex * 10 + charIndex;
                const amplitude = isFast ? 12 : 0; // Sine wave for fast, straight for slow
                const frequency = 0.15;

                return (
                  <motion.span
                    key={`${wordIndex}-${charIndex}`}
                    className={`inline-block text-sm sm:text-base font-medium ${
                      variant === "dark"
                        ? "text-[#78716C]/50"
                        : "text-white/50"
                    }`}
                    style={{
                      textShadow: variant === "dark"
                        ? "0 1px 3px rgba(0,0,0,0.1)"
                        : "0 2px 8px rgba(0,0,0,0.3)",
                    }}
                    animate={
                      isFast
                        ? {
                            y: [
                              Math.sin(totalIndex * frequency) * amplitude,
                              Math.sin(totalIndex * frequency + Math.PI) * amplitude,
                              Math.sin(totalIndex * frequency) * amplitude,
                            ],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: totalIndex * 0.02,
                    }}
                  >
                    {char}
                  </motion.span>
                );
              })}
              <span className="inline-block w-2" />
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function ComparisonSection() {
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
        {/* Left Card - Keyboard (Slow & Manual) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] bg-gradient-to-br from-[#FAF9F6] via-[#F5F3F0] to-[#EBE9E6] shadow-[0_4px_24px_rgba(0,0,0,0.08)] group h-full min-h-[320px] sm:min-h-[380px]"
        >
          {/* Textured overlay for depth */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Keyboard Image - Fixed visibility */}
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
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <div className="text-center space-y-4">
              <p className="text-[10px] sm:text-xs text-[#78716C] font-semibold uppercase tracking-[0.2em] font-sans">
                Keyboard
              </p>
              <div className="flex flex-col items-center">
                <h3 className="text-6xl sm:text-7xl md:text-8xl font-serif text-[#292524] leading-none">
                  45
                </h3>
                <span className="text-2xl sm:text-3xl mt-2 font-sans font-medium text-[#44403C]">
                  words per minute
                </span>
              </div>
            </div>
          </div>

          {/* Flowing text - slower, straight line for keyboard card */}
          <FlowingText
            text="Let's get started with the project, what do you think? I'm ready when you are, just speak naturally and watch it flow onto the page"
            variant="dark"
            speed="slow"
          />

          {/* Subtle border */}
          <div className="absolute inset-0 rounded-[20px] sm:rounded-[24px] ring-1 ring-inset ring-black/[0.08] group-hover:ring-black/[0.12] transition-all duration-500" />
        </motion.div>

        {/* Right Card - Voice Flow (Fast & Effortless) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] shadow-[0_8px_48px_rgba(0,0,0,0.2)] group h-full min-h-[320px] sm:min-h-[380px]"
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#3B4A5C] via-[#2A3647] to-[#1F2937]"
            animate={{
              scale: [1, 1.08, 1],
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

          {/* Motion blur streaks */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
                style={{
                  top: `${10 + i * 7}%`,
                  left: "-100%",
                  right: "-100%",
                }}
                animate={{
                  x: ["-100%", "200%"],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Subtle glow edge */}
          <div className="absolute inset-0 rounded-[20px] sm:rounded-[24px] ring-1 ring-inset ring-white/20" />
          <motion.div
            className="absolute inset-0 rounded-[20px] sm:rounded-[24px]"
            animate={{
              boxShadow: [
                "inset 0 0 60px rgba(139, 92, 246, 0.1)",
                "inset 0 0 80px rgba(96, 165, 250, 0.15)",
                "inset 0 0 60px rgba(139, 92, 246, 0.1)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <div className="text-center space-y-6 z-10">
              <p className="text-[10px] sm:text-xs text-white/60 font-semibold uppercase tracking-[0.2em] font-sans">
                Voice Flow
              </p>
              <div className="flex flex-col items-center">
                <h3 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-white leading-none">
                  220
                </h3>
                <span className="text-2xl sm:text-3xl mt-3 font-sans font-medium text-white/90">
                  words per minute
                </span>
              </div>

              {/* Voice Waveform */}
              <div className="flex justify-center pt-4">
                <VoiceWaveform />
              </div>
            </div>

            {/* Flowing text - faster, sine wave for voice flow card */}
            <FlowingText
              text="Let's get started with the project, what do you think? I'm ready when you are, just speak naturally and watch it flow onto the page"
              variant="light"
              speed="fast"
            />
          </div>

          {/* Hover glow enhancement */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-violet-500/0 via-blue-500/0 to-violet-500/0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-[20px] sm:rounded-[24px]"
            initial={false}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
