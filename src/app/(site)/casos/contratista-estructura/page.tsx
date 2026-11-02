import type { Metadata } from "next";
import { CaseStudy } from "@/components/case-study/case-study-page";
import data from "../../../../../content/caso-estudio-estructura/contenido/data.json";

export const metadata: Metadata = {
  title: { absolute: data.meta.title_es },
  description: data.meta.description_es,
  robots: { index: data.meta.indexable, follow: data.meta.indexable },
  openGraph: {
    title: data.meta.title_es,
    description: data.meta.description_es,
    locale: "es_US",
  },
};

export default function StructuralContractorCasePage() {
  return <CaseStudy initialLocale="es" />;
}
