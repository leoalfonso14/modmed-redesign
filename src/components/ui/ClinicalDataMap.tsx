import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { BrainCircuit, Mic2, FileText, Activity, Layers, Sparkles } from 'lucide-react';
import { useRef, useEffect } from 'react';

export function ClinicalDataMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 3D rotation
  const springConfig = { damping: 30, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) / rect.width);
      mouseY.set((e.clientY - centerY) / rect.height);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const cards = [
    {
      id: 'ehr',
      label: 'Intelligent EHR',
      icon: BrainCircuit,
      color: 'text-brand-purple',
      bg: 'bg-brand-purple/5',
      pos: 'top-[12%] left-[12%]',
      delay: 0,
      z: 40,
      data: '35k+ Providers'
    },
    {
      id: 'scribe',
      label: 'Ambient Scribe',
      icon: Mic2,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/5',
      pos: 'top-[52%] left-[-8%]',
      delay: 0.1,
      z: 60,
      data: '99% Accuracy'
    },
    {
      id: 'pm',
      label: 'Practice Management',
      icon: Activity,
      color: 'text-blue-500',
      bg: 'bg-blue-500/5',
      pos: 'bottom-[8%] left-[12%]',
      delay: 0.2,
      z: 30,
      data: '2x Efficiency'
    },
    {
      id: 'analytics',
      label: 'Revenue Analytics',
      icon: Layers,
      color: 'text-violet-500',
      bg: 'bg-violet-500/5',
      pos: 'top-[15%] right-[-5%]',
      delay: 0.15,
      z: 50,
      data: '98% Retention'
    },
    {
      id: 'patient',
      label: 'Patient Portal',
      icon: FileText,
      color: 'text-cyan-500',
      bg: 'bg-cyan-500/5',
      pos: 'bottom-[12%] right-[-8%]',
      delay: 0.25,
      z: 20,
      data: 'Mobile First'
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center perspective-[2000px]"
    >
      <motion.div 
        style={{ rotateX, rotateY }}
        className="relative w-full h-full max-w-[600px] preserve-3d"
      >
        {/* Central Intelligence Hub */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-[40px] shadow-[0_40px_100px_rgba(80,45,127,0.15)] border border-slate-100 flex items-center justify-center z-50 group preserve-3d"
        >
          <div className="absolute inset-0 bg-linear-to-br from-brand-purple/5 to-transparent rounded-[40px]" />
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 flex items-center justify-center text-brand-purple shadow-sm group-hover:scale-110 transition-transform duration-500">
              <Sparkles className="w-8 h-8" />
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Intelligence</span>
          </div>
        </motion.div>

        {/* Satellite Cards */}
        {cards.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: card.delay + 0.5, duration: 0.8 }}
            style={{ translateZ: card.z }}
            className={`absolute ${card.pos} group preserve-3d`}
          >
            <div className="bg-white/80 backdrop-blur-xl border border-slate-100 p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 w-[220px]">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-10 h-10 rounded-xl ${card.bg} ${card.color} flex items-center justify-center shadow-sm`}>
                  <card.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Module</span>
                  <span className="text-xs font-black text-slate-900 tracking-tight leading-none truncate">{card.label}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                <span className="text-[10px] font-bold text-slate-400">{card.data}</span>
                <div className={`w-1.5 h-1.5 rounded-full ${card.color.replace('text-', 'bg-')} animate-pulse`} />
              </div>
            </div>
            
            {/* 3D Depth Shadow/Reflection */}
            <div className="absolute -bottom-4 left-4 right-4 h-8 bg-slate-950/5 blur-2xl rounded-full -z-10 group-hover:bg-slate-950/10 transition-colors" />
          </motion.div>
        ))}

        {/* Background Decorative Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] -z-20">
          <div className="absolute inset-0 border border-slate-100 rounded-full scale-[0.6] opacity-50" />
          <div className="absolute inset-0 border border-slate-100 rounded-full animate-[spin_60s_linear_infinite] opacity-30" />
          <div className="absolute inset-0 border border-slate-100 rounded-full scale-[1.4] opacity-20 border-dashed" />
        </div>
      </motion.div>
    </div>
  );
}
