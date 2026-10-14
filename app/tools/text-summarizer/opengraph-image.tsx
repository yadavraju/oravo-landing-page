import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Free AI Text Summarizer — Oravo";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Free AI Text Summarizer", "The long version in, the point out");
}
