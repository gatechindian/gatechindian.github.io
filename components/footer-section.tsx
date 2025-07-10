
'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Users, MessageSquare, Mail, Heart } from 'lucide-react'

export function FooterSection() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-6">GaTech Indian Community</h3>
            <p className="text-background/80 leading-relaxed mb-6">
              Your trusted companion throughout your Georgia Tech online master's journey. 
              We're here to support, guide, and celebrate your success.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>by the community</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a 
                href="#about-section" 
                className="block text-background/80 hover:text-background transition-colors"
              >
                About Us
              </a>
              <a 
                href="#core-topics-section" 
                className="block text-background/80 hover:text-background transition-colors"
              >
                Core Topics
              </a>
              <a 
                href="#faq-section" 
                className="block text-background/80 hover:text-background transition-colors"
              >
                FAQs
              </a>
              <a 
                href="#resources-section" 
                className="block text-background/80 hover:text-background transition-colors"
              >
                Resources
              </a>
            </div>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Connect With Us</h4>
            <div className="space-y-4">
              <Button 
                asChild
                variant="outline"
                className="w-full bg-transparent border-background/30 text-background hover:bg-background/10"
              >
                <a 
                  href="https://www.linkedin.com/groups/14514097/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Users className="w-4 h-4" />
                  LinkedIn Group
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                className="w-full bg-transparent border-background/30 text-background hover:bg-background/10"
              >
                <a 
                  href="https://discord.gg/DHHtG2hK" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Discord Server
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              
              <div className="pt-4 border-t border-background/20">
                <p className="text-sm text-background/80 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  For inquiries:
                </p>
                <p className="text-sm text-background/60">
                  Please connect with us through our LinkedIn community for all questions and support.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-background/20 text-center">
          <p className="text-background/60 text-sm">
            © 2025 GaTech Indian Community. A student-led initiative to support Indian students in Georgia Tech's online master's programs.
          </p>
        </div>
      </div>
    </footer>
  )
}
