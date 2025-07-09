
'use client'

import { useInView } from 'react-intersection-observer'
import { CreditCard, Briefcase, MapPin, BookOpen, ExternalLink } from 'lucide-react'

export default function CoreSections() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const resources = [
    {
      name: 'OMSCS Reddit',
      url: 'https://www.reddit.com/r/OMSCS/',
      description: 'Active Reddit community for OMSCS students'
    },
    {
      name: 'OMSCentral',
      url: 'https://www.omscentral.com',
      description: 'Course reviews and ratings by students'
    },
    {
      name: 'Georgia Tech OMSCS',
      url: 'https://omscs.gatech.edu/',
      description: 'Official OMSCS program website'
    },
    {
      name: 'GaTech Enterprise Slack',
      url: 'https://gatech.enterprise.slack.com',
      description: 'Official Georgia Tech Slack workspace'
    }
  ]

  const sections = [
    {
      id: 'course-logistics',
      title: 'Course Payment Logistics',
      icon: CreditCard,
      content: (
        <div className="text-center py-8">
          <div className="gt-gold-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard size={32} className="text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Coming Soon</h3>
          <p className="text-gray-600 mb-4">
            We're working on comprehensive guides for course payment logistics, 
            including information about:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>• Payment methods and procedures</li>
            <li>• International payment solutions</li>
            <li>• Financial aid and scholarships</li>
            <li>• Payment deadlines and schedules</li>
          </ul>
          <p className="text-gray-600 mt-4">
            Stay tuned for detailed resources and community discussions on this topic.
          </p>
        </div>
      )
    },
    {
      id: 'job-search',
      title: 'Job Search Support',
      icon: Briefcase,
      content: (
        <div className="text-center py-8">
          <div className="gt-gold-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Briefcase size={32} className="text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Career Network</h3>
          <p className="text-gray-600 mb-4">
            Connect with fellow Indian students and alumni to enhance your job search:
          </p>
          <ul className="text-gray-600 space-y-2 mb-4">
            <li>• Networking opportunities with industry professionals</li>
            <li>• Resume reviews and interview preparation</li>
            <li>• Job referrals and company insights</li>
            <li>• Career transition guidance</li>
          </ul>
          <p className="text-gray-600">
            Join our Discord and LinkedIn groups to access job search resources 
            and connect with professionals in your field.
          </p>
        </div>
      )
    },
    {
      id: 'meetups',
      title: 'Location-Specific Meetups',
      icon: MapPin,
      content: (
        <div className="text-center py-8">
          <div className="gt-gold-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin size={32} className="text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Local Connections</h3>
          <p className="text-gray-600 mb-4">
            Join location-specific groups for in-person meetups and networking:
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-medium text-gray-900">Bengaluru</p>
              <p className="text-sm text-gray-600">Tech Hub Meetups</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-medium text-gray-900">Bay Area</p>
              <p className="text-sm text-gray-600">Silicon Valley Network</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-medium text-gray-900">Hyderabad</p>
              <p className="text-sm text-gray-600">IT Corridor Connections</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-medium text-gray-900">Mumbai</p>
              <p className="text-sm text-gray-600">Financial Capital Network</p>
            </div>
          </div>
          <p className="text-gray-600">
            Meetups are organized through our Discord and LinkedIn channels. 
            Join to connect with students in your area.
          </p>
        </div>
      )
    },
    {
      id: 'resources',
      title: 'Useful Resources',
      icon: BookOpen,
      content: (
        <div className="text-center py-8">
          <div className="gt-gold-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen size={32} className="text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Academic Resources</h3>
          <p className="text-gray-600 mb-6">
            Essential resources for Georgia Tech Online Masters students:
          </p>
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-lg card-shadow hover:shadow-lg transition-all duration-300 flex items-center justify-between group"
              >
                <div className="text-left">
                  <h4 className="font-medium text-gray-900 group-hover:text-yellow-700">
                    {resource.name}
                  </h4>
                  <p className="text-sm text-gray-600">{resource.description}</p>
                </div>
                <ExternalLink size={20} className="text-gray-400 group-hover:text-yellow-600" />
              </a>
            ))}
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-800 ${
            inView ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">
              Community Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive resources designed to support your academic journey and professional growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className={`bg-white rounded-lg card-shadow hover:shadow-lg transition-all duration-300 ${
                  inView ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <h3 className="text-2xl font-poppins font-semibold text-gray-900">
                      {section.title}
                    </h3>
                  </div>
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
