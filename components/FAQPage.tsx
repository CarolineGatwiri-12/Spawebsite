import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Zap, CreditCard, Sparkles } from 'lucide-react';

const faqs = [
  {
    question: "What is Myspa System?",
    answer: "MySpa is an enterprise-grade, cloud-based ERP solution specifically engineered for the wellness and beauty industry. Unlike simple booking tools, MySpa unifies your entire business lifecycle—from scheduling and CRM to inventory tracking and high-precision financial reporting—into one seamless ecosystem.",
    icon: Sparkles
  },
  {
    question: "How do I get started with Myspa System?",
    answer: "Getting started is effortless. Simply book a demo through our website, and one of our implementation specialists will walk you through a custom configuration. We handle the heavy lifting, including data migration from your legacy system and comprehensive staff training provided by our local support teams.",
    icon: Zap
  },
  {
    question: "How much does Myspa System cost?",
    answer: "Our pricing is transparent and scalable, starting at KES 3,999/month for boutique solo artists. We offer flexible tiers (Starter, Growth, and Pro) to match your operational volume. For large franchises with 10+ locations, we provide bespoke enterprise quotes based on your specific architectural needs.",
    icon: CreditCard
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes. We believe in the quality of our product, not long-term lock-ins. You can transition your plan or cancel your subscription at any time with zero hidden fees. Your data remains yours, and we provide seamless export tools should you ever choose to migrate.",
    icon: HelpCircle
  },
  {
    question: "Is Myspa System secure?",
    answer: "Security is the foundation of MySpa. We employ enterprise-grade 256-bit encryption, automated daily backups, and are fully PCI-DSS compliant. Your client data and financial records are stored in secure cloud environments with multi-factor authentication and strict access governance.",
    icon: ShieldCheck
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