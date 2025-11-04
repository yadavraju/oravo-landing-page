import { client } from '@/sanity/lib/client'
import { postsQuery } from '@/sanity/lib/queries'
import { BlogCard } from '@/components/blog/BlogCard'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Oravo.ai',
  description:
    'Learn about voice dictation, productivity tips, and AI-powered writing tools from the Oravo.ai team.',
}

// Disable caching for development
export const revalidate = 0

export default async function BlogPage() {
  let posts = []
  let error = null

  try {
    posts = await client.fetch(postsQuery)
    console.log('Fetched posts:', posts)
  } catch (e) {
    error = e instanceof Error ? e.message : 'Failed to fetch posts'
    console.error('Error fetching posts:', e)
  }

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Main container with proper margins */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-start items-start gap-8 relative z-10">
            {/* Navigation */}
            <div className="w-full px-4 sm:px-6 lg:px-12 py-4 border-b border-[rgba(55,50,47,0.06)] flex justify-between items-center">
              <Link
                href="/"
                className="text-[#37322F] text-lg font-semibold font-sans hover:text-[#605A57] transition-colors"
              >
                Oravo.ai
              </Link>
              <Link
                href="/"
                className="text-[#605A57] text-sm font-medium font-sans hover:text-[#37322F] transition-colors"
              >
                ← Back to Home
              </Link>
            </div>

            {/* Hero Section */}
            <div className="w-full px-4 sm:px-6 lg:px-12 pt-12 pb-16 flex flex-col justify-center items-center gap-4">
              <div className="w-full max-w-[720px] flex flex-col justify-center items-center gap-4">
                <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)]">
                  <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1v12M1 7h12" stroke="#37322F" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="text-center text-[#37322F] text-xs font-medium leading-3 font-sans">
                    Blog
                  </div>
                </div>

                <h1 className="w-full text-center text-[#37322F] text-[40px] sm:text-[48px] md:text-[60px] font-stretch-semi-condensed font-medium leading-tight font-serif">
                  From the Blog
                </h1>

                <p className="w-full text-center text-[#605A57] text-base sm:text-lg font-normal leading-7 font-sans">
                  Tips, insights, and best practices for voice dictation and productivity
                </p>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="w-full px-4 sm:px-6 lg:px-12 py-12 border-t border-[rgba(55,50,47,0.12)]">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                  <h3 className="text-red-800 font-bold mb-2">Error Loading Posts</h3>
                  <p className="text-red-600 text-sm">{error}</p>
                  <p className="text-red-600 text-sm mt-2">
                    Check your .env.local file and make sure NEXT_PUBLIC_SANITY_PROJECT_ID is correct.
                  </p>
                </div>
              )}

              {posts && posts.length > 0 ? (
                <div className="flex flex-col gap-8">
                  {posts.map((post: any) => (
                    <BlogCard key={post._id} post={post} />
                  ))}
                </div>
              ) : !error ? (
                <div className="text-center py-20">
                  <h2 className="text-2xl font-bold text-[#37322F] mb-4 font-serif">
                    No blog posts yet
                  </h2>
                  <p className="text-[#605A57] mb-8 font-sans">
                    Make sure your post is published in Sanity Studio.
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
