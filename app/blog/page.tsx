import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import type { BlogListPost } from "@/components/blog/BlogCard";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { toListPosts } from "@/components/blog/toListPost";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { PageHero } from "@/components/landing/PageBlocks";
import type { Metadata } from "next";
import { buildBreadcrumbJsonLd } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Blog - Oravo.ai",
  description:
    "Learn about voice dictation, productivity tips, and AI-powered writing tools from the Oravo.ai team. Write in English like a native speaker — just by talking.",
  keywords: [
    "voice dictation blog",
    "voice typing tips",
    "speech to text guide",
    "dictation productivity",
    "AI writing tools",
    "voice typing for non-native speakers",
    "best dictation for non-native English speakers",
    "write English like a native speaker",
    "Whisper Flow alternative",
    "Willow Voice alternative",
    "Wispr Flow alternative",
    "Dragon alternative",
    "Otter.ai alternative",
    "Notta alternative",
  ],
  openGraph: {
    title: "Blog - Oravo.ai",
    description: "Tips, guides, and updates on AI voice typing and dictation.",
    url: "https://oravo.ai/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Oravo.ai",
    description: "Tips, guides, and updates on AI voice typing and dictation.",
  },
  alternates: {
    canonical: "https://oravo.ai/blog",
  },
};

// Disable caching for development
export const revalidate = 0;

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "https://oravo.ai" },
  { name: "Blog", url: "https://oravo.ai/blog" },
]);

export default async function BlogPage({ searchParams }: { searchParams?: { page?: string } }) {
  const initialPage = Math.max(1, Number.parseInt(searchParams?.page ?? "1", 10) || 1);
  let posts: BlogListPost[] = [];

  try {
    posts = toListPosts(await client.fetch(postsQuery));
  } catch (e) {
    console.error("Error fetching posts:", e);
  }

  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <PageHero
        eyebrow="From the blog"
        title="Write better English, faster."
        description="Tips, insights, and best practices for voice dictation, productivity, and writing in a second language."
        doodles={["notebook", "quote"]}
      />

      <BlogIndex posts={posts} initialPage={initialPage} />
    </MarketingShell>
  );
}
