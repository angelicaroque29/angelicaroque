import type { Metadata } from "next";
import { Booking } from "@/components/sections/booking";

export const metadata: Metadata = {
  title: "Agenda una llamada | Angélica Roque",
  description:
    "Reserva el primer meeting de 1 hora con Angélica Roque. $50 de descuento. Vemos el proyecto, las horas y el precio.",
};

export default function BookingPage() {
  return <Booking standalone />;
}
