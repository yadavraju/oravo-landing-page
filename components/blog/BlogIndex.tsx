"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Band } from "@/components/landing/Band";
import { Doodle } from "@/components/landing/Doodle";
import { Parallax } from "@/components/landing/Parallax";
import { Reveal, RevealWords } from "@/components/landing/Reveal";
import { CtaPanel, SHELL } from "@/components/landing/PageBlocks";
import { BlogCard, type BlogListPost } from "./BlogCard";

/*
 * The /blog front page: the lead story, a category filter (only when the posts
 * carry more than one category), two tall features, then every other article
 * in a grid of nine per page with numbered pagination (?page=n links).
 */

const ALL = "all";
const PER_PAGE = 9;

/* Keeps ?page= in the address bar without a navigation, so a page can be shared. */
function syncUrl(page: number) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (page > 1) url.searchParams.set("page", String(page));
  else url.searchParams.delete("page");
  window.history.replaceState(null, "", url.pathname + url.search + url.hash);
}

/* 1 … 4 5 6 … 12: first, last, and the neighbours of the current page. */
function pageList(page: number, pages: number): (number | "gap")[] {
  const keep = new Set([1, pages, page - 1, page, page + 1]);
  const out: (number | "gap")[] = [];
  for (let n = 1; n <= pages; n++) {
    if (keep.has(n)) out.push(n);
    else if (out[out.length - 1] !== "gap") out.push("gap");
  }
  return out;
}

/* Real links (crawlable, shareable) that page in place when JavaScript runs. */
function Pagination({ page, pages, onGo }: { page: number; pages: number; onGo: (n: number) => void }) {
  const href = (n: number) => (n > 1 ? `/blog?page=${n}` : "/blog");
  const go = (n: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    onGo(n);
  };
  const edge = "inline-flex h-10 items-center gap-1.5 rounded-lg px-3.5 font-display text-[13.5px] font-semibold ring-1 transition-colors";
  return (
    <nav aria-label="Blog pages" className="mt-14 flex items-center justify-center gap-2">
      {page > 1 ? (
        <a href={href(page - 1)} onClick={go(page - 1)} rel="prev" className={`${edge} bg-raised/80 text-ink ring-line hover:bg-raised`}>
          <ChevronLeft aria-hidden="true" className="h-4 w-4" />
          <span className="hidden sm:inline">Newer</span>
        </a>
      ) : (
        <span className={`${edge} cursor-not-allowed bg-raised/40 text-ink-faint ring-line/60`} aria-disabled="true">
          <ChevronLeft aria-hidden="true" className="h-4 w-4" />
          <span className="hidden sm:inline">Newer</span>
        </span>
      )}
      <ol className="flex items-center gap-1">
        {pageList(page, pages).map((n, i) =>
          n === "gap" ? (
            <li key={`gap-${i}`} className="w-6 text-center font-display text-[13px] text-ink-faint" aria-hidden="true">
              …
            </li>
          ) : (
            <li key={n}>
              <a
                href={href(n)}
                onClick={go(n)}
                aria-current={n === page ? "page" : undefined}
                aria-label={`Page ${n}`}
                className={`flex h-10 min-w-10 items-center justify-center rounded-lg px-2 font-display text-[13.5px] font-semibold tabular-nums transition-colors ${
                  n === page ? "key-on" : "text-ink-soft hover:bg-raised hover:text-ink"
                }`}
              >
                {n}
              </a>
            </li>
          ),
        )}
      </ol>
      {page < pages ? (
        <a href={href(page + 1)} onClick={go(page + 1)} rel="next" className={`${edge} bg-raised/80 text-ink ring-line hover:bg-raised`}>
          <span className="hidden sm:inline">Older</span>
          <ChevronRight aria-hidden="true" className="h-4 w-4" />
        </a>
      ) : (
        <span className={`${edge} cursor-not-allowed bg-raised/40 text-ink-faint ring-line/60`} aria-disabled="true">
          <span className="hidden sm:inline">Older</span>
          <ChevronRight aria-hidden="true" className="h-4 w-4" />
        </span>
      )}
    </nav>
  );
}

function CategoryFilter({
  categories,
  active,
  onChange,
}: {
  categories: { id: string; title: string; count: number }[];
  active: string;
  onChange: (id: string) => void;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <div role="tablist" aria-label="Filter articles by topic" className="-mx-5 flex gap-1.5 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
      {categories.map((category) => {
        const on = category.id === active;
        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={on}
            onClick={() => onChange(category.id)}
            className={`relative shrink-0 rounded-lg px-3.5 py-2 font-display text-[13px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 ${
              on ? "text-cloud-ink" : "text-ink-soft hover:text-ink"
            }`}
          >
            {on && (
              <motion.span
                layoutId="blog-filter"
                className="absolute inset-0 rounded-lg bg-cloud ring-1 ring-cloud-line"
                transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            {!on && <span className="absolute inset-0 rounded-lg bg-raised/70 ring-1 ring-line" aria-hidden="true" />}
            <span className="relative">
              {category.title}
              <span className={`ml-1.5 tabular-nums ${on ? "text-cloud-ink/60" : "text-ink-faint"}`}>{category.count}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

function EmptyState() {
  return (
    <Reveal>
      <div className="frame-dotted mx-auto flex max-w-xl flex-col items-center bg-raised/50 px-6 py-14 text-center">
        <Doodle name="notebook" className="w-28" />
        <h2 className="display-3 mt-4 text-ink">New articles are on the way</h2>
        <p className="mt-2 max-w-sm text-[14.5px] leading-relaxed text-ink-soft">
          We are writing guides on voice typing and writing in a second language. In the meantime, learn the basics in the setup guide.
        </p>
        <a href="/how-to-use" className="btn-secondary mt-6 !h-11 !border-line !px-5 !text-[14px]">
          Read the setup guide
        </a>
      </div>
    </Reveal>
  );
}

export function BlogIndex({ posts, initialPage = 1 }: { posts: BlogListPost[]; initialPage?: number }) {
  const [active, setActive] = useState(ALL);
  const [page, setPage] = useState(initialPage);
  const gridTop = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const categories = useMemo(() => {
    const counts = new Map<string, { id: string; title: string; count: number }>();
    for (const post of posts) {
      for (const category of post.categories) {
        const entry = counts.get(category._id) ?? { id: category._id, title: category.title, count: 0 };
        entry.count += 1;
        counts.set(category._id, entry);
      }
    }
    const list = Array.from(counts.values()).sort((a, b) => b.count - a.count);
    return list.length > 1 ? [{ id: ALL, title: "All", count: posts.length }, ...list] : [];
  }, [posts]);

  const visible = active === ALL ? posts : posts.filter((post) => post.categories.some((c) => c._id === active));
  const [lead, ...rest] = visible;
  const tall = rest.slice(0, 2);
  const library = rest.slice(2);
  const pages = Math.max(1, Math.ceil(library.length / PER_PAGE));
  const current = Math.min(Math.max(1, page), pages);
  const pageItems = library.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const pickCategory = (id: string) => {
    setActive(id);
    setPage(1);
    syncUrl(1);
  };
  const goTo = (n: number) => {
    setPage(n);
    syncUrl(n);
    gridTop.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  const closing = (from: string) => (
    <Band color="var(--o-blush)" from={from} className="pb-20 pt-16 sm:pt-20">
      <div className={SHELL}>
        <CtaPanel
          eyebrow="Put it into practice"
          title="Write in English by talking."
          description="Oravo turns what you say, in your accent or your own language, into clear, polished English in any app."
          primary={{ label: "Download Oravo free", href: "/download" }}
          secondary={{ label: "How it works", href: "/how-to-use" }}
          doodle="speech"
        />
      </div>
    </Band>
  );

  if (posts.length === 0) {
    return (
      <>
        <Band color="var(--o-paper)" from="var(--o-band-sand)" className="pb-24 pt-16 sm:pt-20">
          <div className={SHELL}>
            <EmptyState />
          </div>
        </Band>
        {closing("var(--o-paper)")}
      </>
    );
  }

  return (
    <>
      {/* The lead story sits on the seam between the hero and the paper band. */}
      <Band color="var(--o-paper)" from="var(--o-band-sand)" blend={260} className="pb-16 pt-4 sm:pb-20">
        <div className={SHELL}>
          {categories.length > 0 && (
            <Reveal className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="eyebrow">Browse by topic</p>
              <CategoryFilter categories={categories} active={active} onChange={pickCategory} />
            </Reveal>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {lead && (
                <Reveal y={24}>
                  <BlogCard post={lead} variant="feature" priority />
                </Reveal>
              )}

              {tall.length > 0 && (
                <div className="mt-6 grid gap-5 md:grid-cols-2 lg:mt-8 lg:gap-6">
                  {tall.map((post, i) => (
                    <Reveal key={post._id} delay={i * 0.08} className="h-full">
                      <BlogCard post={post} variant="tall" />
                    </Reveal>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Band>

      {library.length > 0 && (
        <Band color="var(--o-canvas)" from="var(--o-paper)" className="pb-20 pt-24 sm:pb-24">
          <div ref={gridTop} className={`${SHELL} scroll-mt-24`}>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Reveal>
                  <p className="eyebrow">Every article</p>
                </Reveal>
                <h2 className="display-2 mt-3 text-ink">
                  <RevealWords text="Fresh from the notebook" />
                </h2>
                <p className="mt-3 font-display text-[13.5px] text-ink-faint">
                  {library.length > PER_PAGE
                    ? `Showing ${(current - 1) * PER_PAGE + 1}–${(current - 1) * PER_PAGE + pageItems.length} of ${library.length} articles`
                    : `${library.length} ${library.length === 1 ? "article" : "articles"}`}
                </p>
              </div>
              <Parallax speed={20} className="hidden sm:block">
                <Doodle name="scribble" className="w-36" />
              </Parallax>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${active}-${current}`}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
              >
                {pageItems.map((post) => (
                  <div key={post._id} className="h-full">
                    <BlogCard post={post} variant="standard" />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {pages > 1 && <Pagination page={current} pages={pages} onGo={goTo} />}
          </div>
        </Band>
      )}

      {closing(library.length > 0 ? "var(--o-canvas)" : "var(--o-paper)")}
    </>
  );
}
