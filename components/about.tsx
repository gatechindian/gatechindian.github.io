
'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Users, MessageSquare } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="section-container">
        <div
          ref={ref}
          className={`text-center transition-all duration-800 ${
            inView ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <div className="mb-8">
            <div className="gt-gold-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap size={32} className="text-white" />
            </div>
            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">
              About Our Community
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              GaTech Indian is a vibrant online community specifically designed for Indian students pursuing 
              Georgia Tech's Online Masters programs, including OMSCS (Online Master of Science in Computer Science), 
              OMSA (Online Master of Science in Analytics), and OM Cyber Security.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg card-shadow">
                <MessageSquare size={40} className="gt-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Centralized Discussions
                </h3>
                <p className="text-gray-600">
                  Previously scattered across WhatsApp, LinkedIn, and Discord, 
                  we now provide a unified platform for all your academic discussions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg card-shadow">
                <Users size={40} className="gt-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Networking & Support
                </h3>
                <p className="text-gray-600">
                  Connect with fellow Indian students, share experiences, 
                  and build lasting professional relationships.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg card-shadow">
                <GraduationCap size={40} className="gt-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Academic Excellence
                </h3>
                <p className="text-gray-600">
                  Access resources, study groups, and peer support 
                  to excel in your Georgia Tech online programs.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to create a supportive environment where Indian students can thrive academically, 
              professionally, and personally while pursuing their Georgia Tech online education. Join us to be part 
              of a growing community that celebrates diversity, academic achievement, and professional growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
