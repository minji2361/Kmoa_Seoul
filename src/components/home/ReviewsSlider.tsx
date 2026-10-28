"use client";

import Link from "next/link";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
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
            className="h-11 w-11 rounded-full border border-[#dcdce1] text-lg hover:border-[#929298]"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="다음 후기"
            onClick={() => move(1)}
            className="h-11 w-11 rounded-full border border-[#dcdce1] text-lg hover:border-[#929298]"
          >
            ›
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {shown.map((r) => (
            <article
              key={r.id}
              className="rounded-[18px] bg-soft p-[27px] md:rounded-[20px] md:p-6 lg:p-[29px]"
            >
              <Tag>{r.program}</Tag>
              <div className="mt-5 font-serif text-[43px] leading-[0.6] text-[#b1b1b8] md:text-[50px]">
                “
              </div>
              <blockquote className="mx-0 mb-5 mt-3 text-[22px] font-medium leading-[1.5] tracking-[-0.8px] md:min-h-[150px] md:text-[19px] lg:min-h-32 lg:text-[21px]">
                {r.quote}
              </blockquote>
              <p className="mb-5 text-xs leading-[1.8] text-[#929298] md:min-h-[100px] lg:min-h-16">
                {r.summary}
              </p>
              <div className="flex items-center gap-2.5 border-t border-[#e0e0e5] pt-4 text-[10px]">
                <span className="flex h-[29px] w-[29px] shrink-0 items-center justify-center rounded-full bg-[#dedee3] text-[8px] text-[#66666d]">
                  {r.initials}
                </span>
                <span>
                  {r.person}
                  <br />
                  <span className="text-mute">기획안 후기 예시</span>
                </span>
                <Link
                  href="/reviews"
                  className="ml-auto flex min-h-11 items-center whitespace-nowrap text-[10px] text-[#535359] hover:text-black"
                >
                  더 보기
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
