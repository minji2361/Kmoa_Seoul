import type { Metadata } from "next";
import { CtaSection } from "@/components/home/CtaSection";
import { FormLink } from "@/components/ui/FormLink";
import { PageHead } from "@/components/ui/PageHead";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { APPLY_FORM_CONFIGURED, INSTAGRAM_URL, PARTNER_FORM_CONFIGURED } from "@/config/site";
import { FAQS } from "@/data/faq";

export const metadata: Metadata = { title: "Contact / FAQ" };

// 외부 폼 주소가 아직 없으면 버튼 대신 준비 중 안내를 보여준다.
function PendingNotice() {
  return (
    <p className="rounded-[11px] bg-soft px-4 py-3 text-xs text-mute">
      신청 폼을 준비 중입니다. 그동안은{" "}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-ink underline"
      >
        Instagram @k_moa_official
      </a>
      로 문의해 주세요.
    </p>
  );
}

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
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 py-[23px] text-sm font-medium tracking-[-0.5px] md:text-base [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden className="text-mute group-open:hidden">
                  +
                </span>
                <span aria-hidden className="hidden text-mute group-open:inline">
                  −
                </span>
              </summary>
              <p className="pb-7 pr-6 text-xs text-mute md:text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="apply" className="section bg-soft">
        <div className="wrap">
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <article className="rounded-[22px] bg-white p-[25px] md:p-8">
              <div className="eyebrow">JOIN K-MOA</div>
              <h2 className="mt-4 text-[29px] font-semibold tracking-[-1.25px]">
                다음 모임에서 만나요
              </h2>
              <p className="mb-6 mt-4 text-mute">원하는 프로그램을 선택하고 신청서를 작성하세요.</p>
              {APPLY_FORM_CONFIGURED ? (
                <FormLink kind="apply" className="btn">
                  프로그램 신청하기
                </FormLink>
              ) : (
                <PendingNotice />
              )}
            </article>
            <article className="rounded-[22px] bg-white p-[25px] md:p-8">
              <div className="eyebrow">PARTNERSHIP</div>
              <h2 className="mt-4 text-[29px] font-semibold tracking-[-1.25px]">
                함께 문화를 만들어요
              </h2>
              <p className="mb-6 mt-4 text-mute">
                공간·콘텐츠·클래스로 K-MOA와 협업하고 싶으신가요?
              </p>
              {PARTNER_FORM_CONFIGURED ? (
                <FormLink kind="partner" className="btn btn-outline">
                  플랫폼 입점 신청
                </FormLink>
              ) : (
                <PendingNotice />
              )}
            </article>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
