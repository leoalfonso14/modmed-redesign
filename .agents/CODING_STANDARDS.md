# ModMed Redesign — Coding Standards

> These standards apply to all code written for this project. All contributors and AI agents must follow them unconditionally.

---

## 1. Project Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite 8 |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`) |
| Routing | React Router v7 |
| Icons | Lucide React |
| Package Manager | npm |

---

## 2. Directory Structure

```
src/
├── components/           # GLOBAL reusable components
│   └── ui/               # Design system primitives only
│       ├── Button.tsx
│       ├── GlassPanel.tsx
│       ├── Section.tsx
│       ├── Badge.tsx
│       └── GradientText.tsx
├── paths/                # Page-level route components
│   ├── home/
│   │   ├── index.tsx     # Home page root
│   │   └── components/   # Home-specific partials
│   │       ├── Hero.tsx
│   │       ├── AIScribe.tsx
│   │       ├── Solutions.tsx
│   │       ├── SpecialtyGrid.tsx
│   │       ├── Stats.tsx
│   │       ├── Testimonials.tsx
│   │       └── InsightsHub.tsx
│   ├── specialties/
│   │   ├── index.tsx     # Route handler (uses slug)
│   │   ├── data.ts       # All 11 specialty data configs
│   │   └── components/   # Specialty-page-specific partials
│   │       ├── SpecialtyHero.tsx
│   │       ├── ThreePillars.tsx
│   │       ├── FeatureGrid.tsx
│   │       └── SpecialtyTestimonial.tsx
│   ├── solutions/
│   │   ├── ehr/
│   │   │   ├── index.tsx
│   │   │   └── components/
│   │   ├── practice-management/
│   │   │   ├── index.tsx
│   │   │   └── components/
│   │   ├── rcm/
│   │   │   ├── index.tsx
│   │   │   └── components/
│   │   └── analytics/
│   │       ├── index.tsx
│   │       └── components/
│   └── ai/
│       ├── index.tsx     # AI Solutions landing
│       ├── scribe/
│       │   ├── index.tsx
│       │   └── components/
│       └── components/
├── components/           # Global shared components
│   ├── Navbar.tsx        # Persistent top nav
│   └── Footer.tsx        # Persistent footer
├── index.css             # Tailwind base + @theme tokens
├── main.tsx              # App entry point
└── App.tsx               # Root layout + Router
```

### Rules:
- **Global** = used by 2+ pages → goes in `src/components/`
- **Page-specific** = used only by one route → goes in `src/paths/[route]/components/`
- **UI Primitives** = `src/components/ui/` — ONLY design system building blocks, no business logic

---

## 3. Component Rules

### All components must:
1. Use named exports (not default) — `export function Button()`
2. Have prop interfaces typed above the function
3. Accept a `className?: string` prop for external overrides
4. NOT import `React` — this project uses the automatic JSX transform
5. NOT use `any` types

### Prop Types
```tsx
// ✅ Correct
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}
export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {}

// ❌ Wrong
export default function Button(props: any) {}
```

### TypeScript Imports
```tsx
// ✅ Use type-only imports for type-only values
import type { LucideIcon } from 'lucide-react';

// ❌ Never mix value + type in one import when verbatimModuleSyntax is on
import { LucideIcon } from 'lucide-react'; // will error
```

---

## 4. Styling Rules

### Tailwind CSS Only
- **Never** use inline CSS `style={{}}` except for dynamic values impossible with Tailwind
- **Never** write custom CSS classes in `index.css` unless adding to `@layer utilities`
- **Always** use design system tokens (e.g., `brand-purple`, not `#502D7F`)

### Brand Color Tokens (defined in `src/index.css`)
```css
@theme {
  --color-brand-purple: #502D7F;
  --color-brand-purple-light: #6A3CA8;
  --color-brand-purple-dark: #371E57;
  --color-brand-purple-glow: rgba(80, 45, 127, 0.4);
}
```

Usage in Tailwind:
- `bg-brand-purple` | `text-brand-purple-light` | `border-brand-purple-dark`

### Hex Color Rule
```tsx
// ✅ Use named tokens
<div className="bg-brand-purple-dark/10">

// ❌ Never use raw hex in className
<div className="bg-[#371E57]/10">
```

### Interactive Elements
- All `<button>` elements: `cursor-pointer` is applied globally via `src/index.css`
- All clickable non-button elements (divs, links acting as buttons): must add `cursor-pointer` explicitly

---

## 5. Design System Primitives

### `<Button>` — `src/components/ui/Button.tsx`
```tsx
// Variants
variant?: 'primary' | 'secondary' | 'ghost' | 'glass' | 'white'
// Sizes
size?: 'sm' | 'md' | 'lg'
// Icon
icon?: LucideIcon
iconPosition?: 'left' | 'right'
```
- Always use `<Button>` instead of raw `<button>` for interactive CTAs
- The `white` variant is for use on dark-purple tinted backgrounds
- The `ghost` variant is for secondary nav-level actions

### `<GlassPanel>` — `src/components/ui/GlassPanel.tsx`
```tsx
hoverable?: boolean   // adds -translate-y-2 on hover
padding?: 'none' | 'sm' | 'md' | 'lg'
```
- Use for ALL card-like containers (feature cards, testimonials, modals)
- Wrap with `group` class on the parent for group-hover effects

### `<Section>` — `src/components/ui/Section.tsx`
```tsx
id?: string           // anchor link ID
glow?: 'left' | 'right' | 'none'  // optional ambient glow position
fullWidth?: boolean   // removes max-w-7xl container
```
- Every new section block MUST be wrapped in `<Section>` — never use raw `<section>` tags
- `py-24` vertical padding is standardized by the component

### `<Badge>` — `src/components/ui/Badge.tsx`
```tsx
variant?: 'brand' | 'glow'
```
- Use for page-section labels, feature status labels
- `glow` variant: for hero badges with pulsing indicator
- `brand` variant: for section header labels

### `<GradientText>` — `src/components/ui/GradientText.tsx`
```tsx
glow?: boolean   // default true — adds text-shadow glow
```
- Use for key terms in headlines that should feel "AI-forward"
- Always wraps inline within a heading element

---

## 6. Animation Standards

### Entrance animations
- Use Tailwind's custom animations from `@theme` block
- `animate-[fadeInUp_0.8s_ease-out_0.Xs_both]` — stagger by 0.1s per element
- Max 3 staggered elements per section

### Hover effects
- Cards: `hover:-translate-y-2 transition-transform duration-300`
- Buttons: `hover:-translate-y-0.5 transition-all duration-300`
- Icons: `group-hover:scale-110 transition-transform`

### Scroll-triggered
- For stats: use Intersection Observer to trigger a CSS class that runs the countup animation
- Standard: fade in + slide up when entering viewport

---

## 7. File Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `AIScribe.tsx` |
| Data/Config files | camelCase | `specialtyData.ts` |
| Utilities | camelCase | `formatDate.ts` |
| Page route entries | `index.tsx` | `src/paths/home/index.tsx` |
| Style files | lowercase | `index.css` |

---

## 8. Git & Code Quality

- Run `npm run build` before every commit to catch TypeScript errors
- Run `npm run lint` to check for ESLint violations
- No `console.log` in production code
- No commented-out dead code blocks
