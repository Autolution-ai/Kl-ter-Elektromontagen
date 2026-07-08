import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { TrustBar } from "@/components/TrustBar";
import { CareerTeaser } from "@/components/CareerTeaser";
import { CareerPath } from "@/components/CareerPath";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <TrustBar />
        <CareerTeaser />
        <CareerPath />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
