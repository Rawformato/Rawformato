import { useRef, useEffect, useState, useSyncExternalStore } from 'react';

/* ── Video base URL (Cloudflare R2) ── */
export const VIDEO_BASE = 'https://pub-7340defcf08941b59820df1653e05e12.r2.dev';

/* ═══════════════════════════════════════════════════════════════════════
   1. Observer Pool — shared IntersectionObservers keyed by rootMargin
   ═══════════════════════════════════════════════════════════════════════ */

type ObserverCallback = (entry: IntersectionObserverEntry) => void;

interface PoolEntry {
  observer: IntersectionObserver;
  callbacks: Map<Element, ObserverCallback>;
}

const observerPool = new Map<string, PoolEntry>();

function getPoolKey(rootMargin: string, threshold: number): string {
  return `${rootMargin}|${threshold}`;
}

export function observeElement(
  element: Element,
  callback: ObserverCallback,
  options: { rootMargin?: string; threshold?: number } = {},
): () => void {
  const rootMargin = options.rootMargin ?? '200px';
  const threshold = options.threshold ?? 0.1;
  const key = getPoolKey(rootMargin, threshold);

  let entry = observerPool.get(key);
  if (!entry) {
    const callbacks = new Map<Element, ObserverCallback>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const ioEntry of entries) {
          const cb = callbacks.get(ioEntry.target);
          if (cb) cb(ioEntry);
        }
      },
      { rootMargin, threshold },
    );
    entry = { observer, callbacks };
    observerPool.set(key, entry);
  }

  entry.callbacks.set(element, callback);
  entry.observer.observe(element);

  return () => {
    const poolEntry = observerPool.get(key);
    if (!poolEntry) return;
    poolEntry.callbacks.delete(element);
    poolEntry.observer.unobserve(element);
    if (poolEntry.callbacks.size === 0) {
      poolEntry.observer.disconnect();
      observerPool.delete(key);
    }
  };
}

/* ═══════════════════════════════════════════════════════════════════════
   2. PlaybackManager — limit concurrent video playback (FIFO)
   ═══════════════════════════════════════════════════════════════════════ */

const MAX_CONCURRENT = 3;

class PlaybackManager {
  private active = new Map<HTMLVideoElement, number>(); // video → timestamp

  request(video: HTMLVideoElement): boolean {
    if (this.active.has(video)) return true;

    if (this.active.size >= MAX_CONCURRENT) {
      // Pause the oldest video
      let oldest: HTMLVideoElement | null = null;
      let oldestTime = Infinity;
      for (const [v, t] of this.active) {
        if (t < oldestTime) {
          oldestTime = t;
          oldest = v;
        }
      }
      if (oldest) {
        oldest.pause();
        this.active.delete(oldest);
      }
    }

    this.active.set(video, Date.now());
    return true;
  }

  release(video: HTMLVideoElement): void {
    this.active.delete(video);
  }
}

const playbackManager = new PlaybackManager();

/* ── Retry-safe play helper (uses PlaybackManager) ── */
export function tryPlay(video: HTMLVideoElement) {
  playbackManager.request(video);
  video.play().catch(() => {
    setTimeout(() => video.play().catch(() => {}), 300);
  });
}

/* ── Stop & release from manager ── */
export function stopPlay(video: HTMLVideoElement) {
  video.pause();
  playbackManager.release(video);
}

/* ═══════════════════════════════════════════════════════════════════════
   3. Connection-Aware Loading
   ═══════════════════════════════════════════════════════════════════════ */

export type ConnectionProfile = 'full' | 'reduced' | 'minimal';

interface ConnectionInfo {
  saveData?: boolean;
  effectiveType?: string;
}

export function getConnectionProfile(): ConnectionProfile {
  const conn = (navigator as { connection?: ConnectionInfo }).connection;
  if (!conn) return 'full';
  if (conn.saveData) return 'minimal';
  const etype = conn.effectiveType;
  if (etype === 'slow-2g' || etype === '2g') return 'minimal';
  if (etype === '3g') return 'reduced';
  return 'full';
}

function getLoadMargin(profile: ConnectionProfile): string {
  if (profile === 'minimal') return '0px';
  if (profile === 'reduced') return '100px';
  return '300px';
}

function getUnloadMargin(profile: ConnectionProfile): string {
  if (profile === 'minimal') return '0px';
  if (profile === 'reduced') return '800px';
  return '1500px';
}

/* ═══════════════════════════════════════════════════════════════════════
   4. usePrefersReducedMotion — reactive hook
   ═══════════════════════════════════════════════════════════════════════ */

const REDUCED_MOTION_MQ = '(prefers-reduced-motion: reduce)';

function getReducedMotionSnapshot(): boolean {
  return typeof window !== 'undefined' && window.matchMedia(REDUCED_MOTION_MQ).matches;
}

function subscribeReducedMotion(onChange: () => void): () => void {
  const mql = window.matchMedia(REDUCED_MOTION_MQ);
  mql.addEventListener('change', onChange);
  return () => mql.removeEventListener('change', onChange);
}

export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribeReducedMotion, getReducedMotionSnapshot, () => false);
}

/* ═══════════════════════════════════════════════════════════════════════
   5. useDeferredVideo — deferred src assignment + memory release
   ═══════════════════════════════════════════════════════════════════════ */

interface DeferredVideoOptions {
  src: string;
  loadMargin?: string;
  unloadMargin?: string;
  /** Skip the far/unload observer (e.g. for reel items moved via CSS transform) */
  skipUnload?: boolean;
}

interface DeferredVideoResult {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  loaded: boolean;
  shouldPlay: boolean;
}

export function useDeferredVideo(options: DeferredVideoOptions): DeferredVideoResult {
  const { src, skipUnload = false } = options;
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const profileRef = useRef<ConnectionProfile>(getConnectionProfile());

  const shouldPlay = !reducedMotion && profileRef.current !== 'minimal';

  const loadMargin = options.loadMargin ?? getLoadMargin(profileRef.current);
  const unloadMargin = options.unloadMargin ?? getUnloadMargin(profileRef.current);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    // If minimal connection or reduced motion, don't load video at all
    if (!shouldPlay) return;

    const cleanups: (() => void)[] = [];

    // Near observer: assign src when approaching viewport
    const nearCleanup = observeElement(
      container,
      (entry) => {
        if (entry.isIntersecting && !video.src) {
          video.src = src;
          video.load();
          const onLoaded = () => {
            setLoaded(true);
            video.removeEventListener('loadeddata', onLoaded);
          };
          video.addEventListener('loadeddata', onLoaded);
        }
      },
      { rootMargin: loadMargin, threshold: 0 },
    );
    cleanups.push(nearCleanup);

    // Far observer: remove src when far from viewport to free memory
    if (!skipUnload) {
      let hasBeenVisible = false;
      const farCleanup = observeElement(
        container,
        (entry) => {
          if (entry.isIntersecting) {
            hasBeenVisible = true;
          } else if (hasBeenVisible && video.src) {
            // Element was visible but now is far away — release memory
            stopPlay(video);
            video.removeAttribute('src');
            video.load(); // resets internal buffers
            setLoaded(false);
          }
        },
        { rootMargin: unloadMargin, threshold: 0 },
      );
      cleanups.push(farCleanup);
    }

    return () => {
      for (const cleanup of cleanups) cleanup();
    };
  }, [src, shouldPlay, loadMargin, unloadMargin, skipUnload]);

  return { videoRef, containerRef, loaded, shouldPlay };
}

/* ═══════════════════════════════════════════════════════════════════════
   6. useVideoPlayback — play/pause based on visibility + PlaybackManager
   ═══════════════════════════════════════════════════════════════════════ */

interface PlaybackOptions {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  shouldPlay: boolean;
  rootMargin?: string;
}

export function useVideoPlayback(options: PlaybackOptions): void {
  const { videoRef, containerRef, shouldPlay, rootMargin = '200px' } = options;

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video || !shouldPlay) return;

    return observeElement(
      container,
      (entry) => {
        if (entry.isIntersecting) {
          // Only try to play if src is assigned
          if (video.src) tryPlay(video);
        } else {
          stopPlay(video);
        }
      },
      { rootMargin, threshold: 0.1 },
    );
  }, [shouldPlay, rootMargin, videoRef, containerRef]);
}

/* ═══════════════════════════════════════════════════════════════════════
   7. Legacy hook — kept for backward compatibility during migration
      (can be removed after all consumers are migrated)
   ═══════════════════════════════════════════════════════════════════════ */

export function useLazyVideo(options: { rootMargin?: string } = {}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    return observeElement(
      el,
      (entry) => {
        if (entry.isIntersecting) {
          tryPlay(video);
        } else {
          stopPlay(video);
        }
      },
      { rootMargin: options.rootMargin ?? '200px', threshold: 0.1 },
    );
  }, [options.rootMargin]);

  return { videoRef, containerRef };
}
