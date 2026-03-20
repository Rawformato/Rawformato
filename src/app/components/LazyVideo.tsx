import { useLazyVideo } from '../lib/video';

/* ── LazyVideo — autoplay only when visible ── */
export function LazyVideo({ src, className = '' }: { src: string; className?: string }) {
  const { videoRef, containerRef } = useLazyVideo({ rootMargin: '200px' });

  return (
    <div ref={containerRef} className="w-full h-full">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        src={src}
        className={className}
      />
    </div>
  );
}

/* ── ReelVideo — smaller card for horizontal reel strips ── */
export function ReelVideo({ src }: { src: string }) {
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
        preload="metadata"
        src={src}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
