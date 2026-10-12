import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";
import { Doodle } from "@/components/landing/Doodle";
import { Parallax } from "@/components/landing/Parallax";
import { Reveal, RevealWords } from "@/components/landing/Reveal";

export type BlogHighlight = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  imageUrl: string;
  imageAlt?: string;
  publishedAt: string;
  authorName?: string;
};

function Meta({ post }: { post: BlogHighlight }) {
  return (
    <p className="font-display text-[12px] text-ink-faint">
      {format(new Date(post.publishedAt), "MMM d, yyyy")}
      <span className="mx-1.5">·</span>
      {post.authorName || "Oravo Team"}
    </p>
  );
}

// Editorial layout: the newest article as a feature, the next two stacked
// beside it. Same surfaces, type and motion as the rest of the site.
export function BlogHighlights({ posts }: { posts: BlogHighlight[] }) {
  if (posts.length === 0) return null;
  const [feature, ...rest] = posts;

  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-xl">
          <Parallax speed={16} className="mb-4">
            <Doodle name="notebook" className="w-28 sm:w-32" />
          </Parallax>
          <Reveal><p className="eyebrow">From the blog</p></Reveal>
          <h2 className="display-2 mt-3 text-ink">
            <RevealWords text="Write better English, faster." />
          </h2>
          <Reveal delay={0.12}>
            <p className="subtitle mt-4">Guides, tips, and insights on voice typing and writing in a second language.</p>
          </Reveal>
        </div>
        <Reveal delay={0.16}>
          <Link href="/blog" className="btn-secondary !h-11 !border-line !px-5 !text-[14px]">
            View all articles
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-[1.35fr_1fr] lg:gap-5">
        <Reveal>
          <Link href={`/blog/${feature.slug}`} className="surface-solid surface-interactive group flex h-full flex-col overflow-hidden !rounded-2xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-canvas">
              <Image
                src={feature.imageUrl}
                alt={feature.imageAlt || feature.title}
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover transition-transform duration-700 ease-entrance group-hover:scale-[1.03]"
              />
              <span className="absolute left-4 top-4 rounded-md bg-raised/90 px-2 py-1 font-display text-[11px] font-semibold text-ink backdrop-blur">
                Latest
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <Meta post={feature} />
              <h3 className="display-3 mt-2 text-ink transition-colors group-hover:text-primary-500">{feature.title}</h3>
              {feature.excerpt && <p className="mt-3 line-clamp-3 text-[14.5px] leading-relaxed text-ink-soft">{feature.excerpt}</p>}
              <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-display text-[13.5px] font-semibold text-primary-500">
                Read article
                <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </Reveal>

        <div className="grid gap-4 lg:gap-5">
          {rest.slice(0, 2).map((post, i) => (
            <Reveal key={post._id} delay={0.08 + i * 0.06}>
              <Link href={`/blog/${post.slug}`} className="surface-solid surface-interactive group flex h-full gap-4 overflow-hidden !rounded-2xl p-4 sm:p-5">
                <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-lg bg-canvas sm:w-36">
                  <Image
                    src={post.imageUrl}
                    alt={post.imageAlt || post.title}
                    fill
                    sizes="144px"
                    className="object-cover transition-transform duration-700 ease-entrance group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex min-w-0 flex-col">
                  <Meta post={post} />
                  <h3 className="mt-1.5 line-clamp-3 font-serif text-[18px] leading-snug text-ink transition-colors group-hover:text-primary-500">{post.title}</h3>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-3 font-display text-[13px] font-semibold text-primary-500">
                    Read
                    <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
