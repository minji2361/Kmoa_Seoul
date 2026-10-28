import type { Metadata } from "next";
import { Suspense } from "react";
import { CtaSection } from "@/components/home/CtaSection";
import { Lineup } from "@/components/home/Lineup";
import { ClubActivities } from "@/components/programs/ClubActivities";
import { CrewRoadmap } from "@/components/programs/CrewRoadmap";
import { ProgramsExplorer } from "@/components/programs/ProgramsExplorer";
import { PageHead } from "@/components/ui/PageHead";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROGRAMS } from "@/data/programs";

export const metadata: Metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <>
      <PageHead
        title="Programs"
        description="가볍게 시작하는 모아 데이부터 깊이 있는 5주 모아 크루까지, 나에게 맞는 만남을 찾아보세요."
      />
      <Lineup withHeading={false} />
      <section id="filters" className="section scroll-mt-[60px] bg-soft md:scroll-mt-[68px]">
        <div className="wrap">
          <SectionHeading
            title="카테고리로 찾기"
            sub="세 가지 필터를 함께 조합해 원하는 모임을 찾아보세요."
          />
          <Suspense fallback={null}>
            <ProgramsExplorer programs={PROGRAMS} />
          </Suspense>
        </div>
      </section>
      <ClubActivities />
      <CrewRoadmap />
      <CtaSection />
    </>
  );
}
