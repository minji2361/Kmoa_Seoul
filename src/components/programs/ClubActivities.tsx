import { SectionHeading } from "@/components/ui/SectionHeading";

const ACTIVITIES = [
  { title: "스포츠", text: "족구 · 배드민턴 · 러닝" },
  { title: "교양 · 취미", text: "독서토론 · 보드게임" },
  { title: "탐방", text: "맛집투어 · 궁·박물관 투어" },
];

export function ClubActivities() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading title="모아 클럽 · 활동 종류" sub="관심사에 맞는 소규모 정기 모임" />
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {ACTIVITIES.map((a) => (
            <article key={a.title} className="rounded-[22px] bg-soft p-[25px] md:p-8">
              <h3 className="type-subheading">{a.title}</h3>
              <p className="mt-3 type-body text-mute">{a.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
