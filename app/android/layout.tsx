import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oravo for Android | Voice to Text App | Speak Naturally, Send Without Editing",
  description:
    "Voice-to-text that turns messy speech into ready-to-send text in any Android app. Auto punctuation, filler word removal, and real-time translation to English. Free during launch.",
  keywords: [
    "oravo android",
    "voice to text android",
    "dictation app android",
    "speech to text android",
    "android voice typing",
    "voice dictation android",
    "talk to text android",
    "android dictation",
    "voice typing app",
    "speech recognition android",
  ],
  openGraph: {
    title: "Oravo for Android | Voice to Text App",
    description:
      "Voice-to-text that turns messy speech into ready-to-send text in any Android app. Free during launch.",
    url: "https://oravo.ai/android",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oravo for Android | Voice to Text",
    description:
      "Speak naturally, send without editing. Voice-to-text for Android.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://oravo.ai/android",
  },
};

export default function AndroidLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
