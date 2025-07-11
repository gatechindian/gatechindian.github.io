'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Calendar, Users, ExternalLink } from 'lucide-react'
import { Breadcrumb, breadcrumbConfigs } from '@/components/breadcrumb'

const cities = [
  {
    name: 'Hyderabad',
    description: 'Tech hub of Telangana with a growing OMSCS community',
    meetupFrequency: 'Semester End',
    color: 'bg-orange-500',
    icon: MapPin
  },
  {
    name: 'Bangalore',
    description: 'India\'s Silicon Valley with the largest OMSCS community',
    meetupFrequency: 'Monthly',
    color: 'bg-green-500',
    icon: MapPin
  },
  {
    name: 'Delhi',
    description: 'National capital region with active tech professionals',
    meetupFrequency: 'Semester End',
    color: 'bg-blue-500',
    icon: MapPin
  },
  {
    name: 'Mumbai',
    description: 'Financial capital with diverse tech community',
    meetupFrequency: 'Semester End',
    color: 'bg-purple-500',
    icon: MapPin
  },
  {
    name: 'Pune',
    description: 'Oxford of the East with strong academic presence',
    meetupFrequency: 'Semester End',
    color: 'bg-red-500',
    icon: MapPin
  },
  {
    name: 'Chennai',
    description: 'Gateway to South India with vibrant tech ecosystem',
    meetupFrequency: 'Semester End',
    color: 'bg-teal-500',
    icon: MapPin
  }
]

export function CityMeetupsSection() {
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

    const element = document.getElementById('city-meetups')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="city-meetups" className="mobile-py bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Breadcrumb items={breadcrumbConfigs.cityMeetups} />
          </div>
          
          <div className="text-center mobile-mb">
            <h2 className="mobile-text-4xl font-bold text-foreground mb-4 sm:mb-6">
              City Meetups
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-6 sm:mb-8"></div>
            <p className="mobile-text-lg text-foreground max-w-3xl mx-auto px-4">
              Join local meetups in major Indian cities to connect with fellow OMSCS students, 
              share experiences, and build your professional network.
            </p>
          </div>
          
          <div className="mobile-grid mb-12 sm:mb-16">
            {cities.map((city, index) => (
              <Card key={index} className="border-0 shadow-lg card-hover bg-card group mobile-card">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${city.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <city.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                        {city.name}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-foreground text-sm leading-relaxed mb-3 sm:mb-4">
                    {city.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-foreground font-medium">{city.meetupFrequency}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-accent/10">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="mobile-text-2xl font-bold text-foreground mb-2">
                      Start Your Own Meetup
                    </h3>
                    <p className="text-foreground mobile-body">
                      Don't see your city? Organize meetups in your area and grow the community
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground mobile-button"
                  >
                    <a 
                      href="https://www.linkedin.com/groups/14514097/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                      Join Community
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
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