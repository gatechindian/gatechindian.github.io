# GaTech Indian Community Website

A comprehensive resource hub for Indian students pursuing Georgia Tech's Online Master of Science in Computer Science (OMSCS) program. This website serves as a central platform for community building, resource sharing, and career development.

## 🌟 What is this website?

This website is designed to support Indian students in the OMSCS program by providing:

- **Program Information**: Core topics, course details, and program overview
- **Community Resources**: Links to official resources, study materials, and community platforms
- **City Meetups**: Information about local meetups in major Indian cities
- **Job Preparation**: Comprehensive resources for technical interviews and career development
- **FAQ Section**: Common questions and answers about the program
- **Community Building**: Ways to connect with fellow students and alumni

## 🏗️ Project Structure

```
gatechindian.github.io/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── hero-section.tsx  # Landing section
│   ├── about-section.tsx # About the program
│   ├── core-topics-section.tsx # Program topics
│   ├── city-meetups-section.tsx # City meetups
│   ├── job-prep-section.tsx # Job preparation resources
│   ├── faq-section.tsx   # FAQ section
│   ├── resources-section.tsx # General resources
│   └── footer-section.tsx # Footer
├── lib/                  # Utility functions
├── public/              # Static assets
└── README.md           # This file
```

## 🚀 Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Custom components built with Radix UI primitives
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📝 How to Contribute

We welcome contributions from the community! Here's how you can help improve the website:

### Adding Job Preparation Resources

To add new resources to the Job Prep section, edit `components/job-prep-section.tsx`:

1. **Find the `jobPrepResources` array** (around line 15)
2. **Add a new resource object** with the following structure:

```typescript
{
  icon: Code, // Import the icon from lucide-react
  title: 'Resource Name',
  description: 'Brief description of what this resource offers',
  link: 'https://example.com',
  category: 'Coding Practice', // Choose from: Coding Practice, Job Search, Interview Prep, Mock Interviews, Company Research, Resume
  difficulty: 'All Levels', // Choose from: All Levels, Entry-Mid, Mid-Senior
  free: true // true for free resources, false for paid
}
```

3. **Available categories**:
   - `Coding Practice`: LeetCode, HackerRank, etc.
   - `Job Search`: LinkedIn Jobs, Indeed, etc.
   - `Interview Prep`: Books, guides, courses
   - `Mock Interviews`: Practice platforms
   - `Company Research`: Glassdoor, company reviews
   - `Resume`: Resume builders, templates

4. **Available difficulty levels**:
   - `All Levels`: Suitable for everyone
   - `Entry-Mid`: Entry to mid-level positions
   - `Mid-Senior`: Mid to senior-level positions

### Adding General Resources

To add resources to the main Resources section, edit `components/resources-section.tsx`:

1. **Find the `resources` array** (around line 8)
2. **Add a new resource object**:

```typescript
{
  icon: BookOpen, // Import from lucide-react
  title: 'Resource Title',
  description: 'Description of the resource and its benefits',
  link: 'https://example.com',
  category: 'Community' // Choose from: Community, Course Info, Official
}
```

### Adding New Cities for Meetups

To add new cities to the City Meetups section, edit `components/city-meetups-section.tsx`:

1. **Find the `cities` array** (around line 8)
2. **Add a new city object**:

```typescript
{
  name: 'City Name',
  description: 'Brief description of the city and its tech community',
  meetupFrequency: 'Monthly', // or 'Bi-weekly', 'Semester End', etc.
  color: 'bg-indigo-500', // Choose a color from Tailwind CSS
  icon: MapPin // Import from lucide-react
}
```

### Adding FAQ Items

To add new FAQ items, edit `components/faq-section.tsx`:

1. **Find the FAQ data structure**
2. **Add new questions and answers** following the existing format

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/gatechindian.github.io.git
   cd gatechindian.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
npm start
```

## 🎨 Design System

The website uses a consistent design system with:

- **Primary Color**: Yellow (#F59E0B) - represents Georgia Tech's colors
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent padding and margins using Tailwind's spacing scale
- **Components**: Reusable UI components in `components/ui/`
- **Animations**: Smooth fade-in effects and hover animations

## 📋 Contribution Guidelines

### Before Contributing

1. **Check existing issues** to see if your idea has already been discussed
2. **Fork the repository** and create a feature branch
3. **Test your changes** locally before submitting

### Submitting Changes

1. **Create a pull request** with a clear description of your changes
2. **Include screenshots** if you're adding new visual elements
3. **Test on different screen sizes** to ensure responsiveness
4. **Follow the existing code style** and formatting

### Content Guidelines

- **Keep descriptions concise** but informative
- **Use proper grammar and spelling**
- **Ensure all links are working** and accessible
- **Add appropriate categories** for new resources
- **Include difficulty levels** for job prep resources

## 🤝 Community Guidelines

- **Be respectful** and inclusive in all contributions
- **Focus on quality** over quantity
- **Provide accurate information** about resources and links
- **Help maintain the website** by reporting broken links or outdated information

## 📞 Contact & Support

- **Website Issues**: Create an issue on GitHub
- **Content Suggestions**: Submit a pull request or create an issue
- **Community Questions**: Join our [LinkedIn Group](https://www.linkedin.com/groups/14514097/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Georgia Tech OMSCS program for providing this educational opportunity
- The Indian OMSCS community for their valuable contributions
- All contributors who help maintain and improve this resource hub

---

**Made with ❤️ for the Indian OMSCS Community** 