import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Sobre mí | Angélica Roque",
  description:
    "Angélica Roque, ingeniera de software en Miami. Ayudo a negocios pequeños con webs, automatizaciones y sistemas digitales.",
};

export default function AboutPage() {
  return (
    <>
      <About standalone />
      <CtaBanner />
    </>
  );
}
