
'use client'

import { useEffect, useState } from 'react'
import { GraduationCap, Users, Globe, Heart } from 'lucide-react'

const Introduction = () => {
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
    <section id="introduction" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About Our <span className="text-gradient">Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a vibrant community of Indians pursuing the Georgia Tech Online Masters of Science in Computer Science (OMSCS). 
            Our mission is to support, connect, and empower each other throughout this incredible academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <GraduationCap size={32} />,
              title: "Academic Excellence",
              description: "Supporting each other in achieving academic success through shared knowledge and resources."
            },
            {
              icon: <Users size={32} />,
              title: "Strong Network",
              description: "Building lasting connections with fellow students and professionals across the globe."
            },
            {
              icon: <Globe size={32} />,
              title: "Global Presence",
              description: "Members from major cities worldwide, creating opportunities for local meetups and networking."
            },
            {
              icon: <Heart size={32} />,
              title: "Supportive Culture",
              description: "A welcoming environment where everyone helps each other succeed and grow."
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover-lift ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-yellow-600 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className={`bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl p-8 custom-shadow ${
          isVisible ? 'animate-fade-in-delay' : 'opacity-0'
        }`}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Join GaTech Indian Community?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">📚 Academic Support</h4>
                <p className="text-gray-600">Get help with course selection, study materials, and academic planning from experienced peers.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">💼 Career Growth</h4>
                <p className="text-gray-600">Access job opportunities, interview preparation, and career advice from industry professionals.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🤝 Local Connections</h4>
                <p className="text-gray-600">Meet fellow students in your city through organized meetups and networking events.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
