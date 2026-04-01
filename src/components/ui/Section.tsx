import { ScrollReveal } from './ScrollReveal';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  glow?: 'left' | 'right' | 'none';
  fullWidth?: boolean;
  disableOnMobile?: boolean;
}

export function Section({
  id,
  className = '',
  children,
  glow = 'none',
  fullWidth = false,
  disableOnMobile = false
}: SectionProps) {
  const glowStyles = {
    left: (
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[120px] -translate-y-1/2 -z-10 opacity-60 mix-blend-multiply pointer-events-none"></div>
    ),
    right: (
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -translate-y-1/2 -z-10 opacity-60 mix-blend-multiply pointer-events-none"></div>
    ),
    none: null
  };

  return (
    <section id={id} className={`py-12 md:py-24 relative overflow-hidden ${className}`}>
      {glowStyles[glow]}
      <div className={`${fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        <ScrollReveal disableOnMobile={disableOnMobile}>
          {children}
        </ScrollReveal>
      </div>
    </section>
  );
}
