import { useDeferredVideo, useVideoPlayback } from '../lib/video';
import { VideoSkeleton } from './VideoSkeleton';

/* ── LazyVideo — deferred src + autoplay only when visible ── */
export function LazyVideo({ src, className = '' }: { src: string; className?: string }) {
  const { videoRef, containerRef, loaded, shouldPlay } = useDeferredVideo({
    src,
    loadMargin: '300px',
    unloadMargin: '1500px',
  });

  useVideoPlayback({ videoRef, containerRef, shouldPlay, rootMargin: '200px' });

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {!loaded && <VideoSkeleton />}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      />
    </div>
  );
}

/* ── ReelVideo — smaller card for horizontal reel strips ── */
export function ReelVideo({ src }: { src: string }) {
  const { videoRef, containerRef, loaded, shouldPlay } = useDeferredVideo({
    src,
    loadMargin: '100px',
    skipUnload: true, // reel items move via CSS transform, far-observer can't track them
  });

  useVideoPlayback({ videoRef, containerRef, shouldPlay, rootMargin: '100px' });

  return (
    <div
      ref={containerRef}
      className="relative flex-shrink-0 w-48 md:w-64 lg:w-72 aspect-[9/16] rounded-2xl overflow-hidden border border-white/[0.06] bg-[#111]"
    >
      {!loaded && <VideoSkeleton />}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
