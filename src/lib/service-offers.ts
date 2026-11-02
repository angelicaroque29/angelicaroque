export type ServiceOfferId = "audit" | "website" | "automation" | "saas";

export const serviceOfferIds: readonly ServiceOfferId[] = ["audit", "website", "automation", "saas"];

const serviceIconNames: Record<ServiceOfferId, string> = {
  audit: "ia",
  website: "desarrollo",
  automation: "automatizacion",
  saas: "sistemas",
};

export function serviceIconSrc(id: ServiceOfferId, tone: "espresso" | "dorado" = "espresso") {
  return `/brand/iconos/${serviceIconNames[id]}-${tone}.png`;
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
  gradient: "linear-gradient(145deg, #0e1726 0%, #152238 55%, #1d4ed8 100%)",
  glow: "0 16px 44px rgb(14 23 38 / 0.18)",
  border: "rgb(14 165 233 / 0.35)",
} as const;
