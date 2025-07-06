
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Users, MessageCircle } from 'lucide-react'

const Hero = () => {
  const [imageError, setImageError] = useState(false)

  const handleDiscordClick = () => {
    // Replace with actual Discord invite link
    window.open('https://discord.gg/your-discord-invite', '_blank')
  }

  const handleLinkedInClick = () => {
    // Replace with actual LinkedIn group link
    window.open('https://www.linkedin.com/groups/your-linkedin-group', '_blank')
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageError ? "/api/placeholder/1920/1080" : "https://swag.gatech.edu/sites/default/files/2020-08/tower-desktop.jpg"}
          alt="Georgia Tech Campus"
          fill
          className="object-cover"
          onError={() => setImageError(true)}
          priority
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          {/* Georgia Tech Logo */}
          <div className="mb-8">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Georgia_Tech_seal.svg/480px-Georgia_Tech_seal.svg.png"
              alt="Georgia Tech Logo"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            GaTech Indian
            <span className="block text-yellow-400">Community</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Connecting Indians pursuing Georgia Tech Online Masters of Science in Computer Science
          </p>

          {/* Statistics */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">500+</div>
              <div className="text-gray-300">Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">50+</div>
              <div className="text-gray-300">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDiscordClick}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 hover-lift"
            >
              <MessageCircle size={20} />
              Join Discord
              <ExternalLink size={16} />
            </button>
            <button
              onClick={handleLinkedInClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 hover-lift"
            >
              <Users size={20} />
              Connect on LinkedIn
              <ExternalLink size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
