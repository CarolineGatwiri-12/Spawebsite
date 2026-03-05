import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Zap, CreditCard, Sparkles, Gift, Users } from 'lucide-react';

const faqs = [
  {
    question: "What is Myspa ERP System?",
    answer: "MySpa ERP System is a cloud-based Spa Management Software designed exclusively for spas. It is a complete Spa ERP solution that integrates bookings, client management, accounting, HR, inventory, billing, reporting, and gift vouchers into one unified platform. Unlike basic booking tools, it provides full operational visibility and business control.",
    icon: Sparkles
  },
  {
    question: "How do I get started with Myspa ERP System?",
    answer: "To get started with MySpa ERP System, request a demo, select a suitable subscription plan, and complete onboarding with our support team. Since MySpa is cloud-based, no installation is required. You can access your Spa ERP system securely from any device with internet access.",
    icon: Zap
  },
  {
    question: "How much does Myspa ERP System cost?",
    answer: "The cost of MySpa ERP System depends on the number of users, branches, and required modules. Pricing is subscription-based and tailored to your spa’s size and operational needs. Contact us for a customized quote based on your business structure.",
    icon: CreditCard
  },
  {
    question: "Can I cancel my Myspa ERP System subscription at any time?",
    answer: "Yes, MySpa ERP System operates on a subscription model. You may cancel according to your agreed billing terms. We prioritize flexibility while building long-term partnerships with spa businesses.",
    icon: HelpCircle
  },
  {
    question: "Is Myspa ERP System secure?",
    answer: "Yes, MySpa ERP System is built on secure cloud infrastructure with encrypted data storage, role-based access control, secure authentication, and regular system updates. Your client data, financial records, and operational information remain protected at all times.",
    icon: ShieldCheck
  },
  {
    question: "How does the Myspa ERP dashboard work?",
    answer: "The MySpa ERP dashboard provides real-time visibility into revenue, client visits, payments, inventory levels, staff activity, and profitability. It acts as a centralized command center, helping spa owners make data-driven decisions using live performance analytics.",
    icon: Sparkles
  },
  {
    question: "How does the Client Module work?",
    answer: "Watch our step-by-step video explaining how the Client Module helps you manage customer profiles, visit history, preferences, and loyalty information in one place.",
    icon: HelpCircle
  },
  {
    question: "How are customer orders created in Myspa ERP System?",
    answer: "Watch our tutorial video to see how customer orders are created, managed, and linked to billing and inventory inside the MySpa ERP system.",
    icon: HelpCircle
  },
  {
    question: "How does the Stock & Inventory Module work?",
    answer: "Watch the video guide to learn how MySpa tracks product usage, monitors stock levels, manages suppliers, and prevents shortages through smart inventory control.",
    icon: HelpCircle
  },
  {
    question: "How do gift cards and vouchers work?",
    answer: "Watch our video tutorial to learn how to create, sell, and redeem gift cards and vouchers to increase spa revenue and customer engagement.",
    icon: Gift
  },
  {
    question: "How does the HR Management Module work?",
    answer: "Watch our video to understand how MySpa manages staff schedules, attendance, payroll tracking, and performance incentives in one integrated HR system.",
    icon: Users
  },
  {
    question: "How does Myspa ERP System help manage daily spa operations?",
    answer: "MySpa ERP System centralizes bookings, billing, HR, inventory, accounting, and reporting into one integrated Spa Operations System. This eliminates disconnected tools and improves workflow efficiency across your entire spa business.",
    icon: Zap
  },
  {
    question: "How does Myspa ERP System improve business performance and growth?",
    answer: "MySpa improves business performance by providing real-time data, financial visibility, and structured reporting. Spa owners can identify profitable services, reduce inefficiencies, improve staff productivity, and scale confidently using actionable insights.",
    icon: Sparkles
  }
];


const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden bg-[#F8FAFC]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#207D40]/30"></span>
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#207D40]">Knowledge Base</span>
              <span className="h-px w-8 bg-[#207D40]/30"></span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] text-[#111827] mb-8">
              Frequently Asked <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#207D40] to-[#F7A300]">Questions.</span>
            </h1>
            
            <p className="text-sm md:text-base text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
              All your questions answered in one place. Explore our guide to understanding how MySpa powers the world's most elite wellness brands.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
             <div className="space-y-4">
               {faqs.map((faq, idx) => (
                 <div 
                   key={idx} 
                   className={`border rounded-2xl transition-all duration-300 ${openIndex === idx ? 'border-[#207D40] bg-[#F0FDF4]/30 shadow-sm' : 'border-gray-100 bg-white hover:border-gray-200'}`}
                 >
                   <button 
                     onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                     className="w-full flex items-center justify-between p-6 text-left"
                   >
                     <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${openIndex === idx ? 'bg-[#207D40] text-white' : 'bg-gray-50 text-gray-400'}`}>
                           <faq.icon size={16} />
                        </div>
                        <span className="text-sm font-black text-[#111827] tracking-tight">{faq.question}</span>
                     </div>
                     <ChevronDown 
                       size={18} 
                       className={`text-gray-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-[#207D40]' : ''}`} 
                     />
                   </button>
                   
                   <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96' : 'max-h-0'}`}>
                     <div className="p-6 pt-0 ml-12 border-t border-gray-100/10">
                       <p className="text-xs text-gray-500 font-medium leading-relaxed">
                         {faq.answer}
                       </p>
                     </div>
                   </div>
                 </div>
               ))}
             </div>

             <div className="mt-16 p-8 rounded-3xl bg-[#111827] text-white flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                   <h3 className="text-base font-black mb-1">Still have questions?</h3>
                   <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">Our support team is available 24/7</p>
                </div>
                <button className="bg-[#207D40] text-white px-8 py-3 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-[#1a6333] transition-all active:scale-95 shadow-lg">
                   Chat with an Expert
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* FINAL SEARCH HELP */}
      <section className="pb-32">
        <div className="container mx-auto px-4 md:px-8 text-center">
           <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-300 mb-8">Search our documentation</p>
           <div className="max-w-xl mx-auto relative">
              <input 
                type="text" 
                placeholder="Type your question..." 
                className="w-full bg-gray-50 border border-gray-100 rounded-full px-8 py-4 focus:outline-none focus:ring-2 focus:ring-[#207D40]/20 font-medium text-sm text-[#111827]"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#207D40] text-white p-2 rounded-full">
                 <Zap size={16} fill="white" />
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;