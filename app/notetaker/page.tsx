import type { Metadata } from "next";
import NotetakerLanding from "@/components/notetaker-landing";

export const metadata: Metadata = {
  title: "Oravo Notetaker | Meeting transcript and summary processing",
  description:
    "Review the Oravo Notetaker product direction: process a one-hour meeting transcript and generate a structured summary in about 30 seconds.",
  openGraph: {
    title: "Oravo Notetaker",
    description:
      "A reviewable product direction for fast meeting transcript and summary processing.",
  },
};

export default function NotetakerPage() {
  return <NotetakerLanding />;
}
