import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span 
      className={`bg-gradient-to-r from-[#E5E5E5] via-[#A78BFA] to-[#E5E5E5] bg-clip-text text-transparent ${className}`}
      style={{
        backgroundSize: '200% auto',
      }}
    >
      {children}
    </span>
  );
}
