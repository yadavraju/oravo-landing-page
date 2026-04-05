import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Arabic to English Voice Typing — Oravo";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Arabic to English Voice Typing", "Speak Arabic, type perfect English with AI");
}
