import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { About } from "@/components/sections/about";
import { Booking } from "@/components/sections/booking";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Hero } from "@/components/sections/hero";
import { Packages } from "@/components/sections/packages";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="site-main">
        <Hero />
        <Services />
        <Packages />
        <Booking />
        <About />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
