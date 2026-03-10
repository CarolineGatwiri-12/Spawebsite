import React, { useState } from 'react';
import {
  Check, ArrowRight, Sparkles, Globe,
  Rocket, Landmark, HelpCircle,
  Shield, ShieldCheck, Activity, BarChart3
} from 'lucide-react';

// ─── Brand tokens ───────────────────────────────────────────────
const G  = '#2E8B35';                          // brand green
const AM = '#F5A800';                          // brand amber
const Gr = (a) => `rgba(46,139,53,${a})`;     // green with alpha
const Am = (a) => `rgba(245,168,0,${a})`;     // amber with alpha
// ────────────────────────────────────────────────────────────────

const plans = [
  { id: 'starter', name: "Starter", icon: Rocket,   price: "3,999",  tagline: "The foundation for solo artists and boutique salons.", features: ["Appointment Scheduling","Online Booking","Client Management","Basic Reports","SMS & Email Reminders"], buttonText: "Start Free Trial",          theme: "light" },
  { id: 'growth',  name: "Growth",  icon: Sparkles, price: "7,499",  tagline: "The engine for ambitious, multi-service teams.",        features: ["All Starter Features","Product Inventory","Marketing Campaigns","Gift Vouchers","Discount Coupon Codes","Staff Management"], buttonText: "Join the Elite",             theme: "green", popular: true },
  { id: 'pro',     name: "Pro",     icon: Landmark, price: "11,999", tagline: "The ultimate command center for enterprises.",          features: ["All Growth Features","Multi-Location Management","Advanced Analytics","Data Export & API","Priority 24/7 Support","Incentive Management"], buttonText: "Request Enterprise Access", theme: "dark"  }
];

const comparisonData = [
  { category: "Experience & Booking", features: [
    { name: "24/7 Online Booking",   starter: true,       growth: true,          pro: true },
    { name: "Branded Client App",    starter: false,      growth: "Optional",    pro: true },
    { name: "Automated Reminders",   starter: "Standard", growth: "Customizable",pro: "Priority Routing" },
    { name: "Waitlist Management",   starter: false,      growth: true,          pro: true },
  ]},
  { category: "Operations & Staff", features: [
    { name: "Inventory Management",  starter: "Basic",    growth: "Advanced",    pro: "Enterprise" },
    { name: "Payroll & Commission",  starter: false,      growth: true,          pro: true },
    { name: "Staff Mobile App",      starter: true,       growth: true,          pro: true },
    { name: "Shift Scheduling",      starter: "Manual",   growth: "Smart Auto",  pro: "Optimized AI" },
  ]},
  { category: "Marketing & Growth", features: [
    { name: "Email Marketing",       starter: "500/mo",   growth: "5,000/mo",    pro: "Unlimited" },
    { name: "Loyalty Programs",      starter: false,      growth: true,          pro: true },
    { name: "Membership Management", starter: false,      growth: true,          pro: true },
    { name: "Review Automation",     starter: true,       growth: true,          pro: true },
  ]},
  { category: "Intelligence & Scale", features: [
    { name: "Standard Reports",      starter: true,       growth: true,          pro: true },
    { name: "Advanced Analytics",    starter: false,      growth: true,          pro: true },
    { name: "Multi-Location Control",starter: false,      growth: false,         pro: true },
    { name: "API & Webhooks",        starter: false,      growth: false,         pro: true },
  ]}
];

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: '#fff', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .pricing-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .pricing-card:hover { transform: translateY(-6px); }

        .plan-btn {
          width: 100%; padding: 14px 24px; border-radius: 12px; border: none;
          font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 12px;
          letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer;
          transition: all 0.18s; display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .plan-btn:hover { filter: brightness(0.88); transform: translateY(-1px); }

        .cta-primary {
          background: #2E8B35; color: #fff; border: none;
          padding: 16px 36px; border-radius: 12px; cursor: pointer;
          font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 13px;
          letter-spacing: 0.08em; text-transform: uppercase;
          transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px;
          box-shadow: 0 8px 32px rgba(46,139,53,0.35);
        }
        .cta-primary:hover { background: #256b2b; transform: translateY(-2px); box-shadow: 0 14px 40px rgba(46,139,53,0.45); }

        .ghost-btn {
          background: transparent; border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.6);
          padding: 15px 28px; border-radius: 12px; font-family: 'Poppins', sans-serif;
          font-weight: 600; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase;
          cursor: pointer; transition: all 0.18s;
        }
        .ghost-btn:hover { border-color: rgba(46,139,53,0.55); color: #2E8B35; }

        .billing-btn {
          padding: 9px 24px; border-radius: 8px; border: none; cursor: pointer;
          font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 11px;
          letter-spacing: 0.05em; transition: all 0.15s;
        }

        .highlight-strip {
          border-top: 1px solid #f1f5f9; padding-top: 48px;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s ease both; }

        @keyframes pulse-bar {
          0%,100% { opacity: 0.4; transform: scaleY(1); }
          50%      { opacity: 1;   transform: scaleY(1.18); }
        }
        .stat-bar { animation: pulse-bar 2.8s ease-in-out infinite; transform-origin: center; }

        .cmp-row { transition: background 0.12s; }
        .cmp-row:hover { background: rgba(255,255,255,0.024) !important; }

        /* White diagonal cut at bottom of hero */
        .hero-cut {
          position: absolute; bottom: -1px; left: 0; right: 0; height: 72px;
          background: #fff; clip-path: polygon(0 100%, 100% 20%, 100% 100%); z-index: 2;
        }

        @media (max-width: 900px) {
          .plans-grid    { grid-template-columns: 1fr !important; }
          .highlight-strip { grid-template-columns: 1fr 1fr !important; }
          .hero-grid     { grid-template-columns: 1fr !important; }
          .hero-img-col  { display: none !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════════════
          HERO — pure neutral dark, brand glows
      ══════════════════════════════════════════════ */}
      <section style={{
        position: 'relative', background: '#0a0a0b',
        overflow: 'hidden', minHeight: '120vh',
        display: 'flex', alignItems: 'center',
      }}>
        {/* Fine grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)', backgroundSize: '60px 60px', zIndex: 0 }} />
        {/* Green glow — top-left */}
        <div style={{ position: 'absolute', top: '-160px', left: '-140px', width: '720px', height: '720px', borderRadius: '50%', background: `radial-gradient(circle, ${Gr(0.17)} 0%, transparent 68%)`, zIndex: 0 }} />
        {/* Amber glow — bottom-right */}
        <div style={{ position: 'absolute', bottom: '-100px', right: '4%',  width: '580px', height: '580px', borderRadius: '50%', background: `radial-gradient(circle, ${Am(0.11)} 0%, transparent 68%)`, zIndex: 0 }} />
        {/* Soft centre bloom */}
        <div style={{ position: 'absolute', top: '42%', left: '40%', width: '300px', height: '300px', borderRadius: '50%', background: `radial-gradient(circle, ${Gr(0.05)} 0%, transparent 70%)`, zIndex: 0 }} />
   

        <div style={{ width: '100%', maxWidth: '1920px', margin: '0 auto', padding: '100px 5vw 160px', position: 'relative', zIndex: 1 }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 580px', alignItems: 'center', gap: '80px' }}>

            {/* ── Left col ── */}
            <div>
              {/* Eyebrow pill */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '36px', background: Gr(0.1), border: `1px solid ${Gr(0.25)}`, borderRadius: '99px', padding: '7px 18px 7px 12px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: G }} />
                <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', color: G }}>Value · Logic · Scale</span>
              </div>

              {/* ── Hero heading — reduced from clamp(52px, 6vw, 98px) to clamp(36px, 4vw, 64px) ── */}
              <h1 style={{ fontSize: 'clamp(36px, 4vw, 64px)', fontWeight: 800, lineHeight: 1.0, color: '#fff', letterSpacing: '-0.04em', marginBottom: '28px' }}>
                Pricing<br />
                <span style={{ color: G }}>For</span> <span style={{ color: AM }}>The</span><br />
                Modern Brand.
              </h1>

              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.42)', lineHeight: 1.85, marginBottom: '52px', maxWidth: '500px', fontWeight: 400 }}>
                Simple pricing that scales with you — whether you're a boutique spa or a multi-location enterprise brand.
              </p>

              {/* Stats panel */}
              <div style={{ display: 'flex', marginBottom: '52px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', overflow: 'hidden' }}>
                {[{ num: '2,400+', label: 'Elite Spas' }, { num: '99.9%', label: 'Uptime SLA' }, { num: '24/7', label: 'Support' }].map((s, i) => (
                  <div key={i} style={{ flex: 1, padding: '24px 28px', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none', position: 'relative' }}>
                    {i === 0 && <div className="stat-bar" style={{ position: 'absolute', left: 0, top: '22%', bottom: '22%', width: '3px', background: G, borderRadius: '99px' }} />}
                    <div style={{ fontSize: '30px', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: '10px', fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginTop: '6px' }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <button className="cta-primary">Get Started Now <ArrowRight size={15} /></button>
                <button className="ghost-btn">View Demo</button>
              </div>
            </div>

            {/* ── Right col — image ── */}
            <div className="hero-img-col" style={{ position: 'relative' }}>
              {/* Glow ring behind card */}
              <div style={{ position: 'absolute', inset: '-14px', borderRadius: '46px', background: `linear-gradient(135deg, ${Gr(0.28)}, ${Am(0.14)})`, zIndex: 0, filter: 'blur(20px)' }} />

              <div style={{ borderRadius: '32px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 64px 120px rgba(0,0,0,0.72)', position: 'relative', zIndex: 1 }}>
                <img src="/images/pricing.jpeg" alt="Facial Treatment"
                  style={{ width: '100%', height: '72vh', minHeight: '580px', objectFit: 'cover', display: 'block' }} />
                {/* Bottom fade */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,11,0.9) 0%, transparent 52%)' }} />
                {/* Green accent stripe top-right */}
                <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '42%', background: `linear-gradient(to bottom, ${G}, transparent)` }} />
                {/* Badge bottom-left */}
                <div style={{ position: 'absolute', bottom: '32px', left: '28px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: G, color: '#fff', padding: '6px 14px', borderRadius: '99px', fontSize: '9px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '12px', boxShadow: `0 4px 16px ${Gr(0.5)}` }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#fff', opacity: 0.8 }} />
                    Case Study
                  </div>
                  <p style={{ color: '#fff', fontSize: '16px', fontWeight: 700, lineHeight: 1.4 }}>Trusted by 2,400+<br />Elite Spas globally.</p>
                </div>
              </div>

              {/* Floating amber card — top-right */}
              <div style={{ position: 'absolute', top: '-28px', right: '-28px', background: AM, borderRadius: '22px', padding: '22px 28px', boxShadow: `0 24px 56px ${Am(0.45)}`, zIndex: 2 }}>
                <div style={{ fontSize: '34px', fontWeight: 900, color: '#fff', lineHeight: 1 }}>2,400+</div>
                <div style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '5px' }}>Elite Spas</div>
              </div>

              {/* Floating dark card — bottom-left */}
              <div style={{ position: 'absolute', bottom: '22%', left: '-38px', background: '#141414', border: `1px solid ${Gr(0.3)}`, borderRadius: '16px', padding: '16px 20px', boxShadow: '0 16px 40px rgba(0,0,0,0.55)', zIndex: 2, display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: Gr(0.14), display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <ShieldCheck size={16} color={G} />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>99.9% Uptime</div>
                  <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', fontWeight: 500, marginTop: '3px' }}>Enterprise SLA</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BILLING TOGGLE ── */}
      <div style={{ background: '#fff', padding: '40px 5vw 32px', maxWidth: '1600px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', background: '#f8fafc', padding: '4px', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
            {['monthly', 'yearly'].map(c => (
              <button key={c} className="billing-btn" onClick={() => setBillingCycle(c)}
                style={{ background: billingCycle === c ? '#111827' : 'transparent', color: billingCycle === c ? '#fff' : '#94a3b8', textTransform: 'capitalize' }}>
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </button>
            ))}
          </div>
          <span style={{ background: Gr(0.08), color: G, border: `1px solid ${Gr(0.2)}`, padding: '3px 10px', borderRadius: '99px', fontSize: '9px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Save 15%</span>
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Annual commitment</span>
        </div>
      </div>

      {/* ── PRICING CARDS ── */}
      <section style={{ padding: '0 5vw 96px', maxWidth: '1600px', margin: '0 auto' }}>
        <div className="plans-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'stretch' }}>
          {plans.map((plan, i) => {
            const isGreen = plan.theme === 'green';
            const isDark  = plan.theme === 'dark';
            return (
              <div key={plan.id} className="pricing-card fade-up" style={{
                position: 'relative', display: 'flex', flexDirection: 'column',
                padding: '40px 36px', borderRadius: '24px',
                background: isDark ? '#111827' : isGreen ? Gr(0.05) : '#f8fafc',
                border: isGreen ? `1.5px solid ${Gr(0.25)}` : isDark ? `1.5px solid ${Am(0.2)}` : '1.5px solid #f1f5f9',
                boxShadow: isGreen ? `0 20px 60px ${Gr(0.1)}` : isDark ? '0 20px 60px rgba(0,0,0,0.2)' : '0 4px 24px rgba(0,0,0,0.04)',
                animationDelay: `${i * 0.1}s`,
              }}>
                {plan.popular && (
                  <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: G, color: '#fff', padding: '6px 16px', borderRadius: '99px', fontSize: '9px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '5px', boxShadow: `0 8px 20px ${Gr(0.35)}` }}>
                    <Check size={9} strokeWidth={4} /> Industry Standard
                  </div>
                )}
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: isDark ? Am(0.15) : isGreen ? Gr(0.12) : 'rgba(17,24,39,0.06)', marginBottom: '20px' }}>
                    <plan.icon size={20} color={isDark ? AM : isGreen ? G : '#111827'} />
                  </div>
                  <h2 style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-0.02em', color: isDark ? '#fff' : '#111827', marginBottom: '4px' }}>{plan.name}</h2>
                  <p style={{ fontSize: '13px', fontWeight: 500, color: isDark ? 'rgba(255,255,255,0.45)' : '#94a3b8', marginBottom: '24px', lineHeight: 1.5 }}>{plan.tagline}</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: isDark ? 'rgba(255,255,255,0.3)' : '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.1em' }}>KES</span>
                    <span style={{ fontSize: '42px', fontWeight: 900, letterSpacing: '-0.04em', color: isDark ? AM : isGreen ? G : '#111827', lineHeight: 1 }}>{plan.price}</span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: isDark ? 'rgba(255,255,255,0.25)' : '#cbd5e1' }}>/ mo</span>
                  </div>
                </div>
                <div style={{ height: '1px', background: isDark ? 'rgba(255,255,255,0.07)' : '#f1f5f9', marginBottom: '24px' }} />
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '13px', flex: 1, marginBottom: '32px' }}>
                  {plan.features.map((f, fi) => (
                    <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '22px', height: '22px', borderRadius: '7px', background: isDark ? Am(0.15) : isGreen ? Gr(0.1) : 'rgba(17,24,39,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Check size={12} strokeWidth={3} color={isDark ? AM : isGreen ? G : '#111827'} />
                      </div>
                      <span style={{ fontSize: '14px', fontWeight: 500, color: isDark ? 'rgba(255,255,255,0.75)' : '#475569' }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className="plan-btn" style={{ background: isDark ? AM : isGreen ? G : '#111827', color: '#fff' }}>
                  {plan.buttonText} <ArrowRight size={13} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          COMPARISON — neutral dark, no green-cast bg
      ══════════════════════════════════════════════ */}
      <section style={{ background: '#0d0d0f', padding: '96px 5vw', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)', backgroundSize: '52px 52px', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '-140px', right: '12%', width: '500px', height: '500px', borderRadius: '50%', background: `radial-gradient(circle, ${Gr(0.1)} 0%, transparent 65%)`, zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '4%',  width: '340px', height: '340px', borderRadius: '50%', background: `radial-gradient(circle, ${Am(0.08)} 0%, transparent 65%)`, zIndex: 0 }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1600px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap', marginBottom: '56px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '28px', height: '2px', background: G }} />
                <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.45em', textTransform: 'uppercase', color: G }}>Capability Matrix</span>
              </div>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.04 }}>
                Compare Every<br />Detail of the Craft.
              </h2>
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.38)', fontWeight: 400, lineHeight: 1.8, maxWidth: '360px' }}>
              Precision engineering at every tier. Whether you're starting out or scaling globally, our features adapt to your operational rhythms.
            </p>
          </div>

          {/* Table */}
          <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '680px' }}>
                <thead>
                  {/* Pure dark header — no green-tinted #0f1a11 */}
                  <tr style={{ background: '#18181b' }}>
                    <th style={{ padding: '22px 28px', textAlign: 'left', fontSize: '10px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', width: '38%', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                      Core Capabilities
                    </th>
                    {/* Starter */}
                    <th style={{ padding: '22px 24px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.07)', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '9px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Rocket size={14} color="rgba(255,255,255,0.4)" />
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: 800, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}>Starter</span>
                      </div>
                    </th>
                    {/* Growth — brand green highlight */}
                    <th style={{ padding: '22px 24px', textAlign: 'center', background: Gr(0.1), borderBottom: `1px solid ${Gr(0.22)}`, borderLeft: `1px solid ${Gr(0.15)}`, borderRight: `1px solid ${Gr(0.15)}` }}>
                      <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '9px', background: Gr(0.18), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Sparkles size={14} color={G} />
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: 800, color: G, letterSpacing: '0.05em' }}>Growth</span>
                        <span style={{ fontSize: '8px', fontWeight: 800, background: G, color: '#fff', padding: '2px 8px', borderRadius: '99px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Popular</span>
                      </div>
                    </th>
                    {/* Pro — amber accent */}
                    <th style={{ padding: '22px 24px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.07)', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '9px', background: Am(0.12), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Landmark size={14} color={AM} />
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: 800, color: AM, letterSpacing: '0.05em' }}>Pro</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((cat, ci) => (
                    <React.Fragment key={ci}>
                      <tr>
                        <td colSpan={4} style={{ padding: '13px 28px', background: 'rgba(255,255,255,0.022)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '3px', height: '12px', background: G, borderRadius: '99px', opacity: 0.65 }} />
                            <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)' }}>{cat.category}</span>
                          </div>
                        </td>
                      </tr>
                      {cat.features.map((row, ri) => (
                        <tr key={ri} className="cmp-row" style={{ borderBottom: ri === cat.features.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.04)' }}>
                          <td style={{ padding: '18px 28px', fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>
                            {row.name}
                            <HelpCircle size={11} style={{ display: 'inline', marginLeft: '5px', color: 'rgba(255,255,255,0.14)', verticalAlign: 'middle' }} />
                          </td>
                          <td style={{ padding: '18px 24px', textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.04)' }}>
                            {row.starter === true
                              ? <Check size={16} strokeWidth={3} style={{ color: 'rgba(255,255,255,0.38)', margin: '0 auto', display: 'block' }} />
                              : row.starter === false
                                ? <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: '20px', display: 'block', textAlign: 'center' }}>—</span>
                                : <span style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.38)' }}>{row.starter}</span>}
                          </td>
                          <td style={{ padding: '18px 24px', textAlign: 'center', background: Gr(0.06), borderLeft: `1px solid ${Gr(0.1)}`, borderRight: `1px solid ${Gr(0.1)}` }}>
                            {row.growth === true
                              ? <Check size={16} strokeWidth={3} style={{ color: G, margin: '0 auto', display: 'block' }} />
                              : row.growth === false
                                ? <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: '20px', display: 'block', textAlign: 'center' }}>—</span>
                                : <span style={{ fontSize: '11px', fontWeight: 700, color: G }}>{row.growth}</span>}
                          </td>
                          <td style={{ padding: '18px 24px', textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.04)' }}>
                            {row.pro === true
                              ? <Check size={16} strokeWidth={3} style={{ color: AM, margin: '0 auto', display: 'block' }} />
                              : row.pro === false
                                ? <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: '20px', display: 'block', textAlign: 'center' }}>—</span>
                                : <span style={{ fontSize: '11px', fontWeight: 700, color: AM }}>{row.pro}</span>}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Enterprise nudge */}
          <div style={{ marginTop: '24px', background: Am(0.06), borderRadius: '18px', border: `1px solid ${Am(0.15)}`, padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: Am(0.12), border: `1px solid ${Am(0.2)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <HelpCircle size={18} color={AM} />
              </div>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Need a custom report?</h4>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.38)', fontWeight: 400 }}>For franchises with 10+ locations, we offer bespoke analytics and cloud provisioning.</p>
              </div>
            </div>
            <button style={{ background: AM, color: '#fff', border: 'none', padding: '13px 28px', borderRadius: '10px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.18s', boxShadow: `0 8px 24px ${Am(0.35)}` }}
              onMouseEnter={e => e.currentTarget.style.background = '#c98900'}
              onMouseLeave={e => e.currentTarget.style.background = AM}>
              Contact Enterprise Sales
            </button>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS STRIP ── */}
      <div style={{ padding: '64px 5vw 96px', maxWidth: '1600px', margin: '0 auto' }}>
        <div className="highlight-strip">
          {[
            { title: "No Lock-in Ever",   desc: "Your data is yours, always compliant by default.",                       icon: Shield    },
            { title: "HR Logic",          desc: "Focuses on item features for booking, staff and reports.",               icon: Activity  },
            { title: "Native Migration",  desc: "Our platform handles the heavy lifting when moving from legacy tools.",  icon: BarChart3 },
            { title: "Global Compliance", desc: "Bespoke analytics and local infrastructure for multi-location brands.", icon: Globe     }
          ].map((item, i) => (
            <div key={i}>
              <div style={{ width: '40px', height: '40px', borderRadius: '11px', background: Gr(0.08), border: `1px solid ${Gr(0.2)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <item.icon size={17} color={G} />
              </div>
              <h4 style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#111827', marginBottom: '8px' }}>{item.title}</h4>
              <p style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 400, lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── FINAL CTA ── */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '140px 5vw' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/images/cta2.jpeg" alt="Zen Spa Treatment" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(2,4,6,0.88)' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '56px 56px' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '24px' }}>
            <div style={{ width: '24px', height: '2px', background: G }} />
            <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.45em', textTransform: 'uppercase', color: G }}>Bespoke</span>
            <div style={{ width: '24px', height: '2px', background: G }} />
          </div>
          <h2 style={{ fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '20px' }}>
            Bespoke<br /><span style={{ color: G }}>Consultation</span><br />Available.
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.78, marginBottom: '48px', fontWeight: 400 }}>
            Don't fit into a standard box? Our enterprise strategists are ready to craft a unique configuration just for your brand's vision.
          </p>
          <button className="cta-primary" style={{ padding: '18px 48px', fontSize: '13px' }}>
            Book a Strategy Session <ArrowRight size={15} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;