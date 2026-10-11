# Oravo design guide: liquid glass

The landing site uses a warm-paper ground with translucent glass surfaces
floating over slow-moving liquid colour. The tokens live in
`app/globals.css` under "Oravo liquid-glass design system".

## Type

Shared with the video-shala marketing site. All three faces are self-hosted
through `next/font` in `app/layout.tsx`.

| Role | Face | How to use |
| --- | --- | --- |
| Headlines | Hedvig Letters Serif 400 | `display-1` (hero), `display-2` (section), `display-3` (card), or `font-serif` |
| Subtitles, eyebrows, buttons | Plus Jakarta Sans | `subtitle`, `eyebrow`, `font-display` |
| Running text, UI | Inter | default `font-sans` |

Rules:
- Use one serif headline per section. Never set the serif in bold. It ships at weight 400 only.
- Headlines fit on two lines on desktop. If one wraps to three, shorten the copy.
- Use `.text-liquid` on at most one phrase per screen (the hero's second line).
- The legacy `.font-instrument-serif` class now maps to Hedvig, so older pages pick up the new face.

## Colour

| Token | Value | Tailwind |
| --- | --- | --- |
| Canvas (page ground) | `#F7F5F2` | `bg-canvas` |
| Ink | `#2B2824` | `text-ink` |
| Ink soft (body) | `#625C54` | `text-ink-soft` |
| Ink faint (meta) | `#958D82` | `text-ink-faint` |
| Brand accent | `#F2661C` | `bg-brand`, `text-brand` |
| Liquid hues | peach `#FFC8A6`, lilac `#D8CBFF`, sky `#C7E4FB`, mint `#CDEEDD` | used only as blurred washes |

Liquid hues never carry text and never appear as flat fills.

## Surfaces

- `.glass`: the default card. Translucent white, 22px backdrop blur, a white hairline, and a soft three-layer shadow.
- `.glass-strong`: the same, but more opaque. Use it for dense content such as app windows and forms.
- `.glass-pill`: a fully rounded glass chip for badges and social proof.
- `.glass-rim`: add it to any glass element for the specular gradient edge, brighter at the top left.
- `.glass-dark`: a smoked-glass panel for the single high-contrast moment on a page (the accent proof panel).

Radii: 9999px for pills and buttons, 22–28px for cards, 32–40px for large panels.
Glass needs colour behind it to read as glass. The homepage mounts one fixed
`<LiquidBackground />` behind everything, and the hero and CTA add their own
stronger wash.

## Buttons

- `.btn-liquid`: the primary action. A dark ink pill with a liquid highlight that rolls across it on hover.
- `.btn-glass`: the secondary action, with the same hover behaviour on glass.

The visitor's own platform gets `btn-liquid`. See the `glass` variant of `DownloadButtons`.

## Motion

Use one easing curve for every entrance: `cubic-bezier(0.16, 1, 0.3, 1)`
(`ease-entrance` in Tailwind, `var(--o-ease)` in CSS).

| Pattern | Where | Implementation |
| --- | --- | --- |
| Liquid drift | Backgrounds | `.liquid-blob` morphs border-radius and position over 26–36s |
| Word-rise headline | Every section headline | `<RevealWords>` in `components/landing/Reveal.tsx` |
| Blur-to-sharp entrance | Cards, copy | `<Reveal>` (rise of 24px plus a blur(8px) settle, fires once) |
| Product story loop | Hero | `AccentToSlackDemo`: listen, then polish, then type, then send, across 3 speakers |
| Pain loop | Section 2 | `AgitationSection`: a draft that keeps being rewritten while the clock runs |
| Rolling highlight | Buttons | `::before` radial gradients slide across on hover |
| Marquee | Logos | Two counter-running rows with an edge fade mask; logos are greyscale until hover |

Every animation stops when its section is out of view (`useInView`) and
collapses to the finished state under `prefers-reduced-motion`.
