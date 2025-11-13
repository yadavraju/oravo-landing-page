import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import fs from "fs";
import path from "path";

// Configuration for page priorities and update frequencies
const PAGE_CONFIG: Record<
  string,
  { priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }
> = {
  "/": { priority: 1.0, changeFrequency: "daily" },
  "/blog": { priority: 0.9, changeFrequency: "weekly" },
  "/students": { priority: 0.8, changeFrequency: "monthly" },
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

        // Skip certain directories
        if (
          item.isDirectory() &&
          !item.name.startsWith("_") &&
          !item.name.startsWith(".") &&
          item.name !== "api" &&
          item.name !== "studio"
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
