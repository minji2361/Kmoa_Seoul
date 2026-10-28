import type { Config } from "tailwindcss";

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
  plugins: [],
};

export default config;
