import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Oravo Features — AI voice typing, translation, and smart formatting";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Oravo Features", "AI voice typing, translation, and smart formatting");
}
