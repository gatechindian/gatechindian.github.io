
import Hero from '../components/hero'
import FAQ from '../components/faq'
import CommunityLinks from '../components/community-links'
import Footer from '../components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <FAQ />
      <CommunityLinks />
      <Footer />
    </main>
  )
}
