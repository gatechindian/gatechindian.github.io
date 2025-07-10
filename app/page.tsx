
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { CoreTopicsSection } from '@/components/core-topics-section'
import { CityMeetupsSection } from '@/components/city-meetups-section'
import { JobPrepSection } from '@/components/job-prep-section'
import { FAQSection } from '@/components/faq-section'
import { ResourcesSection } from '@/components/resources-section'
import { FooterSection } from '@/components/footer-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CoreTopicsSection />
      <CityMeetupsSection />
      <JobPrepSection />
      <FAQSection />
      <ResourcesSection />
      <FooterSection />
    </main>
  )
}
