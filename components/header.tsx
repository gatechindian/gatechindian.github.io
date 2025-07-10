
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X, Users, MessageCircle, ExternalLink } from 'lucide-react'

const navigationLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Course Logistics', href: '#core-topics' },
  { name: 'Job Search', href: '#core-topics' },
  { name: 'Meetups', href: '#core-topics' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Resources', href: '#resources' },
]

const socialLinks = [
  {
    name: 'Discord',
    href: 'https://discord.gg/DHHtG2hK',
    icon: MessageCircle,
    className: 'hover:text-blue-400'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/groups/14514097/',
    icon: Users,
    className: 'hover:text-blue-600'
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const target = href.replace('#', '')
    const element = document.getElementById(target)
    
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-lg border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('#hero')}
          >
            <div className="relative w-10 h-10">
              <Image
                src="/icon.png"
                alt="GaTech Indian Community Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}>
                GaTech Indian
              </h1>

            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
                aria-label={`Navigate to ${link.name} section`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Social Links & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Social Links - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="sm"
                  asChild
                  className={`transition-colors duration-300 ${
                    isScrolled 
                      ? `text-foreground hover:text-primary ${social.className}` 
                      : `text-white hover:text-primary ${social.className}`
                  }`}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Join our ${social.name} community`}
                  >
                    <social.icon className="w-4 h-4" />
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`lg:hidden transition-colors duration-300 ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  }`}
                  aria-label="Open navigation menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-80 sm:w-96 bg-background border-border"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8">
                        <Image
                          src="/icon.png"
                          alt="GaTech Indian Community Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-foreground">
                          GaTech Indian
                        </h2>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsOpen(false)}
                      aria-label="Close navigation menu"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-2 py-6 flex-1">
                    {navigationLinks.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => scrollToSection(link.href)}
                        className="text-left px-4 py-3 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors duration-200"
                        aria-label={`Navigate to ${link.name} section`}
                      >
                        {link.name}
                      </button>
                    ))}
                  </nav>

                  {/* Mobile Social Links */}
                  <div className="pt-6 border-t border-border">
                    <h3 className="text-sm font-semibold text-foreground mb-4">
                      Join Our Community
                    </h3>
                    <div className="flex flex-col gap-3">
                      {socialLinks.map((social) => (
                        <Button
                          key={social.name}
                          variant="outline"
                          size="sm"
                          asChild
                          className="justify-start"
                        >
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3"
                            aria-label={`Join our ${social.name} community`}
                          >
                            <social.icon className="w-4 h-4" />
                            <span>Join {social.name}</span>
                            <ExternalLink className="w-3 h-3 ml-auto" />
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
