import type { Config } from "tailwindcss";
import type { CSSRuleObject } from "tailwindcss/types/config";
import plugin from "tailwindcss/plugin";
import { TYPE_ROLES } from "./src/styles/typography";

// src/styles/typography.ts 의 역할 정의를 `type-<역할>` 클래스로 만든다.
const typography = plugin(({ addComponents, theme }) => {
  const md = theme("screens.md") as string;
  const lg = theme("screens.lg") as string;
  const scaled = (v: string) => `calc(${v} * var(--font-scale, 1))`;

  const components: CSSRuleObject = {};
  for (const [name, role] of Object.entries(TYPE_ROLES)) {
    const [s0, s1 = s0, s2 = s1] = role.size;
    const rule: CSSRuleObject = {
      fontSize: scaled(s0),
      lineHeight: String(role.lineHeight),
      letterSpacing: role.letterSpacing,
      fontWeight: String(role.weight),
    };
    if (role.uppercase) rule.textTransform = "uppercase";
    if (role.wrap) rule.textWrap = role.wrap;
    if (s1 !== s0) rule[`@media (min-width: ${md})`] = { fontSize: scaled(s1) };
    if (s2 !== s1) rule[`@media (min-width: ${lg})`] = { fontSize: scaled(s2) };
    components[`.type-${name}`] = rule;
  }
  addComponents(components);
});

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1d1d1f",
        mute: "#6e6e73", // 밝은 배경 위 보조 텍스트 (흰색 5.1:1, #f5f5f7 4.7:1)
        "mute-strong": "#5c5c62", // 옅은 회색 칩·아바타 위 텍스트 (#f1f1f3 5.9:1, #dedee3 5.0:1)
        faint: "#8a8a90", // 큰 장식용 글자 전용 (흰색 3.4:1) — 일반 텍스트에는 쓰지 않는다
        "mute-dark": "#9f9fa7", // 어두운 배경 위 보조 텍스트 (#1d1d1f 6.4:1)
        line: "#e6e6e8",
        soft: "#f5f5f7",
        night: "#080809",
        dusk: "#111113",
      },
      // 폰트 정의는 src/styles/fonts.css 의 CSS 변수에서 일괄 관리한다.
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
    },
  },
  plugins: [typography],
};

export default config;
