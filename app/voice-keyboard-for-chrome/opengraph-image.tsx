import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Voice Typing for Chrome — Oravo";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Voice Typing for Chrome", "Dictate in Chrome 4x faster with AI");
}
