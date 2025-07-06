
'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, BookOpen, Briefcase, Target, MapPin } from 'lucide-react'

const FAQ = () => {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const faqData = [
    {
      id: 'course-logistics',
      title: 'Course Logistics',
      icon: <BookOpen size={24} />,
      questions: [
        {
          q: 'How do I enroll in the OMSCS program?',
          a: 'Visit the Georgia Tech OMSCS website and follow the application process. Our community members can help you navigate the application requirements and deadlines.'
        },
        {
          q: 'What are the prerequisites for the program?',
          a: 'You need a bachelor\'s degree and some programming experience. The specific requirements include courses in calculus, discrete mathematics, and computer science fundamentals.'
        },
        {
          q: 'How should I plan my course schedule?',
          a: 'Start with foundational courses, take 1-2 courses per semester initially, and consult with community members about course difficulty and workload.'
        },
        {
          q: 'What is the typical duration to complete the program?',
          a: 'Most students complete the program in 2-4 years depending on their pace and course load. Part-time students typically take 3-4 years.'
        },
        {
          q: 'Are there any residency requirements?',
          a: 'No, the OMSCS program is entirely online with no residency requirements. However, some courses may have proctored exams.'
        }
      ]
    },
    {
      id: 'job-search',
      title: 'Job Search',
      icon: <Briefcase size={24} />,
      questions: [
        {
          q: 'How can the program help with job opportunities?',
          a: 'The OMSCS degree is highly respected in the tech industry. Our community shares job openings, referrals, and networking opportunities regularly.'
        },
        {
          q: 'What types of roles do graduates typically get?',
          a: 'Graduates work in software engineering, data science, machine learning, cybersecurity, and other tech roles at top companies like Google, Microsoft, Amazon, and startups.'
        },
        {
          q: 'How important is networking for job search?',
          a: 'Networking is crucial. Our community provides excellent networking opportunities through Discord, LinkedIn, and local meetups.'
        },
        {
          q: 'Should I complete the program before applying for jobs?',
          a: 'Not necessarily. Many students get job offers while still in the program. The coursework and projects build valuable skills that employers recognize.'
        },
        {
          q: 'How do I leverage the Georgia Tech brand in job applications?',
          a: 'Highlight specific projects, coursework, and the rigor of the program. The Georgia Tech name carries significant weight in the tech industry.'
        }
      ]
    },
    {
      id: 'job-preparation',
      title: 'Job Preparation',
      icon: <Target size={24} />,
      questions: [
        {
          q: 'What technical skills should I focus on?',
          a: 'Focus on algorithms, data structures, system design, and technologies relevant to your target roles. Practice coding problems regularly.'
        },
        {
          q: 'How should I prepare for technical interviews?',
          a: 'Practice on platforms like LeetCode, HackerRank, and participate in our community\'s mock interview sessions and study groups.'
        },
        {
          q: 'What projects should I work on?',
          a: 'Build projects that demonstrate your skills in your target area. Our community shares project ideas and helps with code reviews.'
        },
        {
          q: 'How important is open source contribution?',
          a: 'Open source contributions show initiative and technical skills. Many community members collaborate on projects together.'
        },
        {
          q: 'Should I specialize in a particular area?',
          a: 'While the OMSCS program allows specialization, having a broad foundation with some depth in your area of interest is often beneficial.'
        }
      ]
    },
    {
      id: 'meetups',
      title: 'Location-based Meetups',
      icon: <MapPin size={24} />,
      questions: [
        {
          q: 'How can I find local meetups in my city?',
          a: 'Join our Discord server and look for city-specific channels. We have active groups in major cities like Bangalore, Mumbai, Delhi, Hyderabad, and many US cities.'
        },
        {
          q: 'What happens at these meetups?',
          a: 'Meetups include networking, study sessions, tech talks, career discussions, and social activities. They\'re great for making local connections.'
        },
        {
          q: 'How often are meetups organized?',
          a: 'This varies by city. Popular locations have monthly meetups, while smaller cities might have quarterly gatherings.'
        },
        {
          q: 'Can I organize a meetup in my city?',
          a: 'Absolutely! We encourage members to organize local meetups. Our community provides guidance and support for organizing events.'
        },
        {
          q: 'Are virtual meetups available?',
          a: 'Yes, we regularly host virtual meetups for study sessions, guest speakers, and networking events that anyone can join regardless of location.'
        }
      ]
    }
  ]

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about the OMSCS program and our community
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover-lift"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="text-yellow-600">{section.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                </div>
                <div className="text-gray-500">
                  {openSection === section.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>

              {openSection === section.id && (
                <div className="px-6 pb-4">
                  <div className="space-y-4">
                    {section.questions.map((qa, index) => (
                      <div key={index} className="border-l-4 border-yellow-400 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{qa.q}</h4>
                        <p className="text-gray-600">{qa.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 custom-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Have More Questions?</h3>
            <p className="text-gray-600 mb-6">
              Our community is here to help! Join our Discord server or LinkedIn group to get personalized answers from experienced members.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Ask on Discord
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Ask on LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
