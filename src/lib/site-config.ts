export const siteConfig = {
  name: "Angie In Tech",
  handle: "@angieintech",
  founder: "Angelica Roque",
  location: "Miami, FL",
  tagline:
    "Websites, automations, and AI-powered products built by a real software engineer.",
  calLink: process.env.NEXT_PUBLIC_CAL_LINK ?? "https://cal.com/angelica",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@angieintech.com",
  social: {
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com/angieintech",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL ?? "#",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "#",
  },
  navLinks: [
    { label: "Work", href: "#client-work" },
    { label: "Services", href: "#services" },
    { label: "Packages", href: "#packages" },
    { label: "About", href: "#about" },
  ],
} as const;
