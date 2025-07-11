
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GaTech Indian Community - Online Masters Programs Hub',
  description: 'The central hub for Indian students in Georgia Tech\'s OMSCS, OMSA, and Cyber Security programs. Get information about applications, course logistics, job search, and connect with fellow students.',
  keywords: [
    'Georgia Tech',
    'OMSCS',
    'OMSA', 
    'Cyber Security',
    'Indian students',
    'online masters',
    'computer science',
    'analytics',
    'graduate school',
    'tech education',
    'remote learning',
    'professional development',
    'job preparation',
    'interview prep',
    'coding practice',
    'community meetups'
  ].join(', '),
  authors: [{ name: 'GaTech Indian Community' }],
  creator: 'GaTech Indian Community',
  publisher: 'GaTech Indian Community',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'GaTech Indian Community - Online Masters Programs Hub',
    description: 'The central hub for Indian students in Georgia Tech\'s OMSCS, OMSA, and Cyber Security programs. Connect with fellow students, access resources, and prepare for your career.',
    type: 'website',
    locale: 'en_US',
    siteName: 'GaTech Indian Community',
    url: 'https://gatechindian.github.io',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'GaTech Indian Community Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GaTech Indian Community - Online Masters Programs Hub',
    description: 'The central hub for Indian students in Georgia Tech\'s OMSCS, OMSA, and Cyber Security programs.',
    images: ['/icon.png'],
    creator: '@gatechindian',
  },
  alternates: {
    canonical: 'https://gatechindian.github.io',
  },
  category: 'education',
  classification: 'Educational Resource',
  other: {
    'google-site-verification': 'your-verification-code',
    'msapplication-TileColor': '#B8860B',
    'theme-color': '#B8860B',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#B8860B',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "GaTech Indian Community",
              "description": "A community hub for Indian students in Georgia Tech's online master's programs",
              "url": "https://gatechindian.github.io",
              "logo": "https://gatechindian.github.io/icon.png",
              "sameAs": [
                "https://www.linkedin.com/groups/14514097/",
                "https://discord.gg/DHHtG2hK"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@gatechindian.com"
              }
            })
          }}
        />
        
        {/* Structured Data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "GaTech Indian Community",
              "url": "https://gatechindian.github.io",
              "description": "The central hub for Indian students in Georgia Tech's online master's programs",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://gatechindian.github.io?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.linkedin.com" />
        <link rel="preconnect" href="https://discord.com" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
