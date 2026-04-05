import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Oravo vs Otter.ai — Voice typing vs meeting transcription";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Oravo vs Otter.ai", "Voice typing vs meeting transcription");
}
