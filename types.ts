export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  icon: string;
  category: 'exterior' | 'interior' | 'full';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

// Added Recommendation interface to resolve import errors
export interface Recommendation {
  packageId: string;
  reasoning: string;
  suggestedAddons: string[];
}
