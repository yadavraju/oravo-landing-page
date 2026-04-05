import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Use Cases — Voice typing for every workflow";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Use Cases", "Voice typing for every workflow");
}
