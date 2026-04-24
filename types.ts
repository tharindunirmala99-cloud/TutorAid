
export interface Tutor {
  id: string;
  name: string;
  subject: string;
  rating: number;
  bio: string;
  tags: string[];
  imageUrl: string;
  gradient: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}
