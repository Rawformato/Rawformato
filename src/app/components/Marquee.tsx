interface MarqueeProps {
  items: string[];
}

export function Marquee({ items }: MarqueeProps) {
  return (
    <div className="relative overflow-hidden py-8 border-y border-white/10">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B0B0E] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B0B0E] to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-8 mx-4">
            <span className="text-[#F2F2F2]/60 text-lg font-medium">{item}</span>
            <span className="text-[#E5E5E5]">&bull;</span>
          </div>
        ))}
      </div>
    </div>
  );
}
