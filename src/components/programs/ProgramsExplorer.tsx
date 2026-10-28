"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { ProgramCard } from "@/components/home/ProgramCard";
import { PROGRAM_CATEGORIES, PROGRAM_LANGUAGES, PROGRAM_TYPES } from "@/data/programs";
import { cn } from "@/lib/cn";
import type { Program } from "@/types/program";

interface Filters {
  lang: string;
  cat: string;
  type: string;
}

const ROWS: Array<{ key: keyof Filters; label: string; values: string[] }> = [
  { key: "lang", label: "언어별", values: PROGRAM_LANGUAGES },
  { key: "cat", label: "문화 콘텐츠별", values: PROGRAM_CATEGORIES },
  { key: "type", label: "참여 방식별", values: PROGRAM_TYPES },
];

// 쿼리스트링 값이 허용된 옵션일 때만 초기값으로 사용한다.
function allowed(value: string | null, options: string[]): string {
  return value && options.includes(value) ? value : "";
}

export function ProgramsExplorer({ programs }: { programs: Program[] }) {
  const params = useSearchParams();
  const [filters, setFilters] = useState<Filters>({
    lang: allowed(params.get("lang"), PROGRAM_LANGUAGES),
    cat: allowed(params.get("cat"), PROGRAM_CATEGORIES),
    type: allowed(params.get("type"), PROGRAM_TYPES),
  });
  const [query, setQuery] = useState(params.get("q")?.slice(0, 100) ?? "");

  const q = query.toLowerCase().trim();
  const results = programs.filter(
    (p) =>
      (!filters.lang || p.langs.includes(filters.lang)) &&
      (!filters.cat || p.category === filters.cat) &&
      (!filters.type || p.type === filters.type) &&
      (!q ||
        [p.title, p.place, p.category, p.type, p.visual, p.description]
          .join(" ")
          .toLowerCase()
          .includes(q)),
  );

  function reset() {
    setFilters({ lang: "", cat: "", type: "" });
    setQuery("");
  }

  return (
    <div>
      <div className="rounded-[22px] bg-white p-6 md:p-8">
        <form
          role="search"
          onSubmit={(e) => e.preventDefault()}
          className="mb-5 flex gap-1 rounded-xl border border-[#e1e1e5] bg-soft p-1.5"
        >
          <input
            aria-label="프로그램 검색"
            placeholder="프로그램명·장소·키워드 검색"
            value={query}
            maxLength={100}
            onChange={(e) => setQuery(e.target.value)}
            className="min-h-11 min-w-0 flex-1 bg-transparent px-3 text-xs outline-none"
          />
          <button type="submit" className="btn btn-sm shrink-0 px-5">
            검색
          </button>
        </form>

        {ROWS.map((row) => (
          <div key={row.key} className="my-5 md:flex md:items-center md:gap-7">
            <strong className="mb-3 block w-[95px] shrink-0 text-[10px] font-medium text-[#8e8e95] md:mb-0 md:text-[11px]">
              {row.label}
            </strong>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {["", ...row.values].map((v) => {
                const active = filters[row.key] === v;
                return (
                  <button
                    key={v || "all"}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilters((f) => ({ ...f, [row.key]: v }))}
                    className={cn(
                      "min-h-11 rounded-full border px-3 text-[10px] transition hover:border-[#929298] md:min-h-9 md:px-4 md:text-[11px]",
                      active
                        ? "border-ink bg-ink text-white hover:border-ink"
                        : "border-[#dcdce1] bg-transparent",
                    )}
                  >
                    {v || "전체"}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="my-6 flex items-center justify-between text-[10px] md:text-xs">
        <strong aria-live="polite" className="font-medium">
          조건에 맞는 프로그램 {results.length}개
        </strong>
        <button
          type="button"
          onClick={reset}
          className="flex min-h-11 items-center text-[#535359] hover:text-black"
        >
          필터 초기화 ↺
        </button>
      </div>

      {results.length ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {results.map((p) => (
            <ProgramCard key={p.id} program={p} />
          ))}
        </div>
      ) : (
        <div className="rounded-[15px] border border-[#dfdfe3] bg-white p-[65px] text-center">
          <h3 className="text-xl font-medium">조건에 맞는 모임이 없어요</h3>
          <p className="mt-2 text-[13px] text-mute">검색어나 필터를 바꾸어 보세요.</p>
          <button type="button" onClick={reset} className="btn btn-sm mt-4">
            필터 초기화
          </button>
        </div>
      )}
    </div>
  );
}
