import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useEffect } from 'react';
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
  ChevronDown,
} from 'lucide-react';
import { Button } from '../components/Button';
import { Marquee } from '../components/Marquee';
import { IndustryCard } from '../components/IndustryCard';
import { ServiceCard } from '../components/ServiceCard';
import { VideoCard } from '../components/VideoCard';
import { ContactForm } from '../components/ContactForm';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { Stats } from '../components/Stats';
import { PhotoGallery } from '../components/PhotoGallery';
import { SEO } from '../components/SEO';

/* ────────────────────────────────────────────────
   useLazyVideo — play video only when visible
   ──────────────────────────────────────────────── */
function useLazyVideo(options: { rootMargin?: string } = {}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: options.rootMargin ?? '200px', threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options.rootMargin]);

  return { videoRef, containerRef };
}

/* ────────────────────────────────────────────────
   ReelVideo — lazy play only when visible in viewport
   ──────────────────────────────────────────────── */
function ReelVideo({ src }: { src: string }) {
  const { videoRef, containerRef } = useLazyVideo({ rootMargin: '100px' });

  return (
    <div
      ref={containerRef}
      className="flex-shrink-0 w-48 md:w-64 lg:w-72 aspect-[9/16] rounded-2xl overflow-hidden border border-white/[0.06] bg-[#111]"
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        src={src}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

/* ────────────────────────────────────────────────
   LazyVideo — autoplay only when visible
   ──────────────────────────────────────────────── */
function LazyVideo({ src, className = '' }: { src: string; className?: string }) {
  const { videoRef, containerRef } = useLazyVideo({ rootMargin: '200px' });

  return (
    <div ref={containerRef} className="w-full h-full">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        src={src}
        className={className}
      />
    </div>
  );
}

/* ────────────────────────────────────────────────
   Home Page
   ──────────────────────────────────────────────── */
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  /* ── Data ──────────────────────────────── */
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
    { icon: <Target size={32} />, title: 'Paid Ads', description: 'Meta, Google, TikTok campaigns optimized for ROI and scale.' },
    { icon: <Video size={32} />, title: 'Content Production', description: 'Scroll-stopping creatives, reels, and video ads that convert.' },
    { icon: <MessageSquare size={32} />, title: 'Social Media', description: 'Brand presence and community building that drives awareness.' },
    { icon: <Globe size={32} />, title: 'Landing Pages', description: 'High-converting pages designed to turn traffic into leads.' },
    { icon: <Zap size={32} />, title: 'Lead Generation', description: 'Strategic funnels that capture and qualify your ideal customers.' },
    { icon: <Mail size={32} />, title: 'Email & SMS', description: 'Automated sequences that nurture leads into paying customers.' },
    { icon: <Workflow size={32} />, title: 'Automations', description: 'CRM workflows and follow-up systems that save time and close deals.' },
    { icon: <BarChart3 size={32} />, title: 'Analytics', description: 'Data-driven insights and reporting to optimize every dollar spent.' },
  ];

  const aiStack = [
    { icon: <Brain size={28} />, title: 'AI Creative Lab', description: 'Scripts, hooks, and variations tested faster than traditional agencies.' },
    { icon: <TrendingUp size={28} />, title: 'Smart Optimization', description: 'Budget and targeting decisions guided by real-time data and AI insights.' },
    { icon: <Workflow size={28} />, title: 'Automations', description: 'Follow-ups, CRM workflows, email/SMS sequences that run on autopilot.' },
  ];

  const processSteps = [
    { step: '01', title: 'Discover', description: 'Deep dive into your brand, audience, and goals. We map out the strategy.' },
    { step: '02', title: 'Build', description: 'Creative production, funnel design, and campaign architecture built for performance.' },
    { step: '03', title: 'Launch', description: 'Deploy campaigns across channels with precision tracking and optimization.' },
    { step: '04', title: 'Scale', description: 'Test, iterate, and scale what works. Continuous improvement for exponential growth.' },
  ];

  const caseStudies = [
    {
      industry: 'Automotive',
      outcome: '240% increase in qualified leads',
      description: 'Performance campaign for luxury automotive brand',
      video: 'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772493158/Prestige_Teaser_o7jwga.mp4',
    },
    {
      industry: 'Restaurant',
      outcome: '4.2M impressions in 90 days',
      description: 'Viral content strategy for restaurant group',
      video: 'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492960/DeLuca_s_o2vynp.mp4',
    },
    {
      industry: 'Real Estate',
      outcome: '$890K in pipeline value',
      description: 'Premium lead funnel for luxury properties',
      video: 'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492921/Rhino_Homes_Recap_jvwrpz.mp4',
    },
  ];

  const showcaseVideos = [
    { src: 'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772493151/Hausmash_nyllt4.mp4', title: 'Let The Fire Guide Your Senses', category: 'Restaurant' },
    { src: 'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772493275/POV_A_la_Cruz_gxwtdq.mp4', title: 'Crave-Worthy Content', category: 'Food & Beverage' },
    { src: 'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772493158/Prestige_Teaser_o7jwga.mp4', title: 'Prestige Creations', category: 'Automotive' },
    { src: 'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492921/Rhino_Homes_Recap_jvwrpz.mp4', title: 'Architecture Recap', category: 'Real Estate' },
    { src: 'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492934/Alejandro_Meza_ci14b6.mp4', title: 'Strength & Power', category: 'Fitness' },
    { src: 'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492959/Aprilia_Trendy_xnal0t.mp4', title: 'Motorsport Showcase', category: 'Motorsport' },
  ];

  const reelVideos = [
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772493151/Hausmash_nyllt4.mp4',
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772493158/Prestige_Teaser_o7jwga.mp4',
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492960/DeLuca_s_o2vynp.mp4',
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492925/Wine_Cellar_kb6fsd.mp4',
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492934/Alejandro_Meza_ci14b6.mp4',
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492959/Aprilia_Trendy_xnal0t.mp4',
  ];

  /* ── Render ────────────────────────────── */
  return (
    <div className="relative">
      <SEO
        title="RAW Formato | Creative Marketing & AI Agency"
        description="We turn brands into movements through scroll-stopping content and AI-powered performance marketing."
        path="/"
      />

      {/* ═══════════════════════════════════════════════════════
          HERO — Fullscreen Cinematic Video Background
          ═══════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden -mt-20 pt-20"
      >
        {/* Background Video — optimized quality per device */}
        <div className="absolute inset-0" style={{ transform: 'translateZ(0)' }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          >
            {/* Mobile: lower quality for bandwidth */}
            <source src="https://res.cloudinary.com/dvad6wd2v/video/upload/q_auto,w_720/v1772055622/hero_snlduv.webm" type="video/webm" media="(max-width: 768px)" />
            <source src="https://res.cloudinary.com/dvad6wd2v/video/upload/q_auto,w_720/v1772055615/hero_rxmpqm.mp4" type="video/mp4" media="(max-width: 768px)" />
            {/* Desktop: full quality */}
            <source src="https://res.cloudinary.com/dvad6wd2v/video/upload/v1772055622/hero_snlduv.webm" type="video/webm" />
            <source src="https://res.cloudinary.com/dvad6wd2v/video/upload/v1772055615/hero_rxmpqm.mp4" type="video/mp4" />
            <source src="https://res.cloudinary.com/dvad6wd2v/video/upload/v1772055615/hero_rxmpqm.mov" type="video/quicktime" />
          </video>
        </div>

        {/* Cinematic overlay layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0E]/70 via-[#0B0B0E]/25 to-[#0B0B0E]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0E]/30 via-transparent to-[#0B0B0E]/30" />

        {/* Vignette effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(11,11,14,0.4) 100%)' }}
        />

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity, willChange: 'opacity' }}
          className="relative z-10 text-center max-w-5xl mx-auto px-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] mb-10"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[13px] text-white/70 font-medium tracking-wide">
              RAW Formato Studio
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,8vw,6rem)] font-bold text-white leading-[1.05] tracking-[-0.03em] mb-8"
            >
              Creative Marketing
              <br />
              <span className="bg-gradient-to-r from-white via-white/70 to-white/50 bg-clip-text text-transparent">
                & AI Agency
              </span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-base md:text-xl text-white/45 max-w-2xl mx-auto mb-12 leading-relaxed font-light px-2"
          >
            We turn brands into movements through scroll-stopping content{" "}
            <br className="hidden md:block" />
            and AI-powered performance marketing
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="primary" href="#contact">
              Book a Strategy Call
            </Button>
            <Button variant="secondary" href="#work">
              View Our Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/25 text-[10px] uppercase tracking-[0.3em] font-medium">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={16} className="text-white/25" />
          </motion.div>
        </motion.div>
      </section>

      {/* Credibility Marquee */}
      <Marquee items={capabilities} />

      {/* ═══════════════════════════════════════════════════════
          WORK SHOWCASE — Real Video Portfolio Grid
          ═══════════════════════════════════════════════════════ */}
      <section id="work" className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-4">
              What We <span className="text-[#E5E5E5]">Create</span>
            </h2>
            <p className="text-lg text-[#F2F2F2]/40 max-w-xl mx-auto">
              Hover to preview. Every piece crafted to convert.
            </p>
          </motion.div>

          {/* Video Grid — 2 cols mobile, 3 cols desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {showcaseVideos.map((video, index) => (
              <VideoCard
                key={index}
                src={video.src}
                title={video.title}
                category={video.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          VIDEO REEL — Horizontal Auto-Scrolling Strip
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#0B0B0E] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#0B0B0E] to-transparent z-10 pointer-events-none" />

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-[11px] text-white/25 uppercase tracking-[0.3em] font-medium">
            Our Portfolio
          </span>
        </motion.div>

        {/* Scrolling reel — only visible videos play, duplicate for seamless loop */}
        <div className="flex gap-4 md:gap-6 animate-scroll-reel">
          {[...reelVideos, ...reelVideos].map((src, index) => (
            <ReelVideo key={index} src={src} />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          INDUSTRIES
          ═══════════════════════════════════════════════════════ */}
      <section id="industries" className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              Industries We <span className="text-[#E5E5E5]">Specialize In</span>
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
                description="High-octane campaigns for dealerships, car clubs, and sports brands that drive qualified leads and build brand loyalty."
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

      {/* ═══════════════════════════════════════════════════════
          PHOTOGRAPHY PORTFOLIO — Best of All Categories
          ═══════════════════════════════════════════════════════ */}
      <PhotoGallery
        title={<>Photography <span className="text-[#E5E5E5]">Portfolio</span></>}
        subtitle="Professional photography that elevates every brand"
        columns={4}
        photos={[
          { src: '/photos/restaurants/grilled-steak.jpg', alt: 'Grilled steak with chimichurri' },
          { src: '/photos/automotive/sports-car.jpg', alt: 'Sports car in motion' },
          { src: '/photos/realestate/pool-evening.jpg', alt: 'Luxury pool at twilight' },
          { src: '/photos/restaurants/smoky-cocktail.png', alt: 'Smoky old fashioned cocktail' },
          { src: '/photos/automotive/moto-racing-1.jpg', alt: 'Motorcycle track racing' },
          { src: '/photos/restaurants/sushi-roll.png', alt: 'Sushi roll presentation' },
          { src: '/photos/realestate/wine-cellar.png', alt: 'Luxury wine cellar' },
          { src: '/photos/restaurants/latte-art.jpg', alt: 'Latte art pour' },
          { src: '/photos/automotive/carbon-detail.jpg', alt: 'Carbon fiber detail' },
          { src: '/photos/restaurants/causa-peruvian.png', alt: 'Peruvian causa' },
          { src: '/photos/realestate/modern-interior.png', alt: 'Modern glass interior' },
          { src: '/photos/fitness/training-session.jpg', alt: 'Athletic training' },
          { src: '/photos/restaurants/espresso-martini.png', alt: 'Espresso martini' },
          { src: '/photos/automotive/classic-interior.jpg', alt: 'Classic car interior' },
          { src: '/photos/restaurants/affogato-dessert.jpg', alt: 'Affogato dessert' },
          { src: '/photos/lifestyle/beach-sunset.jpg', alt: 'Beach lifestyle shoot' },
        ]}
      />

      {/* ═══════════════════════════════════════════════════════
          SERVICES GRID
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-[#E5E5E5]/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              Full-Stack <span className="text-[#E5E5E5]">Marketing</span>
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              Every service you need to dominate your market
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          AI MARKETING STACK
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E5E5E5]/10 border border-[#E5E5E5]/30 mb-6">
              <Sparkles size={16} className="text-[#E5E5E5]" />
              <span className="text-sm text-[#E5E5E5]">The Differentiator</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              AI Marketing <span className="text-[#E5E5E5]">Stack</span>
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              Where human creativity meets machine intelligence
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {aiStack.map((item, index) => (
              <div key={index} className="relative group">
                <div className="relative p-8 rounded-2xl border border-[#E5E5E5]/20 bg-[#F2F2F2]/[0.02] hover:border-[#E5E5E5]/50 transition-all">
                  {index < aiStack.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-[#E5E5E5]/50 to-transparent" />
                  )}
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-[#E5E5E5]/10 text-[#E5E5E5]">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#F2F2F2] mb-3">{item.title}</h3>
                  <p className="text-[#F2F2F2]/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PROCESS TIMELINE
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-[#E5E5E5]/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              Our <span className="text-[#E5E5E5]">Process</span>
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              From strategy to scale in four proven steps
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-[#E5E5E5]/50 via-[#E5E5E5]/30 to-transparent -z-10" />
                )}
                <div className="relative">
                  <div className="text-6xl font-bold text-[#E5E5E5]/20 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold text-[#F2F2F2] mb-3">{item.title}</h3>
                  <p className="text-[#F2F2F2]/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CASE STUDIES — Video Backgrounds
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              Real Results for <span className="text-[#E5E5E5]">Real Brands</span>
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              See what we've built for brands like yours
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl border border-white/10 bg-[#F2F2F2]/[0.02] hover:border-[#E5E5E5]/50 transition-all overflow-hidden"
              >
                {/* Video background — lazy loaded */}
                <div className="relative h-64 overflow-hidden will-change-transform">
                  <LazyVideo
                    src={study.video}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-[#0B0B0E]/50 to-transparent" />

                  {/* Industry badge */}
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex px-3 py-1 rounded-full bg-[#E5E5E5]/90 backdrop-blur-sm text-[#0B0B0E] text-sm font-medium">
                      {study.industry}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-[#F2F2F2] mb-3">{study.outcome}</h3>
                  <p className="text-[#F2F2F2]/60">{study.description}</p>
                </div>
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

      {/* Stats */}
      <Stats
        title={
          <>
            Numbers That <span className="text-[#E5E5E5]">Speak for Themselves</span>
          </>
        }
        subtitle="Real metrics from real campaigns"
      />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* ═══════════════════════════════════════════════════════
          FINAL CTA — Silver Ball Video Background
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Video background — lazy loaded */}
        <div className="absolute inset-0">
          <LazyVideo
            src="https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492971/POV_A_la_Cruz_8_lcmbfs.mp4"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B0B0E]/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0E] via-[#0B0B0E]/60 to-[#0B0B0E]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-[#F2F2F2] mb-6">
              Ready to Scale with <br />
              <span className="text-[#E5E5E5]">Creative Strategy + AI</span>?
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
