import type { Metadata } from "next";
import { MarketingShell } from "@/components/landing/MarketingShell";
import NotetakerLanding from "@/components/notetaker-landing";
import { buildBreadcrumbJsonLd } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Oravo Notetaker | Meeting transcript and summary processing",
  description:
    "Turn a one-hour meeting transcript into a structured summary, decisions, and action items, with a target of about 30 seconds after the transcript is ready.",
  alternates: { canonical: "https://oravo.ai/notetaker" },
  openGraph: {
    title: "Oravo Notetaker",
    description:
      "Fast meeting transcript and summary processing for teams that want to move while the conversation is still fresh.",
    url: "https://oravo.ai/notetaker",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "https://oravo.ai" },
  { name: "Notetaker", url: "https://oravo.ai/notetaker" },
]);

export default function NotetakerPage() {
  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <NotetakerLanding />
    </MarketingShell>
  );
}
