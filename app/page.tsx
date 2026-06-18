import type { Metadata } from "next";
import HomeLanding from "@/components/home-landing";
import { LatestArticles } from "@/components/blog/LatestArticles";

export const metadata: Metadata = {
  title: {
    absolute:
      "Oravo — Voice Typing & Dictation App | Type 4× Faster in Any App",
  },
  description:
    "AI voice typing app for Mac, Windows, Android & iOS. Speak naturally and get polished text in Gmail, Slack, Notion, Google Docs & 50+ apps. 99% accuracy. 5,000 words free.",
  openGraph: {
    title: "Voice Typing & Dictation App | Oravo",
    description:
      "AI voice typing that works in every app. Speak naturally, get polished text. 99% accuracy, 60+ languages. 5,000 words free.",
  },
};

export default function HomePage() {
  return <HomeLanding blogSection={<LatestArticles />} />;
}
