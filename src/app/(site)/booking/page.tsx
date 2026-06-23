import type { Metadata } from "next";
import { Booking } from "@/components/sections/booking";

export const metadata: Metadata = {
  title: "Book a Call | AngieInTech",
  description:
    "Book a free 20-minute first call with Angelica Roque. No cost, no commitment. Leave with clarity on what to fix first.",
};

export default function BookingPage() {
  return <Booking standalone />;
}
