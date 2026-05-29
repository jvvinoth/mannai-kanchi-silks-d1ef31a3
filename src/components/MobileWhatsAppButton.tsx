import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const MobileWhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide button when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <a
      href={siteContent.whatsapp.link}
      className={`md:hidden fixed bottom-6 right-6 z-40 bg-primary hover:bg-accent text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } hover:scale-110 active:scale-95`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse"></span>
    </a>
  );
};
