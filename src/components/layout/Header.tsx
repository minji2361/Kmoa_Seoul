"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "@/config/site";
import { cn } from "@/lib/cn";
import { FormLink } from "@/components/ui/FormLink";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-[#e9e9eb] bg-white/95 backdrop-blur-xl">
      <div className="wrap flex h-[60px] items-center gap-6 md:h-[68px] md:gap-10 lg:gap-[70px]">
        <Link
          href="/"
          aria-label="K-MOA 홈"
          className="flex min-h-11 items-center whitespace-nowrap type-logo"
          onClick={() => setOpen(false)}
        >
          K-MOA<span className="text-[#919195]">.</span>
        </Link>

        <nav
          id="main-nav"
          aria-label="주 메뉴"
          className={cn(
            "absolute inset-x-0 top-[60px] grid-cols-2 gap-x-5 border-b border-line bg-white px-6 py-3 md:static md:flex md:flex-1 md:gap-5 md:border-0 md:bg-transparent md:p-0 lg:gap-7",
            open ? "grid" : "hidden md:flex",
          )}
        >
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "relative flex min-h-11 min-w-11 items-center type-nav",
                  active ? "text-[#161618]" : "text-[#717176] hover:text-[#161618]",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-2 left-0 hidden h-[3px] w-[3px] rounded-full bg-ink md:block" />
                )}
              </Link>
            );
          })}
          <FormLink kind="apply" className="btn col-span-2 my-3 md:hidden">
            신청하기
          </FormLink>
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <FormLink kind="apply" className="btn btn-sm hidden md:inline-flex">
            신청하기
          </FormLink>
          <button
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center type-glyph md:hidden"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
