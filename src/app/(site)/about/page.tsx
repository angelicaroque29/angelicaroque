import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "About | AngieInTech",
  description:
    "Angelica Roque, software engineer and founder of AngieInTech. I help small businesses build websites, automations, and digital systems in Miami.",
};

export default function AboutPage() {
  return (
    <>
      <About standalone />
      <CtaBanner />
    </>
  );
}
