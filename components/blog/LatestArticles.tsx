import { client } from "@/sanity/lib/client";
import { latestPostsQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { BlogHighlights, type BlogHighlight } from "./BlogHighlights";

export async function LatestArticles() {
  let posts: any[] = [];

  try {
    posts = await client.fetch(latestPostsQuery);
  } catch (error) {
    console.error("Error fetching latest posts:", error);
    return null;
  }

  if (!posts || posts.length === 0) {
    return null;
  }

  const highlights: BlogHighlight[] = posts.map((post) => ({
    _id: post._id,
    title: post.title,
    slug: post.slug.current,
    excerpt: post.excerpt,
    imageUrl: post.mainImage ? urlForImage(post.mainImage).width(1200).height(675).url() : "/placeholder.jpg",
    imageAlt: post.mainImage?.alt,
    publishedAt: post.publishedAt,
    authorName: post.author?.name,
  }));

  return <BlogHighlights posts={highlights} />;
}
