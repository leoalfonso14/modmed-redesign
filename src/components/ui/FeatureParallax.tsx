import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { GlassPanel } from "./GlassPanel";
import type { LucideIcon } from "lucide-react";

interface FeatureParallaxProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  index?: number;
  href?: string;
  reverse?: boolean;
}

export function FeatureParallax({
  title,
  description,
  icon: Icon,
  color,
  href,
  reverse = false,
}: FeatureParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const translateY = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), springConfig);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [reverse ? -5 : 5, reverse ? 5 : -5]);

  return (
    <section ref={containerRef} className="py-12 md:py-24 px-6 overflow-hidden">
      <div className={`max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="lg:w-1/2 space-y-6"
        >
          <div className={`w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-purple shadow-sm`}>
            <Icon className="w-5 h-5 text-brand-purple" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            {description}
          </p>
          {href && (
            <Link
              to={href}
              className="flex items-center gap-2 text-brand-purple font-black uppercase text-xs tracking-widest hover:translate-x-2 transition-transform"
            >
              Learn more <span>→</span>
            </Link>
          )}
        </motion.div>

        {/* Parallax Visuals */}
        <div className="lg:w-1/2 relative min-h-[400px] w-full flex items-center justify-center">
          <motion.div 
            style={{ y: translateY, opacity, rotate }}
            className="relative z-10 w-full group"
          >
            <GlassPanel className="p-8 aspect-video border-brand-purple/10 bg-white/40 shadow-2xl backdrop-blur-xl group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-full blur-2xl" />
               <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                     <Icon className={`w-10 h-10 ${color}`} />
                     <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-slate-100" />
                        <div className="w-2 h-2 rounded-full bg-slate-100" />
                        <div className="w-12 h-2 rounded-full bg-slate-50" />
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="h-4 w-3/4 bg-slate-100 rounded" />
                     <div className="h-4 w-1/2 bg-slate-50 rounded" />
                     <div className="h-4 w-full bg-slate-100 rounded" />
                  </div>
               </div>
            </GlassPanel>

            {/* Sub-floating elements */}
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 20]) }}
              className="absolute -top-12 -right-8 w-48 h-48 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" 
            />
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
              className="absolute -bottom-8 -left-12 w-32 h-32 bg-blue-500/5 rounded-[40px] rotate-12 blur-2xl pointer-events-none" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
