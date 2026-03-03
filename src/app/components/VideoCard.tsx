import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface VideoCardProps {
  src: string;
  title: string;
  category: string;
  className?: string;
  aspectClass?: string;
}

function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);
  return isTouch;
}

/** Insert Cloudinary width transform into URL for mobile bandwidth savings */
function cloudinarySrc(url: string, width: number): string {
  const match = url.match(/^(https:\/\/res\.cloudinary\.com\/[^/]+\/video\/upload\/)(v\d+\/.+)$/);
  if (!match) return url;
  return `${match[1]}q_auto,w_${width}/${match[2]}`;
}

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

export function VideoCard({
  src,
  title,
  category,
  className = '',
  aspectClass = 'aspect-[9/16]',
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouchDevice();

  // On touch devices, use IntersectionObserver to auto-play when visible
  useEffect(() => {
    if (!isTouch) return;
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
      { rootMargin: '50px', threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isTouch]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`group relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/25 transition-all duration-500 cursor-pointer bg-[#111] ${className}`}
      onMouseEnter={() => {
        if (!isTouch) videoRef.current?.play().catch(() => {});
      }}
      onMouseLeave={() => {
        if (!isTouch && videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <div className={`relative ${aspectClass}`}>
        <video
          ref={videoRef}
          src={isMobile ? cloudinarySrc(src, 480) : cloudinarySrc(src, 720)}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-[#0B0B0E]/10 to-transparent opacity-80" />

        {/* Content label */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          <div className="text-white/40 text-[11px] font-semibold uppercase tracking-[0.15em] mb-1">
            {category}
          </div>
          <h3 className="text-white font-bold text-base lg:text-lg leading-tight">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}
