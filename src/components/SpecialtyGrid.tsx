import { Link } from 'react-router-dom';
import {
  Eye,
  Hand,
  Activity,
  Footprints,
  Wind,
  Ear,
  Syringe,
  PersonStanding,
  Layers,
  Dna,
  TestTube,
  ArrowRight,
} from 'lucide-react';
import { Section } from './ui/Section';
import { Badge } from './ui/Badge';
import { GradientText } from './ui/GradientText';
import { ScrollReveal } from './ui/ScrollReveal';

const SPECIALTIES = [
  { name: 'Dermatology',      slug: 'dermatology',      icon: Layers,          color: 'text-orange-400', bg: 'bg-orange-500/10',  border: 'border-orange-500/20',  glow: 'bg-orange-500',  desc: 'Tap-and-go precision charting' },
  { name: 'Ophthalmology',    slug: 'ophthalmology',    icon: Eye,             color: 'text-blue-400',   bg: 'bg-blue-500/10',    border: 'border-blue-500/20',    glow: 'bg-blue-500',    desc: 'Cloud image management' },
  { name: 'Orthopedics',      slug: 'orthopedics',      icon: PersonStanding,  color: 'text-emerald-400',bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', glow: 'bg-emerald-500', desc: 'MSK-focused workflows' },
  { name: 'Gastroenterology', slug: 'gastroenterology', icon: Dna,             color: 'text-purple-400', bg: 'bg-purple-500/10',  border: 'border-purple-500/20',  glow: 'bg-purple-500',  desc: 'Procedure-driven charting' },
  { name: 'OBGYN',            slug: 'obgyn',            icon: Activity,        color: 'text-pink-400',   bg: 'bg-pink-500/10',    border: 'border-pink-500/20',    glow: 'bg-pink-500',    desc: "Women's health-first EHR" },
  { name: 'Allergy',          slug: 'allergy',          icon: Wind,            color: 'text-teal-400',   bg: 'bg-teal-500/10',    border: 'border-teal-500/20',    glow: 'bg-teal-500',    desc: 'Vial & testing management' },
  { name: 'ENT',              slug: 'ent',              icon: Ear,             color: 'text-indigo-400', bg: 'bg-indigo-500/10',  border: 'border-indigo-500/20',  glow: 'bg-indigo-500',  desc: 'Otolaryngology workflows' },
  { name: 'Pain Management',  slug: 'pain-management',  icon: Syringe,         color: 'text-red-400',    bg: 'bg-red-500/10',     border: 'border-red-500/20',     glow: 'bg-red-500',     desc: 'Procedure & med tracking' },
  { name: 'Plastic Surgery',  slug: 'plastic-surgery',  icon: Hand,            color: 'text-yellow-400', bg: 'bg-yellow-500/10',  border: 'border-yellow-500/20',  glow: 'bg-yellow-500',  desc: 'Aesthetic-focused charting' },
  { name: 'Podiatry',         slug: 'podiatry',         icon: Footprints,      color: 'text-cyan-400',   bg: 'bg-cyan-500/10',    border: 'border-cyan-500/20',    glow: 'bg-cyan-500',    desc: 'Lower extremity focus' },
  { name: 'Urology',          slug: 'urology',          icon: TestTube,        color: 'text-violet-400', bg: 'bg-violet-500/10',  border: 'border-violet-500/20',  glow: 'bg-violet-500',  desc: 'Complex protocol support' },
];

export function SpecialtyGrid() {
  return (
    <Section id="specialties" className="bg-white">
      <div className="text-center mb-16 px-4">
        <Badge variant="glow" className="mb-4">Specialized Intelligence</Badge>
        <h2 className="text-3xl sm:text-5xl font-bold text-slate-950 mb-6 tracking-tight">
          Built for specialists, <GradientText glow={false}>by specialists</GradientText>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
          We don't do "general." Each of our clinical specialties features a workflow designed by practicing physicians in that field.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 px-4">
        {SPECIALTIES.map((spec, i) => {
          const Icon = spec.icon;
          return (
            <ScrollReveal 
              key={spec.slug}
              variant="slide"
              direction={i % 2 === 0 ? "up" : "down"}
              delay={(i % 6) * 0.05}
              className="h-full"
            >
              <Link
                to={`/specialties/${spec.slug}`}
                className="group relative flex flex-col items-center text-center p-6 rounded-3xl border border-slate-100 bg-white/60 backdrop-blur-sm
                  hover:border-slate-200 hover:bg-white hover:shadow-xl hover:-translate-y-1.5
                  transition-all duration-500 ease-out h-full"
              >
              {/* Icon container */}
              <div className="relative mb-5">
                <div className={`w-14 h-14 rounded-2xl ${spec.bg} border ${spec.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                  <Icon className={`w-7 h-7 ${spec.color}`} />
                </div>
                {/* Subtle soft glow on hover */}
                <div className={`absolute inset-0 ${spec.glow} rounded-2xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`} />
              </div>

              <h3 className={`text-sm font-black text-slate-900 group-hover:text-brand-purple transition-colors duration-300 mb-2 uppercase tracking-tight`}>
                {spec.name}
              </h3>
              <p className="text-[11px] text-slate-500 leading-normal mb-4 font-medium">
                {spec.desc}
              </p>

              {/* Explore arrow — reveals on hover */}
              <div className="mt-auto">
                <span className={`inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-brand-purple opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        );
      })}

        {/* "View All" tile — visible on larger screens */}
        <Link
          to="/specialties/dermatology"
          className="flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 group text-center"
        >
          <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover:border-brand-purple transition-colors">
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-brand-purple transition-colors" />
          </div>
          <span className="text-xs font-black text-slate-900 block mb-1 uppercase tracking-tighter">View All</span>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Specialties</span>
        </Link>
      </div>
    </Section>
  );
}
