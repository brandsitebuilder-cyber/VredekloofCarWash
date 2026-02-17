
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAdvisor from './components/AIAdvisor';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Header scrolled={scrolled} />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="services" className="py-20 bg-white">
          <Services />
        </section>

        <section id="process" className="py-20 bg-gray-50">
          <Process />
        </section>
        
        {/* Added AIAdvisor Section */}
        <section id="ai-advisor" className="py-20 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-900 to-transparent"></div>
          </div>
          <AIAdvisor />
        </section>

        <section id="testimonials" className="py-20 bg-white">
          <Testimonials />
        </section>

        <section id="contact" className="py-20 bg-gray-900 text-white">
          <Contact />
        </section>
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
