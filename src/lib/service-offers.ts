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

export const mainOfferAccents = [
  {
    cardWash: "linear-gradient(180deg, #eef6f4 0%, #ffffff 52%)",
    iconBg: "linear-gradient(135deg, #2a9d8f 0%, #5bb8a8 100%)",
    bar: "linear-gradient(90deg, #1f7a6f, #2a9d8f)",
    chip: "bg-[#e8f5f2] text-[#1f7a6f]",
    link: "#2a9d8f",
    border: "rgb(42 157 143 / 0.22)",
    hoverShadow: "0 14px 36px rgb(42 157 143 / 0.12)",
  },
  {
    cardWash: "linear-gradient(180deg, #e8eeff 0%, #ffffff 52%)",
    iconBg: "linear-gradient(135deg, #3b4fd8 0%, #5b7db8 100%)",
    bar: "linear-gradient(90deg, #2563eb, #3b4fd8)",
    chip: "bg-[#eef2fb] text-[#3b4fd8]",
    link: "#2563eb",
    border: "rgb(59 79 216 / 0.22)",
    hoverShadow: "0 14px 36px rgb(59 79 216 / 0.12)",
  },
  {
    cardWash: "linear-gradient(180deg, #f3ecff 0%, #ffffff 52%)",
    iconBg: "linear-gradient(135deg, #7c5cc4 0%, #a07dd8 100%)",
    bar: "linear-gradient(90deg, #6d28d9, #a855f7)",
    chip: "bg-[#f0edf8] text-[#7c5cc4]",
    link: "#7c5cc4",
    border: "rgb(124 92 196 / 0.24)",
    hoverShadow: "0 14px 36px rgb(124 92 196 / 0.12)",
  },
] as const;

export const auditAccent = {
  gradient: "linear-gradient(135deg, #1e3a5f 0%, #3b4fd8 48%, #5b7db8 100%)",
  glow: "0 24px 56px rgb(59 79 216 / 0.35)",
  border: "rgb(91 125 184 / 0.5)",
} as const;

export const premiumAccent = {
  cardWash: "linear-gradient(160deg, #1e3a5f 0%, #2d4a73 50%, #3b4fd8 100%)",
  iconBg: "linear-gradient(135deg, #3b4fd8 0%, #5b7db8 100%)",
  bar: "linear-gradient(90deg, #c5d4f7, #3b4fd8, #7c5cc4)",
  chip: "bg-white/20 text-white backdrop-blur-sm",
  link: "#c5d4f7",
  border: "rgb(91 125 184 / 0.45)",
  hoverShadow: "0 20px 48px rgb(59 79 216 / 0.28)",
  badge: "bg-white/95 text-[#3b4fd8]",
} as const;

export const customAccent = {
  cardWash: "linear-gradient(135deg, #faf9f7 0%, #f0ece6 48%, #ffffff 100%)",
  iconBg: "linear-gradient(135deg, #1e3a5f 0%, #5b7db8 100%)",
  bar: "linear-gradient(90deg, #c5a572, #e8d5b5, #5b7db8)",
  chip: "bg-[#1e3a5f] text-white",
  link: "#1e3a5f",
  border: "rgb(30 58 95 / 0.28)",
  hoverShadow: "0 20px 48px rgb(30 58 95 / 0.15)",
  ring: "ring-1 ring-[#c5a572]/30",
} as const;
