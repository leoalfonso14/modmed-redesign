import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Mic,
  Zap,
  MessageSquare,
  ShieldCheck,
  BrainCircuit,
  Database,
  ArrowRight,
  Cpu,
} from "lucide-react";
import { Section } from "../../../components/ui/Section";
import { Badge } from "../../../components/ui/Badge";
import { GradientText } from "../../../components/ui/GradientText";
import { GlassPanel } from "../../../components/ui/GlassPanel";
import { Button } from "../../../components/ui/Button";
import { SEO } from "../../../components/ui/SEO";
import { Video } from "../../../components/ui/Video";
import { Link } from "react-router";

const AI_PILLARS = [
  {
    id: "clinical",
    title: "Clinical Intelligence",
    subtitle: "ModMed Scribe 2.0",
    desc: "Ambient AI that translates natural patient conversations into structured clinical notes and accurate coding.",
    icon: Mic,
    color: "text-brand-purple",
    bg: "bg-brand-purple/5",
    border: "border-brand-purple/10",
  },
  {
    id: "admin",
    title: "Administrative AI",
    subtitle: "Smarter Faxing",
    desc: "Automated document processing identifies, categorizes, and links faxes to the correct patient records instantly.",
    icon: Zap,
    color: "text-blue-500",
    bg: "bg-blue-500/5",
    border: "border-blue-500/10",
  },
  {
    id: "patient",
    title: "Patient Collaboration",
    subtitle: "Message Routing",
    desc: "Intelligent triage of incoming patient messages, ensuring they reach the right staff member automatically.",
    icon: MessageSquare,
    color: "text-emerald-500",
    bg: "bg-emerald-500/5",
    border: "border-emerald-500/10",
  },
  {
    id: "billing",
    title: "Billing Intelligence",
    subtitle: "Claims Denial Assessment",
    desc: "Flag potential denials before submission with predictive analysis based on clinical data patterns.",
    icon: ShieldCheck,
    color: "text-amber-500",
    bg: "bg-amber-500/5",
    border: "border-amber-500/10",
  },
];

export function AISolutionsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isListening, setIsListening] = useState(false);

  // --- Types for Web Speech API ---
  interface SpeechRecognitionEvent extends Event {
    resultIndex: number;
    results: SpeechRecognitionResultList;
  }

  interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    onresult: (event: SpeechRecognitionEvent) => void;
    onend: () => void;
    start: () => void;
    stop: () => void;
  }

  interface WindowWithSpeech extends Window {
    SpeechRecognition?: { new (): SpeechRecognition };
    webkitSpeechRecognition?: { new (): SpeechRecognition };
  }
  // --------------------------------

  const [isProcessing, setIsProcessing] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stopInteraction = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    recognitionRef.current?.stop();
    setIsListening(false);
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowNote(true);
    }, 2500);
  };

  // Initialize Speech Recognition
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        (window as WindowWithSpeech).SpeechRecognition ||
        (window as WindowWithSpeech).webkitSpeechRecognition;

      if (SpeechRecognition) {
        const recognitionInstance = new SpeechRecognition();
        recognitionInstance.continuous = true;
        recognitionInstance.interimResults = false;
        recognitionInstance.lang = "en-US";

        recognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
          let currentFinal = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
              currentFinal += event.results[i][0].transcript;
            }
          }
          if (currentFinal) setTranscript((prev) => prev + " " + currentFinal);
        };

        recognitionInstance.onend = () => {
          setIsListening((prev) => {
            if (prev) {
              stopInteraction();
            }
            return false;
          });
        };

        recognitionRef.current = recognitionInstance;
      }
    }

    return () => {
      recognitionRef.current?.stop();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bridgeOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.8, 0.9],
    [0, 1, 1, 0],
  );

  // Handle Spotlight Mouse Movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!spotlightRef.current) return;
    const rect = spotlightRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const startListening = () => {
    if (isListening) {
      stopInteraction();
      return;
    }

    setTranscript("");
    setShowNote(false);
    setIsListening(true);

    // Auto-stop after 10 seconds
    timerRef.current = setTimeout(() => {
      stopInteraction();
    }, 10000);

    try {
      recognitionRef.current?.start();
    } catch (e) {
      console.error("Speech recognition error:", e);
      setIsListening(false);
    }
  };

  interface ClinicalSynthesis {
    specialty: string;
    subjective: string;
    objective: string;
    assessment: string;
  }

  const getClinicalSummary = (raw: string): string | ClinicalSynthesis => {
    if (!raw || raw.length < 5)
      return "Capture insufficient for clinical synthesis. Please ensure patient conversation is within range.";

    const text = raw.toLowerCase();
    let specialty = "INTERNAL MEDICINE";
    const subjective = raw.trim();
    const objective =
      "Vital signs stable. Physical exam deferred for this interaction simulation.";
    let assessment = "Ambient clinical data captured.";

    // Medical Inference Logic
    if (
      text.includes("pain") ||
      text.includes("hurt") ||
      text.includes("ache")
    ) {
      assessment =
        "Reports acute/localized discomfort. R/O musculoskeletal vs specific pathology.";
    }
    if (
      text.includes("skin") ||
      text.includes("rash") ||
      text.includes("dermatology")
    ) {
      specialty = "DERMATOLOGY";
      assessment = "Dermatological presentation requiring visual inspection.";
    }
    if (
      text.includes("heart") ||
      text.includes("chest") ||
      text.includes("cardio")
    ) {
      specialty = "CARDIOLOGY";
      assessment = "Potential cardiac concern investigated.";
    }

    return {
      specialty,
      subjective,
      objective,
      assessment,
    };
  };

  const clinicalData = getClinicalSummary(transcript);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FCFCFD]">
      <SEO
        title="Responsible Clinical AI"
        description="Experience the future of healthcare with ModMed Scribe 2.0 and responsible AI solutions built directly into your clinical workflow."
      />

      {/* ── Hero: The Intelligence Hub ── */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-24 px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[140px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge
              variant="glow"
              className="mb-6 uppercase tracking-[0.2em] font-black"
            >
              Clinical AI Revolution
            </Badge>
            <h1 className="text-5xl sm:text-8xl font-black text-slate-950 mb-8 tracking-tighter leading-[0.9]">
              Cure the <br />
              <GradientText>drudgery.</GradientText>
            </h1>
            <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
              We build responsible AI that enhances provider capabilities,
              protects your connection with patients, and removes the
              administrative burden of modern medicine.
            </p>
          </motion.div>

          {/* Scribe 2.0 Video Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative max-w-4xl mx-auto rounded-[48px] overflow-hidden shadow-2xl border-4 border-white shadow-brand-purple/20 group"
          >
            <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-40 transition-opacity z-10 pointer-events-none" />
            <Video
              src="https://www.modmed.com/wp-content/uploads/2025/11/CRP-13472-1125-Video-ModMed-Scribe-2.0-Launch-8Sec-updaated.mp4"
              autoPlay
              loop
              muted
              className="w-full aspect-video object-cover"
            />
            <div className="absolute bottom-10 left-10 z-20 text-left">
              <div className="text-white h-12 w-12 bg-brand-purple rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-white text-3xl font-black tracking-tight drop-shadow-md">
                Scribe 2.0
              </h3>
              <p className="text-white/80 font-bold uppercase tracking-widest text-[10px]">
                Active Ambient AI
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Unique Animation: The Neural Clinical Bridge ── */}
      <section className="py-12 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-4 italic">
              The Intelligence layer
            </h2>
            <h3 className="text-4xl font-black text-slate-950 tracking-tight">
              How Conversation becomes{" "}
              <GradientText>Structured Data.</GradientText>
            </h3>
          </div>

          <div className="relative h-[400px] flex items-center justify-between">
            {/* Left: Provider + Patient */}
            <div className="flex flex-col items-center gap-6 relative z-10 w-1/4">
              <button
                onClick={startListening}
                className={`w-24 h-24 rounded-[32px] flex items-center justify-center shadow-lg transition-all relative overflow-hidden group ${
                  isListening
                    ? "bg-emerald-500 scale-110 shadow-emerald-500/20"
                    : "bg-slate-50 border border-slate-200 hover:border-brand-purple/40 hover:bg-white active:scale-95"
                }`}
              >
                {isListening && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-x-4 bottom-4 flex items-end gap-1 h-8 justify-center"
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: [8, 24, 12, 28, 8] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.6,
                          delay: i * 0.1,
                        }}
                        className="w-1 bg-white rounded-full"
                      />
                    ))}
                  </motion.div>
                )}
                <Mic
                  className={`w-10 h-10 transition-colors ${isListening ? "text-white translate-y-[-12px]" : "text-slate-400 group-hover:text-brand-purple"}`}
                />
              </button>
              <div className="text-center relative">
                <AnimatePresence>
                  {isListening && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-48"
                    >
                      <div className="flex items-center justify-center gap-1.5 h-12">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 1.2,
                              delay: i * 0.4,
                            }}
                            className="w-2 h-2 rounded-full bg-emerald-400"
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div
                  className={`font-black text-lg transition-colors ${isListening ? "text-emerald-500" : "text-slate-950"}`}
                >
                  {isListening ? "Stop Speaking" : "Ambient Audio"}
                </div>
                <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest italic group-hover:text-brand-purple">
                  {isListening ? "Listening to you..." : "Click to Speak"}
                </div>
              </div>
            </div>

            {/* Center: The AI Processing Bridge */}
            <div className="flex-1 relative h-full flex items-center justify-center px-12">
              {/* The "Bridge" Track */}
              <div className="absolute inset-x-12 h-0.5 bg-slate-100" />

              {/* Central AI Engine */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="w-32 h-32 rounded-full bg-white border border-slate-100 shadow-2xl flex items-center justify-center relative z-20 group"
              >
                <div className="absolute inset-0 bg-brand-purple/5 rounded-full blur-2xl animate-pulse" />
                <Cpu className="w-12 h-12 text-brand-purple drop-shadow-[0_0_15px_rgba(80,45,127,0.3)]" />
              </motion.div>

              {/* Animated Particles */}
              <motion.div
                style={{ opacity: isProcessing ? 1 : bridgeOpacity }}
                className="absolute inset-x-12 h-1 flex items-center"
              >
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={
                      isProcessing
                        ? {
                            x: ["0%", "1000%"],
                            opacity: [0, 1, 0],
                          }
                        : {
                            x: "0%",
                            opacity: 0,
                          }
                    }
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      delay: i * 0.2,
                      ease: "linear",
                    }}
                    className="absolute w-2 h-2 rounded-full bg-brand-purple-light blur-[1px]"
                  />
                ))}
              </motion.div>
            </div>

            {/* Right: Structured Clinical Data */}
            <div className="flex flex-col items-center gap-6 relative z-10 w-1/4 pt-8">
              <div
                className={`w-24 h-24 rounded-[32px] flex items-center justify-center shadow-lg transition-all ${
                  showNote
                    ? "bg-emerald-500 shadow-emerald-500/20 scale-110"
                    : "bg-brand-purple/10 border border-brand-purple/20"
                }`}
              >
                <Database
                  className={`w-10 h-10 transition-colors ${showNote ? "text-white" : "text-brand-purple"}`}
                />
              </div>

              <div className="text-center">
                <div
                  className={`font-black text-lg transition-colors ${showNote ? "text-emerald-600" : "text-brand-purple"}`}
                >
                  {showNote ? "Note Ready" : "Structured Note"}
                </div>
                <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest italic leading-tight">
                  {showNote ? "Review Completed" : "Pending Intake"}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {showNote ? (
                  <motion.div
                    key="note"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="w-full max-w-[320px] z-30"
                  >
                    <GlassPanel className="p-5 border-brand-purple/20 bg-emerald-500/5 shadow-2xl shadow-emerald-500/10 w-full">
                      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-emerald-500/10">
                        <BrainCircuit className="w-4 h-4 text-emerald-500" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-emerald-600 italic">
                          Automated Synthesis
                        </span>
                      </div>

                      {typeof clinicalData === "string" ? (
                        <p className="text-[11px] text-slate-600 font-medium italic">
                          "{clinicalData}"
                        </p>
                      ) : (
                        <div className="space-y-4">
                          <div className="space-y-1">
                            <div className="text-[7px] font-black uppercase text-slate-400 tracking-tighter">
                              Subjective / CC
                            </div>
                            <p className="text-[10px] text-slate-900 font-bold leading-tight italic">
                              "{(clinicalData as ClinicalSynthesis).subjective}"
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1">
                              <div className="text-[7px] font-black uppercase text-slate-400 tracking-tighter">
                                Assessment
                              </div>
                              <p className="text-[9px] text-emerald-700 font-medium leading-none italic">
                                {(clinicalData as ClinicalSynthesis).assessment}
                              </p>
                            </div>
                            <div className="space-y-1">
                              <div className="text-[7px] font-black uppercase text-slate-400 tracking-tighter">
                                Specialty
                              </div>
                              <p className="text-[9px] text-brand-purple font-medium leading-none italic">
                                {(clinicalData as ClinicalSynthesis).specialty}
                              </p>
                            </div>
                          </div>
                          <div className="pt-2 border-t border-emerald-500/10">
                            <div className="text-[7px] font-black uppercase text-slate-400 tracking-tighter mb-2">
                              Medical Disclaimer
                            </div>
                            <p className="text-[8px] text-slate-400 leading-relaxed italic">
                              Ambient AI-generated suggestion. For clinical
                              review only. Final documentation is the
                              responsibility of the provider.
                            </p>
                          </div>
                        </div>
                      )}
                    </GlassPanel>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI Pillars Bento Grid ── */}
      <Section className="py-16 md:py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AI_PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassPanel className="p-10 h-full flex flex-col hover:border-brand-purple/30 transition-all duration-500 group">
                  <div
                    className={`w-14 h-14 rounded-2xl ${pillar.bg} border ${pillar.border} flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <pillar.icon className={`w-7 h-7 ${pillar.color}`} />
                  </div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-3">
                    {pillar.title}
                  </h4>
                  <h3 className="text-2xl font-black text-slate-950 mb-4 tracking-tight group-hover:text-brand-purple transition-colors leading-tight">
                    {pillar.subtitle}
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8">
                    {pillar.desc}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-[10px] font-black text-slate-400 group-hover:text-brand-purple transition-all italic tracking-widest uppercase">
                    Learn Efficiency <ArrowRight className="w-3 h-3" />
                  </div>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Responsible AI Spotlight Interaction ── */}
      <Section className="py-12 md:py-24 bg-slate-950 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(80,45,127,0.1),transparent)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-white/5 text-white border-white/10 mb-8 font-bold tracking-widest">
                WHY MODMED AI?
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 tracking-tight leading-tight">
                Responsible AI <br />
                <span className="text-brand-purple-light">
                  built for providers.
                </span>
              </h2>
              <p className="text-slate-400 text-lg font-medium leading-relaxed mb-10">
                We don't use AI to replace you. We use it to restore the most
                valuable part of your practice: the connection between you and
                your patient.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  {
                    title: "Specialty Specific",
                    desc: "Trained on hundreds of millions of patient encounters across deep specialties.",
                  },
                  {
                    title: "Ethical Integration",
                    desc: "You maintain control. The AI suggests; you review and finalize.",
                  },
                  {
                    title: "Workflow Embedded",
                    desc: "No second log-ins. No toggling. It lives where you work.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-purple/20 flex items-center justify-center shrink-0 mt-1">
                      <ShieldCheck className="w-4 h-4 text-brand-purple-light" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-sm font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="white" size="lg">
                    Book a Demo
                  </Button>
                </Link>
                <Link
                  to="/who-we-are/about"
                  className="flex items-center gap-2 text-white font-black uppercase text-xs tracking-widest px-6 hover:text-brand-purple-light transition-colors"
                >
                  Read Mission Statement <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <div
              ref={spotlightRef}
              onMouseMove={handleMouseMove}
              className="relative group cursor-none"
            >
              <div className="relative aspect-square max-w-lg mx-auto bg-slate-900 border border-white/5 rounded-[48px] overflow-hidden">
                {/* Layer 1: Administrative Noise (Base) */}
                <div className="absolute inset-0 p-12 opacity-20 transition-opacity group-hover:opacity-10 select-none">
                  <div className="grid grid-cols-4 gap-4">
                    {[...Array(24)].map((_, i) => (
                      <div
                        key={i}
                        className="h-12 bg-white/5 rounded-lg flex items-center justify-center"
                      >
                        <Zap className="w-4 h-4 text-white/20" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 space-y-4">
                    <div className="h-4 w-3/4 bg-white/5 rounded" />
                    <div className="h-4 w-1/2 bg-white/5 rounded" />
                    <div className="h-4 w-full bg-white/5 rounded" />
                  </div>
                </div>

                {/* Layer 2: Clinical Clarity (Spotlight) */}
                <motion.div
                  className="absolute inset-0 p-12 bg-white pointer-events-none"
                  style={{
                    clipPath: `circle(120px at ${mousePos.x}px ${mousePos.y}px)`,
                    WebkitClipPath: `circle(120px at ${mousePos.x}px ${mousePos.y}px)`,
                  }}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center">
                        <BrainCircuit className="w-6 h-6 text-brand-purple" />
                      </div>
                      <h4 className="text-slate-950 font-black uppercase tracking-tighter">
                        Clinical Structure
                      </h4>
                    </div>

                    <div className="space-y-6">
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="text-[10px] font-black text-brand-purple uppercase mb-1">
                          Diagnosis
                        </div>
                        <div className="text-slate-900 font-bold text-sm">
                          Acute Irritative Conjunctivitis
                        </div>
                      </div>
                      <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                        <div className="text-[10px] font-black text-brand-purple uppercase mb-1">
                          Plan
                        </div>
                        <div className="text-slate-900 font-bold text-sm leading-relaxed italic">
                          "Prescribed Ofloxacin drops. Follow-up 48h."
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto pt-8 border-t border-slate-100 flex justify-between items-center">
                      <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        ModMed Scribe 2.0
                      </div>
                      <div className="h-2 w-2 rounded-full bg-brand-purple animate-pulse" />
                    </div>
                  </div>
                </motion.div>

                {/* Interactive Prompt */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-[10px] text-white/60 font-black uppercase tracking-[0.2em] pointer-events-none transition-opacity group-hover:opacity-0">
                  Hover to reveal clarity
                </div>
              </div>
              <p className="text-center text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mt-8 italic">
                Clarity within the noise of documentation
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
