import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  ChevronDown, Menu, X,
  Layers, Eye, PersonStanding, Dna, Activity, Wind, Ear,
  Syringe, Hand, Footprints, TestTube,
  BrainCircuit, CalendarDays, TrendingUp, BarChart3, MessageSquare, CreditCard,
  Sparkles, Mic2,
  Building2, Newspaper, Briefcase,
  BookOpen, Star, Video, Library,
  LogIn, CalendarCheck,
  Zap, Users, FileText, BarChart2,
} from 'lucide-react';

// ─────────────────────────────────────────────
// Nav data
// ─────────────────────────────────────────────

const SPECIALTIES = [
  { label: 'Allergy',          icon: Wind,          href: '/specialties/allergy',          desc: 'Vial & testing management' },
  { label: 'Dermatology',      icon: Layers,         href: '/specialties/dermatology',      desc: 'Tap-and-go precision charting' },
  { label: 'ENT',              icon: Ear,            href: '/specialties/ent',              desc: 'Otolaryngology workflows' },
  { label: 'Gastroenterology', icon: Dna,            href: '/specialties/gastroenterology', desc: 'Procedure-driven documentation' },
  { label: 'OBGYN',            icon: Activity,       href: '/specialties/obgyn',            desc: "Women's health-first EHR" },
  { label: 'Ophthalmology',    icon: Eye,            href: '/specialties/ophthalmology',    desc: 'Cloud image management' },
  { label: 'Orthopedics',      icon: PersonStanding, href: '/specialties/orthopedics',      desc: 'MSK & MIPS-ready workflows' },
  { label: 'Pain Management',  icon: Syringe,        href: '/specialties/pain-management',  desc: 'Procedure & medication tracking' },
  { label: 'Plastic Surgery',  icon: Hand,           href: '/specialties/plastic-surgery',  desc: 'Aesthetic-focused charting' },
  { label: 'Podiatry',         icon: Footprints,     href: '/specialties/podiatry',         desc: 'Lower extremity focus' },
  { label: 'Urology',          icon: TestTube,       href: '/specialties/urology',          desc: 'Complex protocol support' },
];

const SOLUTIONS = [
  { label: 'EHR / EMR',           icon: BrainCircuit,  href: '/what-we-do/ehr',                desc: 'AI-powered specialty documentation', color: 'text-brand-purple-light', bg: 'bg-brand-purple/20', border: 'border-brand-purple/20' },
  { label: 'Practice Management',  icon: CalendarDays,  href: '/what-we-do/practice-management', desc: 'Scheduling, front-office & billing',  color: 'text-blue-400',           bg: 'bg-blue-500/15',      border: 'border-blue-500/20' },
  { label: 'Revenue Cycle',        icon: TrendingUp,    href: '/what-we-do/rcm',                desc: 'Expert billing team + software',      color: 'text-emerald-400',        bg: 'bg-emerald-500/15',   border: 'border-emerald-500/20' },
  { label: 'Analytics',            icon: BarChart3,     href: '/what-we-do/analytics',          desc: 'Near-real-time KPI dashboards',       color: 'text-violet-400',         bg: 'bg-violet-500/15',    border: 'border-violet-500/20' },
  { label: 'Patient Experience',   icon: MessageSquare, href: '/what-we-do/patient-experience',  desc: 'Automated patient engagement',        color: 'text-cyan-400',           bg: 'bg-cyan-500/15',      border: 'border-cyan-500/20' },
  { label: 'Payment Processing',   icon: CreditCard,    href: '/what-we-do/payment-processing',  desc: 'Convenient integrated payments',      color: 'text-amber-400',          bg: 'bg-amber-500/15',     border: 'border-amber-500/20' },
];

const AI_PRODUCTS = [
  { label: 'AI Overview',       icon: Sparkles, href: '/solutions/ai',        desc: 'Responsible AI built for specialty practices', featured: false },
  { label: 'ModMed Scribe 2.0', icon: Mic2,     href: '/solutions/ai/scribe', desc: 'Ambient listening → clinical notes in real time', featured: true },
];

const COMPANY = [
  { label: 'About Us',     icon: Building2, href: '/who-we-are/about',   desc: 'Our story, mission and leadership' },
  { label: 'News & Press', icon: Newspaper, href: '/who-we-are/news',    desc: 'Latest announcements and media coverage' },
  { label: 'Careers',      icon: Briefcase, href: '/who-we-are/careers', desc: 'Join the team building the future of healthcare' },
];

const RESOURCES = [
  { label: 'Blog',            icon: BookOpen, href: '/resources/blog',             desc: 'Expert insights & clinical perspectives' },
  { label: 'Success Stories', icon: Star,     href: '/resources/success-stories',  desc: 'Real results from real practices' },
  { label: 'Webinars',        icon: Video,    href: '/resources/webinars',         desc: 'Live & on-demand expert sessions' },
  { label: 'All Resources',   icon: Library,  href: '/resources',                  desc: 'Browse the full knowledge hub' },
];

// ─────────────────────────────────────────────
// Desktop mega-menu panels
// ─────────────────────────────────────────────

function SpecialtiesPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex">
      {/* Left — nav list */}
      <div className="flex-1 p-6 grid grid-cols-2 gap-x-4 gap-y-1 content-start">
        <div className="col-span-2 mb-3">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.12em]">
            11 Clinical Specialties
          </p>
        </div>
        {SPECIALTIES.map((s) => (
          <NavLink
            key={s.href}
            to={s.href}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 group ${
                isActive
                  ? 'bg-brand-purple/15 text-white'
                  : 'hover:bg-white/6 text-slate-300 hover:text-white'
              }`
            }
          >
            <div className="w-8 h-8 rounded-lg bg-slate-800 border border-white/8 flex items-center justify-center shrink-0 group-hover:border-white/15 group-hover:bg-slate-700 transition-all">
              <s.icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold leading-tight truncate">{s.label}</div>
              <div className="text-[11px] text-slate-500 leading-tight mt-0.5 truncate">{s.desc}</div>
            </div>
          </NavLink>
        ))}
      </div>

      {/* Right — feature card */}
      <div className="w-[260px] shrink-0 border-l border-white/8 bg-gradient-to-b from-brand-purple-dark/40 to-slate-950/20 p-6 flex flex-col justify-between">
        <div>
          <div className="w-10 h-10 rounded-xl bg-brand-purple/30 border border-brand-purple/40 flex items-center justify-center mb-4">
            <Sparkles className="w-5 h-5 text-brand-purple-light" />
          </div>
          <p className="text-white font-bold text-base leading-snug mb-2">
            Built by specialists,<br />for specialists.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Every specialty EHR is designed with practicing physicians — not adapted from a generic template.
          </p>
        </div>
        <div className="mt-6 pt-5 border-t border-white/8">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Users className="w-3.5 h-3.5 text-slate-500" />
            <span><span className="text-white font-semibold">35,000+</span> providers trust ModMed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhatWeDoPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex">
      {/* Left — product list */}
      <div className="flex-1 p-6 space-y-1">
        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.12em] mb-4">
          Products & Services
        </p>
        {SOLUTIONS.map((s) => (
          <NavLink
            key={s.href}
            to={s.href}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-150 group ${
                isActive ? 'bg-white/8 text-white' : 'hover:bg-white/5 text-slate-300 hover:text-white'
              }`
            }
          >
            <div className={`w-9 h-9 rounded-xl ${s.bg} border ${s.border} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
              <s.icon className={`w-4.5 h-4.5 ${s.color}`} />
            </div>
            <div>
              <div className={`text-sm font-semibold leading-tight ${s.color}`}>{s.label}</div>
              <div className="text-[12px] text-slate-500 mt-0.5 leading-tight">{s.desc}</div>
            </div>
          </NavLink>
        ))}
      </div>

      {/* Right — featured EHR card */}
      <div className="w-[250px] shrink-0 border-l border-white/8 bg-gradient-to-b from-slate-900 to-slate-950 p-6 flex flex-col justify-between">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-purple/20 border border-brand-purple/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple-light" />
            <span className="text-[10px] font-bold text-brand-purple-light uppercase tracking-wider">KLAS #1 Rated</span>
          </div>
          <p className="text-white font-bold text-sm leading-snug mb-2">
            The only all-in-one platform for specialty medicine
          </p>
          <p className="text-slate-400 text-xs leading-relaxed">
            EHR, PM, RCM, and AI — all connected. One login. Zero silos.
          </p>
        </div>

        {/* Mini stat grid */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          {[
            { value: '98%', label: 'Claim acceptance' },
            { value: '93%', label: 'Top documentation rating' },
            { value: '90%', label: 'Would recommend us' },
            { value: '50%', label: 'Less charting time' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/4 rounded-xl p-3 border border-white/6">
              <div className="text-white font-black text-lg leading-none">{stat.value}</div>
              <div className="text-slate-500 text-[10px] leading-tight mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AIPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex">
      {/* Left — AI products */}
      <div className="flex-1 p-6 space-y-2">
        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.12em] mb-4">
          AI-Powered Innovation
        </p>
        {AI_PRODUCTS.map((p) => (
          <NavLink
            key={p.href}
            to={p.href}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-start gap-4 px-4 py-4 rounded-2xl border transition-all duration-150 group ${
                p.featured
                  ? isActive
                    ? 'border-brand-purple/60 bg-brand-purple/15'
                    : 'border-brand-purple/30 bg-brand-purple/8 hover:bg-brand-purple/12 hover:border-brand-purple/50'
                  : isActive
                  ? 'border-white/15 bg-white/8'
                  : 'border-white/5 hover:border-white/12 hover:bg-white/5'
              }`
            }
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform ${p.featured ? 'bg-brand-purple/30' : 'bg-white/8'}`}>
              <p.icon className={`w-5 h-5 ${p.featured ? 'text-brand-purple-light' : 'text-slate-400'}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-sm font-bold ${p.featured ? 'text-brand-purple-light' : 'text-white'}`}>{p.label}</span>
                {p.featured && (
                  <span className="px-2 py-0.5 rounded-full bg-brand-purple/40 border border-brand-purple/50 text-[9px] font-black text-brand-purple-light uppercase tracking-widest">New</span>
                )}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          </NavLink>
        ))}
      </div>

      {/* Right — Scribe showcase card */}
      <div className="w-[260px] shrink-0 border-l border-white/8 bg-gradient-to-b from-brand-purple-dark/50 to-slate-950/30 p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-brand-purple/40 border border-brand-purple/50 flex items-center justify-center">
            <Mic2 className="w-4 h-4 text-brand-purple-light" />
          </div>
          <span className="text-xs font-bold text-brand-purple-light uppercase tracking-wider">ModMed Scribe 2.0</span>
        </div>
        <p className="text-white font-bold text-sm leading-snug mb-3">
          "Listens like a human.<br />Documents like a scribe."
        </p>
        <p className="text-slate-400 text-xs leading-relaxed mb-6">
          Ambient AI captures your natural conversation and translates it directly into structured clinical notes and billing codes.
        </p>

        <div className="space-y-2.5 mt-auto">
          {[
            { icon: Zap,       stat: 'Up to 50%',      label: 'less charting time' },
            { icon: FileText,  stat: '750M+',           label: 'encounters trained on' },
            { icon: BarChart2, stat: 'Near-real-time',  label: 'ICD-10 code suggestions' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center shrink-0">
                <item.icon className="w-3 h-3 text-brand-purple-light" />
              </div>
              <span className="text-xs text-slate-400">
                <span className="text-white font-semibold">{item.stat}</span> {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CompanyPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="p-5 space-y-1 w-[320px]">
      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.12em] mb-3">Company</p>
      {COMPANY.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          onClick={onClose}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 group ${
              isActive ? 'bg-brand-purple/12 text-white' : 'hover:bg-white/5 text-slate-300 hover:text-white'
            }`
          }
        >
          <div className="w-8 h-8 rounded-lg bg-slate-800 border border-white/8 flex items-center justify-center shrink-0 group-hover:border-white/15 transition-colors">
            <item.icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
          </div>
          <div>
            <div className="text-sm font-semibold leading-tight">{item.label}</div>
            <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">{item.desc}</div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

function ResourcesPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="p-5 space-y-1 w-[320px]">
      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.12em] mb-3">Knowledge Hub</p>
      {RESOURCES.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          onClick={onClose}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 group ${
              isActive ? 'bg-brand-purple/12 text-white' : 'hover:bg-white/5 text-slate-300 hover:text-white'
            }`
          }
        >
          <div className="w-8 h-8 rounded-lg bg-slate-800 border border-white/8 flex items-center justify-center shrink-0 group-hover:border-white/15 transition-colors">
            <item.icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
          </div>
          <div>
            <div className="text-sm font-semibold leading-tight">{item.label}</div>
            <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">{item.desc}</div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// Nav items config
// ─────────────────────────────────────────────

type MenuKey = 'Specialties' | 'WhatWeDo' | 'AI' | 'WhoWeAre' | 'Resources';

const NAV_LABELS: { key: MenuKey; label: string }[] = [
  { key: 'Specialties', label: 'Specialties' },
  { key: 'WhatWeDo',    label: 'What We Do' },
  { key: 'AI',          label: 'AI Solutions' },
  { key: 'WhoWeAre',    label: 'Who We Are' },
  { key: 'Resources',   label: 'Resources' },
];

// ─────────────────────────────────────────────
// Main Navbar
// ─────────────────────────────────────────────

export function Navbar() {
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Hover intent helpers — small delay prevents accidental close on cursor path
  const handleMouseEnter = useCallback((key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(key);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  }, []);

  const closeMobile = () => { setMobileOpen(false); setMobileSection(null); };
  const closeDesktop = () => setOpen(null);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled || open
            ? 'bg-slate-950/90 backdrop-blur-2xl border-b border-white/8 shadow-[0_8px_48px_rgba(0,0,0,0.5)]'
            : 'bg-transparent border-b border-transparent'
        }`}
        onMouseLeave={handleMouseLeave}
      >
        {/* ── Top bar ── */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-[68px]">

            {/* Logo */}
            <Link to="/" onClick={closeDesktop} className="shrink-0 transition-opacity hover:opacity-75 duration-200">
              <img src="/src/assets/modmed-logo.svg" alt="ModMed" className="h-8 w-auto filter brightness-0 invert" />
            </Link>

            {/* Desktop nav triggers */}
            <div className="hidden lg:flex items-center">
              {NAV_LABELS.map(({ key, label }) => (
                <button
                  key={key}
                  onMouseEnter={() => handleMouseEnter(key)}
                  onClick={() => setOpen(open === key ? null : key)}
                  className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                    open === key
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      open === key ? 'rotate-180 text-brand-purple-light' : 'text-slate-600'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2">
              <button className="flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5">
                <LogIn className="w-4 h-4" /> Log In
              </button>
              <Link to="/contact" onClick={closeDesktop}>
                <button className="flex items-center gap-2 px-4 py-2 bg-brand-purple hover:bg-brand-purple-light text-white rounded-full text-sm font-semibold transition-all shadow-[0_0_14px_rgba(80,45,127,0.4)] hover:shadow-[0_0_22px_rgba(106,60,168,0.65)] hover:-translate-y-px">
                  <CalendarCheck className="w-4 h-4" /> Book a Demo
                </button>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/8 transition-all text-slate-300 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Mega-menu dropdown panel ── */}
        {open && (
          <div
            className="hidden lg:block absolute left-0 right-0 top-full border-t border-white/8 bg-slate-950/95 backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
            onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); }}
          >
            <div className="max-w-7xl mx-auto">
              {open === 'Specialties' && <SpecialtiesPanel onClose={closeDesktop} />}
              {open === 'WhatWeDo'    && <WhatWeDoPanel    onClose={closeDesktop} />}
              {open === 'AI'          && <AIPanel          onClose={closeDesktop} />}
              {open === 'WhoWeAre'    && <CompanyPanel     onClose={closeDesktop} />}
              {open === 'Resources'   && <ResourcesPanel   onClose={closeDesktop} />}
            </div>

            {/* Bottom accent bar */}
            <div className="h-px bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent" />
          </div>
        )}
      </nav>

      {/* ══════════════════════════════════════════
          MOBILE DRAWER — unchanged
      ══════════════════════════════════════════ */}

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={closeMobile}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 z-50 lg:hidden flex flex-col bg-slate-950/95 backdrop-blur-xl border-r border-white/10 shadow-2xl transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-[72px] border-b border-white/10 shrink-0">
          <Link to="/" onClick={closeMobile}>
            <img src="/src/assets/modmed-logo.svg" alt="ModMed" className="h-8 w-auto filter brightness-0 invert opacity-90" />
          </Link>
          <button
            onClick={closeMobile}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer body */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
          <MobileSection label="Specialties" isOpen={mobileSection === 'Specialties'} onToggle={() => setMobileSection(mobileSection === 'Specialties' ? null : 'Specialties')}>
            {SPECIALTIES.map((s) => (
              <NavLink key={s.href} to={s.href} onClick={closeMobile}
                className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${isActive ? 'text-brand-purple-light bg-brand-purple/10' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                <s.icon className="w-4 h-4 shrink-0" />
                <span>{s.label}</span>
              </NavLink>
            ))}
          </MobileSection>

          <MobileSection label="What We Do" isOpen={mobileSection === 'WhatWeDo'} onToggle={() => setMobileSection(mobileSection === 'WhatWeDo' ? null : 'WhatWeDo')}>
            {SOLUTIONS.map((s) => (
              <NavLink key={s.href} to={s.href} onClick={closeMobile}
                className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${isActive ? `${s.color} bg-white/5` : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                <s.icon className={`w-4 h-4 shrink-0 ${s.color}`} />
                <span>{s.label}</span>
              </NavLink>
            ))}
          </MobileSection>

          <MobileSection label="AI Solutions" isOpen={mobileSection === 'AI'} onToggle={() => setMobileSection(mobileSection === 'AI' ? null : 'AI')}>
            {AI_PRODUCTS.map((p) => (
              <NavLink key={p.href} to={p.href} onClick={closeMobile}
                className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${isActive ? 'text-brand-purple-light bg-brand-purple/10' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                <p.icon className="w-4 h-4 shrink-0 text-brand-purple-light" />
                <span>{p.label}</span>
                {p.featured && <span className="ml-auto px-1.5 py-0.5 rounded bg-brand-purple/30 text-[10px] font-bold text-brand-purple-light uppercase">New</span>}
              </NavLink>
            ))}
          </MobileSection>

          <MobileSection label="Who We Are" isOpen={mobileSection === 'WhoWeAre'} onToggle={() => setMobileSection(mobileSection === 'WhoWeAre' ? null : 'WhoWeAre')}>
            {COMPANY.map((item) => (
              <NavLink key={item.href} to={item.href} onClick={closeMobile}
                className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${isActive ? 'text-brand-purple-light bg-brand-purple/10' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                <item.icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </MobileSection>

          <MobileSection label="Resources" isOpen={mobileSection === 'Resources'} onToggle={() => setMobileSection(mobileSection === 'Resources' ? null : 'Resources')}>
            {RESOURCES.map((item) => (
              <NavLink key={item.href} to={item.href} onClick={closeMobile}
                className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${isActive ? 'text-brand-purple-light bg-brand-purple/10' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                <item.icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </MobileSection>
        </div>

        {/* Drawer footer CTAs */}
        <div className="shrink-0 border-t border-white/10 p-4 space-y-2">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white rounded-xl hover:bg-white/5 transition-all">
            <LogIn className="w-4 h-4" /> Log In
          </button>
          <Link to="/contact" onClick={closeMobile} className="block">
            <button
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-brand-purple hover:bg-brand-purple-light text-white rounded-xl text-sm font-semibold transition-all shadow-[0_0_14px_rgba(80,45,127,0.4)]"
              onClick={() => navigate('/contact')}
            >
              <CalendarCheck className="w-4 h-4" /> Book a Demo
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────
// Mobile accordion section (unchanged)
// ─────────────────────────────────────────────
function MobileSection({ label, isOpen, onToggle, children }: {
  label: string; isOpen: boolean; onToggle: () => void; children: React.ReactNode;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-semibold transition-all ${
          isOpen ? 'text-white bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
        }`}
      >
        {label}
        <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-slate-400' : ''}`} />
      </button>
      {isOpen && (
        <div className="ml-2 pl-3 border-l border-white/8 mt-1 mb-2 space-y-0.5">
          {children}
        </div>
      )}
    </div>
  );
}
