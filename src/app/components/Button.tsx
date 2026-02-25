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
    primary: 'bg-[#E5E5E5] text-[#0B0B0E] hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]',
    secondary: 'bg-[#F2F2F2]/5 text-[#F2F2F2] border border-white/10 hover:bg-[#F2F2F2]/10 hover:border-white/20',
    outline: 'border border-[#E5E5E5]/50 text-[#E5E5E5] hover:bg-[#E5E5E5]/10 hover:border-[#E5E5E5]',
  };

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
