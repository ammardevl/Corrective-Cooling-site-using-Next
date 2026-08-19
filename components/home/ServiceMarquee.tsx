import { Wind, Wrench, Thermometer, GitBranch } from "lucide-react";

const items = [
  { icon: Thermometer, label: "Residential Climate Control" },
  { icon: Wind, label: "Air Conditioning Maintenance" },
  { icon: Wrench, label: "System Repairs" },
  { icon: GitBranch, label: "Air Duct Services" },
];

export default function ServiceMarquee() {
  const track = [...items, ...items];
  return (
    <div
      className="group relative overflow-hidden border-y border-border-soft bg-surface/40 py-4"
      role="marquee"
      aria-label="Services offered"
    >
      <div className="mask-fade-r flex w-max animate-marquee items-center gap-14 pr-14 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
        {track.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center gap-3 text-paper-dim">
            <item.icon size={16} strokeWidth={1.6} className="text-frost-soft" />
            <span className="font-display text-sm uppercase tracking-[0.15em]">
              {item.label}
            </span>
            <span className="ml-11 h-1 w-1 rounded-full bg-border" />
          </div>
        ))}
      </div>
    </div>
  );
}
