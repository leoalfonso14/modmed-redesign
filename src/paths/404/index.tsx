import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Home, ArrowRight, Stethoscope } from 'lucide-react';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { GradientText } from '../../components/ui/GradientText';

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

export function NotFoundPage() {
  const location = useLocation();
  const [excuse] = useState(
    () => DOCTOR_EXCUSES[Math.floor(Math.random() * DOCTOR_EXCUSES.length)]
  );
  const [prescription] = useState(
    () => PRESCRIPTIONS[Math.floor(Math.random() * PRESCRIPTIONS.length)]
  );
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setPulse((p) => !p), 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-40 relative overflow-hidden">
      {/* Animated background glow — extra dramatic for 404 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-purple/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-red-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">

        {/* ECG / Flatline graphic */}
        <div className="flex items-center justify-center mb-8 gap-1">
          <svg
            viewBox="0 0 320 60"
            className="w-64 h-14 text-brand-purple-light/60"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {/* Flatline with one spike */}
            <polyline points="0,30 60,30 75,30 85,5 95,55 105,30 120,30 180,30 195,30 205,5 215,55 225,30 240,30 320,30" />
          </svg>
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              pulse ? 'bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.8)]' : 'bg-red-400/30'
            }`}
          />
        </div>

        {/* 404 Number */}
        <div className="mb-4">
          <span className="text-[120px] sm:text-[160px] font-black leading-none text-white/5 select-none absolute left-1/2 -translate-x-1/2 -translate-y-2">
            404
          </span>
          <h1 className="text-7xl sm:text-9xl font-black leading-none relative">
            <GradientText>404</GradientText>
          </h1>
        </div>

        {/* Medical chart glass panel */}
        <GlassPanel padding="md" className="mb-8 text-left relative border-white/10">
          {/* Chart header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-brand-purple-light" />
              <span className="text-xs font-bold text-brand-purple-light uppercase tracking-widest">Patient Chart</span>
            </div>
            <span className="text-xs text-slate-500 font-mono">MRN: {location.pathname.replace(/\//g, '-').toUpperCase().slice(1) || 'UNKNOWN'}</span>
          </div>

          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase w-24 shrink-0">Chief Complaint</span>
              <span className="text-sm text-slate-200">Page not found at <code className="text-brand-purple-light bg-brand-purple/10 px-1.5 py-0.5 rounded text-xs font-mono">{location.pathname}</code></span>
            </div>
            <div className="flex gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase w-24 shrink-0">Assessment</span>
              <span className="text-sm text-slate-200">{excuse}</span>
            </div>
            <div className="flex gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase w-24 shrink-0">Plan</span>
              <span className="text-sm text-emerald-400 font-medium">{prescription}</span>
            </div>
            <div className="flex gap-3 pt-2 border-t border-white/5">
              <span className="text-xs font-bold text-slate-500 uppercase w-24 shrink-0">Signed By</span>
              <span className="text-sm text-slate-400 italic">ModMed AI, MD — Chief Error Officer</span>
            </div>
          </div>
        </GlassPanel>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-4 bg-brand-purple hover:bg-brand-purple-light text-white rounded-full font-semibold text-lg transition-all shadow-[0_0_15px_rgba(80,45,127,0.5)] hover:shadow-[0_0_25px_rgba(106,60,168,0.7)] transform hover:-translate-y-0.5"
          >
            <Home className="w-5 h-5" /> Return to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-4 glass-panel text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all border border-slate-700 hover:border-slate-500 hover:-translate-y-0.5"
          >
            Book a Demo Anyway <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Fine print */}
        <p className="mt-10 text-xs text-slate-600">
          No patients were harmed in the making of this error page. This is not medical advice.
          <br />
          If you are experiencing a real 404, please consult a web developer.
        </p>
      </div>
    </div>
  );
}
