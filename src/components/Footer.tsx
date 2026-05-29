import React from 'react';
import { MessageCircle, Phone, Mail, Heart } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Brand Column */}
            <div>
              <img
                src={siteContent.logo}
                alt="Mannai Kanchi Silks logo"
                className="h-10 w-auto object-contain mb-4"
              />
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                {siteContent.footer.tagline}
              </p>
              <p className="text-white/60 text-xs">
                {siteContent.tagline}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4 font-serif">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById('about');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/80 hover:text-secondary transition-colors text-sm"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById('collection');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/80 hover:text-secondary transition-colors text-sm"
                  >
                    Our Collection
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/80 hover:text-secondary transition-colors text-sm"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4 font-serif">Get In Touch</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={siteContent.whatsapp.link}
                    className="flex items-center space-x-3 text-white/80 hover:text-secondary transition-colors text-sm group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-secondary/20 flex items-center justify-center transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a
                    href={siteContent.phone.link}
                    className="flex items-center space-x-3 text-white/80 hover:text-secondary transition-colors text-sm group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-secondary/20 flex items-center justify-center transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>{siteContent.phone.display}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteContent.email}`}
                    className="flex items-center space-x-3 text-white/80 hover:text-secondary transition-colors text-sm group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-secondary/20 flex items-center justify-center transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="break-all">{siteContent.email}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 text-sm text-center md:text-left">
                © {currentYear} Mannai Kanchi Silks. All rights reserved.
              </p>
              <p className="flex items-center space-x-1 text-white/60 text-sm">
                <span>Crafted with</span>
                <Heart className="w-4 h-4 text-primary fill-current" />
                <span>in Chennai</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
