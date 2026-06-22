const DEFAULT_CAL_LINK = "https://cal.com/angelica-roque-bznohb";

/** Rejects legacy prod value `cal.com/angelica` (404 — username never claimed). */
function resolveCalLink(raw?: string) {
  const value = raw?.trim();
  if (!value) return DEFAULT_CAL_LINK;
  if (/^https?:\/\/(www\.)?cal\.com\/angelica\/?$/i.test(value)) {
    return DEFAULT_CAL_LINK;
  }
  return value.replace(/\/$/, "");
}

const calLink = resolveCalLink(process.env.NEXT_PUBLIC_CAL_LINK);

export const siteConfig = {
  name: "AngieInTech",
  handle: "@angieintech",
  founder: "Angelica Roque",
  studioName: "AngieInTech",
  location: "Miami, FL",
  tagline:
    "Angelica Roque · AngieInTech · Tecnología simple para negocios que quieren crecer.",
  calLink,
  calEmbedUrl:
    process.env.NEXT_PUBLIC_CAL_EMBED_URL?.trim() ||
    `${calLink}?embed=true&theme=light`,
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
  instagramDmUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_DM_URL ?? "https://ig.me/m/angieintech",
  agentAvatarUrl:
    process.env.NEXT_PUBLIC_JOTFORM_AGENT_AVATAR ??
    "https://cdn.jotfor.ms/assets/agent-avatars/avatar_icon_1270.png",
  navLinks: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/#services" },
    { label: "Sobre mí", href: "/about" },
    { label: "Agenda", href: "/booking" },
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
