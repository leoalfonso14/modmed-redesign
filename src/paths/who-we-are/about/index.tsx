import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '../../../components/ui/Section';
import { Badge } from '../../../components/ui/Badge';
import { GradientText } from '../../../components/ui/GradientText';
import { Video } from '../../../components/ui/Video';
import { SEO } from '../../../components/ui/SEO';
import { 
  LineChart, HeartPulse, 
  Stethoscope, Globe, Star, Clock, 
  SmilePlus, Mountain, Rocket, Target, Heart
} from 'lucide-react';

const SPECIALTIES = [
  "Dermatology", "Ophthalmology", "Orthopedics", "Gastroenterology", 
  "Urology", "Otolaryngology (ENT)", "Plastic Surgery", "Podiatry", 
  "OBGYN", "Allergy", "Pain Management"
];

// Duplicate for infinite marquee
const MARQUEE_ITEMS = [...SPECIALTIES, ...SPECIALTIES, ...SPECIALTIES];

export function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax effects for background shapes
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="min-h-screen bg-[#FCFCFD] selection:bg-brand-purple selection:text-white" ref={containerRef}>
      <SEO 
        title="About Us | Our Mission & Values" 
        description="Learn about ModMed's mission to place doctors and patients at the center of care through intelligent, specialty-specific healthcare technology."
      />
      
      {/* ─────────────────────────────────────────────
          HERO SECTION 
      ───────────────────────────────────────────── */}
      <div className="relative pt-40 pb-32 overflow-hidden flex items-center justify-center min-h-[70vh]">
        {/* Abstract Dynamic Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[120px] mix-blend-multiply"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-[-20%] right-[-10%] w-[900px] h-[900px] bg-emerald-500/10 rounded-full blur-[150px] mix-blend-multiply"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <Badge variant="brand" className="mb-8 font-black tracking-[0.2em] bg-brand-purple/10 text-brand-purple border-brand-purple/20 shadow-xs">
              Our Mission
            </Badge>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-950 leading-[0.95] tracking-tighter mb-8">
              Placing doctors and patients at the <GradientText>center of care.</GradientText>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-500 leading-relaxed font-medium max-w-2xl">
              We are transforming how healthcare information is created, consumed, and utilized to increase practice efficiency and improve patient outcomes.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          ORIGIN STORY (SPLIT LAYOUT)
      ───────────────────────────────────────────── */}
      <Section className="py-24 sm:py-32 bg-white relative z-10 border-y border-slate-100 shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left: Integrated Video Player (Sticky) */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl bg-slate-950 shadow-[0_30px_80px_rgba(80,45,127,0.15)] border border-white/50 overflow-hidden ring-1 ring-slate-900/5 aspect-video lg:sticky lg:top-40 group z-20">
              <div className="absolute inset-0 bg-brand-purple/5 mix-blend-overlay pointer-events-none z-10" />
              <Video 
                wistiaId="8p7tgja64j" 
                autoPlay={false}
                className="w-full h-full object-cover rounded-2xl sm:rounded-3xl relative z-0"
              />
            </div>

            {/* Right: Scrolling Narrative */}
            <div className="space-y-12 lg:py-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-[2px] bg-emerald-500 rounded-full" />
                  <span className="text-sm font-black text-emerald-600 uppercase tracking-widest">The Catalyst</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-950 mb-6 tracking-tight">
                  Where Tech Met Clinical Precision
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  Founded in February 2010 by Daniel Cane, a successful software entrepreneur, and Dr. Michael Sherling, a practicing dermatologist. They shared a singular vision: address exactly what medical professionals were missing from generic software.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-[2px] bg-brand-purple rounded-full" />
                  <span className="text-sm font-black text-brand-purple uppercase tracking-widest">The Mission</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-950 mb-6 tracking-tight">
                  Our Singular Focus
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  We are here to place doctors and patients at the center of care through an intelligent, specialty-specific cloud platform. From day one, this has been the driving force behind every line of code we write.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────
          CORE VALUES
      ───────────────────────────────────────────── */}
      <Section className="py-24 sm:py-32 relative z-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight mb-6">
              Our <GradientText>Core Values</GradientText>
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              These seven principles define our culture and how we build products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-min">
            {[
              {
                title: "Create customer delight.",
                icon: Star,
                color: "text-amber-500",
                bg: "bg-amber-50",
                glow: "bg-amber-400/20",
                border: "border-amber-100",
                span: "col-span-1 md:col-span-2 lg:col-span-2",
                desc: "We go above and beyond to ensure our providers love using our software, creating experiences that turn users into lifetime champions."
              },
              {
                title: "Save time.",
                icon: Clock,
                color: "text-blue-500",
                bg: "bg-blue-50",
                glow: "bg-blue-400/20",
                border: "border-blue-100",
                span: "col-span-1",
                desc: "Every click saved is an irreplaceable moment given back to patient care."
              },
              {
                title: "Have fun.",
                icon: SmilePlus,
                color: "text-emerald-500",
                bg: "bg-emerald-50",
                glow: "bg-emerald-400/20",
                border: "border-emerald-100",
                span: "col-span-1",
                desc: "We celebrate wins and build a culture where work feels genuinely uplifting."
              },
              {
                title: "Think big.",
                icon: Mountain,
                color: "text-cyan-500",
                bg: "bg-cyan-50",
                glow: "bg-cyan-400/20",
                border: "border-cyan-100",
                span: "col-span-1",
                desc: "We look beyond today's problems to build tomorrow's infrastructure."
              },
              {
                title: "Innovate boldly...",
                icon: Rocket,
                color: "text-brand-purple",
                bg: "bg-brand-purple/10",
                glow: "bg-brand-purple/20",
                border: "border-brand-purple/20",
                span: "col-span-1 md:col-span-2 lg:col-span-2",
                desc: "...then make things happen. We don't fear disruption; we actively engineer it from the ground up."
              },
              {
                title: "Align passion with purpose.",
                icon: Target,
                color: "text-rose-500",
                bg: "bg-rose-50",
                glow: "bg-rose-400/20",
                border: "border-rose-100",
                span: "col-span-1",
                desc: "We connect what we deeply love doing with the fundamental reason why we do it."
              },
              {
                title: "Do good.",
                icon: Heart,
                color: "text-red-500",
                bg: "bg-red-50",
                glow: "bg-red-400/20",
                border: "border-red-100",
                span: "col-span-1 md:col-span-2 lg:col-span-4",
                desc: "Integrity and compassion inherently guide every single decision we make at every level of the organization."
              }
            ].map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                className={`relative overflow-hidden bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 flex flex-col items-start gap-4 hover:shadow-2xl hover:-translate-y-1 group transition-all duration-500 ${v.span}`}
              >
                {/* Dynamic Hover Glow */}
                <div className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/2 pointer-events-none ${v.glow}`} />

                <div className={`w-14 h-14 rounded-2xl ${v.bg} border ${v.border} flex items-center justify-center ${v.color} group-hover:scale-110 transition-transform duration-500 shadow-xs relative z-10`}>
                  <v.icon className={`w-7 h-7 ${v.color}`} />
                </div>
                
                <div className="relative z-10 mt-2">
                  <h4 className="text-2xl font-black text-slate-800 tracking-tight mb-2">
                    {v.title}
                  </h4>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────
          BENTO GRID MILESTONES 
      ───────────────────────────────────────────── */}
      <Section className="py-24 sm:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight mb-6">
              Our Blueprint for <GradientText>Growth</GradientText>
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              From our flagship EHR to our latest enterprise solutions, we are constantly pioneering new heights in healthcare technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            
            {/* Bento 1: Cloud Native */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 col-span-1 bg-white border border-slate-200 rounded-[32px] p-10 flex flex-col justify-between relative overflow-hidden shadow-xs hover:shadow-lg transition-shadow duration-500 group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-sky-200 transition-colors duration-700" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-sky-50 border border-sky-100 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-sky-500" />
                </div>
                <h3 className="text-2xl font-black text-slate-950 tracking-tight mb-3">Cloud-Native from Day One</h3>
                <p className="text-slate-500 font-medium leading-relaxed max-w-sm">No servers. No legacy baggage. The Electronic Medical Assistant (EMA®) was born in the cloud for unparalleled agility.</p>
              </div>
            </motion.div>

            {/* Bento 2: Specialties */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-1 bg-white border border-slate-200 rounded-[32px] p-10 flex flex-col justify-between relative overflow-hidden shadow-xs hover:shadow-lg transition-shadow duration-500 group"
            >
              <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-brand-purple/10 border border-brand-purple/20 rounded-2xl flex items-center justify-center mb-auto">
                  <Stethoscope className="w-6 h-6 text-brand-purple" />
                </div>
                <div>
                  <h3 className="text-6xl font-black text-slate-950 tracking-tighter mb-2">11<span className="text-brand-purple">+</span></h3>
                  <p className="text-slate-600 font-bold uppercase tracking-widest text-xs">Medical Specialties</p>
                </div>
              </div>
            </motion.div>

            {/* Bento 3: Clearlake Investment */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-1 bg-white border border-slate-200 rounded-[32px] p-10 flex flex-col justify-between relative overflow-hidden shadow-xs hover:shadow-lg transition-shadow duration-500 group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-200 transition-colors duration-700" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-amber-50 border border-amber-100 rounded-2xl flex items-center justify-center mb-6">
                  <LineChart className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-2xl font-black text-slate-950 tracking-tight mb-3">2025 Expansion</h3>
                <p className="text-slate-500 font-medium leading-relaxed">Backed by Clearlake Capital to radically scale AI automation in the specialty clinic ecosystem.</p>
              </div>
            </motion.div>

            {/* Bento 4: Philosophy */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 col-span-1 bg-slate-950 rounded-[32px] p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl group"
            >
              <div className="absolute bottom-0 left-0 w-full h-[150px] bg-linear-to-t from-brand-purple/20 to-transparent pointer-events-none" />
              <div className="relative z-10 flex items-center justify-between h-full">
                <div className="max-w-md">
                  <Badge className="bg-white/10 text-white border-white/20 mb-6 font-black tracking-widest uppercase">The ModMed Edge</Badge>
                  <h3 className="text-3xl font-black text-white tracking-tight mb-4 leading-tight">Empowering the <span className="text-brand-purple-light">business</span> of medicine.</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">We provide the tools to let you focus on what really matters—your patients.</p>
                </div>
                <div className="hidden md:flex w-32 h-32 rounded-full border border-white/10 bg-white/5 items-center justify-center relative shadow-[0_0_60px_rgba(80,45,127,0.3)] group-hover:scale-105 transition-transform duration-700">
                  <HeartPulse className="w-12 h-12 text-white" />
                  <div className="absolute inset-0 bg-brand-purple/20 blur-xl rounded-full mix-blend-screen" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────
          INFINITE MARQUEE SPECIALTIES 
      ───────────────────────────────────────────── */}
      <div className="py-20 bg-white border-y border-slate-100 overflow-hidden flex flex-col items-center">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10 text-center px-4">Trusted across all major medical disciplines</p>
        
        <div className="flex w-full overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
          <motion.div
            className="flex gap-16 items-center whitespace-nowrap px-8"
            animate={{ x: [0, -2000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {MARQUEE_ITEMS.map((specialty, idx) => (
              <div key={idx} className="flex items-center gap-4 text-slate-300">
                <span className="text-5xl font-black tracking-tighter uppercase text-transparent [-webkit-text-stroke:1.5px_#64748b] hover:[-webkit-text-stroke:2px_#331E54] hover:text-[#331E54] transition-all cursor-default duration-300">
                  {specialty}
                </span>
                <div className="w-3 h-3 rounded-full bg-brand-purple/30" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </div>
  );
}
