import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutSection from './components/AboutSection';
import PartnerSection from './components/PartnerSection';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FeaturesPage from './components/FeaturesPage';
import PricingPage from './components/PricingPage';
import AboutPage from './components/AboutPage';
import ResourcesPage from './components/ResourcesPage';
import FAQPage from './components/FAQPage';
import ContactPage from './components/ContactPage';
import { Activity, Sparkles, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'features' | 'pricing' | 'about' | 'resources' | 'faq' | 'contact'>('home');

  // Handle navigation
  const navigate = (page: 'home' | 'features' | 'pricing' | 'about' | 'resources' | 'faq' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderHome = () => (
    <>
      <Hero />
      <Features />
      <AboutSection />
      <PartnerSection />
      <Testimonials />
      
      {/* SECTION 6: THE INNOVATION - CINEMATIC INTEGRATION */}
      <section className="relative h-[650px] flex items-center justify-center overflow-hidden bg-[#020406]">
        {/* Cinematic Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=2070&auto=format&fit=crop" 
            alt="Ultra-Luxury Modern Spa Architecture"
            className="w-full h-full object-cover scale-100 animate-breathing-scale opacity-65 block"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020406] via-transparent to-[#020406]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#020406] via-[#020406]/10 to-[#020406]"></div>
          <div className="absolute inset-0 bg-[#020406]/30 mix-blend-multiply"></div>
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[#207D40]/10 to-transparent skew-x-[-45deg] animate-light-sweep"></div>
          <div className="absolute bottom-0 right-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[#F7A300]/5 to-transparent skew-x-[-45deg] animate-light-sweep-delayed"></div>
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-[#207D40] text-[10px] font-black uppercase tracking-[0.5em] mb-8 shadow-2xl">
            <Activity size={10} className="animate-pulse" /> The Precision of Serenity
          </div>
          
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-10 bg-[#207D40]/20 blur-[100px] opacity-30 animate-pulse"></div>
            
            <h2 className="relative text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter leading-tight">
              Experience <br /> the 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#207D40] via-[#F7A300] to-[#207D40] bg-[length:200%_auto] animate-shimmer drop-shadow-[0_0_20px_rgba(32,125,64,0.3)]">
                Innovation
              </span>
            </h2>
          </div>
          
          <p className="text-gray-300 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed mb-12 opacity-90">
            We’ve unified the clinical precision of enterprise ERP with the deep, wordless tranquility of a world-class spa. It’s not just management software; it’s the evolution of wellness.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <button className="px-8 py-4 bg-white text-[#020406] rounded-xl font-black text-base hover:bg-[#207D40] hover:text-white transition-all duration-700 shadow-2xl active:scale-95 group">
              See the Future
              <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
            <div className="text-left border-l border-white/20 pl-6">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles size={12} className="text-[#F7A300]" />
                <span className="text-white font-black text-[11px] tracking-tight leading-none uppercase">Next-Gen Delivery</span>
              </div>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.4em]">Optimizing 1,200+ Luxury Venues</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#111827] overflow-x-hidden">
      <Navbar onNavigate={navigate} currentPage={currentPage} />
      <main>
        {currentPage === 'home' && renderHome()}
        {currentPage === 'features' && <FeaturesPage />}
        {currentPage === 'pricing' && <PricingPage />}
        {currentPage === 'about' && <AboutPage onNavigate={navigate} />}
        {currentPage === 'resources' && <ResourcesPage onNavigate={navigate} />}
        {currentPage === 'faq' && <FAQPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer onNavigate={navigate} />

      <style>{`
        @keyframes breathing-scale {
          0%, 100% { transform: scale(1.02); }
          50% { transform: scale(1.08); }
        }
        .animate-breathing-scale {
          animation: breathing-scale 30s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-shimmer {
          animation: shimmer 6s linear infinite;
        }
        @keyframes light-sweep {
          0% { left: -100%; opacity: 0; }
          10% { opacity: 1; }
          40% { opacity: 1; }
          50% { left: 100%; opacity: 0; }
          100% { left: 100%; opacity: 0; }
        }
        .animate-light-sweep {
          animation: light-sweep 15s ease-in-out infinite;
        }
        @keyframes light-sweep-delayed {
          0% { right: -100%; opacity: 0; }
          50% { right: -100%; opacity: 0; }
          60% { opacity: 1; }
          90% { opacity: 1; }
          100% { right: 100%; opacity: 0; }
        }
        .animate-light-sweep-delayed {
          animation: light-sweep-delayed 18s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default App;