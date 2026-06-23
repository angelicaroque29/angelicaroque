import { CtaBanner } from "@/components/sections/cta-banner";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { Services } from "@/components/sections/services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <Services />
      <Faq />
      <CtaBanner />
    </>
  );
}
