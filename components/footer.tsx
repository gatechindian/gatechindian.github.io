
'use client'

import { MessageCircle, Users, ExternalLink, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const handleDiscordClick = () => {
    // Replace with actual Discord invite link
    window.open('https://discord.gg/your-discord-invite', '_blank')
  }

  const handleLinkedInClick = () => {
    // Replace with actual LinkedIn group link
    window.open('https://www.linkedin.com/groups/your-linkedin-group', '_blank')
  }

  const handleEmailClick = () => {
    window.open('mailto:contact@gatech-indian-community.com', '_blank')
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">GaTech Indian Community</h3>
            <p className="text-gray-300 mb-4">
              A vibrant community of Indians pursuing Georgia Tech Online Masters of Science in Computer Science. 
              We support each other through our academic journey and beyond.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleDiscordClick}
                className="bg-indigo-600 hover:bg-indigo-700 p-3 rounded-lg transition-colors"
                aria-label="Join Discord"
              >
                <MessageCircle size={20} />
              </button>
              <button
                onClick={handleLinkedInClick}
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors"
                aria-label="Join LinkedIn"
              >
                <Users size={20} />
              </button>
              <button
                onClick={handleEmailClick}
                className="bg-gray-600 hover:bg-gray-700 p-3 rounded-lg transition-colors"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Community
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://omscs.gatech.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  OMSCS Website
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.gatech.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  Georgia Tech
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/r/OMSCS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  OMSCS Reddit
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://omscentral.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  OMSCentral
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 mb-2">
            Made with <Heart size={16} className="inline text-red-500" /> by the GaTech Indian Community
          </p>
          <p className="text-gray-400 text-sm">
            © 2024 GaTech Indian Community. This website is not officially affiliated with Georgia Institute of Technology.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
