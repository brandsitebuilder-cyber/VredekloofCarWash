
import React, { useState } from 'react';
import { getAIRecommendation } from '../services/geminiService';
import { Recommendation } from '../types';

const AIAdvisor: React.FC = () => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    setLoading(true);
    const result = await getAIRecommendation(description);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="mb-12">
        <span className="bg-brand-500/20 text-brand-400 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block border border-brand-500/30">AI Detailing Assistant</span>
        <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6">PERSONALIZED CARE</h2>
        <p className="text-xl text-brand-100 max-w-2xl mx-auto">
          Describe the state of your vehicle (e.g., "coffee stains on back seats", "lots of mud after a rainy trip") and our AI will suggest the perfect treatment.
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="relative">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell us about your car's current condition..."
              className="w-full bg-white/10 border border-white/20 rounded-3xl p-6 text-white placeholder-brand-200/50 focus:outline-none focus:ring-2 focus:ring-brand-500 h-32 resize-none transition-all"
            />
            <button
              disabled={loading || !description}
              type="submit"
              className={`mt-4 w-full md:w-auto md:absolute md:bottom-4 md:right-4 bg-brand-500 hover:bg-brand-600 disabled:bg-gray-600 text-white font-bold py-3 px-8 rounded-2xl transition-all flex items-center justify-center space-x-2`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>ANALYZING...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" />
                  </svg>
                  <span>GET RECOMMENDATION</span>
                </>
              )}
            </button>
          </div>
        </form>

        {recommendation && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-left bg-white/10 rounded-[2rem] p-8 border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <span className="text-brand-400 font-bold uppercase tracking-widest text-xs">Recommended Package</span>
                <h3 className="text-3xl font-display font-bold uppercase">{recommendation.packageId.replace('-', ' ')}</h3>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-2">
                {recommendation.suggestedAddons.map((addon, i) => (
                  <span key={i} className="bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-xs font-bold border border-brand-500/30">
                    + {addon}
                  </span>
                ))}
              </div>
            </div>
            
            <p className="text-brand-100 text-lg mb-8 italic border-l-4 border-brand-500 pl-6">
              "{recommendation.reasoning}"
            </p>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="bg-white text-brand-900 px-8 py-3 rounded-full font-bold hover:bg-brand-50 transition-all text-center">
                BOOK THIS SERVICE
              </a>
              <button 
                onClick={() => setRecommendation(null)}
                className="text-white hover:text-brand-400 font-bold px-8 py-3 transition-colors"
              >
                ASK AGAIN
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIAdvisor;
