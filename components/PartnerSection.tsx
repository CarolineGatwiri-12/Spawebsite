import React, { useRef } from 'react';
import { Rocket, Headphones, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const partners = [
  {
    title: "Uplift You",
    description:
      "A spa software platform built to grow with you and help you scale effortlessly in a competitive market.",
    icon: Rocket,
    number: "01",
    accent: "#267546",
    accentLight: "#267546",
    tag: "Growth Engine",
  },
  {
    title: "24/7 Support",
    description:
      "Get elite assistance anytime, anywhere. Our dedicated team is always on standby for your peace of mind.",
    icon: Headphones,
    number: "02",
    accent: "#FFA912",
    accentLight: "#FFA912",
    tag: "Always On",
    featured: true,
  },
  {
    title: "Personalized Experience",
    description:
      "Easy ways to create the bespoke, personalized experience your high-end guests truly deserve.",
    icon: Heart,
    number: "03",
    accent: "#267546",
    accentLight: "#267546",
    tag: "Bespoke",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const PartnerSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: '#0d1f0d' }}
    >
      {/* ── Background texture & glows ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Subtle noise grain */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>

        {/* Green glow left */}
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #2E8B35, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Amber glow right */}
        <div
          className="absolute -bottom-20 right-0 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #F5A800, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Horizontal rule */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.06) 60%, transparent)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.06) 60%, transparent)' }}
        />

        {/* Large serif watermark */}
        <div
          className="absolute right-[-2rem] top-1/2 -translate-y-1/2 select-none opacity-[0.025] text-white leading-none"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(140px, 20vw, 280px)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
          }}
        >
         MY SPA
        </div>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-6 lg:px-16">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-20 max-w-4xl mx-auto"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{
                borderColor: 'rgba(32,125,64,0.4)',
                background: 'rgba(32,125,64,0.1)',
                color: '#A8C5A0',
                fontFamily: '"DM Sans", sans-serif',
              }}
            >
              <Sparkles size={9} />
              Trusted Excellence
            </div>
          </div>

          {/* Headline */}
          <h2
            className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            The Spa Software Partner{' '}
            <br />
            <em
              className="not-italic"
              style={{
                background: 'linear-gradient(100deg, #A8C5A0 10%, #F5A800 80%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              You've Been Looking For
            </em>
          </h2>

          <p
            className="text-[#7a9a7a] text-base leading-relaxed"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Elevate your spa to new heights with a partner that blends technological
            perfection with deep industry empathy.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-3 gap-5"
        >
          {partners.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 200, damping: 18 } }}
                className="group relative rounded-[1.75rem] overflow-hidden cursor-pointer"
                style={{
                  background: item.featured
                    ? `linear-gradient(145deg, #1a3320, #112518)`
                    : 'rgba(255,255,255,0.03)',
                  border: item.featured
                    ? `1px solid rgba(247,163,0,0.2)`
                    : '1px solid rgba(255,255,255,0.06)',
                  boxShadow: item.featured
                    ? '0 0 0 1px rgba(247,163,0,0.08), 0 30px 60px rgba(0,0,0,0.4)'
                    : '0 20px 40px rgba(0,0,0,0.3)',
                }}
              >
                {/* Card glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 20%, ${item.accent}18, transparent 60%)`,
                  }}
                />

                {/* Featured top accent bar */}
                {item.featured && (
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`,
                    }}
                  />
                )}

                <div className="relative z-10 p-8 flex flex-col h-full">
                  {/* Top row: number + tag */}
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className="text-[11px] font-bold tracking-[0.2em] uppercase"
                      style={{
                        color: item.accent,
                        fontFamily: '"DM Sans", sans-serif',
                        opacity: 0.8,
                      }}
                    >
                      {item.number}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{
                        background: `${item.accent}18`,
                        color: item.accentLight,
                        fontFamily: '"DM Sans", sans-serif',
                        border: `1px solid ${item.accent}30`,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${item.accent}30, ${item.accent}10)`,
                      border: `1px solid ${item.accent}30`,
                    }}
                  >
                    <Icon size={22} color={item.accentLight} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <h3
                    className="text-2xl font-bold text-white mb-4 leading-tight tracking-tight"
                    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-[#6a8a6a] text-sm leading-relaxed mb-8 flex-1"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {item.description}
                  </p>

                  {/* CTA link */}
                  <div
                    className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300"
                    style={{
                      color: item.featured ? item.accent : 'rgba(255,255,255,0.2)',
                      fontFamily: '"DM Sans", sans-serif',
                    }}
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                      style={{ color: item.accentLight }}
                    />
                  </div>
                </div>

                {/* Bottom decorative arc */}
                <div
                  className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-700"
                  style={{ background: item.accent }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerSection;