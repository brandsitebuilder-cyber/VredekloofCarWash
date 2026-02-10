
import React from 'react';

const steps = [
  {
    num: '01',
    title: 'ONLINE BOOKING',
    desc: 'Choose your package and preferred time slot through our secure portal.',
    icon: '📅'
  },
  {
    num: '02',
    title: 'PICK UP / MOBILE',
    desc: 'We either visit you or arrange a vehicle pickup from your location.',
    icon: '🚗'
  },
  {
    num: '03',
    title: 'THE DEEP CLEAN',
    desc: 'Our professionals use advanced techniques and eco-friendly products.',
    icon: '🧼'
  },
  {
    num: '04',
    title: 'THE HANDOVER',
    desc: 'Final inspection with the client to ensure total satisfaction.',
    icon: '🤝'
  }
];

const Process: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">How it works</h2>
        <h3 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900">OUR SIMPLE PROCESS</h3>
        <div className="w-24 h-1.5 bg-brand-600 mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
        {/* Connection lines for desktop */}
        <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 border-t-2 border-dashed border-brand-200 z-0"></div>
        
        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 text-center group">
            <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center text-4xl mx-auto mb-8 border border-gray-100 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
              {step.icon}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold border-4 border-gray-50">
                {step.num}
              </div>
            </div>
            <h4 className="text-xl font-display font-bold text-gray-900 mb-4 tracking-tight">{step.title}</h4>
            <p className="text-gray-600 leading-relaxed px-4">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
