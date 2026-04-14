import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oravo Mobile App | Voice to Text for Android & iOS",
  description:
    "Voice-to-text that turns messy speech into ready-to-send text in any app. Auto punctuation, filler word removal, and real-time translation to English. Free during launch.",
  keywords: [
    "oravo mobile app",
    "voice to text android",
    "dictation app android",
    "speech to text mobile",
    "android voice typing",
    "voice dictation app",
    "talk to text android",
    "mobile dictation",
    "voice typing app",
    "speech recognition android",
  ],
  openGraph: {
    title: "Oravo Mobile App | Voice to Text",
    description:
      "Voice-to-text that turns messy speech into ready-to-send text in any app. Free during launch.",
    url: "https://oravo.ai/mobile",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oravo Mobile App | Voice to Text",
    description:
      "Speak naturally, send without editing. Voice-to-text for mobile.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://oravo.ai/mobile",
  },
};

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
