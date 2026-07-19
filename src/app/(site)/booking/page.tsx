import type { Metadata } from "next";
import { Booking } from "@/components/sections/booking";

export const metadata: Metadata = {
  title: "Agenda una llamada | Angélica Roque",
  description:
    "Reserva una primera llamada gratis de 20 minutos con Angélica Roque. Sin costo ni compromiso. Sales con claridad sobre qué arreglar primero.",
};

export default function BookingPage() {
  return <Booking standalone />;
}
