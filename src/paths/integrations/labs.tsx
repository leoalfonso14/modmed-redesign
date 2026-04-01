import { motion } from 'framer-motion';
import { Beaker, Tag, CheckCircle2, FlaskConical, Database, Layers, Network } from 'lucide-react';
import { Section } from '../../components/ui/Section';
import { Badge } from '../../components/ui/Badge';
import { GradientText } from '../../components/ui/GradientText';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { SEO } from '../../components/ui/SEO';

const LAB_FEATURES = [
  {
    title: 'Precision Network',
    desc: 'Direct connection to over 1,200 global lab entities for seamless EHR ordering and automatic result delivery.',
    icon: Network,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  },
  {
    title: 'Pathology Sync',
    desc: 'A paperless, specialized module designed to handle intricate reference and in-house lab clinical flows.',
    icon: Layers,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'Direct-to-Specimen',
    desc: 'Print labels immediately at the point of care, reducing transcription errors and specimen mix-ups.',
    icon: Tag,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10'
  },
  {
    title: 'Clinical Accuracy',
    desc: 'Automated data validation ensures clinical context travels with the order—limiting callbacks.',
    icon: CheckCircle2,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  }
];

export function LabsPage() {
  return (
    <div className="min-h-screen bg-[#FCFCFD] pt-32 pb-24 relative overflow-hidden">
      <SEO 
        title="Lab Interfaces & Diagnostics | ModMed Connectivity" 
        description="Streamline diagnostics with direct EHR-to-lab connectivity. Order tests, track specimen, and receive results directly in EMA."
      />

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-6 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">Diagnostic Excellence</Badge>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-950 mb-8 tracking-tight leading-tight">
              A Direct Pipeline to <br />
              <GradientText>1,200+ Labs.</GradientText>
            </h1>
            <p className="text-slate-500 text-xl font-medium leading-relaxed">
              No more manual entries. We bridge the gap between clinical intent 
              and diagnostic action.
            </p>
          </motion.div>
        </div>

        {/* ── Visual Connectivity Graphic ── */}
        <section className="mb-32 relative">
           <GlassPanel className="p-16 bg-white/40 backdrop-blur-2xl border-slate-200 overflow-hidden relative group">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                 <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-emerald-100 rounded-3xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                       <Database className="w-10 h-10 text-emerald-600" />
                    </div>
                    <div className="text-sm font-black text-slate-950 uppercase tracking-widest">EMA EHR</div>
                 </div>

                 {/* Animated data flow */}
                 <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="h-0.5 w-full bg-slate-100 relative overflow-hidden">
                       <motion.div
                         animate={{ 
                           left: ['-50%', '150%']
                         }}
                         transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                         className="absolute w-[50%] h-full bg-linear-to-r from-transparent via-emerald-600 to-transparent"
                       />
                       <motion.div
                         animate={{ 
                           left: ['150%', '-50%']
                         }}
                         transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                         className="absolute w-[50%] h-full bg-linear-to-r from-transparent via-blue-500 to-transparent"
                       />
                    </div>
                    <div className="mt-4 flex gap-4">
                       <Badge variant="glow" className="text-[9px] uppercase tracking-widest font-black py-0.5 bg-emerald-500/5 border-emerald-500/20 text-emerald-600">e-Orders</Badge>
                       <Badge variant="glow" className="text-[9px] uppercase tracking-widest font-black py-0.5 bg-blue-500/5 border-blue-500/20 text-blue-500">e-Results</Badge>
                    </div>
                 </div>

                 <div className="flex flex-col items-center">
                   <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                       <FlaskConical className="w-10 h-10 text-blue-600" />
                    </div>
                    <div className="text-sm font-black text-slate-950 uppercase tracking-widest">Diagnostic Lab</div>
                 </div>
              </div>
           </GlassPanel>
        </section>

        {/* ── Feature Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {LAB_FEATURES.map((feature, idx) => (
             <motion.div
               key={feature.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
             >
               <GlassPanel className="p-10 h-full hover:border-emerald-500/30 transition-all duration-500">
                  <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
                     {feature.icon && <feature.icon className={`w-7 h-7 ${feature.color}`} />}
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-slate-500 text-lg font-medium leading-relaxed">
                     {feature.desc}
                  </p>
               </GlassPanel>
             </motion.div>
           ))}
        </div>

        {/* ── Pathology Spotlight ── */}
        <Section className="mt-20">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl font-black text-slate-950 mb-6 tracking-tight italic">A module built for <GradientText>Pathologists.</GradientText></h2>
                 <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8">
                    ModMed® Pathology is an award-winning module that integrates with EMA to handle 
                    everything from biopsy tracking to reporting. We make sure the specimen and 
                    the clinical story never lose sync.
                 </p>
                 <div className="flex flex-col gap-4">
                    {[
                       'Automated ICD-10 Coding',
                       'Specimen Label Printing at Point of Care',
                       'In-House Path Lab Management'
                    ].map((p) => (
                       <div key={p} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          <span className="text-sm font-black text-slate-900 uppercase tracking-widest">{p}</span>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="bg-slate-50 rounded-[40px] p-8 border border-slate-200">
                 <div className="aspect-video bg-white rounded-3xl border border-slate-100 shadow-xl p-6 flex items-center justify-center">
                    <div className="text-center">
                       <Beaker className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                       <p className="text-slate-400 font-black uppercase text-[10px] tracking-[.3em]">SynapSYS Lab Hub</p>
                    </div>
                 </div>
              </div>
           </div>
        </Section>
      </div>
    </div>
  );
}

// Fixed missing import for Network in features grid logic if it was not in scope
