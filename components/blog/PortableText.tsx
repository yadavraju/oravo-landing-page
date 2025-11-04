import {
  PortableText as PortableTextReact,
  type PortableTextComponents,
} from '@portabletext/react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-10 relative w-full h-[400px] rounded-lg overflow-hidden bg-[rgba(55,50,47,0.04)]">
          <Image
            src={urlForImage(value).width(1200).height(600).url()}
            alt={value.alt || ' '}
            fill
            className="object-cover"
          />
        </div>
      )
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-[#37322F] text-[32px] sm:text-[36px] font-medium font-serif leading-tight mt-12 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-[#37322F] text-[28px] sm:text-[32px] font-medium font-serif leading-tight mt-10 mb-5">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[#37322F] text-[24px] sm:text-[28px] font-medium font-serif leading-tight mt-8 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-[#37322F] text-[20px] sm:text-[24px] font-medium font-serif leading-tight mt-6 mb-3">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-[3px] border-[#37322F] pl-6 py-3 my-8 italic text-[#605A57] text-lg font-sans">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-[#37322F] text-base sm:text-lg font-normal leading-[1.75] font-sans mb-6">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-3 mb-6 pl-6">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-3 mb-6 pl-6">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-[#37322F] text-base sm:text-lg font-normal leading-[1.75] font-sans relative pl-2 before:content-['•'] before:absolute before:left-[-1rem] before:text-[#605A57]">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="text-[#37322F] text-base sm:text-lg font-normal leading-[1.75] font-sans list-decimal">
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-[#37322F]">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-[#37322F]">{children}</em>
    ),
    code: ({ children }) => (
      <code className="bg-[rgba(55,50,47,0.08)] px-2 py-0.5 rounded text-sm font-mono text-[#37322F] border border-[rgba(55,50,47,0.12)]">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-[#37322F] underline decoration-[rgba(55,50,47,0.3)] underline-offset-2 hover:decoration-[#37322F] transition-all font-medium"
        >
          {children}
        </a>
      )
    },
  },
}

export function PortableText({ value }: { value: any }) {
  return <PortableTextReact value={value} components={components} />
}
