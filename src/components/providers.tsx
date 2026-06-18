"use client";

import { LocaleProvider } from "@/lib/i18n/context";
import { BookingCalendarProvider } from "@/lib/booking-calendar-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <BookingCalendarProvider>{children}</BookingCalendarProvider>
    </LocaleProvider>
  );
}
