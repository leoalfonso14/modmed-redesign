# ModMed Redesign — Site Rebuild Plan

> **Purpose**: Complete inventory of all pages across ModMed.com that need to be rebuilt, plus the content, sections, and UI notes for each. This is the single source of truth for what needs to be built.
>
> **Design Direction**: Premium dark-mode, glassmorphism aesthetic. Purple brand glow. AI-forward. See `CODING_STANDARDS.md` and `DESIGN_SYSTEM.md` for implementation rules.
>
> **Do not apply code changes without referencing this document first.**

---

## Navigation Architecture

The site will use React Router with the following route structure:

```
/                           → Home
/specialties/:specialty     → Specialty template (11 pages)
/what-we-do/ehr             → EHR Solution page
/what-we-do/practice-management → Practice Management page
/what-we-do/rcm             → Revenue Cycle Management page
/what-we-do/analytics       → Analytics page
/what-we-do/patient-experience → Patient Experience page
/what-we-do/payment-processing → Payment Processing page
/solutions/ai               → AI Solutions landing
/solutions/ai/scribe        → ModMed Scribe 2.0
/who-we-are/about           → About Us
/who-we-are/news            → News & Press
/who-we-are/careers         → Careers
/resources                  → Resources hub
/resources/blog             → Blog
/resources/success-stories  → Success Stories
/resources/webinars         → Webinars
/contact                    → Contact / Book a Demo
```

**Global Navigation Structure:**
- **Specialties** (dropdown) — 11 specialties
- **What We Do** (dropdown) — Products & Services | Integrations
- **Solutions** (dropdown) — AI portfolio
- **Who We Are** (dropdown) — About, News, Team, Careers
- **Resources** (dropdown) — Blog, Success Stories, Webinars, FAQs
- **CTAs**: Log In | Book a Demo (primary button)

---

## Page-by-Page Rebuild Specs

---

### 1. Home Page (`/`)

**Source**: https://www.modmed.com/

**Key Messaging**: "AI-Powered Practice" | "Designed by doctors for doctors" | "Translate natural conversation into clinical action"

#### Sections to Build

| # | Section Name | Status | Notes |
|---|-------------|--------|-------|
| 1 | Navbar | ✅ Exists | Needs mobile hamburger menu |
| 2 | Hero | ✅ Exists | Polish animation entrance timing |
| 3 | AI Scribe 2.0 Spotlight | ✅ Exists | Add waveform/pulse animation |
| 4 | Solutions Feature Grid | ✅ Exists | Good, refactored into cards |
| 5 | **Specialty Selector** | ❌ Missing | See spec below |
| 6 | **Stats / Trust Bar** | ✅ Exists | Animate numbers on scroll |
| 7 | **Testimonials Carousel** | ❌ Missing | See spec below |
| 8 | **Knowledge Hub / Insights** | ❌ Missing | See spec below |
| 9 | **Final CTA Section** | ❌ Missing | "Ready to transform your practice?" |
| 10 | Footer | ✅ Exists | Expand with nav links |

#### Missing Sections Detail

**Specialty Selector** (section `#specialties`)
- Headline: "Built for specialists. By specialists."
- Sub: "We don't do general. Each of our 11 clinical specialties features workflows built by practicing physicians in that field."
- Display: Interactive grid of 11 specialty tiles
- Each tile: icon, name, short specialty-specific tagline, hover reveal with "Explore →"
- On click: Navigate to `/specialties/[name]`
- Specialties: Dermatology, Ophthalmology, Orthopedics, Gastroenterology, OBGYN, Allergy, ENT, Pain Management, Plastic Surgery, Podiatry, Urology

**Testimonials Carousel**
- Section headline: "Real doctors. Real results."
- Sub: "Over 35,000 providers choose ModMed. Here's why."
- 3–4 rotating cards with:
  - Quote text
  - Photo (generate with AI if needed)
  - Name, title, practice/location
- Quotes to use:
  - *"With my previous system, I saw 30+ patients. With ModMed, I'm able to see the same amount of patients and I can easily finalize my notes in just 30 minutes."* — Michael Podraza, MD, Memphis, TN
  - *"I attribute much of my early success as a start-up practice to ModMed."* — Brian Shafer, MD, CEO, Shafer Vision Institute
  - *"We simply wanted to start with the best dermatology EHR."* — Gheorghe Pusta, CEO, Epiphany Dermatology
  - *"ModMed is user-friendly and links the clinical and billing instantaneously."* — Elizabeth Garbarino, MD, Asheville, NC

**Knowledge Hub / Insights** (`#insights`)
- Headline: "Insights for the modern practice"
- 3 feature content cards (mock content):
  - Type badges: "Case Study", "Whitepaper", "Webinar"
  - Title, short description, "Read more →"
- CTA: "Browse all resources →"

**Final CTA Section**
- Dark purple glow background variant
- Headline: "Ready to transform your practice?"
- Sub: "Join 35,000+ providers who have partnered with ModMed."
- Two buttons: "Book a Demo" (primary), "Talk to sales" (ghost)

---

### 2. Specialty Pages (`/specialties/:specialty`)

**Source**: https://www.modmed.com/specialties/dermatology/ (template used for all 11)

**Architecture**: Single template component `SpecialtyPage.tsx` driven by a data config file.
**Component storage**: `src/paths/specialties/[specialty]/` for uniquely overridden content.

#### Template Structure

| # | Section | Content |
|---|---------|---------|
| 1 | Specialty Hero | Badge: specialty name. H1: "[Specialty] software and services for the business and practice of medicine". Subtext + Book a Demo CTA |
| 2 | Three Pillars | "Connecting your [specialty] practice with an all-in-one solution" · 3 interactive tabs: Patient Experience / Clinical Workflows / Financial & Operational Success |
| 3 | Feature Grid | 8 solution cards (see per-specialty data below) |
| 4 | Testimonial Pull Quote | Large quote, attribution, specialty-specific |
| 5 | Start-up CTA | "New and start-up practices" section with "Start now" CTA |

#### Per-Specialty Data

**Dermatology**
- Hero sub: "Flexible patient collaboration, clinical workflow, operational and billing solutions designed for dermatology practices of all sizes."
- Pillar — Patient Experience: Eliminate phone tag · Automate manual workflows · Keep all info centralized
- Pillar — Clinical Workflows: Automate tedious tasks · Pull up patient outcomes in one click · Simplify MIPS reporting
- Pillar — Financial Success: Streamline from check-in to checkout · Measure your practice's success · Automate insurance eligibility verification
- Feature Grid: EMA® EHR ("Tap-and-go notes, recall laser settings, automated coding") · Practice Management · Patient Collaboration · **Pathology** (unique) · RCM Services · Analytics · Payment Processing · Marketing Services
- Testimonial: *"We simply wanted to start with the best dermatology EHR."* — Gheorghe Pusta, CEO, Epiphany Dermatology

**Ophthalmology**
- Hero sub: "Flexible patient collaboration, clinical workflow, operational and billing solutions designed for ophthalmology practices of all sizes."
- Pillar — Patient Experience: Reduce calls to the office · Monitor patient flow · Fill open appointments
- Pillar — Clinical Workflows: Improve charting speed and accuracy · Promote patient and staff satisfaction · Leave the office on time
- Pillar — Financial Success: Estimate out-of-pocket costs · Uncover new revenue opportunities · Easily view claim statuses
- Feature Grid: Ophthalmology EHR ("Touch-based drawing tools, adaptive learning") · Practice Management · Patient Collaboration · **Optical POS Interfaces** (unique — Eyefinity, FlexSys) · **Interoperability** (unique — Zeiss Veracity) · RCM Services · Analytics · Payment Processing
- Testimonial: *"I attribute much of my early success as a start-up practice to ModMed."* — Brian Shafer, MD, CEO, Shafer Vision Institute

**Orthopedics**
- Hero sub: "Flexible clinical workflow, patient collaboration, operational and billing solutions designed for orthopedic practices of all sizes."
- Pillar — Patient Experience: Eliminate phone tag · Automate manual workflows · Give patients more payment options
- Pillar — Clinical Workflows: Automate tedious tasks · Pull up patient outcomes in one click · Simplify MIPS reporting
- Pillar — Financial Success: Spot reimbursement trends before they affect cash flow · Analyze growth patterns and benchmarks · Measure your practice's success
- Feature Grid: Orthopedics EHR ("Preloaded ortho chief complaints, diagnoses and treatments") · Practice Management · Patient Collaboration · Payment Processing · Analytics · **Value-based Care / MIPS** (unique) · RCM Services · Marketing Services
- Testimonial: *"We simply wanted to start with the best EHR."* — Gheorghe Pusta, CEO

**Remaining Specialties to Research** (use same template; hero sub and feature grid need specialty-specific data):
- OBGYN, Gastroenterology, Allergy, ENT, Pain Management, Plastic Surgery, Podiatry, Urology

---

### 3. EHR Page (`/what-we-do/ehr`)

**Source**: https://www.modmed.com/what-we-do/ehr/

#### Sections

| # | Section | Content |
|---|---------|---------|
| 1 | Page Hero | Badge: "EHR / EMR". H1: "Cloud-based EHR/EMR software". Sub: "EHRs that understand how you practice." CTA: "Book a Demo" + "Watch Video" |
| 2 | Headline Value Prop | "Specialty-specific EHRs designed to help improve clinical workflows so you can get back to what you love" |
| 3 | Specialty Selector | Interactive specialty chooser showing specialty-specific EHR value |
| 4 | What is EHR/EMR block | Content block explaining EHR for SEO |
| 5 | Key Features | 5 feature cards — AI-powered documentation · MIPS/Analytics · All-in-one platform |
| 6 | AI Storytelling | "Our AI story" — ambient listening, Scribe 2.0, Enhancement Faxing, Message Routing, Claims Denial |
| 7 | Stats Bar | 90% recommend · 93% top clinical documentation ratings · 94% product going right direction |
| 8 | Testimonials | 3 testimonial cards (Podraza, Garbarino, Hummel) |
| 9 | FAQ Accordion | Collapsible FAQ section with 5 questions |
| 10 | CTA Footer | "Book a Demo" + "See more success stories" |

**Key Stats to Display**:
- 90% likely to recommend
- 93% gave top ratings for clinical documentation
- 94% believe product is moving in right direction
- Up to 50% reduction in charting time (Scribe 2.0)
- 20-30% reduction in burnout

**Key Testimonials**:
- "With my previous system, I saw 30+ patients. With ModMed, I'm able to see the same amount of patients and I can easily finalize my notes in just 30 minutes." — Michael Podraza, MD
- "ModMed is user-friendly and links the clinical and billing instantaneously. My documentation is faster and more detailed." — Elizabeth Garbarino, MD
- "I instantly loved that ModMed's interface looked a lot cleaner and modern." — Lindsay Hummel, DPM

---

### 4. Practice Management Page (`/what-we-do/practice-management`)

**Source**: https://www.modmed.com/what-we-do/practice-management/

#### Sections

| # | Section | Content |
|---|---------|---------|
| 1 | Page Hero | H1: "Practice Management and Medical Billing Software". Sub: "Streamline patient scheduling, medical billing, office flow, and patient engagement with ModMed Practice Management software powered by AI solutions designed for busy practices." |
| 2 | Feature Highlights | 6 operational pillars (see below) |
| 3 | Billing Automation | "Spend less time on paperwork while our tools help you verify claim details before submission" — feature list |
| 4 | Integrated Ecosystem | ModMed Pay · RCM · Patient Engagement · Premium Analytics · Inventory Management · ModMed AMP |
| 5 | Key Stats | 98% first-pass claim acceptance · #1 integrated EHR/PM/RCM |
| 6 | Testimonials | 4 practitioner quotes |
| 7 | FAQ Accordion | 4 questions |
| 8 | CTA Footer | "Book a Demo" |

**6 Operational Pillar Features**:
1. "Enhance patient access with simplified appointment scheduling" — Appointment Finder, Patient Self-Scheduling, waitlist automation
2. "Transform your front office with seamless check-in and checkout" — ModMed Kiosk, Mobile Check-In, PocketEMA app
3. "Provide financial clarity with transparent pricing and upfront cost estimates" — Quoting Tool
4. "Boost office flow with real-time workflow intelligence" — iPad check-in alerts, workflow dashboard
5. "Control your revenue cycle with updated billing and financial dashboards" — Customizable claim scrubbing, automated submissions
6. "Scale operations with integrated Analytics" — Performance benchmarks, custom reporting

---

### 5. RCM Page (`/what-we-do/rcm`)

**Source**: https://www.modmed.com/what-we-do/revenue-cycle-management/

#### Sections

| # | Section | Content |
|---|---------|---------|
| 1 | Page Hero | H1: "Medical revenue cycle management services & RCM software". Sub: "Our experienced billing team helps with medical billing and patient collections so you can get back to doing what you do best." |
| 2 | Problem Statement | "$125 billion in revenue lost by US doctors every year" — large impact number block |
| 3 | How It Works | 3-step flow: Billing specialists · Claims management · Analytics visibility |
| 4 | Software Features | PM integration · Specialty-specific coding · Claim scrubbing · Real-time dashboards |
| 5 | Performance Metrics | 5 KPIs the RCM team tracks (Total Collections, Net Collection Ratio, DSO, A/R, Write-offs) |
| 6 | Testimonials | Maria Ruttig + Dipa Patel, MD quotes |
| 7 | FAQ Accordion | 4 questions |
| 8 | CTA Footer | "Book a Demo" + "Get your FREE financial analysis" |

**Key Stats**: $125B lost annually by US doctors · #1 KLAS-rated integrated EHR/PM/RCM solution

---

### 6. Analytics Page (`/what-we-do/analytics`)

**Source**: https://www.modmed.com/what-we-do/analytics/

#### Sections

| # | Section | Content |
|---|---------|---------|
| 1 | Page Hero | H1: "Healthcare EHR Analytics Solutions". Sub: "Rather than limiting you to a few basic metrics, our structured data approach gives you comprehensive analytical tools." |
| 2 | Three Report Categories | Tab or card selector: Administrative · Provider · Financial |
| 3 | Data Explorer | "Included with EMA — a self-service solution for raw data exploration" |
| 4 | 4 Types of Analytics | Descriptive → Diagnostic → Predictive → Prescriptive (visual flow/step layout) |
| 5 | Drill-down Demo | Visual of dashboard with "enterprise → provider → patient" drill-down |
| 6 | FAQ Accordion | 5 specialty-analytics FAQs |
| 7 | CTA Footer | "See it for yourself" + "Book a Demo" |

---

### 7. AI Solutions Landing (`/solutions/ai`)

**Source**: https://www.modmed.com/solutions/ai/

#### Sections

| # | Section | Content |
|---|---------|---------|
| 1 | Page Hero | H1: "Innovative AI healthcare software that supports specialty practices". Sub: "Responsible AI that makes YOU better." |
| 2 | AI Philosophy | Content block: "AI should support and enhance, not replace." — 3 principles panel |
| 3 | Documentation AI | ModMed Scribe 2.0 + gScribe™ feature split |
| 4 | Operational AI | Enhanced Faxing · Message Routing · Claims Denial Assessment |
| 5 | Trust / Responsible AI | "AI that's transparent and trustworthy" — commitment section |
| 6 | News Ticker | Industry news/PR highlights |
| 7 | CTA Footer | "Ready for the future of healthcare?" + "Book a Demo" |

**5 AI Products**:
1. **ModMed Scribe 2.0** — ambient listening → clinical notes + codes
2. **gScribe™** — GI-specific AI for gGastro® EHR
3. **Enhanced Faxing** — AI categorization of incoming faxes
4. **Message Routing** — auto-categorize and route inbound patient messages
5. **Claims Denial Assessment** — flags high-risk claims before submission

---

### 8. ModMed Scribe 2.0 (`/solutions/ai/scribe`)

**Source**: https://www.modmed.com/solutions/ai/scribe/

#### Sections

| # | Section | Content |
|---|---------|---------|
| 1 | Page Hero | H1: "ModMed Scribe 2.0: Your AI-powered clinical documentation solution". Sub: "Listens like a human. Documents like a scribe." CTA: "Book a Demo" + "Watch Video" |
| 2 | What is ModMed Scribe | Explanation block + animated conversation → note visualization |
| 3 | "The latest advancement" | Feature breakdown split: Translate Conversation → Clinical Action · Overcome Staffing · Designed by doctors |
| 4 | Real Doctors Testimonials | 3 video testimonial cards (Dr. Sullivan, Dr. Loss, Dr. Lee) |
| 5 | How It Works | "Speak naturally, document effortlessly" — 3-step visual walkthrough |
| 6 | Stats | Up to 50% reduction · 750M+ encounters trained on |
| 7 | CTA Footer | "Watch Video" + "Book a Demo" |

**Key Benefit Breakdown**:
- **Translate natural conversation to clinical action**: captures HPIs, assessment/plans, prescriptions, lab orders
- **Overcome staffing shortages**: reduces reliance on manual scribes, accelerates new hire ramp-up
- **Designed by doctors**: trained on 750M+ real-world encounters across specialties

---

### 9. About Us (`/who-we-are/about`)

> Research needed — content not yet extracted. Known facts:
> - Founded: 2010
> - HQ: Boca Raton, FL
> - Mission: Restore doctor-patient relationship
> - Scale: 35,000+ providers, 11 specialties, 1,500+ annual updates

---

### 10. Resources Hub (`/resources`)

> Research needed. Known structure:
> - Blogs, Whitepapers, Case Studies/Success Stories, Webinars, FAQs
> - Filtering by specialty and topic
> - Featured content carousel at top

---

## UI Design Spec (Per Section Type)

### Hero Sections (all pages)
```
- Sticky navbar present
- Full-height first fold (min-h-screen)
- Page badge using <Badge variant="brand"> 
- H1: 4xl–7xl, font-bold, white
- Subtext: lg–xl, text-slate-400
- CTA row: <Button variant="primary" size="lg"> + <Button variant="glass" size="lg">
- Optional: animated entrance with fadeInUp
- Background: inherited ambient glow from App.tsx
```

### Feature Cards
```
- Use <GlassPanel hoverable> primitive
- Icon block: 56x56px, brand color tinted bg, matching icon
- Category label (optional badge)
- H3: 2xl, font-bold, white
- Description: slate-400, leading-relaxed
- "Learn more →" text link in matching icon color
```

### Testimonial Cards
```
- Use <GlassPanel> primitive with no hover
- Large opening quote mark (decorative)
- Quote text: slate-100, italic
- Attribution: avatar (circular), name bold, title slate-400
- Glass background with subtle brand-purple/10 tint
```

### Stats / Metrics Block
```
- Brand-purple-dark/5 subtle tint background
- Large number: 5xl–6xl, font-extrabold, white
- Label: sm, slate-400, tracking-wide, uppercase
- Dividers between stats (divide-x divide-white/10)
- Animate numbers with intersection observer on scroll
```

### FAQ Accordions
```
- Glass panel wrapper for each question
- Chevron icon rotates on open
- Smooth height animation for reveal
- Question: text-white, font-semibold
- Answer: text-slate-400
```
