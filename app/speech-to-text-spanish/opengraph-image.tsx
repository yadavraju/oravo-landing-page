import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Speech to Text Spanish — Spanish voice typing with English translation";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Speech to Text Spanish", "Spanish voice typing with English translation");
}
