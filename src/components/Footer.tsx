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
    <footer className="border-t border-white/10 bg-slate-950/80 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top row: Logo + Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/src/assets/modmed-logo.svg"
                alt="ModMed"
                className="h-[32px] w-auto filter brightness-0 invert opacity-60"
              />
            </Link>
            <p className="text-slate-500 text-xs leading-relaxed">
              The intelligent operating system for specialty healthcare.
            </p>
          </div>

          {/* Nav columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Modernizing Medicine, Inc. All rights reserved.{' '}
            Electronic Medical Assistant® • EMA®
          </p>
          <p className="text-xs text-slate-600">
            4700 Exchange Court, Suite 225, Boca Raton, FL 33431
          </p>
          <div className="flex gap-5 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-200 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-slate-200 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
