import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tile } from "@/components/ui/Tile";
import { INSTAGRAM_URL } from "@/config/site";
import type { TileTone } from "@/types/program";

const POSTS: Array<{ label: string; tone: TileTone }> = [
  { label: "BAKING", tone: "dark" },
  { label: "K-DRAMA", tone: "blue" },
  { label: "DOYE", tone: "gold" },
  { label: "SEOUL", tone: "teal" },
  { label: "FLOWER", tone: "pink" },
  { label: "K-BEAUTY", tone: "purple" },
];

// 실시간 피드 연동 전까지 사용하는 정적 갤러리.
export function InstagramSection() {
  return (
    <section className="section bg-soft">
      <div className="wrap">
        <SectionHeading title="Instagram" sub="@k_moa_official · 갤러리 예시" />
        <div className="grid grid-cols-3 gap-2.5 lg:grid-cols-6 lg:gap-6">
          {POSTS.map((p) => (
            <a
              key={p.label}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram에서 보기: ${p.label}`}
              className="block overflow-hidden rounded-xl"
            >
              <Tile
                label={p.label}
                tone={p.tone}
                className="min-h-[100px] p-3 type-tile-sm md:min-h-[145px] md:p-4"
              />
            </a>
          ))}
        </div>
        <p className="mt-4 type-caption text-[#99999f]">
          실시간 피드 연동은 운영 계정 연결 후 사용할 수 있습니다.
        </p>
      </div>
    </section>
  );
}
