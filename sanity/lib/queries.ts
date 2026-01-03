import { groq } from 'next-sanity'

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc) {
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

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
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

export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`
