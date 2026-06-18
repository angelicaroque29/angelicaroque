import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Booking } from "@/components/sections/booking";
import { Services } from "@/components/sections/services";

export const metadata: Metadata = {
  title: "Services | AngieInTech · AI systems for small businesses",
  description:
    "Client intake systems, custom dashboards, proposal automation, and business systems audits for small businesses ready to grow with less manual work.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="site-main">
        <Services standalone />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
