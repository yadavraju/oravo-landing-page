import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Free Online Dictation — Oravo";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Free Online Dictation", "Talk and watch it type");
}
