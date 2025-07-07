
'use client'

import Image from 'next/image'
import { Heart, Mail, MapPin, Calendar, Users, ExternalLink } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'About Us', href: '#introduction' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Join Community', href: '#community-links' },
  ]

  const communityStats = [
    { icon: <Users className="w-5 h-5" />, label: 'Active Members', value: '500+' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Cities', value: '10+' },
    { icon: <Calendar className="w-5 h-5" />, label: 'Years Active', value: '15+' },
  ]

  return (
    <footer id="footer" className="bg-gatech-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-3">
                  <Image
                    src="https://cdn.abacus.ai/images/32200959-44f2-467c-b381-fa5bfed1831f.png"
                    alt="Georgia Tech Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold gatech-gold">GaTech Indian</h3>
              </div>
              <p className="text-blue-200 leading-relaxed mb-6 max-w-md">
                Connecting Indian students and alumni at Georgia Tech through a vibrant community focused on academic excellence, cultural celebration, and professional growth.
              </p>
              
              {/* Community Stats */}
              <div className="grid grid-cols-3 gap-4">
                {communityStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2 text-gatech-gold">
                      {stat.icon}
                    </div>
                    <div className="text-lg font-bold">{stat.value}</div>
                    <div className="text-xs text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 gatech-gold">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.querySelector(link.href)
                        element?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold mb-4 gatech-gold">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center text-blue-200">
                  <Mail className="w-4 h-4 mr-2 text-gatech-gold" />
                  <span className="text-sm">community@gatech-indian.org</span>
                </div>
                <div className="flex items-center text-blue-200">
                  <MapPin className="w-4 h-4 mr-2 text-gatech-gold" />
                  <span className="text-sm">Atlanta, GA & Beyond</span>
                </div>
                <div className="flex items-center text-blue-200">
                  <Calendar className="w-4 h-4 mr-2 text-gatech-gold" />
                  <span className="text-sm">Events Every Month</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-blue-700 mb-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-blue-200 mb-4 md:mb-0">
              <span className="text-sm">
                © 2024 GaTech Indian Community. Made with
              </span>
              <Heart className="w-4 h-4 mx-1 text-red-400" />
              <span className="text-sm">by the community</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={scrollToTop}
                className="text-blue-200 hover:text-white transition-colors duration-200 text-sm"
              >
                Back to Top ↑
              </button>
              <div className="flex items-center text-blue-200 text-sm">
                <span>Georgia Tech</span>
                <div className="w-2 h-2 bg-gatech-gold rounded-full mx-2"></div>
                <span>Atlanta, GA</span>
              </div>
            </div>
          </div>

          {/* Georgia Tech Affiliation Disclaimer */}
          <div className="mt-8 pt-6 border-t border-blue-700">
            <p className="text-xs text-blue-300 text-center">
              This is an independent student organization and is not officially affiliated with or endorsed by Georgia Tech. 
              Georgia Tech logos and trademarks are property of the Georgia Institute of Technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
