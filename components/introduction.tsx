
'use client'

import { useEffect, useState } from 'react'
import { BookOpen, Users, Calendar, Award, Globe, Heart } from 'lucide-react'

export default function Introduction() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById('introduction')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="introduction" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold gatech-navy mb-6">
              About GaTech Indian Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a vibrant community of Indian students and alumni at Georgia Tech, dedicated to fostering academic excellence, cultural celebration, and lifelong connections.
            </p>
          </div>



          {/* Features Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {/* Academic Support */}
            <div className="bg-white rounded-xl p-6 card-shadow hover-shadow hover-scale transition-all duration-300">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold gatech-navy">Academic Excellence</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Access study groups, course guides, and peer tutoring. Get insights from seniors who've navigated the same academic challenges.
              </p>
            </div>

            {/* Networking */}
            <div className="bg-white rounded-xl p-6 card-shadow hover-shadow hover-scale transition-all duration-300">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-green-600 mr-3" />
                <h4 className="text-xl font-semibold gatech-navy">Professional Network</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Connect with alumni in tech giants, startups, and research institutions. Build relationships that last beyond graduation.
              </p>
            </div>

            {/* Cultural Events */}
            <div className="bg-white rounded-xl p-6 card-shadow hover-shadow hover-scale transition-all duration-300">
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8 text-purple-600 mr-3" />
                <h4 className="text-xl font-semibold gatech-navy">Cultural Events</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Celebrate festivals, organize cultural programs, and maintain our traditions while embracing the American experience.
              </p>
            </div>

            {/* Career Development */}
            <div className="bg-white rounded-xl p-6 card-shadow hover-shadow hover-scale transition-all duration-300">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-orange-600 mr-3" />
                <h4 className="text-xl font-semibold gatech-navy">Career Development</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Resume reviews, interview preparation, and job search strategies tailored for international students.
              </p>
            </div>

            {/* Global Community */}
            <div className="bg-white rounded-xl p-6 card-shadow hover-shadow hover-scale transition-all duration-300">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-teal-600 mr-3" />
                <h4 className="text-xl font-semibold gatech-navy">Global Reach</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Stay connected with members across different cities and countries, creating a worldwide network of support.
              </p>
            </div>

            {/* Support System */}
            <div className="bg-white rounded-xl p-6 card-shadow hover-shadow hover-scale transition-all duration-300">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-red-600 mr-3" />
                <h4 className="text-xl font-semibold gatech-navy">Support System</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                From housing assistance to emotional support, we're here for each other through all phases of the GT journey.
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
