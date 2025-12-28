import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://oravo.ai";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/studio/",
          "/api/",
          "/payment-success/", // Transactional page - should not be indexed
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
