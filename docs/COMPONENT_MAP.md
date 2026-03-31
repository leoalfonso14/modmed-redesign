# ModMed Redesign — Page Component Map

> Reference guide for which components live where. Update this file whenever a new component is created.

---

## Global Components (`src/components/`)

| Component | File | Description |
|-----------|------|-------------|
| Navbar | `src/components/Navbar.tsx` | Fixed top navigation with dropdowns |
| Footer | `src/components/Footer.tsx` | Site footer with link columns |

## Global UI Primitives (`src/components/ui/`)

| Primitive | File | Variants |
|-----------|------|---------|
| Button | `src/components/ui/Button.tsx` | `primary`, `secondary`, `ghost`, `glass`, `white` |
| GlassPanel | `src/components/ui/GlassPanel.tsx` | `hoverable`, `padding` (none/sm/md/lg) |
| Section | `src/components/ui/Section.tsx` | `glow` (left/right/none), `id`, `fullWidth` |
| Badge | `src/components/ui/Badge.tsx` | `brand`, `glow` |
| GradientText | `src/components/ui/GradientText.tsx` | `glow` (bool) |

---

## Home Page (`src/paths/home/`)

| Component | File | Status |
|-----------|------|--------|
| Hero | `src/paths/home/components/Hero.tsx` | ⚠️ Currently in `src/components/Hero.tsx` — move needed |
| AIScribe | `src/paths/home/components/AIScribe.tsx` | ⚠️ Currently in `src/components/` — move needed |
| Solutions | `src/paths/home/components/Solutions.tsx` | ⚠️ Currently in `src/components/` — move needed |
| SpecialtyGrid | `src/paths/home/components/SpecialtyGrid.tsx` | ⚠️ Currently in `src/components/` — move needed |
| Stats | `src/paths/home/components/Stats.tsx` | ⚠️ Currently in `src/components/` — move needed |
| Testimonials | `src/paths/home/components/Testimonials.tsx` | ❌ Not yet built |
| InsightsHub | `src/paths/home/components/InsightsHub.tsx` | ❌ Not yet built |
| FinalCTA | `src/paths/home/components/FinalCTA.tsx` | ❌ Not yet built |

---

## Specialties (`src/paths/specialties/`)

| Component | File | Status |
|-----------|------|--------|
| Specialty Route | `src/paths/specialties/index.tsx` | ❌ Not yet built |
| Specialty Data | `src/paths/specialties/data.ts` | ❌ Not yet built |
| Specialty Hero | `src/paths/specialties/components/SpecialtyHero.tsx` | ❌ Not yet built |
| Three Pillars | `src/paths/specialties/components/ThreePillars.tsx` | ❌ Not yet built |
| Feature Grid | `src/paths/specialties/components/FeatureGrid.tsx` | ❌ Not yet built |
| Testimonial Block | `src/paths/specialties/components/SpecialtyTestimonial.tsx` | ❌ Not yet built |

---

## EHR Page (`src/paths/solutions/ehr/`)

| Component | File | Status |
|-----------|------|--------|
| EHR Page | `src/paths/solutions/ehr/index.tsx` | ❌ Not yet built |
| Stats Bar | `src/paths/solutions/ehr/components/EHRStats.tsx` | ❌ Not yet built |
| Testimonials | `src/paths/solutions/ehr/components/EHRTestimonials.tsx` | ❌ Not yet built |

---

## Practice Management (`src/paths/solutions/practice-management/`)

| Component | File | Status |
|-----------|------|--------|
| PM Page | `src/paths/solutions/practice-management/index.tsx` | ❌ Not yet built |
| Feature Pillars | `src/paths/solutions/practice-management/components/FeaturePillars.tsx` | ❌ Not yet built |

---

## RCM Page (`src/paths/solutions/rcm/`)

| Component | File | Status |
|-----------|------|--------|
| RCM Page | `src/paths/solutions/rcm/index.tsx` | ❌ Not yet built |
| Problem Block | `src/paths/solutions/rcm/components/ProblemBlock.tsx` | ❌ Not yet built |

---

## Analytics Page (`src/paths/solutions/analytics/`)

| Component | File | Status |
|-----------|------|--------|
| Analytics Page | `src/paths/solutions/analytics/index.tsx` | ❌ Not yet built |
| Report Categories | `src/paths/solutions/analytics/components/ReportCategories.tsx` | ❌ Not yet built |
| Analytics Types | `src/paths/solutions/analytics/components/AnalyticsTypes.tsx` | ❌ Not yet built |

---

## AI Solutions (`src/paths/ai/`)

| Component | File | Status |
|-----------|------|--------|
| AI Landing | `src/paths/ai/index.tsx` | ❌ Not yet built |
| AI Products Grid | `src/paths/ai/components/AIProducts.tsx` | ❌ Not yet built |
| Responsible AI | `src/paths/ai/components/ResponsibleAI.tsx` | ❌ Not yet built |

---

## ModMed Scribe (`src/paths/ai/scribe/`)

| Component | File | Status |
|-----------|------|--------|
| Scribe Page | `src/paths/ai/scribe/index.tsx` | ❌ Not yet built |
| How It Works | `src/paths/ai/scribe/components/HowItWorks.tsx` | ❌ Not yet built |
| Video Testimonials | `src/paths/ai/scribe/components/VideoTestimonials.tsx` | ❌ Not yet built |

---

## Legend

| Symbol | Meaning |
|--------|---------|
| ✅ | Built and in correct location |
| ⚠️ | Built but in wrong location (needs to be moved) |
| ❌ | Not yet built |
