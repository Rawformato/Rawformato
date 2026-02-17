import { motion } from 'motion/react';
import { 
  Video, 
  Users, 
  MapPin,
  Calendar,
  CheckCircle2,
  TrendingUp,
  Instagram,
  ChevronRight
} from 'lucide-react';
import { Button } from '../components/Button';
import { ContactForm } from '../components/ContactForm';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Restaurants() {
  const weeklySystem = [
    {
      day: 'Monday',
      tasks: 'Content planning & shoot prep',
    },
    {
      day: 'Tuesday',
      tasks: 'On-location content capture',
    },
    {
      day: 'Wednesday',
      tasks: 'Editing & creative assembly',
    },
    {
      day: 'Thursday',
      tasks: 'Ad campaign optimization',
    },
    {
      day: 'Friday',
      tasks: 'Posting & community engagement',
    },
  ];

  const deliverables = [
    'Scroll-stopping reels and UGC content',
    'Local advertising (Meta, Google, TikTok)',
    'Influencer-ready campaigns',
    'Seasonal promotion strategy',
    'Google Maps and local SEO visibility',
    'Menu photography and videography',
    'Social media management',
    'Customer review automation',
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1750943082012-efe6d2fd9e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmclMjBjaGVmfGVufDF8fHx8MTc3MTI5MDk3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Gourmet Food"
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
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-[100px]"
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
              <Instagram size={16} className="text-[#8B5CF6]" />
              <span className="text-sm text-[#8B5CF6]">Restaurant Marketing</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F2F2F2] mb-8 leading-tight">
              Turn Views into
              <br />
              <span className="text-[#8B5CF6]">Reservations.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#F2F2F2]/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              Viral content, local ads, and influencer-ready campaigns that fill tables and build community.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="#contact">
                Get a Restaurant Growth Plan
              </Button>
              <Button variant="secondary" href="#system">
                See How It Works
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Focus On */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              Built for <span className="text-[#8B5CF6]">Food & Hospitality</span>
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              We understand your industry and know what makes diners choose you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Video size={32} />, title: 'Reels & UGC', desc: 'Content that stops the scroll' },
              { icon: <MapPin size={32} />, title: 'Local Ads', desc: 'Target diners in your area' },
              { icon: <Users size={32} />, title: 'Influencer Ready', desc: 'Campaigns that get shared' },
              { icon: <TrendingUp size={32} />, title: 'Promotions', desc: 'Fill slow nights & seasons' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-white/10 bg-[#F2F2F2]/[0.02] backdrop-blur-sm hover:border-[#8B5CF6]/50 transition-colors group"
              >
                <div className="mb-4 text-[#8B5CF6] group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#F2F2F2] mb-2">{item.title}</h3>
                <p className="text-sm text-[#F2F2F2]/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Content System */}
      <section id="system" className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-[#8B5CF6]/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              Weekly Content <span className="text-[#8B5CF6]">System</span>
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              A proven process that keeps your restaurant top-of-mind, every week
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {weeklySystem.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline connector */}
                {index < weeklySystem.length - 1 && (
                  <div className="absolute left-8 top-16 w-px h-full bg-gradient-to-b from-[#8B5CF6]/50 to-[#8B5CF6]/20" />
                )}

                <div className="flex items-start gap-6 p-6 rounded-xl border border-white/10 bg-[#F2F2F2]/[0.02] backdrop-blur-sm hover:border-[#8B5CF6]/50 transition-colors">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 shrink-0">
                    <span className="text-[#8B5CF6] font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#F2F2F2] mb-2">
                      {item.day}
                    </h3>
                    <p className="text-[#F2F2F2]/60">
                      {item.tasks}
                    </p>
                  </div>
                  <ChevronRight className="text-[#8B5CF6] opacity-50" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-[#F2F2F2]/60 mb-6">
              Result: Consistent content, growing audience, and tables filled
            </p>
            <Button variant="primary" href="#contact">
              Start Your Content Engine
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
                Everything You Need to
                <br />
                <span className="text-[#8B5CF6]">Stay Booked</span>
              </h2>
              <p className="text-xl text-[#F2F2F2]/60 mb-8 leading-relaxed">
                From social content to paid ads, we handle every touchpoint of your guest journey—before, during, and after the meal.
              </p>
              <Button variant="outline" href="#contact">
                Get Your Custom Plan
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
              Real Results for <span className="text-[#8B5CF6]">Real Restaurants</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: '4.2M', label: 'Impressions in 90 Days', desc: 'Multi-location restaurant group' },
              { metric: '2,800+', label: 'New Followers', desc: 'Independent fine dining' },
              { metric: '38%', label: 'Increase in Reservations', desc: 'Seasonal promotion campaign' },
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
              Ready to <span className="text-[#8B5CF6]">Fill Tables</span>?
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 mb-12">
              Let's build a content and ad system that keeps your restaurant buzzing
            </p>
            <Button variant="primary" href="#contact">
              Get a Restaurant Growth Plan
            </Button>
          </motion.div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}