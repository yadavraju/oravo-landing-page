import type { Metadata } from "next";
import HomeLanding from "@/components/home-landing";
import { LatestArticles } from "@/components/blog/LatestArticles";

export const metadata: Metadata = {
  title: { absolute: "Oravo — Dictation, voice notes, and bot-free meeting notes" },
  description:
    "Oravo brings voice dictation, voice notes, and bot-free meeting transcription together in one app for Mac, iPhone, iPad, and Apple Watch.",
  alternates: { canonical: "https://oravo.ai" },
  openGraph: {
    title: "Oravo — Dictation, voice notes, and bot-free meeting notes",
    description:
      "Oravo brings voice dictation, voice notes, and bot-free meeting transcription together in one app for Mac, iPhone, iPad, and Apple Watch.",
    url: "https://oravo.ai",
  },
  twitter: {
    title: "Oravo — Dictation, voice notes, and bot-free meeting notes",
    description:
      "Oravo brings voice dictation, voice notes, and bot-free meeting transcription together in one app for Mac, iPhone, iPad, and Apple Watch.",
  },
};

export default function HomePage() {
  return <HomeLanding blogSection={<LatestArticles />} />;
}
