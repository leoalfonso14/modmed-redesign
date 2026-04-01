import { motion } from "framer-motion";
import { Activity, Calendar, Users, Wallet, Zap, ShieldCheck } from "lucide-react";
import { SolutionHero } from "../../../components/ui/SolutionHero";
import { FeatureParallax } from "../../../components/ui/FeatureParallax";
import { Section } from "../../../components/ui/Section";
import { Badge } from "../../../components/ui/Badge";
import { SEO } from "../../../components/ui/SEO";

const PM_FEATURES = [
  {
    title: "Adaptive Scheduling",
    description: "Automated appointment finders, patient self-scheduling, and waitlist automation designed to keep your clinical team moving at peak velocity.",
    icon: Calendar,
    color: "text-blue-500",
    href: "/what-we-do/patient-experience"
  },
  {
    title: "Seamless Patient Intake",
    description: "Transform your front office with mobile check-in, iPad-based kiosks, and automated insurance eligibility verification. Reduce wait times by up to 30%.",
    icon: Users,
    color: "text-brand-purple",
    href: "/what-we-do/patient-experience#features"
  },
  {
    title: "Financial Price Transparency",
    description: "Improve the patient experience with clear, upfront out-of-pocket cost estimates and integrated quoting tools that simplify the financial journey.",
    icon: Wallet,
    color: "text-emerald-500",
    href: "/what-we-do/payment-processing"
  }
];

export function PracticeManagementPage() {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="AI-Powered Practice Management Software | ModMed" 
        description="Streamline patient scheduling, medical billing, and office flow with ModMed Practice Management software. Designed for high-volume specialty practices."
      />

      <SolutionHero 
        badge="Operations & Workflow"
        title="Reimagine your practice operations."
        description="Streamline patient scheduling, billing, and engagement with AI-powered practice management software designed to automate the administrative burden."
        icon={Activity}
      />

      {/* Main Features */}
      <div className="py-24">
        {PM_FEATURES.map((f, idx) => (
          <FeatureParallax 
            key={f.title}
            {...f}
            index={idx}
            reverse={idx % 2 === 1}
          />
        ))}
      </div>

      {/* Stats Section */}
      <Section className="bg-indigo-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(80,45,127,0.1),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -30 }} 
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <Badge className="bg-white/10 text-white border-white/20 mb-8 font-black tracking-widest italic">Operational Alpha</Badge>
                <h2 className="text-5xl font-black mb-8 tracking-tighter leading-tight italic">
                   98% First-Pass <br /> 
                   <span className="text-brand-purple-light underline decoration-emerald-500">Claim Acceptance.</span>
                </h2>
                <p className="text-slate-400 text-lg font-medium leading-relaxed mb-10">
                   Our integrated billing systems and real-time scrubbing engine ensure you collect more of what you earn, faster.
                </p>
                <div className="flex gap-4">
                   <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-emerald-400">
                            <ShieldCheck className="w-5 h-5" />
                         </div>
                         <div className="text-xs font-black uppercase tracking-widest">Automated Eligibility</div>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400">
                            <Zap className="w-5 h-5" />
                         </div>
                         <div className="text-xs font-black uppercase tracking-widest">Real-time Scheduling</div>
                      </div>
                   </div>
                </div>
             </motion.div>
             <div className="relative">
                <div className="aspect-square bg-white shadow-2xl rounded-[48px] overflow-hidden p-8 flex items-center justify-center bg-linear-to-br from-white to-slate-50">
                    <Activity className="w-32 h-32 text-slate-100" />
                    <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-1 bg-brand-purple/20 rounded-full animate-pulse" />
                </div>
             </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
