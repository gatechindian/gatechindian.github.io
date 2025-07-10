
'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqData = [
  {
    category: 'Application Journey',
    questions: [
      {
        question: 'How can I prepare if I have a non-CS background?',
        answer: 'Take for-credit courses: Enroll in and earn good grades (B or better) in upper-level computer science courses from an accredited institution. Master key concepts including Object-Oriented Design Principles, Data Structures, and Algorithms. You can also utilize Georgia Tech\'s MOOCs and Professional Certificate programs on platforms like edX, though these are rarely sufficient on their own for admission.'
      },
      {
        question: 'What are the key application requirements for Indian students?',
        answer: 'English Language Proficiency: TOEFL/IELTS scores are mandatory (minimum TOEFL score is 100). Academic Transcripts: Submit scans of official transcripts with both native language documents AND official English translations. GPA Conversion: Do not convert your GPA yourself - Georgia Tech will perform the official conversion. Letters of Recommendation: Three letters required from academic or professional references. GRE is not required for OMSCS.'
      },
    ]
  },
  {
    category: 'Financials',
    questions: [
      {
        question: 'How do I pay tuition from India?',
        answer: 'Upon admission, you will receive detailed instructions on the payment process. Payments are made through Georgia Tech\'s official student portal. International students typically use credit cards or international wire transfers to pay their fees. Payment deadlines are published on the university\'s official academic calendar.'
      },
      {
        question: 'Can I get my tuition reimbursed by my employer?',
        answer: 'Many students leverage employer tuition assistance programs. Given the program\'s affordability, even modest subsidies from employers can cover a significant portion or all of the cost. Many large IT and technology firms in India have policies that support employee higher education.'
      }
    ]
  },
  {
    category: 'Program Structure',
    questions: [
      {
        question: 'How do I choose my first course?',
        answer: 'Start with one course if you are working full-time to acclimate to the workload. Choose a foundational course for your first semester. Consult community resources like OMSCentral.com and the /r/OMSCS subreddit for student reviews and discussions about course difficulty and workload.'
      },
      {
        question: 'What is a typical weekly workload?',
        answer: 'The workload is equivalent to the on-campus program. Budget approximately three hours of work per week for each credit hour, plus time for watching lectures. One 3-credit course: 9-12 hours per week. Two 3-credit courses: 18-20+ hours per week.'
      },
      {
        question: 'How long does it take to graduate?',
        answer: 'The typical completion time is about three years, assuming a student takes one or two courses per semester. Students have a maximum of six years to complete the degree.'
      }
    ]
  },
  {
    category: 'Exams & Proctoring',
    questions: [
      {
        question: 'How are exams conducted?',
        answer: 'Most courses with exams use an online proctoring service called Honorlock. This software monitors you via webcam, microphone, and screen during the exam to ensure academic honesty.'
      },
      {
        question: 'What are the technical requirements for exams in India?',
        answer: 'Stable Internet Connection: Most critical requirement. Have a backup internet option (mobile hotspot) ready. Webcam and Microphone: Functional webcam and microphone are mandatory. Private, Quiet Environment: Honorlock requires a room scan before the exam. You must be in a private room with a clean desk, free of unauthorized materials.'
      },
      {
        question: 'Are all courses exam-based?',
        answer: 'No. Many courses are entirely project-based and do not have proctored exams.'
      }
    ]
  },
  {
    category: 'Career Development',
    questions: [
      {
        question: 'How does the program help with job searches?',
        answer: 'The curriculum imparts practical, in-demand skills. Completing challenging projects provides concrete achievements for your resume.'
      },
      {
        question: 'Will my diploma say "Online"?',
        answer: 'No. The diploma reads "Master of Science in Computer Science" (or Analytics/Cybersecurity). It is identical to the diploma awarded to on-campus students and carries the full prestige of a Georgia Tech degree.'
      },
      {
        question: 'Does the program qualify me for OPT in the U.S.?',
        answer: 'No. Because these are online programs designed for students to complete from their home country, they do not grant F-1 visa status. Therefore, students studying from India are not eligible for OPT in the United States upon graduation.'
      }
    ]
  },
  {
    category: 'International Student Concerns',
    questions: [
      {
        question: 'Do I need to verify "Lawful Presence" in the U.S.?',
        answer: 'No. The requirement to verify lawful presence in the United States does not apply to international students who will remain living outside of the U.S. and are enrolling only in distance education courses.'
      },
      {
        question: 'Is the degree recognized internationally?',
        answer: 'Yes. The degree is awarded by the Georgia Institute of Technology, a globally recognized and top-ranked university. The diploma makes no distinction between online and on-campus graduates, ensuring it holds the same academic weight and international recognition.'
      }
    ]
  }
]

export function FAQSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [openItems, setOpenItems] = useState<{[key: string]: boolean}>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('faqs')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <section id="faqs" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to the most common questions about Georgia Tech's online master's programs from an Indian student perspective.
            </p>
          </div>
          
          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">{categoryIndex + 1}</span>
                    </div>
                    {category.category}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const itemId = `${categoryIndex}-${faqIndex}`
                      const isOpen = openItems[itemId]
                      
                      return (
                        <Collapsible
                          key={faqIndex}
                          open={isOpen}
                          onOpenChange={() => toggleItem(itemId)}
                        >
                          <CollapsibleTrigger className="w-full text-left p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors">
                            <div className="flex items-center justify-between">
                              <h4 className="text-lg font-semibold text-foreground pr-4">
                                {faq.question}
                              </h4>
                              {isOpen ? (
                                <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                              )}
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="px-4 pb-4">
                            <p className="text-muted-foreground leading-relaxed pt-3">
                              {faq.answer}
                            </p>
                          </CollapsibleContent>
                        </Collapsible>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
