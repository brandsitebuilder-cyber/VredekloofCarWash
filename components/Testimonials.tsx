
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Johan Bezuidenhout',
    role: 'Regular Client',
    content: "Excellent service! The attention to detail is remarkable. My car always looks showroom ready when I leave Vredekloof. The team is friendly and highly professional.",
    rating: 5,
    avatar: 'https://picsum.photos/seed/johan/100/100'
  },
  {
    id: 2,
    name: 'Annamarie Venter',
    role: 'SUV Owner',
    content: "Best car wash in Cape Town! They managed to get out deep stains in my upholstery that I thought were permanent. They really take pride in their work.",
    rating: 5,
    avatar: 'https://picsum.photos/seed/anna/100/100'
  },
  {
    id: 3,
    name: 'Pieter Marais',
    role: 'Luxury Sedan Owner',
    content: "The Valet service is exceptional and worth every cent. Fast, efficient, and thorough. I won't take my vehicles anywhere else. Great value for money!",
    rating: 5,
    avatar: 'https://picsum.photos/seed/pieter/100/100'
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 space-y-4 md:space-y-0">
        <div className="text-left">
          <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">Customer Stories</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900">HEAR FROM OUR CLIENTS</h3>
        </div>
        <div className="flex space-x-2 pb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-2 font-bold text-gray-900 text-lg">5.0 AVG</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-gray-50 rounded-[2rem] p-8 relative shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="text-brand-500 text-6xl font-serif absolute top-4 right-8 opacity-20">“</div>
            <p className="text-gray-700 italic mb-8 relative z-10">"{t.content}"</p>
            <div className="flex items-center">
              <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-2xl object-cover mr-4 shadow-md" />
              <div>
                <h4 className="font-bold text-gray-900 uppercase tracking-tight">{t.name}</h4>
                <p className="text-brand-600 text-xs font-bold">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href="https://www.google.com/search?q=Vredekloof+Car+Wash+And+Valet+Services+Reviews" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-brand-600 font-bold hover:text-brand-700 transition-colors"
        >
          READ MORE GOOGLE REVIEWS
          <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
