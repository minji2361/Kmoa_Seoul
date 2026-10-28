import Link from "next/link";
import { INSTAGRAM_URL, NAV_ITEMS } from "@/config/site";
import { FormLink } from "@/components/ui/FormLink";

const linkClass = "flex min-h-11 items-center text-[11px] text-mute hover:text-ink lg:min-h-8";

export function Footer() {
  return (
    <footer className="bg-soft pb-6 pt-11 md:pt-14">
      <div className="wrap">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-9">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center text-2xl font-bold tracking-[-1.5px]"
            >
              K-MOA<span className="text-[#919195]">.</span>
            </Link>
            <p className="my-4 text-[10px] text-mute md:text-[11px]">
              Culture meets Language.
              <br />
              내·외국인이 문화로 만나는 2030 교류 플랫폼
            </p>
            <span className="text-[10px] text-mute">문화로 만나고, 언어로 가까워져요.</span>
          </div>

          <div>
            <h4 className="mb-3 text-[11px] font-semibold text-[#515156]">둘러보기</h4>
            {NAV_ITEMS.filter((i) => i.href !== "/contact").map((item) => (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="mb-3 text-[11px] font-semibold text-[#515156]">지원</h4>
            <Link href="/contact" className={linkClass}>
              자주 묻는 질문
            </Link>
            <FormLink kind="apply" className={linkClass}>
              신청하기
            </FormLink>
            <FormLink kind="partner" className={linkClass}>
              플랫폼 입점 신청
            </FormLink>
          </div>

          <div>
            <h4 className="mb-3 text-[11px] font-semibold text-[#515156]">Follow</h4>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              ↗ @k_moa_official
            </a>
            <p className="text-[10px] text-mute md:text-[11px]">Instagram에서 소식을 확인하세요.</p>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-2 border-t border-[#d9d9df] pt-5 text-[9px] text-[#99999f] md:flex-row md:justify-between">
          <span>상호 K-MOA · 사업자 정보는 운영 정보 확정 후 입력</span>
          <span>© 2026 K-MOA. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
