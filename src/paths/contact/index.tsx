import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, CalendarCheck, 
  Users, Mail, Phone, Building2, BrainCircuit, 
  CalendarDays, TrendingUp, Sparkles, Layers, Eye, 
  PersonStanding, Dna, Activity, Wind, Ear, 
  Syringe, Hand, Footprints, TestTube,
  type LucideIcon 
} from 'lucide-react';
import { Section } from '../../components/ui/Section';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { Badge } from '../../components/ui/Badge';
import { GradientText } from '../../components/ui/GradientText';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

type ContactStep = 1 | 2 | 3 | 4 | 5;

interface FormData {
  interest: string;
  specialty: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  practiceName: string;
  providerCount: string;
}

const INITIAL_DATA: FormData = {
  interest: '',
  specialty: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  practiceName: '',
  providerCount: ''
};

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const INTERESTS = [
  { id: 'ehr', label: 'EHR / EMR', icon: BrainCircuit, color: 'text-brand-purple-light', bg: 'bg-brand-purple/10', border: 'border-brand-purple/20' },
  { id: 'pm', label: 'Practice Management', icon: CalendarDays, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { id: 'rcm', label: 'Revenue Cycle (Billing)', icon: TrendingUp, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  { id: 'ai', label: 'AI Solutions', icon: Sparkles, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' }
];

const SPECIALTIES = [
  { name: "Dermatology", icon: Layers },
  { name: "Ophthalmology", icon: Eye },
  { name: "Orthopedics", icon: PersonStanding },
  { name: "Gastroenterology", icon: Dna },
  { name: "OBGYN", icon: Activity },
  { name: "Allergy", icon: Wind },
  { name: "ENT", icon: Ear },
  { name: "Pain Management", icon: Syringe },
  { name: "Plastic Surgery", icon: Hand },
  { name: "Podiatry", icon: Footprints },
  { name: "Urology", icon: TestTube }
];

const PROVIDER_COUNTS = ['Solo (1)', '2-5', '6-10', '11-25', '26+'];

// ─────────────────────────────────────────────
// Helper Component: Progress Indicator
// ─────────────────────────────────────────────

function ProgressIndicator({ step }: { step: number }) {
  const progress = (step-1) * 25;
  return (
    <div className="w-full max-w-xl mx-auto mb-12">
      <div className="flex justify-between mb-2">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Progress</span>
        <span className="text-xs font-bold text-brand-purple-light">{progress}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-full bg-brand-purple shadow-[0_0_12px_rgba(80,45,127,0.8)] rounded-full"
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────

export function ContactPage() {
  const [step, setStep] = useState<ContactStep>(1);
  const [direction, setDirection] = useState(0); // -1 back, 1 forward
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);

  const nextStep = () => {
    setDirection(1);
    setStep((s) => (s + 1) as ContactStep);
  };

  const prevStep = () => {
    setDirection(-1);
    setStep((s) => (s - 1) as ContactStep);
  };

  const updateData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const isStepValid = useMemo(() => {
    if (step === 1) return !!formData.interest;
    if (step === 2) return !!formData.specialty;
    if (step === 3) return !!formData.firstName && !!formData.lastName && !!formData.email && !!formData.phone;
    if (step === 4) return !!formData.practiceName && !!formData.providerCount;
    return true;
  }, [step, formData]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <Section className="pt-32 pb-24 flex flex-col items-center">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] opacity-20" />
      </div>

      <div className="max-w-4xl w-full">
        {step < 5 && (
          <div className="text-center mb-12 animate-[fadeInUp_0.8s_ease-out]">
            <Badge variant="brand" className="mb-4">Get Started</Badge>
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-4">
              Book a <GradientText>Specialized Demo</GradientText>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              We'll custom-tailor our presentation to your workflow, specialty, and practice goals.
            </p>
          </div>
        )}

        {step < 5 && <ProgressIndicator step={step} />}

        <div className="relative min-h-[400px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            
            {/* STEP 1: Focus Area */}
            {step === 1 && (
              <motion.div
                key="step1"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="md:col-span-2 mb-4">
                  <h2 className="text-2xl font-bold text-white mb-2">What can we help you with?</h2>
                  <p className="text-slate-400">Select your primary area of interest to get started.</p>
                </div>
                {INTERESTS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { updateData({ interest: item.label }); nextStep(); }}
                    className={`group relative flex items-center gap-4 p-5 rounded-2xl border transition-all text-left ${
                      formData.interest === item.label
                        ? `${item.border} bg-white/10`
                        : 'border-white/5 bg-white/5 hover:border-white/20 hover:bg-white/[0.08]'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <div className="text-white font-bold leading-tight mb-1">{item.label}</div>
                      <div className="text-xs text-slate-500 leading-snug">Explore features and workflows tailored to {item.label.toLowerCase()}.</div>
                    </div>
                    {formData.interest === item.label && (
                      <CheckCircle2 className={`w-5 h-5 ml-auto ${item.color}`} />
                    )}
                  </button>
                ))}
              </motion.div>
            )}

            {/* STEP 2: Specialty */}
            {step === 2 && (
              <motion.div
                key="step2"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <button 
                  onClick={prevStep}
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to interests
                </button>
                <h2 className="text-2xl font-bold text-white mb-2">Select your specialty</h2>
                <p className="text-slate-400 mb-8">This helps us match you with the right specialist.</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {SPECIALTIES.map((spec) => (
                    <button
                      key={spec.name}
                      onClick={() => { updateData({ specialty: spec.name }); nextStep(); }}
                      className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all ${
                        formData.specialty === spec.name
                          ? 'border-brand-purple bg-brand-purple/10 text-white'
                          : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <spec.icon className="w-6 h-6" />
                      <span className="text-xs font-bold text-center leading-tight">{spec.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: Identification */}
            {step === 3 && (
              <motion.div
                key="step3"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="max-w-xl mx-auto"
              >
                <button 
                  onClick={prevStep}
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to specialty
                </button>
                <h2 className="text-2xl font-bold text-white mb-2">About you</h2>
                <p className="text-slate-400 mb-8">How should we reach out to schedule our session?</p>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <InputField 
                      label="First Name" 
                      placeholder="Jane" 
                      value={formData.firstName} 
                      onChange={(v) => updateData({ firstName: v })} 
                    />
                    <InputField 
                      label="Last Name" 
                      placeholder="Doe" 
                      value={formData.lastName} 
                      onChange={(v) => updateData({ lastName: v })} 
                    />
                  </div>
                  <InputField 
                    label="Office Email" 
                    placeholder="jane@practice.com" 
                    icon={Mail}
                    value={formData.email} 
                    onChange={(v) => updateData({ email: v })} 
                  />
                  <InputField 
                    label="Phone Number" 
                    placeholder="(555) 000-0000" 
                    icon={Phone}
                    value={formData.phone} 
                    onChange={(v) => updateData({ phone: v })} 
                  />
                  
                  <div className="pt-4">
                    <button 
                      onClick={nextStep}
                      disabled={!isStepValid}
                      className="w-full h-12 bg-brand-purple hover:bg-brand-purple-light disabled:opacity-50 disabled:hover:bg-brand-purple text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_14px_rgba(80,45,127,0.4)]"
                    >
                      Continue <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Practice Profile */}
            {step === 4 && (
              <motion.div
                key="step4"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="max-w-xl mx-auto"
              >
                <button 
                  onClick={prevStep}
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to info
                </button>
                <h2 className="text-2xl font-bold text-white mb-2">Practice Profile</h2>
                <p className="text-slate-400 mb-8">One last thing to help us prepare your demo environment.</p>
                
                <div className="space-y-6">
                  <InputField 
                    label="Practice Name" 
                    placeholder="Grand Medical Group" 
                    icon={Building2}
                    value={formData.practiceName} 
                    onChange={(v) => updateData({ practiceName: v })} 
                  />
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Users className="w-3.5 h-3.5" /> Provider Count
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {PROVIDER_COUNTS.map((count) => (
                        <button
                          key={count}
                          onClick={() => updateData({ providerCount: count })}
                          className={`flex-1 min-w-[80px] h-10 text-xs font-bold rounded-lg border transition-all ${
                            formData.providerCount === count
                              ? 'border-brand-purple bg-brand-purple/10 text-white'
                              : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white'
                          }`}
                        >
                          {count}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      onClick={nextStep}
                      disabled={!isStepValid}
                      className="w-full h-14 bg-brand-purple hover:bg-brand-purple-light disabled:opacity-50 disabled:hover:bg-brand-purple text-white font-bold rounded-xl text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(80,45,127,0.4)]"
                    >
                      Schedule My Demo <CalendarCheck className="w-5 h-5 ml-1" />
                    </button>
                    <p className="text-[10px] text-slate-500 text-center mt-4 px-8 leading-relaxed">
                      By clicking submit, you agree to our <a href="#" className="underline hover:text-slate-300">Privacy Policy</a> and understand that a specialist will contact you via email or phone.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 5: SUCCESS! */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-2xl mx-auto text-center py-8"
              >
                <div className="w-20 h-20 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                   <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full" />
                   <CheckCircle2 className="w-10 h-10 text-emerald-400 relative z-10" />
                </div>
                
                <h2 className="text-4xl font-black text-white mb-4">Request Sent!</h2>
                <p className="text-slate-400 text-lg mb-12">
                  Thanks for your interest, {formData.firstName}. We've received your request for a {formData.interest} demo for {formData.practiceName}.
                </p>

                <GlassPanel padding="lg" className="border-brand-purple/20 text-left bg-brand-purple/5">
                  <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                    <div className="w-1.5 h-4 bg-brand-purple-light rounded-full" /> What's Next?
                  </h3>
                  <div className="space-y-6">
                    <RoadmapItem 
                      num={1} 
                      title="Specialist Review" 
                      desc="An account specialist in your region will review your practice profile and needs." 
                    />
                    <RoadmapItem 
                      num={2} 
                      title="Scheduling Call" 
                      desc="Expect an email or phone call within 24 business hours to set a date." 
                    />
                    <RoadmapItem 
                      num={3} 
                      title="Personalized Demo" 
                      desc="We'll show you exactly how ModMed solves your specific pain points." 
                      isLast
                    />
                  </div>
                </GlassPanel>

                <div className="mt-12 group">
                  <a href="/" className="text-slate-400 hover:text-white flex items-center justify-center gap-2 transition-colors">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to home page
                  </a>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

function InputField({ label, placeholder, value, onChange, icon: Icon }: { 
  label: string; 
  placeholder: string; 
  value: string; 
  onChange: (v: string) => void;
  icon?: LucideIcon
}) {
  return (
    <div className="text-left">
      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1">
        {label}
      </label>
      <div className="relative group">
        {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-brand-purple-light transition-colors" />}
        <input 
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full h-12 bg-white/5 hover:bg-white/[0.08] focus:bg-white/[0.1] border border-white/10 focus:border-brand-purple/50 rounded-xl px-4 text-white text-sm transition-all focus:outline-none focus:ring-1 focus:ring-brand-purple/30 placeholder:text-slate-600 ${Icon ? 'pl-11' : ''}`}
        />
      </div>
    </div>
  );
}

function RoadmapItem({ num, title, desc, isLast }: { num: number; title: string; desc: string; isLast?: boolean }) {
  return (
    <div className="flex gap-4 relative">
      {!isLast && <div className="absolute left-4 top-10 bottom-[-10px] w-px bg-white/10" />}
      <div className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-xs font-bold text-slate-400 shrink-0 relative z-10">
        {num}
      </div>
      <div>
        <div className="text-slate-200 font-bold mb-1 text-sm">{title}</div>
        <div className="text-slate-500 text-xs leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}
