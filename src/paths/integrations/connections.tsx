import { motion } from 'framer-motion';
import { Network, Globe2, BookOpen, Fingerprint } from 'lucide-react';
import { Badge } from '../../components/ui/Badge';
import { GradientText } from '../../components/ui/GradientText';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { SEO } from '../../components/ui/SEO';

const NETWORK_CARDS = [
  {
    title: 'Carequality®',
    desc: 'Nationwide framework for clinical data exchange between over 600,000 providers.',
    icon: Globe2,
    color: 'text-brand-purple',
    bg: 'bg-brand-purple/5'
  },
  {
    title: 'HIE (Health Exchange)',
    desc: 'Secure region-wide clinical data sharing to ensure continuity of care.',
    icon: Network,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/5'
  },
  {
    title: 'PDMP Integration',
    desc: 'Direct Prescription Drug Monitoring Program access within the EHR workflow.',
    icon: Fingerprint,
    color: 'text-amber-500',
    bg: 'bg-amber-500/5'
  },
  {
    title: 'Registries (IRIS/FIG)',
    desc: 'Specialized clinical data submission for accreditation and quality reporting.',
    icon: BookOpen,
    color: 'text-blue-500',
    bg: 'bg-blue-500/5'
  }
];

export function ConnectionsPage() {
  return (
    <div className="min-h-screen bg-[#FCFCFD] pt-24 pb-12 md:pt-32 md:pb-24 relative overflow-hidden">
      <SEO 
        title="Network Connections & Connectivity | ModMed" 
        description="Expand your practice's reach with ModMed's nationwide connectivity. HL7, HIE, Carequality, and more."
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Badge className="mb-6 bg-slate-100 text-slate-500 border-slate-200 uppercase tracking-widest font-black">Interoperability</Badge>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-950 mb-8 tracking-tight">
              A practice without <br />
              <GradientText>boundaries.</GradientText>
            </h1>
            <p className="text-slate-500 text-xl font-medium max-w-2xl leading-relaxed">
              We connect you to the national healthcare ecosystem. Access patient data 
              instantly, regardless of where they were last treated.
            </p>
          </motion.div>
        </div>

        {/* ── Network Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
           {NETWORK_CARDS.map((card, idx) => (
             <motion.div
               key={card.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
             >
               <GlassPanel className="p-10 h-full hover:border-slate-300 transition-all duration-500 group">
                  <div className={`w-14 h-14 rounded-2xl ${card.bg} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                     <card.icon className={`w-7 h-7 ${card.color}`} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 mb-3 tracking-tight">{card.title}</h3>
                  <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8">
                     {card.desc}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 group-hover:text-brand-purple transition-colors">
                     <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Integrated Flow</span>
                     <div className="h-px bg-slate-100 flex-1" />
                  </div>
               </GlassPanel>
             </motion.div>
           ))}
        </div>

        {/* ── Visual Backdrop ── */}
        <section className="relative py-12 md:py-24 rounded-[40px] bg-slate-50 border border-slate-100 overflow-hidden text-center px-6">
           <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-purple/20 to-transparent" />
           <div className="mb-12">
              <h2 className="text-3xl font-black text-slate-950 mb-4 tracking-tight leading-tight italic">Nationwide <GradientText>Carequality® Readiness</GradientText></h2>
              <p className="text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                 By joining the Carequality framework, ModMed allows specialized clinics to securely 
                 exchange clinical reports with large hospital networks and other EHRs nationwide.
              </p>
           </div>
           
           <div className="relative flex items-center justify-center h-48">
              {/* Central Globe Animation */}
              <div className="relative z-10 w-32 h-32 bg-white rounded-full shadow-2xl border border-slate-100 flex items-center justify-center overflow-hidden group">
                 <motion.div
                   animate={{ 
                     rotate: 360
                   }}
                   transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                 >
                    <Globe2 className="w-16 h-16 text-brand-purple drop-shadow-[0_0_15px_rgba(80,45,127,0.3)] transition-transform group-hover:scale-110" />
                 </motion.div>
              </div>
              
              {/* Moving Orbits */}
              {[...Array(5)].map((_, i) => (
                 <motion.div
                   key={i}
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ repeat: Infinity, duration: 10 + i * 2, ease: 'linear' }}
                    className="absolute border border-slate-200/50 rounded-full"
                    style={{ 
                      width: `${200 + i * 50}px`, 
                      height: `${200 + i * 50}px` 
                    }}
                 />
              ))}

              {/* Data Sync Dots */}
              {[...Array(8)].map((_, i) => (
                 <motion.div
                   key={i}
                   animate={{ 
                     opacity: [0, 1, 0]
                   }}
                   transition={{ repeat: Infinity, duration: 3, delay: i * 0.4 }}
                   className="absolute w-2 h-2 rounded-full bg-emerald-500/40"
                   style={{ 
                     top: `${Math.sin(i * Math.PI / 4) * 120 + 90}px`,
                     left: `${Math.cos(i * Math.PI / 4) * 120 + 90}px`
                   }}
                 />
              ))}
           </div>
        </section>
      </div>
    </div>
  );
}
