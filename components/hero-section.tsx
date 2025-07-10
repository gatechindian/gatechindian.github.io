
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ExternalLink, Users, MessageCircle } from 'lucide-react'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center parallax-section">
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: 'url(/GaTech_Banner.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="parallax-content w-full max-w-4xl mx-auto px-6 text-center text-white">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="mb-8">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <Image
                src="/icon.png"
                alt="Georgia Tech Mascot"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              GaTech Indian Community
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
              The central hub for Indian students in Georgia Tech's OMSCS, OMSA, and Cyber Security programs
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <a 
                href="https://www.linkedin.com/groups/14514097/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                Join our LinkedIn
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <a 
                href="https://discord.gg/DHHtG2hK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Join our Discord
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
