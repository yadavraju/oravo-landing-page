"use client";

import { motion } from "framer-motion";

export default function LanguageFlags() {
  // Flag emojis for different languages
  const flags = [
    "🇺🇸", // USA
    "🇬🇧", // UK
    "🇪🇸", // Spain
    "🇫🇷", // France
    "🇩🇪", // Germany
    "🇮🇹", // Italy
    "🇨🇳", // China
    "🇯🇵", // Japan
    "🇰🇷", // South Korea
    "🇮🇳", // India
    "🇧🇷", // Brazil
    "🇷🇺", // Russia
    "🇨🇦", // Canada
    "🇲🇽", // Mexico
    "🇦🇺", // Australia
    "🇳🇱", // Netherlands
  ];

  const radius = 120; // Radius of the circle

  return (
    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] flex items-center justify-center">
      {/* Rotating flags */}
      <div className="absolute inset-0 flex items-center justify-center">
        {flags.map((flag, index) => {
          const angle = (index / flags.length) * 360;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <motion.div
              key={index}
              className="absolute text-xl sm:text-2xl md:text-3xl"
              style={{
                left: "50%",
                top: "50%",
              }}
              animate={{
                x: [x, x],
                y: [y, y],
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                delay: 0,
              }}
            >
              <motion.div
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                {flag}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Gradient mask for soft bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#F7F5F3] to-transparent pointer-events-none"></div>
    </div>
  );
}
