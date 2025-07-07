
'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, DollarSign, Briefcase, MapPin, Users, GraduationCap, Calendar, FileText, Award } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
  icon: JSX.Element
  category: string
}

interface FAQCategory {
  name: string
  description: string
  icon: JSX.Element
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const categories: FAQCategory[] = [
    {
      name: 'Course Logistics',
      description: 'Course payments, registration, deadlines, and academic procedures',
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      name: 'Location Meetups',
      description: 'Local meetups, networking events, and city-specific groups',
      icon: <MapPin className="w-6 h-6" />
    },
    {
      name: 'Job Search',
      description: 'Career guidance, interview preparation, and job opportunities',
      icon: <Briefcase className="w-6 h-6" />
    }
  ]

  const faqData: FAQItem[] = [
    // Course Logistics Questions
    {
      id: 'course-logistics-1',
      question: 'How do I pay for courses and textbooks as an international student?',
      answer: 'You can pay course fees through OSCAR (student portal) using international credit/debit cards or wire transfers. For textbooks, consider renting from Amazon, buying used books from Facebook Marketplace, or using digital versions. Many students also share textbooks within our community - check our WhatsApp groups for book exchanges.',
      icon: <DollarSign className="w-5 h-5" />,
      category: 'Course Logistics'
    },
    {
      id: 'course-logistics-2',
      question: 'What are the course registration deadlines and procedures?',
      answer: 'Course registration opens during specified windows each semester. Check the academic calendar on OSCAR for exact dates. Priority is given based on credit hours completed. Use OSCAR to register, add/drop courses, and check prerequisites. Join our academic groups for course recommendations and registration tips from seniors.',
      icon: <Calendar className="w-5 h-5" />,
      category: 'Course Logistics'
    },
    {
      id: 'course-logistics-3',
      question: 'Are there payment plans or financial aid options available?',
      answer: 'Georgia Tech offers installment payment plans for tuition fees. Graduate students can apply for graduate assistantships (GRA/GTA) which provide tuition waiver and stipend. Check with the financial aid office for emergency funds if you face financial hardship. Our community also maintains a list of available assistantships and funding opportunities.',
      icon: <Award className="w-5 h-5" />,
      category: 'Course Logistics'
    },
    {
      id: 'course-logistics-4',
      question: 'How do I handle transcript evaluations and credit transfers?',
      answer: 'Submit official transcripts to the Registrar\'s Office for evaluation. International transcripts may need third-party evaluation services like WES or ECE. Transfer credits must be approved by your academic advisor and department. Keep copies of all syllabi and course descriptions to support transfer credit requests.',
      icon: <FileText className="w-5 h-5" />,
      category: 'Course Logistics'
    },
    {
      id: 'course-logistics-5',
      question: 'What academic procedures should I know as an international student?',
      answer: 'Maintain full-time enrollment (9+ credit hours for graduates, 12+ for undergraduates) to keep F-1 status. Understand add/drop deadlines, withdrawal procedures, and academic probation policies. Use OSCAR for all academic transactions. Connect with your academic advisor regularly and join study groups through our community platforms.',
      icon: <GraduationCap className="w-5 h-5" />,
      category: 'Course Logistics'
    },

    // Location Meetups Questions
    {
      id: 'location-meetups-1',
      question: 'Which cities have active GaTech Indian meetups?',
      answer: 'We have active chapters in Atlanta (primary), San Francisco Bay Area, Seattle, Austin, Boston, New York, Chicago, Los Angeles, Denver, and Raleigh-Durham. Each chapter organizes regular meetups, networking events, and cultural celebrations. Check our WhatsApp groups for city-specific announcements and event updates.',
      icon: <MapPin className="w-5 h-5" />,
      category: 'Location Meetups'
    },
    {
      id: 'location-meetups-2',
      question: 'How do I join meetups in my city?',
      answer: 'Join our main WhatsApp group and you\'ll be added to your city-specific group automatically. Follow our LinkedIn page for professional networking events. Use our Discord server for real-time chat and coordination. Most meetups are announced 1-2 weeks in advance with details about venue, time, and activities.',
      icon: <Users className="w-5 h-5" />,
      category: 'Location Meetups'
    },
    {
      id: 'location-meetups-3',
      question: 'What types of events do you organize in different cities?',
      answer: 'We organize professional networking events, cultural celebrations (Diwali, Holi), tech talks, hiking trips, game nights, and food meetups. Events vary by city based on local interest and volunteer availability. Popular events include annual reunions, career panels, and startup showcases featuring GaTech Indian alumni.',
      icon: <Calendar className="w-5 h-5" />,
      category: 'Location Meetups'
    },
    {
      id: 'location-meetups-4',
      question: 'Can I organize a meetup in a new city?',
      answer: 'Absolutely! We encourage alumni to start chapters in new cities. Contact our community coordinators through any of our platforms. We provide guidance on organizing events, finding venues, and growing your local community. Many successful chapters started with just 2-3 people and now have 50+ active members.',
      icon: <MapPin className="w-5 h-5" />,
      category: 'Location Meetups'
    },

    // Job Search Questions
    {
      id: 'job-search-1',
      question: 'How can I find internships and full-time jobs as an international student?',
      answer: 'Start with Georgia Tech\'s career services and job fairs. Use platforms like Handshake, LinkedIn, and company websites. Network through our alumni connections - many are working in major tech companies. Attend career events organized by our community. Remember to highlight your F-1 visa status and be aware of OPT/CPT requirements.',
      icon: <Briefcase className="w-5 h-5" />,
      category: 'Job Search'
    },
    {
      id: 'job-search-2',
      question: 'What are the visa requirements for working in the US?',
      answer: 'F-1 students can work on-campus without restrictions. For off-campus work, you need CPT (Curricular Practical Training) during studies or OPT (Optional Practical Training) after graduation. STEM students get 24-month OPT extension. Start your applications early and consult with international student services for guidance.',
      icon: <FileText className="w-5 h-5" />,
      category: 'Job Search'
    },
    {
      id: 'job-search-3',
      question: 'How do I prepare for technical interviews at US companies?',
      answer: 'Practice on platforms like LeetCode, HackerRank, and Pramp. Join our coding practice groups and mock interview sessions. Many alumni volunteer to conduct practice interviews. Focus on system design, behavioral questions, and communication skills. Our community shares interview experiences and company-specific tips regularly.',
      icon: <Users className="w-5 h-5" />,
      category: 'Job Search'
    },
    {
      id: 'job-search-4',
      question: 'How can I improve my resume for US job applications?',
      answer: 'Use a clean, ATS-friendly format with quantifiable achievements. Highlight relevant projects, internships, and technical skills. Include GPA if above 3.0. Tailor your resume for each application. Our community offers resume review sessions and maintains templates specific to different industries. Get feedback from alumni in your target field.',
      icon: <FileText className="w-5 h-5" />,
      category: 'Job Search'
    },
    {
      id: 'job-search-5',
      question: 'What networking strategies work best for international students?',
      answer: 'Attend industry meetups, alumni events, and career fairs. Use LinkedIn strategically to connect with professionals. Join professional organizations related to your field. Participate in hackathons, conferences, and tech talks. Our alumni network spans major companies - leverage connections through our community platforms for informational interviews.',
      icon: <Users className="w-5 h-5" />,
      category: 'Job Search'
    }
  ]

  // Group FAQ items by category
  const groupedFAQs = categories.reduce((acc, category) => {
    acc[category.name] = faqData.filter(item => item.category === category.name)
    return acc
  }, {} as Record<string, FAQItem[]>)

  return (
    <section id="faq" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold gatech-navy mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about course logistics, job search, meetups, and more. Our community is here to help you navigate your journey at Georgia Tech.
            </p>
          </div>

          {/* FAQ Categories Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((category, index) => (
              <div key={category.name} className="bg-white rounded-lg p-6 text-center card-shadow hover-shadow transition-all duration-300">
                <div className="flex justify-center mb-4 text-blue-600">
                  {category.icon}
                </div>
                <h3 className="font-bold gatech-navy text-lg mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
                <span className="inline-block mt-3 text-xs font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {groupedFAQs[category.name]?.length || 0} questions
                </span>
              </div>
            ))}
          </div>

          {/* FAQ Categories and Items */}
          <div className="space-y-12">
            {categories.map((category, categoryIndex) => (
              <div key={category.name} className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="mr-4 text-blue-600">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold gatech-navy">{category.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{category.description}</p>
                  </div>
                </div>

                {/* Category Questions */}
                <div className="space-y-3">
                  {groupedFAQs[category.name]?.map((item, index) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg card-shadow hover-shadow transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      >
                        <div className="flex items-center">
                          <div className="mr-4 text-blue-600">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold gatech-navy text-lg">
                              {item.question}
                            </h4>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          {openItems.includes(item.id) ? (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          )}
                        </div>
                      </button>
                      
                      {openItems.includes(item.id) && (
                        <div className="px-6 pb-4">
                          <div className="ml-9 pt-2 border-t border-gray-100">
                            <p className="text-gray-700 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Category Separator */}
                {categoryIndex < categories.length - 1 && (
                  <div className="mt-8 pt-8 border-t border-gray-200"></div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Note */}
          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold gatech-navy mb-2">Still have questions?</h3>
              <p className="text-gray-600 mb-4">
                Don't see your question here? Join our community platforms and ask away! Our members are always happy to help.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('community-links')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-gatech-navy hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
