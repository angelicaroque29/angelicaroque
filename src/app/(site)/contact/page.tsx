import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contacto | Angélica Roque",
  description:
    "Email, WhatsApp o agenda en línea. Escríbele a Angélica Roque para webs, automatizaciones y sistemas de negocio.",
};

export default function ContactPage() {
  return <Contact standalone />;
}
