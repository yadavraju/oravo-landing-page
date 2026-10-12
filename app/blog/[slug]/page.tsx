import { client } from '@/sanity/lib/client'
import { postQuery, postPathsQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import { ArticleLayout } from '@/components/blog/ArticleLayout'
import type { BlogListPost } from '@/components/blog/BlogCard'
import { toListPosts } from '@/components/blog/toListPost'
import { MarketingShell } from '@/components/landing/MarketingShell'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { groq } from 'next-sanity'
import { buildBreadcrumbJsonLd } from '@/lib/breadcrumbs'

// Up to three other published posts, the ones sharing the most categories first.
const relatedPostsQuery = groq`*[
  _type == "post" &&
  defined(slug.current) &&
  !(_id in path("drafts.**")) &&
  publishedAt <= now() &&
  slug.current != $slug
] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  _createdAt,
  publishedAt,
  author->{ name, image },
  categories[]->{ _id, title },
  "shared": count((categories[]._ref)[@ in $categoryIds])
} | order(shared desc, publishedAt desc) [0...3]`

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery)
  return posts
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch(postQuery, { slug })

  if (!post) {
    return {}
  }

  const ogImage = post.mainImage
    ? urlForImage(post.mainImage).width(1200).height(630).url()
    : '/og-image.png'

  // Use SEO fields if available, fallback to default values
  const metaTitle = post.seo?.metaTitle || `${post.title} | Oravo.ai Blog`
  const metaDescription = post.seo?.metaDescription || post.excerpt
  const keywords = post.seo?.keywords || []

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: metaDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author?.name || 'Oravo Team'],
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo?.metaTitle || post.title,
      description: metaDescription,
      images: [ogImage],
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = await client.fetch(postQuery, { slug })

  if (!post) {
    notFound()
  }

  const imageUrl = post.mainImage
    ? urlForImage(post.mainImage).width(1200).height(630).url()
    : '/placeholder.jpg'

  const authorImageUrl = post.author?.image
    ? urlForImage(post.author.image).width(120).height(120).url()
    : null

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "https://oravo.ai" },
    { name: "Blog", url: "https://oravo.ai/blog" },
    { name: post.title, url: `https://oravo.ai/blog/${slug}` },
  ]);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.seo?.metaDescription || post.excerpt || '',
    image: imageUrl,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'Oravo Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Oravo',
      logo: {
        '@type': 'ImageObject',
        url: 'https://oravo.ai/og-image.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://oravo.ai/blog/${slug}`,
    },
  }

  let related: BlogListPost[] = []
  try {
    related = toListPosts(
      await client.fetch(relatedPostsQuery, {
        slug,
        categoryIds: (post.categories ?? []).map((category: { _id: string }) => category._id),
      }),
    )
  } catch (e) {
    console.error('Error fetching related posts:', e)
  }

  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <ArticleLayout
        article={{
          title: post.title,
          excerpt: post.excerpt,
          imageUrl: post.mainImage ? urlForImage(post.mainImage).width(1600).height(900).url() : null,
          imageAlt: post.mainImage?.alt,
          publishedAt: post.publishedAt,
          authorName: post.author?.name || 'Oravo Team',
          authorImageUrl: post.author?.image ? authorImageUrl : null,
          authorBio: post.author?.bio,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          categories: (post.categories ?? []).filter((c: any) => c?._id && c?.title),
          body: post.body,
          related,
        }}
      />
    </MarketingShell>
  )
}
