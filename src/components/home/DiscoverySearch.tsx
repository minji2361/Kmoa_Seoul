"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const LANGS = ["English", "한국어", "기타 언어"];

// 홈 검색: /category 로 검색어·언어를 쿼리로 넘긴다. (Category 페이지에서 필터링)
export function DiscoverySearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [lang, setLang] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (lang) params.set("lang", lang);
    const qs = params.toString();
    router.push(qs ? `/category?${qs}` : "/category");
  }

  return (
    <section className="border-b border-line bg-white py-7 md:py-10">
      <div className="wrap flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8 lg:gap-[50px]">
        <div>
          <span className="eyebrow mb-2 block">FIND YOUR MOMENT</span>
          <h2 className="type-subheading">어떤 만남을 찾고 있나요?</h2>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex w-full flex-wrap gap-1 rounded-2xl border border-[#e1e1e5] bg-soft p-2 md:max-w-[430px] md:flex-nowrap md:rounded-full lg:max-w-[560px]"
        >
          <input
            aria-label="프로그램 검색"
            placeholder="프로그램 또는 관심사"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="min-h-11 w-full basis-full bg-transparent px-3 type-body-sm outline-none md:min-w-0 md:flex-1 md:basis-auto md:px-4"
          />
          <select
            aria-label="언어 선택"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="min-h-11 flex-1 bg-transparent px-2 type-caption text-mute outline-none md:w-[8em] md:flex-none"
          >
            <option value="">모든 언어</option>
            {LANGS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
          <button type="submit" className="btn btn-sm shrink-0 px-5">
            검색
          </button>
        </form>
      </div>
    </section>
  );
}
