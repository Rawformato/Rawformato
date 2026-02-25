import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

interface IndustryCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

export function IndustryCard({ icon, title, description, link }: IndustryCardProps) {
  return (
    <Link to={link}>
      <motion.div
        whileHover={{ y: -8 }}
        className="group relative h-full p-8 rounded-2xl border border-white/10 bg-[#F2F2F2]/[0.02] backdrop-blur-sm overflow-hidden transition-all hover:border-[#E5E5E5]/50"
      >
        {/* Background glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E5E5E5]/0 via-[#E5E5E5]/0 to-[#E5E5E5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="mb-6 text-[#E5E5E5] group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          
          <h3 className="text-2xl font-bold text-[#F2F2F2] mb-4">
            {title}
          </h3>
          
          <p className="text-[#F2F2F2]/60 leading-relaxed mb-6">
            {description}
          </p>
          
          <div className="flex items-center gap-2 text-[#E5E5E5] font-medium group-hover:gap-4 transition-all">
            <span>Explore</span>
            <ArrowRight size={20} />
          </div>
        </div>

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JhaW4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzAwMCIvPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFpbikiLz48L3N2Zz4=')]" />
      </motion.div>
    </Link>
  );
}
