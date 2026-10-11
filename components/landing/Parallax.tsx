"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

// Moves its children at a different rate from the page while the element
// crosses the viewport. Positive speed drifts up faster than the scroll,
// negative lags behind it. `speed` is the travel in px either side of rest.
export function Parallax({
  children,
  speed = 60,
  className,
  "aria-hidden": ariaHidden,
}: {
  children?: ReactNode;
  speed?: number;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  return (
    <motion.div ref={ref} className={className} aria-hidden={ariaHidden} style={reduceMotion ? undefined : { y }}>
      {children}
    </motion.div>
  );
}
