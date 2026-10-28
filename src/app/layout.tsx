import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "K-MOA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
