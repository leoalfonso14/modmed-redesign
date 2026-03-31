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
    <Section id="specialties" className="bg-slate-950/50">
      <div className="text-center mb-16">
        <Badge variant="brand" className="mb-4">Specialized for You</Badge>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Built for specialists, <GradientText>by specialists</GradientText>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          We don't do "general." Each of our 11 clinical specialties features a workflow designed by doctors in that field.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {SPECIALTIES.map((spec) => {
          const Icon = spec.icon;
          return (
            <Link
              key={spec.slug}
              to={`/specialties/${spec.slug}`}
              className="group relative flex flex-col items-center text-center p-5 rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-sm
                hover:border-white/15 hover:bg-slate-800/40 hover:-translate-y-1
                transition-all duration-300"
            >
              {/* Icon container */}
              <div className="relative mb-4">
                <div className={`w-12 h-12 rounded-xl ${spec.bg} border ${spec.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${spec.color}`} />
                </div>
                {/* Glow on hover */}
                <div className={`absolute inset-0 ${spec.glow} rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
              </div>

              <h3 className={`text-sm font-bold text-slate-100 group-hover:${spec.color} transition-colors duration-200 mb-1.5`}>
                {spec.name}
              </h3>
              <p className="text-[11px] text-slate-500 leading-tight mb-3">
                {spec.desc}
              </p>

              {/* Explore arrow — reveals on hover */}
              <span className={`flex items-center gap-1 text-[11px] font-semibold ${spec.color} opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200`}>
                Explore <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          );
        })}

        {/* "View All" tile — XL only */}
        <Link
          to="/specialties/dermatology"
          className="hidden xl:flex flex-col items-center justify-center p-6 rounded-2xl bg-brand-purple/10 border border-brand-purple/20 hover:bg-brand-purple/20 hover:border-brand-purple/40 hover:-translate-y-1 transition-all duration-300 group text-center"
        >
          <span className="text-xs font-bold text-white block mb-1">View All</span>
          <span className="text-[10px] text-brand-purple-light font-bold uppercase tracking-widest">Specialties</span>
          <ArrowRight className="w-4 h-4 text-brand-purple-light mt-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Section>
  );
}
