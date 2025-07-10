
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GaTech Indian Community - Online Masters Programs Hub',
  description: 'The central hub for Indian students in Georgia Tech\'s OMSCS, OMSA, and Cyber Security programs. Get information about applications, course logistics, job search, and connect with fellow students.',
  keywords: 'Georgia Tech, OMSCS, OMSA, Cyber Security, Indian students, online masters, computer science, analytics',
  authors: [{ name: 'GaTech Indian Community' }],
  creator: 'GaTech Indian Community',
  publisher: 'GaTech Indian Community',
  robots: 'index, follow',
  openGraph: {
    title: 'GaTech Indian Community - Online Masters Programs Hub',
    description: 'The central hub for Indian students in Georgia Tech\'s OMSCS, OMSA, and Cyber Security programs.',
    type: 'website',
    locale: 'en_US',
    siteName: 'GaTech Indian Community',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GaTech Indian Community - Online Masters Programs Hub',
    description: 'The central hub for Indian students in Georgia Tech\'s OMSCS, OMSA, and Cyber Security programs.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#B8860B',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
