import { FormLink } from "@/components/ui/FormLink";

export function CtaSection() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="rounded-[21px] bg-night px-[29px] py-9 text-soft md:flex md:items-center md:justify-between md:gap-8 md:rounded-[25px] md:p-[50px] lg:p-[68px]">
          <div>
            <h2 className="text-balance type-heading">
              당신의 세계가
              <br />
              조금 더 넓어지는 순간.
            </h2>
            <p className="mt-4 type-body-sm text-[#86868e] md:mt-5">
              다음 모임에서 K-MOA와 함께해요.
            </p>
          </div>
          <FormLink kind="apply" className="btn btn-light mt-7 md:mt-0 md:shrink-0">
            바로 신청하기 →
          </FormLink>
        </div>
      </div>
    </section>
  );
}
