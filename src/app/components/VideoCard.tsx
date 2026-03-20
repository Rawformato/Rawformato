import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useDeferredVideo, tryPlay, stopPlay, observeElement, usePrefersReducedMotion, getConnectionProfile } from '../lib/video';
import { VideoSkeleton } from './VideoSkeleton';

interface VideoCardProps {
  src: string;
  title: string;
  category: string;
  className?: string;
  aspectClass?: string;
  priority?: boolean;
}

function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);
  return isTouch;
}

export function VideoCard({
  src,
  title,
  category,
  className = '',
  aspectClass = 'aspect-[9/16]',
}: VideoCardProps) {
  const isTouch = useIsTouchDevice();
  const reducedMotion = usePrefersReducedMotion();
  const profile = getConnectionProfile();
  const canPlay = !reducedMotion && profile !== 'minimal';

  const { videoRef, containerRef, loaded, shouldPlay } = useDeferredVideo({
    src,
    loadMargin: '200px',
    unloadMargin: '1500px',
  });

  // On touch devices, use observer pool to auto-play when visible
  useEffect(() => {
    if (!isTouch || !canPlay) return;
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    return observeElement(
      el,
      (entry) => {
        if (entry.isIntersecting && video.src) {
          tryPlay(video);
        } else {
          stopPlay(video);
        }
      },
      { rootMargin: '50px', threshold: 0.3 },
    );
  }, [isTouch, canPlay, containerRef, videoRef]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`group relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/25 transition-all duration-500 cursor-pointer bg-[#111] ${className}`}
      onMouseEnter={() => {
        if (!isTouch && canPlay) {
          const video = videoRef.current;
          if (video?.src) tryPlay(video);
        }
      }}
      onMouseLeave={() => {
        if (!isTouch && videoRef.current) {
          stopPlay(videoRef.current);
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <div className={`relative ${aspectClass}`}>
        {!loaded && <VideoSkeleton />}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          className={`w-full h-full object-cover group-hover:scale-[1.05] transition-all duration-700 ease-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
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
