import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span 
      className={`bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#8B5CF6] bg-clip-text text-transparent ${className}`}
      style={{
        backgroundSize: '200% auto',
      }}
    >
      {children}
    </span>
  );
}
