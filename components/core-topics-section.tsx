
'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { CreditCard, Briefcase, MapPin, GraduationCap } from 'lucide-react'

const topics = [
  {
    icon: CreditCard,
    title: 'Course Logistics',
    description: 'Get practical tips for managing payments from India.',
    details: [
      'Course based study groups',
      'Course payment methods',
      'program accountability',
    ]
  },
  {
    icon: Briefcase,
    title: 'Job Search & Career',
    description: 'Learn from success stories and build your professional network.',
    details: [
      'Resume review',
      'Job prep study group',
      'Interview preparation and skill development',
      'Job search resources and job fairs'
    ]
  },
  {
    icon: MapPin,
    title: 'Location-Specific Meetups',
    description: 'Connect with fellow students in your city. Organize study groups, networking events, and social gatherings.',
    details: [
      'City-wise student meetups',
      'Local networking events and gatherings',
      'Alumni connections'
    ]
  }
]

export function CoreTopicsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('core-topics')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="core-topics" className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Core Discussion Topics
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our community focuses on areas that matter to Indians pusuing in Georgia Tech's online programs from anywhere on the globe.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <Card key={index} className="border-0 shadow-lg card-hover bg-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <topic.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {topic.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {topic.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {topic.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
