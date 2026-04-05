import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Oravo for Students — Voice typing for students and academics";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Oravo for Students", "Voice typing for students and academics");
}
