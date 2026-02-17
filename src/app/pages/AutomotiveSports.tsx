import { motion } from 'motion/react';
import { 
  Target, 
  Video, 
  TrendingUp, 
  Calendar,
  CheckCircle2,
  ArrowRight,
  Zap
} from 'lucide-react';
import { Button } from '../components/Button';
import { ContactForm } from '../components/ContactForm';

export default function AutomotiveSports() {
  const deliverables = [
    'High-performance ad campaigns (Meta, Google, TikTok)',
    'Scroll-stopping video content and reels',
    'Seasonal promotion campaigns',
    'Local market domination strategies',
    'Retargeting systems for warm leads',
    'Event and launch campaign support',
    'Brand storytelling and lifestyle content',
    'Performance dashboards and reporting',
  ];

  const packages = [
    {
      name: 'Starter',
      description: 'Perfect for testing the waters',
      features: [
        '2 ad campaigns per month',
        'Basic content package',
        'Monthly reporting',
        'Email support',
      ],
    },
    {
      name: 'Growth',
      description: 'Scale your dealership or brand',
      features: [
        '4 active campaigns',
        'Weekly content production',
        'Advanced targeting & retargeting',
        'CRM integration',
        'Bi-weekly strategy calls',
        'Priority support',
      ],
      highlighted: true,
    },
    {
      name: 'Scale',
      description: 'Dominate your market',
      features: [
        'Unlimited campaigns',
        'Daily content pipeline',
        'AI creative testing lab',
        'Full funnel automation',
        'Dedicated account manager',
        '24/7 support',
        'Custom integrations',
      ],
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JhaW4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzAwMCIvPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFpbikiLz48L3N2Zz4=')]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 mb-8">
              <Zap size={16} className="text-[#8B5CF6]" />
              <span className="text-sm text-[#8B5CF6]">Automotive & Sports Marketing</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F2F2F2] mb-8 leading-tight">
              Performance Marketing for
              <br />
              <span className="text-[#8B5CF6]">Brands Built to Win.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#F2F2F2]/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              Drive qualified leads, build brand loyalty, and dominate your market with campaigns designed for speed.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="#contact">
                Get a Performance Plan
              </Button>
              <Button variant="secondary" href="#packages">
                View Packages
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              What We <span className="text-[#8B5CF6]">Deliver</span>
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              Every service your automotive or sports brand needs to accelerate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Target size={24} />, title: 'Lead Generation', desc: 'High-intent buyers ready to act' },
              { icon: <Video size={24} />, title: 'Content Production', desc: 'Lifestyle and performance visuals' },
              { icon: <TrendingUp size={24} />, title: 'Retargeting', desc: 'Stay top-of-mind with warm audiences' },
              { icon: <Calendar size={24} />, title: 'Seasonal Campaigns', desc: 'Launch promotions that move inventory' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-white/10 bg-[#F2F2F2]/[0.02] backdrop-blur-sm hover:border-[#8B5CF6]/50 transition-colors"
              >
                <div className="mb-4 text-[#8B5CF6]">{item.icon}</div>
                <h3 className="text-lg font-semibold text-[#F2F2F2] mb-2">{item.title}</h3>
                <p className="text-sm text-[#F2F2F2]/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables List */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-[#8B5CF6]/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
                Complete Marketing <span className="text-[#8B5CF6]">Ecosystem</span>
              </h2>
              <p className="text-xl text-[#F2F2F2]/60 mb-8 leading-relaxed">
                From creative production to conversion optimization, we handle every touchpoint of your customer journey.
              </p>
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

      {/* Packages */}
      <section id="packages" className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              Choose Your <span className="text-[#8B5CF6]">Growth Path</span>
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              Flexible packages designed to match your ambition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border backdrop-blur-sm transition-all ${
                  pkg.highlighted
                    ? 'border-[#8B5CF6] bg-[#8B5CF6]/5 scale-105'
                    : 'border-white/10 bg-[#F2F2F2]/[0.02] hover:border-[#8B5CF6]/50'
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#8B5CF6] text-[#F2F2F2] text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-[#F2F2F2] mb-2">
                  {pkg.name}
                </h3>
                <p className="text-[#F2F2F2]/60 mb-8">
                  {pkg.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#F2F2F2]/80">
                      <CheckCircle2 size={18} className="text-[#8B5CF6] mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={pkg.highlighted ? 'primary' : 'secondary'}
                  href="#contact"
                  className="w-full"
                >
                  Get Started
                </Button>
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
              Ready to <span className="text-[#8B5CF6]">Accelerate</span>?
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 mb-12">
              Let's build a campaign that drives results, not just impressions
            </p>
            <Button variant="primary" href="#contact">
              Get a Performance Plan
            </Button>
          </motion.div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
