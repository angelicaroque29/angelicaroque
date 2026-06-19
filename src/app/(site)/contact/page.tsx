import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact | AngieInTech",
  description:
    "Email, WhatsApp, or book online. Reach Angelica Roque at AngieInTech for websites, automations, and business systems.",
};

export default function ContactPage() {
  return <Contact standalone />;
}
