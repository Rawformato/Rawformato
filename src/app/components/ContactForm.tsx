import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Instagram, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // TODO: Integrate with Resend API
      // POST to your backend API endpoint that uses Resend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        industry: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact us directly on Instagram.');
      setTimeout(() => setStatus('idle'), 5000);
    }
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
            Ready to <span className="text-[#E5E5E5]">Scale</span>?
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
                  className="w-full px-4 py-3 rounded-lg bg-[#F2F2F2]/5 border border-white/10 text-[#F2F2F2] placeholder:text-[#F2F2F2]/30 focus:border-[#E5E5E5] focus:ring-1 focus:ring-[#E5E5E5] outline-none transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg bg-[#F2F2F2]/5 border border-white/10 text-[#F2F2F2] placeholder:text-[#F2F2F2]/30 focus:border-[#E5E5E5] focus:ring-1 focus:ring-[#E5E5E5] outline-none transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg bg-[#F2F2F2]/5 border border-white/10 text-[#F2F2F2] placeholder:text-[#F2F2F2]/30 focus:border-[#E5E5E5] focus:ring-1 focus:ring-[#E5E5E5] outline-none transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg bg-[#F2F2F2]/5 border border-white/10 text-[#F2F2F2] focus:border-[#E5E5E5] focus:ring-1 focus:ring-[#E5E5E5] outline-none transition-colors"
                >
                  <option value="" className="bg-[#1a1a1e]">Select an industry</option>
                  <option value="restaurants" className="bg-[#1a1a1e]">Restaurants</option>
                  <option value="realestate" className="bg-[#1a1a1e]">Real Estate</option>
                  <option value="automotive" className="bg-[#1a1a1e]">Automotive & Sports</option>
                  <option value="aesthetics" className="bg-[#1a1a1e]">Aesthetics & Beauty</option>
                  <option value="homeservices" className="bg-[#1a1a1e]">Home Services</option>
                  <option value="fitness" className="bg-[#1a1a1e]">Fitness</option>
                  <option value="ecommerce" className="bg-[#1a1a1e]">E-Commerce</option>
                  <option value="personalbrand" className="bg-[#1a1a1e]">Personal Brand</option>
                  <option value="professional" className="bg-[#1a1a1e]">Professional Services</option>
                  <option value="other" className="bg-[#1a1a1e]">Other</option>
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
                  className="w-full px-4 py-3 rounded-lg bg-[#F2F2F2]/5 border border-white/10 text-[#F2F2F2] placeholder:text-[#F2F2F2]/30 focus:border-[#E5E5E5] focus:ring-1 focus:ring-[#E5E5E5] outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                className={`w-full px-8 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 transition-all ${
                  status === 'loading'
                    ? 'bg-[#E5E5E5]/50 cursor-not-allowed text-[#F2F2F2]'
                    : status === 'success'
                    ? 'bg-green-600 hover:bg-green-700 text-[#F2F2F2]'
                    : status === 'error'
                    ? 'bg-red-600 hover:bg-red-700 text-[#F2F2F2]'
                    : 'bg-[#E5E5E5] hover:shadow-[0_0_30px_rgba(229,229,229,0.4)] text-[#0B0B0E]'
                }`}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 size={18} />
                    Message Sent!
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle size={18} />
                    Try Again
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                    <span>Thank you! We'll get back to you within 24 hours.</span>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                >
                  <div className="flex items-start gap-2">
                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                </motion.div>
              )}
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
            <div className="relative p-8 rounded-2xl border border-white/10 bg-[#F2F2F2]/[0.02] backdrop-blur-sm hover:border-[#E5E5E5]/50 transition-colors">
              <div className="mb-6 inline-flex p-4 rounded-full bg-[#E5E5E5]/10">
                <Instagram size={32} className="text-[#E5E5E5]" />
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
                className="inline-flex items-center gap-2 text-[#E5E5E5] font-medium hover:gap-4 transition-all"
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
                  <span className="text-[#E5E5E5] mt-1">✓</span>
                  <span>Response within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E5E5E5] mt-1">✓</span>
                  <span>Free 30-minute strategy call</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E5E5E5] mt-1">✓</span>
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
