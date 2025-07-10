
'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, BookOpen, Users, Globe, MessageSquare } from 'lucide-react'

const resources = [
  {
    icon: BookOpen,
    title: 'OMSCS Reddit Community',
    description: 'Active discussions, course reviews, and peer support from thousands of current and former students.',
    link: 'https://www.reddit.com/r/OMSCS/',
    category: 'Community'
  },
  {
    icon: Globe,
    title: 'OMSCentral',
    description: 'Comprehensive course reviews, difficulty ratings, and workload information from student experiences.',
    link: 'https://www.omscentral.com',
    category: 'Course Info'
  },
  {
    icon: BookOpen,
    title: 'Official OMSCS Program Site',
    description: 'Official program information, admission requirements, course catalog, and important updates.',
    link: 'https://omscs.gatech.edu/',
    category: 'Official'
  },
  {
    icon: MessageSquare,
    title: 'GaTech Enterprise Slack',
    description: 'Official Georgia Tech Slack workspace for students, alumni, and faculty collaboration.',
    link: 'https://gatech.enterprise.slack.com',
    category: 'Official'
  },
  {
    icon: MessageSquare,
    title: 'OMS Free and Discounted',
    description: 'Free and discounted software for OMSers',
    link: 'https://sites.gatech.edu/omsfreeanddiscounted/',
    category: 'Community'
  },
  {
    icon: MessageSquare,
    title: 'MyCloud',
    description: 'MyCloud is a windows host machine with access to Adobe creative suite, AutoCAD, Matlab and ANSYS.',
    link: 'https://mycloud.gatech.edu',
    category: 'Official'
  }
]

export function ResourcesSection() {
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

    const element = document.getElementById('resources')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="resources" className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Essential Resources
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the key resources that will help you succeed in your Georgia Tech online master's program.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-lg card-hover bg-card">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <resource.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {resource.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {resource.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {resource.description}
                  </p>
                  
                  <Button 
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a 
                      href={resource.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Visit Resource
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Join Our Community
                    </h3>
                    <p className="text-muted-foreground">
                      Connect with fellow Indian students and get personalized guidance
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a 
                      href="https://www.linkedin.com/groups/14514097/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Users className="w-5 h-5" />
                      LinkedIn Community
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  
                  <Button 
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    <a 
                      href="https://discord.gg/DHHtG2hK" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageSquare className="w-5 h-5" />
                      Discord Server
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
