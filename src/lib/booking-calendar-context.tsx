"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type MouseEvent,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { isBookingRoute, routes } from "@/lib/routes";

type BookingCalendarContextValue = {
  showCalendar: boolean;
  setShowCalendar: (open: boolean) => void;
  openCalendar: () => void;
};

const BookingCalendarContext = createContext<BookingCalendarContextValue | null>(null);

export function BookingCalendarProvider({ children }: { children: React.ReactNode }) {
  const [showCalendar, setShowCalendar] = useState(true);
  const pathname = usePathname();

  const openCalendar = useCallback(() => {
    setShowCalendar(true);
  }, []);

  useEffect(() => {
    if (pathname === routes.booking) {
      setShowCalendar(true);
    }
  }, [pathname]);

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === "#booking" || window.location.pathname === routes.booking) {
        setShowCalendar(true);
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <BookingCalendarContext.Provider value={{ showCalendar, setShowCalendar, openCalendar }}>
      {children}
    </BookingCalendarContext.Provider>
  );
}

export function useBookingCalendar() {
  const ctx = useContext(BookingCalendarContext);
  if (!ctx) {
    throw new Error("useBookingCalendar must be used within BookingCalendarProvider");
  }
  return ctx;
}

export function useNavigateToBooking() {
  const ctx = useContext(BookingCalendarContext);
  const router = useRouter();
  const pathname = usePathname();

  return useCallback(() => {
    ctx?.openCalendar();

    if (pathname === routes.booking) {
      requestAnimationFrame(() => {
        document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    router.push(routes.booking);
  }, [ctx, pathname, router]);
}

export function useBookingClickHandler(href: string) {
  const navigateToBooking = useNavigateToBooking();

  return useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (!isBookingRoute(href)) return;

      event.preventDefault();
      navigateToBooking();
    },
    [href, navigateToBooking]
  );
}
