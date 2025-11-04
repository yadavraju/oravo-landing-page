import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'
import { format } from 'date-fns'

interface BlogCardProps {
  post: {
    _id: string
    title: string
    slug: { current: string }
    excerpt: string
    mainImage: any
    publishedAt: string
    author: {
      name: string
      image: any
    }
  }
}

export function BlogCard({ post }: BlogCardProps) {
  const imageUrl = post.mainImage
    ? urlForImage(post.mainImage).width(1200).height(630).url()
    : '/placeholder.jpg'

  const authorImageUrl = post.author?.image
    ? urlForImage(post.author.image).width(100).height(100).url()
    : '/placeholder-user.jpg'

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group block bg-white rounded-lg overflow-hidden border border-[rgba(55,50,47,0.12)] hover:shadow-[0px_4px_12px_rgba(55,50,47,0.08)] transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Image */}
        <div className="relative w-full md:w-[280px] h-[200px] md:h-[160px] flex-shrink-0 overflow-hidden rounded-lg bg-[rgba(55,50,47,0.04)]">
          <Image
            src={imageUrl}
            alt={post.mainImage?.alt || post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between gap-3">
          <div>
            <h3 className="text-[#37322F] text-xl sm:text-2xl font-medium font-serif leading-tight mb-2 group-hover:text-[#49423D] transition-colors">
              {post.title}
            </h3>
            <p className="text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans line-clamp-2">
              {post.excerpt}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {post.author?.image && (
              <Image
                src={authorImageUrl}
                alt={post.author?.name || 'Author'}
                width={32}
                height={32}
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
    </Link>
  )
}
