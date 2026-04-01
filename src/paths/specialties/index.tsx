import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Quote, CalendarCheck, ChevronRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { getSpecialtyBySlug } from './data';
import { Section } from '../../components/ui/Section';
import { Badge } from '../../components/ui/Badge';
import { ScrollReveal } from '../../components/ui/ScrollReveal';

export function SpecialtyPage() {
  const { specialty } = useParams<{ specialty: string }>();
  const [activePillar, setActivePillar] = useState(0);

  const data = getSpecialtyBySlug(specialty ?? '');
  if (!data) return <Navigate to="/404" replace />;

  const { icon: SpecIcon } = data;
  const pillar = data.pillars[activePillar];

  return (
    <div>
      {/* ─────────────────────────────────────────────
          HERO
      ───────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 px-4 overflow-hidden bg-white">
        {/* Specialty-coloured ambient glow */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] ${data.accentBg} rounded-full blur-[160px] opacity-25 pointer-events-none`} />

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="flex items-center justify-center gap-3 mb-6 animate-[fadeInUp_0.6s_ease-out]">
            <div className={`w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center`}>
              <SpecIcon className={`w-5 h-5 ${data.accentColor}`} />
            </div>
            <Badge variant="brand">{data.label}</Badge>
          </div>

          <h1 className="text-4xl sm:text-7xl font-black text-slate-950 leading-tight max-w-4xl mx-auto mb-6 animate-[fadeInUp_0.8s_ease-out_0.1s_both] tracking-tight">
            {data.label} software and services
            <br className="hidden sm:block" /> for the business and practice of medicine
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12 animate-[fadeInUp_0.8s_ease-out_0.2s_both] font-medium">
            {data.heroSub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-purple hover:bg-brand-purple-light text-white rounded-full font-semibold text-base transition-all shadow-[0_0_20px_rgba(80,45,127,0.5)] hover:shadow-[0_0_30px_rgba(106,60,168,0.7)] hover:-translate-y-0.5"
            >
              <CalendarCheck className="w-4 h-4" /> Book a demo
            </Link>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-900 rounded-full font-bold text-base transition-all border border-slate-200 shadow-sm hover:border-brand-purple/20 hover:-translate-y-0.5"
            >
              Explore solutions <ArrowRight className="w-4 h-4 text-brand-purple" />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          THREE PILLARS — tab switcher
      ───────────────────────────────────────────── */}
      <Section className="bg-[#F8FAFC]">
        <ScrollReveal variant="fade" className="text-center mb-12">
          <Badge variant="brand" className="mb-4">All-in-One</Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 mb-4 tracking-tight">{data.valueH2}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium">{data.valueIntro}</p>
        </ScrollReveal>

        {/* Tab selector */}
        <ScrollReveal direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          {data.pillars.map((p, i) => (
            <button
              key={p.label}
              onClick={() => setActivePillar(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                activePillar === i
                  ? `${data.accentBg} ${data.accentBorder} ${data.accentColor} shadow-sm`
                  : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300 shadow-xs'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${activePillar === i ? 'bg-white shadow-sm' : 'bg-slate-100 text-slate-400'}`}>
                {i + 1}
              </span>
              {p.label}
            </button>
          ))}
        </ScrollReveal>

        {/* Active pillar content */}
        <ScrollReveal variant="blur" key={activePillar} className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-100 p-8 sm:p-10 shadow-[0_24px_48px_rgba(0,0,0,0.04)] relative overflow-hidden group/pillar">
          <div className="flex flex-col sm:flex-row items-start gap-8 relative z-10">
            <div className={`w-14 h-14 rounded-2xl ${data.accentBg} border ${data.accentBorder} flex items-center justify-center shrink-0 mt-1 shadow-sm`}>
              <Sparkles className={`w-7 h-7 ${data.accentColor}`} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-950 mb-3 tracking-tight">{pillar.label}</h3>
              <p className="text-slate-600 mb-8 max-w-2xl text-lg leading-relaxed">{pillar.body}</p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {pillar.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-slate-700 font-medium bg-slate-50/50 p-3 rounded-xl border border-slate-100/50">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Decorative glow */}
          <div className={`absolute -right-20 -bottom-20 w-64 h-64 ${data.accentBg} rounded-full blur-[100px] opacity-10 group-hover/pillar:opacity-20 transition-opacity`} />
        </ScrollReveal>
      </Section>

      <Section id="solutions" className="bg-white">
        <ScrollReveal variant="fade" className="text-center mb-16">
          <Badge variant="brand" className="mb-4">Solutions</Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">{data.featureH2}</h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.features.map((feat, i) => (
            <ScrollReveal 
              key={feat.title}
              variant="zoom"
              delay={i * 0.1}
            >
              <Link
                to={feat.href}
                className="group block h-full"
              >
              <div className={`h-full bg-white rounded-3xl border border-slate-100 p-6 shadow-xs hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}>
                <div className={`w-12 h-12 rounded-2xl ${feat.bg} border ${feat.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10 shadow-sm`}>
                  <ChevronRight className={`w-6 h-6 ${feat.color}`} />
                </div>
                <h3 className={`font-black text-lg mb-3 tracking-tight relative z-10 ${feat.color}`}>{feat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium relative z-10 line-clamp-3">{feat.desc}</p>
                
                <div className="relative z-10 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${feat.color}`}>
                    {feat.cta}
                  </span>
                  <ArrowRight className={`w-4 h-4 ${feat.color} group-hover:translate-x-1 transition-transform`} />
                </div>

                {/* Subtle specialty-colored bottom-accents */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${feat.bg} transform translate-y-full group-hover:translate-y-0 transition-transform`} />
              </div>
            </Link>
          </ScrollReveal>
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
