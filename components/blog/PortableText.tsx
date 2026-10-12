import {
  PortableText as PortableTextReact,
  type PortableTextComponents,
} from '@portabletext/react'
import Image from 'next/image'
import type { ReactNode } from 'react'
import { urlForImage } from '@/sanity/lib/image'

/*
 * Article body renderer. Warm paper reading styles: Inter body at a
 * comfortable size and leading, serif headings with anchor ids (for the table
 * of contents), quotes with a terracotta rule, code on a canvas sheet, framed
 * images and hairline tables. The reading measure is set by the container.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

export type Heading = { id: string; text: string; level: 2 | 3 }

const blockText = (block: any): string =>
  Array.isArray(block?.children) ? block.children.map((child: any) => child?.text ?? '').join('') : ''

const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 64)

/** h1/h2 become level 2, h3 level 3. Ids are unique and stable for a body. */
export function extractHeadings(body: any): (Heading & { key: string })[] {
  if (!Array.isArray(body)) return []
  const seen = new Map<string, number>()
  const out: (Heading & { key: string })[] = []
  body.forEach((block: any, index: number) => {
    if (block?._type !== 'block' || !['h1', 'h2', 'h3'].includes(block.style)) return
    const text = blockText(block).trim()
    if (!text) return
    const base = slugify(text) || `section-${index + 1}`
    const n = seen.get(base) ?? 0
    seen.set(base, n + 1)
    out.push({ id: n ? `${base}-${n + 1}` : base, text, level: block.style === 'h3' ? 3 : 2, key: block._key ?? String(index) })
  })
  return out
}

/** Rough reading time at 220 words a minute, never less than one minute. */
export function estimateReadingMinutes(body: any): number {
  if (!Array.isArray(body)) return 1
  const words = body.reduce((sum: number, block: any) => sum + (blockText(block).match(/\S+/g)?.length ?? 0), 0)
  return Math.max(1, Math.round(words / 220))
}

/** Sanity asset refs carry the pixel size: image-<id>-<w>x<h>-<ext>. */
function imageSize(ref: string | undefined): { width: number; height: number } {
  const match = ref?.match(/-(\d+)x(\d+)-/)
  return match ? { width: Number(match[1]), height: Number(match[2]) } : { width: 1600, height: 900 }
}

const H2 = 'mt-14 mb-5 scroll-mt-28 font-serif text-[1.75rem] leading-[1.18] tracking-[-0.018em] text-ink sm:text-[2rem]'
const H3 = 'mt-10 mb-3 scroll-mt-28 font-serif text-[1.35rem] leading-[1.25] tracking-[-0.012em] text-ink sm:text-[1.5rem]'
const BODY = 'text-[17px] leading-[1.8] text-ink sm:text-[18px]'

function buildComponents(ids: Map<string, string>): PortableTextComponents {
  const idFor = (value: any) => ids.get(value?._key) ?? undefined
  return {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) return null
        const { width, height } = imageSize(value.asset._ref)
        const w = Math.min(width, 1600)
        const h = Math.round((w / width) * height)
        return (
          <figure className="my-10 sm:-mx-6 lg:-mx-12">
            <div className="overflow-hidden rounded-2xl bg-canvas ring-1 ring-line">
              <Image
                src={urlForImage(value).width(w).url()}
                alt={value.alt || ''}
                width={w}
                height={h}
                sizes="(min-width: 1024px) 820px, 100vw"
                className="h-auto w-full"
              />
            </div>
            {(value.caption || value.alt) && (
              <figcaption className="mt-3 text-center font-display text-[12.5px] text-ink-faint">{value.caption || value.alt}</figcaption>
            )}
          </figure>
        )
      },
      code: ({ value }) => {
        if (!value?.code) return null
        return (
          <figure className="my-8 overflow-hidden rounded-xl bg-canvas shadow-[0_0_0_1px_var(--o-line)]">
            <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-ink/15" />
                <span className="h-2 w-2 rounded-full bg-ink/15" />
                <span className="h-2 w-2 rounded-full bg-ink/15" />
              </span>
              {value.language && <span className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">{value.language}</span>}
            </div>
            <pre className="overflow-x-auto px-5 py-4 font-mono text-[13.5px] leading-[1.7] text-ink">
              <code>{value.code}</code>
            </pre>
          </figure>
        )
      },
      table: ({ value }) => {
        // Sanity table plugin structure: { rows: [{cells: ['cell1', 'cell2', ...]}, ...] }
        const rows = value?.rows
        if (!rows || rows.length === 0) return null
        const hasData = rows.some((row: any) => row?.cells && row.cells.length > 0)
        if (!hasData) return null

        return (
          <div className="my-10 overflow-x-auto rounded-xl bg-raised shadow-[0_0_0_1px_var(--o-line)] sm:-mx-6 lg:-mx-12">
            <table className="w-full border-collapse text-left text-[14.5px]">
              <thead>
                <tr className="bg-canvas">
                  {rows[0]?.cells?.map((cell: string, i: number) => (
                    <th key={i} className="whitespace-nowrap border-b border-line px-4 py-3 font-display text-[11.5px] font-semibold uppercase tracking-[0.1em] text-ink-soft">
                      {cell || ''}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.slice(1).map((row: { cells: string[] }, rowIndex: number) => (
                  <tr key={rowIndex} className="border-b border-line transition-colors last:border-b-0 hover:bg-canvas/50">
                    {row.cells?.map((cell: string, cellIndex: number) => (
                      <td key={cellIndex} className={`px-4 py-3 align-top leading-relaxed ${cellIndex === 0 ? 'font-medium text-ink' : 'text-ink-soft'}`}>
                        {cell || ''}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      },
    },
    block: {
      // The article title is the page's h1, so body h1s render as section headings.
      h1: ({ children, value }) => <h2 id={idFor(value)} className={H2}>{children}</h2>,
      h2: ({ children, value }) => <h2 id={idFor(value)} className={H2}>{children}</h2>,
      h3: ({ children, value }) => <h3 id={idFor(value)} className={H3}>{children}</h3>,
      h4: ({ children }) => <h4 className="mb-2 mt-8 font-display text-[17px] font-semibold tracking-[-0.01em] text-ink">{children}</h4>,
      blockquote: ({ children }) => (
        <blockquote className="relative my-10 border-l-[3px] border-brand py-1 pl-6 sm:pl-8">
          <span aria-hidden="true" className="absolute -top-5 left-5 font-serif text-[64px] leading-none text-brand/25 sm:left-7">
            &ldquo;
          </span>
          <p className="relative font-serif text-[1.3rem] leading-[1.5] tracking-[-0.01em] text-ink sm:text-[1.45rem]">{children}</p>
        </blockquote>
      ),
      normal: ({ children }) => <p className={`${BODY} mb-6`}>{children}</p>,
    },
    list: {
      bullet: ({ children }) => <ul className="mb-7 space-y-2.5 pl-1">{children}</ul>,
      number: ({ children }) => <ol className="mb-7 space-y-2.5 pl-1 [counter-reset:item]">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => (
        <li className={`${BODY} relative pl-6`}>
          <span aria-hidden="true" className="absolute left-0.5 top-[0.72em] h-[7px] w-[7px] rotate-45 rounded-[2px] bg-brand/70" />
          {children}
        </li>
      ),
      number: ({ children }) => (
        <li className={`${BODY} relative pl-9 [counter-increment:item] before:absolute before:left-0 before:top-[0.2em] before:flex before:h-6 before:w-6 before:items-center before:justify-center before:rounded-md before:bg-canvas before:font-display before:text-[12px] before:font-bold before:text-ink-soft before:shadow-[0_0_0_1px_var(--o-line)] before:content-[counter(item)]`}>
          {children}
        </li>
      ),
    },
    marks: {
      strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      code: ({ children }) => (
        <code className="rounded-md bg-canvas px-1.5 py-0.5 font-mono text-[0.86em] text-ink ring-1 ring-line">{children}</code>
      ),
      link: ({ children, value }) => {
        const href: string = value?.href ?? '#'
        const external = !href.startsWith('/') && !href.startsWith('#')
        return (
          <a
            href={href}
            rel={external ? 'noreferrer noopener' : undefined}
            className="font-medium text-primary-500 underline decoration-primary-500/30 decoration-[1.5px] underline-offset-[3px] transition-colors hover:decoration-primary-500"
          >
            {children}
          </a>
        )
      },
    },
  }
}

export function PortableText({ value }: { value: any }): ReactNode {
  const ids = new Map(extractHeadings(value).map((heading) => [heading.key, heading.id]))
  return <PortableTextReact value={value} components={buildComponents(ids)} />
}
