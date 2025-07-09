
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Users } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="hero-bg min-h-screen flex items-center justify-center relative">
      <div className="section-container text-center text-white">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <div className="mb-8">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <Image
                src="/icon.png"
                alt="GaTech Indian Community Icon"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-4">
              GaTech Indian
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
              Connecting Indian students pursuing Georgia Tech Online Masters programs
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
              Join our vibrant community for course discussions, job search support, and networking opportunities
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://discord.gg/DHHtG2hK"
              target="_blank"
              rel="noopener noreferrer"
              className="gt-gold-bg gt-gold-hover text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Users size={20} />
              <span>Join our Discord</span>
              <ExternalLink size={16} />
            </a>
            <a
              href="https://www.linkedin.com/groups/14514097/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105 shadow-lg hover:bg-gray-50"
            >
              <Users size={20} />
              <span>Connect on LinkedIn</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
