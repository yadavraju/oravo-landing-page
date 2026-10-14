import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Typing Speed Test — Oravo";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Typing Speed Test", "Your WPM, then your speaking speed");
}
