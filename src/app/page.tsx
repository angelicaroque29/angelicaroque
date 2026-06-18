import { Footer } from "@/components/footer";
import { About } from "@/components/sections/about";
import { Booking } from "@/components/sections/booking";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Hero } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <main className="site-main">
        <Hero />
        <MarqueeStrip />
        <Services />
        <Booking />
        <About />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
