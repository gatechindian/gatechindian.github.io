
'use client'

import { MessageCircle, Users, ExternalLink, Calendar, FileText, Video } from 'lucide-react'

const CommunityLinks = () => {
  const handleDiscordClick = () => {
    // Replace with actual Discord invite link
    window.open('https://discord.gg/your-discord-invite', '_blank')
  }

  const handleLinkedInClick = () => {
    // Replace with actual LinkedIn group link
    window.open('https://www.linkedin.com/groups/your-linkedin-group', '_blank')
  }

  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join Our <span className="text-gradient">Community</span>
          </h2>
          <p className="text-xl text-gray-600">
            Connect with fellow students through our active Discord and LinkedIn communities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Discord Community */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 custom-shadow hover-lift">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-600 p-3 rounded-lg">
                <MessageCircle size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Discord Community</h3>
                <p className="text-gray-600">Real-time chat and collaboration</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <MessageCircle size={16} className="text-indigo-600" />
                </div>
                <span className="text-gray-700">24/7 active chat channels</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <FileText size={16} className="text-indigo-600" />
                </div>
                <span className="text-gray-700">Course-specific study groups</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <Video size={16} className="text-indigo-600" />
                </div>
                <span className="text-gray-700">Voice channels for study sessions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <Calendar size={16} className="text-indigo-600" />
                </div>
                <span className="text-gray-700">Event announcements and reminders</span>
              </div>
            </div>

            <button
              onClick={handleDiscordClick}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              Join Discord Server
              <ExternalLink size={18} />
            </button>
          </div>

          {/* LinkedIn Community */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 custom-shadow hover-lift">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Users size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">LinkedIn Group</h3>
                <p className="text-gray-600">Professional networking and opportunities</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Users size={16} className="text-blue-600" />
                </div>
                <span className="text-gray-700">Professional networking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <FileText size={16} className="text-blue-600" />
                </div>
                <span className="text-gray-700">Job postings and referrals</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Video size={16} className="text-blue-600" />
                </div>
                <span className="text-gray-700">Industry insights and discussions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Calendar size={16} className="text-blue-600" />
                </div>
                <span className="text-gray-700">Career development resources</span>
              </div>
            </div>

            <button
              onClick={handleLinkedInClick}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              Join LinkedIn Group
              <ExternalLink size={18} />
            </button>
          </div>
        </div>

        {/* Community Stats */}
        <div className="mt-16 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 custom-shadow">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Community Impact</h3>
            <p className="text-gray-600">See how our community is making a difference</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">500+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">50+</div>
              <div className="text-gray-600">Cities Represented</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">200+</div>
              <div className="text-gray-600">Job Referrals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">100+</div>
              <div className="text-gray-600">Meetups Organized</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunityLinks
