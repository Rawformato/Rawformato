import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits?: string[];
}

interface FeaturesProps {
  features: Feature[];
  title?: string;
  subtitle?: string;
  variant?: 'grid' | 'list';
}

export function Features({ features, title, subtitle, variant = 'grid' }: FeaturesProps) {
  if (variant === 'list') {
    return (
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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

          <div className="max-w-4xl mx-auto space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl border border-white/10 bg-[#F2F2F2]/[0.02] backdrop-blur-sm hover:border-[#E5E5E5]/50 transition-all"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  {/* Icon */}
                  <div className="shrink-0 w-16 h-16 rounded-xl bg-[#E5E5E5]/10 flex items-center justify-center text-[#E5E5E5] group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#F2F2F2] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[#F2F2F2]/70 leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    {feature.benefits && feature.benefits.length > 0 && (
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-[#F2F2F2]/60 text-sm">
                            <span className="text-[#E5E5E5] mt-0.5">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#E5E5E5]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Grid variant
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl border border-white/10 bg-[#F2F2F2]/[0.02] backdrop-blur-sm hover:border-[#E5E5E5]/50 transition-all h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6 inline-flex w-14 h-14 rounded-xl bg-[#E5E5E5]/10 items-center justify-center text-[#E5E5E5] group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#F2F2F2] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#F2F2F2]/70 leading-relaxed flex-1">
                  {feature.description}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#E5E5E5]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
