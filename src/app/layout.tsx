import type { Metadata } from "next";
import "@/styles/globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollTopButton } from "@/components/layout/ScrollTopButton";

export const metadata: Metadata = {
  title: {
    default: "K-MOA · Culture meets Language",
    template: "K-MOA · %s",
  },
  description: "K-MOA 문화와 언어로 만나는 2030 내·외국인 문화 교류 플랫폼",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <ScrollTopButton />
      </body>
    </html>
  );
}
