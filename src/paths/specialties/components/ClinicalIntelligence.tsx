import { MessageSquare, FileText, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '../../../components/ui/Section';
import { Badge } from '../../../components/ui/Badge';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

export const ScribeSection = ({ accentColor, accentBg, label }: { accentColor: string, accentBg: string, label: string }) => (
  <Section className="bg-slate-950 text-white overflow-hidden py-16 md:py-32">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <ScrollReveal variant="fade">
            <Badge variant="neutral" className="mb-6 bg-white/10 text-white border-white/20 px-4 py-1.5 rounded-full backdrop-blur-md">Ambient AI</Badge>
            <h2 className="text-4xl sm:text-6xl font-black mb-8 tracking-tight leading-[0.9]">
              Translate natural conversation into clinical action with AI-powered <span className={accentColor}>ModMed Scribe 2.0</span>
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed mb-12 font-medium">
              Unlock the power of AI built directly into our EMA EHR — no additional software or integrations required. Developed by our on-staff specialists, ModMed Scribe was trained on real, de-identified clinical data sampled from over 750 million patient encounters, so it understands the language of {label}.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0`}>
                  <CheckCircle2 className={`w-6 h-6 ${accentColor}`} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Speak naturally, document effortlessly</h4>
                  <p className="text-slate-400">Designed to understand how real clinical conversations flow — even with interruptions and deviations — and automatically suggest structured, comprehensive notes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0`}>
                  <CheckCircle2 className={`w-6 h-6 ${accentColor}`} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Address staffing shortages, accelerate onboarding</h4>
                  <p className="text-slate-400">Helps reduce reliance on additional staff and speed up onboarding, enhancing practice efficiency and helping new hires master documentation quickly.</p>
                </div>
              </div>
            </div>

            <Link
              to="/solutions/ai/scribe"
              className="inline-flex items-center gap-2 text-xl font-black group"
            >
              Learn more <ArrowRight className={`w-6 h-6 ${accentColor} group-hover:translate-x-2 transition-transform`} />
            </Link>
          </ScrollReveal>
        </div>

        <div className="relative">
          <ScrollReveal variant="blur" direction="right">
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border border-white/10 group bg-slate-900/50">
              <img 
                src="https://www.modmed.com/?seraph_accel_gi=wp-content%2Fuploads%2F2025%2F11%2F135XX-EMA-Specialty-non-derm.jpg&n=IzSMVYbjcUNWOOIgx5teeg" 
                alt="ModMed Scribe 2.0"
                className="w-full h-auto aspect-video object-cover transform group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
              
              {/* Dynamic Overlay elements */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-emerald-500 animate-pulse flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white opacity-80" />
                 </div>
                 <div className="text-sm font-bold tracking-tight text-white">AI Ambient Listening: <span className="text-emerald-400 uppercase ml-1">Active</span></div>
              </div>
            </div>

            {/* Ambient Background Glows */}
            <div className={`absolute -top-20 -right-20 w-96 h-96 ${accentBg} rounded-full blur-[120px] opacity-20`} />
            <div className={`absolute -bottom-20 -left-20 w-96 h-96 ${accentBg} rounded-full blur-[120px] opacity-10`} />
          </ScrollReveal>
        </div>
      </div>
    </div>
  </Section>
);

export const AISolutionsSection = ({ accentColor, accentBg }: { accentColor: string, accentBg: string }) => (
  <Section className="bg-slate-50 relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
      style={{ 
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '48px 48px'
      }} 
    />

    <ScrollReveal variant="fade" className="text-center mb-20 max-w-4xl mx-auto">
      <Badge variant="neutral" className="mb-4 rounded-full border-slate-200 bg-white">Ecosystem AI</Badge>
      <h2 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[0.9] mb-8">
        AI solutions that make sense for the entire practice
      </h2>
    </ScrollReveal>

    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
      {[
        { 
          title: "Auto-route patient messages", 
          desc: "Automatically route patient messages to the right team for faster responses and reduced workload.", 
          icon: MessageSquare 
        },
        { 
          title: "Categorize incoming faxes", 
          desc: "AI identifies and categorizes incoming faxes, automatically linking them to the correct patient records.", 
          icon: FileText 
        },
        { 
          title: "Flag claims before submission", 
          desc: "Detect potential claim denials before they happen, increasing first-pass acceptance rates.", 
          icon: ShieldAlert 
        }
      ].map((feat, i) => (
        <ScrollReveal key={feat.title} variant="zoom" delay={i * 0.1}>
          <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
            <div className={`w-14 h-14 rounded-2xl ${accentBg} flex items-center justify-center mb-8 border border-black/5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
              <feat.icon className={`w-7 h-7 ${accentColor}`} />
            </div>
            <h3 className="text-2xl font-black text-slate-950 mb-4 tracking-tight leading-tight">{feat.title}</h3>
            <p className="text-slate-600 font-medium leading-relaxed">{feat.desc}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>

    <div className="mt-16 text-center">
      <Link 
        to="/solutions/ai" 
        className="inline-flex items-center gap-3 px-10 py-5 bg-slate-950 text-white rounded-2xl font-black text-lg hover:-translate-y-1 transition-all shadow-xl"
      >
        Explore ModMed AI <ArrowRight className="w-6 h-6 text-emerald-400" />
      </Link>
    </div>
  </Section>
);

export const ImagingSection = ({ accentColor, accentBg }: { accentColor: string, accentBg: string }) => (
  <Section id="imaging" className="bg-white py-16 md:py-32">
    <div className="max-w-7xl mx-auto px-6 overflow-hidden">
      <div className="bg-slate-50 rounded-[48px] p-12 sm:p-20 relative overflow-hidden border border-slate-100 flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 relative z-10">
          <ScrollReveal variant="fade">
            <Badge variant="neutral" className="mb-6 rounded-full border-slate-200 bg-white">Imaging</Badge>
            <h2 className="text-4xl sm:text-6xl font-black text-slate-950 mb-8 tracking-tight leading-[0.9]">
              eVue Cloud-Based PACS Platform
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
              Integrate with a complete cloud-based PACS solution that interfaces directly with EMA. Handles most DICOM modalities and simplifies image management — all with one login.
            </p>
            
            <div className="grid gap-4 mb-10">
              {[
                "View patient images directly from our EHR",
                "Reduce errors by eliminating duplicate entry",
                "Measure, annotate and compare images onscreen"
              ].map((text) => (
                <div key={text} className="flex items-center gap-3 text-slate-900 font-bold">
                  <CheckCircle2 className={`w-5 h-5 text-emerald-500`} />
                  {text}
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 px-8 py-4 bg-slate-950 text-white rounded-2xl font-black text-lg hover:-translate-y-0.5 transition-all`}
            >
              Learn about eVue <ArrowRight className={`w-5 h-5 ${accentColor}`} />
            </Link>
          </ScrollReveal>
        </div>

        <div className="lg:w-1/2 relative">
          <ScrollReveal variant="blur" direction="left" className="relative group">
            <div className="bg-white p-4 rounded-[40px] shadow-2xl border border-slate-100 relative z-10 overflow-hidden transform group-hover:-rotate-1 transition-transform duration-700">
               <img 
                 src="https://www.modmed.com/?seraph_accel_gi=wp-content%2Fuploads%2F2025%2F07%2FCRP-0325-12170-PAIN-eVueCloud-BasedPACS.png&n=gq1ZTxmb3qNACPJFifNQA" 
                 alt="eVue PACS Interface"
                 className="w-full h-auto rounded-[32px] object-cover"
               />
               <div className="absolute inset-0 bg-linear-to-tr from-slate-950/20 to-transparent pointer-events-none" />
            </div>
            
            <div className={`absolute -top-10 -right-10 w-64 h-64 ${accentBg} rounded-full blur-[100px] opacity-15 animate-pulse`} />
            <div className={`absolute -bottom-10 -left-10 w-64 h-64 ${accentBg} rounded-full blur-[100px] opacity-10 animate-pulse delay-1000`} />
          </ScrollReveal>
        </div>
      </div>
    </div>
  </Section>
);
