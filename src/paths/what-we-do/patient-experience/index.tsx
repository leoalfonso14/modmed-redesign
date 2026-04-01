import { motion } from "framer-motion";
import { MessageSquare, Heart, Users, CalendarDays, Smartphone, Share2, Sparkles } from "lucide-react";
import { SolutionHero } from "../../../components/ui/SolutionHero";
import { FeatureParallax } from "../../../components/ui/FeatureParallax";
import { Section } from "../../../components/ui/Section";
import { Badge } from "../../../components/ui/Badge";
import { SEO } from "../../../components/ui/SEO";

const PATIENT_FEATURES = [
  {
    title: "Patient Engagement Portal",
    description: "Provide patients with direct access to their health records, scheduling, and results. A mobile-first experience that drives retention and satisfaction.",
    icon: Smartphone,
    color: "text-rose-500",
    href: "/contact"
  },
  {
    title: "Seamless Communication",
    description: "Connect with patients via SMS, email, and secure messaging. Reduce phone tag and keep your patients informed at every step of their journey.",
    icon: MessageSquare,
    color: "text-blue-500",
    href: "/contact"
  },
  {
    title: "ModMed AMP (Marketing)",
    description: "Build your practice's online reputation with automated social media, SEO, and reviews management. Attract the right patients at the right time.",
    icon: Share2,
    color: "text-brand-purple",
    href: "/who-we-are/about"
  }
];

export function PatientExperiencePage() {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Patient Experience & Engagement Software | ModMed" 
        description="Empower your medical patients with modern engagement tools. Portals, messaging, kiosks, and marketing solutions designed for specialty practices."
      />

      <SolutionHero 
        badge="Patient Connection"
        title="Empower your patient community."
        description="Simplify communication and build stronger relationships with patients through modern, digital experiences that put them in the driver's seat of their care."
        icon={Heart}
        primaryCTA={{ title: "Book a Demo", url: "/contact" }}
      />

      {/* Main Features */}
      <div className="py-12 md:py-24">
        {PATIENT_FEATURES.map((f, idx) => (
          <FeatureParallax 
            key={f.title}
            {...f}
            index={idx}
            reverse={idx % 2 === 1}
          />
        ))}
      </div>

      {/* Connection & Presence Hero */}
      <Section className="bg-rose-50 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-rose-500/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
         <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <Badge variant="brand" className="mb-8 uppercase tracking-[0.2em] font-black italic">Patient-Centric Growth</Badge>
                <h2 className="text-5xl font-black text-slate-950 mb-8 tracking-tighter leading-tight italic">
                  Be present with your patients, <br /> 
                  <span className="text-rose-500 underline decoration-brand-purple-glow underline-offset-12">wherever they are.</span>
                </h2>
                <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12 italic">
                  From first interest to follow-up, our patient experience tools ensure your brand and clinical excellence are always top-of-mind.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                   <div className="p-6 bg-white rounded-3xl border border-rose-100 shadow-sm transition-transform hover:-translate-y-1">
                      <CalendarDays className="w-8 h-8 text-rose-500 mb-4" />
                      <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-tight">Patient Self-Scheduling</div>
                   </div>
                   <div className="p-6 bg-white rounded-3xl border-rose-100 shadow-sm transition-transform hover:-translate-y-1">
                      <Sparkles className="w-8 h-8 text-brand-purple mb-4" />
                      <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-tight">Reputation AI</div>
                   </div>
                </div>
             </motion.div>
             <div className="relative">
                <div className="w-full aspect-square bg-white rounded-[64px] shadow-2xl border border-rose-100 p-12 relative flex items-center justify-center overflow-hidden">
                    <Users className="w-32 h-32 text-rose-100" />
                    <div className="absolute inset-0 bg-linear-to-br from-rose-500/5 to-transparent" />
                </div>
             </div>
           </div>
         </div>
      </Section>
    </div>
  );
}
