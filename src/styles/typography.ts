/**
 * 역할별 타이포그래피 정의 — 글자 크기·행간·자간·굵기는 여기서만 관리한다.
 * 컴포넌트에서는 `type-<역할>` 클래스(예: type-body, type-heading)만 사용하고,
 * `text-[..px]`, `tracking-[..]`, `leading-[..]` 같은 값을 직접 쓰지 않는다.
 *
 * size   : [모바일, md(768px~), lg(1024px~)]. 값이 하나면 모든 화면 동일, 둘이면 lg 는 md 와 같다.
 *          px 문자열 또는 clamp() 같은 CSS 길이 표현을 쓸 수 있다.
 * 전체 글자 크기는 src/styles/fonts.css 의 --font-scale(기본 1)로 한 번에 보정할 수 있다.
 * (폰트를 바꿔 글자가 크거나 작아 보일 때 이 값만 조정한다.)
 *
 * ※ 현재 값은 기존 디자인을 그대로 옮긴 것이다. 가독성 보정(최소 크기, 색 대비)은 다음 단계에서 이 파일만 고친다.
 */
export interface TypeRole {
  size: [string] | [string, string] | [string, string, string];
  lineHeight: number;
  letterSpacing: string;
  weight: number;
  uppercase?: boolean;
}

const px = (...v: number[]) => v.map((n) => `${n}px`) as TypeRole["size"];

export const TYPE_ROLES: Record<string, TypeRole> = {
  // ── 제목류
  display: {
    size: ["clamp(64px, 21vw, 88px)", "116px", "clamp(116px, 10.2vw, 148px)"],
    lineHeight: 0.95,
    letterSpacing: "-0.052em",
    weight: 600,
  }, // 히어로 큰 제목
  title: { size: px(45, 64), lineHeight: 1.18, letterSpacing: "-0.045em", weight: 600 }, // 페이지 제목(h1)
  heading: { size: px(29, 36, 43), lineHeight: 1.25, letterSpacing: "-0.044em", weight: 600 }, // 섹션 제목(h2)
  "heading-sm": { size: px(29), lineHeight: 1.3, letterSpacing: "-0.043em", weight: 600 }, // 카드형 큰 제목
  "heading-md": { size: px(26), lineHeight: 1.3, letterSpacing: "-0.03em", weight: 600 }, // 모달 큰 제목
  feature: { size: px(30, 26, 29), lineHeight: 1.25, letterSpacing: "-0.037em", weight: 600 }, // 라인업 카드 이름
  stat: { size: px(43, 58), lineHeight: 1.3, letterSpacing: "-0.045em", weight: 500 }, // 큰 수치
  numeral: { size: px(40, 44), lineHeight: 1.2, letterSpacing: "-0.05em", weight: 400 }, // 번호 장식
  subheading: { size: px(20), lineHeight: 1.4, letterSpacing: "-0.03em", weight: 600 }, // 소제목(h3)
  "card-title": { size: px(14, 16), lineHeight: 1.45, letterSpacing: "-0.025em", weight: 600 }, // 카드·FAQ 제목
  logo: { size: px(24), lineHeight: 1.2, letterSpacing: "-0.0625em", weight: 700 }, // K-MOA 로고

  // ── 본문류
  lead: { size: px(16, 19), lineHeight: 1.55, letterSpacing: "-0.032em", weight: 400 }, // 히어로 소개문
  story: { size: px(16, 21), lineHeight: 1.9, letterSpacing: "-0.025em", weight: 400 }, // 브랜드 스토리
  quote: { size: px(22, 19, 21), lineHeight: 1.5, letterSpacing: "-0.04em", weight: 500 }, // 후기 한 줄 인용
  "quote-mark": { size: px(43, 50), lineHeight: 0.6, letterSpacing: "0", weight: 400 }, // 따옴표 장식
  subtitle: { size: px(13, 15), lineHeight: 1.7, letterSpacing: "-0.025em", weight: 400 }, // 제목 아래 설명
  body: { size: px(14, 15), lineHeight: 1.7, letterSpacing: "-0.025em", weight: 400 }, // 기본 본문
  "body-sm": { size: px(12, 13), lineHeight: 1.8, letterSpacing: "-0.025em", weight: 400 }, // 카드 설명 등 작은 본문

  // ── 보조·UI
  caption: { size: px(10, 11), lineHeight: 1.7, letterSpacing: "-0.025em", weight: 400 }, // 날짜·장소·태그·안내문
  micro: { size: px(9, 10), lineHeight: 1.6, letterSpacing: "-0.025em", weight: 400 }, // 아주 작은 보조 문구
  label: { size: px(10), lineHeight: 1.4, letterSpacing: "0.25em", weight: 600, uppercase: true }, // 영문 대문자 라벨
  link: { size: px(10, 13), lineHeight: 1.4, letterSpacing: "-0.025em", weight: 500 }, // 섹션 "전체 보기" 링크
  nav: { size: px(14, 11, 12), lineHeight: 1.4, letterSpacing: "-0.025em", weight: 400 }, // 내비게이션 메뉴
  button: { size: px(13), lineHeight: 1.3, letterSpacing: "-0.02em", weight: 500 }, // 버튼
  "button-sm": { size: px(11), lineHeight: 1.3, letterSpacing: "-0.02em", weight: 500 }, // 작은 버튼
  tile: { size: px(15, 26), lineHeight: 1.25, letterSpacing: "-0.04em", weight: 600 }, // 프로그램 카드 타일 글자
  "tile-sm": { size: px(12, 17), lineHeight: 1.25, letterSpacing: "-0.05em", weight: 600 }, // 갤러리 타일 글자

  // ── 아이콘 문자(☰ × ↗ 등)
  "glyph-sm": { size: px(16), lineHeight: 1, letterSpacing: "0", weight: 400 },
  glyph: { size: px(21), lineHeight: 1, letterSpacing: "0", weight: 400 },
  "glyph-lg": { size: px(25, 28), lineHeight: 1, letterSpacing: "0", weight: 400 },
};
