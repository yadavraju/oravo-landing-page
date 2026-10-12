"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Maximize2, Play, Volume2 } from "lucide-react";
import { useState } from "react";
import { Doodle } from "./Doodle";

/*
 * The Oravo Desktop tutorial in a warm player.
 *
 * Nothing loads from Loom until the visitor presses play: the poster is drawn
 * here (a sand screen, the hotkey doodle, a calm control bar), with Loom's own
 * thumbnail layered on top when it loads. Press play and the poster swaps for
 * the embed with autoplay on. Used on /how-to-use and in the homepage's
 * "Try both" Dictation tab.
 */

export const TUTORIAL_LOOM_ID = "d893aa4622244befa684ceeb6cb65935";

export function VideoTutorial({
  loomId = TUTORIAL_LOOM_ID,
  title = "Oravo Desktop, start to finish",
  eyebrow = "Video tutorial",
  note = "Set it up once, then press, speak and send in any app.",
  chapters = [],
  className = "",
}: {
  loomId?: string;
  title?: string;
  eyebrow?: string;
  note?: string;
  chapters?: string[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [playing, setPlaying] = useState(false);
  const [thumbOk, setThumbOk] = useState(true);
  const params = "autoplay=1&hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true";

  return (
    <figure className={`rounded-2xl bg-raised p-2 shadow-[0_0_0_1px_var(--o-line),0_40px_80px_-48px_rgba(51,48,42,0.6)] sm:p-2.5 ${className}`}>
      <div className="relative w-full overflow-hidden rounded-xl bg-sand" style={{ aspectRatio: "1.549" }}>
        <AnimatePresence initial={false}>
          {playing ? (
            <motion.iframe
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={`https://www.loom.com/embed/${loomId}?${params}`}
              title={`${eyebrow}: ${title}`}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : (
            <motion.button
              key="poster"
              type="button"
              onClick={() => setPlaying(true)}
              exit={{ opacity: 0 }}
              aria-label={`Play ${eyebrow.toLowerCase()}: ${title}`}
              className="group absolute inset-0 block h-full w-full cursor-pointer text-left"
            >
              {/* Drawn poster: dotted sand screen and the hotkey doodle. */}
              <span
                className="absolute inset-0"
                aria-hidden="true"
                style={{ backgroundImage: "radial-gradient(rgba(51,48,42,0.08) 1px, transparent 1px)", backgroundSize: "18px 18px" }}
              />
              <span className="absolute left-[8%] top-[14%] w-[22%] opacity-80" aria-hidden="true">
                <Doodle name="hotkey" />
              </span>
              <span className="absolute bottom-[22%] right-[8%] w-[20%] opacity-80" aria-hidden="true">
                <Doodle name="speech" />
              </span>
              {/* Loom's own frame, when it loads. */}
              {thumbOk && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`https://cdn.loom.com/sessions/thumbnails/${loomId}-00001.jpg`}
                  alt=""
                  loading="lazy"
                  onError={() => setThumbOk(false)}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              {thumbOk && <span className="absolute inset-0 bg-paper/15" aria-hidden="true" />}

              {/* Play */}
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="relative flex h-[68px] w-[68px] items-center justify-center rounded-full bg-cloud text-cloud-ink shadow-[0_14px_30px_-12px_rgba(13,84,128,0.55)] ring-1 ring-cloud-line transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20">
                  {!reduce && <span className="absolute -inset-2 animate-ping rounded-full border-2 border-cloud-line opacity-60 [animation-duration:2.4s]" aria-hidden="true" />}
                  <Play aria-hidden="true" className="ml-1 h-7 w-7 fill-current" />
                </span>
              </span>

              {/* Title chip */}
              <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-lg bg-raised/90 px-2.5 py-1.5 font-display text-[12px] font-semibold text-ink shadow-[0_0_0_1px_var(--o-line)] sm:left-4 sm:top-4">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                {eyebrow}
              </span>

              {/* A calm control bar, so the poster reads as a player. */}
              <span className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-lg bg-raised/90 px-3 py-2 shadow-[0_0_0_1px_var(--o-line)] sm:inset-x-4 sm:bottom-4" aria-hidden="true">
                <Play className="h-3.5 w-3.5 fill-ink text-ink" />
                <span className="relative h-1 flex-1 overflow-hidden rounded-full bg-line">
                  <span className="absolute inset-y-0 left-0 w-[6%] rounded-full bg-brand" />
                </span>
                <Volume2 className="h-3.5 w-3.5 text-ink-soft" />
                <Maximize2 className="h-3.5 w-3.5 text-ink-soft" />
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <figcaption className="px-2 pb-1 pt-3">
        <span className="flex items-center justify-between gap-3 font-display text-[12.5px]">
          <span className="font-semibold text-ink">{title}</span>
          {!playing && (
            <button type="button" onClick={() => setPlaying(true)} className="shrink-0 font-semibold text-primary-500 underline-offset-4 hover:underline">
              Watch
            </button>
          )}
        </span>
        {note && <span className="mt-1 block font-display text-[12px] text-ink-faint">{note}</span>}
        {chapters.length > 0 && (
          <span className="mt-2.5 flex flex-wrap gap-1.5">
            {chapters.map((c, i) => (
              <span key={c} className="inline-flex items-center gap-1.5 rounded-md bg-canvas px-2 py-1 font-display text-[11.5px] text-ink-soft ring-1 ring-line">
                <span className="font-semibold tabular-nums text-brand">{i + 1}</span>
                {c}
              </span>
            ))}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
