
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
         {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gray-900/60 z-10" />
        
        {/* Actual Image */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ 
            backgroundImage: 'url("https://drive.google.com/uc?export=view&id=1fcMnV_kxo2wqe6NoVQyB_Pqr9hkk8NTQ")',
          }}
        />
      </div>
      
      {/* Animated geometric overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-800/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h1 className="text-5xl md:text-8xl font-display font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
          RESTORE YOUR RIDE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">INSIDE AND OUT.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-10 font-medium leading-relaxed drop-shadow-md">
          Professional car wash and premium valet services in the heart of Vredekloof. Precision cleaning that lasts.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="#contact" 
            className="group relative px-10 py-5 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-bold text-lg shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center"
          >
            <span>BOOK YOUR VALET</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a 
            href="#services" 
            className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md rounded-full font-bold text-lg transition-all active:scale-95"
          >
            VIEW PACKAGES
          </a>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-center opacity-90">
          <div className="text-white flex items-center space-x-2 bg-black/20 px-6 py-2 rounded-full backdrop-blur-sm">
            <span className="text-2xl font-bold">5.0</span>
            <div className="flex text-yellow-400">★★★★★</div>
            <span className="text-sm font-medium ml-2">Google Reviews</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block z-20">
        <a href="#services" className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 cursor-pointer">
          <div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
