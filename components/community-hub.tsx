
'use client'

import { useEffect, useState } from 'react'
import { GraduationCap, Briefcase, MapPin, ArrowRight } from 'lucide-react'

export default function CommunityHub() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) return null

  return (
    <section id="community" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gatech-navy mb-6">
            Community Hub
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore the different ways our community supports your academic and professional journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg card-hover cursor-pointer group" 
               onClick={() => scrollToSection('course-logistics')}>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#B3A369]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-[#B3A369]" />
              </div>
              <h3 className="text-xl font-semibold gatech-navy mb-4">Course Logistics</h3>
              <p className="text-gray-600 mb-6">
                Navigate course selection, registration, and payment processes with guidance 
                from experienced community members.
              </p>
              <div className="flex items-center justify-center text-[#B3A369] group-hover:text-[#A08A4F]">
                <span className="mr-2">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg card-hover cursor-pointer group" 
               onClick={() => scrollToSection('job-search')}>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#003057]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-[#003057]" />
              </div>
              <h3 className="text-xl font-semibold gatech-navy mb-4">Job Search</h3>
              <p className="text-gray-600 mb-6">
                Collaborate on career opportunities, resume reviews, interview preparation, 
                and networking with industry professionals.
              </p>
              <div className="flex items-center justify-center text-[#B3A369] group-hover:text-[#A08A4F]">
                <span className="mr-2">Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg card-hover cursor-pointer group" 
               onClick={() => scrollToSection('location-meetups')}>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#B3A369]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-[#B3A369]" />
              </div>
              <h3 className="text-xl font-semibold gatech-navy mb-4">Location Meetups</h3>
              <p className="text-gray-600 mb-6">
                Connect with fellow students in your city for local meetups, study sessions, 
                and social gatherings.
              </p>
              <div className="flex items-center justify-center text-[#B3A369] group-hover:text-[#A08A4F]">
                <span className="mr-2">Connect</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder sections for the community hub cards */}
        <div className="mt-20 space-y-16">
          <div id="course-logistics" className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold gatech-navy mb-4">Course Payment & Logistics</h3>
            <p className="text-gray-600 text-lg">
              This section will contain detailed information about course payment processes, 
              registration timelines, and administrative guidance. Content will be added soon!
            </p>
          </div>

          <div id="job-search" className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold gatech-navy mb-4">Job Search & Career Support</h3>
            <p className="text-gray-600 text-lg">
              This section will feature career resources, job posting boards, resume review 
              services, and interview preparation materials. Content will be added soon!
            </p>
          </div>

          <div id="location-meetups" className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold gatech-navy mb-4">Location-Specific Meetups</h3>
            <p className="text-gray-600 text-lg">
              This section will help you find and organize meetups with community members 
              in your city. Regional coordination and event planning details will be added soon!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
