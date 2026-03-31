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
    <Section className="min-h-[80vh] flex items-center justify-center text-center py-40">
      <div className="max-w-xl mx-auto">
        <Badge variant="brand" className="mb-6 mx-auto w-fit">
          {badge}
        </Badge>

        <div className="mb-6 flex items-center justify-center">
          <GlassPanel padding="sm" className="w-20 h-20 flex items-center justify-center rounded-2xl border-brand-purple/30">
            <Construction className="w-9 h-9 text-brand-purple-light" />
          </GlassPanel>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>

        <p className="text-slate-400 text-lg leading-relaxed mb-10">
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
            className="inline-flex items-center gap-2 px-6 py-2.5 glass-panel text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-all border border-slate-700 hover:border-slate-500 hover:-translate-y-0.5"
          >
            <CalendarDays className="w-4 h-4" /> Book a Demo
          </Link>
        </div>
      </div>
    </Section>
  );
}
