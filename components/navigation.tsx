
'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              GaTech Indian
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className={`hover:text-yellow-500 transition-colors ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('introduction')}
                className={`hover:text-yellow-500 transition-colors ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className={`hover:text-yellow-500 transition-colors ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('community')}
                className={`hover:text-yellow-500 transition-colors ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Community
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-yellow-500 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('introduction')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-yellow-500 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-yellow-500 transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-yellow-500 transition-colors"
            >
              Community
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
