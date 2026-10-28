"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import type { Program, ProgramCategory } from "@/types/program";
import { ProgramCard } from "./ProgramCard";

interface ProgramsPreviewProps {
  programs: Program[];
  categories: ProgramCategory[];
}

export function ProgramsPreview({ programs, categories }: ProgramsPreviewProps) {
  const [category, setCategory] = useState<ProgramCategory | "">("");
  const visible = programs.filter((p) => !category || p.category === category).slice(0, 4);

  return (
    <section className="section bg-soft">
      <div className="wrap">
        <SectionHeading
          title="당신의 다음 경험."
          sub="취향이 닿는 곳에서 새로운 만남이 시작됩니다."
          linkLabel="전체 보기"
          href="/programs"
        />
        <div
          className="-mx-6 mb-5 flex gap-2 overflow-x-auto px-6 pb-3 md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:pb-0"
          role="group"
          aria-label="문화 콘텐츠 필터"
        >
          {(["", ...categories] as const).map((c) => (
            <button
              key={c || "all"}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={cn(
                "min-h-11 shrink-0 whitespace-nowrap rounded-full border px-4 text-[10px] transition hover:border-[#929298] md:min-h-9 md:text-[11px]",
                category === c
                  ? "border-ink bg-ink text-white hover:border-ink"
                  : "border-[#dcdce1] bg-transparent",
              )}
            >
              {c || "전체"}
            </button>
          ))}
        </div>

        {visible.length ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {visible.map((p) => (
              <ProgramCard key={p.id} program={p} />
            ))}
          </div>
        ) : (
          <div className="rounded-[15px] border border-[#dfdfe3] bg-white p-12 text-center">
            <h3 className="text-xl font-medium">조건에 맞는 모임이 없어요</h3>
            <p className="mt-2 text-[13px] text-mute">다른 카테고리를 선택해 보세요.</p>
          </div>
        )}
      </div>
    </section>
  );
}
