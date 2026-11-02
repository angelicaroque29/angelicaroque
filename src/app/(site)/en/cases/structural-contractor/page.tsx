import type { Metadata } from "next";
import { CaseStudy } from "@/components/case-study/case-study-page";
import data from "../../../../../../content/caso-estudio-estructura/contenido/data.json";

export const metadata: Metadata = {
  title: { absolute: data.meta.title_en },
  description: data.meta.description_en,
  robots: { index: false, follow: false },
  openGraph: {
    title: data.meta.title_en,
    description: data.meta.description_en,
    locale: "en_US",
  },
};

export default function StructuralContractorCaseEnglishPage() {
  return <CaseStudy initialLocale="en" />;
}
