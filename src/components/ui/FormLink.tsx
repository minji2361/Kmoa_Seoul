import Link from "next/link";
import { APPLY_FORM_URL, PARTNER_FORM_URL } from "@/config/site";

interface FormLinkProps {
  kind: "apply" | "partner";
  className?: string;
  children: React.ReactNode;
}

// 신청/입점 신청 폼으로 이동한다. 외부 폼 주소가 설정되지 않으면 /contact 로 안내한다.
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
    <Link href="/contact" className={className}>
      {children}
    </Link>
  );
}
