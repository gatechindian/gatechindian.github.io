
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Image
              src="/icon.png"
              alt="GaTech Indian"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold gatech-navy">GaTech Indian</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-[#B3A369] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#B3A369] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className="text-gray-700 hover:text-[#B3A369] transition-colors"
            >
              Community
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className="text-gray-700 hover:text-[#B3A369] transition-colors"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-[#B3A369] transition-colors"
            >
              FAQ
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#B3A369] p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#B3A369] hover:bg-gray-50"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#B3A369] hover:bg-gray-50"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('community')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#B3A369] hover:bg-gray-50"
              >
                Community
              </button>
              <button
                onClick={() => scrollToSection('resources')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#B3A369] hover:bg-gray-50"
              >
                Resources
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#B3A369] hover:bg-gray-50"
              >
                FAQ
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
