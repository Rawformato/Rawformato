import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Video,
  Users,
  MapPin,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  Instagram,
  Target,
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
import { SEO } from '../components/SEO';

/* ── Lazy video: play only when visible ── */
function LazyVideo({ src, className = '' }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: '200px', threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <video ref={videoRef} muted loop playsInline preload="none" src={src} className={className} />
    </div>
  );
}

export default function Restaurants() {
  const weeklySystem = [
    { day: 'Monday', tasks: 'Content planning & shoot prep' },
    { day: 'Tuesday', tasks: 'On-location content capture' },
    { day: 'Wednesday', tasks: 'Editing & creative assembly' },
    { day: 'Thursday', tasks: 'Ad campaign optimization' },
    { day: 'Friday', tasks: 'Posting & community engagement' },
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

  const showcaseVideos = [
    { src: 'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772493151/Hausmash_nyllt4.mp4', title: 'Let The Fire Guide Your Senses', category: 'Restaurant' },
    { src: 'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492960/DeLuca_s_o2vynp.mp4', title: 'Fine Dining Experience', category: 'Fine Dining' },
    { src: 'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492920/Copa_f8ew7k.mp4', title: 'Cocktail Bar Vibes', category: 'Bar & Lounge' },
    { src: 'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492921/ASMR_A_la_Cruz_x239ex.mp4', title: 'Gastronomy ASMR', category: 'Gastronomy' },
    { src: 'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492921/El_Atico_Trendy_zweya8.mp4', title: 'Rooftop Vibes', category: 'Rooftop Bar' },
    { src: 'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492929/Pisco_Lounge_b91qse.mp4', title: 'Pisco Lounge', category: 'Cocktails' },
  ];

  const reelVideos = [
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772493151/Hausmash_nyllt4.mp4',
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492960/DeLuca_s_o2vynp.mp4',
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772493275/POV_A_la_Cruz_gxwtdq.mp4',
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492920/Copa_f8ew7k.mp4',
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492925/Wine_Cellar_kb6fsd.mp4',
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492921/ASMR_A_la_Cruz_x239ex.mp4',
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492921/El_Atico_Trendy_zweya8.mp4',
    'https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492929/Pisco_Lounge_b91qse.mp4',
  ];

  return (
    <div className="relative">
      <SEO
        title="Restaurant Marketing | RAW Formato"
        description="Turn views into reservations. Viral content, local ads, and influencer-ready campaigns that fill tables and build community."
        path="/restaurants"
      />

      {/* ═══════════════════════════════════════
          HERO — Cinematic Video Background
          ═══════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          {/* Mobile: static poster; Desktop: autoplay video */}
          <img
            src="https://res.cloudinary.com/dvad6wd2v/video/upload/so_0,w_1280,q_auto,f_jpg/v1772493151/Hausmash_nyllt4.jpg"
            alt=""
            className="md:hidden w-full h-full object-cover opacity-40"
          />
          <video
            autoPlay muted loop playsInline preload="metadata"
            src="https://res.cloudinary.com/dvad6wd2v/video/upload/v1772493151/Hausmash_nyllt4.mp4"
            className="hidden md:block w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0E]/60 via-[#0B0B0E]/50 to-[#0B0B0E]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0E]/40 via-transparent to-[#0B0B0E]/40" />
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 200px 40px rgba(11,11,14,0.5)' }} />

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E5E5E5]/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] mb-8">
              <Instagram size={16} className="text-[#E5E5E5]" />
              <span className="text-sm text-white/70 font-medium">Restaurant Marketing</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Turn Views into
              <br />
              <span className="bg-gradient-to-r from-white via-white/70 to-white/50 bg-clip-text text-transparent">
                Reservations.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Viral content, local ads, and influencer-ready campaigns that fill tables and build community.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="#contact">
                Get a Restaurant Growth Plan
              </Button>
              <Button variant="secondary" href="#work">
                See Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHAT WE FOCUS ON
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
              Built for <span className="text-[#E5E5E5]">Food & Hospitality</span>
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              We understand your industry and know what makes diners choose you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Video size={28} />, title: 'Reels & UGC', desc: 'Content that stops the scroll' },
              { icon: <MapPin size={28} />, title: 'Local Ads', desc: 'Target diners in your area' },
              { icon: <Users size={28} />, title: 'Influencer Ready', desc: 'Campaigns that get shared' },
              { icon: <TrendingUp size={28} />, title: 'Promotions', desc: 'Fill slow nights & seasons' },
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
              Our Restaurant <span className="text-[#E5E5E5]">Work</span>
            </h2>
            <p className="text-lg text-[#F2F2F2]/40 max-w-xl mx-auto">
              Hover to preview. Content that makes people hungry.
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
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#0B0B0E] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#0B0B0E] to-transparent z-10 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-[11px] text-white/25 uppercase tracking-[0.3em] font-medium">
            Our Restaurant Portfolio
          </span>
        </motion.div>

        <div className="flex gap-4 md:gap-6 animate-scroll-reel">
          {[...reelVideos, ...reelVideos].map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 md:w-64 lg:w-72 aspect-[9/16] rounded-2xl overflow-hidden border border-white/[0.06] bg-[#111]"
            >
              <LazyVideo src={src} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PHOTOGRAPHY PORTFOLIO
          ═══════════════════════════════════════ */}
      <PhotoGallery
        title={<>Our Food <span className="text-[#E5E5E5]">Photography</span></>}
        subtitle="Every dish deserves to be captured at its best"
        photos={[
          { src: '/photos/restaurants/grilled-steak.jpg', alt: 'Grilled steak with chimichurri' },
          { src: '/photos/restaurants/smoky-cocktail.png', alt: 'Smoky old fashioned cocktail' },
          { src: '/photos/restaurants/sushi-roll.png', alt: 'Sushi roll with flower garnish' },
          { src: '/photos/restaurants/burrata-prosciutto.png', alt: 'Burrata with prosciutto' },
          { src: '/photos/restaurants/latte-art.jpg', alt: 'Latte art pour' },
          { src: '/photos/restaurants/causa-peruvian.png', alt: 'Peruvian causa dish' },
          { src: '/photos/restaurants/smash-burger.png', alt: 'Flaming smash burger' },
          { src: '/photos/restaurants/pisco-sour.jpg', alt: 'Pisco sour cocktail' },
          { src: '/photos/restaurants/seafood-platter.png', alt: 'Grilled seafood platter' },
          { src: '/photos/restaurants/espresso-martini.png', alt: 'Espresso martini' },
          { src: '/photos/restaurants/pasta-tomato.png', alt: 'Spaghetti with tomato sauce' },
          { src: '/photos/restaurants/affogato-dessert.jpg', alt: 'Affogato dessert' },
          { src: '/photos/restaurants/spicy-cocktail.jpg', alt: 'Spicy cocktail with garnish' },
          { src: '/photos/restaurants/shrimp-rice.png', alt: 'Shrimp with rice and plantains' },
          { src: '/photos/restaurants/gelato-scoop.png', alt: 'Artisan gelato' },
          { src: '/photos/restaurants/burrata-landscape.png', alt: 'Burrata plating' },
          { src: '/photos/restaurants/sangria-cocktails.png', alt: 'Sangria cocktails' },
          { src: '/photos/restaurants/gnocchi.png', alt: 'Gnocchi in butter sauce' },
          { src: '/photos/restaurants/hot-chocolate.png', alt: 'Artisan hot chocolate' },
          { src: '/photos/restaurants/calamari-rings.png', alt: 'Crispy calamari rings' },
          { src: '/photos/restaurants/samosas.png', alt: 'Samosas with chili sauce' },
          { src: '/photos/restaurants/milanesa-sandwich.png', alt: 'Milanesa with mashed potatoes' },
          { src: '/photos/restaurants/shrimp-patacones.png', alt: 'Shrimp with patacones' },
          { src: '/photos/restaurants/burrata-closeup.png', alt: 'Burrata closeup' },
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
                src="https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492960/DeLuca_s_o2vynp.mp4"
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
                <h3 className="text-2xl font-bold text-white">Fine Dining Campaign</h3>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[#F2F2F2] mb-6">
                From Empty Tables to <span className="text-[#E5E5E5]">Fully Booked</span>
              </h2>
              <p className="text-lg text-[#F2F2F2]/60 mb-8 leading-relaxed">
                We created a content engine — cinematic reels, ASMR food content, and hyper-local ad campaigns that turned scrollers into diners in under 60 days.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-[#F2F2F2]/[0.03] border border-white/5">
                  <div className="text-3xl font-bold text-[#E5E5E5]">4.2M</div>
                  <div className="text-sm text-[#F2F2F2]/50">Impressions in 90 days</div>
                </div>
                <div className="p-4 rounded-xl bg-[#F2F2F2]/[0.03] border border-white/5">
                  <div className="text-3xl font-bold text-[#E5E5E5]">38%</div>
                  <div className="text-sm text-[#F2F2F2]/50">Reservation increase</div>
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
          WEEKLY CONTENT SYSTEM
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
              Weekly Content <span className="text-[#E5E5E5]">System</span>
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
              A proven process that keeps your restaurant top-of-mind, every week
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {weeklySystem.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative mb-8 last:mb-0"
              >
                {index < weeklySystem.length - 1 && (
                  <div className="absolute left-8 top-16 w-px h-full bg-gradient-to-b from-[#E5E5E5]/50 to-[#E5E5E5]/20" />
                )}
                <div className="flex items-start gap-6 p-6 rounded-xl border border-white/10 bg-[#F2F2F2]/[0.02] backdrop-blur-sm hover:border-[#E5E5E5]/50 transition-colors">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#E5E5E5]/10 border border-[#E5E5E5]/30 shrink-0">
                    <span className="text-[#E5E5E5] font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#F2F2F2] mb-2">{item.day}</h3>
                    <p className="text-[#F2F2F2]/60">{item.tasks}</p>
                  </div>
                  <ChevronRight className="text-[#E5E5E5] opacity-50" />
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
                Everything You Need to
                <br />
                <span className="text-[#E5E5E5]">Stay Booked</span>
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
        title={<>Real Results for <span className="text-[#E5E5E5]">Real Restaurants</span></>}
        subtitle="Numbers from our restaurant marketing campaigns"
        stats={[
          { value: '4.2M', label: 'Impressions', sublabel: 'In 90 days', icon: <TrendingUp size={28} /> },
          { value: '38%', label: 'Reservation Boost', sublabel: 'Average increase', icon: <Target size={28} /> },
          { value: '2,800+', label: 'New Followers', sublabel: 'Per restaurant', icon: <Users size={28} /> },
          { value: '10x', label: 'Content Volume', sublabel: 'AI-powered creation', icon: <Zap size={28} /> },
        ]}
      />

      {/* Testimonials */}
      <Testimonials
        testimonials={[
          {
            name: 'Sofia M.', role: 'Marketing Director', company: 'Restaurant Group',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
            content: 'The content they produce is absolutely stunning. Our reservations increased 38% in the first 60 days. Best investment we\'ve made.',
            rating: 5,
          },
          {
            name: 'Marco R.', role: 'Owner & Chef', company: 'Italian Restaurant',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
            content: 'RAW Formato understands hospitality. They capture the soul of our restaurant in every post, every ad. Our social media went from 200 to 12,000 followers.',
            rating: 5,
          },
          {
            name: 'Amanda C.', role: 'General Manager', company: 'Fusion Restaurant',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
            content: 'We used to struggle filling weeknight tables. Now we\'re fully booked Tuesday through Saturday. Their local ad targeting is incredible.',
            rating: 5,
          },
        ]}
      />

      {/* FAQ */}
      <FAQ
        title={<>Restaurant Marketing <span className="text-[#E5E5E5]">FAQ</span></>}
        items={[
          { question: 'What types of restaurants do you work with?', answer: 'We work with fine dining, casual dining, fast casual, bars, lounges, food trucks, and multi-location restaurant groups. Our strategies are tailored to your concept, audience, and market.' },
          { question: 'Do you come to our restaurant to shoot content?', answer: 'Yes! We do on-location content capture as part of our weekly system. We film your food, ambiance, staff, and behind-the-scenes moments to create authentic, scroll-stopping content.' },
          { question: 'How do you help fill tables during slow periods?', answer: 'We create targeted promotions, seasonal campaigns, and local ad strategies specifically designed to drive traffic during off-peak hours and slow seasons. Our clients consistently see 30-40% increases in weeknight reservations.' },
          { question: 'Can you manage our social media accounts?', answer: 'Absolutely. We handle everything from content creation and posting to community management and engagement. Our weekly content system ensures consistent, high-quality posts that grow your audience.' },
          { question: 'How quickly will we see results?', answer: 'Most restaurants see increased engagement within the first 2 weeks and measurable increases in foot traffic within 30-60 days. We optimize continuously to maximize your ROI.' },
        ]}
      />

      {/* ═══════════════════════════════════════
          FINAL CTA — Video Background
          ═══════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <LazyVideo src="https://res.cloudinary.com/dvad6wd2v/video/upload/v1772492925/Wine_Cellar_kb6fsd.mp4" className="w-full h-full object-cover" />
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
              Ready to <span className="text-[#E5E5E5]">Fill Tables</span>?
            </h2>
            <p className="text-xl text-[#F2F2F2]/60 mb-12">
              Let's build a content and ad system that keeps your restaurant buzzing
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="#contact">
                Get a Restaurant Growth Plan
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
