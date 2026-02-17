import { motion } from 'motion/react';
import { 
  Target, 
  Globe, 
  Mail,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Home,
  Shield,
  TrendingUp
} from 'lucide-react';
import { Button } from '../components/Button';
import { ContactForm } from '../components/ContactForm';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function RealtorsBuilders() {
  const leadSystem = [
    {
      step: 'Ad',
      icon: <Target size={24} />,
      title: 'Targeted Campaigns',
      description: 'Reach high-intent buyers actively searching for properties in your market.',
    },
    {
      step: 'Landing',
      icon: <Globe size={24} />,
      title: 'High-Converting Pages',
      description: 'Custom landing pages designed to capture qualified leads and showcase properties.',
    },
    {
      step: 'Follow-Up',
      icon: <Mail size={24} />,
      title: 'Automated Nurture',
      description: 'Email and SMS sequences that build trust and keep you top-of-mind.',
    },
    {
      step: 'Booking',
      icon: <Calendar size={24} />,
      title: 'Schedule Calls',
      description: 'Seamless booking system that turns warm leads into qualified appointments.',
    },
  ];

  const deliverables = [
    'High-intent lead generation campaigns',
    'Premium property landing pages',
    'Professional photo/video direction',
    'Trust-building content strategy',
    'Retargeting and nurture sequences',
    'CRM integration and automation',
    'Local market domination tactics',
    'Performance tracking and reporting',
  ];

  const features = [
    {
      icon: <Shield size={28} />,
      title: 'Trust-First Messaging',
      description: 'Position yourself as the trusted expert in your market with authority-building content.',
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Premium Positioning',
      description: 'Marketing that matches the quality of your properties and attracts serious buyers.',
    },
    {
      icon: <Target size={28} />,
      title: 'Qualified Leads Only',
      description: 'Advanced targeting ensures you spend time with buyers and sellers who are ready to act.',
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1640109478916-f445f8f19b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxMTg5MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury Real Estate"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0E]/80 via-[#0B0B0E]/90 to-[#0B0B0E]" />
        </div>

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
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 mb-8">
              <Home size={16} className="text-[#8B5CF6]" />
              <span className="text-sm text-[#8B5CF6]">Real Estate Marketing</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F2F2F2] mb-8 leading-tight">
              Premium Leads for
              <br />
              <span className="text-[#8B5CF6]">Premium Properties.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#F2F2F2]/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              High-intent funnels, trust-first marketing, and automated systems that attract qualified buyers and sellers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="#contact">
                Get Qualified Leads
              </Button>
              <Button variant="secondary" href="#system">
                See the System
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              Built for <span className="text-[#8B5CF6]">Real Estate Professionals</span>
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              Marketing that matches the sophistication of your properties
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-white/10 bg-[#F2F2F2]/[0.02] backdrop-blur-sm hover:border-[#8B5CF6]/50 transition-colors group"
              >
                <div className="mb-6 inline-flex p-4 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#F2F2F2] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#F2F2F2]/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead System */}
      <section id="system" className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-[#8B5CF6]/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              The Complete <span className="text-[#8B5CF6]">Lead System</span>
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              From first click to closed deal—a proven funnel that works 24/7
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {leadSystem.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Arrow connector */}
                {index < leadSystem.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px">
                    <div className="w-full h-full bg-gradient-to-r from-[#8B5CF6]/50 via-[#8B5CF6]/30 to-transparent" />
                    <ArrowRight 
                      size={20} 
                      className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-2 text-[#8B5CF6]/50" 
                    />
                  </div>
                )}

                <div className="p-6 rounded-xl border border-white/10 bg-[#F2F2F2]/[0.02] backdrop-blur-sm hover:border-[#8B5CF6]/50 transition-colors h-full">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6]">
                    {item.icon}
                  </div>
                  <div className="text-xs text-[#8B5CF6] font-semibold mb-2 uppercase tracking-wider">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#F2F2F2] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#F2F2F2]/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-8 rounded-2xl border border-[#8B5CF6]/30 bg-[#8B5CF6]/5"
          >
            <h3 className="text-2xl font-bold text-[#F2F2F2] mb-3">
              Result: Qualified Appointments on Autopilot
            </h3>
            <p className="text-[#F2F2F2]/60 mb-6">
              Your calendar fills with serious buyers and motivated sellers—without cold calling or door knocking.
            </p>
            <Button variant="primary" href="#contact">
              Build Your Lead System
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Full Deliverables */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
                Full-Service Real Estate
                <br />
                <span className="text-[#8B5CF6]">Marketing</span>
              </h2>
              <p className="text-xl text-[#F2F2F2]/60 mb-8 leading-relaxed">
                From lead generation to closing support, we provide everything you need to dominate your market.
              </p>
              <Button variant="outline" href="#contact">
                Get Your Custom Strategy
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {deliverables.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-[#F2F2F2]/[0.02] border border-white/5 hover:border-[#8B5CF6]/30 transition-colors"
                >
                  <CheckCircle2 size={20} className="text-[#8B5CF6] mt-0.5 shrink-0" />
                  <span className="text-[#F2F2F2]">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-[#8B5CF6]/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              Real Results for <span className="text-[#8B5CF6]">Real Estate Pros</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: '$890K', label: 'Pipeline Value Generated', desc: 'Luxury property campaign' },
              { metric: '147', label: 'Qualified Leads', desc: 'In first 60 days' },
              { metric: '4.8x', label: 'ROI on Ad Spend', desc: 'Builder partnership campaign' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl border border-white/10 bg-[#F2F2F2]/[0.02] backdrop-blur-sm hover:border-[#8B5CF6]/50 transition-colors"
              >
                <div className="text-5xl font-bold text-[#8B5CF6] mb-3">
                  {stat.metric}
                </div>
                <div className="text-xl font-semibold text-[#F2F2F2] mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-[#F2F2F2]/60">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B5CF6]/20 rounded-full blur-[150px]"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-[#F2F2F2] mb-6">
              Ready to <span className="text-[#8B5CF6]">Close More Deals</span>?
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 mb-12">
              Let's build a lead system that fills your pipeline with qualified opportunities
            </p>
            <Button variant="primary" href="#contact">
              Get Qualified Leads
            </Button>
          </motion.div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}