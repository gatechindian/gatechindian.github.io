
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GaTech Indian Community',
  description: 'A community for Indians pursuing Georgia Tech Online Masters of Science in Computer Science',
  keywords: 'Georgia Tech, OMSCS, Indian community, Computer Science, Masters',
  authors: [{ name: 'GaTech Indian Community' }],
  openGraph: {
    title: 'GaTech Indian Community',
    description: 'A community for Indians pursuing Georgia Tech Online Masters of Science in Computer Science',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
