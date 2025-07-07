
'use client'

import { MessageCircle, Users, MessageSquare, ArrowUpRight, Star, Calendar, Zap } from 'lucide-react'

export default function CommunityLinks() {
  const communityPlatforms = [
    {
      name: 'WhatsApp Groups',
      description: 'Join our various WhatsApp groups for real-time discussions, housing updates, and quick help',
      icon: <MessageCircle className="w-8 h-8" />,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      link: 'https://chat.whatsapp.com/gatech-indian',
      features: ['Real-time messaging', 'Housing groups', 'City-specific chats', 'Academic discussions'],
      members: '500+ members'
    },
    {
      name: 'LinkedIn Network',
      description: 'Connect professionally with alumni and current students across industries',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      link: 'https://linkedin.com/company/gatech-indian',
      features: ['Professional networking', 'Job opportunities', 'Industry insights', 'Alumni connections'],
      members: '1200+ professionals'
    },
    {
      name: 'Discord Server',
      description: 'Engage in organized discussions, study groups, and gaming sessions',
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'bg-indigo-500',
      hoverColor: 'hover:bg-indigo-600',
      link: 'https://discord.gg/gatech-indian',
      features: ['Study groups', 'Gaming channels', 'Voice chats', 'Project collaboration'],
      members: '300+ active users'
    }
  ]

  const benefits = [
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Instant Support',
      description: 'Get help from community members 24/7'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Event Updates',
      description: 'Stay informed about meetups and activities'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Quick Connections',
      description: 'Find roommates, study partners, and friends'
    }
  ]

  return (
    <section id="community-links" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold gatech-navy mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with fellow GaTech Indian students and alumni across multiple platforms. Choose the ones that work best for you!
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg card-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold gatech-navy mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Community Platforms */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {communityPlatforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 card-shadow hover-shadow hover-scale transition-all duration-300"
              >
                {/* Platform Header */}
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${platform.color} text-white mr-4`}>
                    {platform.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold gatech-navy">{platform.name}</h3>
                    <p className="text-sm text-gray-500">{platform.members}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {platform.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold gatech-navy mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Join Button */}
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-200 ${platform.color} ${platform.hoverColor} hover:transform hover:scale-105`}
                >
                  Join {platform.name}
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Connect?
              </h3>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Join thousands of GaTech Indian students and alumni who are already part of our vibrant community. Your journey starts here!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://chat.whatsapp.com/gatech-indian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Join WhatsApp
                </a>
                <a
                  href="https://linkedin.com/company/gatech-indian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 inline-flex items-center justify-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="mt-12">
            <div className="bg-white rounded-lg p-6 card-shadow">
              <h3 className="text-lg font-semibold gatech-navy mb-4">Community Guidelines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-medium gatech-navy mb-2">✅ Do:</h4>
                  <ul className="space-y-1">
                    <li>• Be respectful and inclusive</li>
                    <li>• Share relevant opportunities</li>
                    <li>• Help fellow community members</li>
                    <li>• Use appropriate channels for discussions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium gatech-navy mb-2">❌ Don't:</h4>
                  <ul className="space-y-1">
                    <li>• Spam or self-promote excessively</li>
                    <li>• Share personal information publicly</li>
                    <li>• Engage in discriminatory behavior</li>
                    <li>• Post irrelevant content</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
