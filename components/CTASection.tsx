import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-[#F7A300] rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/10 to-transparent"></div>

          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="lg:w-1/2 text-center lg:text-left lg:pl-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                Ready to Scale?
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 tracking-tighter leading-tight max-w-sm mx-auto lg:mx-0">
                Transform Your <br /> Business Today
              </h2>
              <p className="text-sm md:text-base text-white/90 mb-10 max-w-sm mx-auto lg:mx-0 font-medium leading-relaxed">
                Experience the ultimate ERP solution tailored specifically for
                high-end wellness. See how we save our partners an average of 15
                hours per week on operations.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button className="w-full sm:w-auto bg-[#207D40] hover:bg-[#111827] text-white px-8 py-4 rounded-xl font-black text-base transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 group">
                  Request a Demo
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1.5 transition-transform"
                  />
                </button>
                <button className="text-xs font-bold border-b border-white/30 cursor-pointer hover:border-white transition-all py-1">
                  Talk to an expert
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative group w-full max-w-xs lg:max-w-md">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                  <img
                    src="\images\cta3.jpeg"
                    alt="MySpa Analytics Preview"
                    className="w-[140%] h-[140%] object-cover transform group-hover:scale-105 transition-transform duration-700 block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;