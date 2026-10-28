import Link from "next/link";
import { FormLink } from "@/components/ui/FormLink";

export function Hero() {
  return (
    <section className="overflow-hidden bg-night pb-7 pt-[61px] text-soft md:pt-[75px] lg:pt-[84px]">
      <div className="wrap">
        <div className="mx-auto max-w-[800px] text-center">
          <div className="eyebrow mb-7 text-[#a2a2a8]">K-MOA · CULTURE MEETS LANGUAGE</div>
          <h1 className="text-[clamp(64px,21vw,88px)] font-semibold leading-[0.95] tracking-[-4.5px] md:text-[116px] md:tracking-[-6px] lg:text-[clamp(116px,10.2vw,148px)] lg:leading-[0.93] lg:tracking-[-8px]">
            Culture.
            <br />
            <span className="bg-gradient-to-b from-[#ededf0] to-[#88888f] bg-clip-text text-transparent">
              Closer.
            </span>
          </h1>
          <p className="mx-auto my-6 text-base leading-[1.55] tracking-[-0.6px] text-[#a1a1a6] md:text-[19px]">
            문화로 만나다.
            <br />더 자연스럽게, 더 깊이.
          </p>
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-7">
            <FormLink kind="apply" className="btn btn-light text-xs">
              새로운 만남 시작하기
            </FormLink>
            <Link
              href="/programs"
              className="flex min-h-11 items-center gap-3 text-xs text-[#c7c7ce] hover:text-white"
            >
              프로그램 살펴보기 <span className="text-base">↗</span>
            </Link>
          </div>
        </div>

        <div
          className="relative mx-auto mt-6 max-w-[470px] md:mt-4 md:max-w-[650px] lg:max-w-[760px]"
          role="img"
          aria-label="두 개의 고리가 연결된 문화 교류의 상징"
        >
          <svg
            viewBox="0 0 900 370"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="block h-auto w-[124%] max-w-none -translate-x-[12%] md:w-full md:translate-x-0"
          >
            <defs>
              <linearGradient id="metal" x1="0" y1="0" x2="0.7" y2="1">
                <stop offset="0" stopColor="#343438" />
                <stop offset=".22" stopColor="#fafafa" />
                <stop offset=".38" stopColor="#8c8c92" />
                <stop offset=".56" stopColor="#242427" />
                <stop offset=".78" stopColor="#d7d7db" />
                <stop offset="1" stopColor="#57575c" />
              </linearGradient>
              <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#fff" stopOpacity=".6" />
                <stop offset="1" stopColor="#999" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="ground">
                <stop stopColor="#aaa" stopOpacity=".15" />
                <stop offset="1" stopColor="#aaa" stopOpacity="0" />
              </radialGradient>
            </defs>
            <ellipse cx="450" cy="315" rx="310" ry="35" fill="url(#ground)" />
            <g fill="none" stroke="url(#metal)" strokeWidth="47">
              <ellipse cx="348" cy="167" rx="133" ry="100" transform="rotate(-27 348 167)" />
              <ellipse cx="552" cy="194" rx="133" ry="100" transform="rotate(-27 552 194)" />
            </g>
            <g fill="none" stroke="url(#edge)" strokeWidth="1.2">
              <ellipse cx="348" cy="167" rx="157" ry="124" transform="rotate(-27 348 167)" />
              <ellipse cx="552" cy="194" rx="157" ry="124" transform="rotate(-27 552 194)" />
            </g>
          </svg>
          <div className="-mt-2 flex justify-between px-[18px] text-[9px] tracking-[1.5px] text-[#67676d] md:px-[70px] md:text-[10px] md:tracking-[2px]">
            <span>DIFFERENT CULTURES.</span>
            <span>ONE CONNECTION.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
