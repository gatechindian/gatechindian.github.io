
import Hero from '../components/hero'
import About from '../components/about'
import CoreSections from '../components/core-sections'
import FAQ from '../components/faq'
import Footer from '../components/footer'
import Navigation from '../components/navigation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <CoreSections />
      <FAQ />
      <Footer />
    </main>
  )
}
