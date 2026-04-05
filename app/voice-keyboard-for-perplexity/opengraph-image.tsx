import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Voice Typing for Perplexity — Oravo";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Voice Typing for Perplexity", "Dictate in Perplexity 4x faster with AI");
}
