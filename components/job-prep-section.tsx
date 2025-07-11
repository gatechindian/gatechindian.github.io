'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  ExternalLink, 
  Briefcase, 
  BookOpen, 
  Users, 
  Code, 
  MessageSquare, 
  FileText, 
  Globe,
  Target,
  TrendingUp
} from 'lucide-react'
import { Breadcrumb, breadcrumbConfigs } from '@/components/breadcrumb'

const jobPrepResources = [
  {
    icon: Code,
    title: 'LeetCode',
    description: 'Practice coding problems for technical interviews with 2000+ problems across all difficulty levels.',
    link: 'https://leetcode.com/',
    category: 'Coding Practice',
    difficulty: 'All Levels',
    free: true
  },
  {
    icon: Code,
    title: 'HackerRank',
    description: 'Comprehensive platform for coding challenges, skill assessments, and interview preparation.',
    link: 'https://www.hackerrank.com/',
    category: 'Coding Practice',
    difficulty: 'All Levels',
    free: true
  },
  {
    icon: Code,
    title: 'GeeksforGeeks',
    description: 'Indian platform with extensive DSA practice, company-specific questions, and interview experiences.',
    link: 'https://www.geeksforgeeks.org/',
    category: 'Coding Practice',
    difficulty: 'All Levels',
    free: true
  },
  {
    icon: Briefcase,
    title: 'LinkedIn Jobs',
    description: 'Professional job search platform with networking opportunities and company insights.',
    link: 'https://www.linkedin.com/jobs/',
    category: 'Job Search',
    difficulty: 'All Levels',
    free: true
  },
  {
    icon: Globe,
    title: 'Indeed',
    description: 'Global job search engine with millions of job listings and company reviews.',
    link: 'https://www.indeed.com/',
    category: 'Job Search',
    difficulty: 'All Levels',
    free: true
  },
  {
    icon: Target,
    title: 'AngelList Talent',
    description: 'Job platform focused on startups and tech companies, great for early-career opportunities.',
    link: 'https://angel.co/talent',
    category: 'Job Search',
    difficulty: 'Entry-Mid',
    free: true
  },
  {
    icon: BookOpen,
    title: 'Cracking the Coding Interview',
    description: 'Essential book by Gayle McDowell with 189 programming questions and solutions.',
    link: 'https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850',
    category: 'Interview Prep',
    difficulty: 'All Levels',
    free: false
  },
  {
    icon: FileText,
    title: 'System Design Primer',
    description: 'Comprehensive guide to system design interviews with real-world examples.',
    link: 'https://github.com/donnemartin/system-design-primer',
    category: 'Interview Prep',
    difficulty: 'Mid-Senior',
    free: true
  },
  {
    icon: Users,
    title: 'Pramp',
    description: 'Free peer-to-peer mock interview platform for technical and behavioral interviews.',
    link: 'https://www.pramp.com/',
    category: 'Mock Interviews',
    difficulty: 'All Levels',
    free: true
  },
  {
    icon: MessageSquare,
    title: 'InterviewBit',
    description: 'Indian platform with curated interview questions and company-specific preparation.',
    link: 'https://www.interviewbit.com/',
    category: 'Interview Prep',
    difficulty: 'All Levels',
    free: true
  },
  {
    icon: TrendingUp,
    title: 'Glassdoor',
    description: 'Company reviews, salary insights, and interview questions from real employees.',
    link: 'https://www.glassdoor.com/',
    category: 'Company Research',
    difficulty: 'All Levels',
    free: true
  },
  {
    icon: Briefcase,
    title: 'Resume Builder',
    description: 'Professional resume builder with ATS-friendly templates and optimization tips.',
    link: 'https://www.resumebuilder.com/',
    category: 'Resume',
    difficulty: 'All Levels',
    free: true
  }
]

const categories = [
  { name: 'Coding Practice', color: 'bg-blue-500' },
  { name: 'Job Search', color: 'bg-green-500' },
  { name: 'Interview Prep', color: 'bg-purple-500' },
  { name: 'Mock Interviews', color: 'bg-orange-500' },
  { name: 'Company Research', color: 'bg-red-500' },
  { name: 'Resume', color: 'bg-teal-500' }
]

export function JobPrepSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('job-prep')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const filteredResources = selectedCategory === 'All' 
    ? jobPrepResources 
    : jobPrepResources.filter(resource => resource.category === selectedCategory)

  return (
    <section id="job-prep" className="mobile-py bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Breadcrumb items={breadcrumbConfigs.jobPrep} />
          </div>
          
          <div className="text-center mobile-mb">
            <h2 className="mobile-text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Job Preparation Resources
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-6 sm:mb-8"></div>
            <p className="mobile-text-lg text-foreground max-w-3xl mx-auto px-4">
              Comprehensive resources to help you prepare for technical interviews, 
              build your resume, and land your dream job in tech.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4">
            <Button
              variant={selectedCategory === 'All' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('All')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs sm:text-sm px-3 sm:px-4 py-2"
            >
              All Resources
            </Button>
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.name)}
                className={`text-xs sm:text-sm px-3 sm:px-4 py-2 ${
                  selectedCategory === category.name ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : ''
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
          
          <div className="mobile-grid mb-12 sm:mb-16">
            {filteredResources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-lg card-hover bg-card mobile-card">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <resource.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {resource.category}
                        </Badge>
                        {resource.free && (
                          <Badge variant="outline" className="text-xs text-green-600 border-green-600">
                            Free
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">
                        {resource.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-foreground text-sm leading-relaxed mb-3 sm:mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-xs text-muted-foreground">
                      Level: {resource.difficulty}
                    </span>
                  </div>
                  
                  <Button 
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mobile-button-sm"
                  >
                    <a 
                      href={resource.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Visit Resource
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-accent/10">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="mobile-text-2xl font-bold text-foreground mb-2">
                      Job Prep Community
                    </h3>
                    <p className="text-foreground mobile-body">
                      Connect with fellow job seekers and find accountability buddy, share interview experiences, and get career advice
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
                      Join Job Prep Group
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