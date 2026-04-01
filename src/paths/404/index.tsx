import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Home, ArrowRight, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { SEO } from '../../components/ui/SEO';

const DOCTOR_EXCUSES = [
  "The page went home early. Classic symptoms: Monday-itis.",
  "Our AI scribe tried to document this page, but even it gave up.",
  "This URL has been referred to a specialist. Est. wait time: forever.",
  "404: The page called in sick. We suspect it's faking.",
  "The page you requested has been admitted to the ICU of broken links.",
  "Diagnosis: Severe URL dysfunction. Prognosis: Unclear.",
  "Our EHR has no record of this page. It may never have existed.",
  "The page is in surgery. Please do not disturb.",
  "Chart not found. Did you try turning the URL off and on again?",
  "This page ghosted us harder than a patient who misses every follow-up.",
];

const PRESCRIPTIONS = [
  "Rx: 2 clicks on the home button, repeat as needed.",
  "Rx: Navigate to /contact and call for backup.",
  "Rx: Immediate redirect to the homepage. No refills.",
];

// Flatline (Sleeping) path vs Heartbeat (Hovered) path
const FLATLINE_PATH = "M0,30 L60,30 L75,30 L85,30 L95,30 L105,30 L120,30 L180,30 L195,30 L205,30 L215,30 L225,30 L240,30 L320,30";
const HEARTBEAT_PATH = "M0,30 L60,30 L75,30 L85,5 L95,55 L105,30 L120,30 L180,30 L195,30 L205,5 L215,55 L225,30 L240,30 L320,30";

export function NotFoundPage() {
  const location = useLocation();
  const [excuse] = useState(
    () => DOCTOR_EXCUSES[Math.floor(Math.random() * DOCTOR_EXCUSES.length)]
  );
  const [prescription] = useState(
    () => PRESCRIPTIONS[Math.floor(Math.random() * PRESCRIPTIONS.length)]
  );
  const [pulse, setPulse] = useState(false);
  const [isAlive, setIsAlive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setPulse((p) => !p), 400); // Faster pulse
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-32 sm:py-40 relative overflow-hidden bg-[#FCFCFD]">
      <SEO 
        title="404 Page Not Found" 
        description="Our clinical AI couldn't find the chart you were looking for. Please check the URL or head back home to find your way."
      />
      {/* Animated background glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-purple/5 rounded-full blur-[140px] mix-blend-multiply" />
        <div className={`absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full blur-[80px] transition-colors duration-1000 ${isAlive ? 'bg-red-500/10' : 'bg-transparent'}`} />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center w-full">

        {/* ECG / Flatline graphic */}
        <div className="flex items-center justify-center mb-12 gap-1 h-32 relative group/ecg mx-auto max-w-lg">
          {/* Clinical Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ 
              backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} 
          />
          
          <svg
            viewBox="0 0 320 60"
            className={`w-full h-24 transition-all duration-700 ${isAlive ? 'text-brand-purple drop-shadow-[0_0_8px_rgba(80,45,127,0.4)]' : 'text-slate-200'}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* The actual monitor path */}
            <motion.path 
              initial={false}
              animate={{ d: isAlive ? HEARTBEAT_PATH : FLATLINE_PATH }}
              transition={{ 
                type: "spring", 
                stiffness: isAlive ? 300 : 100, 
                damping: 20 
              }}
            />
            
            {/* Scanning Line Effect */}
            <motion.rect
              x="-20"
              y="0"
              width="40"
              height="60"
              fill="url(#scan-gradient)"
              animate={{ x: [0, 320] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            
            <defs>
              <linearGradient id="scan-gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                <stop offset="50%" stopColor="currentColor" stopOpacity="0.4" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Heartbeat pulse dot - Pinned to the scanning line logic roughly */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-300 ${
              isAlive 
                ? (pulse ? 'bg-red-500 shadow-[0_0_20px_rgba(239,68,68,1)] scale-125' : 'bg-red-500/40 scale-100') 
                : 'bg-slate-300 shadow-none scale-100'
            }`}
            style={{ left: 'calc(50% + 140px)' }} // Visual accessory
          />
        </div>

        {/* 404 Number */}
        <div className="mb-12 relative">
          <motion.h1 
            animate={isAlive ? { 
              scale: [1, 1.02, 1],
              opacity: [1, 0.8, 1],
              x: [0, -1, 1, 0]
            } : { scale: 1, opacity: 1, x: 0 }}
            transition={{ repeat: Infinity, duration: 0.2, repeatDelay: 0.1 }}
            className="text-7xl sm:text-9xl font-black leading-none relative text-slate-950 tracking-tighter"
          >
            404
          </motion.h1>
        </div>

        {/* Medical chart glass panel */}
        <GlassPanel padding="md" className="mb-12 text-left relative bg-white/80 border-slate-200 shadow-xl backdrop-blur-3xl mx-auto">
          {/* Chart header */}
          <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-brand-purple" />
              <span className="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">Patient Chart</span>
            </div>
            <span className="text-[11px] font-black tracking-widest text-slate-400 font-mono uppercase">MRN: {location.pathname.replace(/\//g, '-').slice(1) || 'UNKNOWN_PATH'}</span>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest w-32 shrink-0 pt-0.5">Chief Complaint</span>
              <span className="text-sm font-medium text-slate-700">Page not found at <code className="text-brand-purple bg-brand-purple/5 px-2 py-0.5 rounded-md border border-brand-purple/10 text-xs font-mono ml-1">{location.pathname}</code></span>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest w-32 shrink-0 pt-0.5">Assessment</span>
              <span className="text-sm font-medium text-slate-700">
                {excuse.split(/(\/contact)/).map((part, i) => 
                  part === '/contact' ? <Link key={i} to="/contact" className="text-brand-purple hover:underline underline-offset-4 decoration-brand-purple/30">/contact</Link> : part
                )}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest w-32 shrink-0 pt-0.5">Plan</span>
              <span className="text-sm font-bold text-emerald-600">
                {prescription.split(/(\/contact)/).map((part, i) => 
                  part === '/contact' ? <Link key={i} to="/contact" className="underline underline-offset-4 decoration-emerald-500/50 hover:decoration-emerald-500 transition-colors">/contact</Link> : part
                )}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4 pt-4 border-t border-slate-100 mt-2">
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest w-32 shrink-0 pt-0.5">Signed By</span>
              <span className="text-sm font-medium text-slate-500 italic">ModMed AI, MD — Chief Error Officer</span>
            </div>
          </div>
        </GlassPanel>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-purple hover:bg-brand-purple-light text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Home className="w-5 h-5" /> Return to Home
          </Link>
          <Link
            to="/contact"
            onMouseEnter={() => setIsAlive(true)}
            onMouseLeave={() => setIsAlive(false)}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-50 transition-all border border-slate-200 shadow-xs hover:shadow-md hover:border-brand-purple/30 group"
          >
            Book a Demo Anyway <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Fine print */}
        <p className="mt-16 text-xs text-slate-400 font-medium">
          No patients were harmed in the making of this error page. This is not medical advice.
          <br />
          If you are experiencing a real 404, please consult a web developer.
        </p>
      </div>
    </div>
  );
}
