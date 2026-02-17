import { motion } from 'motion/react';
import { 
  Zap, 
  Target, 
  Video, 
  MessageSquare, 
  Globe, 
  Mail, 
  Workflow, 
  BarChart3,
  Car,
  UtensilsCrossed,
  Building2,
  Sparkles,
  Brain,
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import { Button } from '../components/Button';
import { Marquee } from '../components/Marquee';
import { IndustryCard } from '../components/IndustryCard';
import { ServiceCard } from '../components/ServiceCard';
import { ContactForm } from '../components/ContactForm';

export default function Home() {
  const capabilities = [
    'AI Creative Testing',
    'Paid Ads',
    'Content Production',
    'Lead Systems',
    'Landing Pages',
    'Automations',
    'Analytics',
  ];

  const services = [
    {
      icon: <Target size={32} />,
      title: 'Paid Ads',
      description: 'Meta, Google, TikTok campaigns optimized for ROI and scale.',
    },
    {
      icon: <Video size={32} />,
      title: 'Content Production',
      description: 'Scroll-stopping creatives, reels, and video ads that convert.',
    },
    {
      icon: <MessageSquare size={32} />,
      title: 'Social Media',
      description: 'Brand presence and community building that drives awareness.',
    },
    {
      icon: <Globe size={32} />,
      title: 'Landing Pages',
      description: 'High-converting pages designed to turn traffic into leads.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Lead Generation',
      description: 'Strategic funnels that capture and qualify your ideal customers.',
    },
    {
      icon: <Mail size={32} />,
      title: 'Email & SMS',
      description: 'Automated sequences that nurture leads into paying customers.',
    },
    {
      icon: <Workflow size={32} />,
      title: 'Automations',
      description: 'CRM workflows and follow-up systems that save time and close deals.',
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Analytics',
      description: 'Data-driven insights and reporting to optimize every dollar spent.',
    },
  ];

  const aiStack = [
    {
      icon: <Brain size={28} />,
      title: 'AI Creative Lab',
      description: 'Scripts, hooks, and variations tested faster than traditional agencies.',
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Smart Optimization',
      description: 'Budget and targeting decisions guided by real-time data and AI insights.',
    },
    {
      icon: <Workflow size={28} />,
      title: 'Automations',
      description: 'Follow-ups, CRM workflows, email/SMS sequences that run on autopilot.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discover',
      description: 'Deep dive into your brand, audience, and goals. We map out the strategy.',
    },
    {
      step: '02',
      title: 'Build',
      description: 'Creative production, funnel design, and campaign architecture built for performance.',
    },
    {
      step: '03',
      title: 'Launch',
      description: 'Deploy campaigns across channels with precision tracking and optimization.',
    },
    {
      step: '04',
      title: 'Scale',
      description: 'Test, iterate, and scale what works. Continuous improvement for exponential growth.',
    },
  ];

  const caseStudies = [
    {
      industry: 'Automotive',
      outcome: '312% increase in qualified leads',
      description: 'Performance campaign for luxury dealership',
    },
    {
      industry: 'Restaurant',
      outcome: '4.2M impressions in 90 days',
      description: 'Viral content strategy for restaurant group',
    },
    {
      industry: 'Real Estate',
      outcome: '$890K in pipeline value',
      description: 'Premium lead funnel for luxury properties',
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Gradient orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/15 rounded-full blur-[120px]"
          />
          
          {/* Noise texture */}
          <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JhaW4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzAwMCIvPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFpbikiLz48L3N2Zz4=')]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 mb-8"
            >
              <Sparkles size={16} className="text-[#8B5CF6]" />
              <span className="text-sm text-[#8B5CF6]">AI-Powered Creative Marketing</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F2F2F2] mb-8 leading-tight">
              A Creative Marketing Agency
              <br />
              <span className="text-[#8B5CF6]">Built for the AI Era.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#F2F2F2]/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              We blend creativity, performance, and AI-powered marketing to help Florida brands grow faster.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="#contact">
                Book a Free Strategy Call
              </Button>
              <Button variant="secondary" href="#industries">
                Explore Industries
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#8B5CF6] to-transparent" />
        </motion.div>
      </section>

      {/* Credibility Marquee */}
      <Marquee items={capabilities} />

      {/* Industries Section */}
      <section id="industries" className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              Industries We <span className="text-[#8B5CF6]">Dominate</span>
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              Specialized strategies for businesses that demand results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <IndustryCard
                icon={<Car size={40} />}
                title="Automotive & Sports"
                description="High-octane campaigns for dealerships, car clubs, and sports brands. Drive qualified leads and build brand loyalty."
                link="/automotive-sports"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <IndustryCard
                icon={<UtensilsCrossed size={40} />}
                title="Restaurants"
                description="Turn views into reservations. Viral content, local ads, and influencer-ready campaigns that fill tables."
                link="/restaurants"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <IndustryCard
                icon={<Building2 size={40} />}
                title="Realtors & Builders"
                description="Premium leads for premium properties. High-intent funnels and trust-first marketing that closes deals."
                link="/realtors-builders"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-[#8B5CF6]/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              Full-Stack <span className="text-[#8B5CF6]">Marketing</span>
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              Every service you need to dominate your market
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Marketing Stack */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 mb-6">
              <Sparkles size={16} className="text-[#8B5CF6]" />
              <span className="text-sm text-[#8B5CF6]">The Differentiator</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              AI Marketing <span className="text-[#8B5CF6]">Stack</span>
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              Where human creativity meets machine intelligence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aiStack.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                <div className="relative p-8 rounded-2xl border border-[#8B5CF6]/20 bg-[#F2F2F2]/[0.02] backdrop-blur-sm hover:border-[#8B5CF6]/50 transition-all">
                  {/* Connection line to next card */}
                  {index < aiStack.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-[#8B5CF6]/50 to-transparent" />
                  )}
                  
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6]">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#F2F2F2] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#F2F2F2]/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-[#8B5CF6]/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              Our <span className="text-[#8B5CF6]">Process</span>
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              From strategy to scale in four proven steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline connector */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-[#8B5CF6]/50 via-[#8B5CF6]/30 to-transparent -z-10" />
                )}
                
                <div className="relative">
                  <div className="text-6xl font-bold text-[#8B5CF6]/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-[#F2F2F2] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#F2F2F2]/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              Real Results for <span className="text-[#8B5CF6]">Real Brands</span>
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              See what we've built for brands like yours
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl border border-white/10 bg-[#F2F2F2]/[0.02] backdrop-blur-sm hover:border-[#8B5CF6]/50 transition-all"
              >
                <div className="inline-flex px-3 py-1 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm font-medium mb-4">
                  {study.industry}
                </div>
                <h3 className="text-3xl font-bold text-[#F2F2F2] mb-3">
                  {study.outcome}
                </h3>
                <p className="text-[#F2F2F2]/60">
                  {study.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" href="#contact">
              View More Work
            </Button>
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8B5CF6]/20 rounded-full blur-[150px]"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-[#F2F2F2] mb-6">
              Ready to Scale with <br />
              <span className="text-[#8B5CF6]">Creative + AI</span>?
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 mb-12 max-w-2xl mx-auto">
              Let's build a marketing system that works while you sleep
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="#contact">
                Book a Strategy Call
              </Button>
              <Button variant="secondary" href="#contact">
                Send a Message
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
