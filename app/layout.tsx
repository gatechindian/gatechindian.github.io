
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GaTech Indian - Georgia Tech Indian Student Community',
  description: 'Connect with fellow Indian students at Georgia Tech. Join our community for academic support, cultural events, and networking opportunities.',
  keywords: 'Georgia Tech, Indian students, community, networking, academic support',
  authors: [{ name: 'GaTech Indian Community' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
