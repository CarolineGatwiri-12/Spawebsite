import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Elena Rodriguez",
    role: "Founder, Azure Wellness Spa",
    content: "MySpa has completely transformed the way we manage our multi-location brand. The intuitive ERP modules and real-time analytics have been total game-changers for our bottom line.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Marcus Thorne",
    role: "Managing Director, Zenith Retreats",
    content: "Managing 15 locations across the coast was a nightmare before MySpa. Now, I have a unified command center that handles everything from HR to high-precision inventory tracking.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Dr. Sarah Chen",
    role: "Director, Holistic Medical Spa",
    content: "The level of detail in the client management system is unparalleled. We can track specific preferences and medical history with the security and precision our clinic requires.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5F7FA] pointer-events-none hidden lg:block"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-2 text-[#207D40] font-black uppercase tracking-[0.3em] text-[10px] mb-6">
               <Star size={12} fill="currentColor" /> Customer Success
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111827] mb-8 tracking-tighter leading-tight">
              Leading the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#207D40] to-[#F7A300]">Industry</span> <br />
              Forward.
            </h2>
            <p className="text-sm text-gray-500 font-medium mb-10 leading-relaxed">
              We take pride in empowering wellness leaders globally. Join thousands of spa owners who have scaled their operations with MySpa.
            </p>
            
            <div className="flex gap-3">
              <button 
                onClick={prev}
                className="p-3 border border-gray-100 hover:border-[#207D40] text-gray-300 hover:text-[#207D40] rounded-xl transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={next}
                className="p-3 border border-gray-100 hover:border-[#207D40] text-gray-300 hover:text-[#207D40] rounded-xl transition-all duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="relative">
              {/* Main Testimonial Card */}
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-50 relative overflow-hidden group">
                <Quote className="absolute -top-6 -right-6 text-gray-50 opacity-10" size={200} />
                
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="relative flex-shrink-0">
                    <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#207D40] to-[#F7A300] rounded-[1.5rem] blur-lg opacity-10 group-hover:opacity-20 transition-opacity"></div>
                    <img 
                      src={testimonials[current].img} 
                      alt={testimonials[current].name} 
                      className="relative w-24 h-24 md:w-36 md:h-36 rounded-[1.5rem] object-cover shadow-lg grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  
                  <div>
                    <div className="flex gap-0.5 mb-4">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={12} fill="#207D40" className="text-[#207D40]" />
                      ))}
                    </div>
                    
                    <p className="text-lg md:text-xl text-[#111827] font-bold italic mb-6 leading-relaxed tracking-tight">
                      "{testimonials[current].content}"
                    </p>
                    
                    <div>
                      <h4 className="font-black text-xl text-[#111827] tracking-tight">{testimonials[current].name}</h4>
                      <p className="text-[#207D40] font-black uppercase tracking-widest text-[10px] mt-1">{testimonials[current].role}</p>
                    </div>
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

export default Testimonials;