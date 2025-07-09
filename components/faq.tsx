
'use client'

import { useInView } from 'react-intersection-observer'
import { MessageCircle, Users, ExternalLink } from 'lucide-react'

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="section-container">
        <div
          ref={ref}
          className={`text-center transition-all duration-800 ${
            inView ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <div className="mb-12">
            <div className="gt-gold-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle size={32} className="text-white" />
            </div>
            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-8 card-shadow">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Have Questions?
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  We're building our FAQ section based on the most common questions from our community members. 
                  Your questions help us create better resources for everyone.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  How to Get Your Questions Answered
                </h4>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <span className="gt-gold-bg text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    <p>Join our LinkedIn community group for general discussions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="gt-gold-bg text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    <p>Connect with us on Discord for real-time conversations</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="gt-gold-bg text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    <p>Popular questions will be added to this FAQ section</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.linkedin.com/groups/14514097/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gt-gold-bg gt-gold-hover text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105"
                >
                  <Users size={20} />
                  <span>Ask on LinkedIn</span>
                  <ExternalLink size={16} />
                </a>
                <a
                  href="https://discord.gg/DHHtG2hK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle size={20} />
                  <span>Join Discord</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                <strong>Coming soon:</strong> A comprehensive FAQ section with answers to common questions about 
                Georgia Tech online programs, admissions, course selection, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
