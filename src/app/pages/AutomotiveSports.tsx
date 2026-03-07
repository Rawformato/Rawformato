import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Target,
  Video,
  TrendingUp,
  Calendar,
  CheckCircle2,
  Zap,
  Play,
  Users
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

/* ── Lazy video: play only when visible ── */
const _isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

function mobileSrc(url: string): string {
  if (!_isMobile) return url;
  const m = url.match(/^(https:\/\/res\.cloudinary\.com\/[^/]+\/video\/upload\/)(v\d+\/.+)$/);
  return m ? `${m[1]}q_auto,w_480/${m[2]}` : url;
}

function videoPoster(url: string): string {
  const m = url.match(/^(https:\/\/res\.cloudinary\.com\/[^/]+\/video\/upload\/)(v\d+\/)(.+)\.mp4$/);
  if (!m) return '';
  const w = _isMobile ? 480 : 720;
  return `${m[1]}so_0,w_${w},q_auto,f_jpg/${m[2]}${m[3]}.jpg`;
}

function tryPlay(video: HTMLVideoElement) {
  video.play().catch(() => {
    setTimeout(() => video.play().catch(() => {}), 300);
  });
}

function LazyVideo({ src, className = '' }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay(video);
        else video.pause();
      },
      { rootMargin: '200px', threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <video ref={videoRef} muted loop playsInline preload="metadata" poster={videoPoster(src)} src={mobileSrc(src)} className={className} />
    </div>
  );
}

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
    { src: 'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772493158/Prestige_Teaser_o7jwga.mp4', title: 'Cinematic Teaser', category: 'Automotive' },
    { src: 'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492960/Mimessi_Carro_Caf%C3%A9_jtigoh.mp4', title: 'Luxury Collection', category: 'Luxury Cars' },
    { src: 'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772493158/Auto_Rojo_MFK_dsqqtu.mp4', title: 'Performance Build', category: 'Performance' },
    { src: 'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492966/Aston_Martin_nhbihr.mp4', title: 'Luxury Showcase', category: 'Luxury Cars' },
    { src: 'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492959/Aprilia_Trendy_xnal0t.mp4', title: 'Motorsport Showcase', category: 'Motorsport' },
    { src: 'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492959/Hayabusa_radq7o.mp4', title: 'Speed Unleashed', category: 'Motorsport' },
  ];

  const reelVideos = [
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772493158/Prestige_Teaser_o7jwga.mp4',
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772493158/Auto_Rojo_MFK_dsqqtu.mp4',
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492959/Aprilia_Trendy_xnal0t.mp4',
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492966/Aston_Martin_nhbihr.mp4',
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492959/Hayabusa_radq7o.mp4',
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492934/Alejandro_Meza_ci14b6.mp4',
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492959/Auto_Rojo_MFK_lagwde.mp4',
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492961/POV_A_la_Cruz_6_u1l0au.mp4',
  ];

  return (
    <div className="relative">
      <SEO
        title="Automotive & Sports Marketing | RAW Formato"
        description="Performance marketing for automotive dealerships, car brands, and sports companies. Drive qualified leads with high-octane campaigns."
        path="/automotive-sports"
      />

      {/* ═══════════════════════════════════════
          HERO — Cinematic Video Background
          ═══════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          {/* Mobile: static poster; Desktop: autoplay video */}
          <img
            src="https://res.cloudinary.com/dvad6wd2v/video/upload/so_0,w_1280,q_auto,f_jpg/v1772493158/Prestige_Teaser_o7jwga.jpg"
            alt=""
            className="md:hidden w-full h-full object-cover opacity-40"
          />
          <video
            autoPlay muted loop playsInline preload="metadata"
            src="https://res.cloudinary.com/dvad6wd2v/video/upload/v1772493158/Prestige_Teaser_o7jwga.mp4"
            className="hidden md:block w-full h-full object-cover opacity-40"
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
              <Zap size={16} className="text-[#E5E5E5]" />
              <span className="text-sm text-white/70 font-medium">Automotive & Sports Marketing</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Performance Marketing for
              <br />
              <span className="bg-gradient-to-r from-white via-white/70 to-white/50 bg-clip-text text-transparent">
                Brands Built to Win.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Drive qualified leads, strengthen your brand, and grow your market presence with performance-driven campaigns.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="#contact">
                Get a Performance Plan
              </Button>
              <Button variant="secondary" href="#work">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHAT WE DELIVER — Icon Grid
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
              What We <span className="text-[#E5E5E5]">Deliver</span>
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              Every service your automotive or sports brand needs to accelerate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Target size={28} />, title: 'Lead Generation', desc: 'High-intent buyers ready to act' },
              { icon: <Video size={28} />, title: 'Content Production', desc: 'Lifestyle and performance visuals' },
              { icon: <TrendingUp size={28} />, title: 'Retargeting', desc: 'Stay top-of-mind with warm audiences' },
              { icon: <Calendar size={28} />, title: 'Seasonal Campaigns', desc: 'Launch promotions that move inventory' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group p-6 rounded-2xl border border-white/10 bg-[#F2F2F2]/[0.02] hover:border-[#E5E5E5]/50 transition-all"
              >
                <div className="mb-4 inline-flex p-3 rounded-xl bg-[#E5E5E5]/10 text-[#E5E5E5] group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#F2F2F2] mb-2">{item.title}</h3>
                <p className="text-sm text-[#F2F2F2]/60">{item.desc}</p>
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
              Our Automotive <span className="text-[#E5E5E5]">Portfolio</span>
            </h2>
            <p className="text-lg text-[#F2F2F2]/40 max-w-xl mx-auto">
              Hover to preview. From luxury dealerships to performance brands.
            </p>
          </motion.div>

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
            Our Work in Motion
          </span>
        </motion.div>

        <ScrollableReel className="gap-4 md:gap-6">
          {[...reelVideos, ...reelVideos].map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 md:w-64 lg:w-72 aspect-[9/16] rounded-2xl overflow-hidden border border-white/[0.06] bg-[#111]"
            >
              <LazyVideo src={src} className="w-full h-full object-cover" />
            </div>
          ))}
        </ScrollableReel>
      </section>

      {/* ═══════════════════════════════════════
          PHOTOGRAPHY PORTFOLIO
          ═══════════════════════════════════════ */}
      <PhotoGallery
        title={<>Motorsport & Automotive <span className="text-[#E5E5E5]">Photography</span></>}
        subtitle="Capturing speed, power, and precision"
        columns={3}
        photos={[
          { src: '/photos/automotive/sports-car.webp', alt: 'Sports car in motion' },
          { src: '/photos/automotive/moto-racing-1.webp', alt: 'Motorcycle track racing' },
          { src: '/photos/automotive/carbon-detail.webp', alt: 'Carbon fiber supercar detail' },
          { src: '/photos/automotive/paint-booth-1.webp', alt: 'Professional auto paint work' },
          { src: '/photos/automotive/moto-racing-2.webp', alt: 'Motorcycle racing action' },
          { src: '/photos/automotive/classic-interior.webp', alt: 'Classic car interior' },
          { src: '/photos/automotive/moto-racing-3.webp', alt: 'Race bike on track' },
          { src: '/photos/automotive/paint-booth-2.webp', alt: 'Auto body spray booth' },
          { src: '/photos/automotive/moto-pit-1.webp', alt: 'Pit area preparation' },
          { src: '/photos/automotive/moto-racing-4.webp', alt: 'Motorsport action shot' },
          { src: '/photos/automotive/paint-booth-3.webp', alt: 'Professional paint application' },
          { src: '/photos/automotive/moto-racing-5.webp', alt: 'Track racing cornering' },
          { src: '/photos/fitness/training-session.webp', alt: 'Athletic training session' },
          { src: '/photos/automotive/moto-pit-2.webp', alt: 'Rider in pit area' },
          { src: '/photos/fitness/coach-athlete.webp', alt: 'Coach guiding athlete' },
          { src: '/photos/fitness/youth-training.webp', alt: 'Youth sports training' },
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
                src="https://res.cloudinary.com/dvad6wd2v/video/upload/v1772493158/Auto_Rojo_MFK_dsqqtu.mp4"
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
                <h3 className="text-2xl font-bold text-white">Performance Shop</h3>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[#F2F2F2] mb-6">
                Turning Horsepower into <span className="text-[#E5E5E5]">High-Intent Leads</span>
              </h2>
              <p className="text-lg text-[#F2F2F2]/60 mb-8 leading-relaxed">
                We created high-octane content that captures the raw energy of a performance shop, then turned it into a lead generation machine with targeted campaigns.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-[#F2F2F2]/[0.03] border border-white/5">
                  <div className="text-3xl font-bold text-[#E5E5E5]">240%</div>
                  <div className="text-sm text-[#F2F2F2]/50">Lead increase</div>
                </div>
                <div className="p-4 rounded-xl bg-[#F2F2F2]/[0.03] border border-white/5">
                  <div className="text-3xl font-bold text-[#E5E5E5]">4.8x</div>
                  <div className="text-sm text-[#F2F2F2]/50">Return on ad spend</div>
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
          DELIVERABLES
          ═══════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-[#E5E5E5]/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
                Complete Marketing <span className="text-[#E5E5E5]">Ecosystem</span>
              </h2>
              <p className="text-xl text-[#F2F2F2]/60 mb-8 leading-relaxed">
                From creative production to conversion optimization, we handle every touchpoint of your customer journey.
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
        title={<>Performance <span className="text-[#E5E5E5]">Results</span></>}
        subtitle="Real metrics from automotive and sports campaigns"
        stats={[
          { value: '240%', label: 'Lead Increase', sublabel: 'First 90 days', icon: <TrendingUp size={28} /> },
          { value: '4.8x', label: 'Average ROAS', sublabel: 'Across campaigns', icon: <Target size={28} /> },
          { value: '50+', label: 'Videos Produced', sublabel: 'Per quarter', icon: <Video size={28} /> },
          { value: '2.4M+', label: 'Impressions', sublabel: 'Generated monthly', icon: <Users size={28} /> },
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

      {/* Testimonials */}
      <Testimonials
        testimonials={[
          {
            name: 'Michael R.', role: 'Owner', company: 'Automotive Dealership',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
            content: 'RAW Formato transformed our digital presence. We went from struggling to get leads to having a waiting list. Their AI-powered creative testing is game-changing.',
            rating: 5,
          },
          {
            name: 'Carlos M.', role: 'Marketing Director', company: 'Performance Auto Brand',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
            content: 'The quality of leads has improved dramatically. These aren\'t tire kickers, they\'re serious buyers ready to purchase. Best ROI we\'ve seen.',
            rating: 5,
          },
          {
            name: 'Jennifer P.', role: 'General Manager', company: 'Luxury Auto Dealership',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
            content: 'Their content production is absolutely world-class. Every video, every photo, it all looks premium and drives real engagement.',
            rating: 5,
          },
        ]}
      />

      {/* FAQ */}
      <FAQ
        title={<>Automotive Marketing <span className="text-[#E5E5E5]">FAQ</span></>}
        items={[
          { question: 'What types of automotive businesses do you work with?', answer: 'We work with dealerships, independent car shops, luxury brands, motorsport teams, performance shops, and sports/fitness brands. Whether you sell vehicles, modify them, or build a sports brand, we have proven strategies for your niche.' },
          { question: 'How do you generate qualified leads for dealerships?', answer: 'We use a combination of high-intent targeting on Meta, Google, and TikTok, paired with scroll-stopping video creative and optimized landing pages. Our retargeting systems keep your brand top-of-mind until prospects are ready to buy.' },
          { question: 'What kind of content do you produce?', answer: 'Everything from cinematic brand videos and social reels to ad creatives and event coverage. We handle the full production pipeline: scripting, filming, editing, and optimization for each platform.' },
          { question: 'How soon can we expect results?', answer: 'Most automotive clients see measurable improvement in lead quality within 30 days. Significant ROI typically appears within 60-90 days as we optimize targeting, creative, and funnel performance.' },
          { question: 'Do you handle social media management too?', answer: 'Yes. Our packages can include full social media management: content calendar, posting, community engagement, and performance reporting. We keep your brand active and growing on all platforms.' },
        ]}
      />

      {/* ═══════════════════════════════════════
          FINAL CTA — Video Background
          ═══════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <LazyVideo src="https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492966/Aston_Martin_nhbihr.mp4" className="w-full h-full object-cover" />
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
              Ready to <span className="text-[#E5E5E5]">Accelerate</span>?
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 mb-12">
              Let's build a campaign that drives results, not just impressions
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="#contact">
                Get a Performance Plan
              </Button>
              <Button variant="secondary" href="#work">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
