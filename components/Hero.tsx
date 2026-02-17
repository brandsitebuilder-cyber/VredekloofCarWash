
import React, { useState } from 'react';

const Hero: React.FC = () => {
  // Using the Google Drive Thumbnail API with a large size (w4000) is often more reliable for embedding
  // than the direct export link which can be blocked by quota limits or virus scan warnings.
  const [bgImage, setBgImage] = useState('https://drive.google.com/thumbnail?id=1xN24hMNkw10wTgGrkRQh4K-spbS6zTBz&sz=w4000');

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage}
          alt="Vredekloof Car Wash"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // If the Google Drive image fails (e.g. 403 Forbidden due to permissions), 
            // fallback to a high-quality relevant Unsplash image.
            e.currentTarget.src = "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80";
          }}
        />
        {/* Gradient Overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/40 to-gray-900/90" />
      </div>
      
      {/* Decorative animated glow effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-800/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full pt-20">
        
        <h1 className="text-5xl md:text-8xl font-display font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
          RESTORE YOUR RIDE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-200">INSIDE AND OUT.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-gray-100 mb-10 font-medium leading-relaxed drop-shadow-lg shadow-black">
          Professional car wash and premium valet services in the heart of Vredekloof. Precision cleaning that lasts.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full">
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-10 py-5 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center border border-brand-400/20"
          >
            <span>BOOK YOUR VALET</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a 
            href="#services" 
            className="w-full sm:w-auto px-10 py-5 bg-black/30 hover:bg-black/50 text-white border border-white/30 backdrop-blur-md rounded-full font-bold text-lg transition-all active:scale-95 flex justify-center"
          >
            VIEW PACKAGES
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center">
          <div className="bg-black/60 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex items-center space-x-3 text-white shadow-lg">
            <span className="text-2xl font-bold">5.0</span>
            <div className="flex text-yellow-400">★★★★★</div>
            <span className="text-sm font-medium border-l border-white/20 pl-3 ml-1">Google Reviews</span>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#services" className="flex flex-col items-center text-white/70 hover:text-white transition-colors">
            <span className="text-xs uppercase tracking-widest mb-2 shadow-black drop-shadow-md">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 bg-black/20 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
