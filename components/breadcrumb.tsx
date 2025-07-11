'use client'

import { ChevronRight, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BreadcrumbItem {
  label: string
  href?: string
  isActive?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  const scrollToSection = (href: string) => {
    const target = href.replace('#', '')
    const element = document.getElementById(target)
    
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav 
      className={`flex items-center space-x-1 text-sm text-muted-foreground ${className}`}
      aria-label="Breadcrumb"
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={() => scrollToSection('#hero')}
        className="p-1 h-auto text-muted-foreground hover:text-foreground"
        aria-label="Go to home"
      >
        <Home className="w-4 h-4" />
      </Button>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-1">
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          {item.isActive ? (
            <span 
              className="text-foreground font-medium"
              aria-current="page"
            >
              {item.label}
            </span>
          ) : item.href ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(item.href!)}
              className="p-1 h-auto text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Button>
          ) : (
            <span className="text-muted-foreground">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}

// Predefined breadcrumb configurations for different sections
export const breadcrumbConfigs = {
  about: [
    { label: 'About', isActive: true }
  ],
  coreTopics: [
    { label: 'Course Logistics', isActive: true }
  ],
  cityMeetups: [
    { label: 'City Meetups', isActive: true }
  ],
  jobPrep: [
    { label: 'Job Preparation', isActive: true }
  ],
  faq: [
    { label: 'FAQs', isActive: true }
  ],
  resources: [
    { label: 'Resources', isActive: true }
  ]
} 