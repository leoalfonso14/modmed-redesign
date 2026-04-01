import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, TrendingUp, MapPin } from 'lucide-react';
import { STORIES_DATA } from './storiesData';
import { Section } from '../../../components/ui/Section';
import { Badge } from '../../../components/ui/Badge';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';
import { SEO } from '../../../components/ui/SEO';

export function SuccessStoriesPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const specialties = useMemo(() => {
    const all = STORIES_DATA.map(s => s.specialty);
    return ['All', ...new Set(all)];
  }, []);

  const filteredStories = useMemo(() => {
    if (activeFilter === 'All') return STORIES_DATA;
    return STORIES_DATA.filter(s => s.specialty === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-white">
      <SEO 
        title="Success Stories & Case Studies" 
        description="Discover how ModMed is helping thousands of specialty practices recapture time, boost revenue, and improve the patient experience through real-world results."
      />
      {/* ─────────────────────────────────────────────
          HERO
      ───────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Clinical Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }} 
        />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollReveal variant="fade">
            <Badge variant="brand" className="mb-6">Success Stories</Badge>
            <h1 className="text-5xl sm:text-8xl font-black text-slate-950 mb-8 tracking-tighter leading-[0.85]">
              Real Practices. <br /> <span className="text-brand-purple">Real Results.</span>
            </h1>
            <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
              Discover how ModMed is helping thousands of specialty practices recapture time, boost revenue, and improve the patient experience.
            </p>
          </ScrollReveal>

          {/* Filter Bar */}
          <ScrollReveal direction="up" delay={0.2} className="flex flex-wrap items-center justify-center gap-3">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => setActiveFilter(spec)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                  activeFilter === spec
                    ? 'bg-slate-950 text-white border-slate-950 shadow-lg shadow-slate-950/20'
                    : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {spec}
              </button>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          STORIES GRID
      ───────────────────────────────────────────── */}
      <Section className="bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredStories.map((story, i) => (
                <motion.div
                  key={story.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group"
                >
                  <div className="h-full bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                    {/* Header: KPIs */}
                    <div className="p-8 bg-slate-50 border-b border-slate-100 flex justify-between items-center group-hover:bg-white transition-colors">
                      <div className="flex gap-6">
                        {story.kpis.map((kpi) => (
                          <div key={kpi.label}>
                            <div className="text-2xl font-black text-brand-purple tracking-tight">{kpi.value}</div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{kpi.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                        <TrendingUp className="w-5 h-5 text-emerald-500" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-4 uppercase tracking-widest">
                        <Badge variant="outline" className="rounded-md">{story.specialty}</Badge>
                        <span className="opacity-25">|</span>
                        <MapPin className="w-3 h-3" /> {story.location}
                      </div>

                      <h3 className="text-2xl font-black text-slate-950 mb-4 tracking-tight leading-tight group-hover:text-brand-purple transition-colors">
                        {story.practiceName}
                      </h3>
                      
                      <p className="text-slate-600 font-medium leading-relaxed mb-8">
                        {story.result}
                      </p>

                      <div className="mt-auto pt-8 border-t border-slate-50">
                        <div className="relative">
                          <Quote className="absolute -top-4 -left-2 w-8 h-8 text-slate-100 z-0" />
                          <p className="relative z-10 text-slate-900 font-bold italic text-sm mb-4 leading-relaxed line-clamp-3">
                            "{story.quote}"
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-black text-slate-400">
                             {story.author[0]}
                          </div>
                          <div>
                            <div className="text-xs font-black text-slate-950 tracking-tight">{story.author}</div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">{story.authorTitle}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50/50 border-t border-slate-50 flex items-center justify-center">
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-300">
                        Case Study
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredStories.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-slate-400 font-medium">No stories found for this category.</p>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
