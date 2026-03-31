import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { GradientText } from './ui/GradientText';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl text-center flex flex-col items-center justify-center min-h-[90vh]">
      <Badge variant="glow" className="mb-8 animate-[fadeInUp_0.6s_ease-out]">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple-light opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple-light"></span>
        </span>
        Meet the New ModMed AI
      </Badge>

      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out_0.1s_both]">
        The intelligent operating <br className="hidden sm:block" />
        system for{" "}
        <GradientText>healthcare</GradientText>
      </h1>

      <p className="mt-4 text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 animate-[fadeInUp_0.8s_ease-out_0.2s_both] leading-relaxed">
        Unify your clinical workflow, practice management, and patient
        engagement with a single intuitive platform designed for medical
        specialties.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
        <Button 
          variant="primary" 
          size="lg" 
          icon={ArrowRight} 
          className="w-full sm:w-auto"
        >
          Explore Solutions
        </Button>
        <Button 
          variant="glass" 
          size="lg" 
          icon={Play} 
          iconPosition="left"
          className="w-full sm:w-auto"
        >
          See it in Action
        </Button>
      </div>

      <div className="mt-20 pt-10 border-t border-white/10 w-full animate-[fadeInUp_0.8s_ease-out_0.5s_both]">
        <p className="text-sm font-medium text-slate-500 mb-6 uppercase tracking-wider">
          Trusted by industry leaders across 35,000+ providers
        </p>
        <div className="flex justify-center gap-8 sm:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Abstracted logo placeholders for demo */}
          <div className="h-8 flex items-center text-xl font-bold tracking-tighter mix-blend-screen text-slate-300">
            PRACTICE<span className="text-brand-purple-light">+</span>
          </div>
          <div className="h-8 flex items-center text-xl font-bold tracking-tighter mix-blend-screen text-slate-300">
            DERMA<span className="font-light">CLINIC</span>
          </div>
          <div className="h-8 flex items-center text-xl font-bold tracking-tighter mix-blend-screen text-slate-300">
            ORTHO<span className="text-brand-purple-light">CARE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
