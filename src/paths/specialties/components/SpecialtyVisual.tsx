import { motion, AnimatePresence } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Sparkles, Cpu, Activity, BarChart3, ShieldCheck } from 'lucide-react';

interface SpecialtyVisualProps {
  icon: LucideIcon;
  accentColor: string;
  accentBg: string;
}

const AI_NODES = [
  { icon: Cpu, label: 'EHR', delay: 0 },
  { icon: Activity, label: 'PM', delay: 1.5 },
  { icon: ShieldCheck, label: 'RCM', delay: 3 },
  { icon: BarChart3, label: 'Analytics', delay: 4.5 },
];

export function SpecialtyVisual({ icon: Icon, accentColor, accentBg }: SpecialtyVisualProps) {
  return (
    <div className="relative w-full max-w-[500px] aspect-square mx-auto flex items-center justify-center group">
      {/* ── Background Clinical Grid — 404 vibe ─────────────────────── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} 
      />

      {/* ── Ambient Glows ───────────────────────────────────────────── */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute inset-0 ${accentBg} rounded-full blur-[100px] pointer-events-none`}
      />

      {/* ── Orbital Rings ───────────────────────────────────────────── */}
      <div className="absolute inset-0 border-2 border-slate-100/50 rounded-full scale-[0.8] opacity-20" />
      <div className="absolute inset-0 border-2 border-slate-100/50 rounded-full scale-[0.6] opacity-30" />
      
      {/* ── Central specialty hub ─────────────────────────────────────── */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 15, stiffness: 100 }}
        className="relative z-20 w-32 h-32 rounded-[40px] bg-white shadow-2xl border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
      >
        <div className={`absolute inset-0 ${accentBg} rounded-[40px] opacity-10 group-hover:opacity-20 transition-opacity`} />
        
        {/* Core animated icon */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className={`w-14 h-14 ${accentColor} drop-shadow-sm`} />
        </motion.div>
        
        {/* Floating sparkles */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-2xl shadow-lg border border-slate-50 flex items-center justify-center"
        >
          <Sparkles className="w-5 h-5 text-amber-400" />
        </motion.div>
      </motion.div>

      {/* ── Orbiting Intelligence Nodes ───────────────────────────────── */}
      {AI_NODES.map((node, i) => {
        const angle = (i * (360 / AI_NODES.length)) * (Math.PI / 180);
        const radius = 160;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={node.label}
            animate={{ 
              x: [Math.cos(angle) * radius, Math.cos(angle + 0.1) * radius, Math.cos(angle) * radius],
              y: [Math.sin(angle) * radius, Math.sin(angle + 0.1) * radius, Math.sin(angle) * radius],
            }}
            transition={{ 
              duration: 5 + i, 
              repeat: Infinity, 
              ease: "easeInOut",
            }}
            className="absolute z-30"
          >
            {/* Connection line fragment */}
            <svg 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] opacity-20 pointer-events-none -z-10"
              viewBox="0 0 320 320"
            >
              <motion.line 
                x1="160" y1="160" 
                x2={160 + x} y2={160 + y}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className={`${accentColor}`}
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            {/* Node card */}
            <motion.div 
              whileHover={{ scale: 1.1, zIndex: 100 }}
              className="bg-white/80 backdrop-blur-md px-3 py-2 rounded-2xl border border-slate-200/50 shadow-lg flex items-center gap-2 group/node cursor-pointer"
            >
              <div className={`p-1.5 rounded-lg ${accentBg} border ${accentColor.replace('text-', 'border-')}/10`}>
                <node.icon className={`w-3.5 h-3.5 ${accentColor}`} />
              </div>
              <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">{node.label}</span>
            </motion.div>
          </motion.div>
        );
      })}

      {/* ── Pulse Rings — Heartbeat vibe ───────────────────────────── */}
      <AnimatePresence>
        {[1, 2].map((id) => (
          <motion.div
            key={id}
            initial={{ scale: 0.5, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              delay: id * 1.25,
              ease: "easeOut" 
            }}
            className={`absolute w-40 h-40 rounded-full border border-current ${accentColor} opacity-20 pointer-events-none`}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
