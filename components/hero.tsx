
'use client'

import Image from 'next/image'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative hero-gradient text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/20"></div>

      <div className="relative container mx-auto px-4 py-6 lg:py-8">
        <div className="max-w-4xl mx-auto">
          {/* Compact Header with Logo */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <Image
                  src="https://cdn.abacus.ai/images/32200959-44f2-467c-b381-fa5bfed1831f.png"
                  alt="Georgia Tech Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 gatech-gold">
              GaTech Indian
            </h1>
            <p className="text-sm sm:text-base lg:text-lg mb-4 text-blue-100">
              Connect • Learn • Grow Together
            </p>

            {/* Compact CTA Button */}
            <div>
              <button
                onClick={() => scrollToSection('community-links')}
                className="bg-gatech-gold hover:bg-yellow-500 text-gatech-navy px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
