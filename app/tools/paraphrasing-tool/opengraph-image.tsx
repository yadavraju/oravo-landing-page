import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Free Paraphrasing Tool — Oravo";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Free Paraphrasing Tool", "Same meaning, better words");
}
