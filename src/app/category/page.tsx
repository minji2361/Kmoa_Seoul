import type { Metadata } from "next";
import { Suspense } from "react";
import { CtaSection } from "@/components/home/CtaSection";
import { ProgramsExplorer } from "@/components/programs/ProgramsExplorer";
import { PageHead } from "@/components/ui/PageHead";
import { PROGRAMS } from "@/data/programs";

export const metadata: Metadata = { title: "Category" };

export default function CategoryPage() {
  return (
    <>
      <PageHead
        title="Category"
        description="언어, 문화 콘텐츠, 참여 방식 필터를 조합해 원하는 모임을 빠르게 찾아보세요."
      />
      <section className="section bg-soft">
        <div className="wrap">
          <Suspense fallback={null}>
            <ProgramsExplorer programs={PROGRAMS} />
          </Suspense>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
