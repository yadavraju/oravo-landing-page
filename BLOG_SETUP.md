# Oravo.ai Blog Setup with Sanity CMS

Complete setup for a modern blog using Sanity CMS, inspired by the Inbox Zero project structure.

## 🎉 What's Been Set Up

### 1. Sanity CMS Configuration
- ✅ Sanity client configuration
- ✅ Environment variables setup
- ✅ Image URL builder
- ✅ GROQ queries for posts

### 2. Content Schemas
- ✅ **Blog Post**: Title, slug, excerpt, main image, content body, author, categories
- ✅ **Author**: Name, image, bio
- ✅ **Category**: Title, description
- ✅ **Block Content**: Rich text with images, code blocks, headings, lists

### 3. Blog Pages
- ✅ **Blog Listing**: `/blog` - Grid of all blog posts
- ✅ **Blog Post**: `/blog/[slug]` - Individual post pages with full content
- ✅ **Sanity Studio**: `/studio` - CMS admin interface

### 4. Components
- ✅ **BlogCard**: Post preview cards with image, title, excerpt, author
- ✅ **PortableText**: Rich text renderer with custom styling

## 📁 Project Structure

```
oravo-landing-page/
├── app/
│   ├── blog/
│   │   ├── page.tsx              # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx          # Individual blog post page
│   └── studio/
│       └── [[...tool]]/
│           └── page.tsx          # Sanity Studio admin
├── components/
│   └── blog/
│       ├── BlogCard.tsx          # Blog post card component
│       └── PortableText.tsx      # Rich text renderer
├── sanity/
│   ├── env.ts                    # Environment configuration
│   ├── schema.ts                 # Schema exports
│   ├── lib/
│   │   ├── client.ts             # Sanity client
│   │   ├── image.ts              # Image URL builder
│   │   └── queries.ts            # GROQ queries
│   └── schemaTypes/
│       ├── index.ts              # Schema type exports
│       ├── post.ts               # Blog post schema
│       ├── author.ts             # Author schema
│       ├── category.ts           # Category schema
│       └── blockContent.ts       # Rich text schema
├── sanity.config.ts              # Sanity Studio config
└── sanity.cli.ts                 # Sanity CLI config
```

## 🚀 Quick Start Guide

### Step 1: Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io/) and sign up/login
2. Create a new project:
   ```bash
   npx sanity init
   ```
   Or create it in the Sanity dashboard

3. Get your Project ID from the dashboard

### Step 2: Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-11-03
```

Replace `your_project_id_here` with your actual Sanity project ID.

### Step 3: Deploy Sanity Schema

```bash
# Install Sanity CLI globally if you haven't
npm install -g @sanity/cli

# Deploy the schema to your Sanity project
npx sanity schema deploy
```

### Step 4: Access Sanity Studio

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to: `http://localhost:3000/studio`

3. Sign in with your Sanity account

4. Start creating content!

### Step 5: Create Your First Blog Post

1. In Sanity Studio, click "Blog Post"
2. Fill in:
   - **Title**: Your post title
   - **Slug**: Auto-generated from title (click "Generate")
   - **Excerpt**: Short description (max 200 characters)
   - **Main Image**: Upload a featured image
   - **Author**: Create/select an author
   - **Categories**: Create/add categories (optional)
   - **Body**: Write your content with rich formatting
3. Click "Publish"

## 📝 Content Guidelines

### Blog Post Best Practices

1. **Title**: Clear, concise, SEO-friendly (60-70 characters)
2. **Excerpt**: Compelling summary (150-200 characters)
3. **Main Image**: High-quality, relevant (1200x630px for best OG preview)
4. **Content**: Well-structured with headings, lists, images, code blocks

### Supported Content Types

- **Headings**: H1, H2, H3, H4
- **Text**: Normal, bold, italic, code
- **Lists**: Bullet and numbered
- **Images**: With alt text
- **Code Blocks**: Syntax highlighting for multiple languages
- **Links**: Internal and external
- **Blockquotes**: For emphasized text

## 🎨 Customization

### Modify Blog Card Styling

Edit `components/blog/BlogCard.tsx`:
- Change card layout
- Adjust hover effects
- Customize typography

### Modify Blog Post Layout

Edit `app/blog/[slug]/page.tsx`:
- Change hero section
- Adjust content width
- Customize author bio section

### Add New Content Types

1. Create new schema in `sanity/schemaTypes/`
2. Add to `sanity/schemaTypes/index.ts`
3. Deploy: `npx sanity schema deploy`

## 🔍 SEO Features

### Automatic SEO Optimization

- ✅ Dynamic meta titles and descriptions
- ✅ Open Graph images from blog post images
- ✅ Twitter Card support
- ✅ Structured data for articles
- ✅ Canonical URLs
- ✅ Author attribution

### Per-Post SEO

Each blog post automatically generates:
- Title tag
- Meta description
- OG:title, OG:description, OG:image
- Twitter card metadata
- Published date
- Author information

## 📊 Content Queries

### Get All Posts

```typescript
const posts = await client.fetch(postsQuery)
```

### Get Single Post

```typescript
const post = await client.fetch(postQuery, { slug: 'your-post-slug' })
```

### Custom Query Example

```typescript
const customQuery = groq`*[_type == "post" && publishedAt > "2024-01-01"] | order(publishedAt desc)[0...10]`
const recentPosts = await client.fetch(customQuery)
```

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
4. Deploy!

### Sanity Studio in Production

Sanity Studio is automatically available at `https://yourdomain.com/studio` after deployment.

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/sanity-nextjs-guide)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Portable Text](https://www.sanity.io/docs/presenting-block-text)

## 🎯 Example Blog Post Ideas for Oravo.ai

1. "Why Emails Go to Spam Instead of Inbox: Guide (2025)"
2. "How to Set Up Email Forwarding for Vacation (2025 Guide)"
3. "How to Find Emails with Attachments Only (2025)"
4. "How to Export All Gmail Emails Before Deleting (2025)"
5. "How to Create Email Groups in Gmail (2025)"
6. "Gmail Drafts Disappeared? 5 Ways to Recover Them (2025)"
7. "10 Voice Dictation Tips to 10x Your Productivity"
8. "How Oravo.ai Achieves 220 WPM Voice Typing"
9. "Voice Dictation vs Typing: Complete Productivity Comparison"
10. "Best Voice Dictation Practices for Developers"

## 🐛 Troubleshooting

### Issue: "Missing environment variable"
**Solution**: Ensure `.env.local` exists with all required variables.

### Issue: Studio not loading
**Solution**: Check that your Sanity project ID is correct and dataset exists.

### Issue: Images not displaying
**Solution**: Verify image URLs are using `urlForImage()` helper function.

### Issue: Schema changes not reflecting
**Solution**: Run `npx sanity schema deploy` after schema changes.

## 🎉 You're All Set!

Your blog is now ready to use. Access Sanity Studio at `/studio` to create your first post, and view your blog at `/blog`.

Happy blogging! 🚀
