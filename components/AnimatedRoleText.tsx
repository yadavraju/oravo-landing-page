"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// Import roles from MadeForYou component
const roles = [
  "accessibility",
  "writers",
  "teams",
  "creators",
  "journalists",
  "healthcare",
  "lawyers",
  "students",
  "consultants",
  "engineers",
  "individuals",
] as const;

export default function AnimatedRoleText() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isClient]);

  if (!isClient) {
    return <span className="inline-block">Teams</span>;
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
            duration: 0.6,
            ease: [0.23, 1, 0.32, 1], // Custom easing for smooth animation
          }}
          className="whitespace-nowrap"
          style={{
            background: "linear-gradient(135deg, #37322F 0%, #605A57 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          for {roles[currentRoleIndex]}.
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
