import { Section } from './ui/Section';

export function Stats() {
  const stats = [
    { label: "Updates per year", value: "1,500+" },
    { label: "KLAS Rated", value: "#1" },
    { label: "Customer Retention", value: "98%" },
    { label: "Faster Charting", value: "2x" }
  ];

  return (
    <Section className="border-y border-white/5 bg-brand-purple-dark/5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
        {stats.map((stat, i) => (
          <div key={i} className="px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-slate-400 uppercase tracking-wide font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
