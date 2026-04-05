import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Oravo vs Notta — AI voice typing compared side by side";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Oravo vs Notta", "AI voice typing compared side by side");
}
