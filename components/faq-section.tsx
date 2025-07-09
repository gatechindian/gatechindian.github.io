
'use client'

import { useEffect, useState } from 'react'
import { HelpCircle, Construction } from 'lucide-react'

export default function FAQSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gatech-navy mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get answers to common questions about Georgia Tech Online Masters programs
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-12 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-[#B3A369]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Construction className="w-8 h-8 text-[#B3A369]" />
            </div>
            <h3 className="text-2xl font-semibold gatech-navy mb-4">Content Coming Soon!</h3>
            <p className="text-gray-600 text-lg mb-6">
              We are currently compiling answers to the most common questions from our community members. 
              This section will include comprehensive information about:
            </p>
            <ul className="text-left text-gray-600 space-y-3 mb-8">
              <li className="flex items-start">
                <HelpCircle className="w-5 h-5 text-[#B3A369] mr-3 mt-0.5" />
                <span>Application process and requirements</span>
              </li>
              <li className="flex items-start">
                <HelpCircle className="w-5 h-5 text-[#B3A369] mr-3 mt-0.5" />
                <span>Course selection and planning strategies</span>
              </li>
              <li className="flex items-start">
                <HelpCircle className="w-5 h-5 text-[#B3A369] mr-3 mt-0.5" />
                <span>Payment and financial aid options</span>
              </li>
              <li className="flex items-start">
                <HelpCircle className="w-5 h-5 text-[#B3A369] mr-3 mt-0.5" />
                <span>Study tips and time management</span>
              </li>
              <li className="flex items-start">
                <HelpCircle className="w-5 h-5 text-[#B3A369] mr-3 mt-0.5" />
                <span>Career opportunities and job search guidance</span>
              </li>
            </ul>
            <p className="text-gray-600">
              In the meantime, feel free to ask questions in our Discord server or LinkedIn group!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
