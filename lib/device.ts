export type VisitorDevice = "mac" | "windows" | "android" | "ios" | "other";

/**
 * Which kind of device the visitor is on. iPhone user agents contain "Mac OS X" and
 * iPadOS reports itself as a Mac, so mobile checks must come before the desktop ones.
 */
export function detectVisitorDevice(userAgent: string, maxTouchPoints = 0): VisitorDevice {
  const ua = userAgent.toLowerCase();
  if (ua.includes("android")) return "android";
  if (/iphone|ipad|ipod/.test(ua)) return "ios";
  if (ua.includes("macintosh") && maxTouchPoints > 1) return "ios"; // iPadOS desktop-mode UA
  if (ua.includes("windows")) return "windows";
  if (ua.includes("mac")) return "mac";
  return "other";
}
