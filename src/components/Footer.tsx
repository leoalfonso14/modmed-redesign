import { Link } from 'react-router-dom';

const FOOTER_COLS = [
  {
    heading: 'Specialties',
    links: [
      { label: 'Dermatology', href: '/specialties/dermatology' },
      { label: 'Ophthalmology', href: '/specialties/ophthalmology' },
      { label: 'Orthopedics', href: '/specialties/orthopedics' },
      { label: 'Gastroenterology', href: '/specialties/gastroenterology' },
      { label: 'OBGYN', href: '/specialties/obgyn' },
      { label: 'Allergy', href: '/specialties/allergy' },
    ],
  },
  {
    heading: 'What We Do',
    links: [
      { label: 'EHR / EMR', href: '/what-we-do/ehr' },
      { label: 'Practice Management', href: '/what-we-do/practice-management' },
      { label: 'Revenue Cycle', href: '/what-we-do/rcm' },
      { label: 'Analytics', href: '/what-we-do/analytics' },
      { label: 'Patient Experience', href: '/what-we-do/patient-experience' },
      { label: 'Payment Processing', href: '/what-we-do/payment-processing' },
    ],
  },
  {
    heading: 'AI Solutions',
    links: [
      { label: 'AI Overview', href: '/solutions/ai' },
      { label: 'ModMed Scribe 2.0', href: '/solutions/ai/scribe' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/who-we-are/about' },
      { label: 'News & Press', href: '/who-we-are/news' },
      { label: 'Careers', href: '/who-we-are/careers' },
      { label: 'Blog', href: '/resources/blog' },
      { label: 'Success Stories', href: '/resources/success-stories' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Top row: Logo + Link columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/modmed-logo.svg"
                alt="ModMed"
                className="h-[36px] w-auto opacity-100"
              />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              The intelligent operating system for specialty healthcare.
            </p>
          </div>

          {/* Nav columns (wrapped in a grid for mobile) */}
          <div className="col-span-4 grid grid-cols-2 md:grid-cols-4 gap-10">
            {FOOTER_COLS.map((col) => (
              <div key={col.heading}>
                <h4 className="text-[10px] font-black text-slate-950 uppercase tracking-[0.2em] mb-6">
                  {col.heading}
                </h4>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-sm text-slate-600 hover:text-brand-purple font-semibold transition-all duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-slate-200 pt-10 flex flex-col xl:flex-row items-center justify-between gap-6 text-center xl:text-left">
          <div className="space-y-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              © {new Date().getFullYear()} Modernizing Medicine, Inc. All rights reserved.
            </p>
            <p className="text-[10px] text-slate-400 font-bold">
              Electronic Medical Assistant® • EMA®
            </p>
          </div>
          
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            4700 Exchange Court, Suite 225, Boca Raton, FL 33431
          </p>

          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-brand-purple transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-purple transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-brand-purple transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
