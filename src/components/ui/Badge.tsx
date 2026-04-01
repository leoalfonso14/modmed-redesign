interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'brand' | 'glow' | 'outline' | 'neutral';
}

export function Badge({
  children,
  className = '',
  variant = 'brand'
}: BadgeProps) {
  const baseStyles = "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300";
  
  const variants = {
    brand: "bg-brand-purple/10 text-brand-purple border-brand-purple/20",
    glow: "bg-white/80 backdrop-blur-xl text-brand-purple border-slate-200 shadow-sm",
    outline: "border-slate-300 text-slate-600 bg-transparent hover:border-brand-purple/40",
    neutral: "bg-slate-100 text-slate-600 border-slate-200"
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
