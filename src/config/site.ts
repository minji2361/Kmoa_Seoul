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
// https 주소만 허용하고, 값이 없으면 버튼을 눌렀을 때 "준비 중입니다." 안내를 띄운다.
function httpsUrlOrNull(value: string | undefined): string | null {
  return value && value.startsWith("https://") ? value : null;
}

export const APPLY_FORM_URL = httpsUrlOrNull(process.env.NEXT_PUBLIC_APPLY_FORM_URL);
export const PARTNER_FORM_URL = httpsUrlOrNull(process.env.NEXT_PUBLIC_PARTNER_FORM_URL);
