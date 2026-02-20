import React from 'react';
import { Rocket, Headphones, Heart, Sparkles } from 'lucide-react';

const PartnerSection: React.FC = () => {
  const partners = [
    {
      title: "Uplift You",
      description: "A spa software platform built to grow with you and help you scale effortlessly in a competitive market.",
      icon: Rocket,
      color: "from-green-400 to-[#207D40]",
      bg: "bg-[#207D40]",
    },
    {
      title: "24/7 Support",
      description: "Get elite assistance anytime, anywhere. Our dedicated team is always on standby for your peace of mind.",
      icon: Headphones,
      color: "from-[#F7A300]/60 to-[#F7A300]",
      bg: "bg-[#F7A300]",
    },
    {
      title: "Personalized Experience",
      description: "Easy ways to create the bespoke, personalized experience your high-end guests truly deserve.",
      icon: Heart,
      color: "from-red-400 to-[#EF4444]",
      bg: "bg-red-500",
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-green-100/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-100/40 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 text-white text-[10px] font-black uppercase mb-6 tracking-[0.3em] shadow-xl">
            <Sparkles size={10} className="text-[#207D40]" /> Trusted Excellence
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111827] mb-8 tracking-tighter leading-tight">
            The Spa Software Partner <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#207D40] to-[#F7A300] bg-[length:200%_auto] animate-gradient-x">
              You Have Been Looking For
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
            Elevate your spa to new heights with a partner that blends technological perfection with deep industry empathy.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {partners.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-700 hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 ${item.bg}`}></div>
              
              <div className="relative z-10">
                <div className="relative w-16 h-16 mb-8 flex items-center justify-center rounded-2xl bg-white shadow-md group-hover:scale-105 transition-transform duration-500">
                  <div className={`absolute inset-0 rounded-2xl opacity-5 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${item.color} blur-md`}></div>
                  <div className={`relative z-10 p-4 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-sm`}>
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-2xl font-black text-[#111827] mb-4 tracking-tight group-hover:text-[#207D40] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed font-medium mb-6">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-gray-400 group-hover:text-[#207D40] transition-colors">
                  Learn More 
                  <span className="w-6 h-px bg-gray-200 group-hover:w-10 group-hover:bg-[#207D40] transition-all"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;