import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Voice Dictation Software — Professional AI dictation for every workflow";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Voice Dictation Software", "Professional AI dictation for every workflow");
}
