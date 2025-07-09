
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/GaTech_Banner.png"
          alt="Georgia Tech Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-custom">
        <div className="animate-fadeInUp">
          <div className="mb-8">
            <Image
              src="/icon.png"
              alt="GaTech Indian Community"
              width={120}
              height={120}
              className="mx-auto rounded-full shadow-2xl"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            GaTech Indian
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            A community for Indians pursuing Georgia Tech's Online Master's Programs
            <br />
            <span className="text-[#B3A369] font-semibold">OMSCS • OMSA • OM Cybersecurity</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://discord.gg/DHHtG2hK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#B3A369] text-white font-semibold rounded-lg hover:bg-[#A08A4F] transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Join Our Discord
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
            
            <a
              href="https://www.linkedin.com/groups/14514097/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#003057] text-white font-semibold rounded-lg hover:bg-[#002044] transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              LinkedIn Group
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
