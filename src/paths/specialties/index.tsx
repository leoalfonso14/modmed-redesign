import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Quote, CalendarCheck, ChevronRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { getSpecialtyBySlug } from './data';
import { Section } from '../../components/ui/Section';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { Badge } from '../../components/ui/Badge';
import { GradientText } from '../../components/ui/GradientText';

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
      <section className="relative pt-40 pb-24 px-4 overflow-hidden">
        {/* Specialty-coloured ambient glow */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] ${data.accentBg} rounded-full blur-[130px] opacity-40 pointer-events-none`} />

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="flex items-center justify-center gap-3 mb-6 animate-[fadeInUp_0.6s_ease-out]">
            <div className={`w-10 h-10 rounded-xl ${data.accentBg} border ${data.accentBorder} flex items-center justify-center`}>
              <SpecIcon className={`w-5 h-5 ${data.accentColor}`} />
            </div>
            <Badge variant="brand">{data.label}</Badge>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight max-w-4xl mx-auto mb-6 animate-[fadeInUp_0.8s_ease-out_0.1s_both]">
            <GradientText>{data.label}</GradientText> software and services
            <br className="hidden sm:block" /> for the business and practice of medicine
          </h1>

          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
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
              className="inline-flex items-center gap-2 px-7 py-3.5 glass-panel hover:bg-white/8 text-slate-200 hover:text-white rounded-full font-semibold text-base transition-all border border-white/10 hover:border-white/20 hover:-translate-y-0.5"
            >
              Explore solutions <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          THREE PILLARS — tab switcher
      ───────────────────────────────────────────── */}
      <Section>
        <div className="text-center mb-12">
          <Badge variant="brand" className="mb-4">All-in-One</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{data.valueH2}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{data.valueIntro}</p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          {data.pillars.map((p, i) => (
            <button
              key={p.label}
              onClick={() => setActivePillar(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                activePillar === i
                  ? `bg-brand-purple/20 border-brand-purple/50 text-white`
                  : 'border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${activePillar === i ? 'bg-brand-purple text-white' : 'bg-white/10 text-slate-400'}`}>
                {i + 1}
              </span>
              {p.label}
            </button>
          ))}
        </div>

        {/* Active pillar content */}
        <GlassPanel padding="lg" className="max-w-3xl mx-auto border-brand-purple/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center shrink-0 mt-1">
              <Sparkles className="w-5 h-5 text-brand-purple-light" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{pillar.label}</h3>
              <p className="text-slate-400 mb-5">{pillar.body}</p>
              <ul className="space-y-2.5">
                {pillar.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple-light shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GlassPanel>
      </Section>

      {/* ─────────────────────────────────────────────
          FEATURE GRID
      ───────────────────────────────────────────── */}
      <Section id="solutions" className="bg-slate-950/40">
        <div className="text-center mb-12">
          <Badge variant="brand" className="mb-4">Solutions</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{data.featureH2}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.features.map((feat) => (
            <Link
              key={feat.title}
              to={feat.href}
              className="group block"
            >
              <GlassPanel hoverable padding="md" className={`h-full border-white/5 hover:${feat.border} transition-colors`}>
                <div className={`w-10 h-10 rounded-xl ${feat.bg} border ${feat.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <ChevronRight className={`w-5 h-5 ${feat.color}`} />
                </div>
                <h3 className={`font-bold text-base mb-2 ${feat.color}`}>{feat.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{feat.desc}</p>
                <span className={`text-xs font-semibold ${feat.color} flex items-center gap-1 group-hover:gap-2 transition-all`}>
                  {feat.cta} <ArrowRight className="w-3 h-3" />
                </span>
              </GlassPanel>
            </Link>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────
          TESTIMONIAL
      ───────────────────────────────────────────── */}
      <Section>
        <GlassPanel padding="lg" className="max-w-3xl mx-auto text-center border-brand-purple/20 bg-brand-purple/5">
          <Quote className="w-10 h-10 text-brand-purple-light/40 mx-auto mb-6" />
          <blockquote className="text-xl sm:text-2xl font-semibold text-white leading-relaxed mb-8 italic">
            "{data.testimonial.quote}"
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className={`w-10 h-10 rounded-full ${data.accentBg} border ${data.accentBorder} flex items-center justify-center`}>
              <SpecIcon className={`w-5 h-5 ${data.accentColor}`} />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm">{data.testimonial.name}</p>
              <p className="text-slate-400 text-xs">{data.testimonial.title}</p>
            </div>
          </div>
        </GlassPanel>
      </Section>

      {/* ─────────────────────────────────────────────
          START-UP CTA
      ───────────────────────────────────────────── */}
      <Section className="bg-slate-950/60">
        <GlassPanel padding="lg" className="max-w-4xl mx-auto text-center border-brand-purple/20">
          <div className={`w-14 h-14 rounded-2xl ${data.accentBg} border ${data.accentBorder} flex items-center justify-center mx-auto mb-6`}>
            <SpecIcon className={`w-7 h-7 ${data.accentColor}`} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">New and start-up practices</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Learn about our start-up program and see how {data.label} practices like yours are planning their journeys with ModMed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-purple hover:bg-brand-purple-light text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(80,45,127,0.4)] hover:-translate-y-px"
            >
              <CalendarCheck className="w-4 h-4" /> Start now
            </Link>
            <Link
              to="/resources/success-stories"
              className="inline-flex items-center gap-2 px-7 py-3.5 glass-panel hover:bg-white/8 text-slate-200 rounded-full font-semibold transition-all border border-white/10 hover:border-white/20 hover:-translate-y-px"
            >
              Read success stories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </GlassPanel>
      </Section>
    </div>
  );
}
