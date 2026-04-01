import { motion } from "framer-motion";
import { Layout, BrainCircuit, Activity, Zap, ShieldCheck } from "lucide-react";
import { SolutionHero } from "../../../components/ui/SolutionHero";
import { FeatureParallax } from "../../../components/ui/FeatureParallax";
import { Section } from "../../../components/ui/Section";
import { Badge } from "../../../components/ui/Badge";
import { SEO } from "../../../components/ui/SEO";

const FEATURES = [
  {
    title: "AI-Powered Documentation",
    description: "Our adaptive learning engine understands how you practice, suggesting documentation and ICD-10 codes in real-time. Chart 2x faster than traditional EHRs.",
    icon: BrainCircuit,
    color: "text-brand-purple",
    href: "/solutions/ai/scribe"
  },
  {
    title: "Specialty-Specific Workflows",
    description: "Built by doctors in 11 deep specialties. No more fighting generic templates. Everything is designed for the way your exams actually flow.",
    icon: Layout,
    color: "text-blue-500",
    href: "/what-we-do/ehr#specialty-workflows"
  },
  {
    title: "Integrated MIPS & Analytics",
    description: "Track your performance and clinical goals automatically. Zero extra steps for compliance. We've built MIPS directly into the clinical encounter.",
    icon: Activity,
    color: "text-emerald-500",
    href: "/what-we-do/analytics"
  }
];

export function EHRPage() {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Specialty-Specific EHR Software | ModMed" 
        description="Experience the future of clinical documentation with our specialty-specific EHR. Built by doctors, for doctors, to help you chart faster and focus on what matters."
      />

      <SolutionHero 
        badge="Electronic Health Records"
        title="EHR built for the way you practice."
        description="Innovation has always been at the core of what ModMed® does. We're building well-trained, specialty-specific AI solutions to help solve the clinical drudgery."
        icon={Layout}
        primaryCTA={{ title: "Book a Demo", url: "/contact" }}
      />

      {/* Main Features */}
      <div id="features" className="py-24">
        {FEATURES.map((f, idx) => (
          <FeatureParallax 
            key={f.title}
            {...f}
            index={idx}
            reverse={idx % 2 === 1}
          />
        ))}
      </div>

      {/* Trust / Stats Section */}
      <Section id="stats" className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <Badge variant="brand" className="mb-4 uppercase tracking-[0.2em] font-black italic">Verified Results</Badge>
             <h2 className="text-4xl font-black text-slate-950 tracking-tight">The #1 Specialty-Specific EMR.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "KLAS Rating", value: "#1", sub: "Integrated EHR, PM and RCM" },
              { label: "Charting speed", value: "2X", sub: "Faster than generic systems" },
              { label: "Clinician Satisfaction", value: "94%", sub: "Product moving in right direction" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm text-center group hover:border-brand-purple/20 transition-all duration-500"
              >
                <div className="text-5xl font-black text-brand-purple mb-4 group-hover:scale-110 transition-transform">{stat.value}</div>
                <div className="text-slate-950 font-black uppercase text-xs tracking-widest mb-1">{stat.label}</div>
                <div className="text-slate-500 text-sm font-medium">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Specialty-Specific Highlight (AI Forward) */}
      <Section id="specialty-workflows" className="bg-slate-100 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-purple-dark/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
         <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div>
                <h3 className="text-5xl font-black text-slate-950 mb-8 tracking-tighter leading-tight italic">
                  EHR that understands <br /> 
                  <span className="text-brand-purple">how you practice.</span>
                </h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
                  Our system learns your protocols, remembers your preferences, and predicts your next clinical action. 
                  It's not just a digital record—it's a clinical collaborator.
                </p>
                <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                      <Zap className="w-6 h-6 text-brand-purple animate-pulse" />
                   </div>
                   <div>
                      <div className="text-slate-900 font-bold mb-1">Adaptive Learning Interface</div>
                      <div className="text-slate-500 text-sm">Charting that evolves as your practice does.</div>
                   </div>
                </div>
             </div>
             <motion.div 
               whileHover={{ scale: 1.05, rotate: -2 }}
               className="relative"
             >
                <div className="w-full aspect-square bg-white rounded-[64px] shadow-2xl border border-slate-200 p-12 relative overflow-hidden flex items-center justify-center">
                    <ShieldCheck className="w-48 h-48 text-brand-purple/10" />
                    <div className="absolute inset-0 bg-linear-to-br from-brand-purple/5 to-transparent" />
                </div>
             </motion.div>
           </div>
         </div>
      </Section>
    </div>
  );
}
