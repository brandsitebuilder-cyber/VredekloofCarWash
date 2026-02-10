
import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'basic',
    name: 'Basic Express',
    description: 'Perfect for regular maintenance. A quick but thorough external clean.',
    price: 'R150',
    duration: '45 Mins',
    icon: '✨',
    category: 'exterior',
    features: ['Hand wash & Dry', 'Wheel Cleaning', 'Tire Dressing', 'Glass Cleaned']
  },
  {
    id: 'premium',
    name: 'Premium Valet',
    description: 'Our most popular choice. Complete interior and exterior refreshment.',
    price: 'R450',
    duration: '2.5 Hours',
    icon: '💎',
    category: 'full',
    features: ['Safe Foam Wash', 'Full Interior Vacuum', 'Leather Treatment', 'High-Gloss Wax Finish', 'Odor Neutralizer']
  },
  {
    id: 'executive',
    name: 'Executive Showroom',
    description: 'The ultimate detailing experience. Every inch of your car meticulously perfected.',
    price: 'R1250',
    duration: '5 Hours',
    icon: '👑',
    category: 'full',
    features: ['Engine Bay Clean', 'Steam Extraction', 'Clay Bar Treatment', 'Machine Polish', '12-Month Sealant']
  }
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">Our Service Range</h2>
        <h3 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900">TAILORED PACKAGES</h3>
        <div className="w-24 h-1.5 bg-brand-600 mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
            
            <div className="relative z-10">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h4 className="text-2xl font-display font-bold text-gray-900 mb-2 uppercase">{service.name}</h4>
              <p className="text-gray-600 mb-6 min-h-[48px]">{service.description}</p>
              
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-extrabold text-brand-600">{service.price}</span>
                <span className="ml-2 text-gray-400 font-medium">starting from</span>
              </div>

              <div className="space-y-4 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-brand-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>

              <a 
                href="#contact" 
                className="block text-center py-4 px-6 rounded-2xl bg-gray-900 group-hover:bg-brand-600 text-white font-bold transition-colors"
              >
                SELECT PACKAGE
              </a>
              
              <div className="mt-4 text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
                EST. TIME: {service.duration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
