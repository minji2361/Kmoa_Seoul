import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tile } from "@/components/ui/Tile";
import type { TileTone } from "@/types/program";

const PAST: Array<{ label: string; tone: TileTone }> = [
  { label: "도예", tone: "gold" },
  { label: "오일파스텔", tone: "pink" },
  { label: "향수", tone: "blue" },
  { label: "플라워", tone: "teal" },
  { label: "농악대", tone: "blue" },
  { label: "K-뷰티 메이킹", tone: "purple" },
];

const STATS = [
  { value: "500+", label: "누적 참가자 수 · 예시" },
  { value: "98%", label: "참가자 만족도 · 예시" },
];

export function PastHighlights() {
  return (
    <section className="section bg-soft">
      <div className="wrap">
        <SectionHeading
          title="지난 프로그램 Highlights"
          sub="K-MOA가 함께한 순간들 · 예시 갤러리"
        />
        <div className="mb-5 grid gap-4 md:grid-cols-2 md:gap-6">
          {STATS.map((s) => (
            <div
              key={s.value}
              className="flex items-center gap-[18px] border-t border-[#d9d9df] pb-5 pt-4 md:pb-7 md:pt-5"
            >
              <strong className="text-[43px] font-medium tracking-[-2px] md:text-[58px] md:tracking-[-3px]">
                {s.value}
              </strong>
              <span className="text-[10px] text-mute md:text-[11px]">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2.5 lg:grid-cols-6 lg:gap-6">
          {PAST.map((p) => (
            <div key={p.label} className="relative opacity-70">
              <span className="absolute left-2 top-2 z-10 rounded bg-white/70 px-1.5 py-0.5 text-[8px] text-[#68686e] backdrop-blur-sm">
                종료 · 예시
              </span>
              <Tile
                label={p.label}
                tone={p.tone}
                className="min-h-[100px] rounded-xl p-3 text-xs md:min-h-[135px] md:p-4 md:text-[17px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
