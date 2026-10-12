import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import styles from "@/components/legal/legal.module.css";

export const metadata: Metadata = {
  title: "Subprocessors | Oravo",
  description: "Third-party services Oravo uses. Know exactly where your data is and how it is being used.",
  openGraph: {
    title: "Subprocessors | Oravo",
    description: "Third-party services Oravo uses",
    url: "https://oravo.ai/subprocessors",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subprocessors | Oravo",
    description: "Third-party services Oravo uses",
  },
};

// The list below is legal copy: change presentation only, never entries.
const SUBPROCESSORS: { name: string; purpose: string; location: string; href: string; label: string }[] = [
  { name: "AWS", purpose: "Cloud infrastructure and hosting services", location: "United States", href: "https://aws.amazon.com", label: "https://aws.amazon.com" },
  { name: "Deepgram", purpose: "Speech-to-text and audio processing", location: "United States", href: "https://deepgram.com", label: "https://deepgram.com" },
  { name: "OpenAI", purpose: "AI language model services", location: "United States", href: "https://openai.com", label: "https://openai.com" },
  { name: "Groq", purpose: "AI inference and processing services", location: "United States", href: "https://groq.com", label: "https://groq.com" },
  { name: "Grok", purpose: "AI language model services", location: "United States", href: "https://grok.x.ai", label: "https://grok.x.ai" },
  { name: "Stripe", purpose: "Payment processing and billing", location: "United States", href: "https://stripe.com", label: "https://stripe.com" },
  { name: "Intercom", purpose: "Customer support and messaging", location: "Ireland", href: "https://intercom.com", label: "https://intercom.com" },
  { name: "Cloudflare", purpose: "CDN and security services", location: "United States", href: "https://cloudflare.com", label: "https://cloudflare.com" },
  { name: "WorkOS", purpose: "Enterprise authentication and SSO", location: "United States", href: "https://workos.com", label: "https://workos.com" },
  { name: "Anthropic", purpose: "AI language model services", location: "United States", href: "https://anthropic.com", label: "https://anthropic.com" },
  { name: "Vercel", purpose: "Frontend hosting and deployment", location: "United States", href: "https://vercel.com", label: "https://vercel.com" },
  { name: "Pusher", purpose: "Real-time messaging and notifications", location: "United Kingdom", href: "https://pusher.com", label: "https://pusher.com" },
  { name: "Pinecone", purpose: "Vector database and search", location: "United States", href: "https://pinecone.io", label: "https://pinecone.io" },
  { name: "Supabase", purpose: "Serverless PostgreSQL database", location: "United States", href: "https://supabase.com/", label: "https://supabase.com" },
  { name: "Slack", purpose: "Team communication and notifications", location: "United States", href: "https://slack.com", label: "https://slack.com" },
  { name: "PostHog", purpose: "Product analytics and event tracking", location: "United Kingdom", href: "https://posthog.com", label: "https://posthog.com" },
  { name: "AssemblyAI", purpose: "Speech recognition and audio intelligence", location: "United States", href: "https://assemblyai.com", label: "https://assemblyai.com" },
];

export default function SubprocessorsPage() {
  return (
    <LegalDocument
      doc="subprocessors"
      title="Oravo Subprocessors"
      updated="Current as of Aug 25, 2025"
      intro="Know exactly where your data is and how it is being used. Oravo's subprocessors."
      doodle="globe"
    >
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Purpose</th>
            <th scope="col">Location</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          {SUBPROCESSORS.map((row) => (
            <tr key={row.name}>
              <td data-label="Name">{row.name}</td>
              <td data-label="Purpose">{row.purpose}</td>
              <td data-label="Location">{row.location}</td>
              <td data-label="Website">
                <a href={row.href} target="_blank" rel="noopener noreferrer">
                  {row.label}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </LegalDocument>
  );
}
