import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowRight, ArrowUpRight } from "lucide-react";

/*
 * Blog cards for the /blog index. One post shape, four presentations so the
 * index reads like an editorial front page rather than a grid of identical
 * tiles: the lead story, two tall features, standard cards, and archive rows.
 * Same surfaces, type and hover motion as BlogHighlights on the homepage.
 */

export type BlogListPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  imageUrl: string;
  imageAlt?: string;
  publishedAt: string;
  authorName?: string;
  authorImageUrl?: string | null;
  categories: { _id: string; title: string }[];
};

export type BlogCardVariant = "feature" | "tall" | "standard" | "row";

const formatDate = (iso: string, pattern = "MMM d, yyyy") => {
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? "" : format(date, pattern);
};

function Category({ post }: { post: BlogListPost }) {
  const category = post.categories[0]?.title;
  if (!category) return null;
  return <span className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">{category}</span>;
}

function Byline({ post, avatar = false }: { post: BlogListPost; avatar?: boolean }) {
  const name = post.authorName || "Oravo Team";
  return (
    <div className="flex items-center gap-2.5">
      {avatar &&
        (post.authorImageUrl ? (
          <Image src={post.authorImageUrl} alt="" width={28} height={28} className="h-7 w-7 rounded-full object-cover ring-2 ring-raised" />
        ) : (
          <span aria-hidden="true" className="flex h-7 w-7 items-center justify-center rounded-full bg-sand font-display text-[11px] font-bold text-ink-soft ring-2 ring-raised">
            {name.charAt(0)}
          </span>
        ))}
      <p className="font-display text-[12px] text-ink-faint">
        <span className="font-semibold text-ink-soft">{name}</span>
        <span className="mx-1.5">·</span>
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
      </p>
    </div>
  );
}

function Cover({ post, sizes, className = "" }: { post: BlogListPost; sizes: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-canvas ${className}`}>
      <Image
        src={post.imageUrl}
        alt={post.imageAlt || post.title}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-entrance group-hover:scale-[1.04]"
      />
    </div>
  );
}

export function BlogCard({ post, variant = "standard", priority }: { post: BlogListPost; variant?: BlogCardVariant; priority?: boolean }) {
  const href = `/blog/${post.slug}`;

  if (variant === "feature") {
    return (
      <Link
        href={href}
        className="group grid overflow-hidden rounded-3xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-40px_rgba(51,48,42,0.45)] transition-shadow duration-300 hover:shadow-[0_0_0_1px_rgba(51,48,42,0.22),0_30px_60px_-36px_rgba(51,48,42,0.5)] lg:grid-cols-[1.3fr_1fr]"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-canvas lg:aspect-auto lg:min-h-[420px]">
          <Image
            src={post.imageUrl}
            alt={post.imageAlt || post.title}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover transition-transform duration-700 ease-entrance group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-col p-6 sm:p-9 lg:p-10">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-brand-soft px-2 py-1 font-display text-[11px] font-semibold text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              Latest
            </span>
            <Category post={post} />
          </div>
          <h2 className="display-2 mt-5 text-ink transition-colors duration-300 group-hover:text-primary-500">{post.title}</h2>
          {post.excerpt && <p className="mt-4 line-clamp-4 text-[15.5px] leading-relaxed text-ink-soft">{post.excerpt}</p>}
          <div className="min-h-8 flex-1" aria-hidden="true" />
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
            <Byline post={post} avatar />
            <span className="inline-flex items-center gap-1.5 font-display text-[13.5px] font-semibold text-primary-500">
              Read article
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "tall") {
    return (
      <Link href={href} className="surface-solid surface-interactive group flex h-full flex-col overflow-hidden !rounded-2xl">
        <Cover post={post} sizes="(min-width: 768px) 560px, 100vw" className="aspect-[16/10] w-full" />
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <Category post={post} />
          <h3 className="display-3 mt-2 text-ink transition-colors group-hover:text-primary-500">{post.title}</h3>
          {post.excerpt && <p className="mt-3 line-clamp-3 text-[14.5px] leading-relaxed text-ink-soft">{post.excerpt}</p>}
          <div className="mt-auto pt-6">
            <Byline post={post} avatar />
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "row") {
    return (
      <Link href={href} className="group flex items-center gap-4 px-4 py-4 transition-colors hover:bg-canvas/70 sm:gap-5 sm:px-6 sm:py-5">
        <Cover post={post} sizes="96px" className="aspect-square w-16 shrink-0 rounded-lg sm:w-20" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Category post={post} />
            <time dateTime={post.publishedAt} className="font-display text-[12px] text-ink-faint">
              {formatDate(post.publishedAt)}
            </time>
          </div>
          <h3 className="mt-1 line-clamp-2 font-serif text-[17px] leading-snug text-ink transition-colors group-hover:text-primary-500 sm:text-[18px]">{post.title}</h3>
        </div>
        <ArrowUpRight aria-hidden="true" className="hidden h-5 w-5 shrink-0 text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink sm:block" />
      </Link>
    );
  }

  return (
    <Link href={href} className="group flex h-full flex-col">
      <Cover post={post} sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3] w-full rounded-2xl ring-1 ring-line" />
      <div className="flex flex-1 flex-col px-1 pt-4">
        <Category post={post} />
        <h3 className="mt-1.5 line-clamp-3 font-serif text-[19px] leading-snug text-ink transition-colors group-hover:text-primary-500">{post.title}</h3>
        {post.excerpt && <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-ink-soft">{post.excerpt}</p>}
        <div className="mt-auto pt-4">
          <Byline post={post} />
        </div>
      </div>
    </Link>
  );
}
