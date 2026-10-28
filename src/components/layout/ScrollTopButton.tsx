"use client";

export function ScrollTopButton() {
  return (
    <button
      type="button"
      aria-label="맨 위로"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-4 right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#e4e4e8] bg-white/85 type-glyph-sm text-[#6e6e75] backdrop-blur-md md:bottom-5 md:right-5"
    >
      ↑
    </button>
  );
}
