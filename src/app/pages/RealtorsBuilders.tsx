import { motion } from 'motion/react';
import {
  Target,
  Globe,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Home,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Play
} from 'lucide-react';
import { Button } from '../components/Button';
import { VideoCard } from '../components/VideoCard';
import { ContactForm } from '../components/ContactForm';
import { Testimonials } from '../components/Testimonials';
import { Stats } from '../components/Stats';
import { FAQ } from '../components/FAQ';
import { PhotoGallery } from '../components/PhotoGallery';
import { ScrollableReel } from '../components/ScrollableReel';
import { SEO } from '../components/SEO';
import { LazyVideo, ReelVideo } from '../components/LazyVideo';
import { VIDEO_BASE } from '../lib/video';

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
      description: 'Scale your real estate brand',
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
        'Unlimited campaign management',
        'Daily content pipeline',
        'AI creative testing lab',
        'Full funnel automation',
        'Dedicated account manager',
        '24/7 support',
        'Custom integrations',
      ],
    },
  ];

  const showcaseVideos = [
    { src: `${VIDEO_BASE}/rhino_homes_recap.mp4`, title: 'Architecture Recap', category: 'Real Estate' },
    { src: `${VIDEO_BASE}/wine_cellar.mp4`, title: 'Wine Cellar Tour', category: 'Luxury Interior' },
    { src: `${VIDEO_BASE}/rhino_homes_open_house.mp4`, title: 'Open House Event', category: 'Property Tour' },
    { src: `${VIDEO_BASE}/ro_projects_nov22.mp4`, title: 'Architecture Showcase', category: 'Architecture' },
    { src: `${VIDEO_BASE}/rhino_homes_dia_3.mp4`, title: 'Construction Day 3', category: 'Builder Content' },
    { src: `${VIDEO_BASE}/pov_a_la_cruz_8.mp4`, title: 'Lifestyle Showcase', category: 'Premium Lifestyle' },
  ];

  const reelVideos = [
    `${VIDEO_BASE}/rhino_homes_recap.mp4`,
    `${VIDEO_BASE}/wine_cellar.mp4`,
    `${VIDEO_BASE}/rhino_homes_open_house.mp4`,
    `${VIDEO_BASE}/ro_projects_nov22.mp4`,
    `${VIDEO_BASE}/rhino_homes_dia_3.mp4`,
    `${VIDEO_BASE}/pov_a_la_cruz_8.mp4`,
  ];

  return (
    <div className="relative">
      <SEO
        title="Real Estate Marketing | RAW Formato"
        description="Premium leads for premium properties. High-intent funnels and trust-first marketing for realtors and builders."
        path="/realtors-builders"
      />

      {/* ═══════════════════════════════════════
          HERO — Cinematic Video Background
          ═══════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <video
            autoPlay muted loop playsInline preload="metadata"
            src={`${VIDEO_BASE}/rhino_homes_recap.mp4`}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0E]/60 via-[#0B0B0E]/50 to-[#0B0B0E]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0E]/40 via-transparent to-[#0B0B0E]/40" />
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 200px 40px rgba(11,11,14,0.5)' }} />

        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#E5E5E5]/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] mb-8">
              <Home size={16} className="text-[#E5E5E5]" />
              <span className="text-sm text-white/70 font-medium">Real Estate Marketing</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Premium Leads for
              <br />
              <span className="bg-gradient-to-r from-white via-white/70 to-white/50 bg-clip-text text-transparent">
                Premium Properties.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              High-intent funnels, trust-first marketing, and automated systems that attract qualified buyers and sellers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="#contact">
                Get Qualified Leads
              </Button>
              <Button variant="secondary" href="#work">
                See Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURES
          ═══════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              Built for <span className="text-[#E5E5E5]">Real Estate Professionals</span>
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              Marketing that matches the sophistication of your properties
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group p-8 rounded-2xl border border-white/10 bg-[#F2F2F2]/[0.02] hover:border-[#E5E5E5]/50 transition-all"
              >
                <div className="mb-6 inline-flex p-4 rounded-xl bg-[#E5E5E5]/10 text-[#E5E5E5] group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#F2F2F2] mb-3">{feature.title}</h3>
                <p className="text-[#F2F2F2]/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          VIDEO PORTFOLIO — Hover-to-Play Grid
          ═══════════════════════════════════════ */}
      <section id="work" className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-[#E5E5E5]/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-4">
              Our Real Estate <span className="text-[#E5E5E5]">Portfolio</span>
            </h2>
            <p className="text-lg text-[#F2F2F2]/40 max-w-xl mx-auto">
              Premium marketing for premium properties.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {showcaseVideos.map((video, index) => (
              <VideoCard
                key={index}
                src={video.src}
                title={video.title}
                category={video.category}
                priority={index < 2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          VIDEO REEL — Horizontal Auto-Scroll
          ═══════════════════════════════════════ */}
      <section className="relative py-12 lg:py-20 overflow-clip">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#0B0B0E] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#0B0B0E] to-transparent z-10 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-[11px] text-white/25 uppercase tracking-[0.3em] font-medium">
            Our Property Portfolio
          </span>
        </motion.div>

        <ScrollableReel className="gap-4 md:gap-6">
          {[...reelVideos, ...reelVideos].map((src, index) => (
            <ReelVideo key={index} src={src} />
          ))}
        </ScrollableReel>
      </section>

      {/* ═══════════════════════════════════════
          PROPERTY PHOTOGRAPHY
          ═══════════════════════════════════════ */}
      <PhotoGallery
        title={<>Property <span className="text-[#E5E5E5]">Photography</span></>}
        subtitle="Showcasing spaces that inspire and sell"
        columns={3}
        photos={[
          { src: '/photos/realestate/pool-evening.webp', alt: 'Luxury pool at twilight' },
          { src: '/photos/realestate/modern-interior.webp', alt: 'Modern glass interior' },
          { src: '/photos/realestate/wine-cellar.webp', alt: 'Luxury wine cellar' },
          { src: '/photos/realestate/house-exterior.webp', alt: 'Home exterior with landscaping' },
          { src: '/photos/realestate/conference-room.webp', alt: 'Modern conference room' },
          { src: '/photos/realestate/modern-kitchen.webp', alt: 'Modern kitchen design' },
          { src: '/photos/realestate/pool-lanai.webp', alt: 'Pool and lanai area' },
          { src: '/photos/realestate/luxury-hallway.webp', alt: 'Luxury hallway design' },
          { src: '/photos/realestate/meeting-room.webp', alt: 'Meeting room interior' },
        ]}
      />

      {/* ═══════════════════════════════════════
          FEATURED PROJECT — Spotlight
          ═══════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Video */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video group"
            >
              <LazyVideo
                src={`${VIDEO_BASE}/rhino_homes_open_house.mp4`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E]/80 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                  <Play size={24} className="text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6">
                <div className="inline-flex px-3 py-1 rounded-full bg-[#E5E5E5]/90 text-[#0B0B0E] text-sm font-medium mb-2">
                  Featured Project
                </div>
                <h3 className="text-2xl font-bold text-white">Luxury Open House</h3>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[#F2F2F2] mb-6">
                Selling Homes Before They're <span className="text-[#E5E5E5]">Even Listed</span>
              </h2>
              <p className="text-lg text-[#F2F2F2]/60 mb-8 leading-relaxed">
                We created a full content strategy: cinematic property tours, drone footage, and targeted lead funnels that generated $890K in pipeline value in the first quarter.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-[#F2F2F2]/[0.03] border border-white/5">
                  <div className="text-3xl font-bold text-[#E5E5E5]">$890K</div>
                  <div className="text-sm text-[#F2F2F2]/50">Pipeline value</div>
                </div>
                <div className="p-4 rounded-xl bg-[#F2F2F2]/[0.03] border border-white/5">
                  <div className="text-3xl font-bold text-[#E5E5E5]">147</div>
                  <div className="text-sm text-[#F2F2F2]/50">Qualified leads in 60 days</div>
                </div>
              </div>
              <Button variant="outline" href="#contact">
                Get Similar Results
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LEAD SYSTEM
          ═══════════════════════════════════════ */}
      <section id="system" className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-[#E5E5E5]/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              The Complete <span className="text-[#E5E5E5]">Lead System</span>
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              From first click to closed deal. A proven funnel that works 24/7
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {leadSystem.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {index < leadSystem.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px">
                    <div className="w-full h-full bg-gradient-to-r from-[#E5E5E5]/50 via-[#E5E5E5]/30 to-transparent" />
                    <ArrowRight size={20} className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-2 text-[#E5E5E5]/50" />
                  </div>
                )}
                <div className="p-6 rounded-xl border border-white/10 bg-[#F2F2F2]/[0.02] hover:border-[#E5E5E5]/50 transition-colors h-full">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-[#E5E5E5]/10 text-[#E5E5E5]">
                    {item.icon}
                  </div>
                  <div className="text-xs text-[#E5E5E5] font-semibold mb-2 uppercase tracking-wider">{item.step}</div>
                  <h3 className="text-lg font-bold text-[#F2F2F2] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#F2F2F2]/60 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-8 rounded-2xl border border-[#E5E5E5]/30 bg-[#E5E5E5]/5"
          >
            <h3 className="text-2xl font-bold text-[#F2F2F2] mb-3">
              Result: Qualified Appointments on Autopilot
            </h3>
            <p className="text-[#F2F2F2]/60 mb-6">
              Your calendar fills with serious buyers and motivated sellers, without cold calling or door knocking.
            </p>
            <Button variant="primary" href="#contact">
              Build Your Lead System
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DELIVERABLES
          ═══════════════════════════════════════ */}
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
                <span className="text-[#E5E5E5]">Marketing</span>
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
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-[#F2F2F2]/[0.02] border border-white/5 hover:border-[#E5E5E5]/30 transition-colors"
                >
                  <CheckCircle2 size={20} className="text-[#E5E5E5] mt-0.5 shrink-0" />
                  <span className="text-[#F2F2F2]">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats
        title={<>Real Results for <span className="text-[#E5E5E5]">Real Estate Pros</span></>}
        subtitle="Numbers from our real estate marketing campaigns"
        stats={[
          { value: '$890K', label: 'Pipeline Value', sublabel: 'Generated in 90 days', icon: <TrendingUp size={28} /> },
          { value: '147', label: 'Qualified Leads', sublabel: 'In first 60 days', icon: <Target size={28} /> },
          { value: '4.8x', label: 'ROI on Ad Spend', sublabel: 'Builder partnership', icon: <Zap size={28} /> },
          { value: '28%', label: 'Conversion Rate', sublabel: 'Landing pages', icon: <Users size={28} /> },
        ]}
      />

      {/* Testimonials */}
      <Testimonials
        testimonials={[
          {
            name: 'David C.', role: 'Realtor', company: 'Luxury Real Estate',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
            content: 'Finally, a marketing agency that understands real estate. The leads are high-quality, and the automated follow-up system is brilliant.',
            rating: 5,
          },
          {
            name: 'Rachel T.', role: 'Broker Associate', company: 'Realty Group',
            image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
            content: 'RAW Formato\'s landing pages are converting at 28%, way above industry average. My pipeline has never been stronger.',
            rating: 5,
          },
          {
            name: 'James M.', role: 'Owner', company: 'Custom Home Builder',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop',
            content: 'We sold out our latest development 4 months ahead of schedule. Their targeting brought us exactly the buyers we needed.',
            rating: 5,
          },
        ]}
      />

      {/* ═══════════════════════════════════════
          PACKAGES
          ═══════════════════════════════════════ */}
      <section id="packages" className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              Choose Your <span className="text-[#E5E5E5]">Growth Path</span>
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              Flexible packages designed to match your ambition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`relative p-8 rounded-2xl border backdrop-blur-sm transition-all ${
                  pkg.highlighted
                    ? 'border-[#E5E5E5] bg-[#E5E5E5]/5 scale-105'
                    : 'border-white/10 bg-[#F2F2F2]/[0.02] hover:border-[#E5E5E5]/50'
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#E5E5E5] text-[#0B0B0E] text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-[#F2F2F2] mb-2">{pkg.name}</h3>
                <p className="text-[#F2F2F2]/60 mb-8">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#F2F2F2]/80">
                      <CheckCircle2 size={18} className="text-[#E5E5E5] mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={pkg.highlighted ? 'primary' : 'secondary'} href="#contact" className="w-full">
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title={<>Real Estate Marketing <span className="text-[#E5E5E5]">FAQ</span></>}
        items={[
          { question: 'Do you work with individual realtors or just brokerages?', answer: 'Both! We work with individual agents, teams, brokerages, and custom home builders. Our packages scale to fit your business, whether you are a solo agent or running a multi-location firm.' },
          { question: 'How do you generate qualified real estate leads?', answer: 'We build complete lead funnels: targeted ads on Meta and Google that drive traffic to high-converting landing pages, followed by automated email/SMS nurture sequences. Our advanced targeting focuses on high-intent buyers and sellers in your specific market.' },
          { question: 'What kind of content do you create for real estate?', answer: 'We produce cinematic property tours, aerial drone footage, agent branding content, neighborhood showcase videos, open house coverage, and social media content designed to build trust and authority in your market.' },
          { question: 'Can you integrate with my existing CRM?', answer: 'Yes. We integrate with all major real estate CRMs including Follow Up Boss, KvCORE, Sierra Interactive, and more. Leads flow directly into your system with automated tagging and follow-up sequences.' },
          { question: 'How long before I start seeing qualified leads?', answer: 'Most real estate clients start receiving leads within the first 1-2 weeks of campaign launch. Quality leads that convert to appointments typically ramp up within 30-60 days as we optimize targeting and messaging.' },
        ]}
      />

      {/* ═══════════════════════════════════════
          FINAL CTA — Video Background
          ═══════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <LazyVideo src={`${VIDEO_BASE}/rhino_homes_open_house.mp4`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0B0B0E]/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0E] via-transparent to-[#0B0B0E]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-[#F2F2F2] mb-6">
              Ready to <span className="text-[#E5E5E5]">Close More Deals</span>?
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 mb-12">
              Let's build a lead system that fills your pipeline with qualified opportunities
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="#contact">
                Get Qualified Leads
              </Button>
              <Button variant="secondary" href="#work">
                See Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
