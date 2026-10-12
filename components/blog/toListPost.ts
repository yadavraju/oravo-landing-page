import { urlForImage } from "@/sanity/lib/image";
import type { BlogListPost } from "./BlogCard";

/* Sanity post documents -> the plain shape the blog cards render. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toListPost(post: any): BlogListPost {
  return {
    _id: post._id,
    title: post.title,
    slug: post.slug?.current ?? "",
    excerpt: post.excerpt || undefined,
    imageUrl: post.mainImage ? urlForImage(post.mainImage).width(1200).height(750).url() : "/placeholder.jpg",
    imageAlt: post.mainImage?.alt,
    publishedAt: post.publishedAt || post._createdAt,
    authorName: post.author?.name,
    authorImageUrl: post.author?.image?.asset?._ref ? urlForImage(post.author.image).width(100).height(100).url() : null,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    categories: (post.categories ?? []).filter((c: any) => c?._id && c?.title),
  };
}

/* Keep only posts that can be linked to, then normalise them. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toListPosts(raw: any): BlogListPost[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter((post) => post?.slug?.current && post?.title).map(toListPost);
}
