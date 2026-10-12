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
| `mist` | `#E3EBEE` | A whisper of sky blue (~10%) over paper; the "cool" band (accent proof). Use instead of dark bands |
| `espresso` | `#2A211B` | Text-dark accents only; avoid as a section or stage background |
| `blush` | `#FBF2EE` | CTA and footer ground |
| `ink` / `ink-soft` / `ink-faint` | `#33302A` / `#6B655B` / `#9C958A` | Text |
| `line` | `#E7E2DA` | Hairlines and rings |
| `primary-500` / `primary-600` | `#0F6A9E` / `#0C5A87` | Primary action (sky-blue, matches the desktop app). Buttons, active states, links |
| `brand` | `#C4572F` | Single accent, at most once per viewport (the hero phrase, numbering, doodle accent strokes) |

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

- `.frame-dotted`: a dashed hairline frame with "+" registration marks at two corners. Use it to frame interactive stages ("try it" areas) so they read as a workspace.
- `.paper-ruled`: warm note paper with faint ruled lines (testimonial cards, notes).

Prefer one surface divided by hairlines (`divide-line`) over a row of separate floating boxes, and vary
section composition (split layouts, decks, stages, overlapping cards) rather than stacking "title then grid"
everywhere.

## Buttons

These are rectangular, never capsules, and the same shapes as video-shala.

- `.btn-primary`: solid sky-blue (`--o-primary`) with a 2px border in the same colour, 48px tall, 8px radius. It lifts 1px on hover.
- `.btn-secondary`: a glass key with a 2px warm-white border and a fill that lets the band show through.
- `.btn-neutral`: quiet warm grey, for CTAs inside or under a section (e.g. "Download Dictation") that should not compete with the page's primary action.

The header follows video-shala's nav: a three-column grid with the menus on
the true centre line, identical rectangular keys, menus that open on hover,
click or focus (120ms close delay), one solid Download button, transparent at
rest and a canvas shelf once scrolled. On phones it is a plain menu icon
with a full-width drawer.

## Motion

| Pattern | Where | Implementation |
| --- | --- | --- |
| Parallax | Hero shapes, demos, dark band | `<Parallax speed>`. Positive speeds drift faster than the scroll, negative ones lag behind |
| Word-rise headline | Section headlines | `<RevealWords>` |
| Fade-up | Copy and cards | `<Reveal>` (12px rise, 620ms, fires once) |
| Keyboard vs. voice | Hero (first section under it) | `EmailComparisonSection` |
| Drawn line art | One piece per section | `<Doodle name>`: strokes trace in on first view, then the piece floats and sways on a slow loop while its accent stroke erases and re-sketches; drifts with `<Parallax>` |
| Pain loop | Section 2 | `AgitationSection` |
| Marquee | Logos | Two counter-running `w-max` rows, list doubled so -50% lands on the seam, edges masked, greyscale until hover |

Loops pause off-screen. Everything settles to its finished state under
`prefers-reduced-motion`.

## Pages

- `/`: homepage bands, top to bottom: hero (sand), why typing is the bottleneck + logos + trusted-by (paper), try both products (canvas: interactive Dictation and Notetaker), the real problem (paper), Press. Speak. Done. (clay), Slack accent demo (paper), translation showcase (sand), accent proof (espresso), speak once (paper), features (canvas), made for you (paper), testimonial deck (canvas), switch from Wispr Flow + ask an AI (clay), blog highlights (paper), CTA and footer (blush).
- `/pricing`: plans (video-shala layout: cycle switch, plan cards with a "Most popular" strip) and the FAQ beneath.
- `/faq`: the full FAQ. Content lives in `lib/faq.ts`, shared with `/pricing` and their FAQPage JSON-LD.
- `/llms.txt`: plain-text site summary for AI assistants (replaces the old human/agent toggle).
