import { motion } from 'motion/react';
import { TrendingUp, Users, Zap, Target } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
}

interface StatsProps {
  stats?: Stat[];
  title?: string;
  subtitle?: string;
}

const defaultStats: Stat[] = [
  {
    value: '190%',
    label: 'Average ROI',
    sublabel: 'First 90 days',
    icon: <TrendingUp size={28} />,
  },
  {
    value: '2.4M+',
    label: 'Impressions',
    sublabel: 'Generated monthly',
    icon: <Users size={28} />,
  },
  {
    value: '10x',
    label: 'Faster Testing',
    sublabel: 'With AI creative lab',
    icon: <Zap size={28} />,
  },
  {
    value: '240%',
    label: 'Qualified Leads',
    sublabel: 'Delivered in 2024',
    icon: <Target size={28} />,
  },
];

export function Stats({ stats = defaultStats, title, subtitle }: StatsProps) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient — static for performance */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E5E5E5]/15 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-6 lg:p-8 rounded-2xl border border-white/10 bg-[#F2F2F2]/[0.02] backdrop-blur-sm hover:border-[#E5E5E5]/50 transition-all text-center h-full flex flex-col justify-center">
                {stat.icon && (
                  <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#E5E5E5]/10 text-[#E5E5E5] mx-auto group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                )}

                <div className="text-4xl lg:text-5xl font-bold text-[#E5E5E5] mb-2">
                  {stat.value}
                </div>

                <div className="text-lg font-semibold text-[#F2F2F2] mb-1">
                  {stat.label}
                </div>

                {stat.sublabel && (
                  <div className="text-sm text-[#F2F2F2]/50">
                    {stat.sublabel}
                  </div>
                )}

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#E5E5E5]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
