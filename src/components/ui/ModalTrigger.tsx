"use client";

import { useId, useRef } from "react";

interface ModalTriggerProps {
  label: React.ReactNode;
  title: string;
  triggerClassName?: string;
  children: React.ReactNode;
}

// 버튼을 누르면 네이티브 <dialog> 모달을 연다. (ESC·배경 클릭으로 닫힘, 포커스 트랩은 브라우저가 처리)
export function ModalTrigger({ label, title, triggerClassName, children }: ModalTriggerProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  return (
    <>
      <button type="button" className={triggerClassName} onClick={() => ref.current?.showModal()}>
        {label}
      </button>
      <dialog
        ref={ref}
        aria-labelledby={titleId}
        onClick={(e) => {
          if (e.target === e.currentTarget) ref.current?.close();
        }}
        className="m-auto max-h-[90vh] w-[min(620px,calc(100%-24px))] rounded-[22px] bg-white p-0 text-ink backdrop:bg-black/60 backdrop:backdrop-blur-md"
      >
        <div>
          <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-[#eaeaef] bg-white px-[22px] py-[22px] md:px-7 md:py-6">
            <h2 id={titleId} className="type-subheading">
              {title}
            </h2>
            <button
              type="button"
              aria-label="닫기"
              onClick={() => ref.current?.close()}
              className="-mr-2 flex h-11 w-11 items-center justify-center type-glyph-lg font-light text-mute"
            >
              ×
            </button>
          </div>
          <div className="p-[22px] md:p-7">{children}</div>
        </div>
      </dialog>
    </>
  );
}
