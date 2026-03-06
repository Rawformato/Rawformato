import { ReactNode } from 'react';
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
      <div
        className="group relative h-full p-8 rounded-2xl border border-white/10 bg-[#F2F2F2]/[0.02] overflow-hidden transition-all hover:border-[#E5E5E5]/50 hover:-translate-y-2 duration-200"
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
      </div>
    </Link>
  );
}
