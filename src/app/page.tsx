import { CtaSection } from "@/components/home/CtaSection";
import { DiscoverySearch } from "@/components/home/DiscoverySearch";
import { Hero } from "@/components/home/Hero";
import { InstagramSection } from "@/components/home/InstagramSection";
import { Lineup } from "@/components/home/Lineup";
import { PastHighlights } from "@/components/home/PastHighlights";
import { ProgramsPreview } from "@/components/home/ProgramsPreview";
import { ReviewsSlider } from "@/components/home/ReviewsSlider";
import { ValueSection } from "@/components/home/ValueSection";
import { PROGRAMS, PROGRAM_CATEGORIES } from "@/data/programs";
import { REVIEWS } from "@/data/reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <DiscoverySearch />
      <ValueSection />
      <ProgramsPreview programs={PROGRAMS} categories={PROGRAM_CATEGORIES} />
      <Lineup />
      <PastHighlights />
      <ReviewsSlider reviews={REVIEWS} />
      <InstagramSection />
      <CtaSection />
    </>
  );
}
