import type { Metadata } from "next";
import HomeLanding from "@/components/home-landing";
import { LatestArticles } from "@/components/blog/LatestArticles";

export const metadata: Metadata = {
  title: {
    absolute:
      "Oravo — Voice Typing & Dictation App | Type 4× Faster in Any App",
  },
  description:
    "Voice typing for Mac, Windows, and Android. Speak naturally in 60+ languages and turn your words into polished text.",
  openGraph: {
    title: "Voice Typing & Dictation App | Oravo",
    description:
      "Speak naturally in 60+ languages and turn your words into polished text on Mac, Windows, and Android.",
  },
};

export default function HomePage() {
  return <HomeLanding blogSection={<LatestArticles />} />;
}
