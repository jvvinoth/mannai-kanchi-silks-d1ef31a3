import React from 'react';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary via-accent to-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {siteContent.contact.title}
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {siteContent.contact.subtitle}
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* WhatsApp */}
            <a
              href={siteContent.whatsapp.link}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 p-8 rounded-2xl text-center transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 group-hover:bg-white/30 mb-4 transition-colors">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
              <p className="text-white/80 text-sm">Chat with us instantly</p>
            </a>

            {/* Phone */}
            <a
              href={siteContent.phone.link}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 p-8 rounded-2xl text-center transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 group-hover:bg-white/30 mb-4 transition-colors">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <p className="text-white/80 text-sm">{siteContent.phone.display}</p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteContent.email}`}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 p-8 rounded-2xl text-center transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 group-hover:bg-white/30 mb-4 transition-colors">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-white/80 text-sm break-all">{siteContent.email}</p>
            </a>
          </div>

          {/* Main CTA */}
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary mb-6">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Based in Chennai
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Direct access to authentic Kanchipuram silk sarees from the heart of Tamil Nadu's silk weaving heritage
            </p>
            <a
              href={siteContent.whatsapp.link}
              className="inline-flex items-center space-x-3 bg-white text-primary hover:bg-surface px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6" />
              <span>{siteContent.contact.cta}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
