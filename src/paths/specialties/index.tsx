import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Quote, CalendarCheck, Sparkles, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getSpecialtyBySlug } from './data';
import { Section } from '../../components/ui/Section';
import { Badge } from '../../components/ui/Badge';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import { SpecialtyVisual } from './components/SpecialtyVisual';
import { ScribeSection, AISolutionsSection, ImagingSection } from './components/ClinicalIntelligence';
import { SEO } from '../../components/ui/SEO';
import type { SpecialtyPillar } from './data';

export function SpecialtyPage() {
  const { specialty } = useParams<{ specialty: string }>();

  const data = getSpecialtyBySlug(specialty ?? '');
  if (!data) return <Navigate to="/404" replace />;

  const { icon: SpecIcon } = data;

  return (
    <div>
      <SEO 
        title={`${data.label} EHR & Practice Management`}
        description={`Modern, cloud-based healthcare solutions designed specifically for ${data.label} practices. Enhance clinical workflows and patient outcomes with ModMed.`}
      />
      {/* ─────────────────────────────────────────────
          HERO
      ───────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-white">
        {/* Clinical Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }} 
        />

        {/* Specialty-coloured ambient glow */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] ${data.accentBg} rounded-full blur-[160px] opacity-25 pointer-events-none`} />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-16">
          <div className="text-left">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className={`w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center`}>
                <SpecIcon className={`w-5 h-5 ${data.accentColor}`} />
              </div>
              <Badge variant="brand">{data.label}</Badge>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl font-black text-slate-950 leading-[0.9] mb-8 tracking-tighter"
            >
              {data.label} <span className={data.accentColor}>Specialty</span> Intelligence
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 max-w-xl leading-relaxed mb-12 font-medium"
            >
              {data.heroSub}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-purple hover:bg-brand-purple-light text-white rounded-2xl font-bold text-lg transition-all shadow-lg shadow-brand-purple/20 hover:-translate-y-1"
              >
                <CalendarCheck className="w-5 h-5" /> Book a demo
              </Link>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-2xl font-bold text-lg transition-all border border-slate-200 shadow-sm hover:border-brand-purple/20 hover:-translate-y-1"
              >
                Explore solutions <ArrowRight className="w-5 h-5 text-brand-purple" />
              </a>
            </motion.div>
          </div>

          {/* Specialty Visual Animation — The "Fun" Part */}
          <div className="hidden lg:block">
            <SpecialtyVisual icon={SpecIcon} accentColor={data.accentColor} accentBg={data.accentBg} />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          THREE PILLARS — 3-column grid
      ───────────────────────────────────────────── */}
      <Section className="bg-[#F8FAFC]">
        <ScrollReveal variant="fade" className="text-center mb-16">
          <Badge variant="brand" className="mb-4">All-in-One</Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 mb-4 tracking-tight leading-tight">{data.valueH2}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium text-lg leading-relaxed">{data.valueIntro}</p>
        </ScrollReveal>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {data.pillars.map((p: SpecialtyPillar, i: number) => {
            const PillarIcon = p.icon;
            return (
              <ScrollReveal 
                key={p.label} 
                variant="blur" 
                direction="up" 
                delay={i * 0.1}
                className="bg-white rounded-[40px] border border-slate-100 p-8 shadow-[0_16px_32px_-8px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group/pillar"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-[22px] ${p.bg} border border-black/5 flex items-center justify-center shrink-0 mb-8 transform group-hover/pillar:scale-110 group-hover/pillar:rotate-3 transition-transform duration-500 shadow-sm`}>
                    <PillarIcon className={`w-8 h-8 ${p.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-950 mb-4 tracking-tight leading-tight">{p.label}</h3>
                  <p className="text-slate-600 mb-8 font-medium leading-relaxed grow">{p.body}</p>
                  
                  <div className="space-y-3">
                    {p.features.map((feat: string) => (
                      <div 
                        key={feat}
                        className="flex items-center gap-3 text-slate-700 font-bold bg-slate-50/50 p-3 rounded-xl border border-slate-100/50 hover:bg-white hover:shadow-md transition-all duration-300"
                      >
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        </div>
                        <span className="text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative background accent */}
                <div className={`absolute -right-16 -bottom-16 w-48 h-48 ${p.bg} rounded-full blur-[60px] opacity-10 group-hover/pillar:opacity-20 transition-opacity duration-700`} />
              </ScrollReveal>
            );
          })}
        </div>
      </Section>

      <Section id="solutions" className="bg-white">
        <ScrollReveal variant="fade" className="text-center mb-16">
          <Badge variant="brand" className="mb-4">Ecosystem</Badge>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[0.9]">
            Everything your <br className="hidden sm:block" /> {data.label} practice needs
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <Link to={feat.href} className="group block h-full">
                <div className="h-full bg-slate-50/30 hover:bg-white rounded-[32px] border border-slate-100/60 p-8 shadow-xs hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                  <div className={`w-14 h-14 rounded-[20px] ${feat.bg} border ${feat.border} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm`}>
                    <ChevronRight className={`w-7 h-7 ${feat.color}`} />
                  </div>
                  
                  <h3 className={`font-black text-xl mb-4 tracking-tight ${feat.color}`}>{feat.title}</h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-8 font-medium line-clamp-4">{feat.desc}</p>
                  
                  <div className="pt-6 border-t border-slate-100/50 flex items-center justify-between">
                    <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${feat.color}`}>
                      {feat.cta}
                    </span>
                    <ArrowRight className={`w-5 h-5 ${feat.color} group-hover:translate-x-2 transition-transform duration-300`} />
                  </div>

                  {/* Hover gradient glow */}
                  <div className={`absolute inset-0 ${feat.bg} opacity-0 group-hover:opacity-[0.03] transition-opacity`} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────
          TESTIMONIAL
      ───────────────────────────────────────────── */}
      <Section className="bg-[#F8FAFC]">
        <ScrollReveal variant="blur" className="max-w-4xl mx-auto text-center relative px-6">
          <Quote className={`w-16 h-16 ${data.accentColor} opacity-10 mx-auto mb-8 absolute -top-8 left-1/2 -translate-x-1/2`} />
          <blockquote className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-10 tracking-tight italic relative z-10">
            "{data.testimonial.quote}"
          </blockquote>
          <div className="flex flex-col items-center justify-center gap-4 relative z-10">
            <div className={`w-16 h-16 rounded-full ${data.accentBg} border-2 ${data.accentBorder} flex items-center justify-center shadow-lg`}>
              <SpecIcon className={`w-8 h-8 ${data.accentColor}`} />
            </div>
            <div>
              <p className="text-slate-950 font-black text-lg tracking-tight">{data.testimonial.name}</p>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">{data.testimonial.title}</p>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* ─────────────────────────────────────────────
          AI & SCRIBE
      ───────────────────────────────────────────── */}
      <ScribeSection 
        accentColor={data.accentColor} 
        accentBg={data.accentBg} 
        label={data.label} 
      />

      <AISolutionsSection 
        accentColor={data.accentColor} 
        accentBg={data.accentBg} 
      />

      {/* ─────────────────────────────────────────────
          IMAGING (Conditional)
      ───────────────────────────────────────────── */}
      {data.hasImaging && (
        <ImagingSection 
          accentColor={data.accentColor} 
          accentBg={data.accentBg} 
        />
      )}

      {/* ─────────────────────────────────────────────
          START-UP CTA
      ───────────────────────────────────────────── */}
      <Section className="bg-white relative overflow-hidden">
        {/* Background glow */}
        <div className={`absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-full h-full ${data.accentBg} rounded-full blur-[160px] opacity-15 pointer-events-none`} />
        
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[40px] px-8 py-16 text-center relative z-10 shadow-2xl overflow-hidden group/cta-box">
          {/* Animated decorative sparks */}
          <div className="absolute top-0 right-0 p-8 group-hover/cta-box:scale-125 transition-transform duration-700 opacity-20">
            <Sparkles className="w-20 h-20 text-white" />
          </div>
          
          <div className={`w-20 h-20 rounded-[28px] bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mx-auto mb-10 shadow-xl transform group-hover/cta-box:rotate-6 transition-transform`}>
            <SpecIcon className={`w-10 h-10 ${data.accentColor} brightness-125`} />
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">New and start-up practices</h2>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Learn about our start-up program and see how {data.label} practices like yours are planning their journeys with ModMed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-purple hover:bg-brand-purple-light text-white rounded-2xl font-black text-lg transition-all shadow-[0_12px_24px_rgba(80,45,127,0.4)] hover:-translate-y-1 active:scale-95"
            >
              <CalendarCheck className="w-6 h-6" /> Start now
            </Link>
            <Link
              to="/resources/success-stories"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-black text-lg backdrop-blur-md transition-all border border-white/20 hover:-translate-y-1 active:scale-95"
            >
              Read success stories <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
