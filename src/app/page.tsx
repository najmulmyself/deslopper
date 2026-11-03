import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Redline } from "@/components/Redline";
import { About } from "@/components/About";
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
        <Work />
        <Redline />
        <Pricing />
        <Process />
        <About />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
