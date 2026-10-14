import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "PDF to Text — Oravo";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("PDF to Text", "Extract text from any PDF, privately");
}
