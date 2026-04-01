import { motion } from "framer-motion";
import { CreditCard, Wallet, Smartphone, ShieldCheck, Zap, HandCoins, Activity } from "lucide-react";
import { SolutionHero } from "../../../components/ui/SolutionHero";
import { FeatureParallax } from "../../../components/ui/FeatureParallax";
import { Section } from "../../../components/ui/Section";
import { Badge } from "../../../components/ui/Badge";
import { SEO } from "../../../components/ui/SEO";

const PAYMENT_FEATURES = [
  {
    title: "ModMed Pay",
    description: "Accept payments anywhere, anytime. From the front desk to the patient portal, our integrated payment solution makes it easy for patients to pay their bills.",
    icon: CreditCard,
    color: "text-emerald-500",
    href: "/contact"
  },
  {
    title: "Text-to-Pay & Mobile",
    description: "Meet your patients where they are. Send secure payment links via SMS and allow patients to pay directly from their smartphones in seconds.",
    icon: Smartphone,
    color: "text-blue-500",
    href: "/contact"
  },
  {
    title: "Card on File",
    description: "Securely store patient payment information for faster checkouts and automated recurring payments. Reduce overhead and improve collection rates.",
    icon: Wallet,
    color: "text-brand-purple",
    href: "/what-we-do/rcm"
  }
];

export function PaymentProcessingPage() {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Medical Payment Processing Software | ModMed Pay" 
        description="Simplify patient collections with ModMed Pay. Integrated payment processing, text-to-pay, and card-on-file solutions for medical practices."
      />

      <SolutionHero 
        badge="Financial Convenience"
        title="Secure payments made simple."
        description="Provide your patients with modern, flexible payment options while reducing the administrative burden on your staff. Integrated clinical billing."
        icon={CreditCard}
      />

      {/* Main Features */}
      <div className="py-24">
        {PAYMENT_FEATURES.map((f, idx) => (
          <FeatureParallax 
            key={f.title}
            {...f}
            index={idx}
            reverse={idx % 2 === 1}
          />
        ))}
      </div>

      {/* Security & Trust Section */}
      <Section className="bg-emerald-50 overflow-hidden relative border-y border-emerald-100">
         <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="grid lg:grid-cols-2 gap-24 items-center py-12">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-200 mb-8 font-black tracking-widest italic uppercase">PCI-Compliant Hub</Badge>
                <h2 className="text-5xl font-black text-slate-950 mb-8 tracking-tighter leading-tight italic">
                   Financial security <br /> 
                   <span className="text-emerald-600">at the point of care.</span>
                </h2>
                <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10 italic">
                   Our payment solutions are built with the highest standards of security and compliance, ensuring every transaction is safe and seamless.
                </p>
                <div className="flex gap-4">
                   <div className="p-4 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                      <ShieldCheck className="w-8 h-8 text-emerald-500 mb-2" />
                      <div className="text-[9px] font-black uppercase text-slate-400 tracking-widest leading-tight">PCI-DSS Level 1</div>
                   </div>
                   <div className="p-4 bg-white rounded-2xl border border-emerald-100 shadow-sm text-brand-purple">
                      <Zap className="w-8 h-8 text-brand-purple mb-2" />
                      <div className="text-[9px] font-black uppercase text-slate-400 tracking-widest leading-tight">Rapid Settlement</div>
                   </div>
                </div>
             </motion.div>
             <div className="relative">
                <div className="w-full aspect-square bg-white rounded-[64px] shadow-2xl border border-emerald-100 p-12 relative flex items-center justify-center overflow-hidden">
                    <HandCoins className="w-32 h-32 text-emerald-100" />
                    <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent" />
                    <Activity className="absolute bottom-12 right-12 w-12 h-12 text-slate-100 animate-pulse" />
                </div>
             </div>
           </div>
         </div>
      </Section>
    </div>
  );
}
