import type { LucideIcon } from 'lucide-react'

// ── Features.tsx ────────────────────────────────────────────────
export interface FeatureItem {
  name: string
  icon: LucideIcon
  description: string
}

export interface FeatureGroup {
  number: string
  title: string
  description: string
  accent: string
  accentLight: string
  items: FeatureItem[]
  featured?: boolean
}

// ── Testimonials.tsx ────────────────────────────────────────────
export interface Testimonial {
  name: string
  role: string
  location: string
  content: string
  img: string
  stat: { value: string; label: string }
}

// ── PartnerSection.tsx ──────────────────────────────────────────
export interface Partner {
  title: string
  description: string
  icon: LucideIcon
  accent: string
  tag: string
  featured?: boolean
}

// ── AboutPage.tsx ───────────────────────────────────────────────
export interface Value {
  title: string
  desc: string
  icon: LucideIcon
  bgColor: string
}

// ── ResourcesPage.tsx ───────────────────────────────────────────
export interface BlogPost {
  id: number
  slug: string
  category: string
  title: string
  preview: string
  image: string
  date: string
  readTime: string
}

// ── FeaturesPage.tsx ────────────────────────────────────────────
export interface AnchorFeature {
  name: string
  icon: LucideIcon
  desc: string
  size?: string
  color: string
  img: string
  hidden?: boolean
}

export interface UtilityFeature {
  name: string
  icon: LucideIcon
  desc: string
}

export interface FeaturesPageMarqueeItem {
  text: string
  icon: LucideIcon
}

// ── PricingPage.tsx ─────────────────────────────────────────────
export interface Plan {
  id: string
  name: string
  icon: LucideIcon
  monthlyPrice: number
  tagline: string
  features: string[]
  buttonText: string
  theme: string
  popular?: boolean
}

// ── FAQPage.tsx ─────────────────────────────────────────────────
export interface FAQ {
  question: string
  answer: string
  icon: LucideIcon
  category: string
  youtubeUrl?: string
}

export type FAQCategoryColorMap = Record<
  string,
  { bg: string; color: string; border: string }
>

// ── AboutSection.tsx ────────────────────────────────────────────
export interface Module {
  name: string
  desc: string
  icon: LucideIcon
  accent: string
}

// ── ArticlePage.tsx ─────────────────────────────────────────────

/**
 * Internal links to weave into a section's `body`. Each `text` must appear
 * verbatim in the body; the renderer swaps that run of text for a <Link>.
 */
export interface ArticleLink {
  text: string
  to: string
}

export interface ArticleSection {
  heading?: string
  body?: string
  bullets?: string[]
  links?: ArticleLink[]
}

export interface Article {
  slug: string
  category: string
  title: string
  /** Human-readable date shown in the UI, e.g. 'Oct 12, 2024'. */
  date: string
  /** ISO-8601 date, required by Article structured data and sitemap lastmod. */
  datePublished: string
  /** ISO-8601 date of the last meaningful edit. */
  dateModified: string
  author: string
  readTime: string
  image: string
  /** Overrides the <title> tag. Falls back to `title` when omitted. */
  metaTitle?: string
  /** Meta description / OG description. Falls back to `intro` when omitted. */
  metaDescription?: string
  /** Short card copy for the /resources grid. Falls back to `intro`. */
  preview?: string
  intro: string
  sections: ArticleSection[]
}

export type ArticleCategoryColorMap = Record<
  string,
  { bg: string; color: string }
>
