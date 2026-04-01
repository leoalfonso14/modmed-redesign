import { motion } from "framer-motion";
import { Building2, Globe, ShieldCheck, Zap, Users, BarChart3, Star } from "lucide-react";
import { SolutionHero } from "../../../components/ui/SolutionHero";
import { FeatureParallax } from "../../../components/ui/FeatureParallax";
import { Section } from "../../../components/ui/Section";
import { Badge } from "../../../components/ui/Badge";
import { SEO } from "../../../components/ui/SEO";

const ENTERPRISE_FEATURES = [
  {
    title: "Multi-Location Scaling",
    description: "Manage dozens or hundreds of medical locations with centralized control and unified clinical data. Simplify complex operations with ease.",
    icon: Globe,
    color: "text-blue-500",
    href: "/contact"
  },
  {
    title: "Advanced Data Security",
    description: "Enterprise-grade security, logging, and compliance for the most demanding healthcare organizations. Built on a foundation of trust.",
    icon: ShieldCheck,
    color: "text-brand-purple",
    href: "/who-we-are/about"
  },
  {
    title: "High-Volume Performance",
    description: "Our platform is built to handle millions of records and thousands of concurrent users without breaking a sweat. Scale without limits.",
    icon: Zap,
    color: "text-emerald-500",
    href: "/integrations"
  }
];

export function EnterprisePage() {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Enterprise Healthcare IT Solutions | ModMed" 
        description="Scalable clinical and business solutions for large medical organizations and multi-location practices. High-volume EHR, PM, and RCM."
      />

      <SolutionHero 
        badge="Enterprise Strategy"
        title="Solutions for your entire network."
        description="Experience the power of an all-in-one platform built for the scale of modern medical enterprises. Unified, secure, and infinitely scalable."
        icon={Building2}
        primaryCTA="Consult with Enterprise Team"
      />

      {/* Main Features */}
      <div className="py-24">
        {ENTERPRISE_FEATURES.map((f, idx) => (
          <FeatureParallax 
            key={f.title}
            {...f}
            index={idx}
            reverse={idx % 2 === 1}
          />
        ))}
      </div>

      {/* Strategic Partnership Section */}
      <Section className="bg-slate-950 text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_50%,rgba(80,45,127,0.15),transparent)]" />
         <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <Badge className="bg-white/10 text-white border-white/20 mb-8 font-black tracking-widest italic uppercase">Enterprise Excellence</Badge>
                <h2 className="text-5xl font-black mb-8 tracking-tighter leading-tight italic">
                   The architecture of <br /> 
                   <span className="text-brand-purple-light underline decoration-white/10">at-scale healthcare.</span>
                </h2>
                <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12 italic">
                   We partner with major healthcare organizations to deliver streamlined clinical workflows and predictive operational insights across every location.
                </p>
                
                <div className="flex flex-wrap gap-8">
                   <div className="flex flex-col gap-2">
                      <div className="text-3xl font-black text-brand-purple-light">35K+</div>
                      <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-tight">Providers Trust Us</div>
                   </div>
                   <div className="flex flex-col gap-2">
                      <div className="text-3xl font-black text-brand-purple-light">750M</div>
                      <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-tight">Unique Encounters</div>
                   </div>
                   <div className="flex flex-col gap-2">
                      <div className="text-3xl font-black text-brand-purple-light">1.5K+</div>
                      <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-tight">Annual Updates</div>
                   </div>
                </div>
             </motion.div>
             <div className="relative">
                <div className="w-full aspect-square bg-white/5 rounded-[64px] border border-white/5 p-12 relative flex items-center justify-center overflow-hidden backdrop-blur-3xl shadow-2xl">
                    <BarChart3 className="w-32 h-32 text-white/5" />
                    <div className="absolute inset-0 bg-linear-to-br from-brand-purple/10 to-transparent" />
                    <div className="absolute top-12 left-12 p-6 bg-white rounded-3xl border border-slate-100 shadow-2xl flex items-center gap-4 animate-[fadeInUp_1s_ease-out]">
                       <Users className="w-8 h-8 text-brand-purple" />
                       <div>
                          <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active Locations</div>
                          <div className="text-xl font-black text-slate-950 italic">142 Locations</div>
                       </div>
                    </div>
                </div>
             </div>
           </div>
         </div>
      </Section>

      {/* Social Proof */}
      <Section>
         <div className="max-w-4xl mx-auto text-center">
            <Star className="w-16 h-16 text-brand-purple-light mx-auto mb-12" />
            <h3 className="text-4xl font-black text-slate-950 mb-12 tracking-tighter leading-tight italic">
              "Building for a large specialty practice is hard. ModMed made it seem easy. Their platform scale and clinical depth are unmatched."
            </h3>
            <div className="text-brand-purple font-black uppercase text-xs tracking-widest mb-2 italic">Gheorghe Pusta</div>
            <div className="text-slate-400 font-bold italic">CEO, Epiphany Dermatology</div>
         </div>
      </Section>
    </div>
  );
}
