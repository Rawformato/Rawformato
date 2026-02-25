import { motion } from 'motion/react';
import { Button } from './Button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CTAProps {
  title: string | React.ReactNode;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: 'default' | 'gradient' | 'with-image';
  imageSrc?: string;
  imageAlt?: string;
}

export function CTA({
  title,
  subtitle,
  primaryButtonText = 'Get Started',
  primaryButtonHref = '#contact',
  secondaryButtonText,
  secondaryButtonHref = '#contact',
  variant = 'default',
  imageSrc,
  imageAlt = 'CTA Image',
}: CTAProps) {
  if (variant === 'with-image' && imageSrc) {
    return (
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-[#E5E5E5]/30">
            {/* Background Image */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0E] via-[#0B0B0E]/95 to-[#0B0B0E]/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 py-16 lg:py-24 px-8 lg:px-16">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#F2F2F2] mb-6">
                    {title}
                  </h2>
                  {subtitle && (
                    <p className="text-xl text-[#F2F2F2]/70 mb-8 leading-relaxed">
                      {subtitle}
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary" href={primaryButtonHref}>
                      {primaryButtonText}
                    </Button>
                    {secondaryButtonText && (
                      <Button variant="secondary" href={secondaryButtonHref}>
                        {secondaryButtonText}
                      </Button>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'gradient') {
    return (
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E5E5E5]/20 rounded-full blur-[150px]"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-[#F2F2F2] mb-6">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-[#F2F2F2]/60 mb-12 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href={primaryButtonHref}>
                {primaryButtonText}
              </Button>
              {secondaryButtonText && (
                <Button variant="secondary" href={secondaryButtonHref}>
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative p-12 lg:p-16 rounded-3xl border border-[#E5E5E5]/30 bg-gradient-to-br from-[#E5E5E5]/10 to-transparent backdrop-blur-sm text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-[#F2F2F2]/70 mb-10 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href={primaryButtonHref}>
                {primaryButtonText}
              </Button>
              {secondaryButtonText && (
                <Button variant="secondary" href={secondaryButtonHref}>
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#E5E5E5]/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#E5E5E5]/10 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
