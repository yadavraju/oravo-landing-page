// Plain (server-safe) constants for the audience pages. Kept out of the
// "use client" kit so server pages can read real strings, not client refs.
export const SHELL = "mx-auto w-full max-w-6xl px-5 sm:px-8";

export const GROUND = {
  sand: "var(--o-band-sand)",
  paper: "var(--o-paper)",
  canvas: "var(--o-canvas)",
  clay: "var(--o-band-clay)",
  // The one cool contrast band (no dark bands on these pages).
  mist: "var(--o-band-mist, #e3ebee)",
  blush: "var(--o-blush)",
} as const;

// Vertical rhythm shared by every band on these pages.
export const BAND_PAD = "pt-24 pb-20 sm:pt-28 sm:pb-24";
