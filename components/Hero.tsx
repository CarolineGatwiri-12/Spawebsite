import React from 'react';
import { Play, ShieldCheck, Star, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-40 overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#f8fafc]"></div>
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-[#207D40]/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 -left-24 w-[400px] h-[400px] bg-[#F7A300]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 text-center lg:text-left z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#111827] leading-[1.1] mb-8 tracking-tighter">
              Simplify Spa Operations. <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#207D40] to-[#F7A300]">Grow with Confidence.</span> 
            </h1>
            
            <p className="text-sm md:text-base text-gray-500 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              My Spa Management System is a cloud-based Spa ERP designed exclusively for spas — helping owners digitize operations, gain real-time visibility, and scale with confidence from anywhere.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-[#207D40] hover:bg-[#1a6333] text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-[#207D40]/10 transition-all active:scale-95">
                Start Free Trial
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border-2 border-gray-100 text-gray-800 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-base transition-all hover:border-[#F7A300] group">
                <div className="w-6 h-6 bg-orange-50 rounded-full flex items-center justify-center text-[#F7A300] group-hover:bg-[#F7A300] group-hover:text-white transition-colors">
                  <Play size={12} fill="currentColor" className="ml-0.5" />
                </div>
                Book a Demo
              </button>
            </div>

            {/* Social Proof Mini */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-50 transition-all duration-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-[#207D40]" size={18} />
                <span className="text-[11px] font-black text-gray-700 uppercase tracking-widest">PCI Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-[#F7A300]" fill="currentColor" size={18} />
                <span className="text-[11px] font-black text-gray-700 uppercase tracking-widest">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 p-1 bg-white/40 backdrop-blur-md rounded-[2.5rem] shadow-2xl border border-white/60">
              <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-inner border border-gray-50">
                <img 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop" 
                  alt="MySpa Platform Interface" 
                  className="w-full h-auto block"
                />
              </div>

              {/* Floating UI Elements */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#207D40] rounded-lg flex items-center justify-center text-white">
                    <TrendingUp size={14} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Growth</p>
                    <p className="text-base font-black text-[#111827] leading-none">+24%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;