import type { LucideIcon } from "lucide-react";
import {
  Bot,
  ClipboardList,
  Code2,
  LayoutDashboard,
  Search,
  Zap,
} from "lucide-react";

export type ServiceOfferId =
  | "audit"
  | "starter"
  | "intake"
  | "dashboard"
  | "proposals"
  | "custom";

export const serviceOfferIcons: Record<ServiceOfferId, LucideIcon> = {
  audit: Search,
  starter: Zap,
  intake: ClipboardList,
  dashboard: LayoutDashboard,
  proposals: Bot,
  custom: Code2,
};

/** Shared tokens — navy + teal + warm ivory only */
const navy = "#1e3a5f";
const navyMid = "#2d5278";
const teal = "#2a9d8f";
const tealLight = "#3bb3a4";
const periwinkle = "#8fa8c8";
const border = "rgb(231 226 218 / 0.95)";
const shadowNavy = "0 12px 32px rgb(30 58 95 / 0.07)";
const shadowTeal = "0 12px 32px rgb(42 157 143 / 0.09)";

export const mainOfferAccents = [
  {
    cardWash: "linear-gradient(180deg, #ffffff 0%, #faf8f3 100%)",
    iconBg: `linear-gradient(145deg, ${navy} 0%, ${navyMid} 100%)`,
    bar: `linear-gradient(90deg, ${teal}, ${tealLight})`,
    link: teal,
    border,
    hoverShadow: shadowNavy,
  },
  {
    cardWash: "linear-gradient(180deg, #ffffff 0%, #f7fcfb 100%)",
    iconBg: `linear-gradient(145deg, ${teal} 0%, ${tealLight} 100%)`,
    bar: `linear-gradient(90deg, ${navy}, ${navyMid})`,
    link: navy,
    border,
    hoverShadow: shadowTeal,
  },
  {
    cardWash: "linear-gradient(180deg, #ffffff 0%, #f5f8fc 100%)",
    iconBg: `linear-gradient(145deg, ${navyMid} 0%, ${periwinkle} 100%)`,
    bar: `linear-gradient(90deg, ${teal}, ${navy})`,
    link: navyMid,
    border,
    hoverShadow: shadowNavy,
  },
] as const;

export const auditAccent = {
  gradient: `linear-gradient(145deg, ${navy} 0%, #254a6e 52%, #2a6570 100%)`,
  glow: "0 16px 44px rgb(30 58 95 / 0.16)",
  border: "rgb(42 157 143 / 0.28)",
} as const;

export const premiumAccent = {
  cardWash: "linear-gradient(180deg, #f4f8f7 0%, #ffffff 55%, #eef6f4 100%)",
  iconBg: `linear-gradient(145deg, ${navy} 0%, ${teal} 100%)`,
  bar: `linear-gradient(90deg, ${teal}, ${navy})`,
  link: teal,
  border: "rgb(42 157 143 / 0.22)",
  hoverShadow: shadowTeal,
  badge: "bg-[#ddf5f1] text-[#1e3a5f]",
} as const;

export const customAccent = {
  cardWash: "linear-gradient(180deg, #ffffff 0%, #faf8f3 100%)",
  iconBg: `linear-gradient(145deg, ${navy} 0%, ${navyMid} 100%)`,
  bar: `linear-gradient(90deg, ${navy}, ${teal})`,
  chip: "bg-[#f0ece6] text-navy",
  link: navy,
  border,
  hoverShadow: shadowNavy,
  ring: "ring-1 ring-[#e7e2da]",
} as const;
