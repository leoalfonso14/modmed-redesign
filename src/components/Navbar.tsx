import { useState, useEffect, useRef, useCallback } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { VideoModal } from "./ui/VideoModal";
import { Video as VideoComponent } from "./ui/Video";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Layers,
  Eye,
  PersonStanding,
  Dna,
  Activity,
  Wind,
  Ear,
  Syringe,
  Hand,
  Footprints,
  TestTube,
  BrainCircuit,
  Calendar,
  BarChart3,
  MessageSquare,
  CreditCard,
  Sparkles,
  Building2,
  Newspaper,
  Briefcase,
  BookOpen,
  Star,
  Video as VideoIcon,
  Library,
  CalendarCheck,
  Zap,
  Users,
  Share2,
  Layout,
  BriefcaseBusiness,
  DollarSign,
  Play,
  LayoutGrid,
  Cable,
} from "lucide-react";

// ─────────────────────────────────────────────
// Nav data
// ─────────────────────────────────────────────

const SPECIALTIES = [
  {
    label: "Allergy",
    icon: Wind,
    href: "/specialties/allergy",
    desc: "Vial & testing management",
  },
  {
    label: "Dermatology",
    icon: Layers,
    href: "/specialties/dermatology",
    desc: "Tap-and-go precision charting",
  },
  {
    label: "ENT",
    icon: Ear,
    href: "/specialties/ent",
    desc: "Otolaryngology workflows",
  },
  {
    label: "Gastroenterology",
    icon: Dna,
    href: "/specialties/gastroenterology",
    desc: "Procedure-driven documentation",
  },
  {
    label: "OBGYN",
    icon: Activity,
    href: "/specialties/obgyn",
    desc: "Women's health-first EHR",
  },
  {
    label: "Ophthalmology",
    icon: Eye,
    href: "/specialties/ophthalmology",
    desc: "Cloud image management",
  },
  {
    label: "Orthopedics",
    icon: PersonStanding,
    href: "/specialties/orthopedics",
    desc: "MSK & MIPS-ready workflows",
  },
  {
    label: "Pain Management",
    icon: Syringe,
    href: "/specialties/pain-management",
    desc: "Procedure & medication tracking",
  },
  {
    label: "Plastic Surgery",
    icon: Hand,
    href: "/specialties/plastic-surgery",
    desc: "Aesthetic-focused charting",
  },
  {
    label: "Podiatry",
    icon: Footprints,
    href: "/specialties/podiatry",
    desc: "Lower extremity focus",
  },
  {
    label: "Urology",
    icon: TestTube,
    href: "/specialties/urology",
    desc: "Complex protocol support",
  },
];

const SOLUTIONS = [
  {
    label: "AI",
    icon: Sparkles,
    href: "/solutions/ai",
    desc: "See the future of healthcare intelligence",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    label: "Patient Experience",
    icon: MessageSquare,
    href: "/what-we-do/patient-experience",
    desc: "Simplify communication & build relationships",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
  },
  {
    label: "Analytics & Reporting",
    icon: BarChart3,
    href: "/what-we-do/analytics",
    desc: "Benchmark critical practice data & KPI",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    label: "Clinical Workflow",
    icon: Layout,
    href: "/what-we-do/ehr",
    desc: "Automate documentation & streamline exams",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    label: "For Enterprise",
    icon: BriefcaseBusiness,
    href: "/solutions/enterprise",
    desc: "All-in-one solutions for large orgs",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    label: "Billing & Operations",
    icon: DollarSign,
    href: "/what-we-do/rcm",
    desc: "Position your practice for steady growth",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
];

const PRODUCTS_SERVICES = [
  {
    label: "EHR",
    icon: Layout,
    href: "/what-we-do/ehr",
    desc: "Specialty-specific electronic health records",
  },
  {
    label: "Practice Management",
    icon: Calendar,
    href: "/what-we-do/practice-management",
    desc: "Streamline scheduling & documentation",
  },
  {
    label: "Revenue Cycle Management",
    icon: DollarSign,
    href: "/what-we-do/rcm",
    desc: "Maximize collections & billing efficiency",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    href: "/what-we-do/analytics",
    desc: "Actionable data for practice performance",
  },
  {
    label: "Patient Communication",
    icon: MessageSquare,
    href: "/what-we-do/patient-experience",
    desc: "Engage patients with integrated tools",
  },
  {
    label: "Payment Processing",
    icon: CreditCard,
    href: "/what-we-do/payment-processing",
    desc: "Secure, modern payment collections",
  },
  {
    label: "See All",
    icon: LayoutGrid,
    href: "/what-we-do",
    desc: "Explore all ModMed offerings",
  },
];

const INTEGRATIONS = [
  {
    label: "App Marketplace",
    icon: Zap,
    href: "/integrations/marketplace",
    desc: "Connect with 200+ partner solutions",
  },
  {
    label: "Labs",
    icon: TestTube,
    href: "/integrations/labs",
    desc: "Direct electronic lab connectivity",
  },
  {
    label: "Certified FHIR API",
    icon: BrainCircuit,
    href: "/integrations/api",
    desc: "Standardized interoperability",
  },
  {
    label: "Other Connections",
    icon: Share2,
    href: "/integrations/connections",
    desc: "HIEs, registries, and custom endpoints",
  },
];

const COMPANY = [
  {
    label: "About Us",
    icon: Building2,
    href: "/who-we-are/about",
    desc: "Our story, mission and leadership",
  },
  {
    label: "Events",
    icon: Calendar,
    href: "/who-we-are/events",
    desc: "Meet us at Momentum and industry shows",
  },
  {
    label: "News & Press",
    icon: Newspaper,
    href: "/who-we-are/news",
    desc: "Latest announcements and media coverage",
  },
  {
    label: "Careers",
    icon: Briefcase,
    href: "https://modmed.wd501.myworkdayjobs.com/ModMed12",
    desc: "Join the team building the future of healthcare",
  },
];

const RESOURCES = [
  {
    label: "Blog",
    icon: BookOpen,
    href: "/resources/blog",
    desc: "Expert insights & clinical perspectives",
  },
  {
    label: "Success Stories",
    icon: Star,
    href: "/resources/success-stories",
    desc: "Real results from real practices",
  },
  {
    label: "Webinars",
    icon: VideoIcon,
    href: "/resources/webinars",
    desc: "Live & on-demand expert sessions",
  },
  {
    label: "All Resources",
    icon: Library,
    href: "/resources",
    desc: "Browse the full knowledge hub",
  },
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
                  ? "bg-slate-100 text-slate-900"
                  : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"
              }`
            }
          >
            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-slate-300 group-hover:bg-slate-50 transition-all shadow-sm">
              <s.icon className="w-4 h-4 text-slate-400 group-hover:text-brand-purple transition-colors" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold leading-tight truncate">
                {s.label}
              </div>
              <div className="text-[11px] text-slate-500 leading-tight mt-0.5 truncate">
                {s.desc}
              </div>
            </div>
          </NavLink>
        ))}
      </div>

      {/* Right — featured card */}
      <div className="w-[310px] shrink-0 border-l border-slate-100 bg-slate-50/50 p-9 flex flex-col justify-between relative overflow-hidden group/panel">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-40 h-40 bg-brand-purple/5 blur-[60px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">
            <Sparkles className="w-3.5 h-3.5 text-brand-purple animate-pulse" />
            <span>Featured Focus</span>
          </div>

          <div className="group/feat cursor-pointer">
            <div className="w-14 h-14 rounded-[22px] bg-brand-purple/10 flex items-center justify-center mb-6 border border-brand-purple/5 shadow-sm group-hover/feat:scale-110 group-hover/feat:shadow-md transition-all duration-500">
              <Dna className="w-7 h-7 text-brand-purple" />
            </div>
            <h4 className="text-sm font-black text-slate-950 mb-3 uppercase tracking-tight leading-snug">
              Specialty-Clinical Build
            </h4>
            <p className="text-slate-500 text-[11px] leading-relaxed font-medium mb-6">
              ModMed is not a generic vendor. We build specifically for your
              workflow metrics.
            </p>
          </div>
        </div>

        <div className="relative z-10 pt-8 border-t border-slate-200/60">
          <Link
            to="/specialties"
            onClick={onClose}
            className="flex items-center justify-between group/link"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-brand-purple">
              View all specialties
            </span>
            <div className="w-7 h-7 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple group-hover/link:bg-brand-purple group-hover/link:text-white transition-all duration-300">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function WhatWeDoPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex">
      {/* Products & Services */}
      <div className="flex-2 p-8 grid grid-cols-2 gap-4 content-start">
        <div className="col-span-2 mb-3 px-3">
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <LayoutGrid className="w-3 h-3" />
            <span>Products & Services</span>
          </div>
        </div>
        {PRODUCTS_SERVICES.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-start gap-4 p-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? "bg-slate-100 text-slate-900 shadow-sm"
                  : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"
              }`
            }
          >
            <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-brand-purple/20 group-hover:scale-105 transition-all shadow-sm">
              {item.icon && (
                <item.icon className="w-5 h-5 text-slate-400 group-hover:text-brand-purple transition-colors" />
              )}
            </div>
            <div>
              <div className="text-sm font-bold leading-tight mb-1">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-500 leading-tight line-clamp-1">
                {item.desc}
              </div>
            </div>
          </NavLink>
        ))}
      </div>

      {/* Integrations */}
      <div className="flex-1 p-8 space-y-4 content-start border-l border-slate-100">
        <div className="mb-3 px-3">
          <Link 
            to="/integrations" 
            onClick={onClose}
            className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-brand-purple transition-colors group/label"
          >
            <Cable className="w-3 h-3 group-hover/label:rotate-12 transition-transform" />
            <span>Integrations</span>
            <ArrowRight className="w-2.5 h-2.5 opacity-0 group-hover/label:opacity-100 transition-all translate-x-[-4px] group-hover:translate-x-0" />
          </Link>
        </div>
        <div className="space-y-1">
          {INTEGRATIONS.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? "bg-slate-100 text-slate-900 shadow-sm"
                    : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"
                }`
              }
            >
              <div className="w-8 h-8 rounded-lg bg-slate-100/50 flex items-center justify-center shrink-0 group-hover:bg-white border border-transparent group-hover:border-slate-200 transition-all">
                {item.icon && (
                  <item.icon className="w-4 h-4 text-slate-400 group-hover:text-brand-purple transition-colors" />
                )}
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold leading-none mb-1 truncate">
                  {item.label}
                </div>
                <div className="text-[10px] text-slate-500 leading-tight truncate">
                  {item.desc}
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Right — Featured Platform */}
      <div className="w-[310px] shrink-0 border-l border-slate-100 bg-slate-50/50 p-9 flex flex-col justify-between relative overflow-hidden group/panel">
        <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/4 w-40 h-40 bg-brand-purple/5 blur-[60px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">
            <Sparkles className="w-3.5 h-3.5 text-brand-purple animate-pulse" />
            <span>Top Adoption</span>
          </div>

          <div className="group/feat cursor-pointer">
            <div className="w-14 h-14 rounded-[22px] bg-brand-purple/10 flex items-center justify-center mb-6 border border-brand-purple/5 shadow-sm group-hover/feat:scale-110 group-hover/feat:shadow-md transition-all duration-500">
              <CalendarCheck className="w-7 h-7 text-brand-purple" />
            </div>
            <h4 className="text-sm font-black text-slate-950 mb-3 uppercase tracking-tight leading-snug">
              Practice Management
            </h4>
            <p className="text-slate-500 text-[11px] leading-relaxed font-medium mb-6">
              The engine of your modern center of clinical excellence.
              High-velocity documentation.
            </p>
          </div>
        </div>

        <div className="relative z-10 pt-8 border-t border-slate-200/60">
          <Link
            to="/contact"
            onClick={onClose}
            className="flex items-center justify-between p-4 rounded-2xl bg-brand-purple text-white hover:bg-brand-purple-light transition-all shadow-xl hover:shadow-brand-purple/40 group/cta"
          >
            <div className="text-[10px] font-black uppercase tracking-[0.2em]">
              Platform Demo
            </div>
            <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function SolutionsPanel({
  onClose,
  onOpenVideo,
}: {
  onClose: () => void;
  onOpenVideo: () => void;
}) {
  return (
    <div className="flex">
      {/* Left — nav list */}
      <div className="flex-1 p-6 grid grid-cols-2 gap-x-4 gap-y-1 content-start">
        <div className="col-span-2 mb-3">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.12em]">
            Practice Solutions
          </p>
        </div>
        {SOLUTIONS.map((s) => (
          <NavLink
            key={s.href}
            to={s.href}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-150 group ${
                isActive
                  ? "bg-slate-100 text-slate-900"
                  : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"
              }`
            }
          >
            <div
              className={`w-9 h-9 rounded-xl ${s.bg} border ${s.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
            >
              <s.icon className={`w-5 h-5 ${s.color}`} />
            </div>
            <div>
              <div className="text-sm font-semibold leading-tight">
                {s.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-1 leading-tight">
                {s.desc}
              </div>
            </div>
          </NavLink>
        ))}
      </div>

      {/* Right — featured video card */}
      <div className="w-[320px] shrink-0 border-l border-slate-100 bg-slate-50/50 p-9 flex flex-col relative overflow-hidden group/panel">
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-purple/5 blur-[60px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">
          <Sparkles className="w-3.5 h-3.5 text-brand-purple animate-pulse" />
          <span>Latest Innovation</span>
        </div>

        <div
          onClick={onOpenVideo}
          className="relative z-10 group/video cursor-pointer overflow-hidden rounded-[24px] bg-slate-950 aspect-video mb-8 border border-slate-200/20 shadow-2xl"
        >
          {/* Silent Promo Loop */}
          <VideoComponent
            src="https://www.modmed.com/wp-content/uploads/2025/11/CRP-13472-1125-Video-ModMed-Scribe-2.0-Launch-8Sec-updaated.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover transition-transform duration-700 group-hover/video:scale-110 opacity-70 group-hover/video:opacity-100"
          />

          {/* Ambient Overlays */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover/video:opacity-40 transition-opacity" />

          {/* Play Icon and Prompt */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-full bg-brand-purple text-white flex items-center justify-center shadow-2xl group-hover/video:scale-110 transition-all duration-500">
              <Play className="w-6 h-6 fill-current ml-1" />
            </div>
            <span className="text-[9px] font-black text-white uppercase tracking-[0.3em] opacity-0 group-hover/video:opacity-100 translate-y-2 group-hover/video:translate-y-0 transition-all duration-300">
              Tap to Watch Full Video
            </span>
          </div>

          {/* Scribe 2.0 Badge */}
          <div className="absolute top-4 left-4">
            <div className="px-2 py-1 rounded-full bg-brand-purple/20 backdrop-blur-md border border-brand-purple/30 text-brand-purple-light text-[8px] font-black uppercase tracking-widest">
              Scribe 2.0 Promo
            </div>
          </div>
        </div>

        <div className="relative z-10 flex-1">
          <h4 className="text-sm font-black text-slate-950 mb-3 leading-snug uppercase tracking-tight">
            ModMed Scribe: Ambient AI
          </h4>
          <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-6">
            Physicians have saved over 2.5 million moments with our clinical
            intelligence hub.
          </p>
          <button
            onClick={onOpenVideo}
            className="flex items-center gap-2 text-[10px] font-black text-brand-purple group/link uppercase tracking-widest"
          >
            Watch demo
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1.5 transition-transform duration-300" />
          </button>
        </div>

        <div className="relative z-10 pt-8 border-t border-slate-200/60 mt-4">
          <Link
            to="/resources"
            onClick={onClose}
            className="flex items-center justify-between group/bot"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
              Knowledge Hub
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/bot:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function CompanyPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex">
      {/* Left — rich content list */}
      <div className="flex-1 p-6 grid grid-cols-2 gap-x-4 gap-y-1 content-start">
        <div className="col-span-2 mb-3">
          <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
            Our Organization
          </p>
        </div>
        {COMPANY.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-4 px-3 py-3.5 rounded-xl transition-all duration-300 group ${
                isActive
                  ? "bg-slate-50 text-slate-900 shadow-sm"
                  : "hover:bg-slate-50/80 text-slate-600 hover:text-slate-900"
              }`
            }
          >
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-slate-200 transition-all shadow-sm">
              <item.icon className="w-5 h-5 text-slate-400 group-hover:text-brand-purple transition-colors" />
            </div>
            <div>
              <div className="text-sm font-bold leading-none mb-1.5 group-hover:translate-x-0.5 transition-transform">
                {item.label}
              </div>
              <div className="text-[10px] text-slate-500 font-medium leading-tight line-clamp-1">
                {item.desc}
              </div>
            </div>
          </NavLink>
        ))}
      </div>

      {/* Right — boutique card */}
      <div className="w-[310px] shrink-0 border-l border-slate-100 bg-slate-50/50 p-9 flex flex-col justify-between overflow-hidden relative group/panel">
        <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/4 w-40 h-40 bg-brand-purple/5 blur-[60px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">
            <Users className="w-3.5 h-3.5 text-brand-purple" />
            <span>Our Vision</span>
          </div>
          <div>
            <div className="w-14 h-14 rounded-[22px] bg-brand-purple/10 flex items-center justify-center mb-6 shadow-sm border border-brand-purple/5 group-hover/panel:scale-110 group-hover/panel:shadow-md transition-all duration-500">
              <Layout className="w-7 h-7 text-brand-purple" />
            </div>
            <h4 className="text-sm font-black text-slate-950 mb-3 uppercase tracking-tight leading-snug">
              Physician-Led Innovation
            </h4>
            <p className="text-slate-500 text-[11px] font-medium leading-relaxed mb-6">
              Founded by doctors to solve the clinical burnout crisis. We build
              only what's necessary.
            </p>
          </div>
        </div>

        <div className="relative z-10 pt-8 border-t border-slate-200/60">
          <Link
            to="/who-we-are/about"
            onClick={onClose}
            className="flex items-center justify-between group/link"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-brand-purple">
              Meet founders
            </span>
            <div className="w-7 h-7 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple group-hover/link:bg-brand-purple group-hover/link:text-white transition-all duration-300">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ResourcesPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex">
      {/* Left — rich content list */}
      <div className="flex-1 p-6 grid grid-cols-2 gap-x-4 gap-y-1 content-start">
        <div className="col-span-2 mb-3">
          <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
            Knowledge Hub
          </p>
        </div>
        {RESOURCES.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-4 px-3 py-3.5 rounded-xl transition-all duration-300 group ${
                isActive
                  ? "bg-slate-50 text-slate-900 shadow-sm"
                  : "hover:bg-slate-50/80 text-slate-600 hover:text-slate-900"
              }`
            }
          >
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-brand-purple/20 transition-all shadow-sm">
              <item.icon className="w-5 h-5 text-slate-400 group-hover:text-brand-purple transition-colors" />
            </div>
            <div>
              <div className="text-sm font-bold leading-none mb-1.5 group-hover:translate-x-0.5 transition-transform">
                {item.label}
              </div>
              <div className="text-[10px] text-slate-500 font-medium leading-tight line-clamp-1">
                {item.desc}
              </div>
            </div>
          </NavLink>
        ))}
      </div>

      {/* Right — high-end featured card */}
      <div className="w-[310px] shrink-0 border-l border-slate-100 bg-slate-50/50 p-9 flex flex-col justify-between relative overflow-hidden group/panel">
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-40 h-40 bg-brand-purple/5 blur-[60px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">
            <BookOpen className="w-3.5 h-3.5 text-brand-purple" />
            <span>Clinical Guide</span>
          </div>
          <div>
            <div className="w-14 h-14 rounded-[22px] bg-brand-purple/10 flex items-center justify-center mb-6 shadow-sm border border-brand-purple/5 group-hover/panel:scale-110 group-hover/panel:shadow-md transition-all duration-500">
              <Library className="w-7 h-7 text-brand-purple" />
            </div>
            <h4 className="text-sm font-black text-slate-950 mb-3 uppercase tracking-tight leading-snug">
              Clinical AI Handbook
            </h4>
            <p className="text-slate-500 text-[11px] font-medium leading-relaxed mb-6">
              Physician-vetted insights on AI compliance, MIPS, and practice
              efficiency.
            </p>
          </div>
        </div>

        <div className="relative z-10 pt-8 border-t border-slate-200/60">
          <Link
            to="/resources"
            onClick={onClose}
            className="flex items-center justify-between group/link"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-brand-purple">
              Download guide
            </span>
            <div className="w-7 h-7 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple group-hover/link:bg-brand-purple group-hover/link:text-white transition-all duration-300">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Nav items config
// ─────────────────────────────────────────────

type MenuKey = "Specialties" | "WhatWeDo" | "AI" | "WhoWeAre" | "Resources";

const NAV_LABELS: { key: MenuKey; label: string }[] = [
  { key: "Specialties", label: "Specialties" },
  { key: "WhatWeDo", label: "What We Do" },
  { key: "AI", label: "Solutions" },
  { key: "WhoWeAre", label: "Who We Are" },
  { key: "Resources", label: "Resources" },
];

// ─────────────────────────────────────────────
// Main Navbar
// ─────────────────────────────────────────────

export function Navbar() {
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [isScribeModalOpen, setIsScribeModalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Hover intent helpers — small delay prevents accidental close on cursor path
  const handleMouseEnter = useCallback((key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(key);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSection(null);
  };
  const closeDesktop = () => setOpen(null);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-white border-b border-slate-200 shadow-[0_8px_48px_rgba(0,0,0,0.06)]"
            : "bg-[#FCFCFD]/80 backdrop-blur-3xl border-b border-slate-200/50"
        }`}
        onMouseLeave={handleMouseLeave}
      >
        {/* ── Top bar ── */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-[68px]">
            {/* Logo */}
            <Link
              to="/"
              onClick={closeDesktop}
              className="shrink-0 transition-all hover:opacity-80 active:scale-95 duration-200"
            >
              <img
                src="/modmed-logo.svg"
                alt="ModMed"
                className="h-[28px] w-auto opacity-100 brightness-100 contrast-125"
              />
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
                      ? "text-slate-900 bg-slate-100"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      open === key
                        ? "rotate-180 text-brand-purple"
                        : "text-slate-400"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4 ml-8">
              <Link to="/contact" onClick={closeDesktop}>
                <button className="relative group overflow-hidden px-6 py-2.5 bg-brand-purple hover:bg-brand-purple-light text-white rounded-full text-sm font-black transition-all shadow-[0_4px_12px_rgba(80,45,127,0.2)] hover:-translate-y-0.5 active:scale-95">
                  <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  Book a Demo
                </button>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 transition-all text-slate-600 hover:text-slate-900"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* ── Mega-menu dropdown panel ── */}
        {open && (
          <div
            className="hidden lg:block absolute left-0 right-0 top-full border-t border-slate-200 bg-white/95 backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
            onMouseEnter={() => {
              if (closeTimer.current) clearTimeout(closeTimer.current);
            }}
          >
            <div className="max-w-7xl mx-auto">
              {open === "Specialties" && (
                <SpecialtiesPanel onClose={closeDesktop} />
              )}
              {open === "WhatWeDo" && <WhatWeDoPanel onClose={closeDesktop} />}
              {open === "AI" && (
                <SolutionsPanel
                  onClose={closeDesktop}
                  onOpenVideo={() => {
                    setIsScribeModalOpen(true);
                    closeDesktop();
                  }}
                />
              )}
              {open === "WhoWeAre" && <CompanyPanel onClose={closeDesktop} />}
              {open === "Resources" && (
                <ResourcesPanel onClose={closeDesktop} />
              )}
            </div>

            {/* Bottom accent bar */}
            <div className="h-px bg-linear-to-r from-transparent via-brand-purple/10 to-transparent" />
          </div>
        )}
      </nav>

      <VideoModal
        isOpen={isScribeModalOpen}
        onClose={() => setIsScribeModalOpen(false)}
        wistiaId="6vnavaja1v"
        title="ModMed Scribe 2.0 Presentation"
      />

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
        className={`fixed top-0 left-0 h-full w-80 z-50 lg:hidden flex flex-col bg-white/98 backdrop-blur-xl border-r border-slate-200 shadow-2xl transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-slate-100 shrink-0">
          <Link
            to="/"
            onClick={closeMobile}
            className="active:scale-95 transition-transform"
          >
            <img
              src="/modmed-logo.svg"
              alt="ModMed"
              className="h-[24px] w-auto opacity-100"
            />
          </Link>
          <button
            onClick={closeMobile}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer body */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
          <MobileSection
            label="Specialties"
            isOpen={mobileSection === "Specialties"}
            onToggle={() =>
              setMobileSection(
                mobileSection === "Specialties" ? null : "Specialties",
              )
            }
          >
            {SPECIALTIES.map((s) => (
              <NavLink
                key={s.href}
                to={s.href}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${isActive ? "text-brand-purple bg-brand-purple/10" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`
                }
              >
                <s.icon className="w-4 h-4 shrink-0" />
                <span>{s.label}</span>
              </NavLink>
            ))}
          </MobileSection>

          <MobileSection
            label="What We Do"
            isOpen={mobileSection === "WhatWeDo"}
            onToggle={() =>
              setMobileSection(mobileSection === "WhatWeDo" ? null : "WhatWeDo")
            }
          >
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-3 mt-2">
              Products & Services
            </div>
            {PRODUCTS_SERVICES.map((s) => (
              <NavLink
                key={s.href}
                to={s.href}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${isActive ? `text-slate-950 font-bold bg-slate-100` : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`
                }
              >
                <span>{s.label}</span>
              </NavLink>
            ))}
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-3 mt-4">
              Integrations
            </div>
            {INTEGRATIONS.map((s) => (
              <NavLink
                key={s.href}
                to={s.href}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${isActive ? `text-slate-950 font-bold bg-slate-100` : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`
                }
              >
                <span>{s.label}</span>
              </NavLink>
            ))}
          </MobileSection>

          <MobileSection
            label="Solutions"
            isOpen={mobileSection === "AI"}
            onToggle={() =>
              setMobileSection(mobileSection === "AI" ? null : "AI")
            }
          >
            {SOLUTIONS.map((p) => (
              <NavLink
                key={p.href}
                to={p.href}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${isActive ? "text-brand-purple bg-brand-purple/10" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`
                }
              >
                <p.icon className={`w-4 h-4 shrink-0 ${p.color}`} />
                <span>{p.label}</span>
              </NavLink>
            ))}
          </MobileSection>

          <MobileSection
            label="Who We Are"
            isOpen={mobileSection === "WhoWeAre"}
            onToggle={() =>
              setMobileSection(mobileSection === "WhoWeAre" ? null : "WhoWeAre")
            }
          >
            {COMPANY.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={closeMobile}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${isActive ? "text-brand-purple bg-brand-purple/10" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`
                }
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </MobileSection>

          <MobileSection
            label="Resources"
            isOpen={mobileSection === "Resources"}
            onToggle={() =>
              setMobileSection(
                mobileSection === "Resources" ? null : "Resources",
              )
            }
          >
            {RESOURCES.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${isActive ? "text-brand-purple bg-brand-purple/10" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`
                }
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </MobileSection>
        </div>

        {/* Drawer footer CTAs */}
        <div className="shrink-0 border-t border-slate-100 p-4 space-y-2">
          <Link to="/contact" onClick={closeMobile} className="block">
            <button
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-brand-purple hover:bg-brand-purple-light text-white rounded-xl text-sm font-semibold transition-all shadow-[0_0_14px_rgba(80,45,127,0.2)]"
              onClick={() => navigate("/contact")}
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
function MobileSection({
  label,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-slate-50 last:border-0">
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-3 py-3.5 rounded-xl text-sm font-bold transition-all ${
          isOpen
            ? "text-slate-900 bg-slate-50"
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
        }`}
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-brand-purple" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="ml-2 pl-3 border-l border-slate-200 mt-1 mb-3 space-y-0.5">
          {children}
        </div>
      )}
    </div>
  );
}
