import React, { useState } from 'react';
import {
  Calendar, CreditCard, Globe, Package, MessageSquare, UserCheck,
  Sparkles, Receipt, MapPin, Settings, ArrowRight, BarChart2, Users, Gift
} from 'lucide-react';
import { motion } from 'framer-motion';

const featureGroups = [
  {
    number: "01",
    title: "Business Intelligence & Financial Control",
    description: "The core engine powering every decision — from daily cash flow to long-term growth analytics.",
    accent: "#2E8B35",
    accentLight: "#A8C5A0",
    items: [
      { name: 'Dashboard', icon: BarChart2, description: 'Real-time KPIs at a glance' },
      { name: 'Orders & Invoices', icon: Receipt, description: 'Automated billing & receipts' },
      { name: 'Accounting', icon: CreditCard, description: 'Full P&L visibility' },
    ],
  },
  {
    number: "02",
    title: "Customer Experience & Sales Growth",
    description: "Build lasting relationships and unlock new revenue streams with smarter client management tools.",
    accent: "#F5A800",
    accentLight: "#F9D98C",
    items: [
      { name: 'CRM', icon: Users, description: 'Client profiles & history' },
      { name: 'Gift / Vouchers', icon: Gift, description: 'Digital gift cards & promos' },
      { name: 'Multi-location', icon: Globe, description: 'Centralized brand control' },
    ],
    featured: true,
  },
  {
    number: "03",
    title: "Operational & Workforce Management",
    description: "Streamline every aspect of your day-to-day — from staff scheduling to supply chain precision.",
    accent: "#C084A0",
    accentLight: "#E8C5D5",
    items: [
      { name: 'HR Management', icon: UserCheck, description: 'Shifts, payroll & performance' },
      { name: 'Inventory', icon: Package, description: 'Smart stock tracking' },
      { name: 'Settings', icon: Settings, description: 'Custom workflows & roles' },
    ],
  },
];

const marqueeItems = [
  "Market Intelligence", "Branded Solutions", "ERP Management",
  "Automated Planning", "24/7 Availability", "Always-on Analytics", "ERP Integration",
  "Market Intelligence", "Branded Solutions", "ERP Management",
  "Automated Planning", "24/7 Availability", "Always-on Analytics", "ERP Integration",
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const Features: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="features" className="relative py-28 overflow-hidden" style={{ background: '#0d1f0d' }}>

      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Noise grain */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <filter id="fnoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#fnoise)" />
        </svg>

        {/* Green glow */}
        <div className="absolute -top-40 left-1/4 w-[700px] h-[700px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #2E8B35, transparent 65%)', filter: 'blur(80px)' }} />
        {/* Amber glow */}
        <div className="absolute -bottom-20 right-1/4 w-[500px] h-[500px] rounded-full opacity-12"
          style={{ background: 'radial-gradient(circle, #F5A800, transparent 65%)', filter: 'blur(80px)' }} />

        {/* Top / bottom rules */}
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(46,139,53,0.2) 40%, rgba(46,139,53,0.2) 60%, transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(46,139,53,0.2) 40%, rgba(46,139,53,0.2) 60%, transparent)' }} />

        {/* Watermark */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.02] text-white whitespace-nowrap"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(100px,16vw,220px)', fontWeight: 900, letterSpacing: '-0.04em' }}
        >
          MODULES
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
            style={{
              borderColor: 'rgba(46,139,53,0.35)',
              background: 'rgba(46,139,53,0.1)',
              color: '#A8C5A0',
              fontFamily: '"DM Sans", sans-serif',
            }}
          >
            <Sparkles size={9} /> Module Suite
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-5"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Explore Our{' '}
            <em
              className="not-italic"
              style={{
                background: 'linear-gradient(100deg, #A8C5A0 10%, #F5A800 85%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Modules
            </em>
          </h2>
          <p
            className="text-[#7a9a7a] text-base leading-relaxed"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Built for the high-end salon. Scaled for the global spa franchise.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid lg:grid-cols-3 gap-5 mb-16">
          {featureGroups.map((group, gIdx) => (
            <motion.div
              key={gIdx}
              custom={gIdx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              onMouseEnter={() => setHovered(gIdx)}
              onMouseLeave={() => setHovered(null)}
              className="relative rounded-[1.75rem] overflow-hidden cursor-default"
              style={{
                background: group.featured
                  ? 'linear-gradient(145deg, #1a3320, #112518)'
                  : 'rgba(255,255,255,0.03)',
                border: group.featured
                  ? `1px solid rgba(245,168,0,0.2)`
                  : '1px solid rgba(255,255,255,0.06)',
                boxShadow: hovered === gIdx
                  ? `0 30px 60px rgba(0,0,0,0.4), 0 0 0 1px ${group.accent}30`
                  : '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'box-shadow 0.4s ease, transform 0.4s ease',
                transform: hovered === gIdx ? 'translateY(-8px)' : 'translateY(0)',
              }}
            >
              {/* Featured top glow bar */}
              {group.featured && (
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${group.accent}, transparent)` }}
                />
              )}

              {/* Hover glow */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 30% 20%, ${group.accent}12, transparent 60%)`,
                  opacity: hovered === gIdx ? 1 : 0,
                }}
              />

              <div className="relative z-10 p-8">

                {/* Top row */}
                <div className="flex items-start justify-between mb-7">
                  <span
                    className="text-[11px] font-bold tracking-[0.2em] uppercase opacity-60"
                    style={{ color: group.accent, fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {group.number}
                  </span>
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{
                      background: `${group.accent}18`,
                      color: group.accentLight,
                      border: `1px solid ${group.accent}30`,
                      fontFamily: '"DM Sans", sans-serif',
                    }}
                  >
                    {gIdx === 0 ? 'Finance' : gIdx === 1 ? 'CX & Sales' : 'Operations'}
                  </span>
                </div>

                {/* Title & description */}
                <h3
                  className="text-[1.35rem] font-bold text-white mb-3 leading-tight"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {group.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ color: '#5a7a5a', fontFamily: '"DM Sans", sans-serif' }}
                >
                  {group.description}
                </p>

                {/* Feature items */}
                <div className="flex flex-col gap-2.5">
                  {group.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3.5 rounded-xl px-4 py-3 transition-all duration-300"
                      style={{
                        background: hovered === gIdx
                          ? `${group.accent}10`
                          : 'rgba(255,255,255,0.03)',
                        border: `1px solid ${hovered === gIdx ? group.accent + '25' : 'rgba(255,255,255,0.05)'}`,
                      }}
                    >
                      {/* Icon */}
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `${group.accent}18`,
                          border: `1px solid ${group.accent}30`,
                        }}
                      >
                        <item.icon size={16} color={group.accentLight} strokeWidth={1.8} />
                      </div>

                      {/* Text */}
                      <div className="min-w-0 flex-1">
                        <p
                          className="text-sm font-semibold text-white leading-none"
                          style={{ fontFamily: '"DM Sans", sans-serif' }}
                        >
                          {item.name}
                        </p>
                        <p
                          className="text-[11px] mt-1 leading-none"
                          style={{ color: '#4a6a4a', fontFamily: '"DM Sans", sans-serif' }}
                        >
                          {item.description}
                        </p>
                      </div>

                      <ArrowRight
                        size={12}
                        className="flex-shrink-0 transition-all duration-300"
                        style={{
                          color: group.accent,
                          opacity: hovered === gIdx ? 0.7 : 0,
                          transform: hovered === gIdx ? 'translateX(0)' : 'translateX(-6px)',
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div
                  className="mt-7 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300"
                  style={{
                    color: hovered === gIdx ? group.accentLight : '#3a5a3a',
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                >
                  Explore module
                  <ArrowRight
                    size={11}
                    className="transition-transform duration-300"
                    style={{ transform: hovered === gIdx ? 'translateX(4px)' : 'translateX(0)' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Marquee strip ── */}
        <div
          className="relative rounded-2xl overflow-hidden py-5 px-6"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(90deg, #0d1f0d, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(-90deg, #0d1f0d, transparent)' }} />

          <div className="flex gap-10 overflow-hidden">
            <motion.div
              className="flex gap-10 flex-shrink-0"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
            >
              {marqueeItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 flex-shrink-0">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: i % 2 === 0 ? '#2E8B35' : '#F5A800' }}
                  />
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.18em] whitespace-nowrap"
                    style={{ color: 'rgba(255,255,255,0.25)', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Features;