import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, CalendarCheck, 
  Users, Mail, Phone, Building2, BrainCircuit, 
  CalendarDays, TrendingUp, Sparkles, Layers, Eye, 
  PersonStanding, Dna, Activity, Wind, Ear, 
  Syringe, Hand, Footprints, TestTube,
  type LucideIcon 
} from 'lucide-react';
import { Badge } from '../../components/ui/Badge';
import { GradientText } from '../../components/ui/GradientText';
import { SEO } from '../../components/ui/SEO';
import { Link } from 'react-router-dom';

// ─────────────────────────────────────────────
// Types & Initial Data
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
// Data Maps
// ─────────────────────────────────────────────

const INTERESTS = [
  { id: 'ehr', label: 'EHR / EMR', icon: BrainCircuit, color: 'text-brand-purple-light', bg: 'bg-brand-purple/10', border: 'border-brand-purple/20' },
  { id: 'pm', label: 'Practice Management', icon: CalendarDays, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { id: 'rcm', label: 'Revenue Cycle (Billing)', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  { id: 'ai', label: 'AI Solutions', icon: Sparkles, color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/20' }
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
// Helpers
// ─────────────────────────────────────────────

function formatPhoneNumber(value: string) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
}

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────

export function ContactPage() {
  const [step, setStep] = useState<ContactStep>(1);
  const [direction, setDirection] = useState(0); // -1 back, 1 forward
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);

  // Scroll to top of the form on step change, useful for mobile
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const nextStep = () => {
    setDirection(1);
    setStep((s) => (s + 1) as ContactStep);
  };

  const prevStep = () => {
    setDirection(-1);
    setStep((s) => (s - 1) as ContactStep);
  };

  const updateData = (data: Partial<FormData>) => {
    if (data.phone !== undefined) {
      data.phone = formatPhoneNumber(data.phone);
    }
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
      x: direction > 0 ? 30 : -30,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 30 : -30,
      opacity: 0,
      scale: 0.98,
    })
  };

  // Helper to render the left-side dynamic context messaging
  const renderContextMessage = () => {
    switch(step) {
      case 1:
        return (
          <motion.div key="step1-text" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <Badge variant="brand" className="mb-6 bg-brand-purple/10 text-brand-purple border-brand-purple/20">Get Started</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 mb-6 leading-[1.1] tracking-tight">
              Book a <br className="hidden lg:block"/>
              <GradientText>Specialized Demo</GradientText>
            </h1>
            <p className="text-slate-500 text-lg sm:text-xl leading-relaxed max-w-md">
              We construct dynamic, intelligent workflows tailored entirely to your practice's DNA. Let's find your fit.
            </p>
          </motion.div>
        );
      case 2:
        return (
          <motion.div key="step2-text" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <Badge variant="brand" className="mb-6 bg-brand-purple/10 text-brand-purple border-brand-purple/20">Step 2</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black text-slate-950 mb-6 leading-[1.1] tracking-tight">
              A deeper dive into <GradientText>{formData.interest}</GradientText>
            </h1>
            <p className="text-slate-500 text-lg sm:text-xl leading-relaxed max-w-md">
              Every medical focus has unique demands. Tell us your specialty, and we'll ensure your demo environment reflects exactly what you need to see.
            </p>
          </motion.div>
        );
      case 3:
        return (
          <motion.div key="step3-text" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <Badge variant="brand" className="mb-6 bg-brand-purple/10 text-brand-purple border-brand-purple/20">Step 3</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black text-slate-950 mb-6 leading-[1.1] tracking-tight">
              Who do we have the <GradientText>pleasure of meeting?</GradientText>
            </h1>
            <p className="text-slate-500 text-lg sm:text-xl leading-relaxed max-w-md">
              Provide your details so our <strong>{formData.specialty}</strong> specialist can reach out and finalize a time that fits your busy schedule.
            </p>
          </motion.div>
        );
      case 4:
        return (
          <motion.div key="step4-text" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <Badge variant="brand" className="mb-6 bg-brand-purple/10 text-brand-purple border-brand-purple/20">Final Step</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black text-slate-950 mb-6 leading-[1.1] tracking-tight">
              Tell us about <GradientText>your practice</GradientText>
            </h1>
            <p className="text-slate-500 text-lg sm:text-xl leading-relaxed max-w-md">
              Scale is everything. Knowing the size of your operation helps us prepare the right implementation protocols and pricing structures.
            </p>
          </motion.div>
        );
      case 5:
        return (
          <motion.div key="step5-text" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 mb-6 leading-[1.1] tracking-tight">
              You're all <GradientText>set!</GradientText>
            </h1>
            <p className="text-slate-500 text-lg sm:text-xl leading-relaxed max-w-md">
              We've successfully queued your request. Check the timeline to see what happens next in your modernization journey.
            </p>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 md:pt-32 md:pb-24 bg-[#FCFCFD] relative overflow-hidden flex items-center">
      <SEO 
        title="Contact Us | Book a Demo" 
        description="Ready to modernize your practice? Contact ModMed to schedule a personalized demo and see our specialty-specific clinical solutions in action."
      />
      {/* ─────────────────────────────────────────────
          Responsive Background Ambient Elements 
      ───────────────────────────────────────────── */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
        
        {/* Progress Bar (Visible Mobile-only or Top level) */}
        {step < 5 && (
          <div className="lg:hidden mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Progress</span>
              <span className="text-xs font-bold text-brand-purple">{((step-1)*25)}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200/50 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(step-1)*25}%` }}
                className="h-full bg-brand-purple rounded-full"
              />
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* ─────────────────────────────────────────────
              Left Panel: Contextual Messaging
          ───────────────────────────────────────────── */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
             <AnimatePresence mode="wait">
               {renderContextMessage()}
             </AnimatePresence>

             {/* Desktop Progress Bar */}
             {step < 5 && (
              <div className="hidden lg:block mt-16 max-w-xs">
                <div className="flex justify-between mb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Progress</span>
                  <span className="text-xs font-bold text-brand-purple">{((step-1)*25)}%</span>
                </div>
                <div className="h-1 w-full bg-slate-200/50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(step-1)*25}%` }}
                    className="h-full bg-brand-purple rounded-full"
                  />
                </div>
              </div>
            )}
          </div>

          {/* ─────────────────────────────────────────────
              Right Panel: Dynamic Form Steps
          ───────────────────────────────────────────── */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white/80 backdrop-blur-3xl border border-slate-200 shadow-[0_8px_48px_rgba(0,0,0,0.06)] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 min-h-[540px] flex flex-col relative overflow-hidden">
              
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
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="flex-1 flex flex-col"
                  >
                    <div className="mb-6">
                      <h2 className="text-2xl font-black text-slate-950 mb-2 tracking-tight">Select your focus</h2>
                      <p className="text-sm font-medium text-slate-500">Choose the primary area of interest for your demo.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {INTERESTS.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => { updateData({ interest: item.label }); nextStep(); }}
                          className={`group relative flex flex-col items-start gap-3 p-5 rounded-2xl border transition-all text-left ${
                            formData.interest === item.label
                              ? `border-brand-purple bg-brand-purple/5 shadow-[0_0_24px_rgba(80,45,127,0.1)]`
                              : 'border-slate-200 bg-white hover:border-brand-purple/30 hover:bg-slate-50 hover:shadow-sm'
                          }`}
                        >
                          <div className={`w-12 h-12 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <item.icon className={`w-5 h-5 ${item.color}`} />
                          </div>
                          <div>
                            <div className="text-slate-950 text-sm font-bold leading-tight mb-1">{item.label}</div>
                            <div className="text-xs text-slate-500 font-medium leading-snug">
                              Explore modern {item.label.toLowerCase()} flows.
                            </div>
                          </div>
                          {formData.interest === item.label && (
                            <div className="absolute top-4 right-4 text-brand-purple animate-in zoom-in duration-200">
                              <CheckCircle2 className="w-5 h-5" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
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
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="flex-1 flex flex-col"
                  >
                    <button 
                      onClick={prevStep}
                      className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-950 mb-6 transition-colors group w-fit uppercase tracking-widest"
                    >
                      <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Back
                    </button>
                    <div className="mb-6">
                      <h2 className="text-2xl font-black text-slate-950 mb-2 tracking-tight">Select your specialty</h2>
                      <p className="text-sm font-medium text-slate-500">Help us match you with the right specialist.</p>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {SPECIALTIES.map((spec) => (
                        <button
                          key={spec.name}
                          onClick={() => { updateData({ specialty: spec.name }); nextStep(); }}
                          className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all ${
                            formData.specialty === spec.name
                              ? 'border-brand-purple bg-brand-purple/5 text-brand-purple shadow-[0_0_12px_rgba(80,45,127,0.08)]'
                              : 'border-slate-200 bg-white text-slate-600 hover:border-brand-purple/30 hover:bg-slate-50 hover:text-slate-950 shadow-xs'
                          }`}
                        >
                          <spec.icon className={`w-5 h-5 ${formData.specialty === spec.name ? 'text-brand-purple' : 'text-slate-400'}`} />
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
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="flex-1 flex flex-col"
                  >
                    <button 
                      onClick={prevStep}
                      className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-950 mb-6 transition-colors group w-fit uppercase tracking-widest"
                    >
                      <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Back
                    </button>
                    <div className="mb-6">
                      <h2 className="text-2xl font-black text-slate-950 mb-2 tracking-tight">Your Details</h2>
                      <p className="text-sm font-medium text-slate-500">Just a few essentials to reach you.</p>
                    </div>
                    
                    <div className="space-y-4 flex-1">
                      <div className="grid grid-cols-2 gap-4">
                        <InputField 
                          label="First Name" 
                          placeholder="e.g. Jane" 
                          value={formData.firstName} 
                          onChange={(v) => updateData({ firstName: v })} 
                        />
                        <InputField 
                          label="Last Name" 
                          placeholder="e.g. Doe" 
                          value={formData.lastName} 
                          onChange={(v) => updateData({ lastName: v })} 
                        />
                      </div>
                      <InputField 
                        label="Office Email" 
                        placeholder="jane@practice.com" 
                        icon={Mail}
                        type="email"
                        value={formData.email} 
                        onChange={(v) => updateData({ email: v })} 
                      />
                      <InputField 
                        label="Phone Number" 
                        placeholder="(555) 000-0000" 
                        icon={Phone}
                        type="tel"
                        value={formData.phone} 
                        onChange={(v) => {
                          if (v.replace(/[^\d]/g, '').length <= 10) {
                            updateData({ phone: v });
                          }
                        }} 
                      />
                    </div>
                    
                    <div className="pt-6 mt-auto">
                      <button 
                        onClick={nextStep}
                        disabled={!isStepValid}
                        className="w-full h-14 bg-brand-purple hover:bg-brand-purple-light disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(80,45,127,0.3)] disabled:shadow-none"
                      >
                        Continue to Final Step <ArrowRight className="w-4 h-4" />
                      </button>
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
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="flex-1 flex flex-col"
                  >
                    <button 
                      onClick={prevStep}
                      className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-950 mb-6 transition-colors group w-fit uppercase tracking-widest"
                    >
                      <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Back
                    </button>
                    <div className="mb-6">
                      <h2 className="text-2xl font-black text-slate-950 mb-2 tracking-tight">Practice Profile</h2>
                      <p className="text-sm font-medium text-slate-500">Help us provision your environment scale.</p>
                    </div>
                    
                    <div className="space-y-6 flex-1">
                      <InputField 
                        label="Practice Name" 
                        placeholder="e.g. Grand Medical Group" 
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
                              className={`flex-1 min-w-[70px] h-11 text-xs font-bold rounded-lg border transition-all ${
                                formData.providerCount === count
                                  ? 'border-brand-purple bg-brand-purple text-white shadow-md'
                                  : 'border-slate-200 bg-white text-slate-600 hover:border-brand-purple/30 hover:bg-slate-50'
                              }`}
                            >
                              {count}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 mt-auto">
                      <button 
                        onClick={nextStep}
                        disabled={!isStepValid}
                        className="w-full h-14 bg-brand-purple hover:bg-brand-purple-light disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-bold rounded-xl text-base transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(80,45,127,0.3)] disabled:shadow-none"
                      >
                        Schedule My Demo <CalendarCheck className="w-5 h-5 ml-1" />
                      </button>
                      <p className="text-[10px] text-slate-500 font-medium text-center mt-4 px-2 leading-relaxed">
                        By submitting, you agree to our <a href="#" className="underline hover:text-slate-950 transition-colors">Privacy Policy</a>.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* STEP 5: SUCCESS! */}
                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex-1 flex flex-col items-center text-center justify-center py-8"
                  >
                    <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                       <CheckCircle2 className="w-10 h-10 text-emerald-500 relative z-10" />
                    </div>
                    
                    <h2 className="text-3xl font-black text-slate-950 mb-3 tracking-tight">Request Confirmed!</h2>
                    <p className="text-slate-500 text-sm font-medium mb-8 max-w-sm">
                      Thank you, {formData.firstName}. Your request for a {formData.specialty} demo has been prioritized.
                    </p>

                    <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-6 text-left mb-8 shadow-xs">
                      <h3 className="text-slate-950 text-sm font-bold mb-5 flex items-center gap-2 uppercase tracking-widest">
                        <div className="w-1.5 h-4 bg-brand-purple rounded-full" /> What's Next?
                      </h3>
                      <div className="space-y-5">
                        <RoadmapItem 
                          num={1} 
                          title="Specialist Review" 
                          desc={`An account specialist will review your ${formData.providerCount} provider profile.`} 
                        />
                        <RoadmapItem 
                          num={2} 
                          title="Scheduling Call" 
                          desc="Expect an email or call within 24 business hours to set a date." 
                        />
                        <RoadmapItem 
                          num={3} 
                          title="Personalized Demo" 
                          desc="We'll show you exactly how ModMed solves your specific pain points." 
                          isLast
                        />
                      </div>
                    </div>

                    <Link to="/" className="text-sm font-bold text-slate-500 hover:text-slate-950 flex items-center justify-center gap-2 transition-colors uppercase tracking-widest group">
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      Return to Home
                    </Link>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

function InputField({ label, placeholder, value, onChange, icon: Icon, type = "text" }: { 
  label: string; 
  placeholder: string; 
  value: string; 
  onChange: (v: string) => void;
  icon?: LucideIcon;
  type?: string;
}) {
  return (
    <div className="text-left w-full group/field">
      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1 transition-colors group-focus-within/field:text-brand-purple">
        {label}
      </label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within/field:text-brand-purple transition-colors" />}
        <input 
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full h-12 bg-white border border-slate-200 focus:border-brand-purple/50 rounded-xl px-4 text-slate-950 text-sm transition-all focus:outline-none focus:ring-4 focus:ring-brand-purple/10 placeholder:text-slate-400 shadow-xs ${Icon ? 'pl-10' : ''}`}
        />
      </div>
    </div>
  );
}

function RoadmapItem({ num, title, desc, isLast }: { num: number; title: string; desc: string; isLast?: boolean }) {
  return (
    <div className="flex gap-4 relative">
      {!isLast && <div className="absolute left-4 top-10 bottom-[-16px] w-px bg-slate-200" />}
      <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-black text-slate-500 shrink-0 relative z-10 shadow-xs">
        {num}
      </div>
      <div className="pb-1">
        <div className="text-slate-950 font-bold mb-0.5 text-sm">{title}</div>
        <div className="text-slate-500 font-medium text-xs leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}
