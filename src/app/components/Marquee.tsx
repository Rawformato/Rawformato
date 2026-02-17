import { motion } from 'motion/react';

interface MarqueeProps {
  items: string[];
}

export function Marquee({ items }: MarqueeProps) {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-8 border-y border-white/10">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B0B0E] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B0B0E] to-transparent z-10" />
      
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [0, -50 + '%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-8"
          >
            <span className="text-[#F2F2F2]/60 text-lg font-medium">
              {item}
            </span>
            <span className="text-[#8B5CF6]">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
