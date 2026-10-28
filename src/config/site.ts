export const SITE_NAME = "K-MOA";

export const NAV_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/category", label: "Category" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact/FAQ" },
] as const;

export const INSTAGRAM_URL = "https://www.instagram.com/k_moa_official/";

// 외부 신청 폼(구글폼·네이버폼 등). 자체 폼으로 전환하기 전까지 환경변수로 관리한다.
// https 주소만 허용하고, 값이 없으면 /contact 로 안내한다.
function httpsUrlOrNull(value: string | undefined): string | null {
  return value && value.startsWith("https://") ? value : null;
}

export const APPLY_FORM_URL = httpsUrlOrNull(process.env.NEXT_PUBLIC_APPLY_FORM_URL);
export const PARTNER_FORM_URL = httpsUrlOrNull(process.env.NEXT_PUBLIC_PARTNER_FORM_URL);

// 외부 폼 주소가 설정돼 있는지 (미설정이면 Contact 페이지에서 "준비 중" 안내를 보여준다)
export const APPLY_FORM_CONFIGURED = APPLY_FORM_URL !== null;
export const PARTNER_FORM_CONFIGURED = PARTNER_FORM_URL !== null;
