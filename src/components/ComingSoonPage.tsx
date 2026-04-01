import { Link } from 'react-router-dom';
import { Construction, ArrowLeft, CalendarDays } from 'lucide-react';
import { Section } from './ui/Section';
import { Badge } from './ui/Badge';
import { GlassPanel } from './ui/GlassPanel';

interface ComingSoonPageProps {
  title: string;
  description?: string;
  badge?: string;
}

/**
 * Placeholder layout for routes not yet implemented.
 * Replace with the real page once built — see COMPONENT_MAP.md.
 */
export function ComingSoonPage({
  title,
  description = 'This page is being designed with care. Check back soon.',
  badge = 'Coming Soon',
}: ComingSoonPageProps) {
  return (
    <Section className="min-h-[85vh] flex items-center justify-center text-center py-40 overflow-hidden bg-white">
      <div className="max-w-xl mx-auto">
        <Badge variant="brand" className="mb-6 mx-auto w-fit">
          {badge}
        </Badge>

        <div className="mb-6 flex items-center justify-center">
          <GlassPanel padding="sm" className="w-20 h-20 flex items-center justify-center rounded-2xl border-brand-purple/30">
            <Construction className="w-9 h-9 text-brand-purple-light" />
          </GlassPanel>
        </div>

        <h1 className="text-4xl sm:text-7xl font-black text-slate-950 mb-6 leading-tight tracking-tight">
          {title}
        </h1>

        <p className="text-slate-600 text-lg leading-relaxed mb-12 font-medium max-w-lg mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-purple hover:bg-brand-purple-light text-white rounded-full font-semibold text-sm transition-all shadow-[0_0_15px_rgba(80,45,127,0.5)] hover:shadow-[0_0_25px_rgba(106,60,168,0.7)] transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-900 rounded-full font-bold text-sm transition-all border border-slate-200 hover:border-slate-300 shadow-sm hover:-translate-y-0.5"
          >
            <CalendarDays className="w-4 h-4 text-brand-purple" /> Book a Demo
          </Link>
        </div>
      </div>
    </Section>
  );
}
