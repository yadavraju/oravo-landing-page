# Sanity Setup Commands - Step by Step Guide

Follow these commands in order to set up your Sanity blog.

## Prerequisites

✅ All files are already created
✅ Dependencies are installed
✅ You just need to connect to Sanity

---

## Option 1: Automated Setup (Recommended)

Run the setup script:

```bash
./setup-sanity.sh
```

This will:
- Login to Sanity
- Help you create/connect a project
- Deploy your schema
- Configure CORS

---

## Option 2: Manual Setup (Step by Step)

### Step 1: Login to Sanity

```bash
npx sanity login
```

This opens your browser to authenticate. Sign in with Google, GitHub, or email.

---

### Step 2: Create a Sanity Project

**Option A: Via Dashboard (Easier)**
1. Go to https://www.sanity.io/manage
2. Click "+ New Project"
3. Name it: **"Oravo Blog"**
4. Dataset: **production**
5. Copy your **Project ID** (looks like: `abc12xyz`)

**Option B: Via CLI**
```bash
npx sanity projects create
```
Follow the prompts and copy the project ID.

---

### Step 3: Update Environment Variables

Edit `.env.local` and replace `your-project-id` with your actual project ID:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc12xyz
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-11-03
```

---

### Step 4: Deploy Sanity Schema

This uploads your content structure (blog posts, authors, categories) to Sanity:

```bash
npx sanity schema deploy
```

Expected output:
```
✔ Deployed schema to dataset production
```

---

### Step 5: Configure CORS (Allow localhost)

Allow your local development to access Sanity:

```bash
npx sanity cors add http://localhost:3000 --no-credentials
npx sanity cors add http://localhost:3001 --no-credentials
```

Or via dashboard:
1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to "API" → "CORS Origins"
4. Add: `http://localhost:3000`

---

### Step 6: Start Development Server

```bash
npm run dev
```

---

### Step 7: Access Sanity Studio

Open your browser and navigate to:

```
http://localhost:3000/studio
```

You should see the Sanity Studio interface!

---

## Creating Your First Blog Post

### Step 1: Create an Author

1. In Sanity Studio, click "Author" in the left sidebar
2. Click "+ New Author"
3. Fill in:
   - **Name**: Your name (e.g., "Elie Steinbock")
   - **Slug**: Click "Generate" button
   - **Image**: Upload a profile photo
   - **Bio**: Write a short bio
4. Click **"Publish"**

### Step 2: Create a Category (Optional)

1. Click "Category" in the left sidebar
2. Click "+ New Category"
3. Fill in:
   - **Title**: e.g., "Voice Dictation"
   - **Slug**: Click "Generate"
   - **Description**: Brief category description
4. Click **"Publish"**

### Step 3: Create Your First Blog Post

1. Click "Blog Post" in the left sidebar
2. Click "+ New Blog Post"
3. Fill in:

   **Title**:
   ```
   10 Tips to Write Faster with Voice Dictation
   ```

   **Slug**: Click "Generate" button

   **Excerpt** (200 chars max):
   ```
   Discover how voice dictation can 4x your writing speed. Learn professional tips to maximize productivity with Oravo.ai voice typing technology.
   ```

   **Main Image**:
   - Click "Upload" and select an image (1200x630px recommended)
   - Add alt text: "Voice dictation productivity tips"

   **Author**: Select the author you created

   **Categories**: Select relevant categories

   **Body** (your blog content):
   Use the rich text editor to write your post with:
   - Headings (H2, H3)
   - Bold/italic text
   - Bullet lists
   - Images
   - Code blocks

4. Click **"Publish"**

---

## View Your Blog

### Blog Listing Page
```
http://localhost:3000/blog
```

### Your Blog Post
```
http://localhost:3000/blog/10-tips-to-write-faster-with-voice-dictation
```

---

## Common Commands Reference

### Check Sanity CLI Version
```bash
npx sanity --version
```

### List Your Sanity Projects
```bash
npx sanity projects list
```

### Deploy Schema Changes
```bash
npx sanity schema deploy
```

### View Dataset in Browser
```bash
npx sanity dataset browse
```

### Manage CORS
```bash
# List CORS origins
npx sanity cors list

# Add CORS origin
npx sanity cors add https://yourdomain.com --no-credentials

# Delete CORS origin
npx sanity cors delete <origin-id>
```

### View Project Info
```bash
npx sanity projects info
```

---

## Troubleshooting

### Error: "Missing environment variable"

**Solution**: Ensure `.env.local` exists with your actual project ID.

```bash
# Check if file exists
cat .env.local

# Should show:
# NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-id
# NEXT_PUBLIC_SANITY_DATASET=production
# NEXT_PUBLIC_SANITY_API_VERSION=2024-11-03
```

### Error: "Schema deploy failed"

**Solution**: Make sure you're logged in:

```bash
npx sanity login
npx sanity schema deploy
```

### Error: "CORS not configured"

**Solution**: Add localhost to CORS:

```bash
npx sanity cors add http://localhost:3000 --no-credentials
```

### Studio Shows "Project Not Found"

**Solution**: Verify your project ID in `.env.local` matches your Sanity dashboard.

1. Go to https://www.sanity.io/manage
2. Find your project and copy the ID
3. Update `.env.local`
4. Restart dev server: `npm run dev`

---

## Production Deployment

When deploying to production (e.g., Vercel):

### Step 1: Add Environment Variables in Vercel

In your Vercel project settings, add:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-11-03
```

### Step 2: Add Production Domain to CORS

```bash
npx sanity cors add https://yourdomain.com --no-credentials
npx sanity cors add https://www.yourdomain.com --no-credentials
```

Or via dashboard:
1. Go to https://www.sanity.io/manage
2. Select your project
3. API → CORS Origins → Add Origin

---

## Quick Test Commands

### Test if Sanity is working:

```bash
# This should show your project info
npx sanity projects info

# This should list your datasets
npx sanity dataset list
```

### Test your blog locally:

```bash
# Start dev server
npm run dev

# In another terminal, check if Studio loads:
curl http://localhost:3000/studio

# Check if blog page exists:
curl http://localhost:3000/blog
```

---

## Need Help?

- **Sanity Docs**: https://www.sanity.io/docs
- **Sanity Community**: https://slack.sanity.io
- **Project Setup Guide**: See `BLOG_SETUP.md`

---

## Success Checklist

- [ ] Logged into Sanity (`npx sanity login`)
- [ ] Created Sanity project (via dashboard or CLI)
- [ ] Updated `.env.local` with project ID
- [ ] Deployed schema (`npx sanity schema deploy`)
- [ ] Configured CORS for localhost
- [ ] Started dev server (`npm run dev`)
- [ ] Accessed Studio at `/studio`
- [ ] Created an author
- [ ] Published first blog post
- [ ] Viewed blog at `/blog`

🎉 Once all checked, your blog is live!
