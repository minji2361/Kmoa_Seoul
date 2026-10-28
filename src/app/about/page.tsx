import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/home/CtaSection";
import { FormLink } from "@/components/ui/FormLink";
import { PageHead } from "@/components/ui/PageHead";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { FAQS } from "@/data/faq";

export const metadata: Metadata = { title: "About" };

const MISSIONS = [
  {
    title: "신뢰 기반의 검증된 교류",
    text: "불투명한 거리 섭외가 아닌, 정식 등록된 개인사업자 기반의 안전하고 공식적인 플랫폼을 지향합니다.",
  },
  {
    title: "실생활 중심의 K-콘텐츠",
    text: "K-드라마, K-Food, 일상 문화 등 가치 있는 콘텐츠로 자연스러운 대화 주제를 만듭니다.",
  },
  {
    title: "지속 가능한 관계 형성",
    text: "모아 데이부터 모아 클럽, 5주 모아 크루까지 유연하고 지속적인 교류 구조를 설계합니다.",
  },
];

const SAFETY_TITLES = [
  "상호 존중 및 수평적 문화",
  "부적절한 목적 참여 엄격 차단",
  "신뢰할 수 있는 전담 운영진",
];

export default function AboutPage() {
  return (
    <>
      <PageHead
        title="About K-MOA"
        description="Culture meets Language — 문화와 언어가 만나, 우리의 일상이 더 넓어집니다."
      />

      <section className="section">
        <div className="wrap">
          <div className="eyebrow mb-5">BRAND STORY</div>
          <div className="max-w-[820px] type-story">
            <h2 className="type-heading">왜 K-MOA일까요?</h2>
            <p className="my-6 text-[#8d8d93]">
              길거리에서 우연히 만난 낯선 모임, 목적이 불분명한 1회성 매칭, 어색하고 경계심만 남았던
              기존의 교류 방식에 지치지 않으셨나요?
            </p>
            <p className="my-6 text-[#8d8d93]">
              K-MOA는 “어떻게 하면 내·외국인이 서로 경계심을 허물고, 안전하며 깊이 있는 관계를 맺을
              수 있을까?”라는 질문에서 출발했습니다.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 md:gap-6">
            <article className="rounded-[22px] bg-soft p-[25px] md:p-8">
              <Tag>FOR GLOBAL FRIENDS</Tag>
              <h3 className="my-4 type-subheading">진짜 한국의 일상 속으로</h3>
              <p className="text-mute">
                서투른 한국어 교육이나 일회성 관광을 넘어, 진짜 한국의 일상 문화와 언어를 깊이 있게
                체험하고 싶어요.
              </p>
            </article>
            <article className="rounded-[22px] bg-soft p-[25px] md:p-8">
              <Tag>FOR KOREAN FRIENDS</Tag>
              <h3 className="my-4 type-subheading">문화로 시작하는 자연스러운 회화</h3>
              <p className="text-mute">
                단순한 주입식 학원이 아닌, 문화 콘텐츠를 매개로 자연스럽게 소통하는 실전 회화를
                원해요.
              </p>
            </article>
          </div>
          <p className="mt-6 type-body text-mute">
            K-MOA는 두 가지 니즈를 하나로 묶었습니다. 서로 문화와 언어를 나누며 함께 성장하는
            Win-Win 커뮤니티를 만들어갑니다.
          </p>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="wrap">
          <div className="eyebrow mb-5">OUR MISSION</div>
          <SectionHeading
            title={
              <>
                문화로 경계를 허물고,
                <br />
                언어로 깊어지는 2030 글로벌 커뮤니티
              </>
            }
            sub="K-MOA가 만들어가는 세 가지 약속"
          />
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {MISSIONS.map((m, i) => (
              <article key={m.title} className="rounded-[20px] bg-white p-[25px] md:p-8">
                <strong className="mb-6 block type-numeral text-[#b6b6bd]">0{i + 1}</strong>
                <h3 className="type-subheading font-medium">{m.title}</h3>
                <p className="mt-3 type-body-sm text-mute">{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-dusk text-soft">
        <div className="wrap">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            <div>
              <div className="eyebrow mb-5 text-[#83838b]">TRUST & SAFETY</div>
              <h2 className="type-heading">
                안심하고 활동에만
                <br />
                집중할 수 있도록
              </h2>
              <p className="mt-[18px] text-[#929299]">
                투명하고 체계적인 운영 가이드라인을 지향합니다.
              </p>
            </div>
            <div>
              {FAQS.slice(1, 4).map((f, i) => (
                <article key={f.q} className="border-b border-[#313136] py-6">
                  <h3 className="mb-1.5 type-subheading font-medium">{SAFETY_TITLES[i]}</h3>
                  <p className="type-body-sm text-[#929299]">{f.a}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="wrap flex flex-col gap-3 md:flex-row md:justify-center">
          <Link href="/programs" className="btn btn-outline">
            프로그램 보러가기
          </Link>
          <FormLink kind="apply" className="btn">
            신청하기
          </FormLink>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
