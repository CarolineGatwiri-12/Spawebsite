import React from 'react';
import { 
  Calendar, CreditCard, Globe, Megaphone, Package, Droplets, Gift, 
  Ticket, Star, Users, MessageSquare, UserCheck, 
  MapPin, BarChart3, ShieldCheck, Sparkles,
  ArrowUpRight, Zap, Smartphone, Shield, LayoutGrid, Receipt, Wallet,
  Play, Activity, TrendingUp
} from 'lucide-react';

const anchorFeatures = [
  {
    name: 'Dashboard',
    icon: LayoutGrid,
    desc: 'Your spa’s command center. Get a real-time overview of revenue, customers, payments, orders and inventory - all in one clean, intuitive dashboard.',
    size: 'lg',
    color: 'bg-[#207D40]',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070'
  },
  {
    name: 'Clients',
    icon: Users,
    desc: 'Manage client profiles, preferences, and history. Build loyalty programs, track visits, and personalize experiences.',
    size: 'sm',
    color: 'bg-[#F7A300]',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053'
  },
  {
    name: 'Orders & Invoices',
    icon: Receipt,
    desc: 'Simplify billing with automated invoices, order tracking, and payment integration for smooth transactions.',
    size: 'sm',
    color: 'bg-[#207D40]',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011'
  },
  {
    name: 'Accounting',
    icon: Wallet,
    desc: 'Stay on top of finances with integrated accounting tools. Track expenses, revenue, and profitability with ease. Generate reports for smarter decisions.',
    size: 'md',
    color: 'bg-[#F7A300]',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069'
  }
];

const utilityFeatures = [
  { name: 'Gift / Vouchers', icon: Gift, desc: 'Boost sales with customizable gift cards and vouchers. Perfect for promotions and rewards.' },
  { name: 'HR Management', icon: Users, desc: 'Manage staff schedules, attendance, payroll, and performance tailored for spa operations.' },
  { name: 'Stock & Inventory', icon: Package, desc: 'Track product usage, supplier orders, and stock levels in real time to optimize costs.' },
  { name: 'Point of Sale', icon: CreditCard, desc: 'Seamless integrated payments and retail checkouts.' },
  { name: 'Online Booking', icon: Globe, desc: '24/7 confirmations via web and mobile interfaces.' },
  { name: 'Marketing Campaigns', icon: Megaphone, desc: 'Hyper-targeted SMS and email outreach tools.' },
  { name: 'Product Consumption', icon: Droplets, desc: 'Track back-bar usage during treatments automatically.' },
  { name: 'Discount Coupons', icon: Ticket, desc: 'Custom codes for seasonal and influencer promotions.' },
  { name: 'Reward Points', icon: Star, desc: 'Loyalty programs that drive repeat visits and retention.' },
  { name: 'Automated Feedback', icon: MessageSquare, desc: 'Instant customer surveys and reputation management.' },
  { name: 'Incentive Management', icon: TrendingUp, desc: 'Performance-based reward automation for therapists.' },
  { name: 'Data Security', icon: ShieldCheck, desc: 'Enterprise-grade encryption and automated backups.' },
];

const FeaturesPage: React.FC = () => {
  const marqueeItems = [
    { text: "REAL-TIME METRICS", icon: Activity },
    { text: "MOBILE-FIRST UI", icon: Smartphone },
    { text: "GDPR COMPLIANT", icon: Shield },
    { text: "SETUP IN MINUTES", icon: Zap },
  ];

  return (
    <div className="bg-white selection:bg-[#207D40] selection:text-white">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F8FAFC] pointer-events-none skew-x-[-6deg] translate-x-12"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-20">
            <div className="lg:w-[55%] xl:w-7/12">
              <div className="flex items-center gap-3 mb-8 overflow-hidden">
                <span className="h-px w-10 bg-[#207D40]"></span>
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#207D40]">The Product Compendium</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111827] leading-[1.1] tracking-tighter mb-8">
                All-in-One <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#207D40] to-[#F7A300]">ERP Software</span> <br />
                Designed Exclusively for Spas.
              </h1>
              <p className="text-sm md:text-base text-gray-500 font-medium max-w-lg leading-relaxed mb-8">
                My Spa Management System is a purpose-built Spa ERP that helps spa owners streamline operations, eliminate disconnected tools, and make smarter business decisions.
              </p>
            </div>

            <div className="lg:w-[45%] xl:w-5/12 relative">
              <div className="relative">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white rotate-2 group hover:rotate-0 transition-transform duration-1000 max-w-[400px] ml-auto">
                  <img 
                   src="/images/erp.jpeg" 
                    alt="Artisan Spa Experience" 
                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
                </div>
                <div className="absolute -bottom-4 -left-6 z-20">
                  <button className="bg-[#207D40] text-white px-8 py-4 rounded-xl font-black text-base hover:bg-[#1a6333] transition-all flex items-center gap-2 group shadow-xl active:scale-95 border-2 border-white whitespace-nowrap">
                    Request a Demo
                    <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FOUNDATIONS BENTO GRID */}
      <section className="py-20 bg-[#F7A300] rounded-t-[3rem] lg:rounded-t-[4rem] mt-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter mb-4">Core Foundations</h2>
            <p className="text-orange-50 text-sm max-w-lg font-medium">The pillars of your digital transformation, designed to handle the heavy lifting of management.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:auto-rows-[220px]">
            {/* ITEM 1: DASHBOARD (LARGE) */}
            <div className="md:col-span-12 lg:col-span-8 lg:row-span-2 relative group rounded-[2rem] overflow-hidden border border-white/20 bg-gray-950 shadow-lg">
              <div className="absolute inset-0 z-0">
                <img src={anchorFeatures[0].img} alt={anchorFeatures[0].name} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              </div>
              <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                <div className="w-10 h-10 rounded-lg bg-[#207D40] flex items-center justify-center text-white mb-4 shadow-lg">
                  <LayoutGrid size={18} />
                </div>
                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">{anchorFeatures[0].name}</h3>
                <p className="text-gray-300 font-medium text-xs max-w-lg leading-relaxed">{anchorFeatures[0].desc}</p>
              </div>
            </div>

            {/* ITEM 2: CLIENTS */}
            <div className="md:col-span-6 lg:col-span-4 relative group rounded-[2rem] overflow-hidden border border-white/20 bg-gray-950 shadow-lg">
              <div className="absolute inset-0 z-0">
                <img src={anchorFeatures[1].img} alt={anchorFeatures[1].name} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              </div>
              <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                <div className="w-10 h-10 rounded-lg bg-[#F7A300] flex items-center justify-center text-white mb-4">
                  <Users size={18} />
                </div>
                <h3 className="text-2xl font-black text-white mb-1 tracking-tight">{anchorFeatures[1].name}</h3>
                <p className="text-gray-300 font-medium text-[11px] leading-relaxed">{anchorFeatures[1].desc}</p>
              </div>
            </div>

            {/* ITEM 3: ORDERS */}
            <div className="md:col-span-6 lg:col-span-4 relative group rounded-[2rem] overflow-hidden border border-white/20 bg-gray-950 shadow-lg">
              <div className="absolute inset-0 z-0">
                <img src={anchorFeatures[2].img} alt={anchorFeatures[2].name} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              </div>
              <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                <div className="w-10 h-10 rounded-lg bg-[#207D40] flex items-center justify-center text-white mb-4">
                  <Receipt size={18} />
                </div>
                <h3 className="text-2xl font-black text-white mb-1 tracking-tight">{anchorFeatures[2].name}</h3>
                <p className="text-gray-300 font-medium text-[11px] leading-relaxed">{anchorFeatures[2].desc}</p>
              </div>
            </div>

            {/* ITEM 4: ACCOUNTING */}
            <div className="md:col-span-12 lg:col-span-8 relative group rounded-[2rem] overflow-hidden border border-white/20 bg-gray-950 shadow-lg">
              <div className="absolute inset-0 z-0">
                <img src={anchorFeatures[3].img} alt={anchorFeatures[3].name} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              </div>
              <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                <div className="w-10 h-10 rounded-lg bg-[#F7A300] flex items-center justify-center text-white mb-4 shadow-lg">
                  <Wallet size={18} />
                </div>
                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">{anchorFeatures[3].name}</h3>
                <p className="text-gray-300 font-medium text-xs leading-relaxed max-w-lg">{anchorFeatures[3].desc}</p>
              </div>
            </div>

            {/* CTA CARD */}
            <div className="md:col-span-12 lg:col-span-4 bg-gradient-to-br from-[#207D40] to-[#F7A300] rounded-[2rem] p-8 flex flex-col justify-center items-center text-center group border border-white/20 shadow-xl">
                <Sparkles size={32} className="text-white mb-6 animate-pulse" />
                <h3 className="text-2xl font-black text-white mb-2">Wait, there's more.</h3>
                <p className="text-white/90 font-medium mb-8 text-[11px]">Discover our full utility suite designed for high-precision operations.</p>
                <button className="bg-white text-[#F7A300] px-8 py-2.5 rounded-full font-black text-xs hover:bg-orange-50 transition-colors shadow-lg active:scale-95">See the List</button>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLAINER VIDEO SECTION */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F7A300]/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-[#F7A300] text-[10px] font-black uppercase tracking-[0.4em] mb-8">
               <Activity size={10} className="animate-pulse" /> Integration Showcase
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter mb-4 leading-tight">
              One Unified <br /> Ecosystem.
            </h2>
            <p className="text-sm text-gray-400 font-medium max-w-xl mx-auto leading-relaxed">
              Witness how our modular architecture integrates seamlessly to create a frictionless management experience for your entire staff.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto group">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 aspect-video bg-gray-900 cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
                alt="System Integration Demo" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-2xl border border-white/30 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#F7A300] group-hover:border-[#F7A300] transition-all duration-500 shadow-2xl">
                  <Play size={24} fill="currentColor" className="ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UTILITY SUITE SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3 lg:sticky lg:top-40 h-fit">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#F7A300]"></div>
                <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#111827]">Utility Suite</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-[#111827] tracking-tighter mb-6 leading-tight">
                Precision Tools for Every Touchpoint.
              </h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8">
                While the foundations hold the structure, these tools provide the daily refinement that sets elite spas apart.
              </p>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-px bg-gray-100 border border-gray-100 overflow-hidden rounded-[2.5rem]">
              {utilityFeatures.map((f, i) => (
                <div key={i} className="bg-white p-10 group hover:bg-orange-50 transition-colors">
                  <div className="w-10 h-10 mb-6 text-[#111827] group-hover:text-[#F7A300] transition-colors">
                    <f.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-black text-[#111827] mb-2 tracking-tight">{f.name}</h4>
                  <p className="text-gray-500 font-medium leading-relaxed text-[12px]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE BANNER (Requested placement: between Utility Suite and Final CTA) */}
      <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#207D40] via-[#5d8d32] to-[#F7A300] py-6 flex items-center shadow-lg border-y border-white/10">
        <div className="flex whitespace-nowrap animate-marquee items-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center">
              {marqueeItems.map((item, idx) => (
                <div key={idx} className="flex items-center mx-12">
                   <span className="text-white/40 text-2xl mr-12 font-light">/</span>
                   <div className="flex items-center gap-4">
                     <item.icon size={20} className="text-white" />
                     <span className="text-white font-black text-[13px] tracking-[0.25em]">{item.text}</span>
                   </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <section className="py-32 lg:py-48 relative overflow-hidden text-center">
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111827] tracking-tighter leading-tight mb-8">
              The Future of <br />
              <span className="italic font-serif font-light text-[#F7A300]">Wellness</span> Is Here.
            </h2>
            <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto mb-12 leading-relaxed">
              Step into a new era of management. Reclaim your focus, empower your staff, and delight every guest.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button className="bg-[#F7A300] text-white px-10 py-4 rounded-xl font-black text-base hover:bg-orange-600 transition-all shadow-xl active:scale-95">
                Start Your Transformation
              </button>
              <button className="text-[#111827] font-bold text-base hover:underline underline-offset-8">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: inline-flex; animation: marquee 30s linear infinite; }
        .font-serif { font-family: 'Times New Roman', serif; }
      `}</style>
    </div>
  );
};

export default FeaturesPage;