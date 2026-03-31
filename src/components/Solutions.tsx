import { BrainCircuit, Server, BarChart3, ChevronRight } from 'lucide-react';
import { Section } from './ui/Section';
import { GlassPanel } from './ui/GlassPanel';

export function Solutions() {
  const features = [
    {
      title: "Intelligent EHR",
      icon: BrainCircuit,
      color: "bg-brand-purple",
      iconColor: "text-brand-purple-light",
      description: "AI-powered charting that adapts to your style, reducing screen time so you can focus on patient care, not paperwork."
    },
    {
      title: "Practice Management",
      icon: Server,
      color: "bg-blue-500",
      iconColor: "text-blue-400",
      description: "Streamline scheduling, telehealth, patient checking, and office flow with intuitive tools designed for fast-paced clinics."
    },
    {
      title: "Revenue Cycle",
      icon: BarChart3,
      color: "bg-emerald-500",
      iconColor: "text-emerald-400",
      description: "Automate billing, optimize claim submissions, and maximize your profitability with precision analytics and denial management."
    }
  ];

  return (
    <Section id="solutions">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          A complete ecosystem for your practice
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Everything you need to run an efficient, profitable, and
          patient-centric clinic seamlessly integrated into one cloud.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <GlassPanel 
            key={i} 
            hoverable 
            className="group relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${feature.color}/10 rounded-full blur-2xl translate-x-10 -translate-y-10 group-hover:${feature.color}/20 transition-colors`}></div>
            <div className={`w-14 h-14 rounded-2xl ${feature.color}/20 flex items-center justify-center mb-6 ${feature.iconColor} border ${feature.color}/30 group-hover:scale-110 transition-transform`}>
              <feature.icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              {feature.description}
            </p>
            <a
              href="#"
              className={`inline-flex items-center gap-1 text-sm font-semibold ${feature.iconColor} hover:text-white transition-colors`}
            >
              Learn more <ChevronRight className="w-4 h-4" />
            </a>
          </GlassPanel>
        ))}
      </div>
    </Section>
  );
}
