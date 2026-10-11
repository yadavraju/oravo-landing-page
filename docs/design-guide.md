# Oravo design guide: warm bands

The landing site shares its vocabulary with the video-shala marketing site:
warm paper grounds, ink type, hairline-ringed surfaces and rectangular
controls. Oravo adds solid warm colour bands that blend into each other, and
parallax shapes that move at their own speed while you scroll. The tokens
live in `app/globals.css` under "Oravo warm design system".

## Type

| Role | Face | How to use |
| --- | --- | --- |
| Headlines | Hedvig Letters Serif 400 | `display-1` (hero), `display-2` (section), `display-3` (card), or `font-serif` |
| Subtitles, eyebrows, buttons | Plus Jakarta Sans | `subtitle`, `eyebrow`, `font-display` |
| Running text, UI | Inter | default `font-sans` |

- Hero headlines are two blocks, each on its own line (`<span className="block">`).
- Use one serif headline per section, at weight 400 only.
- `.text-accent` marks the one phrase per screen that carries the promise.

## Colour

No gradients. Every ground is a solid colour. The only blending is the soft
edge where one band meets the next.

| Token | Value | Use |
| --- | --- | --- |
| `sand` | `#F3E4D2` | Hero and closing CTA panel |
| `sand-deep` | `#EAD4BD` | Parallax shapes on sand |
| `paper` | `#FEFDFB` | Open sections |
| `canvas` | `#F7F5F2` | Set-in sections, insets inside cards |
| `clay` | `#F0DCCA` | Warm feature band (translation) |
| `espresso` | `#2A211B` | The one dark band (accent proof) |
| `blush` | `#FBF2EE` | CTA and footer ground |
| `ink` / `ink-soft` / `ink-faint` | `#33302A` / `#6B655B` / `#9C958A` | Text |
| `line` | `#E7E2DA` | Hairlines and rings |
| `brand` | `#C4572F` | Single accent, at most once per viewport |

## Bands

Wrap each full-width section in `<Band color from>` (`components/landing/Band.tsx`).
`from` is the colour of the band above, and the top `blend` px (160 by default,
220 into and out of espresso) fade from it. Content sits in the shell:
`mx-auto w-full max-w-6xl px-5 sm:px-8`.

## Surfaces

- `.surface-solid`: a white card with 12px radius, a 1px `line` ring and almost no shadow.
- `.surface`: the same card, slightly translucent with a frosted blur. Use it over shapes or colour.
- `.surface-interactive`: lifts 2px and darkens the ring on hover.
- `.chip`: the header-key shape at label size (8px radius, 2px white bevel, white-to-quarter-white fill).

Prefer one surface divided by hairlines (`divide-line`) over a row of separate floating boxes.

## Buttons

These are rectangular, never capsules, and the same shapes as video-shala.

- `.btn-primary`: solid ink with a 2px ink border, 48px tall, 8px radius. It lifts 1px on hover.
- `.btn-secondary`: a glass key with a 2px white border and a white-to-quarter-white fill, so the band shows through.

The header uses the same two shapes at 40px. It has exactly one solid button.

## Motion

| Pattern | Where | Implementation |
| --- | --- | --- |
| Parallax | Hero shapes, demos, dark band | `<Parallax speed>`. Positive speeds drift faster than the scroll, negative ones lag behind |
| Word-rise headline | Section headlines | `<RevealWords>` |
| Fade-up | Copy and cards | `<Reveal>` (12px rise, 620ms, fires once) |
| Product story loop | Hero | `AccentToSlackDemo` |
| Pain loop | Section 2 | `AgitationSection` |
| Marquee | Logos | Two counter-running rows, greyscale until hover |

Loops pause off-screen. Everything settles to its finished state under
`prefers-reduced-motion`.
