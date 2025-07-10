'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Calendar, Users, ExternalLink } from 'lucide-react'

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
    <section id="city-meetups" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              City Meetups
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join local meetups in major Indian cities to connect with fellow OMSCS students, 
              share experiences, and build your professional network.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {cities.map((city, index) => (
              <Card key={index} className="border-0 shadow-lg card-hover bg-card group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 ${city.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <city.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {city.name}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
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
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Start Your Own Meetup
                    </h3>
                    <p className="text-muted-foreground">
                      Don't see your city? Organize meetups in your area and grow the community
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
                      Join Community
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