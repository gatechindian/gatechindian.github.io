
import './globals.css'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700']
})

export const metadata = {
  title: 'GaTech Indian - Community for Indian Students',
  description: 'Online community for Indians pursuing Georgia Tech Online Masters courses (OMSCS, OMSA, OM Cyber Security)',
  keywords: 'Georgia Tech, OMSCS, OMSA, Indian students, online masters, cyber security',
  author: 'GaTech Indian Community',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  )
}
