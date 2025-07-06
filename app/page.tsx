
import Hero from '@/components/hero'
import Introduction from '@/components/introduction'
import FAQ from '@/components/faq'
import CommunityLinks from '@/components/community-links'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Introduction />
      <FAQ />
      <CommunityLinks />
      <Footer />
    </main>
  )
}
