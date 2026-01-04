import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice Keyboard Use Cases: Slack, Gmail, Teams, Notion & More | Oravo AI",
  description:
    "Explore Oravo voice keyboard use cases by category. Instant voice-to-text for Slack, Gmail, Teams, Notion, Google Docs, Discord & more. 4x faster than typing.",
  keywords: [
    "voice to text apps",
    "voice keyboard use cases",
    "voice dictation software",
    "speech to text applications",
    "voice typing integrations",
    "dictation for slack",
    "dictation for gmail",
    "voice to text notion",
    "voice typing google docs",
    "hands-free typing apps",
  ],
  openGraph: {
    title: "Voice Keyboard Use Cases | Oravo AI",
    description:
      "Explore Oravo voice keyboard use cases. Voice-to-text for Slack, Gmail, Teams, Notion & more.",
    url: "https://oravo.ai/use-cases",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Keyboard Use Cases | Oravo AI",
    description:
      "Voice-to-text for Slack, Gmail, Teams, Notion & more. 4x faster than typing.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://oravo.ai/use-cases",
  },
};

export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
