export function VideoSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 bg-[#111] overflow-hidden ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)',
          animation: 'video-shimmer 1.8s ease-in-out infinite',
        }}
      />
    </div>
  );
}
