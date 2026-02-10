
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    carDetails: '',
    packageType: 'Basic Express (R150)',
    date: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = "New Car Wash Booking Request";
    const body = `
New booking request details:

Full Name: ${formData.fullName}
Phone Number: ${formData.phone}
Car Make & Model: ${formData.carDetails}
Selected Package: ${formData.packageType}
Preferred Date: ${formData.date}

Please contact the customer to confirm availability.
    `.trim();

    window.location.href = `mailto:brandsitebuilder@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-brand-500 font-bold uppercase tracking-widest text-sm mb-4">Three Ways to Book</h2>
          <h3 className="text-5xl font-display font-extrabold mb-8">SECURE YOUR <br />SLOT TODAY</h3>
          <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
            We offer flexible booking options to suit your schedule. <span className="text-white font-semibold">Book online</span> below for a guaranteed time, <span className="text-white font-semibold">call us</span> to arrange a valet, or simply <span className="text-white font-semibold">drive in</span> to check availability.
          </p>

          <div className="space-y-8">
            <div className="flex items-start group">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mr-6 shrink-0 group-hover:bg-brand-600 transition-colors duration-300">
                <svg className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 uppercase tracking-tight">Call For Availability</h4>
                <p className="text-gray-400 text-xl font-medium">+27 (0) 21 981 1234</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mr-6 shrink-0 group-hover:bg-brand-600 transition-colors duration-300">
                <svg className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 uppercase tracking-tight">Visit / Walk-ins</h4>
                <p className="text-gray-400 text-sm mb-1">Pop in to check for open slots</p>
                <p className="text-gray-400 text-xl font-medium">Vredekloof Centre, Brackenfell, Cape Town</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mr-6 shrink-0 group-hover:bg-brand-600 transition-colors duration-300">
                <svg className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 uppercase tracking-tight">Working Hours</h4>
                <p className="text-gray-400 text-xl font-medium">Mon - Sat: 08:00 - 17:30</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 bg-brand-600 text-white text-[10px] font-bold px-4 py-2 rounded-bl-2xl uppercase tracking-widest shadow-lg">
              Online Booking
           </div>
          <h3 className="text-2xl font-display font-bold mb-6 text-white">RESERVE A SLOT</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder-gray-500" 
                  placeholder="John Smith" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-widest">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder-gray-500" 
                  placeholder="082 123 4567" 
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-widest">Car Make & Model</label>
              <input 
                type="text" 
                name="carDetails"
                value={formData.carDetails}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder-gray-500" 
                placeholder="Toyota Hilux" 
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-widest">Package</label>
              <select 
                name="packageType"
                value={formData.packageType}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all appearance-none cursor-pointer"
              >
                <option className="bg-gray-900" value="Basic Express (R150)">Basic Express (R150)</option>
                <option className="bg-gray-900" value="Premium Valet (R450)">Premium Valet (R450)</option>
                <option className="bg-gray-900" value="Executive Showroom (R1250)">Executive Showroom (R1250)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-widest">Preferred Date</label>
              <input 
                type="date" 
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all" 
              />
            </div>

            <button type="submit" className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-5 rounded-2xl text-lg shadow-xl transition-all transform hover:scale-[1.02] active:scale-95">
              CONFIRM BOOKING
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
