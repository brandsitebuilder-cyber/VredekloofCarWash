import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
    <div className="relative min-h-screen">
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

        <section id="testimonials" className="py-20 bg-white">
          <Testimonials />
        </section>

        <section id="contact" className="py-20 bg-gray-900 text-white">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;