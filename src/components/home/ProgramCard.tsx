import { FormLink } from "@/components/ui/FormLink";
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
          {p.title}
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
