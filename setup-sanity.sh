#!/bin/bash

# Oravo.ai Blog Setup Script with Sanity CMS
echo "╔═══════════════════════════════════════════════════════════════════╗"
echo "║                                                                   ║"
echo "║        Oravo.ai Blog Setup with Sanity CMS                        ║"
echo "║                                                                   ║"
echo "╚═══════════════════════════════════════════════════════════════════╝"
echo ""

# Step 1: Check if Sanity CLI is installed
echo "📦 Step 1: Checking Sanity CLI..."
if ! command -v sanity &> /dev/null; then
    echo "Installing Sanity CLI globally..."
    npm install -g @sanity/cli
else
    echo "✓ Sanity CLI already installed"
fi
echo ""

# Step 2: Login to Sanity
echo "🔐 Step 2: Login to Sanity..."
echo "This will open your browser to authenticate with Sanity."
echo ""
npx sanity login
echo ""

# Step 3: Check for project ID
echo "📋 Step 3: Getting your Sanity project ID..."
echo ""
if grep -q "your-project-id" .env.local; then
    echo "⚠️  Please create a Sanity project first:"
    echo ""
    echo "   1. Go to: https://www.sanity.io/manage"
    echo "   2. Click 'New Project'"
    echo "   3. Name it: 'Oravo Blog'"
    echo "   4. Choose dataset: 'production'"
    echo "   5. Copy your Project ID"
    echo ""
    read -p "   Enter your Sanity Project ID: " PROJECT_ID
    echo ""

    # Update .env.local with actual project ID
    if [[ ! -z "$PROJECT_ID" ]]; then
        sed -i.bak "s/your-project-id/$PROJECT_ID/g" .env.local
        rm .env.local.bak
        echo "✓ Updated .env.local with your project ID"
    else
        echo "❌ No project ID provided. Please update .env.local manually."
        exit 1
    fi
else
    echo "✓ Project ID already configured"
fi
echo ""

# Step 4: Deploy Schema
echo "🚀 Step 4: Deploying Sanity schema..."
echo "This will upload your content structure to Sanity."
echo ""
npx sanity schema deploy
echo ""

# Step 5: Grant CORS permissions
echo "🔓 Step 5: Setting up CORS permissions..."
echo "This allows your local development to access Sanity."
echo ""
npx sanity cors add http://localhost:3000 --no-credentials
npx sanity cors add http://localhost:3001 --no-credentials
echo ""

# Step 6: Success message
echo "╔═══════════════════════════════════════════════════════════════════╗"
echo "║                                                                   ║"
echo "║        ✅  Sanity Setup Complete!                                 ║"
echo "║                                                                   ║"
echo "╚═══════════════════════════════════════════════════════════════════╝"
echo ""
echo "🎉 Next Steps:"
echo ""
echo "1. Start your development server:"
echo "   npm run dev"
echo ""
echo "2. Access Sanity Studio:"
echo "   http://localhost:3000/studio"
echo ""
echo "3. Create your first blog post:"
echo "   - Click 'Blog Post' in Sanity Studio"
echo "   - Fill in title, excerpt, content"
echo "   - Add a featured image"
echo "   - Click 'Publish'"
echo ""
echo "4. View your blog:"
echo "   http://localhost:3000/blog"
echo ""
echo "📚 For detailed documentation, see BLOG_SETUP.md"
echo ""
