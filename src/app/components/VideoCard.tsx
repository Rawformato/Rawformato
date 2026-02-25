import { useRef } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface VideoCardProps {
  src: string;
  title: string;
  category: string;
  className?: string;
  aspectClass?: string;
}

export function VideoCard({
  src,
  title,
  category,
  className = '',
  aspectClass = 'aspect-[9/16]',
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`group relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/25 transition-all duration-500 cursor-pointer bg-[#111] will-change-transform ${className}`}
      onMouseEnter={() => { videoRef.current?.play().catch(() => {}); }}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <div className={`relative ${aspectClass}`}>
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-[#0B0B0E]/10 to-transparent opacity-80" />

        {/* Play icon — appears on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-white/20"
            />
            <div className="relative w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
              <Play size={18} className="text-white ml-0.5" fill="white" />
            </div>
          </div>
        </div>

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
