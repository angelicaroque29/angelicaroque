import { Footer } from "@/components/footer";
import { StickyNav } from "@/components/sticky-nav";
import { About } from "@/components/sections/about";
import { Booking } from "@/components/sections/booking";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Hero } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { Packages } from "@/components/sections/packages";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <StickyNav />
      <main className="site-main">
        <Hero />
        <MarqueeStrip />
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
