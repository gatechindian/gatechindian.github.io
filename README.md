# gatechindian.github.io
GaTech Indian Website

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment (Recommended)

1. **Push to main branch**: Any push to the `main` branch will automatically trigger a deployment
2. **GitHub Actions**: The workflow will build and deploy your site to GitHub Pages
3. **Site URL**: Your site will be available at `https://yourusername.github.io/gatechindian.github.io`

### Manual Deployment

If you need to test locally or deploy manually:

```bash
# Install dependencies
npm install --legacy-peer-deps

# Build for production
npm run build:static

# Test locally (optional)
npx serve out
```

### Local Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

## 📁 Project Structure

- `app/` - Next.js app directory with pages and layouts
- `components/` - Reusable React components
- `public/` - Static assets
- `.github/workflows/` - GitHub Actions deployment configuration

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📝 Notes

- The site is configured for static export to work with GitHub Pages
- All images are set to unoptimized mode for static hosting
- The base path is automatically configured for GitHub Pages deployment
