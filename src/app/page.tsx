import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Capabilities } from "@/components/site/Capabilities";
import { Automation } from "@/components/site/Automation";
import { Approach } from "@/components/site/Approach";
import { Support } from "@/components/site/Support";
import { National } from "@/components/site/National";
import { Leadership } from "@/components/site/Leadership";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Capabilities />
        <Automation />
        <Approach />
        <Support />
        <National />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
