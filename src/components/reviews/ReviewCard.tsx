"use client";

import { ModalTrigger } from "@/components/ui/ModalTrigger";
import { Tag } from "@/components/ui/Tag";
import type { Review } from "@/types/review";
import Link from "next/link";

export function ReviewCard({ review: r }: { review: Review }) {
  return (
    <article className="rounded-[18px] bg-soft p-[27px] md:rounded-[20px] md:p-6 lg:p-[29px]">
      <Tag>{r.program}</Tag>
      <div
        aria-hidden
        className="mt-5 font-serif text-[43px] leading-[0.6] text-[#b1b1b8] md:text-[50px]"
      >
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
        <ModalTrigger
          label="더 보기"
          title="참가자 인터뷰"
          triggerClassName="ml-auto flex min-h-11 items-center whitespace-nowrap text-[10px] text-[#535359] hover:text-black"
        >
          <Tag>{r.program}</Tag>
          <h3 className="mt-[18px] text-[26px] font-semibold leading-[1.3] tracking-[-0.8px]">
            “{r.quote}”
          </h3>
          <p className="my-5 text-[15px] leading-[1.9] text-ink">{r.body}</p>
          <div className="flex items-center gap-2.5 border-t border-line pt-4 text-xs">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dedee3] text-[9px] text-[#66666d]">
              {r.initials}
            </span>
            {r.person}
          </div>
          <p className="mt-4 text-[11px] text-[#99999f]">
            기획안에 수록된 후기 예시를 바탕으로 구성한 인터뷰입니다.
          </p>
          <Link href="/programs" className="btn mt-6">
            프로그램 둘러보기
          </Link>
        </ModalTrigger>
      </div>
    </article>
  );
}
