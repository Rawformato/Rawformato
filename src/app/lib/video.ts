import { useRef, useEffect } from 'react';

/* ── Video base URL (Cloudflare R2) ── */
export const VIDEO_BASE = 'https://pub-7340defcf08941b59820df1653e05e12.r2.dev';

/* ── Retry-safe play helper ── */
export function tryPlay(video: HTMLVideoElement) {
  video.play().catch(() => {
    setTimeout(() => video.play().catch(() => {}), 300);
  });
}

/* ── Play video only while visible in viewport ── */
export function useLazyVideo(options: { rootMargin?: string } = {}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tryPlay(video);
        } else {
          video.pause();
        }
      },
      { rootMargin: options.rootMargin ?? '200px', threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options.rootMargin]);

  return { videoRef, containerRef };
}
