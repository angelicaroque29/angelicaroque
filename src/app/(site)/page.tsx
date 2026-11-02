import { About } from "@/components/sections/about";
import { CaseTeaser } from "@/components/sections/case-teaser";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { Services } from "@/components/sections/services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <Services />
      <HowItWorks />
      <CaseTeaser />
      <About />
      <Faq />
      <CtaBanner />
    </>
  );
}
