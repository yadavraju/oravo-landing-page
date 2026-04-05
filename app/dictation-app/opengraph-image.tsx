import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Best Dictation App — AI-powered voice dictation for professionals";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Best Dictation App", "AI-powered voice dictation for professionals");
}
