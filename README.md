
# GaTech Indian Community Website

A modern, responsive static website for the GaTech Indian community - connecting Indian students in Georgia Tech's Online Masters programs (OMSCS, OMSA, and OM Cyber Security).

## 🌟 Features

- **Single-Page Design**: All information accessible through smooth scrolling navigation
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Interactive Elements**: 
  - Collapsible FAQ section
  - Smooth scrolling navigation
  - Mobile hamburger menu
  - Scroll animations
- **Professional Design**: Clean, modern aesthetic with Georgia Tech branding
- **Zero Dependencies**: Built with vanilla HTML, CSS, and JavaScript
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized images and lightweight code

## 🚀 Deploy to GitHub Pages

This repository is configured for **automatic deployment** to GitHub Pages using GitHub Actions. Choose your preferred method:

### Method 1: Automatic Deployment (Recommended)

This repository includes a GitHub Actions workflow that automatically deploys your site whenever you push changes to the main branch.

#### Setup Steps:

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and sign in
   - Click "New repository" (green button)
   - Name your repository (e.g., `gatech-indian-community`)
   - Make sure it's set to "Public"
   - Click "Create repository"

2. **Upload All Files**
   - In your new repository, click "uploading an existing file"
   - Drag and drop **ALL** files from this project:
     - `index.html`
     - `style.css`
     - `script.js`
     - `README.md`
     - `.github/workflows/deploy.yml` (the entire `.github` folder)
   - Add a commit message: "Initial website setup with GitHub Actions"
   - Click "Commit changes"

3. **Configure GitHub Pages**
   - Go to repository **Settings** tab
   - Scroll to **Pages** section in left sidebar
   - Under "Source", select **"GitHub Actions"** (not "Deploy from a branch")
   - Click "Save"

4. **Enable GitHub Actions**
   - Go to the **Actions** tab in your repository
   - If prompted, click "I understand my workflows, go ahead and enable them"
   - The deployment should start automatically

5. **Access Your Live Site**
   - Wait 2-3 minutes for the first deployment
   - Your site will be available at: `https://your-username.github.io/repository-name`
   - Check the **Actions** tab to see deployment status

#### How Automatic Deployment Works:

- ✅ **Triggers**: Automatically deploys when you push to the main branch
- ✅ **No Build Process**: Direct deployment of static files (HTML, CSS, JS)
- ✅ **Asset Handling**: All images, fonts, and external resources are preserved
- ✅ **Fast Deployment**: Typically takes 1-2 minutes
- ✅ **Status Updates**: View deployment progress in the Actions tab

### Method 2: Manual Deployment (Alternative)

If you prefer manual deployment without GitHub Actions:

1. **Create Repository & Upload Files** (same as above, but skip the `.github` folder)
2. **Enable GitHub Pages**
   - Go to repository **Settings** tab
   - Scroll to **Pages** section in left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

### Method 3: Using Git (For developers)

```bash
# Clone this repository
git clone <your-repo-url>
cd gatech-indian-simple

# Add your files
git add .
git commit -m "Initial website setup"
git push origin main

# The GitHub Actions workflow will automatically deploy your site
# Check the Actions tab for deployment status
```

## 📁 File Structure

```
gatech-indian-simple/
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions workflow for automatic deployment
├── index.html          # Main HTML file with all content
├── style.css           # All styling and responsive design
├── script.js           # Interactive functionality
└── README.md          # This file with setup instructions
```

## 🎨 Customization Guide

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --color-primary: #B3A369;    /* GT Gold */
    --color-secondary: #003057;   /* GT Navy */
    --color-dark: #262626;        /* Text color */
    --color-light: #FFFFFF;       /* Background */
}
```

### Adding New FAQ Items
Add to the `.faq-container` section in `index.html`:
```html
<div class="faq-item">
    <button class="faq-question">
        <span>Your question here?</span>
        <span class="faq-icon">+</span>
    </button>
    <div class="faq-answer">
        <p>Your answer here.</p>
    </div>
</div>
```

### Updating Social Links
Change the URLs in the header and footer sections:
```html
<a href="https://your-linkedin-group-url" target="_blank">LinkedIn</a>
<a href="https://your-discord-invite-url" target="_blank">Discord</a>
```

### Adding New Cities for Meetups
Add new cards to the `.meetup-grid` section:
```html
<div class="meetup-card">
    <h3>🏙️ Your City</h3>
    <p>Description</p>
</div>
```

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile-first design approach
- Hamburger menu for mobile navigation
- Optimized touch targets
- Readable typography across all devices
- Flexible grid layouts

## 🔧 Technical Details

- **HTML5**: Semantic markup for better SEO
- **CSS3**: Modern features like Grid, Flexbox, and CSS Variables
- **Vanilla JavaScript**: No frameworks or libraries required
- **Progressive Enhancement**: Works without JavaScript
- **Accessibility**: ARIA labels and keyboard navigation support

## 🚀 Performance Optimizations

- **Optimized Images**: Compressed and properly sized
- **Minified Code**: Can be further minified for production
- **Efficient CSS**: Uses modern layout techniques
- **Lazy Loading**: Images load when needed
- **Smooth Animations**: Hardware-accelerated CSS transitions

## 🆘 Troubleshooting

### GitHub Actions Deployment Issues

**GitHub Actions workflow not running?**
- Ensure the `.github/workflows/deploy.yml` file was uploaded correctly
- Check that GitHub Actions are enabled in repository settings
- Go to Actions tab and look for any error messages
- Verify the workflow file is in the correct directory structure

**Deployment failing in Actions tab?**
- Check the Actions tab for specific error messages
- Ensure repository is set to "Public" (private repos need GitHub Pro)
- Verify GitHub Pages source is set to "GitHub Actions" (not "Deploy from a branch")
- Check that all files were uploaded correctly including the `.github` folder

**Site not loading after successful deployment?**
- Wait 5-10 minutes for changes to propagate to GitHub's CDN
- Check that the deployment shows as successful in Actions tab
- Verify the correct URL: `https://your-username.github.io/repository-name`
- Clear browser cache and try again

**Want to trigger a manual deployment?**
- Go to Actions tab in your repository
- Click on "Deploy to GitHub Pages" workflow
- Click "Run workflow" button
- Select "main" branch and click "Run workflow"

### General Website Issues

**Site not loading after deployment?**
- Check that GitHub Pages is enabled in repository settings
- Ensure `index.html` is in the root directory
- Wait 5-10 minutes for changes to propagate

**Mobile menu not working?**
- Check browser console for JavaScript errors
- Ensure `script.js` is properly linked in `index.html`

**Images not displaying?**
- Verify image URLs are accessible
- Check browser network tab for loading issues

## 🤝 Contributing

This is a community project! To suggest improvements:
1. Fork the repository
2. Make your changes
3. Submit a pull request
4. Join the discussion in our community channels

## 📞 Support

For technical issues with the website:
- Check the troubleshooting section above
- Join our Discord server for community support
- Contact the LinkedIn group administrators

## 📄 License

This project is open source and available under the MIT License. Feel free to use, modify, and distribute as needed for your community.

---

**Made with ❤️ by the GaTech Indian Community**

*Not officially affiliated with the Georgia Institute of Technology*
