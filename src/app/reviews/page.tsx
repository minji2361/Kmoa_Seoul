import type { Metadata } from "next";
import { CtaSection } from "@/components/home/CtaSection";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { PageHead } from "@/components/ui/PageHead";
import { REVIEWS } from "@/data/reviews";

export const metadata: Metadata = { title: "Reviews" };

export default function ReviewsPage() {
  return (
    <>
      <PageHead title="Reviews" description="문화로 이어진 만남, 참가자들의 이야기를 만나보세요." />
      <section className="section">
        <div className="wrap">
          <div className="mb-6 rounded-[11px] bg-soft px-[15px] py-[13px] type-caption text-mute">
            아래 후기는 기획안에 수록된 예시입니다. 실제 운영 시 참가자 동의를 받은 후기와 사진으로
            교체해주세요.
          </div>
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {REVIEWS.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
