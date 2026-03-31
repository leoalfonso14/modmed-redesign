# ModMed Redesign — Design System

> This document defines the visual language of the project. All UI decisions should reference this document first.

---

## Design Philosophy

**"Premium AI Healthcare Platform"**

The redesign communicates that ModMed is not a generic EHR vendor — it's a cutting-edge AI-powered operating system for medical practices. The visual language must reflect:

1. **Intelligence** — AI feels present but trustworthy, not cold
2. **Precision** — Medical-grade accuracy implies clean, high-contrast UI
3. **Warmth** — This is about doctor-patient relationships, not just software
4. **Premium** — Competing with enterprise SaaS leaders (Salesforce, Palantir, Epic)

---

## Color System

### Brand Tokens
```css
/* Defined in src/index.css @theme block */
--color-brand-purple:       #502D7F;   /* Primary CTA, icons, accents */
--color-brand-purple-light: #6A3CA8;   /* Hover states, gradient from */
--color-brand-purple-dark:  #371E57;   /* Background tints, section bg */
--color-brand-purple-glow:  rgba(80, 45, 127, 0.4); /* Shadow/glow effects */
```

### Extended Palette (Tailwind slate scale)
```
Backgrounds:  slate-950 (page bg) → slate-900 (panel bg) → slate-800 (subtle)
Text:         white (headlines) → slate-100 (emphasis) → slate-400 (body) → slate-500 (muted)
Borders:      white/5 (subtle) → white/10 (panel) → white/20 (interactive) → white/30 (hover)
```

### Specialty / Feature Color System
Each feature module has an accent color for its icon and glow:
```
EHR / Intelligent:      brand-purple     (#502D7F)
Practice Management:    blue-500         (#3B82F6)
Revenue Cycle (RCM):    emerald-500      (#10B981)
Analytics:              violet-500       (#8B5CF6)
Patient Experience:     cyan-500         (#06B6D4)
AI Solutions:           brand-purple-light (#6A3CA8)
Payment Processing:     amber-500        (#F59E0B)
Marketing Services:     pink-500         (#EC4899)
```

### Specialty Colors
```
Dermatology:        orange-500
Ophthalmology:      blue-500
Orthopedics:        emerald-500
Gastroenterology:   purple-500
OBGYN:              pink-500
Allergy:            teal-500
ENT:                indigo-500
Pain Management:    red-500
Plastic Surgery:    yellow-500
Podiatry:           cyan-500
Urology:            violet-500
```

---

## Typography

### Font
- **Primary**: `Inter` (Google Fonts, loaded via `font-sans` token)
- **Fallback**: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto`

### Scale
```
Hero H1:        text-5xl → sm:text-7xl (60–72px)   font-bold    tracking-tight   leading-tight
Section H2:     text-3xl → sm:text-4xl (36–40px)   font-bold    
Card H3:        text-2xl (24px)                      font-bold
Subheading H4:  text-lg (18px)                       font-semibold
Body Large:     text-lg → text-xl (18–20px)          font-normal  leading-relaxed  text-slate-400
Body Regular:   text-base (16px)                      font-normal  leading-relaxed  text-slate-400
Caption:        text-sm (14px)                        font-medium
Label:          text-xs (12px)                        font-bold    uppercase        tracking-widest
```

---

## Spacing & Layout

### Page Layout
- **Max container width**: `max-w-7xl` (1280px) with `mx-auto px-4 sm:px-6 lg:px-8`
- **Section padding**: `py-24` (standardized by `<Section>` primitive)
- **Card gap**: `gap-8` in grids
- **Content max-width**: headings may use `max-w-3xl` | `max-w-2xl` for readability

### Grid System
- Feature grids: `grid-cols-1 md:grid-cols-3`
- Specialty tiles: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6`
- Two-column split: `flex flex-col lg:flex-row gap-16`

### Z-Index Scale
```
Background glows:   -z-10
Panel content:      z-10
Modals:             z-40
Navbar:             z-50
```

---

## Glassmorphism System

This is the core aesthetic. All "panel" surfaces use this pattern:

### Standard Glass Panel
```css
/* Defined as .glass-panel in src/index.css @layer utilities */
background: rgba(15, 23, 42, 0.40);  /* slate-900/40 */
backdrop-filter: blur(24px);          /* xl blur */
border: 1px solid rgba(255, 255, 255, 0.10);
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
```

### Light Glass Panel (hero badges, subtle elements)
```css
/* Defined as .glass-panel-light */
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.10);
box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.05);
```

### Enhanced Panel (interactive modals, highlighted cards)
Add to glass-panel: `border-brand-purple/30 shadow-[0_0_30px_rgba(80,45,127,0.15)]`

---

## Ambient Background System

The page has a fixed layered background system in `App.tsx`:

```
Layer 1 (base):     bg-slate-950
Layer 2 (top-left): bg-brand-purple/20 — 500px × 500px circle, blur-[120px], opacity-60
Layer 3 (bottom-right): bg-[#2E1A4A] — 600px × 600px circle, blur-[150px], opacity-50
Layer 4 (center):   bg-brand-purple-light/10 — 400px × 400px circle, blur-[100px], opacity-40
```

Additional section-level glows (managed by `<Section glow="left|right">`):
```
Size: 400px × 400px
Color: bg-brand-purple/10
Blur: blur-[100px]
Opacity: 60
```

---

## Component Variants Reference

### Button Variants (visual)
```
primary  → bg-brand-purple + purple glow shadow — for main CTAs
secondary → bg-brand-purple/20 + border — for secondary actions
ghost    → transparent + text-slate-300 — for nav items and tertiary actions
glass    → glass-panel effect + border-slate-700 — for "See it in Action" style CTAs
white    → bg-white text-slate-950 — for CTAs on dark purple tinted backgrounds
```

### Badge Variants
```
brand → bg-brand-purple/20 + border-brand-purple/30 + text-brand-purple-light
glow  → glass-panel-light + glow shadow + text-brand-purple-light — for hero badges
```

---

## Iconography

### System
- **Icon Library**: Lucide React exclusively
- Never mix icon libraries within the same page

### Icon Sizes
```
Navigation:     w-4 h-4 (16px)
Feature cards:  w-7 h-7 (28px)
Section icons:  w-6 h-6 (24px)
Button icons:   w-4 h-4 (16px) or w-5 h-5 (20px)
Large decorative: w-10 h-10 (40px)
```

### Icon Containers (feature cards)
```
Size:     w-14 h-14 (56px)
Shape:    rounded-2xl
Bg:       [feature-color]/20
Border:   [feature-color]/30
Color:    text-[feature-color]-400 or text-brand-purple-light
```

---

## Animation Library

### CSS Keyframes (in `src/index.css @theme`)
```css
--animate-float:     float 6s ease-in-out infinite      /* floating elements */
--animate-fade-in-up: fadeInUp 0.8s ease-out forwards  /* section entrance */
--animate-pulse-slow: pulse 4s cubic-bezier infinite    /* glow pulses */
```

### Standard Entry Cadence
```tsx
// Stagger entrance animations in groups of 3
className="animate-[fadeInUp_0.6s_ease-out]"           // Badge
className="animate-[fadeInUp_0.8s_ease-out_0.1s_both]" // H1
className="animate-[fadeInUp_0.8s_ease-out_0.2s_both]" // Paragraph
className="animate-[fadeInUp_0.8s_ease-out_0.3s_both]" // CTA row
```

### Micro-interactions
```
Card hover:    hover:-translate-y-2 transition-transform duration-300
Button hover:  hover:-translate-y-0.5 transition-all duration-300
Icon hover:    group-hover:scale-110 transition-transform
Link hover:    hover:text-white transition-colors
```

### Ping / Live Indicators
```tsx
// For live/active status badges
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple-light opacity-75" />
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple-light" />
```

---

## Responsive Breakpoints

Following Tailwind defaults:
```
sm:  640px  — stacked → inline layouts, larger text
md:  768px  — 1-col → 2-col or 3-col grids
lg:  1024px — column layouts flip (e.g. text left, visual right)
xl:  1280px — specialty grid expands to 6 columns
2xl: 1536px — hero text scales to max
```

All layouts must be mobile-first. Test at 375px (iPhone SE), 768px (iPad), 1280px (desktop).

---

## SEO Standards

Every route/page must include:
- A unique `<title>` tag
- A `<meta name="description">` under 160 characters
- One `<h1>` per page only
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- All images have `alt` attributes
- All interactive elements have accessible `aria-label` or visible text
