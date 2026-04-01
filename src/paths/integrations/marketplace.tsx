import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageSquare,
  Calendar,
  Users,
  Zap,
  Bot,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/Badge";
import { GradientText } from "../../components/ui/GradientText";
import { GlassPanel } from "../../components/ui/GlassPanel";
import { SEO } from "../../components/ui/SEO";
import { Button } from "../../components/ui/Button";

const MARKETPLACE_PARTNERS = [
  {
    category: "Patient Experience (AI-Powered)",
    partners: [
      {
        name: "Elise AI",
        desc: "Automated 24/7 patient conversations that handle scheduling and insurance verification with human-like precision.",
        icon: MessageSquare,
        isAI: true,
      },
      {
        name: "Assort Health",
        desc: "AI-first phone automation that integrates directly into EMA to automate incoming patient inquiries.",
        icon: Bot,
        isAI: true,
      },
      {
        name: "NextPatient",
        desc: "Self-service scheduling portal designed for a modern patient experience.",
        icon: Calendar,
        isAI: false,
      },
    ],
  },
  {
    category: "Clinical & Operational",
    partners: [
      {
        name: "Brevium",
        desc: "Data-driven patient reactivation and recall automation.",
        icon: Users,
        isAI: false,
      },
      {
        name: "Kouper Inc.",
        desc: "Specialized optical and clinical imaging workflow integration.",
        icon: Zap,
        isAI: false,
      },
    ],
  },
];

export function MarketplacePage() {
  return (
    <div className="min-h-screen bg-[#FCFCFD] pt-24 pb-12 md:pt-32 md:pb-24 relative overflow-hidden">
      <SEO
        title="synapSYS Marketplace | Clinical Ecosystem"
        description="Browse featured partners in the ModMed synapSYS Marketplace. Scale your practice with AI-powered patient engagement and clinical tools."
      />

      {/* ── Background Glow ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* ── Header ── */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Badge className="mb-6">ModMed synapSYS®</Badge>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-950 mb-6 tracking-tight">
              A marketplace for the <br />
              <GradientText>modern practice.</GradientText>
            </h1>
            <p className="text-slate-500 text-lg font-medium max-w-2xl leading-relaxed">
              Don't compromise on your workflow. Choose from dozens of vetted
              partners that integrate directly with EMA and gGastro.
            </p>
          </motion.div>
        </div>

        {/* ── Marketplace Grid ── */}
        <div className="space-y-20">
          {MARKETPLACE_PARTNERS.map((cat) => (
            <div key={cat.category}>
              <div className="flex items-center gap-4 mb-10">
                <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">
                  {cat.category}
                </h2>
                <div className="h-px bg-slate-100 flex-1" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.partners.map((partner, pIdx) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: pIdx * 0.1 }}
                  >
                    <GlassPanel
                      className={`h-full p-8 border-slate-200 transition-all duration-500 relative group overflow-hidden ${partner.isAI ? "hover:border-brand-purple/40 hover:shadow-[0_0_40px_rgba(80,45,127,0.1)]" : "hover:border-slate-300"}`}
                    >
                      {/* AI Background Effects */}
                      {partner.isAI && (
                        <div className="absolute top-0 right-0 p-2">
                          <div className="px-2 py-1 bg-brand-purple/10 text-brand-purple-light text-[9px] font-black uppercase tracking-widest rounded-md border border-brand-purple/20 animate-pulse">
                            AI Powered
                          </div>
                        </div>
                      )}

                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 ${partner.isAI ? "bg-brand-purple/10 text-brand-purple" : "bg-slate-100 text-slate-400"}`}
                      >
                        <partner.icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-xl font-black text-slate-950 mb-3 tracking-tight group-hover:text-brand-purple transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                        {partner.desc}
                      </p>

                      <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest group-hover:text-brand-purple transition-colors">
                        Learn More{" "}
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>

                      {/* Cooler Animation for AI Partners */}
                      {partner.isAI && (
                        <motion.div
                          animate={{
                            left: ["-100%", "200%"],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 3,
                            ease: "linear",
                          }}
                          className="absolute bottom-0 left-0 h-0.5 w-[20%] bg-linear-to-r from-transparent via-brand-purple-light to-transparent opacity-50"
                        />
                      )}
                    </GlassPanel>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Feature Block: Scribe 2.0 Integration ── */}
        <section className="mt-32">
          <GlassPanel className="bg-slate-950 border-white/10 p-12 overflow-hidden relative group">
            <div className="absolute right-0 top-0 w-1/3 h-full bg-linear-to-l from-brand-purple/20 to-transparent pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-brand-purple/20 text-brand-purple-light border-brand-purple/30 mb-6">
                  Partner Integration
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                  Experience the synergy of <br />
                  <span className="text-brand-purple-light italic">
                    Scribe 2.0 + Marketplace AI
                  </span>
                </h2>
                <p className="text-slate-400 text-lg font-medium leading-relaxed mb-8">
                  Connect Scribe 2.0 with automated intake partners to build a
                  documentation-free practice flow. Data moves from the patient
                  to the note, and to the partner apps, with unmatched speed.
                </p>
                <Link to="/integrations/api">
                  <Button
                    variant="glass"
                    className="border-white/20 hover:border-white/40"
                  >
                    View Developer Docs
                  </Button>
                </Link>
              </div>

              <div className="relative h-64 flex items-center justify-center">
                <div className="absolute inset-0 bg-brand-purple/20 rounded-full blur-[80px]" />
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{ repeat: Infinity, duration: 5 }}
                  className="w-40 h-40 bg-white/5 border border-white/20 backdrop-blur-xl rounded-[32px] flex items-center justify-center relative z-10"
                >
                  <div className="text-center">
                    <Zap className="w-10 h-10 text-brand-purple-light mx-auto mb-3 drop-shadow-[0_0_15px_rgba(80,45,127,1)]" />
                    <div className="text-[10px] font-black text-white/50 uppercase tracking-widest leading-none">
                      Syncing Hub
                    </div>
                  </div>
                </motion.div>

                {/* Visual "data lines" */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      x: [-40, 240],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      delay: i * 0.6,
                    }}
                    className="absolute h-px w-20 bg-brand-purple-light"
                    style={{ top: `${30 + i * 20}%`, left: "10%" }}
                  />
                ))}
              </div>
            </div>
          </GlassPanel>
        </section>
      </div>
    </div>
  );
}
