// The page gutter, in a plain module (no "use client") so server components
// get the string itself. Exporting it from a client module hands server
// components a client reference instead, which renders as "[object Object]".
export const SHELL = "mx-auto w-full max-w-6xl px-5 sm:px-8";
