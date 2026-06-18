import { client } from '@/sanity/lib/client'
import { latestPostsQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'

export async function LatestArticles() {
  let posts = []

  try {
    posts = await client.fetch(latestPostsQuery)
  } catch (error) {
    console.error('Error fetching latest posts:', error)
    return null
  }

  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <section className="self-stretch py-20 overflow-hidden border-t border-[rgba(55,50,47,0.06)] flex flex-col justify-start items-start relative z-10">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1v12M1 7h12"
                  stroke="#37322F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="text-[#37322F] text-xs font-medium leading-3 font-sans">
              Latest Articles
            </span>
          </div>
          <h2 className="text-[#37322F] text-[32px] sm:text-[40px] font-stretch-semi-condensed font-medium leading-tight font-serif">
            From the Blog
          </h2>
          <p className="text-[#605A57] text-base font-normal leading-7 font-sans max-w-[600px]">
            Guides, tips, and insights on voice typing and productivity
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post: any) => {
            const imageUrl = post.mainImage
              ? urlForImage(post.mainImage).width(400).height(250).url()
              : '/placeholder.jpg'

            const hasAuthorImage = post.author?.image?.asset?._ref
            const authorImageUrl = hasAuthorImage
              ? urlForImage(post.author.image).width(40).height(40).url()
              : null

            return (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group flex flex-col gap-4 bg-white rounded-lg overflow-hidden border border-[rgba(55,50,47,0.12)] hover:shadow-[0px_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                {/* Image */}
                <div className="relative w-full h-[200px] overflow-hidden bg-[#F7F5F3]">
                  <Image
                    src={imageUrl}
                    alt={post.mainImage?.alt || post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-6 pt-0">
                  <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans line-clamp-2 group-hover:text-[#1877F2] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-[#605A57] text-sm font-normal leading-6 font-sans line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Author & Date */}
                  <div className="flex items-center gap-2 mt-2">
                    {hasAuthorImage && authorImageUrl && (
                      <div className="relative w-8 h-8 rounded-full overflow-hidden bg-[#F7F5F3] flex-shrink-0">
                        <Image
                          src={authorImageUrl}
                          alt={post.author?.name || 'Author'}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex flex-col min-w-0">
                      <span className="text-[#37322F] text-xs font-medium font-sans truncate">
                        {post.author?.name || 'Oravo Team'}
                      </span>
                      <span className="text-[#847971] text-xs font-normal font-sans whitespace-nowrap">
                        {format(new Date(post.publishedAt), 'MMM d, yyyy')}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* View All Link */}
        <div className="flex justify-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#E0DEDB] text-[#37322F] text-sm font-medium rounded-full hover:bg-[#F7F5F3] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            View All Articles
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12l4-4-4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
