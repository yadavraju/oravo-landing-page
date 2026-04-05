import { createOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Download Oravo — Get Oravo for Mac, Windows, Android & iOS";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("Download Oravo", "Get Oravo for Mac, Windows, Android & iOS");
}
