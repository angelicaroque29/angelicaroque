"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type MouseEvent,
} from "react";

type BookingCalendarContextValue = {
  showCalendar: boolean;
  setShowCalendar: (open: boolean) => void;
  openCalendar: () => void;
};

const BookingCalendarContext = createContext<BookingCalendarContextValue | null>(null);

export function isBookingHref(href: string) {
  return href === "#booking" || href.endsWith("#booking");
}

export function BookingCalendarProvider({ children }: { children: React.ReactNode }) {
  const [showCalendar, setShowCalendar] = useState(true);

  const openCalendar = useCallback(() => {
    setShowCalendar(true);
  }, []);

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === "#booking") {
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

  return useCallback(() => {
    ctx?.openCalendar();
    requestAnimationFrame(() => {
      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [ctx]);
}

export function useBookingClickHandler(href: string) {
  const navigateToBooking = useNavigateToBooking();

  return useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (!isBookingHref(href)) return;

      navigateToBooking();

      if (window.location.hash === "#booking") {
        event.preventDefault();
      }
    },
    [href, navigateToBooking]
  );
}
