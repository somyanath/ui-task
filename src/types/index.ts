export interface Product {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  currency: string;
  rating: number;
  badge: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  content: string;
  designation: string;
  avatar: string;
}

export interface ContentData {
  navigation: {
    logo: string;
    primaryNav: NavItem[];
    secondaryNav: NavItem[];
  };
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    backgroundImage: string;
  };
  whyChoose: {
    title: string;
    content: {
      heading: string;
      description: string;
      ctaText: string;
      ctaLink: string;
      image: string;
    };
  };
  bestSellers: {
    title: string;
    viewAllText: string;
    viewAllLink: string;
    products: Product[];
  };
  testimonials: {
    title: string;
    reviews: Testimonial[];
  };
  promotion: {
    title: string;
    subtitle: string;
    urgencyText: string;
    ctaText: string;
    ctaLink: string;
    discountCode: string;
    discountPercentage: number;
    startDate: string;
    endDate: string;
  };
  blog: {
    title: string;
    featured: {
      title: string;
      excerpt: string;
      ctaText: string;
      ctaLink: string;
      image: string;
    };
  };
  footer: {
    logo: string;
    newsletter: {
      title: string;
      placeholder: string;
      buttonText: string;
    };
    quickLinks: {
      title: string;
      links: NavItem[];
    };
    company: {
      title: string;
      links: NavItem[];
    };
    copyright: string;
  };
}