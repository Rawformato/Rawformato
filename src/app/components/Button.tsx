import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, variant = 'primary', href, onClick, className = '' }: ButtonProps) {
  const baseStyles = 'group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium transition-all overflow-hidden';
  
  const variants = {
    primary: 'bg-[#8B5CF6] text-[#F2F2F2] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]',
    secondary: 'bg-[#F2F2F2]/5 text-[#F2F2F2] border border-white/10 hover:bg-[#F2F2F2]/10 hover:border-white/20',
    outline: 'border border-[#8B5CF6]/50 text-[#8B5CF6] hover:bg-[#8B5CF6]/10 hover:border-[#8B5CF6]',
  };

  const Component = motion.a;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </Component>
  );
}
