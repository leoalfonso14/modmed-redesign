import { Mic2, Zap, Layout } from 'lucide-react';
import { Section } from './ui/Section';
import { GradientText } from './ui/GradientText';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { ScrollReveal } from './ui/ScrollReveal';

export function AIScribe() {
  return (
    <Section glow="left" className="bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-20 px-4">
        
        {/* Left Column: Messaging */}
        <ScrollReveal direction="left" className="flex-1 text-left">
          <Badge variant="glow" className="mb-8">
            The Standard for Specialty AI
          </Badge>
          <h2 className="text-4xl sm:text-6xl font-bold text-slate-950 mb-8 leading-tight tracking-tight">
            The clinical <br />
            <GradientText glow={false}>breakthrough</GradientText>
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
            ModMed Scribe™ translates natural doctor-patient conversation into real-time clinical notes and suggested billing codes, so you can keep your focus where it belongs: on the patient.
          </p>
          
          <ul className="space-y-6 mb-12">
            {[
              { icon: Mic2, text: "Hands-free, ambient listening during exams" },
              { icon: Zap, text: "99.9% accuracy with specialty-specific logic" },
              { icon: Layout, text: "Automated, native charting within EMA®" }
            ].map((item, i) => (
              <ScrollReveal key={i} variant="fade" delay={i * 0.15}>
                <li className="flex items-center gap-4 text-slate-700 font-bold group">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:scale-110 group-hover:text-brand-purple group-hover:border-brand-purple/20 transition-all shadow-sm">
                    <item.icon className="w-5 h-5 shadow-sm" />
                  </div>
                  {item.text}
                </li>
              </ScrollReveal>
            ))}
          </ul>
          
          <Button variant="primary" size="lg" className="h-14 px-8 shadow-[0_12px_24px_rgba(80,45,127,0.2)]">
            Explore Scribe™
          </Button>
        </ScrollReveal>

        {/* Right Column: Visual Mockup */}
        <ScrollReveal variant="zoom" className="flex-1 w-full flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[540px]">
            {/* Main Container */}
            <div className="bg-white rounded-[32px] p-6 shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-slate-100 relative z-10 overflow-hidden group">
              <div className="flex items-center justify-between mb-8 border-b border-slate-50 pb-5 px-2">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Ambient Scribe Active</span>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-tighter">99% Accuracy</span>
                </div>
              </div>

              <div className="space-y-8 px-2">
                {/* Transcript Mockup */}
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-[11px] font-black text-slate-400 shrink-0 uppercase tracking-tighter shadow-sm border border-slate-200/50">P</div>
                    <div className="bg-slate-50 border border-slate-100 p-4 rounded-3xl rounded-tl-none max-w-[80%]">
                      <p className="text-sm font-semibold text-slate-700 leading-relaxed">"I've been having some sharp pain in my shoulder when I lift my arm overhead."</p>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-end">
                    <div className="bg-brand-purple/5 border border-brand-purple/10 p-4 rounded-3xl rounded-tr-none px-6">
                      <p className="text-xs text-brand-purple font-black uppercase tracking-widest italic animate-pulse">Scribe is analyzing...</p>
                    </div>
                  </div>
                </div>

                {/* Note Mockup (Appears as result) */}
                <div className="mt-10 pt-8 border-t border-slate-100">
                  <div className="flex items-center gap-3 mb-5 text-slate-900 group-hover:scale-105 transition-transform origin-left duration-500">
                    <div className="w-8 h-8 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                      <Layout className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest">EMA® Scribe Suggestion</span>
                  </div>
                  <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">HPI Section</p>
                      <div className="w-3 h-3 rounded-full bg-emerald-500 opacity-20" />
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed font-semibold">
                      Patient reports sharp mechanical pain in the right shoulder localized to the AC joint. Worse with overhead movements. No numbness or tingling.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Subtle background brand glow */}
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-brand-purple/5 rounded-full blur-[80px] -z-10" />
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-purple/5 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl z-0"></div>
          </div>
        </ScrollReveal>

      </div>
    </Section>
  );
}
