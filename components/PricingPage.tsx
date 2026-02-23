import React, { useState } from 'react';
import { 
  Check, ArrowRight, Sparkles, Zap, ShieldCheck, Globe, Star, 
  ArrowUpRight, Crown, Rocket, Landmark, HelpCircle, Info,
  Shield, Smartphone, Activity, BarChart3
} from 'lucide-react';

const plans = [
  {
    id: 'starter',
    name: "Starter",
    icon: Rocket,
    price: "3,999",
    tagline: "The foundation for solo artists and boutique salons.",
    description: "Everything you need to move away from paper notebooks and into a digital-first workflow.",
    features: [
      "Appointment Scheduling",
      "Online Booking",
      "Client Management",
      "Basic Reports",
      "SMS & Email Reminders"
    ],
    buttonText: "Start Free Trial",
    theme: "light",
    accent: "#111827"
  },
  {
    id: 'growth',
    name: "Growth",
    icon: Sparkles,
    price: "7,499",
    tagline: "The engine for ambitious, multi-service teams.",
    description: "Scale your revenue with automated marketing, inventory tracking, and loyalty programs.",
    features: [
      "All Starter Features",
      "Product Inventory",
      "Marketing Campaigns",
      "Gift Vouchers",
      "Discount Coupon Codes",
      "Staff Management"
    ],
    buttonText: "Join the Elite",
    theme: "green",
    popular: true,
    accent: "#207D40"
  },
  {
    id: 'pro',
    name: "Pro",
    icon: Landmark,
    price: "11,999",
    tagline: "The ultimate command center for enterprises.",
    description: "Bespoke analytics and multi-location governance for brands that demand perfection.",
    features: [
      "All Growth Features",
      "Multi-Location Management",
      "Advanced Analytics",
      "Data Export & API",
      "Priority 24/7 Support",
      "Incentive Management"
    ],
    buttonText: "Request Enterprise Access",
    theme: "orange",
    accent: "#F7A300"
  }
];

const comparisonData = [
  {
    category: "Experience & Booking",
    features: [
      { name: "24/7 Online Booking", starter: true, growth: true, pro: true },
      { name: "Branded Client App", starter: false, growth: "Optional", pro: true },
      { name: "Automated Reminders", starter: "Standard", growth: "Customizable", pro: "Priority Routing" },
      { name: "Waitlist Management", starter: false, growth: true, pro: true },
    ]
  },
  {
    category: "Operations & Staff",
    features: [
      { name: "Inventory Management", starter: "Basic", growth: "Advanced", pro: "Enterprise" },
      { name: "Payroll & Commission", starter: false, growth: true, pro: true },
      { name: "Staff Mobile App", starter: true, growth: true, pro: true },
      { name: "Shift Scheduling", starter: "Manual", growth: "Smart Auto", pro: "Optimized AI" },
    ]
  },
  {
    category: "Marketing & Growth",
    features: [
      { name: "Email Marketing", starter: "500/mo", growth: "5,000/mo", pro: "Unlimited" },
      { name: "Loyalty Programs", starter: false, growth: true, pro: true },
      { name: "Membership Management", starter: false, growth: true, pro: true },
      { name: "Review Automation", starter: true, growth: true, pro: true },
    ]
  },
  {
    category: "Intelligence & Scale",
    features: [
      { name: "Standard Reports", starter: true, growth: true, pro: true },
      { name: "Advanced Analytics", starter: false, growth: true, pro: true },
      { name: "Multi-Location Control", starter: false, growth: false, pro: true },
      { name: "API & Webhooks", starter: false, growth: false, pro: true },
    ]
  }
];

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="bg-white selection:bg-[#207D40] selection:text-white font-['Inter']">
      {/* SECTION 1: HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-3/5">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-gray-200"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Value | Logic | Scale</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111827] leading-[1.1] tracking-tighter mb-8">
                Pricing <br />
                <span className="text-[#207D40]">For</span> <span className="text-[#F7A300]">The</span> <br />
                Modern Brand.
              </h1>
              <p className="text-sm md:text-base text-gray-400 font-medium max-md leading-relaxed mb-10">
                Simple pricing that scales with you — whether you’re a boutique spa or a multi-location enterprise brand.
              </p>
              
              <button className="bg-[#207D40] text-white px-8 py-3.5 rounded-full font-black text-xs hover:bg-[#1a6333] transition-all active:scale-95 shadow-xl shadow-[#207D40]/10">
                Get Started Now
              </button>
            </div>
            
            <div className="lg:w-2/5 relative">
               <div className="relative group">
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
                    <img 
                      src="\images\pricing.jpeg" 
                      alt="Facial Treatment" 
                      className="w-full h-[400px] object-cover block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                        <div className="bg-[#207D40] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 mb-1.5">
                           <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div> Case Study
                        </div>
                        <p className="text-white text-xs font-bold leading-tight">Trusted by 2,400+<br/>Elite Spas globally.</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* BILLING SWITCH */}
      <div className="container mx-auto px-4 md:px-8 mb-12">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg text-[11px] font-black transition-all ${billingCycle === 'monthly' ? 'bg-[#111827] text-white shadow-md' : 'text-gray-400'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-lg text-[11px] font-black transition-all ${billingCycle === 'yearly' ? 'bg-[#111827] text-white shadow-md' : 'text-gray-400'}`}
            >
              Yearly
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-md bg-green-50 text-[#207D40] text-[9px] font-black uppercase tracking-widest border border-green-100">Save 15%</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Annual commitment</span>
          </div>
        </div>
      </div>

      {/* PRICING CARDS */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative flex flex-col p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-1 ${
                  plan.theme === 'green' ? 'bg-[#F0FDF4] border border-[#207D40]/20' : 
                  plan.theme === 'orange' ? 'bg-[#F7A300] text-white' : 
                  'bg-[#F8FAFC] border border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-[#207D40] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    <Check size={10} strokeWidth={4} /> Industry Standard
                  </div>
                )}

                <div className="mb-8">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 ${plan.theme === 'orange' ? 'bg-white/10 text-white' : 'bg-white shadow-md text-[#111827]'}`}>
                    <plan.icon size={18} />
                  </div>
                  <h2 className="text-xl font-black tracking-tighter mb-1">{plan.name}</h2>
                  <p className={`text-[11px] font-medium mb-8 ${plan.theme === 'orange' ? 'text-white/80' : 'text-gray-400'}`}>{plan.tagline}</p>
                  
                  <div className="flex items-baseline gap-1">
                    <span className="text-[10px] font-black opacity-30 uppercase tracking-widest">KES</span>
                    <span className="text-3xl font-black tracking-tighter leading-none">{plan.price}</span>
                    <span className="text-[11px] font-bold opacity-30">/ mo</span>
                  </div>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-3 mb-10">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={12} strokeWidth={4} className={plan.theme === 'orange' ? 'text-white' : 'text-[#207D40]'} />
                        <span className={`text-[11px] font-bold ${plan.theme === 'orange' ? 'text-white' : 'text-gray-700'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  className={`w-full py-3.5 rounded-xl font-black text-xs transition-all active:scale-95 flex items-center justify-center gap-2 group ${
                    plan.theme === 'orange' ? 'bg-[#111827] text-white hover:bg-gray-800' : 
                    plan.theme === 'green' ? 'bg-[#207D40] text-white hover:bg-[#1a6333]' : 
                    'bg-[#111827] text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE HEADER */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
           <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-10 bg-[#207D40]"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#207D40]">Capability Matrix</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111827] tracking-tighter mb-4 leading-tight">
            Compare Every <br /> Detail of the Craft.
          </h2>
          <p className="text-sm text-gray-400 font-medium max-w-lg leading-relaxed">
            Precision engineering at every tier. Whether you're starting out or scaling globally, our features adapt to your operational rhythms.
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="overflow-hidden bg-white rounded-[2rem] border border-gray-100 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[700px]">
                <thead>
                  <tr className="bg-[#111827] text-white">
                    <th className="p-6 text-[11px] font-black uppercase tracking-[0.3em] opacity-40">Core Capabilities</th>
                    <th className="p-6 text-xs font-black text-center">Starter</th>
                    <th className="p-6 text-xs font-black text-[#207D40] text-center">Growth</th>
                    <th className="p-6 text-xs font-black text-[#F7A300] text-center">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((category, catIdx) => (
                    <React.Fragment key={catIdx}>
                      <tr className="bg-gray-50/30">
                        <td colSpan={4} className="px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((row, rowIdx) => (
                        <tr key={rowIdx} className="group border-b border-gray-50 last:border-0 hover:bg-gray-50/20 transition-all">
                          <td className="p-6 font-bold text-[#111827] text-xs tracking-tight">{row.name} <HelpCircle size={10} className="inline ml-1 text-gray-200" /></td>
                          <td className="p-6 text-gray-400 font-bold text-[10px] text-center">
                            {row.starter === true ? <Check size={14} className="text-[#207D40] mx-auto" strokeWidth={4} /> : row.starter || <span className="text-gray-200">—</span>}
                          </td>
                          <td className="p-6 text-[#207D40] font-bold text-[10px] text-center">
                            {row.growth === true ? <Check size={14} className="text-[#207D40] mx-auto" strokeWidth={4} /> : row.growth || <span className="text-gray-200">—</span>}
                          </td>
                          <td className="p-6 text-[#F7A300] font-bold text-[10px] text-center">
                            {row.pro === true ? <Check size={14} className="text-[#F7A300] mx-auto" strokeWidth={4} /> : row.pro || <span className="text-gray-200">—</span>}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                <HelpCircle size={16} />
              </div>
              <div>
                <h4 className="text-xs font-black text-[#111827]">Need a custom report?</h4>
                <p className="text-[11px] text-gray-400 font-medium">For franchises with 10+ locations, we offer bespoke analytics and cloud provisioning.</p>
              </div>
            </div>
            <button className="bg-[#F7A300] text-white px-6 py-2.5 rounded-lg font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-md active:scale-95">
              Contact Enterprise Sales
            </button>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS STRIP */}
      <div className="container mx-auto px-4 md:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12">
          {[
            { title: "No Lock-in Ever", desc: "Your data is yours, always compliant by default.", icon: Shield },
            { title: "HR Logic", desc: "Focuses on item features for booking, staff and reports.", icon: Activity },
            { title: "Native Migration", desc: "Our platform handles the heavy lifting when moving from legacy tools.", icon: BarChart3 },
            { title: "Global Compliance", desc: "Bespoke analytics and local infrastructure for multi-location brands.", icon: Globe }
          ].map((item, i) => (
            <div key={i}>
              <h4 className="text-[11px] font-black uppercase tracking-widest text-[#111827] mb-2 flex items-center gap-1.5">
                <item.icon size={10} className="text-[#207D40]" /> {item.title}
              </h4>
              <p className="text-[10px] text-gray-400 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BESPOKE CONSULTATION FINAL SECTION */}
      <section className="relative py-32 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="\images\cta2.jpeg" 
            className="w-full h-full object-cover"
            alt="Zen Spa Treatment"
          />
          <div className="absolute inset-0 bg-[#020406]/90 mix-blend-multiply backdrop-blur-sm"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter mb-6 leading-tight">
                Bespoke <br />
                <span className="text-[#207D40]">Consultation</span> <br />
                Available.
             </h2>
             <p className="text-sm md:text-base text-gray-300 font-medium mb-10 max-w-xl mx-auto leading-relaxed opacity-80">
              Don't fit into a standard box? Our enterprise strategists are ready to craft a unique configuration just for your brand's vision.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto bg-[#207D40] text-white px-10 py-4 rounded-xl font-black text-base hover:bg-[#1a6333] transition-all flex items-center justify-center gap-2 group shadow-2xl">
                  Book a Strategy Session <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-xl font-black text-base hover:bg-white/10 transition-all">
                  View Case Studies
                </button>
             </div>
          </div>
        </div>
      </section>

      <style>{`
        .custom-table-scroll::-webkit-scrollbar { height: 6px; }
        .custom-table-scroll::-webkit-scrollbar-track { background: #F5F7FA; border-radius: 4px; }
        .custom-table-scroll::-webkit-scrollbar-thumb { background: linear-gradient(to right, #207D40, #F7A300); border-radius: 4px; }
      `}</style>
    </div>
  );
};

export default PricingPage;