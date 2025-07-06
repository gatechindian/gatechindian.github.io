#!/bin/bash

# Deploy script for GitHub Pages
echo "🚀 Starting deployment process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --legacy-peer-deps

# Build the project
echo "🔨 Building project..."
npm run build:static

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Static files generated in ./out directory"
    echo "🌐 To test locally, run: npx serve out"
    echo "🚀 To deploy, push to main branch and GitHub Actions will handle the rest"
else
    echo "❌ Build failed!"
    exit 1
fi 