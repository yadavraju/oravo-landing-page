import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Vietnamese to English Voice Typing — Oravo";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Vietnamese to English Voice Typing", "Speak Vietnamese, type perfect English with AI");
}
