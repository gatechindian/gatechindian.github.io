
'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Users, MessageSquare, Linkedin } from 'lucide-react'

export function AboutSection() {
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

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Our Community
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are a vibrant community of Indian students pursuing and alumni of Georgia Tech's prestigious online master's programs from anywhere on the globe. 
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
              Just like in regular college, online master's students have classmates too—just virtually. 
              Connect with other Indian students and make the most of everyone's knowledge and experience, 
              including current students and alumni. Let's grow together!
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="border-0 shadow-lg card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">WhatsApp Groups</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Real-time discussions and quick help for immediate questions and updates.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">LinkedIn Community</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Professional networking, career discussions, and alumni connections.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Discord Server</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Structured discussions, study groups, and project collaboration spaces.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
