import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Affiliate Program — Earn with Oravo's affiliate program";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Affiliate Program", "Earn with Oravo's affiliate program");
}
