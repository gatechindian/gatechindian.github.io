
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Mail, MessageCircle, Linkedin } from 'lucide-react'

export default function Footer() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <footer className="bg-[#003057] text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/icon.png"
                alt="GaTech Indian"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-2xl font-bold">GaTech Indian</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A vibrant community supporting Indians pursuing Georgia Tech's Online Master's programs. 
              Together, we grow stronger academically and professionally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#B3A369] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#community" className="text-gray-300 hover:text-[#B3A369] transition-colors">
                  Community Hub
                </a>
              </li>
              <li>
                <a href="#resources" className="text-gray-300 hover:text-[#B3A369] transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-[#B3A369] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#B3A369]" />
                <span className="text-gray-300">Contact us through our LinkedIn group</span>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href="https://discord.gg/DHHtG2hK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-[#B3A369] px-4 py-2 rounded-lg hover:bg-[#A08A4F] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Discord</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                
                <a
                  href="https://www.linkedin.com/groups/14514097/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-[#0077B5] px-4 py-2 rounded-lg hover:bg-[#005885] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} GaTech Indian Community. All Rights Reserved.
          </p>
          <p className="text-gray-400 mt-2">
            Made with ❤️ for the Georgia Tech Online Masters community
          </p>
        </div>
      </div>
    </footer>
  )
}
