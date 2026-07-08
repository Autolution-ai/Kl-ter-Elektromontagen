import { FunnelProvider } from "@/components/Funnel/FunnelContext";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SegmentSelect } from "@/components/SegmentSelect";
import { RolesSection } from "@/components/RolesSection";
import { TrustBar } from "@/components/TrustBar";
import { Benefits } from "@/components/Benefits";
import { CareerPath } from "@/components/CareerPath";
import { ApplicationFunnel } from "@/components/Funnel/ApplicationFunnel";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { StickyApplyBar } from "@/components/StickyApplyBar";

export default function Home() {
  return (
    <FunnelProvider>
      <Nav />
      <main>
        <Hero />
        <SegmentSelect />
        <RolesSection />
        <TrustBar />
        <Benefits />
        <CareerPath />
        <ApplicationFunnel />
        <FAQ />
      </main>
      <Footer />
      <StickyApplyBar />
    </FunnelProvider>
  );
}
