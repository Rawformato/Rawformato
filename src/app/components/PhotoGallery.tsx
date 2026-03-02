import { motion } from 'motion/react';

interface Photo {
  src: string;
  alt: string;
  span?: 'tall' | 'wide' | 'normal';
}

interface PhotoGalleryProps {
  photos: Photo[];
  title?: React.ReactNode;
  subtitle?: string;
  columns?: 2 | 3 | 4;
}

export function PhotoGallery({ photos, title, subtitle, columns = 3 }: PhotoGalleryProps) {
  const colClass =
    columns === 2
      ? 'columns-2 md:columns-2'
      : columns === 4
        ? 'columns-2 md:columns-3 lg:columns-4'
        : 'columns-2 md:columns-3';

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
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-[#F2F2F2]/40 max-w-xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <div className={`${colClass} gap-3 md:gap-4`}>
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4 }}
              className="mb-3 md:mb-4 break-inside-avoid"
            >
              <div className="group relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/25 transition-all duration-500 bg-[#111]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
