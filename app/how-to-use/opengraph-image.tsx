import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "How to Use Oravo — Complete setup guide for AI voice typing";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("How to Use Oravo", "Complete setup guide for AI voice typing");
}
