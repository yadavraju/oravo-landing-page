import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://oravo.ai";

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/students`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/subprocessors`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Fetch dynamic blog posts from Sanity
  let blogPostRoutes: MetadataRoute.Sitemap = [];

  try {
    const posts = await client.fetch(postsQuery);

    if (posts && posts.length > 0) {
      blogPostRoutes = posts.map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug.current}`,
        lastModified: post._updatedAt ? new Date(post._updatedAt) : new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
    // Continue without blog posts if there's an error
  }

  return [...staticRoutes, ...blogPostRoutes];
}
