import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const Products: React.FC = () => {
  const formatPrice = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleInquiry = (productName: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in the ${productName}. Can you provide more details?`);
    window.open(`${siteContent.whatsapp.link}?text=${message}`, '_blank');
  };

  return (
    <section id="collection" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-secondary" />
              <span className="text-secondary font-medium tracking-wider uppercase text-sm">
                Premium Collection
              </span>
              <Sparkles className="w-6 h-6 text-secondary" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
              {siteContent.products.title}
            </h2>
            <p className="text-text/70 text-lg max-w-2xl mx-auto">
              {siteContent.products.subtitle}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {siteContent.products.items.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Product Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-text mb-3 line-clamp-2 min-h-[3.5rem]">
                    {product.name}
                  </h3>

                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary">
                        {formatPrice(product.priceAmount)}
                      </span>
                    </div>
                    <span className="text-sm text-text/60 font-medium">
                      {product.price}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleInquiry(product.name)}
                    className="w-full bg-primary hover:bg-accent text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 shadow-md hover:shadow-lg group"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Inquire on WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-text/70 mb-6 text-lg">
              Looking for something specific? Browse our complete collection
            </p>
            <a
              href={siteContent.whatsapp.link}
              className="inline-flex items-center space-x-2 bg-white hover:bg-primary hover:text-white border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>View Full Collection on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
