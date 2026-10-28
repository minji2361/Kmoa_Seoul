"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import type { Review } from "@/types/review";

const VISIBLE = 3;

export function ReviewsSlider({ reviews }: { reviews: Review[] }) {
  const [start, setStart] = useState(0);
  const shown = Array.from({ length: Math.min(VISIBLE, reviews.length) }, (_, i) => {
    return reviews[(start + i) % reviews.length];
  });

  function move(step: number) {
    setStart((s) => (s + step + reviews.length) % reviews.length);
  }

  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading
          title="만남이 남긴 이야기."
          sub="기획안에 수록된 참가자 후기 예시"
          linkLabel="전체 후기"
          href="/reviews"
        />
        <div className="mb-4 flex justify-end gap-2">
          <button
            type="button"
            aria-label="이전 후기"
            onClick={() => move(-1)}
            className="h-11 w-11 rounded-full border border-[#dcdce1] type-glyph-sm hover:border-[#929298]"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="다음 후기"
            onClick={() => move(1)}
            className="h-11 w-11 rounded-full border border-[#dcdce1] type-glyph-sm hover:border-[#929298]"
          >
            ›
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {shown.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
