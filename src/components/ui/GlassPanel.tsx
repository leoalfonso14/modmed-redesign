interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function GlassPanel({
  children,
  className = '',
  hoverable = false,
  padding = 'md'
}: GlassPanelProps) {
  const baseStyles = "bg-white/70 backdrop-blur-3xl rounded-3xl border border-slate-100 shadow-[0_8px_48px_rgba(0,0,0,0.04)] transition-all duration-300 relative overflow-hidden";
  const hoverStyles = hoverable ? "hover:-translate-y-1.5 hover:bg-white/90 hover:border-slate-200 hover:shadow-[0_32px_64px_rgba(0,0,0,0.06)]" : "";
  
  const paddingStyles = {
    none: "",
    sm: "p-4",
    md: "p-8",
    lg: "p-12"
  };

  return (
    <div className={`${baseStyles} ${hoverStyles} ${paddingStyles[padding]} ${className}`}>
      {children}
    </div>
  );
}
