# ModMed Redesign — AI Agent Instructions

> This file is read by AI coding assistants working on the ModMed redesign. Follow all rules below without deviation.

---

## You Are Building

A premium, dark-mode, glassmorphism redesign of **ModMed.com** — a cloud-based EHR and healthcare AI platform for specialty medical practices.

**Design direction**: "AI-forward premium health-tech". Think Stripe, Linear, Vercel — but for medicine.

---

## MUST READ Before Making Any Changes

1. **`/docs/CODING_STANDARDS.md`** — file structure, TypeScript rules, Tailwind standards
2. **`/docs/DESIGN_SYSTEM.md`** — colors, typography, glassmorphism, animations
3. **`/docs/SITE_REBUILD_PLAN.md`** — every page, every section, build order, content specs
4. **`/docs/CONTENT_INVENTORY.md`** — actual verbatim copy from modmed.com for all pages

---

## File Structure Rules (Non-Negotiable)

```
src/components/ui/         → ONLY design system primitives
src/components/            → Global components used across 2+ pages (Navbar, Footer)
src/paths/[route]/         → Page-level route entry point (index.tsx)
src/paths/[route]/components/ → Components/partials used ONLY on that page
```

**Never** put a page-specific component in `src/components/`.
**Always** put reusable primitives in `src/components/ui/`.

---

## UI Primitive Rules

### Always use primitives — never their raw HTML equivalents:

| Use This | Instead Of |
|----------|-----------|
| `<Button variant="primary">` | `<button className="bg-brand-purple...">` |
| `<GlassPanel>` | `<div className="glass-panel rounded-3xl...">` |
| `<Section>` | `<section className="py-24...">` |
| `<Badge variant="brand">` | `<div className="inline-flex items-center gap-2 px-3...">` |
| `<GradientText>` | `<span className="text-transparent bg-clip-text...">` |

---

## Color Rules

```tsx
// ✅ Always use named brand tokens
className="bg-brand-purple"
className="text-brand-purple-light"
className="border-brand-purple-dark"

// ❌ Never use raw hex in className
className="bg-[#502D7F]"
className="text-[#6A3CA8]"
```

Exception: Non-brand colors like `bg-[#2E1A4A]` (ambient background glow) are acceptable when no token exists.

---

## TypeScript Rules

```tsx
// ✅ Named exports only
export function ComponentName() {}

// ✅ Type-only imports for types
import type { LucideIcon } from 'lucide-react';

// ✅ Full prop interfaces
interface ComponentProps {
  children: React.ReactNode;
  className?: string;
}

// ❌ No default exports
export default function Component() {} // don't do this

// ❌ No any types
(props: any) => {} // NEVER - Use proper interfaces or 'unknown' if type is truly dynamic.
const data: any = ...; // FORBIDDEN - This project aims for 100% type safety.
```

---

## Animation Rules

### Standard entry sequence (stagger by 0.1s):
```tsx
<Badge className="animate-[fadeInUp_0.6s_ease-out]" />
<h1 className="animate-[fadeInUp_0.8s_ease-out_0.1s_both]" />
<p className="animate-[fadeInUp_0.8s_ease-out_0.2s_both]" />
<div className="animate-[fadeInUp_0.8s_ease-out_0.3s_both]" /> {/* CTA row */}
```

### Scroll Reveal (Mandatory for all primary sections):
- Always wrap section content in `<ScrollReveal>` to ensure a premium, coordinated entry as the user scrolls.
- Use `framer-motion` for complex interactive transitions, but stick to the `ScrollReveal` component for standard page flow.

### Hover effects (always include):
```tsx
// Cards
hover:-translate-y-2 transition-transform duration-300

// Buttons
hover:-translate-y-0.5 transition-all duration-300

// Icons inside group
group-hover:scale-110 transition-transform
```

---

## Content Rules

- **Never paraphrase or invent copy** — use the exact quotes from `/docs/CONTENT_INVENTORY.md`
- **Never use Lorem Ipsum** — use real content from the inventory
- **Stats must match the inventory** — e.g., "98% first-pass claim acceptance", "750M patient encounters", "50% charting reduction"

---

## Before Completing ANY Task

1. Run `npm run lint` and `npm run build` to confirm zero TypeScript or ESLint errors.
2. Verify no raw `<button>`, `<section>`, or `<div className="glass-panel">` tags exist.
3. Verify no hex color codes are used in `className` props where a brand token exists.
4. Ensure the file is stored in the correct path (`paths/` vs `components/`).
5. Ensure the `<SEO />` component is present in all page-level `index.tsx` files.
