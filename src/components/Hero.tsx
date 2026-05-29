import { ChevronDown } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const Hero: React.FC = () => {
  const scrollToCollection = () => {
    const element = document.getElementById('collection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-surface via-white to-surface">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C41E3A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative Element */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary"></div>
            <div className="mx-4 text-secondary font-serif text-sm tracking-widest uppercase">
              {siteContent.businessName}
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary"></div>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-tight">
            {siteContent.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-text/80 mb-10 leading-relaxed max-w-3xl mx-auto">
            {siteContent.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={scrollToCollection}
              className="bg-primary hover:bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto"
            >
              {siteContent.hero.cta}
            </button>
            <a
              href={siteContent.whatsapp.link}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 w-full sm:w-auto"
            >
              Contact Us
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToCollection}
            className="inline-flex flex-col items-center text-text/60 hover:text-primary transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-2">Discover More</span>
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};
