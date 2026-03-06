import { useRef, useEffect } from 'react';

export function ScrollableReel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let offset = 0;
    let isPaused = false;
    let isDragging = false;
    let startX = 0;
    let dragStartOffset = 0;
    let animationId = 0;
    let resumeTimer: ReturnType<typeof setTimeout>;

    const wrapOffset = () => {
      const half = inner.scrollWidth / 2;
      if (half <= 0) return;
      if (offset <= -half) offset += half;
      if (offset > 0) offset -= half;
    };

    const tick = () => {
      if (!isDragging && !isPaused) {
        offset -= 0.5;
      }
      wrapOffset();
      inner.style.transform = `translateX(${offset}px)`;
      animationId = requestAnimationFrame(tick);
    };
    animationId = requestAnimationFrame(tick);

    /* ── Mouse drag (desktop) ── */
    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      isDragging = true;
      isPaused = true;
      startX = e.clientX;
      dragStartOffset = offset;
      outer.style.cursor = 'grabbing';
      clearTimeout(resumeTimer);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      offset = dragStartOffset + (e.clientX - startX);
    };

    const onMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      outer.style.cursor = '';
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { isPaused = false; }, 3000);
    };

    /* ── Touch (mobile) ── */
    const onTouchStart = (e: TouchEvent) => {
      isDragging = true;
      isPaused = true;
      startX = e.touches[0].clientX;
      dragStartOffset = offset;
      clearTimeout(resumeTimer);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      offset = dragStartOffset + (e.touches[0].clientX - startX);
    };

    const onTouchEnd = () => {
      isDragging = false;
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { isPaused = false; }, 3000);
    };

    outer.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    outer.addEventListener('touchstart', onTouchStart, { passive: true });
    outer.addEventListener('touchmove', onTouchMove, { passive: true });
    outer.addEventListener('touchend', onTouchEnd);

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(resumeTimer);
      outer.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      outer.removeEventListener('touchstart', onTouchStart);
      outer.removeEventListener('touchmove', onTouchMove);
      outer.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <div ref={outerRef} className="overflow-hidden cursor-grab" style={{ touchAction: 'pan-y' }}>
      <div ref={innerRef} className={`flex ${className}`} style={{ willChange: 'transform' }}>
        {children}
      </div>
    </div>
  );
}
