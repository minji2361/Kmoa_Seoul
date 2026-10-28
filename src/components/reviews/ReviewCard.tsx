"use client";

import { ModalTrigger } from "@/components/ui/ModalTrigger";
import { Tag } from "@/components/ui/Tag";
import type { Review } from "@/types/review";
import Link from "next/link";

export function ReviewCard({ review: r }: { review: Review }) {
  return (
    <article className="rounded-[18px] bg-soft p-[27px] md:row-span-4 md:grid md:grid-rows-subgrid md:gap-y-0 md:rounded-[20px] md:p-6 lg:p-[29px]">
      <div>
        <Tag>{r.program}</Tag>
        <div aria-hidden className="mt-5 type-quote-mark font-serif text-faint">
          “
        </div>
      </div>
      <blockquote className="mx-0 mb-5 mt-3 type-quote">{r.quote}</blockquote>
      <p className="mb-5 type-body-sm text-mute">{r.summary}</p>
      <div className="flex items-center gap-2.5 border-t border-[#e0e0e5] pt-4 type-caption">
        <span className="flex h-[29px] w-[29px] shrink-0 items-center justify-center rounded-full bg-[#dedee3] type-micro text-mute-strong">
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
          triggerClassName="ml-auto flex min-h-11 min-w-11 items-center justify-end whitespace-nowrap type-caption text-[#535359] hover:text-black"
        >
          <Tag>{r.program}</Tag>
          <h3 className="mt-[18px] type-heading-md">“{r.quote}”</h3>
          <p className="my-5 type-body text-ink">{r.body}</p>
          <div className="flex items-center gap-2.5 border-t border-line pt-4 type-body-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dedee3] type-micro text-mute-strong">
              {r.initials}
            </span>
            {r.person}
          </div>
          <p className="mt-4 type-caption text-mute">
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
