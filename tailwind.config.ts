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
        mute: "#86868b",
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
