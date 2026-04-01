import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Sparkles, Link2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/Badge";
import { GradientText } from "../../components/ui/GradientText";
import { GlassPanel } from "../../components/ui/GlassPanel";
import { SEO } from "../../components/ui/SEO";
import { Button } from "../../components/ui/Button";

const API_FEATURES = [
  {
    title: "FHIR Certified",
    desc: "Standards-based health data exchange using FHIR R4, ensuring compliance with the 21st Century Cures Act.",
    icon: ShieldCheck,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Developer Portal",
    desc: "Comprehensive sandbox environments, interactive documentation, and API keys for rapid prototyping.",
    icon: Terminal,
    color: "text-slate-900",
    bg: "bg-slate-200/50",
  },
];

export function APIPage() {
  return (
    <div className="min-h-screen bg-[#FCFCFD] pt-32 pb-24 relative overflow-hidden">
      <SEO
        title="Developer API Portal | FHIR Interoperability"
        description="Build specialized health apps with ModMed's FHIR-certified APIs. Secure, scalable, and built for modern clinical innovation."
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* ── Background Code Decors ── */}
        <div className="absolute top-20 right-0 w-1/3 text-slate-100 font-mono text-[10px] leading-relaxed select-none pointer-events-none opacity-40">
          {`{
  "resourceType": "Patient",
  "id": "example",
  "active": true,
  "name": [{ "family": "Smith", "given": ["John"] }],
  "gender": "male"
}`}
        </div>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Badge className="mb-6 bg-blue-500/10 text-blue-600 border-blue-500/20">
              ModMed® API Hub
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-950 mb-8 tracking-tight">
              APIs that fuel clinical <br />
              <GradientText>innovation.</GradientText>
            </h1>
            <p className="text-slate-500 text-xl font-medium max-w-2xl leading-relaxed">
              We provide the pipes; you build the future. Connect securely to
              EMA® and gGastro® using our standards-based developer portal.
            </p>
          </motion.div>
        </div>

        {/* ── API Feature Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {API_FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlassPanel className="p-10 h-full hover:border-blue-500/30 transition-all duration-500">
                <div
                  className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}
                >
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-black text-slate-950 mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8">
                  {feature.desc}
                </p>
                <Link to="/integrations/api#code-section">
                  <div className="flex items-center gap-2 text-xs font-black text-blue-600 uppercase tracking-widest">
                    Documentation <Link2 className="w-4 h-4" />
                  </div>
                </Link>
              </GlassPanel>
            </motion.div>
          ))}
        </div>

        {/* ── Interactive Code Mockup Section ── */}
        <section id="code-section" className="bg-slate-950 rounded-[40px] p-12 overflow-hidden relative group">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-6 h-6 text-brand-purple-light" />
                <span className="text-xs font-black text-slate-500 uppercase tracking-[.3em]">
                  SynapSYS Hub Protocol
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-8 leading-tight tracking-tight">
                Bring your AI vision to <br />
                <span className="text-brand-purple-light">ModMed EMA®</span>
              </h2>
              <p className="text-slate-400 text-lg font-medium leading-relaxed mb-10">
                Our API isn't just for data retrieval. It supports **Scribe
                2.0's** dynamic interoperability framework, allowing developers
                to build contextual intelligence that reacts to the clinical
                note in real-time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="white" size="lg">
                    Portal Login
                  </Button>
                </Link>
                <Link to="/integrations/marketplace">
                  <Button variant="glass" size="lg" className="border-white/10">
                    App Registry
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-brand-purple/20 rounded-full blur-[100px] animate-pulse" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden font-mono text-[13px]"
              >
                <div className="bg-white/5 px-6 py-3 border-b border-white/10 flex items-center justify-between">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                    Endpoint: /v1/Patient/Interoperability
                  </span>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                  </div>
                </div>
                <div className="p-8 space-y-2">
                  <div className="text-blue-400">
                    GET{" "}
                    <span className="text-white">
                      https://api.modmed.com/meta/data
                    </span>
                  </div>
                  <div className="text-emerald-400">
                    # Initializing Intelligent Handshake...
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2 }}
                    className="h-1 bg-brand-purple-light/20 rounded-full my-4 relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ left: ["-100%", "100%"] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="absolute inset-0 bg-brand-purple-light w-1/3"
                    />
                  </motion.div>
                  <div className="text-slate-500 font-medium">
                    {`{`} <br />
                    &nbsp;&nbsp;
                    <span className="text-brand-purple-light">
                      "status"
                    </span>:{" "}
                    <span className="text-emerald-400">
                      "SCRIBE_SYNC_ACTIVE"
                    </span>
                    , <br />
                    &nbsp;&nbsp;
                    <span className="text-brand-purple-light">
                      "ai_model"
                    </span>:{" "}
                    <span className="text-white">"EMA-Clinical-L1"</span> <br />
                    {`}`}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
