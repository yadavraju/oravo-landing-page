import type { Metadata } from "next";
import HomeLanding from "@/components/home-landing";

export const metadata: Metadata = {
  title: {
    absolute: "Oravo — Type 4× Faster with Voice. Works in Every App.",
  },
  description:
    "Press a hotkey, speak naturally, and Oravo writes polished text in Gmail, Slack, Notion, and 50+ apps. 99% accuracy. 14-day free trial, no credit card.",
  openGraph: {
    title: "Type 4× Faster with Voice | Oravo",
    description:
      "Voice dictation for professionals. Works in Gmail, Slack, Notion, and 50+ apps. 14-day free trial, no credit card.",
  },
};

export default function HomePage() {
  return <HomeLanding />;
}
