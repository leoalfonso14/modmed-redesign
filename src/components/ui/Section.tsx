interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  glow?: 'left' | 'right' | 'none';
  fullWidth?: boolean;
}

export function Section({
  id,
  className = '',
  children,
  glow = 'none',
  fullWidth = false
}: SectionProps) {
  const glowStyles = {
    left: (
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[100px] -translate-y-1/2 -z-10 opacity-60"></div>
    ),
    right: (
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[100px] -translate-y-1/2 -z-10 opacity-60"></div>
    ),
    none: null
  };

  return (
    <section id={id} className={`py-24 relative overflow-hidden ${className}`}>
      {glowStyles[glow]}
      <div className={`${fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        {children}
      </div>
    </section>
  );
}
