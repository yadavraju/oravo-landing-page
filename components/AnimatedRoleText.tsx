"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// Import roles from MadeForYou component
const roles = ["Without Typing a Word"] as const;

export default function AnimatedRoleText() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // useEffect(() => {
  //   if (!isClient) return;

  //   const interval = setInterval(() => {
  //     setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
  //   }, 3000); // Change every 5 seconds

  //   return () => clearInterval(interval);
  // }, [isClient]);

  if (!isClient) {
    return (
      <span className="inline-block">
        4× Faster—Just Speak in Your Language
      </span>
    );
  }

  return (
    <span className="inline-flex justify-center items-center relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentRoleIndex}
          initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -20, opacity: 0, filter: "blur(8px)" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1], // Smooth fade easing
          }}
          className="whitespace-nowrap"
          style={{
            background:
              "linear-gradient(to bottom right, #FF8C42 0%, #FF6B1A 50%, #1F2937 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {roles[currentRoleIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
