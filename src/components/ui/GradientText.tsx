interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function GradientText({
  children,
  className = '',
  glow = true
}: GradientTextProps) {
  const baseStyles = "text-transparent bg-clip-text bg-linear-to-r from-brand-purple-light to-[#A975FF]";
  const glowStyles = glow ? "text-glow" : "";

  return (
    <span className={`${baseStyles} ${glowStyles} ${className}`}>
      {children}
    </span>
  );
}
