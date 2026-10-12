import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowLeft, Clock } from "lucide-react";
import { Band } from "@/components/landing/Band";
import { Doodle } from "@/components/landing/Doodle";
import { Parallax } from "@/components/landing/Parallax";
import { CtaPanel } from "@/components/landing/PageBlocks";
import { Reveal, RevealWords } from "@/components/landing/Reveal";
import { MobileTableOfContents, ReadingProgress, StickyRail, TableOfContents } from "./ArticleChrome";
import { BlogCard, type BlogListPost } from "./BlogCard";
import { PortableText, estimateReadingMinutes, extractHeadings } from "./PortableText";

// Local copy: constants exported from a "use client" module arrive in server
// components as client references, not strings.
const SHELL = "mx-auto w-full max-w-6xl px-5 sm:px-8";

/*
 * The /blog/[slug] article: a sand masthead with the title and byline, the
 * cover image on the seam, then the body on warm paper at a ~68ch measure with
 * a sticky table of contents beside it, the author card, related reading and
 * the closing call to action.
 */

export type ArticleData = {
  title: string;
  excerpt?: string;
  imageUrl?: string | null;
  imageAlt?: string;
  publishedAt: string;
  authorName: string;
  authorImageUrl?: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  authorBio?: any;
  categories: { _id: string; title: string }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;
  related: BlogListPost[];
};

const BODY_ID = "article-body";

function Avatar({ name, src, size = 40 }: { name: string; src?: string | null; size?: number }) {
  return src ? (
    <Image src={src} alt="" width={size} height={size} className="shrink-0 rounded-full object-cover ring-2 ring-raised" style={{ width: size, height: size }} />
  ) : (
    <span
      aria-hidden="true"
      className="flex shrink-0 items-center justify-center rounded-full bg-sand-deep font-display font-bold text-ink-soft ring-2 ring-raised"
      style={{ width: size, height: size, fontSize: size * 0.38 }}
    >
      {name.charAt(0)}
    </span>
  );
}

export function ArticleLayout({ article }: { article: ArticleData }) {
  const headings = extractHeadings(article.body).map(({ id, text, level }) => ({ id, text, level }));
  const minutes = estimateReadingMinutes(article.body);
  const published = new Date(article.publishedAt);
  const date = Number.isNaN(published.getTime()) ? "" : format(published, "MMMM d, yyyy");
  const primaryCategory = article.categories[0]?.title;
  const hasToc = headings.length >= 2;
  const afterBody = article.related.length > 0 ? "var(--o-canvas)" : "var(--o-paper)";

  return (
    <>
      <ReadingProgress targetId={BODY_ID} />

      {/* Masthead */}
      <section className="relative w-full overflow-hidden bg-sand pb-14 pt-32 sm:pb-20 sm:pt-40">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Parallax speed={120} className="absolute -left-40 top-10 sm:-left-24">
            <div className="h-[340px] w-[340px] rounded-full bg-sand-deep sm:h-[420px] sm:w-[420px]" />
          </Parallax>
          <Parallax speed={-70} className="absolute -right-28 top-[40%] sm:-right-12">
            <div className="h-[240px] w-[240px] rotate-12 rounded-[52px] bg-clay sm:h-[300px] sm:w-[300px]" />
          </Parallax>
          <Parallax speed={50} className="absolute right-[6%] top-[150px] hidden xl:block">
            <Doodle name="notebook" className="w-40" />
          </Parallax>
        </div>

        <div className="relative mx-auto w-full max-w-4xl px-5 sm:px-8">
          <Reveal>
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 font-display text-[13px] text-ink-soft">
              <Link href="/blog" className="group inline-flex items-center gap-1.5 font-semibold text-ink transition-colors hover:text-primary-500">
                <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                Blog
              </Link>
              {primaryCategory && (
                <>
                  <span className="text-ink-faint">/</span>
                  <span className="font-semibold uppercase tracking-[0.14em] text-brand !text-[11px]">{primaryCategory}</span>
                </>
              )}
            </nav>
          </Reveal>

          <h1 className="mt-6 font-serif text-[clamp(2.1rem,4.4vw,3.4rem)] leading-[1.1] tracking-[-0.022em] text-ink text-balance">
            <RevealWords text={article.title} delay={0.05} />
          </h1>

          {article.excerpt && (
            <Reveal delay={0.25}>
              <p className="subtitle mt-5 max-w-[62ch] !text-[17px] sm:!text-[18.5px]">{article.excerpt}</p>
            </Reveal>
          )}

          <Reveal delay={0.35}>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <div className="flex items-center gap-3">
                <Avatar name={article.authorName} src={article.authorImageUrl} />
                <div className="leading-tight">
                  <p className="font-display text-[14px] font-semibold text-ink">{article.authorName}</p>
                  {date && (
                    <time dateTime={article.publishedAt} className="font-display text-[12.5px] text-ink-soft">
                      {date}
                    </time>
                  )}
                </div>
              </div>
              <span className="hidden h-8 w-px bg-ink/10 sm:block" aria-hidden="true" />
              <p className="inline-flex items-center gap-1.5 font-display text-[12.5px] font-medium text-ink-soft">
                <Clock aria-hidden="true" className="h-3.5 w-3.5" />
                {minutes} min read
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cover + body */}
      <Band color="var(--o-paper)" from="var(--o-band-sand)" blend={article.imageUrl ? 360 : 160} className="pb-20 sm:pb-24">
        {article.imageUrl && (
          <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
            <Reveal y={24}>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-canvas shadow-[0_0_0_1px_var(--o-line),0_40px_80px_-50px_rgba(51,48,42,0.55)] sm:rounded-3xl">
                <Image src={article.imageUrl} alt={article.imageAlt || article.title} fill priority sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
        )}

        <div
          className={`${SHELL} pt-12 sm:pt-16 ${
            hasToc ? "lg:grid lg:grid-cols-[minmax(12rem,1fr)_minmax(0,38rem)_minmax(0,1fr)] lg:gap-12" : "flex justify-center"
          }`}
        >
          {hasToc && (
            <aside className="hidden lg:block">
              <StickyRail className="ml-auto max-w-[13.5rem]">
                <TableOfContents headings={headings} />
              </StickyRail>
            </aside>
          )}

          <article id={BODY_ID} className="mx-auto w-full max-w-[38rem] lg:mx-0">
            {hasToc && <MobileTableOfContents headings={headings} />}
            <div className="[&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:mr-2.5 [&>p:first-of-type]:first-letter:mt-1 [&>p:first-of-type]:first-letter:font-serif [&>p:first-of-type]:first-letter:text-[3.6rem] [&>p:first-of-type]:first-letter:leading-[0.8] [&>p:first-of-type]:first-letter:text-brand">
              <PortableText value={article.body} />
            </div>

            {article.categories.length > 0 && (
              <div className="mt-14 flex flex-wrap items-center gap-2 border-t border-line pt-8">
                <span className="eyebrow mr-2">Filed under</span>
                {article.categories.map((category) => (
                  <span key={category._id} className="rounded-md bg-canvas px-2.5 py-1 font-display text-[12.5px] font-semibold text-ink-soft ring-1 ring-line">
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            <Reveal>
              <div className="paper-ruled relative mt-10 overflow-hidden rounded-2xl p-6 shadow-[0_0_0_1px_var(--o-line),0_16px_34px_-26px_rgba(51,48,42,0.4)] sm:p-7">
                <div className="flex items-start gap-4">
                  <Avatar name={article.authorName} src={article.authorImageUrl} size={56} />
                  <div className="min-w-0 flex-1">
                    <p className="eyebrow">Written by</p>
                    <p className="mt-1 font-serif text-[1.35rem] leading-tight text-ink">{article.authorName}</p>
                    {article.authorBio ? (
                      <div className="mt-2 [&_p]:mb-2 [&_p]:text-[14.5px] [&_p]:leading-relaxed [&_p]:text-ink-soft">
                        <PortableText value={article.authorBio} />
                      </div>
                    ) : (
                      <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                        The Oravo team writes about voice typing, productivity and writing clear English when it is not your first language.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          </article>

          {hasToc && <div className="hidden lg:block" aria-hidden="true" />}
        </div>
      </Band>

      {article.related.length > 0 && (
        <Band color="var(--o-canvas)" from="var(--o-paper)" className="pb-20 pt-24 sm:pb-24">
          <div className={SHELL}>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <Parallax speed={16} className="mb-4">
                  <Doodle name="bubbles" className="w-24 sm:w-28" />
                </Parallax>
                <Reveal>
                  <p className="eyebrow">Keep reading</p>
                </Reveal>
                <h2 className="display-2 mt-3 text-ink">
                  <RevealWords text="More from the blog" />
                </h2>
              </div>
              <Reveal delay={0.1}>
                <Link href="/blog" className="btn-secondary !h-11 !border-line !px-5 !text-[14px]">
                  All articles
                </Link>
              </Reveal>
            </div>
            <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {article.related.map((post, i) => (
                <Reveal key={post._id} delay={i * 0.08} className="h-full">
                  <BlogCard post={post} variant="standard" />
                </Reveal>
              ))}
            </div>
          </div>
        </Band>
      )}

      <Band color="var(--o-blush)" from={afterBody} className="pb-20 pt-16 sm:pt-20">
        <div className={SHELL}>
          <CtaPanel
            eyebrow="Try it while it is fresh"
            title="Stop typing. Start talking."
            description="Oravo turns what you say into clear, polished English in any app on your Mac, Windows PC or Android phone."
            primary={{ label: "Download Oravo free", href: "/download" }}
            secondary={{ label: "See how it works", href: "/how-to-use" }}
            doodle="mic"
          />
        </div>
      </Band>
    </>
  );
}
