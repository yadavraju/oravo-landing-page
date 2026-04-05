import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Privacy Policy — How Oravo protects your data";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Privacy Policy", "How Oravo protects your data");
}
