import { useState, useEffect } from 'react';
import { MessageCircle, Phone, Menu, X } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={siteContent.logo}
              alt="Mannai Kanchi Silks logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-text hover:text-primary font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('collection')}
              className="text-text hover:text-primary font-medium transition-colors"
            >
              Collection
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-text hover:text-primary font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={siteContent.phone.link}
              className="flex items-center space-x-2 text-text hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{siteContent.phone.display}</span>
            </a>
            <a
              href={siteContent.whatsapp.link}
              className="flex items-center space-x-2 bg-primary hover:bg-accent text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-text hover:text-primary font-medium transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('collection')}
                className="text-text hover:text-primary font-medium transition-colors text-left"
              >
                Collection
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-text hover:text-primary font-medium transition-colors text-left"
              >
                Contact
              </button>
              <a
                href={siteContent.phone.link}
                className="flex items-center space-x-2 text-text hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">{siteContent.phone.display}</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
