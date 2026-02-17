import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Instagram } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
            Ready to <span className="text-[#8B5CF6]">Scale</span>?
          </h2>
          <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
            Let's build something extraordinary together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl border border-white/10 bg-[#F2F2F2]/[0.02] backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#F2F2F2] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#F2F2F2]/5 border border-white/10 text-[#F2F2F2] placeholder:text-[#F2F2F2]/30 focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#F2F2F2] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#F2F2F2]/5 border border-white/10 text-[#F2F2F2] placeholder:text-[#F2F2F2]/30 focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#F2F2F2] mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#F2F2F2]/5 border border-white/10 text-[#F2F2F2] placeholder:text-[#F2F2F2]/30 focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] outline-none transition-colors"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-[#F2F2F2] mb-2">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#F2F2F2]/5 border border-white/10 text-[#F2F2F2] focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] outline-none transition-colors"
                >
                  <option value="">Select an industry</option>
                  <option value="automotive">Automotive & Sports</option>
                  <option value="restaurants">Restaurants</option>
                  <option value="realestate">Realtors & Builders</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#F2F2F2] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-[#F2F2F2]/5 border border-white/10 text-[#F2F2F2] placeholder:text-[#F2F2F2]/30 focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3.5 bg-[#8B5CF6] text-[#F2F2F2] rounded-full font-medium flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-shadow"
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

          {/* Alternative Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Instagram Card */}
            <div className="relative p-8 rounded-2xl border border-white/10 bg-[#F2F2F2]/[0.02] backdrop-blur-sm hover:border-[#8B5CF6]/50 transition-colors">
              <div className="mb-6 inline-flex p-4 rounded-full bg-[#8B5CF6]/10">
                <Instagram size={32} className="text-[#8B5CF6]" />
              </div>
              <h3 className="text-2xl font-bold text-[#F2F2F2] mb-3">
                DM Us on Instagram
              </h3>
              <p className="text-[#F2F2F2]/60 mb-6 leading-relaxed">
                Prefer a more casual chat? Send us a direct message and we'll get back to you within 24 hours.
              </p>
              <a
                href="https://instagram.com/rawformato"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#8B5CF6] font-medium hover:gap-4 transition-all"
              >
                <span>@rawformato</span>
                <span>→</span>
              </a>
            </div>

            {/* Info Card */}
            <div className="relative p-8 rounded-2xl border border-white/10 bg-[#F2F2F2]/[0.02] backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[#F2F2F2] mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3 text-[#F2F2F2]/60">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B5CF6] mt-1">✓</span>
                  <span>Response within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B5CF6] mt-1">✓</span>
                  <span>Free 30-minute strategy call</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B5CF6] mt-1">✓</span>
                  <span>Custom proposal within 3 days</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
