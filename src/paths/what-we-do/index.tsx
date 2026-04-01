import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Stethoscope,
  Activity,
  CreditCard,
  Heart,
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart3,
  Users,
} from "lucide-react";
import { Section } from "../../components/ui/Section";
import { Badge } from "../../components/ui/Badge";
import { GradientText } from "../../components/ui/GradientText";
import { GlassPanel } from "../../components/ui/GlassPanel";
import { SEO } from "../../components/ui/SEO";

const PILLARS = [
  {
    id: "clinical",
    title: "Clinical Excellence",
    subtitle: "Built for your specialty.",
    desc: "Our EHR systems aren't one-size-fits-all. They are built by doctors, for doctors, in deep specialties like Dermatology, Orthopedics, and Ophthalmology.",
    icon: Stethoscope,
    color: "text-brand-purple",
    bg: "bg-brand-purple/5",
    features: [
      "Specialty-Specific EHR",
      "ModMed Scribe 2.0 (AI)",
      "ePrescribing",
    ],
    link: "/what-we-do/ehr",
  },
  {
    id: "ops",
    title: "Operational Efficiency",
    subtitle: "Focus on patients, not paper.",
    desc: "Streamline your front and back office with practice management tools designed to automate the administrative burden of modern medicine.",
    icon: Activity,
    color: "text-blue-500",
    bg: "bg-blue-500/5",
    features: ["Practice Management", "Inventory Management", "Analytics"],
    link: "/what-we-do/practice-management",
  },
  {
    id: "financial",
    title: "Financial Health",
    subtitle: "Maximize your revenue cycle.",
    desc: "Get paid faster and more accurately with specialized billing services and integrated payment processing built into your clinical workflow.",
    icon: CreditCard,
    color: "text-emerald-500",
    bg: "bg-emerald-500/5",
    features: ["BOOST RCM", "ModMed Pay", "Claims Denial Assessment"],
    link: "/what-we-do/rcm",
  },
  {
    id: "patient",
    title: "Patient Connection",
    subtitle: "Empower your patient community.",
    desc: "Modern tools to attract, engage, and retain patients through seamless digital experiences and professional marketing.",
    icon: Heart,
    color: "text-rose-500",
    bg: "bg-rose-500/5",
    features: ["Patient Engagement", "Patient Portal", "AMP Marketing"],
    link: "/what-we-do/patient-experience",
  },
];

export function WhatWeDoPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="bg-[#FCFCFD] relative overflow-hidden">
      <SEO
        title="What We Do | Integrated IT for Specialty Practices"
        description="Explore ModMed's full suite of clinical, operational, financial, and patient experience solutions designed to help your specialty practice thive."
      />

      {/* Hero Section */}
      <Section className="relative pt-24 pb-12 md:pt-32 md:pb-24 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-purple/5 rounded-full blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              variant="glow"
              className="mb-6 uppercase tracking-widest font-black"
            >
              The ModMed Suite
            </Badge>
            <h1 className="text-5xl sm:text-8xl font-black text-slate-950 mb-8 tracking-tighter leading-[0.9]">
              Healthy <br /> <GradientText>Everything.</GradientText>
            </h1>
            <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              We provide the clinical, operational, and financial tools needed
              to build a healthier specialty practice and better patient
              outcomes.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* The Clinical Pulse Animation Container */}
      <div className="relative max-w-7xl mx-auto px-6 pb-16 md:pb-32">
        {/* The SVG Spine */}
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2 hidden lg:block">
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="w-full h-full bg-brand-purple origin-top"
          />

          {/* Pulsing EKG Points */}
          {PILLARS.map((_, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-brand-purple z-20"
              style={{ top: `${(idx + 0.5) * 25}%` }}
            >
              <div className="absolute inset-0 rounded-full bg-brand-purple/20 animate-ping" />
            </motion.div>
          ))}
        </div>

        {/* Pillars Content */}
        <div className="space-y-24 lg:space-y-40 relative z-10 pt-12 lg:pt-20">
          {PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:w-1/2 space-y-8"
              >
                <div className="space-y-4">
                  <div
                    className={`w-16 h-16 rounded-[24px] ${pillar.bg} flex items-center justify-center`}
                  >
                    <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                    {pillar.title}
                  </h2>
                  <h3 className="text-xl font-bold text-slate-400 italic">
                    {pillar.subtitle}
                  </h3>
                  <p className="text-slate-500 text-lg font-medium leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {pillar.features.map((f) => (
                    <div
                      key={f}
                      className="px-4 py-2 rounded-full bg-white border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400"
                    >
                      {f}
                    </div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="inline-flex items-center gap-4 text-brand-purple font-black uppercase text-sm tracking-[0.2em] cursor-pointer group"
                >
                  Explore {pillar.title}{" "}
                  <ArrowRight className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </motion.div>
              </motion.div>

              {/* Visual Side (Interactive Bento Fragment) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:w-1/2 w-full"
              >
                <GlassPanel className="p-8 aspect-4/3 relative flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-linear-to-br from-slate-50 to-white -z-10" />

                  {/* The 'Bento' Simulation for each Pillar */}
                  {pillar.id === "clinical" && (
                    <div className="grid grid-cols-2 gap-4 w-full h-full relative p-4">
                      <GlassPanel className="col-span-2 p-6 border-brand-purple/10 bg-white shadow-xl flex items-center gap-6">
                        <Stethoscope className="w-12 h-12 text-brand-purple animate-pulse" />
                        <div>
                          <div className="text-[10px] font-black uppercase text-slate-400 mb-1">
                            Active Encounter
                          </div>
                          <div className="text-2xl font-black text-slate-950 italic tracking-tighter">
                            EMA EHR
                          </div>
                        </div>
                      </GlassPanel>
                      <GlassPanel className="p-6 border-blue-500/10 bg-blue-500/5 flex flex-col justify-between">
                        <Activity className="w-8 h-8 text-blue-500" />
                        <div className="text-[14px] font-black text-slate-950">
                          Analytics Flow
                        </div>
                      </GlassPanel>
                      <GlassPanel className="p-6 border-emerald-500/10 bg-emerald-500/5 flex flex-col justify-between">
                        <Zap className="w-8 h-8 text-emerald-500" />
                        <div className="text-[14px] font-black text-slate-950">
                          Scribe 2.0
                        </div>
                      </GlassPanel>
                    </div>
                  )}

                  {pillar.id === "ops" && (
                    <div className="relative w-full h-full p-8 flex flex-col justify-center gap-6">
                      <div className="h-1 bg-slate-100 rounded-full w-full relative">
                        <motion.div
                          animate={{ x: ["0%", "100%", "0%"] }}
                          transition={{ repeat: Infinity, duration: 4 }}
                          className="absolute -top-3 w-8 h-8 bg-white border-4 border-blue-500 rounded-lg shadow-lg flex items-center justify-center"
                        >
                          <Zap className="w-4 h-4 text-blue-500" />
                        </motion.div>
                      </div>
                      <h4 className="text-4xl font-black text-slate-950 tracking-tighter italic">
                        Operational Fluidity.
                      </h4>
                      <p className="text-slate-400 font-bold uppercase text-xs tracking-widest leading-tight">
                        Patient intake to pharmacy orders, automated.
                      </p>
                      <div className="flex gap-4">
                        {[BarChart3, Users, Activity].map((I, i) => (
                          <I key={i} className="w-6 h-6 text-slate-300" />
                        ))}
                      </div>
                    </div>
                  )}

                  {pillar.id === "financial" && (
                    <div className="relative w-full h-full flex items-center justify-center p-12">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 20,
                          ease: "linear",
                        }}
                        className="absolute inset-0 border-[20px] border-slate-50 rounded-full"
                      />
                      <div className="text-center z-10 space-y-4">
                        <CreditCard className="w-16 h-16 text-emerald-500 mx-auto" />
                        <h4 className="text-5xl font-black text-slate-950 italic tracking-tighter">
                          BOOST RCM
                        </h4>
                        <Badge className="bg-emerald-500 text-white border-0 font-black">
                          99.9% CLAIMS ACCURACY
                        </Badge>
                      </div>
                    </div>
                  )}

                  {pillar.id === "patient" && (
                    <div className="relative w-full h-full p-8 space-y-8 flex flex-col justify-center">
                      <div className="flex -space-x-4">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-16 h-16 rounded-full border-4 border-white bg-slate-100 shadow-md flex items-center justify-center overflow-hidden"
                          >
                            <Users className="text-slate-400 w-8 h-8" />
                          </div>
                        ))}
                      </div>
                      <div>
                        <h4 className="text-4xl font-black text-slate-950 tracking-tighter leading-none mb-3 italic">
                          Modern Engagement.
                        </h4>
                        <p className="text-slate-500 font-medium">
                          Portals, kiosks, and messaging designed to put your
                          patients in the driver's seat of their own care
                          journey.
                        </p>
                      </div>
                    </div>
                  )}
                </GlassPanel>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Quote / Proof */}
      <Section className="bg-slate-950 py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(80,45,127,0.15),transparent)]" />
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <ShieldCheck className="w-16 h-16 text-brand-purple-light mx-auto mb-12" />
          <h2 className="text-4xl sm:text-6xl font-black text-white italic tracking-tighter mb-12 leading-tight">
            "Everything we do is built on the belief that software should work
            for you, not the other way around."
          </h2>
          <div className="space-y-2">
            <div className="text-brand-purple-light font-black uppercase text-sm tracking-[0.3em]">
              Dan Cane & Michael Sherling
            </div>
            <div className="text-slate-500 font-bold italic">
              ModMed Founders
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
