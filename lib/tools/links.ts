// Names and paths of every free tool, without the page copy, for the header
// and footer, which ship on every page. Keep in step with TOOLS in catalog.ts.

export const TOOL_LINKS = [
  { href: "/tools/speech-to-text", name: "Speech to Text" },
  { href: "/tools/meeting-summarizer", name: "AI Meeting Summarizer" },
  { href: "/tools/transcript-cleaner", name: "AI Transcript Cleaner" },
  { href: "/tools/voice-to-email", name: "Voice to Email" },
  { href: "/tools/audio-to-text", name: "Audio to Text" },
  { href: "/tools/subtitle-generator", name: "Subtitle Generator" },
  { href: "/tools/silence-remover", name: "Audio Silence Remover" },
  { href: "/tools/audio-noise-remover", name: "Audio Noise Remover" },
  { href: "/tools/filler-word-counter", name: "Filler Word Counter" },
  { href: "/tools/speaking-speed-test", name: "Speaking Speed Test" },
  { href: "/tools/microphone-test", name: "Microphone Test" },
  { href: "/tools/text-to-speech", name: "Text to Speech" },
] as const;
