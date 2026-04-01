import { motion } from 'framer-motion';
import { LayoutGrid, Beaker, Code2, Network, ArrowRight, Zap, BrainCircuit, Sparkles } from 'lucide-react';
import { Section } from '../../components/ui/Section';
import { Badge } from '../../components/ui/Badge';
import { GradientText } from '../../components/ui/GradientText';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { SEO } from '../../components/ui/SEO';
import { Link } from 'react-router-dom';

const INTEGRATION_TYPES = [
  {
    id: 'marketplace',
    title: 'synapSYS Marketplace',
    description: 'A curated ecosystem of specialized clinical, financial, and operational partners.',
    icon: LayoutGrid,
    color: 'text-brand-purple',
    bg: 'bg-brand-purple/5',
    border: 'border-brand-purple/10',
    path: '/integrations/marketplace',
    partners: ['Elise AI', 'Assort Health', 'NextPatient']
  },
  {
    id: 'labs',
    title: 'Lab Interfaces',
    description: 'Direct EHR-to-lab connectivity with over 1,200 entities for seamless ordering.',
    icon: Beaker,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/5',
    border: 'border-emerald-500/10',
    path: '/integrations/labs'
  },
  {
    id: 'api',
    title: 'Certified FHIR API',
    description: 'Open, standards-based APIs for secure health data exchange and developer innovation.',
    icon: Code2,
    color: 'text-blue-500',
    bg: 'bg-blue-500/5',
    border: 'border-blue-500/10',
    path: '/integrations/api'
  },
  {
    id: 'connections',
    title: 'Network Connections',
    description: 'Nationwide interoperability via Carequality, HIEs, Registries, and PDMPs.',
    icon: Network,
    color: 'text-amber-500',
    bg: 'bg-amber-500/5',
    border: 'border-amber-500/10',
    path: '/integrations/connections'
  }
];

export function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-[#FCFCFD]">
      <SEO 
        title="Clinical Integrations & Partners" 
        description="Expand your practice's capabilities with ModMed's synapSYS ecosystem. From lab interfaces to AI-powered marketplace partners."
      />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="glow" className="mb-6">Clinical Interoperability</Badge>
            <h1 className="text-5xl sm:text-7xl font-black text-slate-950 mb-8 tracking-tighter leading-tight">
              A connected ecosystem <br />
              built for <GradientText>specialty medicine.</GradientText>
            </h1>
            <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
              ModMed synapSYS® bridges the gap between your EHR and the broader healthcare world, 
              automating data flow so you can focus on patient care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Core Pillars Grid ── */}
      <Section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INTEGRATION_TYPES.map((type, idx) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <Link to={type.path}>
                  <GlassPanel className="h-full p-10 hover:border-brand-purple/30 transition-all duration-500 group">
                    <div className="flex items-start justify-between mb-8">
                      <div className={`w-16 h-16 rounded-2xl ${type.bg} border ${type.border} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        <type.icon className={`w-8 h-8 ${type.color}`} />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-brand-purple group-hover:bg-brand-purple/10 transition-all">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-slate-950 mb-4 tracking-tight">{type.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed mb-6">
                      {type.description}
                    </p>

                    {type.partners && (
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {type.partners.map(p => (
                          <span key={p} className="px-3 py-1 bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest rounded-md border border-slate-100">
                            {p}
                          </span>
                        ))}
                      </div>
                    )}
                  </GlassPanel>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── AI Integration Spotlight ── */}
      <Section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(80,45,127,0.15),transparent)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-brand-purple/20 text-brand-purple-light border-brand-purple/30 mb-6 font-bold uppercase tracking-widest">
                <Sparkles className="w-3 h-3 mr-2" /> AI-Native Interoperability
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 tracking-tight leading-tight">
                Integrations powered by <br />
                <span className="text-brand-purple-light">Responsible AI.</span>
              </h2>
              <p className="text-slate-400 text-lg font-medium leading-relaxed mb-10">
                Our ecosystem isn't just about moving data—it's about understanding it. 
                With **Scribe 2.0** and our AI marketplace partners, we're building the first 
                truly autonomous clinical backend.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: BrainCircuit, title: 'Intelligent Data Mapping', desc: 'AI-driven HL7 translations that understand clinical context.' },
                  { icon: Zap, title: 'Automated Exception Handling', desc: 'Predictive tools that flag and resolve missing data before it hits your workflow.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-brand-purple-light" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-md mx-auto lg:ml-auto"
            >
              {/* Specialized AI Animation container */}
              <div className="absolute inset-0 bg-brand-purple/20 rounded-full blur-[100px] animate-pulse" />
              <div className="relative z-10 w-full h-full border border-white/10 rounded-[40px] bg-white/5 backdrop-blur-3xl overflow-hidden flex items-center justify-center">
                 <div className="flex flex-col items-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ repeat: Infinity, duration: 4 }}
                      className="w-24 h-24 bg-brand-purple rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(80,45,127,0.5)] mb-6"
                    >
                      <BrainCircuit className="w-12 h-12 text-white" />
                    </motion.div>
                    <div className="text-center">
                      <div className="text-white font-black text-xl mb-1 tracking-tight">Scribe 2.0 Engine</div>
                      <div className="text-brand-purple-light text-xs font-black uppercase tracking-widest">Active Data Sync</div>
                    </div>
                 </div>
                 
                 {/* Decorative "data particles" */}
                 {[...Array(6)].map((_, i) => (
                   <motion.div
                     key={i}
                     animate={{ 
                       y: [-20, 20, -20],
                       opacity: [0.2, 0.5, 0.2]
                     }}
                     transition={{ repeat: Infinity, duration: 3 + i, delay: i * 0.5 }}
                     className="absolute w-1 h-1 bg-white rounded-full"
                     style={{ 
                       top: `${20 + i * 15}%`, 
                       left: `${15 + (i % 3) * 35}%` 
                     }}
                   />
                 ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
}
