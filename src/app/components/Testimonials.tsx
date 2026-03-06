import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    name: 'Michael R.',
    role: 'Owner',
    company: 'Automotive Dealership',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    content: 'RAW Formato transformed our digital presence. We went from struggling to get leads to having a waiting list. Their AI-powered creative testing is game-changing.',
    rating: 5,
  },
  {
    name: 'Sofia M.',
    role: 'Marketing Director',
    company: 'Restaurant Group',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    content: 'The content they produce is absolutely stunning. Our reservations increased 38% in the first 60 days. Best investment we\'ve made.',
    rating: 5,
  },
  {
    name: 'David C.',
    role: 'Realtor',
    company: 'Luxury Real Estate',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
    content: 'Finally, a marketing agency that understands real estate. The leads are high-quality, and the automated follow-up system is brilliant.',
    rating: 5,
  },
];

export function Testimonials({ testimonials = defaultTestimonials }: TestimonialsProps) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background glow — static for performance */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E5E5E5]/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
            What Our Clients <span className="text-[#E5E5E5]">Say</span>
          </h2>
          <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
            Real results from real businesses that trusted us to scale their growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl border border-white/10 bg-[#F2F2F2]/[0.02] hover:border-[#E5E5E5]/50 transition-all h-full flex flex-col">
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 text-[#E5E5E5]/20 w-12 h-12" />

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-[#E5E5E5] fill-[#E5E5E5]"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-[#F2F2F2]/80 leading-relaxed mb-8 flex-1">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#E5E5E5]/30">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-[#F2F2F2]">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-[#F2F2F2]/60">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>

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
