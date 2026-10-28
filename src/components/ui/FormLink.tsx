"use client";

import { APPLY_FORM_URL, PARTNER_FORM_URL } from "@/config/site";
import { showToast } from "@/components/ui/Toast";

interface FormLinkProps {
  kind: "apply" | "partner";
  className?: string;
  children: React.ReactNode;
}

// 신청/입점 신청 폼으로 이동한다.
// 외부 폼 주소(.env)가 아직 없으면 이동하지 않고 "준비 중입니다." 안내만 띄운다.
export function FormLink({ kind, className, children }: FormLinkProps) {
  const url = kind === "apply" ? APPLY_FORM_URL : PARTNER_FORM_URL;

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={className} onClick={() => showToast("준비 중입니다.")}>
      {children}
    </button>
  );
}
