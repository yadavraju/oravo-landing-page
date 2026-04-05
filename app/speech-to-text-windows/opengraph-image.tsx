import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Speech to Text for Windows — AI voice typing for Windows PC";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Speech to Text for Windows", "AI voice typing for Windows PC");
}
