import type { Metadata } from "next";
import NotetakerLanding from "@/components/notetaker-landing";

export const metadata: Metadata = {
  title: "Oravo Notetaker | Meeting transcript and summary processing",
  description:
    "Turn a one-hour meeting transcript into a structured summary, decisions, and action items in about 30 seconds after the transcript is ready.",
  openGraph: {
    title: "Oravo Notetaker",
    description:
      "Fast meeting transcript and summary processing for teams that want to move while the conversation is still fresh.",
  },
};

export default function NotetakerPage() {
  return <NotetakerLanding />;
}
