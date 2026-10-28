import { cn } from "@/lib/cn";
import type { TileTone } from "@/types/program";

const TONES: Record<TileTone, string> = {
  dark: "bg-[#1c1c20] text-[#e9e9ed]",
  blue: "bg-[#dcdce2] text-[#303035]",
  teal: "bg-[#343439] text-[#efeff1]",
  purple: "bg-[#b0b0ba] text-white",
  gold: "bg-[#d3cfc7] text-[#363430]",
  pink: "bg-[#bdbbb9] text-[#343332]",
};

interface TileProps {
  label: string;
  tone?: TileTone;
  className?: string;
}

// 이미지가 준비되기 전까지 쓰는 타이포 타일. 이미지가 생기면 이 컴포넌트만 교체한다.
export function Tile({ label, tone = "dark", className }: TileProps) {
  return (
    <div className={cn("relative flex items-end overflow-hidden", TONES[tone], className)}>
      <span
        aria-hidden
        className="pointer-events-none absolute -right-[100px] -top-[100px] h-60 w-60 rounded-full border border-current opacity-15"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-[90px] -top-[81px] h-[220px] w-[220px] rounded-full border border-current opacity-[0.09]"
      />
      {/* 좁은 타일에서 "K-DRAMA" 가 하이픈에서 줄바꿈되지 않도록 non-breaking hyphen 사용 */}
      <span className="relative z-10">{label.replace(/-/g, "\u2011")}</span>
    </div>
  );
}
