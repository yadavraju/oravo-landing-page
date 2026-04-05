import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Oravo vs Dragon — Modern AI dictation vs legacy software";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Oravo vs Dragon", "Modern AI dictation vs legacy software");
}
