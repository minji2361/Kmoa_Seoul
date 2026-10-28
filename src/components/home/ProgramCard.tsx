"use client";

import { FormLink } from "@/components/ui/FormLink";
import { ModalTrigger } from "@/components/ui/ModalTrigger";
import { Tag } from "@/components/ui/Tag";
import { Tile } from "@/components/ui/Tile";
import { formatProgramDate } from "@/lib/format";
import type { Program } from "@/types/program";

export function ProgramCard({ program: p }: { program: Program }) {
  return (
    <article className="grid grid-cols-[112px_minmax(0,1fr)] overflow-hidden rounded-[15px] bg-white transition hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(0,0,0,0.07)] md:block md:rounded-[19px]">
      <Tile
        label={p.visual}
        tone={p.tone}
        className="h-full min-h-[191px] p-3 text-[15px] tracking-[-0.6px] md:h-[235px] md:p-6 md:text-[26px] lg:h-[215px]"
      />
      <div className="p-4 md:p-[22px]">
        <div className="mb-2 text-[10px] text-mute">
          {formatProgramDate(p.date)} · {p.time}
        </div>
        <h3 className="mb-2 text-sm font-semibold leading-[1.45] tracking-[-0.4px] md:text-base lg:min-h-[49px]">
          <ModalTrigger
            label={p.title}
            title={p.title}
            triggerClassName="relative text-left font-semibold hover:underline after:absolute after:-inset-x-1 after:-inset-y-3 after:content-['']"
          >
            <ProgramDetail program={p} />
          </ModalTrigger>
        </h3>
        <div className="mb-2 text-[10px] leading-[1.7] text-[#96969c]">
          ⌖ {p.place} · {p.langs.join(" / ")}
        </div>
        <div className="flex flex-wrap gap-1">
          <Tag>{p.category}</Tag>
          <Tag>{p.type}</Tag>
        </div>
        <div className="mt-4 flex items-center justify-between gap-1.5 border-t border-[#eeeef0] pt-3 md:mt-5 md:pt-4">
          <small className="text-[10px] text-[#8c8c92]">{p.count}</small>
          <FormLink kind="apply" className="btn btn-sm shrink-0 px-3">
            바로 신청하기
          </FormLink>
        </div>
      </div>
    </article>
  );
}

function ProgramDetail({ program: p }: { program: Program }) {
  return (
    <div className="font-normal">
      <Tile
        label={p.visual}
        tone={p.tone}
        className="mb-5 h-[200px] rounded-[13px] p-6 text-[26px]"
      />
      <div className="flex gap-1">
        <Tag>{p.category}</Tag>
        <Tag>{p.type}</Tag>
      </div>
      <p className="my-5 text-mute">{p.description}</p>
      <div className="rounded-[18px] border border-line p-6">
        <strong>
          {formatProgramDate(p.date)} · {p.time}
        </strong>
        <p className="mt-2 text-sm text-mute">
          ⌖ {p.place}
          <br />
          언어: {p.langs.join(" / ")}
          <br />
          진행: {p.duration}
        </p>
      </div>
      <h3 className="mt-6 text-xl font-semibold">함께할 활동</h3>
      <ul className="mt-2 list-disc pl-5">
        {p.activities.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
      <div className="my-5 rounded-[11px] bg-soft px-4 py-3 text-[11px] text-mute">
        예시 프로그램입니다. 실제 일정·상세 장소·참가비·취소 및 환불 기준은 운영 정보 확정 후 안내가
        필요합니다.
      </div>
      <FormLink kind="apply" className="btn w-full">
        이 프로그램 신청하기
      </FormLink>
    </div>
  );
}
