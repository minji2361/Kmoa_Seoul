import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = ["맛집", "도예", "경복궁", "뷰티", "국립중앙박물관"];

export function CrewRoadmap() {
  return (
    <section className="section bg-soft">
      <div className="wrap">
        <SectionHeading
          title="모아 크루 · 5주 로드맵"
          sub="자체 제작 콘텐츠와 외부 문화 콘텐츠를 교차 운영하는 기수제 커리큘럼"
        />
        <ol className="mt-8 grid gap-3 md:grid-cols-5 md:gap-4">
          {STEPS.map((step, i) => (
            <li
              key={step}
              className="relative flex items-center gap-[18px] md:block md:text-center"
            >
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[17px] top-1/2 h-[calc(100%+12px)] w-0.5 bg-[#c7c7ce] md:left-1/2 md:top-5 md:h-0.5 md:w-[calc(100%+16px)]"
                />
              )}
              <b className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink type-body-sm font-medium text-white outline outline-4 outline-soft md:mx-auto md:mb-5 md:h-[39px] md:w-[39px]">
                {i + 1}
              </b>
              <div className="flex-1 rounded-[15px] bg-white px-[22px] py-[18px] text-left md:p-6 md:text-center">
                <small className="type-micro text-mute">{i + 1}주차</small>
                <br />
                <strong className="type-body-sm font-semibold">{step}</strong>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-6 rounded-[22px] bg-white p-[25px] type-body-sm text-center md:p-8">
          수료 후에도 이어지는 후속 연결 · 소통 체계를 함께 안내합니다.
        </div>
      </div>
    </section>
  );
}
