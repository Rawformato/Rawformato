import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group relative p-6 rounded-xl border border-white/10 bg-[#F2F2F2]/[0.02] backdrop-blur-sm transition-all hover:border-[#8B5CF6]/50"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-[#8B5CF6]/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="mb-4 text-[#8B5CF6]">
          {icon}
        </div>
        
        <h4 className="text-lg font-semibold text-[#F2F2F2] mb-2">
          {title}
        </h4>
        
        <p className="text-sm text-[#F2F2F2]/60 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
