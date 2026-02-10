
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-brand-600 rounded flex items-center justify-center text-white font-bold text-xl">V</div>
              <span className="text-xl font-display font-bold tracking-tight">VREDEKLOOF<span className="text-brand-500 text-xs align-top ml-0.5">VALET</span></span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-6">
              Vredekloof Car wash and Valet Services is your premium automotive detailing specialist. We combine traditional craft with modern technology to deliver showroom-quality results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-500 hover:text-brand-500 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-brand-500 transition-colors">Packages</a></li>
              <li><a href="#process" className="text-gray-500 hover:text-brand-500 transition-colors">Our Process</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-brand-500 transition-colors">Interior Deep Clean</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-500 transition-colors">Ceramic Coating</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-500 transition-colors">Machine Polishing</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-500 transition-colors">Lease Return Valet</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-wider">Newsletter</h4>
            <p className="text-gray-500 mb-6">Subscribe for car care tips and exclusive offers.</p>
            <div className="flex">
              <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-l-xl p-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-500 w-full" />
              <button className="bg-brand-600 hover:bg-brand-700 px-4 rounded-r-xl transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-xs font-bold text-gray-600 uppercase tracking-widest">
          <p>© 2024 VREDEKLOOF CAR WASH AND VALET SERVICES. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-brand-500">Privacy Policy</a>
            <a href="#" className="hover:text-brand-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
