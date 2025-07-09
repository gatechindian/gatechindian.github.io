
'use client'

import { useEffect, useState } from 'react'
import { Users, BookOpen, Globe } from 'lucide-react'

export default function AboutSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <h2 className="text-3xl md:text-4xl font-bold gatech-navy mb-6">
              Welcome to Our Community
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              GaTech Indian is a vibrant community of Indian students and professionals 
              pursuing Georgia Tech's prestigious Online Master's programs. We're here to 
              support each other through the academic journey and beyond.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Whether you're navigating course selections, seeking career advice, or 
              looking to connect with fellow students in your city, our community 
              provides the resources and connections you need to succeed.
            </p>
            <div className="flex items-center text-[#B3A369] font-semibold">
              <Users className="w-5 h-5 mr-2" />
              <span>Growing community of ambitious learners</span>
            </div>
          </div>
          
          <div className="animate-slideInRight">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md card-hover">
                <BookOpen className="w-8 h-8 text-[#B3A369] mb-4" />
                <h3 className="text-xl font-semibold gatech-navy mb-2">Academic Support</h3>
                <p className="text-gray-600">
                  Course guidance, study groups, and academic resources shared by the community.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md card-hover">
                <Globe className="w-8 h-8 text-[#B3A369] mb-4" />
                <h3 className="text-xl font-semibold gatech-navy mb-2">Global Network</h3>
                <p className="text-gray-600">
                  Connect with peers across different cities and time zones for collaborative learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
