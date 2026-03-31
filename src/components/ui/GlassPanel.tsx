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
  const baseStyles = "glass-panel rounded-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300";
  const hoverStyles = hoverable ? "hover:-translate-y-2 hover:bg-white/5 hover:border-white/20" : "";
  
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
