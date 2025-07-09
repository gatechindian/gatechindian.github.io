
'use client'

import { useEffect, useState } from 'react'
import { ExternalLink, MessageCircle, BookOpen, School, Users } from 'lucide-react'

export default function ResourcesSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const resources = [
    {
      icon: MessageCircle,
      title: "OMSCS Reddit",
      description: "Active community discussions, course reviews, and student experiences shared on the official OMSCS subreddit.",
      url: "https://www.reddit.com/r/OMSCS/",
      color: "text-orange-500"
    },
    {
      icon: BookOpen,
      title: "OMSCentral",
      description: "Comprehensive course reviews, difficulty ratings, and workload information to help you plan your academic journey.",
      url: "https://www.omscentral.com",
      color: "text-blue-500"
    },
    {
      icon: School,
      title: "Official OMSCS Site",
      description: "Georgia Tech's official Online Master of Science in Computer Science program website with admissions and course info.",
      url: "https://omscs.gatech.edu/",
      color: "text-[#B3A369]"
    },
    {
      icon: Users,
      title: "GaTech Slack",
      description: "Join the official Georgia Tech enterprise Slack workspace for real-time communication with fellow students and faculty.",
      url: "https://gatech.enterprise.slack.com",
      color: "text-green-500"
    }
  ]

  return (
    <section id="resources" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gatech-navy mb-6">
            Essential Resources
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Curated collection of the most valuable resources for Georgia Tech Online Masters students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md card-hover">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm ${resource.color}`}>
                  <resource.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold gatech-navy mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{resource.description}</p>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#B3A369] hover:text-[#A08A4F] font-medium transition-colors"
                  >
                    Visit Site
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-[#B3A369]/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold gatech-navy mb-2">Need More Help?</h3>
            <p className="text-gray-600 mb-4">
              Our community is always here to help! Join our Discord or LinkedIn group to connect with fellow students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/DHHtG2hK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#B3A369] text-white font-semibold rounded-lg hover:bg-[#A08A4F] transition-colors"
              >
                Join Discord
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/groups/14514097/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#003057] text-white font-semibold rounded-lg hover:bg-[#002044] transition-colors"
              >
                LinkedIn Group
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
