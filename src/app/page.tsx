import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Tells } from "@/components/Tells";
import { Work } from "@/components/Work";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Tells />
        <Work />
        <Process />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
