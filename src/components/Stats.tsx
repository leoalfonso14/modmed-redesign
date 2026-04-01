import { Section } from './ui/Section';
import { ScrollReveal } from './ui/ScrollReveal';

export function Stats() {
  const stats = [
    { label: "Updates per year", value: "1,500+" },
    { label: "KLAS Rated", value: "#1" },
    { label: "Customer Retention", value: "98%" },
    { label: "Faster Charting", value: "2x" }
  ];

  return (
    <Section className="bg-slate-50 border-y border-slate-100 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, i) => (
          <ScrollReveal key={i} variant="fade" delay={i * 0.1}>
            <div className="px-4 relative group">
            <div className="text-4xl md:text-6xl font-black text-slate-950 mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-500">
              {stat.value}
            </div>
            <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black leading-none">
              {stat.label}
            </div>
            {/* Subtle separator for desktop */}
            {i < stats.length - 1 && (
              <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 w-px h-12 bg-slate-200" />
            )}
          </div>
        </ScrollReveal>
      ))}
    </div>
    </Section>
  );
}
