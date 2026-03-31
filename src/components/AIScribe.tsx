import { Mic2, CheckCircle2, Zap, Layout } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { GlassPanel } from './ui/GlassPanel';
import { Badge } from './ui/Badge';
import { GradientText } from './ui/GradientText';

export function AIScribe() {
  return (
    <Section glow="left">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Column: Messaging */}
        <div className="flex-1 text-left">
          <Badge variant="brand" className="mb-6">
            Available Now
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            The AI documentation <br />
            <GradientText>breakthrough</GradientText>
          </h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
            ModMed Scribe 2.0 translates natural doctor-patient conversation into real-time clinical notes, and suggested coding, so you can keep your focus where it belongs: on the patient.
          </p>
          
          <ul className="space-y-4 mb-10">
            {[
              { icon: Mic2, text: "Hands-free, ambient listening during exams" },
              { icon: Zap, text: "99.9% accuracy with specialty-specific logic" },
              { icon: Layout, text: "Automated charting within EMA®" }
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-200 font-medium group">
                <div className="w-8 h-8 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple-light group-hover:scale-110 transition-transform">
                  <item.icon className="w-4 h-4" />
                </div>
                {item.text}
              </li>
            ))}
          </ul>
          
          <Button variant="white" size="md">
            Learn about Scribe 2.0
          </Button>
        </div>

        {/* Right Column: Visual Mockup */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[500px]">
            {/* Main Container */}
            <GlassPanel padding="sm" className="relative z-10 overflow-hidden border-white/20">
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4 px-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Live Scribe Session</span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>

              <div className="space-y-6 px-2">
                {/* Transcript Mockup */}
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400 shrink-0 uppercase">P</div>
                    <div className="bg-white/5 border border-white/5 p-3 rounded-2xl rounded-tl-none">
                      <p className="text-sm text-slate-300">"I've been having some sharp pain in my shoulder when I lift my arm overhead."</p>
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="bg-brand-purple/20 border border-brand-purple/20 p-3 rounded-2xl rounded-tr-none">
                      <p className="text-sm text-brand-purple-light font-medium italic">Scribe is analyzing...</p>
                    </div>
                  </div>
                </div>

                {/* Note Mockup (Appears as result) */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-4 text-brand-purple-light">
                    <Layout className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">EMA® Suggestion</span>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl">
                    <p className="text-xs font-bold text-emerald-400 mb-2 uppercase tracking-tighter">HPI Section</p>
                    <p className="text-sm text-slate-100 leading-relaxed">
                      Patient reports sharp mechanical pain in the right shoulder localized to the AC joint. Worse with overhead movements. No numbness or tingling reported.
                    </p>
                  </div>
                </div>
              </div>
            </GlassPanel>
            
            {/* Floating accent elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-purple/30 rounded-full blur-2xl z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-purple-light/20 rounded-full blur-2xl z-0"></div>
          </div>
        </div>

      </div>
    </Section>
  );
}
