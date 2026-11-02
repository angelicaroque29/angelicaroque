export type ServiceOfferId = "audit" | "website" | "automation" | "saas";

export const serviceOfferIds: readonly ServiceOfferId[] = ["audit", "website", "automation", "saas"];

const serviceIconNames: Record<ServiceOfferId, string> = {
  audit: "systems",
  website: "code",
  automation: "automation",
  saas: "ai",
};

export function serviceIconSrc(id: ServiceOfferId, tone: "graphite" | "white" = "graphite") {
  return `/brand/icons/svg/${serviceIconNames[id]}-${tone}.svg`;
}

export const serviceSlugs: Record<ServiceOfferId, string> = {
  audit: "consultoria",
  website: "sitio-web",
  automation: "automatizacion",
  saas: "saas",
};

export function serviceHref(id: ServiceOfferId) {
  return `/servicios/${serviceSlugs[id]}`;
}

export function serviceIdFromSlug(slug: string): ServiceOfferId | undefined {
  return serviceOfferIds.find((id) => serviceSlugs[id] === slug);
}

export const auditAccent = {
  gradient: "linear-gradient(145deg, #111820 0%, #0b2a25 55%, #063f35 100%)",
  glow: "0 16px 44px rgb(17 24 32 / 0.18)",
  border: "rgb(8 186 131 / 0.35)",
} as const;
