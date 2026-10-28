import { SectionHeading } from "@/components/ui/SectionHeading";

const VALUES = [
  {
    icon: "◇",
    title: "Trust & Safety",
    text: "정식 사업자 등록 및 투명한 운영 구조로 안심하고 참여하는 모임",
  },
  {
    icon: "♡",
    title: "Real Culture",
    text: "단순 관광이 아닌 드라마, K-Food, 일상 문화를 깊이 있게 체험",
  },
  {
    icon: "☏",
    title: "Natural Exchange",
    text: "주입식 언어 교육이 아닌 문화 콘텐츠를 매개로 한 자연스러운 회화 교류",
  },
];

export function ValueSection() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading
          title="좋은 만남의 기준."
          sub="안심할 수 있는 환경. 진짜 문화. 자연스러운 대화."
        />
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {VALUES.map((v) => (
            <article
              key={v.title}
              className="grid grid-cols-[30px_minmax(0,1fr)] gap-[18px] border-t border-[#d4d4d8] py-6 md:block md:px-[26px] md:py-8"
            >
              <div aria-hidden className="type-glyph-lg text-[#66666e] md:mb-[26px]">
                {v.icon}
              </div>
              <div>
                <h3 className="type-subheading">{v.title}</h3>
                <p className="mt-2 type-body-sm text-mute md:max-w-[300px]">{v.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
