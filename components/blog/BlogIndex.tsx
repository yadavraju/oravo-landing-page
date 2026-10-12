"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { Band } from "@/components/landing/Band";
import { Doodle } from "@/components/landing/Doodle";
import { Parallax } from "@/components/landing/Parallax";
import { Reveal, RevealWords } from "@/components/landing/Reveal";
import { CtaPanel, SHELL } from "@/components/landing/PageBlocks";
import { BlogCard, type BlogListPost } from "./BlogCard";

/*
 * The /blog front page: the lead story, a category filter (only when the posts
 * carry more than one category), then a deliberately uneven layout: two tall
 * features, a row of standard cards, and the rest as an archive list.
 */

const ALL = "all";

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
              on ? "text-paper" : "text-ink-soft hover:text-ink"
            }`}
          >
            {on && (
              <motion.span
                layoutId="blog-filter"
                className="absolute inset-0 rounded-lg bg-ink"
                transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            {!on && <span className="absolute inset-0 rounded-lg bg-raised/70 ring-1 ring-line" aria-hidden="true" />}
            <span className="relative">
              {category.title}
              <span className={`ml-1.5 tabular-nums ${on ? "text-paper/60" : "text-ink-faint"}`}>{category.count}</span>
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

export function BlogIndex({ posts }: { posts: BlogListPost[] }) {
  const [active, setActive] = useState(ALL);
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
  const standard = rest.slice(2, 8);
  const archive = rest.slice(8);

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
              <CategoryFilter categories={categories} active={active} onChange={setActive} />
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

      {standard.length > 0 && (
        <Band color="var(--o-canvas)" from="var(--o-paper)" className="pb-20 pt-24 sm:pb-24">
          <div className={SHELL}>
            <div className="flex items-end justify-between gap-6">
              <div>
                <Reveal>
                  <p className="eyebrow">More to read</p>
                </Reveal>
                <h2 className="display-2 mt-3 text-ink">
                  <RevealWords text="Fresh from the notebook" />
                </h2>
              </div>
              <Parallax speed={20} className="hidden sm:block">
                <Doodle name="scribble" className="w-36" />
              </Parallax>
            </div>
            <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {standard.map((post, i) => (
                <Reveal key={post._id} delay={(i % 3) * 0.08} className="h-full">
                  <BlogCard post={post} variant="standard" />
                </Reveal>
              ))}
            </div>
          </div>
        </Band>
      )}

      {archive.length > 0 && (
        <Band
          color="var(--o-paper)"
          from={standard.length > 0 ? "var(--o-canvas)" : "var(--o-paper)"}
          className="pb-20 pt-24 sm:pb-24"
        >
          <div className={`${SHELL} grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-14`}>
            <div>
              <Parallax speed={16} className="mb-4">
                <Doodle name="quote" className="w-24" />
              </Parallax>
              <Reveal>
                <p className="eyebrow">From the archive</p>
              </Reveal>
              <h2 className="display-2 mt-3 text-ink">
                <RevealWords text="Every article" />
              </h2>
              <Reveal delay={0.1}>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                  {archive.length} more {archive.length === 1 ? "guide" : "guides"} on dictation, productivity and writing in English.
                </p>
              </Reveal>
            </div>
            <Reveal>
              <div className="surface-solid divide-y divide-line overflow-hidden !rounded-2xl">
                {archive.map((post) => (
                  <BlogCard key={post._id} post={post} variant="row" />
                ))}
              </div>
            </Reveal>
          </div>
        </Band>
      )}

      {closing(archive.length === 0 && standard.length > 0 ? "var(--o-canvas)" : "var(--o-paper)")}
    </>
  );
}
