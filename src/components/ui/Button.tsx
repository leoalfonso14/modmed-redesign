import type { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass' | 'white';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full transform hover:-translate-y-0.5 active:scale-95";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-4 text-lg"
  };

  const variantStyles = {
    primary: "bg-brand-purple hover:bg-brand-purple-light text-white shadow-[0_4px_14px_rgba(80,45,127,0.2)] hover:shadow-[0_6px_20px_rgba(106,60,168,0.35)]",
    secondary: "bg-brand-purple/10 hover:bg-brand-purple/20 text-brand-purple border border-brand-purple/20",
    ghost: "text-slate-600 hover:text-slate-950 hover:bg-slate-100",
    glass: "bg-white/40 backdrop-blur-xl text-slate-900 hover:bg-white/60 border border-slate-200 shadow-sm",
    white: "bg-white text-slate-950 hover:bg-slate-50 border border-slate-200 shadow-md"
  };

  return (
    <button 
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 mr-2" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
    </button>
  );
}
