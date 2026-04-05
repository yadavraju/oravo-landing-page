import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Voice to Text App — Convert speech to text with AI accuracy";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Voice to Text App", "Convert speech to text with AI accuracy");
}
