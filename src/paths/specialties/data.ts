import type { LucideIcon } from 'lucide-react';
import {
  Layers, Eye, PersonStanding, Dna, Activity, Wind,
  Ear, Syringe, Hand, Footprints, TestTube,
} from 'lucide-react';

export interface SpecialtyPillar {
  label: string;
  body: string;
  features: string[];
}

export interface SpecialtyFeatureCard {
  title: string;
  desc: string;
  cta: string;
  href: string;
  color: string;
  bg: string;
  border: string;
}

export interface SpecialtyData {
  slug: string;
  label: string;
  icon: LucideIcon;
  accentColor: string;        // Tailwind text class, e.g. 'text-orange-400'
  accentBg: string;           // Tailwind bg class, e.g. 'bg-orange-500/15'
  accentBorder: string;       // Tailwind border class
  heroSub: string;
  valueH2: string;
  valueIntro: string;
  pillars: [SpecialtyPillar, SpecialtyPillar, SpecialtyPillar];
  featureH2: string;
  features: SpecialtyFeatureCard[];
  testimonial: { quote: string; name: string; title: string };
}

// ─────────────────────────────────────────────
// Shared feature card building blocks
// ─────────────────────────────────────────────

const EHR_CARD = (desc: string, cta = 'Explore EHR features'): SpecialtyFeatureCard => ({
  title: 'EHR / EMR', desc, cta, href: '/what-we-do/ehr',
  color: 'text-brand-purple', bg: 'bg-brand-purple/5', border: 'border-brand-purple/10',
});
const PM_CARD = (desc: string, cta = 'Improve operations'): SpecialtyFeatureCard => ({
  title: 'Practice Management', desc, cta, href: '/what-we-do/practice-management',
  color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100',
});
const RCM_CARD = (desc = 'An experienced billing team helps manage claims, streamline your revenue cycle, and improve financial visibility.', cta = 'Boost collections'): SpecialtyFeatureCard => ({
  title: 'Revenue Cycle', desc, cta, href: '/what-we-do/rcm',
  color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100',
});
const ANALYTICS_CARD: SpecialtyFeatureCard = {
  title: 'Analytics', href: '/what-we-do/analytics',
  desc: 'Identify, track and benchmark key performance indicators in near-real time and learn more about the impacts of your treatment decisions.',
  cta: 'Track KPIs',
  color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100',
};
const PATIENT_CARD: SpecialtyFeatureCard = {
  title: 'Patient Experience', href: '/what-we-do/patient-experience',
  desc: 'Reduce high call volume, build patient trust and decrease staff inefficiencies by automating manual workflows and conversations.',
  cta: 'Stop phone tag',
  color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-100',
};
const PAYMENT_CARD: SpecialtyFeatureCard = {
  title: 'Payment Processing', href: '/what-we-do/payment-processing',
  desc: 'Make payment convenient for patients and help lower costs by reducing manual data entry, reconciliation tasks, and inbound calls.',
  cta: 'Simplify payments',
  color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100',
};
const SCRIBE_CARD: SpecialtyFeatureCard = {
  title: 'ModMed Scribe 2.0', href: '/solutions/ai/scribe',
  desc: 'Ambient AI listens to your natural patient conversations and translates them into structured clinical notes and billing codes in real time.',
  cta: 'Meet Scribe 2.0',
  color: 'text-brand-purple', bg: 'bg-brand-purple/5', border: 'border-brand-purple/10',
};
const MIPS_CARD: SpecialtyFeatureCard = {
  title: 'Value-Based Care', href: '/what-we-do/analytics',
  desc: "Collect MIPS data within your existing workflow, track progress and benchmark your performance against peers.",
  cta: 'Read up on MIPS',
  color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-100',
};

// ─────────────────────────────────────────────
// All 11 specialties
// ─────────────────────────────────────────────

export const SPECIALTY_DATA: SpecialtyData[] = [
  // ── DERMATOLOGY ──────────────────────────────
  {
    slug: 'dermatology',
    label: 'Dermatology',
    icon: Layers,
    accentColor: 'text-orange-600',
    accentBg: 'bg-orange-50',
    accentBorder: 'border-orange-100',
    heroSub: 'Flexible patient collaboration, clinical workflow, operational and billing solutions designed for dermatology practices of all sizes.',
    valueH2: 'Connecting your dermatology practice with an all-in-one solution',
    valueIntro: 'Bring together the clinical and administrative sides of your practice with dermatology software built by dermatologists, for dermatologists, to enhance:',
    pillars: [
      { label: 'The patient experience', body: 'Simple to use, yet comprehensive enough to be truly effective, our solutions help you:', features: ['Eliminate phone tag', 'Automate manual workflows', 'Keep all info centralized'] },
      { label: 'Clinical workflows', body: 'With a dermatology EHR system that actually learns from you and includes customizable workflows and protocols, you can:', features: ['Automate tedious tasks', 'Pull up patient outcomes in one click', 'Simplify MIPS reporting'] },
      { label: 'Financial & operational success', body: 'Leveraging metrics-driven, dermatology-specific reports to review performance, you can:', features: ['Streamline from check-in to checkout', 'Measure your practice\'s success', 'Automate insurance eligibility verification'] },
    ],
    featureH2: 'Innovative dermatology solutions',
    features: [
      EHR_CARD('Tap-and-go notes, automated suggested coding, the ability to recall your laser settings and desired anesthesia for biopsies and much more.', 'Chart faster'),
      PM_CARD('Streamline your office workflow from scheduling appointments to tracking product sales and more, including generating a cosmetic visit bill.', 'Improve productivity'),
      PATIENT_CARD,
      {
        title: 'Pathology', href: '#',
        desc: 'Eliminate time-consuming tasks from your in-house lab workflow and easily receive, document and bill in-house dermatopathology reports.',
        cta: 'Improve efficiency',
        color: 'text-rose-400', bg: 'bg-rose-500/15', border: 'border-rose-500/20',
      },
      RCM_CARD(),
      ANALYTICS_CARD,
      PAYMENT_CARD,
      SCRIBE_CARD,
    ],
    testimonial: {
      quote: 'We simply wanted to start with the best dermatology EHR.',
      name: 'Gheorghe Pusta',
      title: 'CEO, Epiphany Dermatology',
    },
  },

  // ── OPHTHALMOLOGY ─────────────────────────────
  {
    slug: 'ophthalmology',
    label: 'Ophthalmology',
    icon: Eye,
    accentColor: 'text-blue-600',
    accentBg: 'bg-blue-50',
    accentBorder: 'border-blue-100',
    heroSub: 'Flexible patient collaboration, clinical workflow, operational and billing solutions designed for ophthalmology practices of all sizes.',
    valueH2: 'Connecting your practice with all-in-one ophthalmology software',
    valueIntro: 'Bring together the administrative and clinical sides of your practice with solutions built by ophthalmologists, for ophthalmologists, to enhance:',
    pillars: [
      { label: 'The patient experience', body: 'Simple to use, yet comprehensive enough to be truly effective, our solutions help you:', features: ['Reduce calls to the office', 'Monitor patient flow', 'Fill open appointments'] },
      { label: 'Clinical workflows', body: 'With an iPad-based ophthalmology EHR system that actually learns from you and includes customizable protocols and suggested coding, you can:', features: ['Improve charting speed and accuracy', 'Promote patient and staff satisfaction', 'Leave the office on time'] },
      { label: 'Financial & operational success', body: 'Leveraging metrics-driven, ophthalmology-specific reports to review performance, you can:', features: ['Estimate out-of-pocket costs', 'Uncover new revenue opportunities', 'Easily view claim statuses'] },
    ],
    featureH2: 'Innovative ophthalmology solutions',
    features: [
      EHR_CARD('Touch-based drawing tools and patented adaptive learning technologies help you document faster, while the system suggests coding.', 'Meet EMA'),
      PM_CARD('Streamline office workflows, from scheduling appointments to managing inventory, while improving staff communication.'),
      PATIENT_CARD,
      {
        title: 'Optical POS Interfaces', href: '/what-we-do/payment-processing',
        desc: 'Deliver a seamless optical retail experience with Eyefinity, FlexSys and other point-of-sale solutions that interface with our software.',
        cta: 'Manage inventory',
        color: 'text-sky-400', bg: 'bg-sky-500/15', border: 'border-sky-500/20',
      },
      RCM_CARD(),
      ANALYTICS_CARD,
      PAYMENT_CARD,
      SCRIBE_CARD,
    ],
    testimonial: {
      quote: 'I attribute much of my early success as a start-up practice to ModMed.',
      name: 'Brian Shafer, MD',
      title: 'CEO, Shafer Vision Institute',
    },
  },

  // ── ORTHOPEDICS ───────────────────────────────
  {
    slug: 'orthopedics',
    label: 'Orthopedics',
    icon: PersonStanding,
    accentColor: 'text-emerald-600',
    accentBg: 'bg-emerald-50',
    accentBorder: 'border-emerald-100',
    heroSub: 'Flexible clinical workflow, patient collaboration, operational and billing solutions designed for orthopedic practices of all sizes.',
    valueH2: 'Connecting your practice with all-in-one orthopedics software',
    valueIntro: 'Bring together the clinical and administrative sides of your practice with orthopedic software built by orthopedic surgeons for orthopedic surgeons, to enhance:',
    pillars: [
      { label: 'The patient experience', body: 'Simple to use, yet comprehensive enough to be truly effective, our solutions help you:', features: ['Eliminate phone tag', 'Automate manual workflows', 'Give patients more payment options'] },
      { label: 'Clinical workflows', body: 'With an orthopedic EHR system that actually learns from you and includes customizable workflows and protocols, you can:', features: ['Automate tedious tasks', 'Pull up patient outcomes in one click', 'Simplify MIPS reporting'] },
      { label: 'Financial & operational success', body: 'Leveraging metrics-driven, orthopedic-specific reports to review performance, you can:', features: ['Spot reimbursement trends before they affect cash flow', 'Analyze growth patterns and benchmarks', 'Measure your practice\'s success'] },
    ],
    featureH2: 'Innovative orthopedic solutions',
    features: [
      EHR_CARD('Tap-and-go notes, automated suggested coding, as well as preloaded orthopedic chief complaints, diagnoses and treatments.', 'See more EHR features'),
      PM_CARD('Streamline workflows from scheduling to viewing claim statuses to providing patients with more transparent pricing.', 'Check out PM tools'),
      PATIENT_CARD,
      PAYMENT_CARD,
      ANALYTICS_CARD,
      MIPS_CARD,
      RCM_CARD('An experienced billing team works with your staff to help improve collections and alleviate billing staff workloads.', 'Explore RCM'),
      SCRIBE_CARD,
    ],
    testimonial: {
      quote: 'We simply wanted to start with the best EHR.',
      name: 'Gheorghe Pusta',
      title: 'CEO, Epiphany Dermatology',
    },
  },

  // ── GASTROENTEROLOGY ──────────────────────────
  {
    slug: 'gastroenterology',
    label: 'Gastroenterology',
    icon: Dna,
    accentColor: 'text-brand-purple',
    accentBg: 'bg-brand-purple/5',
    accentBorder: 'border-brand-purple/10',
    heroSub: 'Flexible clinical workflow, patient collaboration, operational and billing solutions designed for gastroenterology practices of all sizes.',
    valueH2: 'Connecting your practice with all-in-one GI software',
    valueIntro: 'Bring together the clinical and administrative sides of your practice with GI software built by gastroenterologists, for gastroenterologists, to enhance:',
    pillars: [
      { label: 'The patient experience', body: 'Simple to use, yet comprehensive enough to be truly effective, our solutions help you:', features: ['Eliminate phone tag', 'Automate pre-procedure instructions', 'Centralize patient records'] },
      { label: 'Clinical workflows', body: 'With a GI EHR system that includes procedure-driven templates and AI documentation, you can:', features: ['Document endoscopy procedures faster', 'Automate tedious charting tasks', 'Track quality measures in real time'] },
      { label: 'Financial & operational success', body: 'Leveraging metrics-driven, GI-specific reports to review performance, you can:', features: ['Streamline procedure billing', 'Benchmark against GI peers', 'Measure your practice\'s financial health'] },
    ],
    featureH2: 'Innovative gastroenterology solutions',
    features: [
      EHR_CARD('Procedure-driven templates, AI ambient documentation via gScribe™, and suggested ICD-10 codes trained on real GI encounters.', 'Explore GI EHR'),
      PM_CARD('Streamline pre-procedure scheduling, consent management, and post-procedure follow-up workflows.'),
      PATIENT_CARD,
      { title: 'gScribe™', href: '/solutions/ai/scribe', desc: 'AI-powered ambient listening built specifically for GI — converts natural conversation into structured HPIs, ICD-10 codes, and care plans.', cta: 'Meet gScribe™', color: 'text-brand-purple', bg: 'bg-brand-purple/5', border: 'border-brand-purple/10' },
      RCM_CARD(),
      ANALYTICS_CARD,
      PAYMENT_CARD,
      SCRIBE_CARD,
    ],
    testimonial: {
      quote: 'ModMed is user-friendly and links the clinical and billing instantaneously. My documentation is faster and more detailed.',
      name: 'Elizabeth Garbarino, MD',
      title: 'Asheville, NC',
    },
  },

  // ── OBGYN ─────────────────────────────────────
  {
    slug: 'obgyn',
    label: 'OBGYN',
    icon: Activity,
    accentColor: 'text-pink-600',
    accentBg: 'bg-pink-50',
    accentBorder: 'border-pink-100',
    heroSub: 'Flexible patient collaboration, clinical workflow, operational and billing solutions designed for OBGYN practices of all sizes.',
    valueH2: "Connecting your practice with all-in-one women's health software",
    valueIntro: "Bring together the clinical and administrative sides of your practice with OBGYN software built by women's health physicians, to enhance:",
    pillars: [
      { label: 'The patient experience', body: 'Our solutions help you deliver the exceptional care your patients expect:', features: ['Eliminate phone tag', 'Deliver timely prenatal notifications', 'Automate appointment reminders'] },
      { label: 'Clinical workflows', body: "With an OBGYN EHR designed to mirror women's health workflows, you can:", features: ['Chart OB visits and postpartum care faster', 'Track gestational milestones automatically', 'Simplify MIPS quality reporting'] },
      { label: 'Financial & operational success', body: 'Leveraging OBGYN-specific reports to review performance, you can:', features: ['Benchmark against women\'s health peers', 'Improve OB projection accuracy', 'Automate insurance eligibility checks'] },
    ],
    featureH2: 'Innovative OBGYN solutions',
    features: [
      EHR_CARD("OB-specific charting with gestational age calculators, prenatal visit templates, and automated quality measure tracking.", "Explore OB EHR"),
      PM_CARD('Manage prenatal visit cadences, delivery scheduling, and postpartum follow-ups seamlessly.'),
      PATIENT_CARD,
      MIPS_CARD,
      RCM_CARD(),
      ANALYTICS_CARD,
      PAYMENT_CARD,
      SCRIBE_CARD,
    ],
    testimonial: {
      quote: 'With my previous system, I saw 30+ patients. With ModMed, I\'m able to see the same amount of patients and I can easily finalize my notes in just 30 minutes.',
      name: 'Michael Podraza, MD',
      title: 'Memphis, TN',
    },
  },

  // ── ALLERGY ───────────────────────────────────
  {
    slug: 'allergy',
    label: 'Allergy',
    icon: Wind,
    accentColor: 'text-teal-600',
    accentBg: 'bg-teal-50',
    accentBorder: 'border-teal-100',
    heroSub: 'Flexible patient collaboration, clinical workflow, operational and billing solutions designed for allergy & immunology practices of all sizes.',
    valueH2: 'Connecting your allergy practice with an all-in-one solution',
    valueIntro: 'Bring together the clinical and administrative sides of your allergy practice with software built by allergists, for allergists, to enhance:',
    pillars: [
      { label: 'The patient experience', body: 'Our solutions help you deliver seamless allergy care:', features: ['Manage vial tracking and testing schedules', 'Automate injection reminders', 'Centralize patient records'] },
      { label: 'Clinical workflows', body: 'With an allergy EHR built for your workflows, you can:', features: ['Document skin tests and immunotherapy faster', 'Automate tedious charting', 'Simplify MIPS reporting'] },
      { label: 'Financial & operational success', body: 'Leveraging allergy-specific reports, you can:', features: ['Track injection revenue by patient', 'Benchmark against allergy peers', 'Automate eligibility verification'] },
    ],
    featureH2: 'Innovative allergy solutions',
    features: [
      EHR_CARD('Vial management, immunotherapy scheduling, skin test documentation, and automated suggested coding built for allergists.', 'Explore Allergy EHR'),
      PM_CARD('Schedule injection appointments, manage vial inventory, and streamline front-office operations.'),
      PATIENT_CARD,
      MIPS_CARD,
      RCM_CARD(),
      ANALYTICS_CARD,
      PAYMENT_CARD,
      SCRIBE_CARD,
    ],
    testimonial: {
      quote: 'ModMed is user-friendly and links the clinical and billing instantaneously. My documentation is faster and more detailed.',
      name: 'Elizabeth Garbarino, MD',
      title: 'Asheville, NC',
    },
  },

  // ── ENT ───────────────────────────────────────
  {
    slug: 'ent',
    label: 'ENT',
    icon: Ear,
    accentColor: 'text-indigo-600',
    accentBg: 'bg-indigo-50',
    accentBorder: 'border-indigo-100',
    heroSub: 'Flexible patient collaboration, clinical workflow, operational and billing solutions designed for ENT practices of all sizes.',
    valueH2: 'Connecting your ENT practice with an all-in-one solution',
    valueIntro: 'Bring together the clinical and administrative sides of your practice with ENT software built by otolaryngologists, for otolaryngologists, to enhance:',
    pillars: [
      { label: 'The patient experience', body: 'Our solutions simplify every ENT patient interaction:', features: ['Eliminate phone tag', 'Automate pre-surgical instructions', 'Centralize audiogram and imaging records'] },
      { label: 'Clinical workflows', body: 'With an ENT EHR built for your specialty, you can:', features: ['Chart sinus, ear, and throat visits faster', 'Access audiogram results in one click', 'Simplify MIPS quality reporting'] },
      { label: 'Financial & operational success', body: 'Leveraging ENT-specific reports, you can:', features: ['Streamline procedure billing', 'Spot reimbursement trends early', 'Benchmark against ENT peers'] },
    ],
    featureH2: 'Innovative ENT solutions',
    features: [
      EHR_CARD('Specialty-specific templates for sinusitis, hearing loss, and head & neck — with automated coding support.', 'Explore ENT EHR'),
      PM_CARD('Manage surgical scheduling, pre-op clearances, and hearing aid fittings seamlessly.'),
      PATIENT_CARD,
      MIPS_CARD,
      RCM_CARD(),
      ANALYTICS_CARD,
      PAYMENT_CARD,
      SCRIBE_CARD,
    ],
    testimonial: {
      quote: 'I instantly loved that ModMed\'s interface looked a lot cleaner and modern.',
      name: 'Lindsay Hummel, DPM',
      title: 'Mechanicsburg, PA',
    },
  },

  // ── PAIN MANAGEMENT ───────────────────────────
  {
    slug: 'pain-management',
    label: 'Pain Management',
    icon: Syringe,
    accentColor: 'text-red-600',
    accentBg: 'bg-red-50',
    accentBorder: 'border-red-100',
    heroSub: 'Flexible patient collaboration, clinical workflow, operational and billing solutions designed for pain management practices of all sizes.',
    valueH2: 'Connecting your pain management practice with an all-in-one solution',
    valueIntro: 'Bring together the clinical and administrative sides of your practice with pain management software built for interventional specialists, to enhance:',
    pillars: [
      { label: 'The patient experience', body: 'Our solutions streamline every pain management visit:', features: ['Automate prior authorization workflows', 'Eliminate phone tag', 'Automate prescription refill requests'] },
      { label: 'Clinical workflows', body: 'With a pain management EHR designed for procedures, you can:', features: ['Document injections and procedures faster', 'Track controlled substance prescribing compliantly', 'Simplify MIPS reporting'] },
      { label: 'Financial & operational success', body: 'Leveraging pain-specific reports, you can:', features: ['Optimize procedure revenue', 'Benchmark against peers', 'Automate eligibility verification'] },
    ],
    featureH2: 'Innovative pain management solutions',
    features: [
      EHR_CARD('Procedure-driven templates for injections, nerve blocks, and spinal procedures — with built-in controlled substance tracking.', 'Explore Pain EHR'),
      PM_CARD('Schedule and track procedure suites, manage prior authorizations, and streamline referrals.'),
      PATIENT_CARD,
      MIPS_CARD,
      RCM_CARD(),
      ANALYTICS_CARD,
      PAYMENT_CARD,
      SCRIBE_CARD,
    ],
    testimonial: {
      quote: 'With my previous system, I saw 30+ patients. With ModMed, I\'m able to see the same amount of patients and easily finalize my notes in just 30 minutes.',
      name: 'Michael Podraza, MD',
      title: 'Memphis, TN',
    },
  },

  // ── PLASTIC SURGERY ───────────────────────────
  {
    slug: 'plastic-surgery',
    label: 'Plastic Surgery',
    icon: Hand,
    accentColor: 'text-yellow-700',
    accentBg: 'bg-yellow-50',
    accentBorder: 'border-yellow-100',
    heroSub: 'Flexible patient collaboration, clinical workflow, and billing solutions designed for plastic surgery practices of all sizes.',
    valueH2: 'Connecting your plastic surgery practice with an all-in-one solution',
    valueIntro: 'Bring together the clinical and administrative sides of your practice with software built by plastic surgeons, for plastic surgeons, to enhance:',
    pillars: [
      { label: 'The patient experience', body: 'Our solutions elevate every touchpoint for your aesthetic patients:', features: ['Streamline cosmetic consultation bookings', 'Automate pre- and post-op instructions', 'Manage patient photos and outcomes'] },
      { label: 'Clinical workflows', body: 'With a plastic surgery EHR built for aesthetic and reconstructive care, you can:', features: ['Document procedures with image capture', 'Generate cosmetic and insurance billing in one click', 'Simplify MIPS reporting'] },
      { label: 'Financial & operational success', body: 'Leveraging plastic surgery-specific reports, you can:', features: ['Track cosmetic vs. reconstructive revenue', 'Benchmark practice growth', 'Automate eligibility verification'] },
    ],
    featureH2: 'Innovative plastic surgery solutions',
    features: [
      EHR_CARD('Photo documentation, cosmetic visit billing, and procedure-specific templates for aesthetic and reconstructive surgery.', 'Explore Plastic Surgery EHR'),
      PM_CARD('Manage consultation scheduling, pre-op clearances, and cosmetic product inventory.'),
      PATIENT_CARD,
      MIPS_CARD,
      RCM_CARD('An experienced billing team manages both insurance and cash-pay cosmetic billing, so you can focus on care.', 'Boost collections'),
      ANALYTICS_CARD,
      PAYMENT_CARD,
      SCRIBE_CARD,
    ],
    testimonial: {
      quote: 'I instantly loved that ModMed\'s interface looked a lot cleaner and modern. Also, the capability to click on actual pictures, draw on them and save those images into the patient\'s chart.',
      name: 'Lindsay Hummel, DPM',
      title: 'Mechanicsburg, PA',
    },
  },

  // ── PODIATRY ──────────────────────────────────
  {
    slug: 'podiatry',
    label: 'Podiatry',
    icon: Footprints,
    accentColor: 'text-cyan-600',
    accentBg: 'bg-cyan-50',
    accentBorder: 'border-cyan-100',
    heroSub: 'Flexible clinical workflow, patient collaboration, and billing solutions designed for podiatry practices of all sizes.',
    valueH2: 'Connecting your podiatry practice with an all-in-one solution',
    valueIntro: 'Bring together the clinical and administrative sides of your practice with software built by podiatrists, for podiatrists, to enhance:',
    pillars: [
      { label: 'The patient experience', body: 'Our solutions simplify every podiatry patient visit:', features: ['Eliminate phone tag', 'Automate diabetic foot care reminders', 'Centralize wound care records'] },
      { label: 'Clinical workflows', body: 'With a podiatry EHR designed for lower extremity care, you can:', features: ['Document procedures and wound care faster', 'Pull up patient outcomes in one click', 'Simplify MIPS reporting'] },
      { label: 'Financial & operational success', body: 'Leveraging podiatry-specific reports, you can:', features: ['Track procedure revenue by provider', 'Benchmark against podiatry peers', 'Automate eligibility verification'] },
    ],
    featureH2: 'Innovative podiatry solutions',
    features: [
      EHR_CARD('Lower extremity-specific templates for nail procedures, wound care, orthotics, and diabetic foot exams — with automated coding.', 'Explore Podiatry EHR'),
      PM_CARD('Manage wound care scheduling, DME ordering, and front-office operations smoothly.'),
      PATIENT_CARD,
      MIPS_CARD,
      RCM_CARD(),
      ANALYTICS_CARD,
      PAYMENT_CARD,
      SCRIBE_CARD,
    ],
    testimonial: {
      quote: 'I instantly loved that ModMed\'s interface looked a lot cleaner and modern. Also, the capability to click on actual pictures, draw on them and save those images into the patient\'s chart.',
      name: 'Lindsay Hummel, DPM',
      title: 'Mechanicsburg, PA',
    },
  },

  // ── UROLOGY ───────────────────────────────────
  {
    slug: 'urology',
    label: 'Urology',
    icon: TestTube,
    accentColor: 'text-violet-600',
    accentBg: 'bg-violet-50',
    accentBorder: 'border-violet-100',
    heroSub: 'Flexible patient collaboration, clinical workflow, operational and billing solutions designed for urology practices of all sizes.',
    valueH2: 'Connecting your urology practice with an all-in-one solution',
    valueIntro: 'Bring together the clinical and administrative sides of your practice with urology software built by urologists, for urologists, to enhance:',
    pillars: [
      { label: 'The patient experience', body: 'Our solutions streamline every urology patient interaction:', features: ['Automate pre-procedure instructions', 'Eliminate phone tag', 'Centralize complex protocol records'] },
      { label: 'Clinical workflows', body: 'With a urology EHR designed for complex protocols, you can:', features: ['Document cystoscopies and cystectomies faster', 'Track PSA trends over time automatically', 'Simplify MIPS reporting'] },
      { label: 'Financial & operational success', body: 'Leveraging urology-specific reports, you can:', features: ['Optimize in-office procedure revenue', 'Benchmark against urology peers', 'Automate eligibility verification'] },
    ],
    featureH2: 'Innovative urology solutions',
    features: [
      EHR_CARD('Urology-specific templates for cystoscopy, prostate procedures, incontinence workups, and oncology follow-up care.', 'Explore Urology EHR'),
      PM_CARD('Manage procedure room scheduling, pathology tracking, and complex referral coordination.'),
      PATIENT_CARD,
      MIPS_CARD,
      RCM_CARD(),
      ANALYTICS_CARD,
      PAYMENT_CARD,
      SCRIBE_CARD,
    ],
    testimonial: {
      quote: 'ModMed is user-friendly and links the clinical and billing instantaneously. My documentation is faster and more detailed.',
      name: 'Elizabeth Garbarino, MD',
      title: 'Asheville, NC',
    },
  },
];

export function getSpecialtyBySlug(slug: string): SpecialtyData | undefined {
  return SPECIALTY_DATA.find((s) => s.slug === slug);
}
