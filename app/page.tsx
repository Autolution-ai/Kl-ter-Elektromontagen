import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SegmentSelect } from "@/components/SegmentSelect";
import { RolesSection } from "@/components/RolesSection";
import { TrustBar } from "@/components/TrustBar";
import { Team } from "@/components/Team";
import { Benefits } from "@/components/Benefits";
import { CareerPath } from "@/components/CareerPath";
import { ApplyTeaser } from "@/components/ApplyTeaser";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { StickyApplyBar } from "@/components/StickyApplyBar";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SegmentSelect />
        <RolesSection />
        <TrustBar />
        <Team />
        <Benefits />
        <CareerPath />
        <ApplyTeaser />
        <FAQ />
      </main>
      <Footer />
      <StickyApplyBar />
    </>
  );
}
