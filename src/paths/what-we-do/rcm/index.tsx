import { motion } from "framer-motion";
import {
  DollarSign,
  ShieldAlert,
  BarChart3,
  TrendingUp,
  HeartHandshake,
  CheckCircle,
} from "lucide-react";
import { SolutionHero } from "../../../components/ui/SolutionHero";
import { FeatureParallax } from "../../../components/ui/FeatureParallax";
import { Section } from "../../../components/ui/Section";
import { Badge } from "../../../components/ui/Badge";
import { SEO } from "../../../components/ui/SEO";

const RCM_FEATURES = [
  {
    title: "Specialized Billing Experts",
    description:
      "Our dedicated billing teams and certified coders handle your collections, claims, and denials, so you can spend more time with patients.",
    icon: HeartHandshake,
    color: "text-emerald-500",
    href: "/contact",
  },
  {
    title: "Integrated Claim Scrubbing",
    description:
      "Our PM integration identifies errors before you submit, leading to 98% first-pass claim acceptance and accelerated cash flow.",
    icon: CheckCircle,
    color: "text-brand-purple",
    href: "/what-we-do/analytics",
  },
  {
    title: "Transparent Dashboards",
    description:
      "Real-time visibility into your revenue cycle. Track collections, A/R aging, and payer performance down to the individual encounter.",
    icon: BarChart3,
    color: "text-blue-500",
    href: "/what-we-do/analytics#four-types",
  },
];

export function RCMPage() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Revenue Cycle Management (RCM) Services | ModMed"
        description="Maximize your medical billing efficiency and collections with ModMed RCM services. Expert billing teams and technology for specialty practices."
      />

      <SolutionHero
        badge="Financial Performance"
        title="Restore your practice's financial health."
        description="Every year, US doctors lose an estimated $125 billion in revenue. Our RCM services and billing software help you recover what's yours."
        icon={DollarSign}
        primaryCTA={{ title: "Get a Billing Audit", url: "/contact" }}
        secondaryCTA={{ title: "Watch Video", url: "/contact" }}
      />

      {/* Main Features */}
      <div className="py-24">
        {RCM_FEATURES.map((f, idx) => (
          <FeatureParallax
            key={f.title}
            {...f}
            index={idx}
            reverse={idx % 2 === 1}
          />
        ))}
      </div>

      {/* High-Impact Logic Section */}
      <Section className="bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(16,185,129,0.1),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2">
              <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-8 font-black tracking-widest italic uppercase">
                Revenue Recovery
              </Badge>
              <h2 className="text-5xl font-black mb-8 tracking-tighter leading-tight italic">
                Don't let $125 billion <br />
                <span className="text-emerald-500 underline decoration-white/20 underline-offset-8">
                  stay on the table.
                </span>
              </h2>
              <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12">
                Medical billing is becoming more complex, but it shouldn't be
                your burden. Our RCM specialists become an extension of your
                team.
              </p>
              <div className="space-y-6">
                {[
                  "Net Collection Ratio Benchmarking",
                  "Days Sales Outstanding (DSO) Reduction",
                  "Advanced Aged A/R Recovery",
                ].map((item) => (
                  <div key={item} className="flex gap-4 items-start">
                    <TrendingUp className="w-5 h-5 text-emerald-500 mt-1" />
                    <span className="text-slate-300 font-bold uppercase text-xs tracking-widest leading-loose">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              whileHover={{ translateY: -10 }}
              className="lg:w-1/2 w-full p-12 bg-white rounded-[40px] shadow-2xl relative"
            >
              <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                  <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                    Billing Accuracy
                  </div>
                  <div className="text-emerald-500 font-bold">99.9%</div>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                  <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                    Cashflow Improvement
                  </div>
                  <div className="text-brand-purple font-bold">~15%</div>
                </div>
                <div className="h-40 w-full bg-slate-50 rounded-2xl flex items-center justify-center">
                  <ShieldAlert className="w-12 h-12 text-slate-200" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
}
