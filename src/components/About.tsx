import { Award, Heart, Sparkles, Users } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const About: React.FC = () => {
  const icons = [Award, Heart, Sparkles, Users];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
              {siteContent.about.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              {siteContent.about.content.map((paragraph, index) => (
                <p key={index} className="text-text/80 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=80"
                  alt="Traditional Kanchipuram silk saree weaving"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Border */}
              <div className="absolute -inset-4 border-2 border-secondary rounded-2xl -z-10 opacity-30"></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteContent.features.items.map((feature, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-surface hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-secondary/20"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-white mb-4 shadow-md">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg text-text mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
