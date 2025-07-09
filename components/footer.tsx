
'use client'

import Image from 'next/image'
import { ExternalLink, Mail, Users, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/icon.png"
                  alt="GaTech Indian Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-poppins font-semibold text-xl">GaTech Indian</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Connecting Indian students pursuing Georgia Tech Online Masters programs. 
              Building a supportive community for academic and professional growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors block">
                About Community
              </a>
              <a href="#course-logistics" className="text-gray-400 hover:text-white transition-colors block">
                Course Logistics
              </a>
              <a href="#job-search" className="text-gray-400 hover:text-white transition-colors block">
                Job Search
              </a>
              <a href="#meetups" className="text-gray-400 hover:text-white transition-colors block">
                Meetups
              </a>
              <a href="#resources" className="text-gray-400 hover:text-white transition-colors block">
                Resources
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Connect With Us</h3>
            <div className="space-y-3">
              <p className="text-gray-400 flex items-center space-x-2">
                <Mail size={16} />
                <span>For inquiries, join our LinkedIn community</span>
              </p>
              
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/groups/14514097/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors flex items-center space-x-2"
                >
                  <Users size={20} />
                  <span className="hidden sm:inline">LinkedIn</span>
                  <ExternalLink size={16} />
                </a>
                <a
                  href="https://discord.gg/DHHtG2hK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-700 p-3 rounded-lg transition-colors flex items-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span className="hidden sm:inline">Discord</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 GaTech Indian Community. Built with ❤️ for Indian students at Georgia Tech.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            This is an unofficial community platform. Not affiliated with Georgia Institute of Technology.
          </p>
        </div>
      </div>
    </footer>
  )
}
