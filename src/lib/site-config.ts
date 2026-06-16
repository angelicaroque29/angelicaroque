export const siteConfig = {
  name: "AngieInTech",
  handle: "@angieintech",
  founder: "Angelica Roque",
  studioName: "AngieInTech",
  location: "Miami, FL",
  tagline:
    "Angelica Roque · AngieInTech · Tecnología simple para negocios que quieren crecer.",
  calLink: process.env.NEXT_PUBLIC_CAL_LINK ?? "https://cal.com/angelica-roque-bznohb",
  calEmbedUrl:
    process.env.NEXT_PUBLIC_CAL_EMBED_URL ??
    "https://cal.com/angelica-roque-bznohb?embed=true&theme=light",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ??
    "angieintech.business@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "7864610791",
  phoneDisplay: "(786) 461-0791",
  whatsappUrl:
    process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/17864610791",
  images: {
    logo: "/images/logo.png",
    profile: "/images/angelica-profile-hq.jpg",
    headshot: "/images/angelica-headshot.png",
    office: "/images/angelica-office.png",
    heroIllustration: "/images/hero-illustration.png",
    servicesFlow: "/images/operation-automation-flow.png",
  },
  social: {
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com/angieintech",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL ?? "#",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "#",
  },
  navLinks: [
    { label: "Inicio", href: "#hero" },
    { label: "Servicios", href: "#services" },
    { label: "Paquetes", href: "#packages" },
    { label: "Sobre mí", href: "#about" },
    { label: "Contacto", href: "#contact" },
  ],
  cta: {
    book: "Agendar cita",
    viewWork: "Ver mi trabajo",
    discussRetainer: "Hablar del acompañamiento",
    visitSite: "Visitar sitio",
    follow: "Seguir",
    freeCall: "Cita gratis 20 min",
    whatsapp: "Escríbeme por WhatsApp",
  },
} as const;
