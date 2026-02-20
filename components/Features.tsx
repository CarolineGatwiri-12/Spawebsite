import React from 'react';
import { 
  Calendar, CreditCard, Globe, Package, MessageSquare, UserCheck, 
  Sparkles, Receipt, MapPin
} from 'lucide-react';

const featureGroups = [
  {
    title: "Business Intelligence & Financial Control",
    description: "The core engine of your spa.",
    items: [
      { name: 'Dashboard', icon: Calendar, color: 'text-[#207D40]', bg: 'bg-[#207D40]/5' },
      { name: 'Orders & Invoices', icon: Receipt, color: 'text-[#F7A300]', bg: 'bg-[#F7A300]/5' },
      { name: 'Accounting', icon: MapPin, color: 'text-[#207D40]', bg: 'bg-[#207D40]/5' },
    ]
  },
  {
    title: "Customer Experience & Sales Growth",
    description: "Foster lasting relationships.",
    items: [
      { name: 'Clients (CRM)', icon: Globe, color: 'text-[#F7A300]', bg: 'bg-[#F7A300]/5' },
      { name: 'Gift / Vouchers', icon: Package, color: 'text-[#207D40]', bg: 'bg-[#207D40]/5' },
    ]
  },
  {
    title: "Operational & Workforce Management",
    description: "Maximize your bottom line.",
    items: [
      { name: 'HR Control', icon: UserCheck, color: 'text-[#207D40]', bg: 'bg-[#207D40]/5' },
      { name: 'Inventory', icon: MessageSquare, color: 'text-[#F7A300]', bg: 'bg-[#F7A300]/5' },
    ]
  }
];

const Features: React.FC = () => {
  const horizontalLinks = [
    "Market Intelligence", "Branded Solutions", "ERP Management", 
    "Automated Planning", "24/7 Availability", "Always-on Analytics", "ERP Integration"
  ];

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] text-white text-[10px] font-black uppercase mb-4 tracking-[0.2em] shadow-lg">
            <Sparkles size={10} className="text-[#207D40]" /> Module Suite
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111827] mb-6 tracking-tighter leading-tight">
            Explore Our 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#207D40] via-[#F7A300] to-[#207D40] bg-[length:200%_auto] animate-gradient-shift"> Modules</span>
          </h2>
          <p className="text-sm text-gray-500 font-medium">Built for the high-end salon. Scaled for the global spa franchise.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {featureGroups.map((group, gIdx) => (
            <div key={gIdx} className="bg-[#F5F7FA]/50 rounded-[2rem] p-8 border border-gray-100/50 hover:bg-white hover:shadow-xl transition-all duration-500 group">
              <div className="mb-6 h-24">
                <h3 className="text-xl font-black text-[#111827] mb-2 leading-tight">{group.title}</h3>
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">{group.description}</p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {group.items.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 group-hover:border-transparent group-hover:shadow-md transition-all"
                  >
                    <div className={`w-10 h-10 rounded-lg ${feature.bg} flex items-center justify-center`}>
                      <feature.icon size={18} className={feature.color} />
                    </div>
                    <span className="font-bold text-[#111827] text-[14px] tracking-tight">{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal Links Marquee */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 opacity-40">
          {horizontalLinks.map((link, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-[#111827]"></div>
              <span className="text-[11px] font-black uppercase tracking-widest text-[#111827] hover:text-[#207D40] cursor-default transition-colors">{link}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift {
          animation: gradient-shift 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Features;