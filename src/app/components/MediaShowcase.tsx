import { motion } from 'motion/react';
import { Play, Image as ImageIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  title?: string;
  category?: string;
  size?: 'small' | 'medium' | 'large';
}

interface MediaShowcaseProps {
  items: MediaItem[];
  title?: string;
  subtitle?: string;
}

export function MediaShowcase({ items, title, subtitle }: MediaShowcaseProps) {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-[#F2F2F2]/60 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid"
            >
              <div className="group relative rounded-2xl overflow-hidden border border-[#E5E5E5]/20 hover:border-[#E5E5E5]/50 transition-all cursor-pointer">
                {/* Image */}
                <div className={`relative ${
                  item.size === 'large' ? 'aspect-[4/5]' :
                  item.size === 'small' ? 'aspect-square' :
                  'aspect-[3/4]'
                }`}>
                  <ImageWithFallback
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E]/90 via-[#0B0B0E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Play button for videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full bg-[#E5E5E5]/90 backdrop-blur-sm flex items-center justify-center"
                      >
                        <Play size={24} className="text-white ml-1" fill="white" />
                      </motion.div>
                    </div>
                  )}

                  {/* Type badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="px-3 py-1 rounded-full bg-[#0B0B0E]/80 backdrop-blur-sm border border-white/10 flex items-center gap-2">
                      {item.type === 'video' ? (
                        <>
                          <Play size={12} className="text-[#E5E5E5]" />
                          <span className="text-xs text-[#F2F2F2]">Video</span>
                        </>
                      ) : (
                        <>
                          <ImageIcon size={12} className="text-[#E5E5E5]" />
                          <span className="text-xs text-[#F2F2F2]">Photo</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Content overlay */}
                  {(item.title || item.category) && (
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                      {item.category && (
                        <div className="text-[#E5E5E5] text-sm font-medium mb-1">
                          {item.category}
                        </div>
                      )}
                      {item.title && (
                        <h3 className="text-white font-semibold text-lg">
                          {item.title}
                        </h3>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
