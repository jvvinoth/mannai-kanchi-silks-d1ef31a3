export interface Product {
  id: string;
  name: string;
  price: string;
  priceAmount: number;
  image: string;
}

export interface SiteContent {
  logo: string;
  businessName: string;
  tagline: string;
  whatsapp: {
    number: string;
    link: string;
  };
  phone: {
    display: string;
    link: string;
  };
  email: string;
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    content: string[];
  };
  products: {
    title: string;
    subtitle: string;
    items: Product[];
  };
  features: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}

export const siteContent: SiteContent = {
  logo: 'https://pub-b10352cd30db47758f1614c0d15bce2c.r2.dev/media/60147120482/2026-05/e07e9388-17af-44fc-83e1-7be1d5fa224b.png',
  businessName: 'Mannai Kanchi Silks',
  tagline: 'Timeless Elegance in Every Weave',
  whatsapp: {
    number: '+917904003326',
    link: 'https://wa.me/917904003326'
  },
  phone: {
    display: '+91 79040 03326',
    link: 'tel:+917904003326'
  },
  email: 'jvvinoth2@gmail.com',
  hero: {
    title: 'Authentic Kanchipuram Silk Sarees from Chennai',
    subtitle: 'Discover our handpicked collection of premium Kanchipuram silk sarees. Each piece is carefully selected to bring you the finest craftsmanship and timeless beauty.',
    cta: 'Browse Collection'
  },
  about: {
    title: 'The Legacy of Kanchipuram Silk',
    content: [
      'At Mannai Kanchi Silks, we bring you the finest collection of authentic Kanchipuram silk sarees directly from the heart of Chennai. With decades of expertise in the textile industry, we understand the artistry and heritage behind every weave.',
      'Our sarees are handpicked from master weavers who have perfected their craft over generations. Each piece tells a story of tradition, elegance, and unmatched quality that has made Kanchipuram silk world-renowned.',
      'We pride ourselves on offering genuine Kanchipuram silk sarees that embody the perfect blend of traditional craftsmanship and contemporary appeal. Whether for weddings, festivals, or special occasions, our collection caters to discerning customers who appreciate authentic luxury.'
    ]
  },
  products: {
    title: 'Our Premium Collection',
    subtitle: 'Handpicked authentic Kanchipuram silk sarees',
    items: [
      {
        id: 'TSW300802',
        name: 'Magenta And Pastel Blue Kanchipuram Silk Saree',
        price: 'TSW300802',
        priceAmount: 21000,
        image: 'https://pub-b10352cd30db47758f1614c0d15bce2c.r2.dev/media/60147120482/2026-05/42d6bbe0-f5c6-4567-a322-2a1b2ceef0b5.png'
      },
      {
        id: 'TS201101',
        name: 'Red Kanchipuram Silk Saree',
        price: 'TS201101',
        priceAmount: 90000,
        image: 'https://pub-b10352cd30db47758f1614c0d15bce2c.r2.dev/media/60147120482/2026-05/4075e3c5-eb9a-4562-8186-887c8d804310.png'
      },
      {
        id: 'TSW021001',
        name: 'Yellow And Red Kanchipuram Silk Saree',
        price: 'TSW021001',
        priceAmount: 37800,
        image: 'https://pub-b10352cd30db47758f1614c0d15bce2c.r2.dev/media/60147120482/2026-05/5c3a0773-f305-428a-9732-bad5ba63dd6a.png'
      }
    ]
  },
  features: {
    title: 'Why Choose Mannai Kanchi Silks',
    items: [
      {
        title: 'Authentic Quality',
        description: 'Every saree is sourced directly from master weavers in Kanchipuram, ensuring 100% genuine silk and traditional craftsmanship.'
      },
      {
        title: 'Curated Collection',
        description: 'Our collection is carefully handpicked to offer you the finest designs, colors, and patterns that exemplify Kanchipuram heritage.'
      },
      {
        title: 'Easy WhatsApp Ordering',
        description: 'Browse our collection and place your order seamlessly through WhatsApp. We make shopping for luxury silk sarees simple and convenient.'
      },
      {
        title: 'Valasaravakkam, Chennai Expertise',
        description: 'Based in Valasaravakkam, Chennai, Tamilnadu 600083, we have direct access to the best Kanchipuram silk sarees and deep knowledge of this timeless art form.'
      }
    ]
  },
  contact: {
    title: 'Start Your Journey to Timeless Elegance',
    subtitle: 'Connect with us on WhatsApp to explore our full collection and receive personalized assistance',
    cta: 'Message Us on WhatsApp'
  },
  footer: {
    tagline: 'Bringing you authentic Kanchipuram silk sarees from Valasaravakkam, Chennai, Tamilnadu 600083',
    copyright: '© 2024 Mannai Kanchi Silks. All rights reserved.'
  }
};
