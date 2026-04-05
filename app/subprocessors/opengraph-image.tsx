import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Subprocessors — Third-party services Oravo uses";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Subprocessors", "Third-party services Oravo uses");
}
