interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'brand' | 'glow';
}

export function Badge({
  children,
  className = '',
  variant = 'brand'
}: BadgeProps) {
  const baseStyles = "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300";
  
  const variants = {
    brand: "bg-brand-purple/20 text-brand-purple-light border-brand-purple/30",
    glow: "glass-panel-light text-brand-purple-light border-brand-purple/30 shadow-[0_0_10px_rgba(80,45,127,0.2)]"
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
