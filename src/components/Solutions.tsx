import { BrainCircuit, Server, MessageSquare, ArrowRight } from "lucide-react";
import { Section } from "./ui/Section";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { ScrollReveal } from "./ui/ScrollReveal";

export function Solutions() {
  const features = [
    {
      title: "Intelligent EHR",
      icon: BrainCircuit,
      color: "text-brand-purple",
      bg: "bg-brand-purple/5",
      border: "border-brand-purple/10",
      description:
        "Practice-specific AI that adapts to your charting style, dramatically reducing screen time.",
      image:
        "https://www.modmed.com/?seraph_accel_gi=wp-content%2Fuploads%2F2025%2F03%2Fcrp-10771-clinical-pillar1b.png&n=Cl9nrqZF5TFWvV4yrbzwQ",
    },
    {
      title: "Practice Management",
      icon: Server,
      color: "text-blue-600",
      bg: "bg-blue-50/50",
      border: "border-blue-100",
      description:
        "Streamline medical billing, scheduling, and office flow with intuitive, automated tools.",
      image:
        "https://www.modmed.com/?seraph_accel_gi=wp-content%2Fuploads%2F2025%2F03%2Fcrp-10771-billing-pillar1.png&n=fLoFNWZmlh6ELtP2OhuHw",
    },
    {
      title: "Patient Experience",
      icon: MessageSquare,
      color: "text-emerald-600",
      bg: "bg-emerald-50/50",
      border: "border-emerald-100",
      description:
        "Transform patient interactions into seamless, digital experiences from check-in to follow-up.",
      image:
        "https://www.modmed.com/?seraph_accel_gi=wp-content%2Fuploads%2F2025%2F03%2Fbox-1.png&n=WpVzbfgsiyV12uTwQIc6Nw",
    },
  ];

  return (
    <Section id="solutions" className="bg-slate-50/50">
      <div className="text-center mb-20 px-4">
        <Badge variant="glow" className="mb-6">
          The Full Ecosystem
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-bold text-slate-950 mb-6 tracking-tight">
          Everything you need in one cloud
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          The only end-to-end platform designed to unify your clinical,
          business, and patient operations into a single source of truth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {features.map((feature, i) => (
          <ScrollReveal
            key={i}
            variant="zoom"
            delay={i * 0.15}
            className="group flex flex-col items-start"
          >
            {/* Visual Container */}
            <div className="relative w-full aspect-4/3 mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm group-hover:shadow-xl transition-all duration-700">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent opacity-40" />

              {/* Floating Icon Badge */}
              <div
                className={`absolute top-6 left-6 w-12 h-12 rounded-2xl ${feature.bg} backdrop-blur-md border ${feature.border} flex items-center justify-center ${feature.color} shadow-sm z-10`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
            </div>

            <h3 className="text-2xl font-black text-slate-950 mb-3 tracking-tight">
              {feature.title}
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
              {feature.description}
            </p>

            <Button
              variant="ghost"
              icon={ArrowRight}
              className={`p-0 h-auto font-black text-xs uppercase tracking-widest ${feature.color} border-0 hover:bg-transparent hover:translate-x-1`}
            >
              Learn more
            </Button>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
