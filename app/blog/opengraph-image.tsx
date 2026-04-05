import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Oravo Blog — Tips, guides, and updates on AI voice typing";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Oravo Blog", "Tips, guides, and updates on AI voice typing");
}
