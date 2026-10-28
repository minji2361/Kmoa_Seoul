import type { Metadata } from "next";
import { CtaSection } from "@/components/home/CtaSection";
import { FormLink } from "@/components/ui/FormLink";
import { PageHead } from "@/components/ui/PageHead";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQS } from "@/data/faq";

export const metadata: Metadata = { title: "Contact / FAQ" };

export default function ContactPage() {
  return (
    <>
      <PageHead
        title="Contact / FAQ"
        description="궁금한 점이 있나요? 함께하기 전에 확인해 주세요."
      />

      <section className="section">
        <div className="wrap max-w-[920px]">
          <SectionHeading title="자주 묻는 질문" sub="편안하고 안전한 만남을 위한 안내" />
          {FAQS.map((f) => (
            <details key={f.q} className="group border-b border-[#dddde2]">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 py-[23px] type-card-title font-medium [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden className="text-mute group-open:hidden">
                  +
                </span>
                <span aria-hidden className="hidden text-mute group-open:inline">
                  −
                </span>
              </summary>
              <p className="pb-7 pr-6 type-body-sm text-mute">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="apply" className="section bg-soft">
        <div className="wrap">
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <article className="rounded-[22px] bg-white p-[25px] md:p-8">
              <div className="eyebrow">JOIN K-MOA</div>
              <h2 className="mt-4 type-heading-sm">다음 모임에서 만나요</h2>
              <p className="mb-6 mt-4 text-mute">원하는 프로그램을 선택하고 신청서를 작성하세요.</p>
              <FormLink kind="apply" className="btn">
                프로그램 신청하기
              </FormLink>
            </article>
            <article className="rounded-[22px] bg-white p-[25px] md:p-8">
              <div className="eyebrow">PARTNERSHIP</div>
              <h2 className="mt-4 type-heading-sm">함께 문화를 만들어요</h2>
              <p className="mb-6 mt-4 text-mute">
                공간·콘텐츠·클래스로 K-MOA와 협업하고 싶으신가요?
              </p>
              <FormLink kind="partner" className="btn btn-outline">
                플랫폼 입점 신청
              </FormLink>
            </article>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
