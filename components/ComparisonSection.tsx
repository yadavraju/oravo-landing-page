"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Microphone Waveform Component
function MicrophoneWaveform() {
  const bars = 15;

  return (
    <div className="flex items-center justify-center gap-[2px] px-4 sm:px-5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[2px] sm:w-[2.5px] bg-white rounded-full"
          animate={{
            height: [
              Math.random() * 8 + 6,
              Math.random() * 16 + 8,
              Math.random() * 8 + 6,
            ],
          }}
          transition={{
            duration: 0.4 + Math.random() * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.04,
          }}
        />
      ))}
    </div>
  );
}

// Curved Text Animation Component - Using sine wave
function CurvedText({ text }: { text: string }) {
  const chars = text.split("");

  return (
    <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-0 right-0 h-16 sm:h-20 overflow-hidden">
      <motion.div
        className="absolute flex items-center"
        animate={{
          x: ["-50%", "-150%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          left: "100%",
        }}
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            className="inline-block text-white/70 text-xs sm:text-sm md:text-base font-medium whitespace-pre"
            style={{
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}
            animate={{
              y: [
                Math.sin(i * 0.2) * 8,
                Math.sin(i * 0.2 + Math.PI) * 8,
                Math.sin(i * 0.2) * 8,
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.02,
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default function ComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full h-full flex items-center justify-center p-2 sm:p-4"
    >
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-3 sm:gap-4">
        {/* Left Card - Keyboard */}
        <motion.div
          variants={cardVariants}
          className="relative overflow-hidden rounded-[16px] sm:rounded-[20px] bg-[#FAF9F6] shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-[#E8E6E3]/50 group h-full min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]"
        >
          {/* Image Background */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img
              src="/keyboard.avif"
              alt="Keyboard typing"
              className="w-full h-full object-cover opacity-60"
              style={{
                filter: "brightness(1.1) contrast(0.95)",
              }}
            />
          </motion.div>

          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/30 via-[#FAF9F6]/60 to-[#FAF9F6]/90" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center space-y-3 sm:space-y-4"
            >
              <p className="text-xs sm:text-sm text-[#605A57] font-medium uppercase tracking-[0.15em]">
                Keyboard
              </p>
              <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#2F3037] font-normal leading-none">
                45
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl ml-2 font-sans">
                  wpm
                </span>
              </h3>
            </motion.div>
          </div>

          {/* Border accent on hover */}
          <div className="absolute inset-0 rounded-[16px] sm:rounded-[20px] ring-1 ring-inset ring-black/5 group-hover:ring-black/10 transition-all duration-300" />
        </motion.div>

        {/* Right Card - Flow */}
        <motion.div
          variants={cardVariants}
          className="relative overflow-hidden rounded-[16px] sm:rounded-[20px] shadow-[0_8px_40px_rgba(0,0,0,0.15)] group h-full min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            {/* Base gradient */}
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

            {/* Animated color overlay */}
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

            {/* Motion blur effect - horizontal lines */}
            <div className="absolute inset-0 opacity-15">
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-[1.5px] bg-white/60 blur-[0.5px]"
                  style={{
                    top: `${(i / 15) * 100}%`,
                    left: 0,
                    right: 0,
                  }}
                  animate={{
                    x: ["-120%", "150%"],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 1.8 + Math.random() * 1.5,
                    repeat: Infinity,
                    delay: Math.random() * 2.5,
                    ease: "linear",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center space-y-4 sm:space-y-6 z-10"
            >
              <p className="text-xs sm:text-sm text-white/60 font-medium uppercase tracking-[0.15em]">
                Flow
              </p>
              <h3 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-white font-normal leading-none">
                220
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl ml-2 font-sans">
                  wpm
                </span>
              </h3>

              {/* Microphone Waveform */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex justify-center pt-2 sm:pt-4"
              >
                <MicrophoneWaveform />
              </motion.div>
            </motion.div>

            {/* Curved Text Animation */}
            <CurvedText text="I'm getting started with the project, How would you like to set up the file. Here are a few options. " />
          </div>

          {/* Subtle glow on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-blue-500/0 via-blue-400/0 to-purple-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
            initial={false}
          />

          {/* Border accent */}
          <div className="absolute inset-0 rounded-[16px] sm:rounded-[20px] ring-1 ring-inset ring-white/10" />
        </motion.div>
      </div>
    </motion.div>
  );
}
