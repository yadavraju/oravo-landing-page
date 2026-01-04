import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import fs from "fs";
import path from "path";

// Configuration for page priorities and update frequencies
// Optimized for target audience: content creators, journalists, healthcare, legal professionals
const PAGE_CONFIG: Record<
  string,
  { priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }
> = {
  // Core pages - highest priority
  "/": { priority: 1.0, changeFrequency: "daily" },

  // High-value conversion pages
  "/students": { priority: 0.9, changeFrequency: "weekly" },
  "/manifesto": { priority: 0.85, changeFrequency: "monthly" },
  "/affiliate": { priority: 0.85, changeFrequency: "monthly" },

  // Content hub - frequently updated
  "/blog": { priority: 0.85, changeFrequency: "daily" },

  // Common landing pages (add as you create them)
  "/pricing": { priority: 0.85, changeFrequency: "weekly" },
  "/features": { priority: 0.9, changeFrequency: "weekly" },
  "/about": { priority: 0.75, changeFrequency: "monthly" },
  "/contact": { priority: 0.75, changeFrequency: "monthly" },

  // Use case pages (high-value for SEO targeting specific audiences)
  "/for-healthcare": { priority: 0.8, changeFrequency: "monthly" },
  "/for-legal": { priority: 0.8, changeFrequency: "monthly" },
  "/for-journalists": { priority: 0.8, changeFrequency: "monthly" },
  "/for-content-creators": { priority: 0.8, changeFrequency: "monthly" },

  // Legal pages - required but lower priority
  "/privacy": { priority: 0.3, changeFrequency: "yearly" },
  "/terms": { priority: 0.3, changeFrequency: "yearly" },
  "/subprocessors": { priority: 0.3, changeFrequency: "yearly" },

  // Default for any other pages not specified
  default: { priority: 0.7, changeFrequency: "monthly" },
};

/**
 * Recursively finds all page.tsx files in the app directory
 * and converts them to route paths
 */
function getAppRoutes(): string[] {
  const appDir = path.join(process.cwd(), "app");
  const routes: string[] = [];

  function scanDirectory(dir: string, basePath: string = "") {
    try {
      const items = fs.readdirSync(dir, { withFileTypes: true });

      for (const item of items) {
        const itemPath = path.join(dir, item.name);
        const relativePath = basePath ? `${basePath}/${item.name}` : item.name;

        // Skip certain directories (including transactional pages that should not be indexed)
        if (
          item.isDirectory() &&
          !item.name.startsWith("_") &&
          !item.name.startsWith(".") &&
          item.name !== "api" &&
          item.name !== "studio" &&
          item.name !== "payment-success" // Transactional page - noindex
        ) {
          // Check if this directory has a page.tsx
          const pagePath = path.join(itemPath, "page.tsx");
          if (fs.existsSync(pagePath)) {
            // Convert directory path to route
            // Handle dynamic routes like [slug] or [[...tool]]
            if (item.name.startsWith("[") && item.name.endsWith("]")) {
              // Skip dynamic route folders (they'll be handled separately)
              continue;
            }
            const route = basePath ? `/${basePath}/${item.name}` : `/${item.name}`;
            routes.push(route);
          }

          // Recursively scan subdirectories
          scanDirectory(itemPath, relativePath);
        }
      }
    } catch (error) {
      console.error(`Error scanning directory ${dir}:`, error);
    }
  }

  // Check for root page.tsx
  if (fs.existsSync(path.join(appDir, "page.tsx"))) {
    routes.push("/");
  }

  scanDirectory(appDir);
  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://oravo.ai";

  // Automatically discover all static routes from the app directory
  const discoveredRoutes = getAppRoutes();
  const staticRoutes: MetadataRoute.Sitemap = discoveredRoutes.map((route) => {
    const config = PAGE_CONFIG[route] || PAGE_CONFIG.default;
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: config.changeFrequency,
      priority: config.priority,
    };
  });

  // Fetch dynamic blog posts from Sanity with enhanced metadata
  let blogPostRoutes: MetadataRoute.Sitemap = [];

  try {
    // Enhanced query to include _updatedAt for accurate lastModified dates
    const enhancedPostsQuery = `*[_type == "post" && defined(slug.current)] | order(_createdAt desc) {
      _id,
      slug,
      _updatedAt,
      _createdAt,
      publishedAt
    }`;

    const posts = await client.fetch(enhancedPostsQuery);

    if (posts && posts.length > 0) {
      blogPostRoutes = posts.map((post: any) => {
        // Use the most recent date available for lastModified
        const lastModified = post._updatedAt || post.publishedAt || post._createdAt;

        return {
          url: `${baseUrl}/blog/${post.slug.current}`,
          lastModified: lastModified ? new Date(lastModified) : new Date(),
          // Blog posts are high-value content, update frequency based on recency
          changeFrequency: "weekly" as const,
          priority: 0.75, // Higher priority than default pages - blog content drives SEO
        };
      });
    }
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
    // Continue without blog posts if there's an error
  }

  // Sort by priority (highest first) for better crawling optimization
  const allRoutes = [...staticRoutes, ...blogPostRoutes].sort(
    (a, b) => (b.priority || 0) - (a.priority || 0)
  );

  return allRoutes;
}
