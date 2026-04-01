import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { GradientText } from './ui/GradientText';
import { ArrowRight, Play } from 'lucide-react';
import { ClinicalDataMap } from './ui/ClinicalDataMap';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative pt-20 pb-12 sm:pt-40 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl flex flex-col items-center justify-center min-h-screen lg:min-h-[110vh]">
      
      {/* TWO-COLUMN CONTENT AREA */}
      <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-10">
        
        {/* Left Column: Messaging */}
        <div className="text-center flex flex-col items-center lg:text-left lg:items-start">
          <Badge variant="glow" className="mb-8 animate-[fadeInUp_0.6s_ease-out]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple/40 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple"></span>
            </span>
            Experience the Clinical AI Revolution
          </Badge>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out_0.1s_both]">
            The intelligent <br className="hidden sm:block" />
            operating system <br className="hidden sm:block" />
            for <GradientText glow={false}>healthcare</GradientText>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-xl mb-10 animate-[fadeInUp_0.8s_ease-out_0.2s_both] leading-relaxed font-medium">
            Unify your clinical workflow, practice management, and patient
            engagement with a single, specialty-driven platform that puts 
            doctors first and outcomes above all.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center w-full animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
            <Link to="/what-we-do">
              <Button 
                variant="primary" 
                size="lg" 
                icon={ArrowRight} 
                className="w-full sm:w-auto h-14 px-8 text-base shadow-[0_12px_24px_rgba(80,45,127,0.25)]"
              >
                Explore Solutions
              </Button>
            </Link>
            <Link to="/resources/webinars">
              <Button 
                variant="glass" 
                size="lg" 
                icon={Play} 
                iconPosition="left"
                className="w-full sm:w-auto h-14 px-8 text-base bg-white/60"
              >
                See it in Action
              </Button>
            </Link>
          </div>
        </div>
 
        {/* Right Column: Interactive 3D Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full overflow-hidden lg:overflow-visible"
        >
          <ClinicalDataMap />
        </motion.div>
      </div>

    </div>
  );
}
