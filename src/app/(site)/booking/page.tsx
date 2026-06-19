import type { Metadata } from "next";
import { Booking } from "@/components/sections/booking";

export const metadata: Metadata = {
  title: "Book a Call | AngieInTech",
  description:
    "Book a free 20-minute first call, a business systems audit, or a build consultation with Angelica Roque.",
};

export default function BookingPage() {
  return <Booking standalone />;
}
