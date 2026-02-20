import React from 'react';
import { 
  CheckCircle2, Award, Users, Trophy, LayoutGrid, 
  BarChart3, Receipt, Wallet, Gift, Users2, Box, Sparkles 
} from 'lucide-react';

const modules = [
  { name: "Dashboard", desc: "Your spa's command center with real-time revenue and analytics.", icon: BarChart3 },
  { name: "Clients", desc: "Comprehensive CRM with profiles, history, and loyalty programs.", icon: Users },
  { name: "Orders & Invoices", desc: "Automated billing and payment integration.", icon: Receipt },
  { name: "Accounting", desc: "Integrated financial tools to track expenses.", icon: Wallet },
  { name: "Gift / Vouchers", desc: "Customizable gift cards and vouchers.", icon: Gift },
  { name: "HR Management", desc: "Staff schedules and performance tracking.", icon: Users2 },
  { name: "Stock & Inventory", desc: "Real-time tracking of product usage.", icon: Box },
  { name: "System Insights", desc: "Advanced reporting for smarter decisions.", icon: Sparkles }
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F5F7FA] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-6 mb-16">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-2 text-[#207D40] font-black uppercase tracking-widest text-[10px] mb-3">
               <Trophy size={12} /> Enterprise Spa ERP
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111827] leading-tight tracking-tighter">
              The highest-rated spa software in the industry.
            </h2>
          </div>
          <div className="lg:w-1/3">
            <p className="text-sm text-gray-500 leading-relaxed font-medium mb-2">
              Welcome to MySpa, your ultimate solution in revolutionizing the way you manage and grow your wellness business.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 rounded-[2.5rem] overflow-hidden shadow-xl bg-white border border-white">
          <div className="relative min-h-[400px] lg:min-h-full group bg-gray-900">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
              alt="MySpa Platform" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/30 to-transparent"></div>
            
            <div className="absolute top-8 left-8">
               <div className="bg-[#207D40] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-2">
                  <LayoutGrid size={12} /> Modular Infrastructure
               </div>
            </div>

            <div className="absolute bottom-10 left-10 right-10">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 text-white">
                  <Award className="text-[#F7A300] mb-1.5" size={18} />
                  <div className="text-2xl font-black">#1 Rated</div>
                  <div className="text-[10px] opacity-60 font-bold uppercase tracking-widest">Global SaaS 2024</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 text-white">
                  <CheckCircle2 className="text-[#207D40] mb-1.5" size={18} />
                  <div className="text-2xl font-black">99.9%</div>
                  <div className="text-[10px] opacity-60 font-bold uppercase tracking-widest">Uptime Record</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 md:p-14 lg:p-20 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-black text-[#111827] mb-8 leading-tight tracking-tight">
              A serene, high-precision <br /> system for your team.
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              {modules.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="flex gap-3 items-center mb-1.5">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#207D40] group-hover:text-white transition-all duration-300">
                      <item.icon size={14} className="text-[#111827] group-hover:text-white" />
                    </div>
                    <p className="text-[#111827] font-black text-[12px] uppercase tracking-wider">{item.name}</p>
                  </div>
                  <p className="text-[11px] text-gray-400 font-medium leading-relaxed pl-11">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;