
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { CoreTopicsSection } from '@/components/core-topics-section'
import { FAQSection } from '@/components/faq-section'
import { ResourcesSection } from '@/components/resources-section'
import { FooterSection } from '@/components/footer-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CoreTopicsSection />
      <FAQSection />
      <ResourcesSection />
      <FooterSection />
    </main>
  )
}
