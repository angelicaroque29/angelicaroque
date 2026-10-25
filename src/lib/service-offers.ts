import type { LucideIcon } from "lucide-react";
import { Code2, Compass, Globe, Zap } from "lucide-react";

export type ServiceOfferId = "audit" | "website" | "automation" | "saas";

export const serviceOfferIds: readonly ServiceOfferId[] = ["audit", "website", "automation", "saas"];

export const serviceOfferIcons: Record<ServiceOfferId, LucideIcon> = {
  audit: Compass,
  website: Globe,
  automation: Zap,
  saas: Code2,
};

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

/** Shared tokens — navy + teal + warm ivory only */
const navy = "#1e3a5f";
const navyMid = "#2d5278";
const teal = "#2a9d8f";
const tealLight = "#3bb3a4";
const periwinkle = "#8fa8c8";

export const offerIconBackgrounds: Record<ServiceOfferId, string> = {
  audit: `linear-gradient(145deg, ${teal} 0%, ${tealLight} 100%)`,
  website: `linear-gradient(145deg, ${navy} 0%, ${navyMid} 100%)`,
  automation: `linear-gradient(145deg, ${teal} 0%, ${tealLight} 100%)`,
  saas: `linear-gradient(145deg, ${navyMid} 0%, ${periwinkle} 100%)`,
};

export const auditAccent = {
  gradient: `linear-gradient(145deg, ${navy} 0%, #254a6e 52%, #2a6570 100%)`,
  glow: "0 16px 44px rgb(30 58 95 / 0.16)",
  border: "rgb(42 157 143 / 0.28)",
} as const;
