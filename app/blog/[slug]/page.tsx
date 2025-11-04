import { client } from '@/sanity/lib/client'
import { postQuery, postPathsQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@/components/blog/PortableText'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery)
  return posts
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await client.fetch(postQuery, { slug: params.slug })

  if (!post) {
    return {}
  }

  const ogImage = post.mainImage
    ? urlForImage(post.mainImage).width(1200).height(630).url()
    : '/og-image.png'

  return {
    title: `${post.title} | Oravo.ai Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author?.name || 'Oravo Team'],
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const post = await client.fetch(postQuery, { slug: params.slug })

  if (!post) {
    notFound()
  }

  const imageUrl = post.mainImage
    ? urlForImage(post.mainImage).width(1200).height(630).url()
    : '/placeholder.jpg'

  const authorImageUrl = post.author?.image
    ? urlForImage(post.author.image).width(100).height(100).url()
    : '/placeholder-user.jpg'

  return (
    <article className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Main container with proper margins */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          <div className="self-stretch pt-[9px] overflow-hidden flex flex-col justify-start items-start gap-0 relative z-10">
            {/* Navigation */}
            <div className="w-full px-4 sm:px-6 lg:px-12 py-4 border-b border-[rgba(55,50,47,0.06)] flex justify-between items-center">
              <Link
                href="/"
                className="text-[#37322F] text-lg font-semibold font-sans hover:text-[#605A57] transition-colors"
              >
                Oravo.ai
              </Link>
              <Link
                href="/blog"
                className="text-[#605A57] text-sm font-medium font-sans hover:text-[#37322F] transition-colors"
              >
                ← Back to Blog
              </Link>
            </div>

            {/* Header Section */}
            <div className="w-full px-4 sm:px-6 lg:px-20 pt-12 pb-8 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center gap-6">
              <div className="w-full max-w-[720px] flex flex-col justify-start items-start gap-4">
                <h1 className="w-full text-[#37322F] text-[32px] sm:text-[40px] md:text-[48px] font-medium leading-tight font-serif">
                  {post.title}
                </h1>

                <div className="flex items-center gap-3">
                  {post.author?.image && (
                    <Image
                      src={authorImageUrl}
                      alt={post.author?.name || 'Author'}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  )}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-sm">
                    <span className="text-[#37322F] font-medium font-sans">
                      {post.author?.name || 'Oravo Team'}
                    </span>
                    <span className="hidden sm:inline text-[#605A57]">·</span>
                    <span className="text-[#605A57] font-sans">
                      {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            {post.mainImage && (
              <div className="w-full px-4 sm:px-6 lg:px-20 py-8 border-b border-[rgba(55,50,47,0.12)]">
                <div className="w-full max-w-[720px] mx-auto relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden bg-[rgba(55,50,47,0.04)]">
                  <Image
                    src={imageUrl}
                    alt={post.mainImage?.alt || post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            )}

            {/* Content */}
            <div className="w-full px-4 sm:px-6 lg:px-20 py-12">
              <div className="w-full max-w-[720px] mx-auto">
                <div className="prose-oravo">
                  <PortableText value={post.body} />
                </div>

                {/* Categories */}
                {post.categories && post.categories.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-[rgba(55,50,47,0.12)]">
                    <p className="text-sm font-medium text-[#605A57] mb-3 font-sans">
                      Categories:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.categories.map((category: any) => (
                        <span
                          key={category._id}
                          className="px-4 py-2 bg-white border border-[rgba(55,50,47,0.12)] rounded-full text-sm font-medium text-[#37322F] font-sans"
                        >
                          {category.title}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Author Bio */}
                {post.author?.bio && (
                  <div className="mt-12 p-6 bg-white border border-[rgba(55,50,47,0.12)] rounded-lg">
                    <div className="flex items-start gap-4">
                      <Image
                        src={authorImageUrl}
                        alt={post.author.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <p className="text-lg font-semibold text-[#37322F] mb-2 font-sans">
                          About {post.author.name}
                        </p>
                        <div className="text-[#605A57] text-sm leading-relaxed font-sans">
                          <PortableText value={post.author.bio} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
