import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Voice Typing for HubSpot — Oravo";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Voice Typing for HubSpot", "Dictate in HubSpot 4x faster with AI");
}
