"use client";

import { useEffect, useRef, useState } from "react";

const TOAST_EVENT = "kmoa:toast";
const TOAST_DURATION_MS = 3000;

// 어디서든 호출할 수 있는 짧은 안내 메시지. <ToastHost /> 가 레이아웃에 한 번 마운트되어 있어야 한다.
export function showToast(message: string) {
  window.dispatchEvent(new CustomEvent<string>(TOAST_EVENT, { detail: message }));
}

export function ToastHost() {
  const ref = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const [message, setMessage] = useState("");
  const [popoverSupported, setPopoverSupported] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setPopoverSupported(typeof el.showPopover === "function");

    function onToast(e: Event) {
      setMessage((e as CustomEvent<string>).detail);
      // Popover(top layer)로 띄워 <dialog> 모달 위에서도 보이게 한다.
      if (typeof el!.showPopover === "function") {
        if (el!.matches(":popover-open")) el!.hidePopover();
        el!.showPopover();
      }
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        if (typeof el!.hidePopover === "function" && el!.matches(":popover-open"))
          el!.hidePopover();
        setMessage("");
      }, TOAST_DURATION_MS);
    }

    window.addEventListener(TOAST_EVENT, onToast);
    return () => {
      window.removeEventListener(TOAST_EVENT, onToast);
      window.clearTimeout(timer.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      popover="manual"
      role="status"
      aria-live="polite"
      style={{
        inset: "auto auto 24px 50%",
        transform: "translateX(-50%)",
        margin: 0,
        display: !popoverSupported && !message ? "none" : undefined,
      }}
      className="fixed max-w-[90%] rounded-xl border-0 bg-[#252528] px-6 py-3 text-center text-xs text-white shadow-[0_10px_35px_rgba(20,33,61,0.3)]"
    >
      {message}
    </div>
  );
}
