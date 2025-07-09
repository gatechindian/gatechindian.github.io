
import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import CommunityHub from '@/components/community-hub'
import ResourcesSection from '@/components/resources-section'
import FAQSection from '@/components/faq-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CommunityHub />
      <ResourcesSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
