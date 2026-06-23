export const routes = {
  home: "/",
  services: "/#services",
  faq: "/#faq",
  about: "/about",
  booking: "/booking",
  contact: "/contact",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];

export function isBookingRoute(href: string) {
  return href === routes.booking || href === "#booking" || href.endsWith("/booking");
}
