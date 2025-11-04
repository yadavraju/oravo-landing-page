// Test script to verify Sanity connection and data
const { createClient } = require('next-sanity')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'm1zyxcuo',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-11-03',
  useCdn: false,
})

async function testConnection() {
  console.log('Testing Sanity connection...')
  console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'm1zyxcuo')
  console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET || 'production')
  console.log('API Version:', process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-11-03')
  console.log('---')

  try {
    // Test 1: Get all posts (no filters)
    console.log('\n1. Fetching ALL posts (no filters):')
    const allPosts = await client.fetch(`*[_type == "post"]`)
    console.log(`Found ${allPosts.length} posts total`)
    if (allPosts.length > 0) {
      console.log('Post data:', JSON.stringify(allPosts, null, 2))
    }

    // Test 2: Get posts with slug defined
    console.log('\n2. Fetching posts with defined slug:')
    const postsWithSlug = await client.fetch(`*[_type == "post" && defined(slug.current)]`)
    console.log(`Found ${postsWithSlug.length} posts with slug`)
    if (postsWithSlug.length > 0) {
      console.log('Post slugs:', postsWithSlug.map(p => p.slug?.current))
    }

    // Test 3: Get posts with full query (same as in app)
    console.log('\n3. Fetching posts with full query:')
    const fullQuery = await client.fetch(`*[_type == "post" && defined(slug.current)] | order(_createdAt desc) {
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
    }`)
    console.log(`Found ${fullQuery.length} posts with full query`)
    if (fullQuery.length > 0) {
      console.log('Posts:', JSON.stringify(fullQuery, null, 2))
    }

    // Test 4: List all document types
    console.log('\n4. All document types in dataset:')
    const types = await client.fetch(`*[]{_type}`)
    const uniqueTypes = [...new Set(types.map(t => t._type))]
    console.log('Available types:', uniqueTypes)

  } catch (error) {
    console.error('Error testing Sanity connection:', error)
    process.exit(1)
  }
}

testConnection()
