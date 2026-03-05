import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutSection from './components/AboutSection';
import PartnerSection from './components/PartnerSection';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FeaturesPage from './components/FeaturesPage';
import PricingPage from './components/PricingPage';
import AboutPage from './components/AboutPage';
import ResourcesPage from './components/ResourcesPage';
import FAQPage from './components/FAQPage';
import ContactPage from './components/ContactPage';
import { Activity, Sparkles, ArrowRight, Play } from 'lucide-react';

const BRAND = {
  green: '#2E8B35',
  greenLight: '#A8C5A0',
  amber: '#F5A800',
  amberLight: '#F9D98C',
  dark: '#0d1f0d',
};

const InnovationSection: React.FC = () => {
  const [videoHovered, setVideoHovered] = useState(false);

  return (
    <section className="relative overflow-hidden" style={{ background: BRAND.dark }}>

      {/* ── Top rule ── */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${BRAND.green}40, transparent)` }} />

      {/* ── Background image with green tint ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/DSC06620.jpg"
          alt="Luxury Spa Architecture"
          className="w-full h-full object-cover"
          style={{ opacity: 0.18, mixBlendMode: 'luminosity', animation: 'breathe 28s ease-in-out infinite' }}
        />
        
        {/* Green glow center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[500px] rounded-full opacity-20"
            style={{ background: `radial-gradient(circle, ${BRAND.green}, transparent 65%)`, filter: 'blur(80px)' }} />
        </div>
        {/* Amber glow edge */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10"
          style={{ background: `radial-gradient(circle, ${BRAND.amber}, transparent 65%)`, filter: 'blur(60px)' }} />
      </div>

      

      {/* ── Content ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: headline + CTAs */}
          <div>
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
              style={{
                borderColor: `${BRAND.green}40`,
                background: `${BRAND.green}12`,
                color: 'white',
                fontFamily: '"DM Sans", sans-serif',
              }}
            >
              <Activity size={9} className="animate-pulse" /> The Precision of Serenity
            </div>

            {/* Headline */}
            <h2
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] tracking-[-0.025em] text-white mb-6"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Experience <br />
              the{' '}
              <em
                className="not-italic"
                style={{
                  background: `linear-gradient(100deg, ${BRAND.greenLight} 10%, ${BRAND.amber} 85%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'shimmer 6s linear infinite',
                  backgroundSize: '200% auto',
                }}
              >
                Innovation
              </em>
            </h2>

            <p
              className="text-base leading-[1.75] mb-10 max-w-lg"
              style={{ color: 'White', fontFamily: '"DM Sans", sans-serif' }}
            >
              We've unified the clinical precision of enterprise ERP with the deep tranquility
              of a world-class spa. It's not just management software — it's the evolution of wellness.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-14">
              <button
                className="flex items-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-xl text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, ${BRAND.green}, #1e6325)`,
                  boxShadow: `0 12px 32px ${BRAND.green}40`,
                  fontFamily: '"DM Sans", sans-serif',
                }}
              >
                See the Future
                <ArrowRight size={15} />
              </button>

              <button
                className="flex items-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.75)',
                  fontFamily: '"DM Sans", sans-serif',
                }}
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: BRAND.amber }}
                >
                  <Play size={8} fill="white" color="white" />
                </span>
                Watch Demo
              </button>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8">
              {[
                { value: '1,200+', label: 'Luxury Venues' },
                { value: '98%', label: 'Satisfaction Rate' },
                { value: '4 min', label: 'Avg. Setup Time' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span
                    className="text-2xl font-bold text-white leading-none"
                    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.15em] mt-1.5"
                    style={{ color: '#3a5a3a', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: feature highlight cards */}
          <div className="relative hidden lg:block">
            {/* Ambient glow behind cards */}
            <div
              className="absolute inset-0 rounded-3xl opacity-20 pointer-events-none"
              style={{ background: `radial-gradient(circle at 50% 50%, ${BRAND.green}, transparent 70%)`, filter: 'blur(40px)' }}
            />

            <div className="flex flex-col gap-4 relative">
              {[
                {
                  icon: Sparkles,
                  title: 'AI-Powered Analytics',
                  desc: 'Predictive revenue insights and automated reports delivered daily.',
                  accent: BRAND.green,
                  accentLight: 'white',
                },
                {
                  icon: Activity,
                  title: 'Real-Time Operations',
                  desc: 'Live dashboards across all locations — bookings, staff, and stock in one view.',
                  accent: BRAND.amber,
                  accentLight: BRAND.amberLight,
                  featured: true,
                },
                {
                  icon: ArrowRight,
                  title: 'Seamless Integrations',
                  desc: 'Connect payment gateways, booking platforms, and POS systems effortlessly.',
                  accent: BRAND.green,
                  accentLight: BRAND.greenLight,
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="relative flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 group hover:-translate-y-1"
                  style={{
                    background: card.featured
                      ? 'linear-gradient(135deg, rgba(46,139,53,0.15), rgba(245,168,0,0.05))'
                      : 'rgba(255,255,255,0.03)',
                    border: card.featured
                      ? `1px solid ${BRAND.green}35`
                      : '1px solid rgba(255,255,255,0.06)',
                    boxShadow: card.featured ? `0 16px 40px rgba(0,0,0,0.3)` : 'none',
                    transform: i === 1 ? 'translateX(24px)' : 'translateX(0)',
                  }}
                >
                  {/* Left bar accent */}
                  {card.featured && (
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[60%] rounded-r-full"
                      style={{ background: card.accent }}
                    />
                  )}

                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${card.accent}18`,
                      border: `1px solid ${card.accent}30`,
                    }}
                  >
                    <card.icon size={16} color={card.accentLight} strokeWidth={1.8} />
                  </div>

                  <div>
                    <p
                      className="text-sm font-bold text-white leading-none mb-2"
                      style={{ fontFamily: '"DM Sans", sans-serif' }}
                    >
                      {card.title}
                    </p>
                    <p
                      className="text-[12px] leading-relaxed"
                      style={{ color: 'white', fontFamily: '"DM Sans", sans-serif' }}
                    >
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom rule ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${BRAND.amber}30, transparent)` }} />

      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1.02); }
          50% { transform: scale(1.06); }
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes sweep {
          0% { left: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 110%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'features' | 'pricing' | 'about' | 'resources' | 'faq' | 'contact'>('home');

  const navigate = (page: 'home' | 'features' | 'pricing' | 'about' | 'resources' | 'faq' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderHome = () => (
    <>
      <Hero />
      <Features />
      <AboutSection />
      <PartnerSection />
      <Testimonials />
      <InnovationSection />
      <CTASection />
    </>
  );

  return (
    <div className="min-h-screen bg-[#FDFAF6] text-[#0d1f0d] overflow-x-hidden">
      <Navbar onNavigate={navigate} currentPage={currentPage} />
      <main>
        {currentPage === 'home' && renderHome()}
        {currentPage === 'features' && <FeaturesPage />}
        {currentPage === 'pricing' && <PricingPage />}
        {currentPage === 'about' && <AboutPage onNavigate={navigate} />}
        {currentPage === 'resources' && <ResourcesPage onNavigate={navigate} />}
        {currentPage === 'faq' && <FAQPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;