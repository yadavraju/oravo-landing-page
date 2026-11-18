import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "What tool helps you write professional English messages faster? Typing tools and voice tools compared";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Write Professional English Faster", "Typing tools and voice tools, compared honestly");
}
