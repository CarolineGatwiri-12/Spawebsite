import {
  Activity,
  BarChart2,
  BarChart3,
  Box,
  CreditCard,
  Droplets,
  Gem,
  Gift,
  Globe,
  Heart,
  HelpCircle,
  LayoutGrid,
  Landmark,
  Lightbulb,
  Megaphone,
  MessageSquare,
  Package,
  Receipt,
  Rocket,
  Settings,
  Shield,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Target,
  Ticket,
  TrendingUp,
  UserCheck,
  Users,
  Users2,
  Wallet,
  Zap
} from 'lucide-react'
import { Buildings } from '@phosphor-icons/react'


import type {
  FeatureGroup,
  Testimonial,
  Partner,
  Value,
  BlogPost,
  AnchorFeature,
  UtilityFeature,
  FeaturesPageMarqueeItem,
  Plan,
  FAQ,
  FAQCategoryColorMap,
  Module,
  Article,
  ArticleCategoryColorMap
} from '../types'

// ── Features.tsx ────────────────────────────────────────────────

export const featureGroups: FeatureGroup[] = [
  {
    number: '01',
    title: 'Business Intelligence & Financial Control',
    description:
      'The core engine powering every decision from daily cash flow to long-term growth analytics.',
    accent: '#2E8B35',
    accentLight: '#A8C5A0',
    items: [
      {
        name: 'Dashboard',
        icon: BarChart2,
        description: 'Real-time KPIs at a glance'
      },
      {
        name: 'Orders & Invoices',
        icon: Receipt,
        description: 'Automated billing & receipts'
      },
      {
        name: 'Accounting',
        icon: CreditCard,
        description: 'Full P&L visibility'
      }
    ]
  },
  {
    number: '02',
    title: 'Customer Experience & Sales Growth',
    description:
      'Build lasting relationships and unlock new revenue streams with smarter client management tools.',
    accent: '#F5A800',
    accentLight: '#F9D98C',
    items: [
      { name: 'CRM', icon: Users, description: 'Client profiles & history' },
      {
        name: 'Gift / Vouchers',
        icon: Gift,
        description: 'Digital gift cards & promos'
      },
      { name: 'Reports', icon: Globe, description: 'Centralized brand control' }
    ],
    featured: true
  },
  {
    number: '03',
    title: 'Operational & Workforce Management',
    description:
      'Streamline every aspect of your day-to-day from staff scheduling to supply chain precision.',
    accent: '#C084A0',
    accentLight: '#E8C5D5',
    items: [
      {
        name: 'HR Management',
        icon: UserCheck,
        description: 'Shifts, payroll & performance'
      },
      { name: 'Inventory', icon: Package, description: 'Smart stock tracking' },
      {
        name: 'Settings',
        icon: Settings,
        description: 'Custom workflows & roles'
      }
    ]
  }
]

export const featuresMarqueeItems: string[] = [
  'Market Intelligence',
  'Branded Solutions',
  'ERP Management',
  'Automated Planning',
  '24/7 Availability',
  'Always-on Analytics',
  'ERP Integration',
  'Market Intelligence',
  'Branded Solutions',
  'ERP Management',
  'Automated Planning',
  '24/7 Availability',
  'Always-on Analytics',
  'ERP Integration'
]

// ── Testimonials.tsx ────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    name: 'Elena Wambui',
    role: 'Founder, Azure Wellness Spa',
    location: 'Uganda',
    content:
      'MySpa has completely transformed the way we manage our multi-location brand. The intuitive ERP modules and real-time analytics have been total game-changers for our bottom line.',
    img: '/images/photo1.jpg',
    stat: { value: '+38%', label: 'Revenue Growth' }
  },
  {
    name: 'Mercy Nyakio',
    role: 'Managing Director, Zenith Retreats',
    location: 'Nairobi, Kenya',
    content:
      'Managing 15 locations across the coast was a nightmare before MySpa. Now I have a unified command center that handles everything from HR to high-precision inventory tracking.',
    img: '/images/photo 2.avif',
    stat: { value: '15×', label: 'Locations Managed' }
  },
  {
    name: 'Dr. Samuel Gitonga',
    role: 'Director, Holistic Medical Spa',
    location: 'Mombasa, Kenya',
    content:
      'The level of detail in the client management system is unparalleled. We track preferences and medical history with the security and precision our clinic demands.',
    img: '/images/photo 3.webp',
    stat: { value: '100%', label: 'Compliance Rate' }
  },
  {
    name: 'Sarah Wahome',
    role: 'CEO, Luminos Day Spa Group',
    location: 'Tanzania',
    content:
      "Switching to MySpa was the best operational decision we've made. Booking rates are up, staff scheduling is seamless, and clients consistently remark on the improved experience.",
    img: '/images/photo 4.webp',
    stat: { value: '+52%', label: 'Booking Rate' }
  }
]

// ── PartnerSection.tsx ──────────────────────────────────────────

export const partners: Partner[] = [
  {
    title: 'Uplift You',
    description:
      'A spa software platform built to grow with you and help you scale effortlessly in a competitive market.',
    icon: TrendingUp,
    accent: '#267546',
    tag: 'Growth Engine'
  },
  {
    title: '24/7 Support',
    description:
      'Get elite assistance anytime, anywhere. Our dedicated team is always on standby for your peace of mind.',
    icon: ShieldCheck,
    accent: '#FFA912',
    tag: 'Always On',
    featured: true
  },
  {
    title: 'Personalized Experience',
    description:
      'Easy ways to create the bespoke, personalized experience your high-end guests truly deserve.',
    icon: Gem,
    accent: '#267546',
    tag: 'Bespoke'
  }
]

// ── AboutPage.tsx ───────────────────────────────────────────────

export const values: Value[] = [
  {
    title: 'Innovation',
    desc: 'Pushing boundaries with cutting-edge ERP logic to future-proof your business in an evolving market.',
    icon: Lightbulb,
    bgColor: 'bg-white'
  },
  {
    title: 'Reliability',
    desc: '99.9% uptime guaranteed for your business continuity, ensuring your spa never stops serving.',
    icon: Shield,
    bgColor: 'bg-[#F0FDF4]'
  },
  {
    title: 'Customer Success',
    desc: 'Your growth is our ultimate metric. We succeed only when your revenue and efficiency hit new heights.',
    icon: Target,
    bgColor: 'bg-white'
  },
  {
    title: 'Simplicity',
    desc: 'Complex backend logic delivered through an effortlessly intuitive interface for your staff.',
    icon: Zap,
    bgColor: 'bg-white'
  },
  {
    title: 'Long-term Partnerships',
    desc: "We don't just sell software; we invest in your journey with persistent local support and upgrades.",
    icon: Heart,
    bgColor: 'bg-white'
  }
]

// ── ResourcesPage.tsx ───────────────────────────────────────────

// `blogPosts` (the /resources cards) is derived from `articles` at the bottom
// of this file. One source of truth, so a card can never drift from the
// article it links to.

export const blogCategories: string[] = [
  'All',
  'ERP',
  'Operations',
  'Growth',
  'Inventory',
  'Case Studies'
]

// ── FeaturesPage.tsx ────────────────────────────────────────────

export const anchorFeatures: AnchorFeature[] = [
  {
    name: 'Dashboard',
    icon: LayoutGrid,
    desc: "Your spa's command center. Get a real-time overview of revenue, customers, payments, orders and inventory, all in one intuitive dashboard.",
    size: 'lg',
    color: 'bg-[#207D40]',
    img: '/images/Dashboard.png'
  },
  {
    name: 'CRM',
    icon: Users,
    desc: 'Manage client profiles, preferences, and history. Build loyalty programs, track visits, and personalize experiences.',
    size: 'sm',
    color: 'bg-[#F7A300]',
    img: '/images/CRM.png'
  },
  {
    name: 'Orders & Invoices',
    icon: Receipt,
    desc: 'Simplify billing with automated invoices, order tracking, and payment integration for smooth transactions.',
    size: 'sm',
    color: 'bg-[#207D40]',
    img: '/images/Orders.png'
  },
  {
    name: 'Accounting',
    icon: Wallet,
    desc: 'Stay on top of finances with integrated accounting tools. Track expenses, revenue, and profitability with ease. Generate reports for smarter decisions.',
    size: 'md',
    color: 'bg-[#F7A300]',
    img: '/images/Accounts.png'
  },
  {
    name: 'Stock & Inventory',
    icon: Package,
    desc: 'Track product usage, supplier orders, and stock levels in real time to minimize waste and optimize costs.',
    color: 'bg-[#207D40]',
    img: '/images/Stocks.png',
    hidden: true
  },
  {
    name: 'Reports & Analytics',
    icon: BarChart3,
    desc: 'Turn raw data into actionable insight. Generate detailed reports on revenue, staff performance, and client trends.',
    color: 'bg-[#F7A300]',
    img: '/images/Report.png',
    hidden: true
  },
  {
    name: 'HR Management',
    icon: UserCheck,
    desc: 'Manage staff schedules, attendance, payroll, and performance, tailored for the unique rhythms of spa operations.',
    color: 'bg-[#207D40]',
    img: '/images/HR.png',
    hidden: true
  }
]

export const utilityFeatures: UtilityFeature[] = [
  {
    name: 'Gift / Vouchers',
    icon: Gift,
    desc: 'Boost sales with customizable gift cards and vouchers. Perfect for promotions and rewards.'
  },
  {
    name: 'HR Management',
    icon: Users,
    desc: 'Manage staff schedules, attendance, payroll, and performance tailored for spa operations.'
  },
  {
    name: 'Stock & Inventory',
    icon: Package,
    desc: 'Track product usage, supplier orders, and stock levels in real time to optimize costs.'
  },
  {
    name: 'Point of Sale',
    icon: CreditCard,
    desc: 'Seamless integrated payments and retail checkouts.'
  },
  {
    name: 'Online Booking',
    icon: Globe,
    desc: '24/7 confirmations via web and mobile interfaces.'
  },
  {
    name: 'Marketing Campaigns',
    icon: Megaphone,
    desc: 'Hyper-targeted SMS and email outreach tools.'
  },
  {
    name: 'Product Consumption',
    icon: Droplets,
    desc: 'Track back-bar usage during treatments automatically.'
  },
  {
    name: 'Discount Coupons',
    icon: Ticket,
    desc: 'Custom codes for seasonal and influencer promotions.'
  },
  {
    name: 'Reports & Analytics',
    icon: Star,
    desc: 'Turn raw data into actionable insights.'
  },
  {
    name: 'Automated Feedback',
    icon: MessageSquare,
    desc: 'Instant customer surveys and reputation management.'
  },
  {
    name: 'Incentive Management',
    icon: TrendingUp,
    desc: 'Performance-based reward automation for therapists.'
  },
  {
    name: 'Data Security',
    icon: ShieldCheck,
    desc: 'Enterprise-grade encryption and automated backups.'
  }
]

export const featuresPageMarqueeItems: FeaturesPageMarqueeItem[] = [
  { text: 'REAL-TIME METRICS', icon: Activity },
  { text: 'MOBILE-FIRST UI', icon: Smartphone },
  { text: 'GDPR COMPLIANT', icon: Shield },
  { text: 'SETUP IN MINUTES', icon: Zap }
]

// ── PricingPage.tsx ─────────────────────────────────────────────

export const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    icon: Rocket,
    monthlyPrice: 3000,
    tagline: 'Perfect for small businesses starting out.',
    features: [
      'One-off Onboarding: KES 30,000',
      '1–3 Users Management',
      'Unlimited Appointment Scheduling',
      'Lead Management',
      'Vouchers Management',
      'Subscription Management',
      'Unlimited Inventory/Service Management',
      'Payroll Management',
      'Reports & Analytics',
      'Payment Gateway',
      'Stock & Inventory Management',
      'Unlimited Scheduling'
    ],
    buttonText: 'Start Free Trial',
    theme: 'light'
  },
  {
    id: 'standard',
    name: 'Standard',
    icon: Buildings,
    monthlyPrice: 5000,
    tagline: 'Designed for growing medium to high-end businesses.',
    features: [
      'One-off Onboarding: KES 40,000',
      '4–20 Users Management',
      'Unlimited Appointment Scheduling',
      'Lead Management',
      'Vouchers Management',
      'Subscription Management',
      'Unlimited Inventory/Service Management',
      'Payroll Management',
      'Reports & Analytics',
      'Payment Gateway',
      'Stock & Inventory Management',
      'Unlimited Scheduling'
    ],
    buttonText: 'Join the Standard Plan',
    theme: 'dark',
    popular: true
  },
  {
    id: 'premium',
    name: 'Premium',
    icon: Landmark,
    monthlyPrice: 10000,
    tagline: 'Built for high-end spa businesses at scale.',
    features: [
      'One-off Onboarding: KES 50,000',
      'Unlimited Users Management',
      'Unlimited Appointment Scheduling',
      'Lead Management',
      'Vouchers Management',
      'Subscription Management',
      'Unlimited Inventory/Service Management',
      'Payroll Management',
      'Reports & Analytics',
      'Payment Gateway',
      'Stock & Inventory Management',
      'Unlimited Scheduling'
    ],
    buttonText: 'Request Premium Access',
    theme: 'green'
  }
]

// ── FAQPage.tsx ─────────────────────────────────────────────────

export const faqs: FAQ[] = [
  {
    question: 'What is Myspa ERP System?',
    answer:
      'MySpa ERP System is a cloud-based Spa Management Software designed exclusively for spas. It is a complete Spa ERP solution that integrates bookings, client management, accounting, HR, inventory, billing, reporting, and gift vouchers into one unified platform. Unlike basic booking tools, it provides full operational visibility and business control.',
    icon: Sparkles,
    category: 'General',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    question: 'How do I get started with Myspa?',
    answer:
      'To get started with MySpa ERP System, request a demo, select a suitable subscription plan, and complete onboarding with our support team. Since MySpa is cloud-based, no installation is required. You can access your Spa ERP system securely from any device with internet access.',
    icon: Zap,
    category: 'Getting Started'
  },
  {
    question: 'How much does Myspa ERP System cost?',
    answer:
      "The cost of MySpa ERP System depends on the number of users, branches, and required modules. Pricing is subscription-based and tailored to your spa's size and operational needs. Contact us for a customized quote based on your business structure.",
    icon: CreditCard,
    category: 'Pricing'
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer:
      'Yes, MySpa ERP System operates on a subscription model. You may cancel according to your agreed billing terms. We prioritize flexibility while building long-term partnerships with spa businesses.',
    icon: HelpCircle,
    category: 'Billing'
  },
  {
    question: 'Is Myspa ERP System secure?',
    answer:
      'Yes, MySpa ERP System is built on secure cloud infrastructure with encrypted data storage, role-based access control, secure authentication, and regular system updates. Your client data, financial records, and operational information remain protected at all times.',
    icon: ShieldCheck,
    category: 'Security'
  },
  {
    question: 'How does the Myspa ERP dashboard work?',
    answer:
      'The MySpa ERP dashboard provides real-time visibility into revenue, client visits, payments, inventory levels, staff activity, and profitability. It acts as a centralized command center, helping spa owners make data-driven decisions using live performance analytics.',
    icon: Sparkles,
    category: 'Features'
  },
  {
    question: 'How does the Client Module work?',
    answer:
      'The Client Module helps you manage customer profiles, visit history, preferences, and loyalty information in one place. You get a complete 360° view of every client, enabling personalized service and stronger retention.',
    icon: HelpCircle,
    category: 'Features'
  },
  {
    question: 'How are customer orders created?',
    answer:
      'Customer orders are created, managed, and linked to billing and inventory inside the MySpa ERP system seamlessly. From service selection to payment, the entire order lifecycle is tracked in real time.',
    icon: HelpCircle,
    category: 'Features'
  },
  {
    question: 'How does the Stock & Inventory Module work?',
    answer:
      "MySpa tracks product usage, monitors stock levels, manages suppliers, and prevents shortages through smart inventory control. You'll receive alerts before stock runs out and can generate purchase orders directly from the system.",
    icon: HelpCircle,
    category: 'Features'
  },
  {
    question: 'How do gift cards and vouchers work?',
    answer:
      'You can create, sell, and redeem gift cards and vouchers to increase spa revenue and customer engagement. The system tracks redemption history and balances automatically, making it effortless to run promotions.',
    icon: Gift,
    category: 'Features'
  },
  {
    question: 'How does the HR Management Module work?',
    answer:
      'MySpa manages staff schedules, attendance, payroll tracking, and performance incentives in one integrated HR system. Team leads get full visibility into workforce productivity without juggling spreadsheets.',
    icon: Users,
    category: 'Features'
  },
  {
    question: 'How does Myspa help manage daily spa operations?',
    answer:
      'MySpa ERP System centralizes bookings, billing, HR, inventory, accounting, and reporting into one integrated Spa Operations System. This eliminates disconnected tools and improves workflow efficiency across your entire spa business.',
    icon: Zap,
    category: 'Operations'
  },
  {
    question: 'How does Myspa improve business performance?',
    answer:
      'MySpa improves business performance by providing real-time data, financial visibility, and structured reporting. Spa owners can identify profitable services, reduce inefficiencies, improve staff productivity, and scale confidently using actionable insights.',
    icon: Sparkles,
    category: 'Growth'
  }
]

export const faqCategoryColors: FAQCategoryColorMap = {
  General: { bg: '#f0fdf4', color: '#207D40', border: '#bbf7d0' },
  'Getting Started': { bg: '#eff6ff', color: '#2563eb', border: '#bfdbfe' },
  Pricing: { bg: '#fefce8', color: '#d97706', border: '#fde68a' },
  Billing: { bg: '#fdf4ff', color: '#9333ea', border: '#e9d5ff' },
  Security: { bg: '#fff1f2', color: '#e11d48', border: '#fecdd3' },
  Features: { bg: '#f0fdf4', color: '#207D40', border: '#bbf7d0' },
  Operations: { bg: '#fff7ed', color: '#ea580c', border: '#fed7aa' },
  Growth: { bg: '#f0fdf4', color: '#207D40', border: '#bbf7d0' }
}

// ── AboutSection.tsx ────────────────────────────────────────────

export const modules: Module[] = [
  {
    name: 'Dashboard',
    desc: "Your spa's command center with real-time revenue and analytics.",
    icon: BarChart3,
    accent: '#2E8B35'
  },
  {
    name: 'CRM',
    desc: 'Comprehensive CRM with profiles, history, and loyalty programs.',
    icon: Users,
    accent: '#F5A800'
  },
  {
    name: 'Orders & Invoices',
    desc: 'Automated billing and payment integration.',
    icon: Receipt,
    accent: '#2E8B35'
  },
  {
    name: 'Accounting',
    desc: 'Integrated financial tools to track expenses.',
    icon: Wallet,
    accent: '#F5A800'
  },
  {
    name: 'Gift / Vouchers',
    desc: 'Customizable gift cards and vouchers.',
    icon: Gift,
    accent: '#2E8B35'
  },
  {
    name: 'HR Management',
    desc: 'Staff schedules and performance tracking.',
    icon: Users2,
    accent: '#F5A800'
  },
  {
    name: 'Stock & Inventory',
    desc: 'Real-time tracking of product usage.',
    icon: Box,
    accent: '#2E8B35'
  },
  {
    name: 'System Insights',
    desc: 'Advanced reporting for smarter decisions.',
    icon: Sparkles,
    accent: '#F5A800'
  }
]

// ── ArticlePage.tsx ─────────────────────────────────────────────

export const articles: Article[] = [
  {
    slug: 'how-to-manage-a-busy-spa-without-losing-customers',
    category: 'Operations',
    title: 'How to Manage a Busy Spa Without Losing Customers',
    date: 'Aug 17, 2026',
    datePublished: '2026-08-17',
    dateModified: '2026-08-17',
    author: 'MySpa Team',
    readTime: '11 min read',
    image: '/images/CRM.png',
    metaTitle: 'How to Manage a Busy Spa Without Losing Customers',
    metaDescription:
      '20 practical ways to handle high demand at your spa: booking systems, peak-hour staffing, reminders, cancellation policies and preventing staff burnout.',
    preview:
      "Growing demand shouldn't cost you your regulars. Twenty practical systems for handling a full schedule without sacrificing the experience customers came for.",
    intro:
      "Running a busy spa is a good problem to have, but if demand grows faster than your ability to serve customers, it can quickly become a problem. Long waiting times, missed appointments, overworked staff and inconsistent service can frustrate customers and damage your reputation. The goal isn't simply to serve more people. It's to serve more customers while maintaining the experience that made them choose your spa in the first place.",
    sections: [
      {
        heading: '1. Use an Appointment Booking System',
        body: 'One of the easiest ways to control a busy spa is to move away from relying entirely on walk-in customers. A proper appointment booking system shows you the shape of the day before it starts:',
        links: [{ text: 'appointment booking system', to: '/features' }],
        bullets: [
          'How many appointments are scheduled',
          'Which services customers have booked',
          'Which staff members are available',
          'How much time each treatment requires',
          'Where gaps exist in the schedule'
        ]
      },
      {
        body: 'Customers should ideally be able to book through your website, phone, WhatsApp or social media. The easier it is to make an appointment, the less time your staff will spend handling bookings manually.'
      },
      {
        heading: '2. Avoid Overbooking',
        body: "When business is busy, it can be tempting to squeeze as many customers as possible into the schedule. This can backfire. If treatments start running late, the entire day's schedule falls behind, and a customer who expected a 2:00 p.m. appointment but isn't served until 3:00 p.m. may leave unhappy even if the treatment itself was excellent. Build realistic appointment times into your schedule and allow a small buffer between services."
      },
      {
        heading: '3. Know Your Peak Hours',
        body: 'Not every hour of the day is equally busy. Look at your booking history and identify your busiest periods. You may discover that:',
        bullets: [
          'Friday afternoons are extremely busy',
          'Saturday mornings have the highest demand',
          'Monday afternoons are quieter',
          'Weekday mornings have spare capacity'
        ]
      },
      {
        body: 'Once you understand your peak hours, you can schedule additional staff when demand is highest instead of keeping the same staffing level throughout the day.'
      },
      {
        heading: '4. Train Staff to Handle Multiple Tasks',
        body: 'A busy spa needs employees who can adapt. While each staff member should have clear responsibilities, cross-training makes the whole operation more flexible. Staff can be trained to assist with:',
        bullets: [
          'Customer check-in',
          'Appointment confirmation',
          'Room preparation',
          'Basic customer enquiries',
          'Stock management',
          'Cleaning and preparation between treatments'
        ]
      },
      {
        body: "This doesn't mean asking everyone to do everything. It means the business keeps moving when one employee is unavailable or the spa suddenly becomes busy."
      },
      {
        heading: '5. Keep Customers Informed About Delays',
        body: 'Sometimes delays are unavoidable. The biggest mistake is letting customers sit and wonder what is happening. If a treatment is running late, tell the customer. A simple message like "We\'re running about 15 minutes behind schedule. We\'re sorry for the delay and appreciate your patience." makes a significant difference. Customers are generally far more understanding when they know what is going on.'
      },
      {
        heading: '6. Create a Waiting Experience',
        body: 'If customers have to wait, make the wait comfortable. Consider providing:',
        bullets: [
          'Comfortable seating',
          'Wi-Fi',
          'Water or refreshments',
          'Entertainment',
          'Clear information about expected waiting time'
        ]
      },
      {
        body: 'For premium spas, the waiting area itself can become part of the customer experience. The goal is to make waiting feel less frustrating.'
      },
      {
        heading: '7. Use Customer Reminders',
        body: "No-shows create serious problems for a busy spa. A customer who doesn't show up leaves an empty appointment slot that could have gone to someone else. Send reminders before appointments. Depending on your communication channels, that could be through:",
        bullets: ['WhatsApp', 'SMS', 'Email', 'Phone calls']
      },
      {
        body: 'A reminder 24 hours before the appointment helps reduce forgotten bookings. Automated reminder sequences are one of the highest-return changes most spas can make; our guide to reducing no-shows sets out the full three-touch sequence.',
        links: [
          { text: 'reducing no-shows', to: '/resources/how-to-reduce-no-shows' }
        ]
      },
      {
        heading: '8. Have a Cancellation Policy',
        body: 'A clear cancellation policy protects both the business and the customer. Customers should know how much notice is required to cancel or reschedule, and for high-demand services you may want to require a deposit. Communicate the policy clearly during booking rather than surprising customers when they cancel.'
      },
      {
        heading: '9. Maintain Service Quality',
        body: 'Serving more customers should never mean dramatically reducing service quality. Customers notice when a spa becomes rushed. Pay attention to:',
        bullets: [
          'Hygiene',
          'Treatment quality',
          'Staff professionalism',
          'Customer communication',
          'Cleanliness',
          'Treatment preparation',
          'Overall atmosphere'
        ]
      },
      {
        body: 'A customer who receives excellent service is much more likely to return.'
      },
      {
        heading: "10. Don't Ignore Hygiene",
        body: 'A busy spa requires strong hygiene procedures. With customers coming and going throughout the day, staff need clear procedures for cleaning treatment rooms, equipment and customer areas. Create checklists for:',
        bullets: [
          'Treatment rooms',
          'Towels and linens',
          'Equipment',
          'Bathrooms',
          'Reception areas',
          'Common areas'
        ]
      },
      {
        body: 'Cleaning should be part of the workflow rather than something done only when there is free time.'
      },
      {
        heading: '11. Monitor Your Inventory',
        body: 'Running out of essential products during a busy day disrupts everything. Keep track of items such as:',
        bullets: [
          'Massage oils',
          'Skincare products',
          'Towels',
          'Disposable supplies',
          'Cleaning products',
          'Beauty treatment supplies'
        ]
      },
      {
        body: 'Set minimum stock levels so staff know when products need reordering. Proper stock and inventory management turns this from a daily worry into a background process, and our guide to inventory best practices for spas covers minimum levels and supplier lead times in more detail.',
        links: [
          { text: 'stock and inventory management', to: '/features' },
          {
            text: 'inventory best practices for spas',
            to: '/resources/inventory-management-best-practices'
          }
        ]
      },
      {
        heading: '12. Give Customers More Than One Way to Book',
        body: "Don't force every customer to use the same booking method. Some prefer calling; others prefer WhatsApp, social media or an online form. Offering several options makes booking easier for everyone. For a modern spa, WhatsApp is particularly useful because customers can ask questions and confirm appointments without making a phone call."
      },
      {
        heading: '13. Create a Customer Database',
        body: 'Keep the basic customer information that helps you understand your business. Depending on your system and privacy obligations, you might track:',
        bullets: [
          'Previous appointments',
          'Preferred services',
          'Appointment frequency',
          'Customer preferences',
          'Spending patterns',
          'Last visit'
        ]
      },
      {
        body: 'This lets you personalise the experience. For example, reminding a regular customer that it has been several weeks since their last appointment. A dedicated customer management module keeps that history in one place instead of scattered across notebooks and phones.',
        links: [{ text: 'customer management module', to: '/features' }]
      },
      {
        heading: '14. Reward Loyal Customers',
        body: 'A busy spa should not focus only on attracting new customers; your existing customers are the most valuable asset you have. Consider a loyalty programme: book five treatments, receive a discount on the sixth. Other options include:',
        bullets: [
          'Membership packages',
          'Birthday offers',
          'Referral rewards',
          'Treatment bundles',
          'Regular-customer discounts'
        ]
      },
      {
        body: 'The goal is to encourage customers to return rather than constantly hunting for new ones.'
      },
      {
        heading: "15. Don't Let Staff Burn Out",
        body: 'A busy spa can be stressful for employees, and if staff are constantly overworked, service quality declines. Watch for signs such as:',
        bullets: [
          'Frequent mistakes',
          'Irritability',
          'Increasing complaints',
          'Poor communication',
          'Staff absenteeism',
          'Declining productivity'
        ]
      },
      {
        body: 'Schedule reasonable breaks and keep workloads manageable. Happy employees provide a better customer experience.'
      },
      {
        heading: '16. Track Customer Complaints',
        body: "Complaints shouldn't be treated as simple negative feedback. They reveal problems in your operation. If several customers raise the same issue, investigate it:",
        bullets: [
          'Several customers complain about waiting times: review appointment scheduling.',
          'Customers complain about difficulty booking: improve your booking channels.',
          'Customers complain about inconsistent treatments: review staff training.'
        ]
      },
      { body: 'Use complaints as operational data.' },
      {
        heading: '17. Automate Where Possible',
        body: 'Technology reduces the administrative workload. A spa can automate:',
        bullets: [
          'Appointment confirmations',
          'Reminders',
          'Customer follow-ups',
          'Feedback requests',
          'Basic booking communication',
          'Staff schedules',
          'Inventory alerts'
        ]
      },
      {
        body: 'Automation lets employees spend more time serving customers instead of repeating administrative tasks.'
      },
      {
        heading: "18. Don't Sacrifice the Customer Experience for Growth",
        body: 'This is perhaps the most important lesson. When a spa becomes popular, the temptation is to accept every customer and maximise daily revenue. But growth without proper systems damages the business. If customers consistently experience long waits, rushed treatments or poor communication, they may not come back. Sometimes the smarter decision is to limit bookings during peak periods rather than accept more customers than the team can handle.'
      },
      {
        heading: '19. Measure What Matters',
        body: "You can't improve what you don't measure. Track the indicators that actually describe the health of the business:",
        bullets: [
          'Number of appointments',
          'No-show rate',
          'Cancellation rate',
          'Average waiting time',
          'Customer retention',
          'Revenue per customer',
          'Repeat bookings',
          'Customer complaints',
          'Staff utilisation'
        ]
      },
      {
        body: 'These numbers show you where the biggest problems are. If you are not sure where to begin, start with the five metrics every spa owner should monitor daily.',
        links: [
          {
            text: 'five metrics every spa owner should monitor daily',
            to: '/resources/5-metrics-every-spa-owner-should-monitor'
          }
        ]
      },
      {
        heading: '20. Turn First-Time Customers Into Regulars',
        body: 'Getting a customer through the door is only the beginning. At the end of a successful appointment, make it easy to book the next visit. Staff can simply ask: "Would you like us to reserve your next appointment?" This one habit increases repeat bookings and makes future scheduling far easier.'
      },
      {
        heading: 'Final Thoughts',
        body: "Managing a busy spa isn't about seeing the maximum number of customers every day. It's about building a system that lets the business absorb demand without sacrificing quality. Use reliable appointment scheduling, train your staff, communicate delays, maintain high hygiene standards and listen to customer feedback. Most importantly, remember that customers don't only pay for the treatment. They pay for comfort, professionalism, convenience and an experience worth repeating."
      },
      {
        body: 'A spa that manages growth properly turns a busy schedule into long-term loyalty and sustainable growth. If you would like to see how scheduling, reminders, inventory and reporting work together in one system, take a look at our pricing plans.',
        links: [{ text: 'pricing plans', to: '/pricing' }]
      },
      {
        heading: 'Quick Checklist for a Busy Spa',
        bullets: [
          'Use an appointment booking system',
          'Avoid overbooking',
          'Identify peak hours',
          'Cross-train employees',
          'Send appointment reminders',
          'Have a clear cancellation policy',
          'Keep customers informed about delays',
          'Maintain strict hygiene standards',
          'Monitor inventory',
          'Reward loyal customers',
          'Prevent staff burnout',
          'Track complaints and feedback',
          'Automate repetitive tasks',
          'Monitor customer retention',
          'Encourage customers to book their next visit'
        ]
      },
      {
        body: "The objective is simple: grow your spa without making customers feel like they're just another number."
      }
    ]
  },
  {
    slug: 'spa-erp-vs-booking-software',
    category: 'ERP',
    title: "Spa ERP vs Booking Software: What's the Difference?",
    date: 'Oct 12, 2024',
    datePublished: '2024-10-12',
    dateModified: '2024-10-12',
    author: 'MySpa Team',
    readTime: '8 min read',
    image: '/images/Dash.png',
    metaTitle: 'Spa ERP vs Booking Software: The Key Differences',
    metaDescription:
      'Booking software manages time slots; a spa ERP runs the whole business. Compare inventory, payroll, reporting and multi-branch capability side by side.',
    preview:
      'Understand why professional management requires more than just a calendar. Learn how ERP logic transforms back-of-house operations.',
    intro:
      'Many spa owners start with a basic booking tool and assume the job is done. But as your business grows, you quickly discover that scheduling appointments is only a fraction of what needs to be managed. This is where the distinction between booking software and a true Spa ERP becomes critical.',
    sections: [
      {
        heading: 'What Booking Software Does',
        body: 'Booking software is designed to handle one thing well: appointments. It lets clients schedule sessions, sends reminders, and shows your calendar. For a solo therapist just starting out, this may be sufficient. But it leaves enormous operational gaps , no payroll, no inventory tracking, no financial reporting, and no multi-staff management.'
      },
      {
        heading: 'What a Spa ERP Does',
        body: 'An ERP (Enterprise Resource Planning) system connects every layer of your business into one unified platform. MySpa ERP manages appointments, yes , but also staff schedules, payroll calculations, product inventory, client loyalty, gift vouchers, accounting, and real-time analytics. Everything talks to everything else.'
      },
      {
        heading: 'Key Differences at a Glance',
        bullets: [
          'Booking software manages time slots. ERP manages the entire business.',
          'Booking tools have no stock control. ERP tracks every product used per treatment.',
          'Booking software has basic reports. ERP delivers profit-per-service, therapist KPIs, and branch comparisons.',
          'Booking tools are standalone. ERP integrates HR, inventory, finance, and CRM.',
          'Booking software scales awkwardly. ERP is built for multi-branch growth.'
        ]
      },
      {
        heading: 'When Should You Make the Switch?',
        body: 'If you have more than two staff members, carry any retail inventory, or want to understand which services are actually profitable , you have already outgrown booking software. The switch to ERP is not an upgrade; it is a transformation in how you see and run your business.'
      },
      {
        heading: 'The MySpa Difference',
        body: 'MySpa was built specifically for spas by a team with over a decade of ERP implementation experience across Africa. It brings enterprise-grade operational logic to wellness businesses of every size , from boutique day spas to multi-location wellness chains.'
      }
    ]
  },
  {
    slug: 'how-to-reduce-no-shows',
    category: 'Operations',
    title: 'How to Reduce No-Shows in Your Spa',
    date: 'Oct 08, 2024',
    datePublished: '2024-10-08',
    dateModified: '2024-10-08',
    author: 'MySpa Team',
    readTime: '6 min read',
    image: '/images/Orders.png',
    metaTitle: 'How to Reduce Spa No-Shows: Reminders & Deposits',
    metaDescription:
      'Most spa no-shows are preventable. Learn how automated reminders, deposit policies, easy rescheduling and waitlists keep your treatment rooms full.',
    preview:
      'Practical systems and automated workflows that ensure your therapists remain productive and your schedule stays full.',
    intro:
      'A no-show is not just a missed appointment , it is lost therapist time, wasted room allocation, and direct revenue that never arrives. For spas operating on tight margins, even a 10% no-show rate can devastate monthly profitability. The good news: most no-shows are preventable with the right systems.',
    sections: [
      {
        heading: 'Why No-Shows Happen',
        bullets: [
          'Clients forget, especially when bookings are made days or weeks in advance.',
          'No financial commitment was made at the time of booking.',
          'Reminders are sent too early or not at all.',
          'Rescheduling feels too complicated, so clients simply do not show.'
        ]
      },
      {
        heading: 'Automated Reminder Workflows',
        body: 'The most effective tool against no-shows is a structured multi-touch reminder sequence: a confirmation at booking, a reminder 48 hours before, and a final reminder 2 hours before the appointment. MySpa automates all three touchpoints, dramatically reducing memory-related absences.'
      },
      {
        heading: 'Deposit and Prepayment Policies',
        body: "Requiring a small deposit at booking creates financial accountability. Clients who have paid something are significantly more likely to attend or to cancel with sufficient notice. MySpa's payment gateway integration makes collecting deposits seamless at the point of booking."
      },
      {
        heading: 'Easy Rescheduling',
        body: 'A client who cannot make their appointment but finds rescheduling difficult will simply not show up. Making rescheduling frictionless , through a client portal or a quick response to a reminder message , turns a no-show into a future booking.'
      },
      {
        heading: 'Waitlist Management',
        body: "Even when cancellations do happen, MySpa's waitlist feature ensures that open slots are filled immediately from a queue of interested clients. A cancelled appointment should never mean an empty treatment room."
      }
    ]
  },
  {
    slug: 'inventory-management-best-practices',
    category: 'Inventory',
    title: 'Inventory Management Best Practices for Spas',
    date: 'Sep 28, 2024',
    datePublished: '2024-09-28',
    dateModified: '2024-09-28',
    author: 'MySpa Team',
    readTime: '10 min read',
    image: '/images/modules.png',
    metaTitle: 'Spa Inventory Management Best Practices',
    metaDescription:
      'Cut waste and stop stock-outs with minimum stock levels, treatment-level product tracking and supplier lead times. A practical guide for spa owners.',
    preview:
      'Eliminate waste and optimize retail sales with precision tracking. See how professional inventory modules prevent stock-outs.',
    intro:
      'Inventory is one of the most overlooked profit levers in spa management. Products walk out the door, stock-outs frustrate clients, over-ordering ties up cash, and manual counts eat hours every week. A disciplined inventory system transforms this chaos into a competitive advantage.',
    sections: [
      {
        heading: 'The True Cost of Poor Inventory Control',
        bullets: [
          'Unsold retail stock represents dead capital on your shelves.',
          'Product shrinkage (theft and unreported usage) averages 3–7% in unmanaged spas.',
          'Stock-outs during peak periods damage client trust and service quality.',
          'Manual reconciliation takes hours and is prone to counting errors.'
        ]
      },
      {
        heading: 'Link Products to Treatments',
        body: 'Every treatment should have a defined product consumption profile. When a therapist performs a 60-minute deep tissue massage, the system should automatically deduct the corresponding quantities of massage oil and towels from stock. MySpa does this automatically , no manual logging required.'
      },
      {
        heading: 'Set Reorder Thresholds',
        body: 'Define minimum stock levels for every product you carry. When stock falls below the threshold, MySpa triggers an automatic alert and can generate a purchase order ready for your supplier. You will never run out of your best-selling product during a busy Saturday.'
      },
      {
        heading: 'Separate Retail and Operational Stock',
        body: 'Retail products (sold to clients) and operational products (used in treatments) should be tracked separately. Mixing the two creates reporting confusion and masks your true retail performance. MySpa maintains distinct inventory pools for each category.'
      },
      {
        heading: 'Regular Cycle Counts Over Annual Stocktakes',
        body: 'Instead of a painful annual stocktake, count a small rotation of products every week. Cycle counting catches discrepancies early, keeps your data accurate year-round, and distributes the workload across your team without disrupting operations.'
      }
    ]
  },
  {
    slug: 'how-erp-helps-multi-branch-spas-scale',
    category: 'Growth',
    title: 'How ERP Helps Multi-Branch Spas Scale',
    date: 'Sep 15, 2024',
    datePublished: '2024-09-15',
    dateModified: '2024-09-15',
    author: 'MySpa Team',
    readTime: '12 min read',
    image: '/images/Acccounting.png',
    metaTitle: 'How ERP Helps Multi-Branch Spas Scale',
    metaDescription:
      'Running several spa locations? See how a unified ERP centralises bookings, stock transfers, staff scheduling and branch-level reporting in one dashboard.',
    preview:
      "Scaling shouldn't mean complexity. Explore how unified systems allow owners to manage 10+ locations from a single dashboard.",
    intro:
      "Opening a second or third location is a milestone every ambitious spa owner envisions. But without the right operational infrastructure, each new branch multiplies your complexity without multiplying your control. Here's how ERP removes the ceiling on growth.",
    sections: [
      {
        heading: 'The Multi-Branch Management Problem',
        body: "Most spa owners running multiple locations manage them through separate systems, spreadsheets, and WhatsApp messages. This creates information silos where you never truly know which branch is profitable, which therapist is underperforming, or where inventory is running low , until it's too late."
      },
      {
        heading: 'Unified Dashboard Across All Locations',
        body: 'MySpa gives you a single dashboard that aggregates performance data from every branch in real time. Revenue per location, therapist utilisation, client retention rates, and stock levels , all visible from one screen. You can manage ten branches with the same clarity as one.'
      },
      {
        heading: 'Centralised HR and Payroll',
        body: 'Managing staff across multiple locations requires a system that tracks attendance, schedules, commissions, and payroll consistently regardless of where a therapist works. MySpa centralises HR management, ensuring your policies are applied uniformly and your payroll runs accurately every month.'
      },
      {
        heading: 'Transferring Stock Between Branches',
        body: 'When one branch is overstocked and another is running low, inter-branch stock transfers should take minutes , not a series of phone calls and manual adjustments. MySpa tracks every transfer with a full audit trail, keeping your inventory data accurate across the network.'
      },
      {
        heading: 'Benchmarking Branch Performance',
        body: "Growth requires knowing which branches are thriving and which need intervention. MySpa's comparative reporting lets you benchmark revenue per treatment room, average client spend, and rebooking rates side by side , giving you the data to make confident expansion or optimisation decisions."
      }
    ]
  },
  {
    slug: '5-metrics-every-spa-owner-should-monitor',
    category: 'Growth',
    title: '5 Metrics Every Spa Owner Should Monitor Daily',
    date: 'Aug 25, 2024',
    datePublished: '2024-08-25',
    dateModified: '2024-08-25',
    author: 'MySpa Team',
    readTime: '7 min read',
    image: '/images/image5.png',
    metaTitle: '5 Spa Metrics Every Owner Should Monitor Daily',
    metaDescription:
      'Total revenue hides problems. Track these five daily spa metrics to spot falling utilisation, weak retention and rising no-shows before they cost you.',
    preview:
      'Move beyond total revenue. Discover the critical performance indicators that signal real business health and sustainability.',
    intro:
      'Total revenue is a vanity metric. It feels good to watch it grow, but it tells you almost nothing about the health of your business. These five metrics, monitored daily through your ERP dashboard, give you a true picture of operational performance and reveal opportunities before they become problems.',
    sections: [
      {
        heading: '1. Revenue Per Treatment Room Per Hour',
        body: 'This metric reveals how efficiently you are utilising your core asset: your treatment rooms. A room sitting idle is money evaporating. Track this daily and you will quickly identify underperforming time slots, poor scheduling patterns, and opportunities to add express treatments during gaps.'
      },
      {
        heading: '2. Therapist Utilisation Rate',
        body: 'Divide the number of hours a therapist spent performing treatments by the total hours they were available. Industry best practice is 75–85%. Below 70% signals a scheduling or demand problem. Above 90% consistently signals a risk of therapist burnout and a need to hire.'
      },
      {
        heading: '3. Retail Attachment Rate',
        body: 'What percentage of service clients also purchased a retail product? A 20–30% attachment rate is achievable with the right training and product placement. This metric is a direct indicator of how well your team is converting treatment outcomes into retail recommendations.'
      },
      {
        heading: '4. Client Rebooking Rate',
        body: 'What percentage of first-time clients booked a second appointment? This is your most important retention metric. A rebooking rate above 50% indicates strong service quality and effective post-treatment conversation. Below 30% signals a systemic experience or follow-up problem.'
      },
      {
        heading: '5. Cost Per Treatment (Including Product Usage)',
        body: 'Most spa owners know their service price but not their true cost per treatment once product usage, therapist time, and room overhead are factored in. MySpa calculates this automatically, helping you identify which services have the healthiest margins and which may be priced incorrectly.'
      }
    ]
  },
  {
    slug: 'case-study-erp-increased-spa-revenue-40-percent',
    category: 'Case Studies',
    title: 'Case Study: How ERP Increased Spa Revenue by 40%',
    date: 'Sep 10, 2024',
    datePublished: '2024-09-10',
    dateModified: '2024-09-10',
    author: 'MySpa Team',
    readTime: '15 min read',
    image: '/images/Accounts.png',
    metaTitle: 'Case Study: How ERP Grew Spa Revenue by 40%',
    metaDescription:
      'How Zenith Wellness moved to MySpa ERP, fixed resource allocation and grew revenue 40%. A walkthrough of the changes that produced the result.',
    preview:
      'A detailed walkthrough of how Zenith Wellness migrated to MySpa and optimized their resource allocation for massive growth.',
    intro:
      'Zenith Wellness, a premium three-branch spa group, was generating strong top-line revenue but struggling with thin margins, inventory losses, and no reliable way to compare performance across locations. Twelve months after implementing MySpa ERP, their revenue had grown by 40% while operational costs fell by 18%.',
    sections: [
      {
        heading: 'The Challenge',
        bullets: [
          'Three branches managed through separate spreadsheets and booking tools.',
          'No visibility into which treatments were profitable after product costs.',
          'Monthly payroll reconciliation taking two full days of manual work.',
          'Retail stock shrinkage estimated at 9%, well above industry average.',
          'Owner spending 60% of working hours on administrative tasks rather than growth.'
        ]
      },
      {
        heading: 'The Implementation',
        body: 'MySpa was implemented across all three branches simultaneously over a four-week onboarding period. All existing client records, product catalogues, and staff profiles were migrated into the system. Staff received role-based training, and the owner was trained on the executive dashboard and reporting suite.'
      },
      {
        heading: 'Month 1–3: Operational Stabilisation',
        body: 'In the first quarter, the primary gains came from operational tightening. Automated product deduction per treatment immediately exposed a significant discrepancy between products used and products recorded , revealing a 9.2% shrinkage rate that had been invisible in the previous system. Payroll processing time dropped from two days to under two hours.'
      },
      {
        heading: 'Month 4–6: Revenue Optimisation',
        body: "With clean data now available, the owner used MySpa's analytics to identify that two treatment rooms were generating 60% of total revenue. Scheduling was restructured to maximise utilisation of those rooms. Underperforming service packages were repriced based on accurate margin data. Retail attachment rate climbed from 11% to 28% after targeted staff training informed by the new reporting."
      },
      {
        heading: 'Month 7–12: Growth and Expansion',
        body: 'In the second half of the year, Zenith Wellness used the operational confidence and cash flow improvement to open a fourth location. Because the ERP infrastructure was already in place, the new branch was fully operational within three weeks. By month twelve, consolidated group revenue had increased by 40% year-on-year.'
      },
      {
        heading: 'Key Results',
        bullets: [
          '40% increase in total group revenue within 12 months.',
          '18% reduction in operational costs through inventory control and scheduling efficiency.',
          'Retail shrinkage reduced from 9.2% to under 1%.',
          'Payroll processing time reduced by 94%.',
          'Fourth branch launched in under three weeks using existing ERP infrastructure.',
          'Owner reclaimed 70% of previously administrative working hours.'
        ]
      }
    ]
  }
]

export const articleCategoryColors: ArticleCategoryColorMap = {
  ERP: { bg: '#f0fdf4', color: '#207D40' },
  Operations: { bg: '#eff6ff', color: '#2563eb' },
  Inventory: { bg: '#fefce8', color: '#d97706' },
  Growth: { bg: '#f0fdf4', color: '#207D40' },
  'Case Studies': { bg: '#fdf4ff', color: '#9333ea' }
}

// ── ResourcesPage.tsx ───────────────────────────────────────────

/**
 * Cards for the /resources grid, derived from `articles` so slug, title, date
 * and image can never diverge from the article they link to. Newest first.
 * Declared after `articles` because it reads that array at module init.
 */
export const blogPosts: BlogPost[] = [...articles]
  .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
  .map((article, i) => ({
    id: i + 1,
    slug: article.slug,
    category: article.category,
    title: article.title,
    preview: article.preview ?? article.intro,
    image: article.image,
    date: article.date,
    readTime: article.readTime
  }))
