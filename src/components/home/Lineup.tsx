import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { PROGRAM_TYPES } from "@/data/programs";

const LINEUP = [
  {
    en: "DAY",
    summary: "부담 없는 1회성 문화 체험 & 언어 교류",
    form: "원데이",
    example: "K-푸드 체험, 핫플 탐방, 원데이 클래스",
    target: "가볍게 시작하려는 사람",
  },
  {
    en: "CLUB",
    summary: "공통 관심사 기반 소규모 정기 모임",
    form: "정기 (동아리형)",
    example: "족구, 배드민턴, 러닝, 독서토론, 보드게임, 맛집·궁·박물관 투어",
    target: "취향이 맞는 또래를 찾는 사람",
  },
  {
    en: "CREW",
    summary: "5주간 체계적 코스의 기수제 커뮤니티",
    form: "5주 기수제",
    example: "맛집 → 도예 → 경복궁 → 뷰티 → 국립중앙박물관",
    target: "깊이 있는 친구 관계를 원하는 사람",
  },
];

export function Lineup({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="section">
      <div className="wrap">
        {withHeading && (
          <SectionHeading
            title="만나는 방식도, 당신답게."
            sub="가볍게 하루. 취향으로 꾸준히. 함께 깊어지는 5주."
            linkLabel="프로그램 비교"
            href="/programs"
          />
        )}
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {LINEUP.map((item, i) => {
            const dark = i === 2;
            const type = PROGRAM_TYPES[i];
            return (
              <article
                key={item.en}
                className={cn(
                  "rounded-[20px] p-[29px] md:rounded-[22px] md:p-[27px] lg:p-9",
                  dark ? "bg-ink text-soft" : "bg-soft",
                )}
              >
                <div className={cn("eyebrow", dark ? "text-mute-dark" : "text-mute")}>
                  MOA {item.en}
                </div>
                <h3 className="mb-3 mt-3 type-feature">{type}</h3>
                <p
                  className={cn("type-body-sm md:min-h-12", dark ? "text-mute-dark" : "text-mute")}
                >
                  {item.summary}
                </p>
                <dl className="my-6 grid grid-cols-[38px_minmax(0,1fr)] gap-3 type-caption">
                  <dt className={dark ? "text-mute-dark" : "text-mute"}>형태</dt>
                  <dd>{item.form}</dd>
                  <dt className={dark ? "text-mute-dark" : "text-mute"}>예시</dt>
                  <dd>{item.example}</dd>
                  <dt className={dark ? "text-mute-dark" : "text-mute"}>추천</dt>
                  <dd>{item.target}</dd>
                </dl>
                <Link
                  href={`/category?type=${encodeURIComponent(type)}`}
                  className={cn("btn w-full", dark ? "btn-light" : "btn-outline")}
                >
                  프로그램 보기
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
