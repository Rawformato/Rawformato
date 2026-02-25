import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: 'What makes RAW Formato different from other agencies?',
    answer: 'We combine human creativity with AI-powered optimization. While traditional agencies rely solely on manual testing, we use AI to test creative variations 10x faster, identify winning formulas, and scale what works. Plus, we specialize in industries where we have proven success: automotive, restaurants, and real estate.',
  },
  {
    question: 'How quickly can we see results?',
    answer: 'Most clients see initial momentum within the first 30 days—improved engagement, better ad performance, and increased leads. Significant ROI typically appears within 60-90 days as we optimize campaigns and scale what works. We focus on sustainable growth, not quick tricks.',
  },
  {
    question: 'Do you work with businesses outside of Florida?',
    answer: 'While we are based in Florida and have deep expertise in Florida markets, we work with clients nationwide. Our systems and strategies are designed to work in any competitive market.',
  },
  {
    question: 'What is included in your packages?',
    answer: 'Our packages include everything from creative production (photo/video) to paid advertising, landing pages, CRM automation, and analytics. We customize based on your needs and goals. Book a strategy call to get a detailed proposal tailored to your business.',
  },
  {
    question: 'Do I need a big budget to work with you?',
    answer: 'We offer packages for different business sizes. While larger budgets allow for faster testing and scaling, we can work with businesses ready to invest at least $2,000-$3,000/month in marketing (including ad spend). Quality marketing requires investment, but we maximize every dollar.',
  },
  {
    question: 'How involved do I need to be?',
    answer: 'We handle the heavy lifting—strategy, creative, execution, and optimization. You will have bi-weekly or weekly check-ins (depending on your package) and approve major creative directions. Most clients spend 2-4 hours per month on collaboration. We make it easy.',
  },
  {
    question: 'What if I am not happy with the results?',
    answer: 'We work on month-to-month contracts after an initial 90-day commitment. This gives us time to test, learn, and optimize while keeping you in control. We are confident in our process, but if we are not the right fit, you can walk away without long-term obligations.',
  },
];

export function FAQ({ items = defaultFAQs, title, subtitle }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-[#E5E5E5]/[0.02] to-transparent">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
            {title || (
              <>
                Frequently Asked <span className="text-[#E5E5E5]">Questions</span>
              </>
            )}
          </h2>
          {subtitle && (
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 rounded-xl border border-white/10 bg-[#F2F2F2]/[0.02] backdrop-blur-sm hover:border-[#E5E5E5]/50 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-[#F2F2F2] pr-8">
                    {item.question}
                  </h3>
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[#E5E5E5]/10 flex items-center justify-center text-[#E5E5E5]">
                    {openIndex === index ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#F2F2F2]/70 leading-relaxed mt-4 pr-8">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA after FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-8 rounded-2xl border border-[#E5E5E5]/30 bg-[#E5E5E5]/5"
        >
          <p className="text-[#F2F2F2]/80 mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E5E5E5] text-[#0B0B0E] rounded-full font-medium hover:shadow-[0_0_30px_rgba(229,229,229,0.4)] transition-all"
          >
            Book a Free Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
