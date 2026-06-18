import { groq } from 'next-sanity'

// Query for published posts only (excludes drafts and future-scheduled posts)
export const postsQuery = groq`*[
  _type == "post" &&
  defined(slug.current) &&
  !(_id in path("drafts.**")) &&
  publishedAt <= now()
] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  _createdAt,
  publishedAt,
  author->{
    name,
    image
  },
  categories[]->{
    _id,
    title
  }
}`

// Query for latest 3 posts (for homepage)
export const latestPostsQuery = groq`*[
  _type == "post" &&
  defined(slug.current) &&
  !(_id in path("drafts.**")) &&
  publishedAt <= now()
] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  author->{
    name,
    image
  }
}`

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  _updatedAt,
  title,
  slug,
  excerpt,
  mainImage,
  body,
  _createdAt,
  publishedAt,
  author->{
    name,
    image,
    bio
  },
  categories[]->{
    _id,
    title
  },
  seo {
    metaTitle,
    metaDescription,
    keywords
  }
}`

export const postPathsQuery = groq`*[
  _type == "post" &&
  defined(slug.current) &&
  !(_id in path("drafts.**")) &&
  publishedAt <= now()
][]{
  "params": { "slug": slug.current }
}`
