import { motion } from "framer-motion";
import { BarChart3, PieChart, TrendingUp, Search, Layers, Lightbulb, LineChart } from "lucide-react";
import { SolutionHero } from "../../../components/ui/SolutionHero";
import { FeatureParallax } from "../../../components/ui/FeatureParallax";
import { Section } from "../../../components/ui/Section";
import { Badge } from "../../../components/ui/Badge";
import { SEO } from "../../../components/ui/SEO";

const ANALYTICS_FEATURES = [
  {
    title: "Administrative Analytics",
    description: "Track visit volume trends, code distribution, and patient follow-up patterns. Identify high-risk patients who might have been lost to follow-up.",
    icon: Search,
    color: "text-blue-500",
    href: "/what-we-do/analytics#four-types"
  },
  {
    title: "Provider Benchmarking",
    description: "Analyze E&M distribution and track clinical outcomes across your entire provider network. See how your practice performs against industry standards.",
    icon: LineChart,
    color: "text-brand-purple",
    href: "/who-we-are/about"
  },
  {
    title: "Financial Intelligence",
    description: "Spot reimbursement trends before they affect cash flow. View charges, payments, and adjustments by payer group and track A/R month-over-month.",
    icon: TrendingUp,
    color: "text-emerald-500",
    href: "/what-we-do/rcm"
  }
];

export function AnalyticsPage() {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Healthcare EHR Analytics & Data Solutions | ModMed" 
        description="Unlock actionable insights with ModMed healthcare analytics. Empower your specialty practice with descriptive, diagnostic, predictive, and prescriptive data."
      />

      <SolutionHero 
        badge="Data intelligence"
        title="Turn your data into decisions."
        description="Rather than limiting you to basic metrics, our structured data approach gives you comprehensive analytical tools to reveal valuable answers."
        icon={BarChart3}
        primaryCTA={{ title: "Book a Demo", url: "/contact" }}
      />

      {/* Main Features */}
      <div className="py-24">
        {ANALYTICS_FEATURES.map((f, idx) => (
          <FeatureParallax 
            key={f.title}
            {...f}
            index={idx}
            reverse={idx % 2 === 1}
          />
        ))}
      </div>

      {/* The Four Analytics Types */}
      <Section className="bg-slate-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="text-center mb-24 max-w-2xl mx-auto">
              <Badge variant="brand" className="mb-4 uppercase tracking-[0.2em] font-black italic">Four Levels of Insight</Badge>
              <h2 className="text-5xl font-black text-slate-950 tracking-tighter mb-8 leading-tight italic">From Insight to Action.</h2>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Descriptive", icon: Layers, q: "What happened?", desc: "Monthly visit volume and basic clinical reports." },
                { label: "Diagnostic", icon: Search, q: "Why did it happen?", desc: "Analyze increased denial rates or scheduling gaps." },
                { label: "Predictive", icon: TrendingUp, q: "What is likely to happen?", desc: "Forecasting no-show rates and seasonal trends." },
                { label: "Prescriptive", icon: Lightbulb, q: "What should we do?", desc: "Optimizing treatment paths for patient outcomes." },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-8 bg-white rounded-3xl border border-slate-200/60 shadow-sm flex flex-col items-center text-center transition-all duration-300"
                >
                   <div className="w-16 h-16 rounded-[22px] bg-brand-purple/5 flex items-center justify-center mb-6 text-brand-purple">
                      <item.icon className="w-7 h-7" />
                   </div>
                   <h3 className="text-xl font-black text-slate-950 mb-2 italic tracking-tight">{item.label}</h3>
                   <div className="text-[10px] font-black uppercase text-brand-purple italic mb-4 tracking-widest">{item.q}</div>
                   <p className="text-slate-400 text-sm font-medium leading-relaxed italic">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </Section>

      {/* Actionable Benchmark Hero */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="bg-slate-950 rounded-[64px] p-16 relative overflow-hidden text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(80,45,127,0.15),transparent)] pointer-events-none" />
              <div className="lg:w-1/2">
                 <h3 className="text-5xl font-black text-white mb-8 tracking-tighter leading-tight italic">Benchmarks that matter.</h3>
                 <p className="text-slate-400 text-lg font-medium leading-relaxed mb-10 italic">
                   Track your practice against 35,000+ providers. Real-world insights directly from the clinical data hub.
                 </p>
                 <div className="flex gap-4 items-center justify-center lg:justify-start">
                   <PieChart className="w-12 h-12 text-brand-purple-light" />
                   <div className="text-slate-500 font-bold text-[10px] tracking-widest uppercase">750M Encounters Trained Analytics</div>
                 </div>
              </div>
              <div className="lg:w-1/2 w-full flex items-center justify-center">
                 <div className="w-full aspect-square bg-white rounded-[40px] shadow-2xl relative p-12 overflow-hidden bg-linear-to-br from-white to-slate-50">
                    <BarChart3 className="w-48 h-48 text-brand-purple/5" />
                    <div className="absolute inset-24 border-8 border-brand-purple/10 rounded-full animate-spin duration-[20s]" />
                 </div>
              </div>
           </div>
        </div>
      </Section>
    </div>
  );
}
