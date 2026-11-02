import Image from "next/image";
import { serviceIconSrc, type ServiceOfferId } from "@/lib/service-offers";
import { cn } from "@/lib/utils";

type ServiceIconProps = {
  id: ServiceOfferId;
  tone?: "graphite" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const boxSizes = {
  sm: "size-9 rounded-lg",
  md: "size-11 rounded-xl",
  lg: "size-12 rounded-xl",
} as const;

const iconSizes = { sm: 20, md: 24, lg: 28 } as const;

export function ServiceIcon({ id, tone = "graphite", size = "md", className }: ServiceIconProps) {
  const px = iconSizes[size];

  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center border",
        tone === "white" ? "border-white/25 bg-white/5" : "border-silver bg-marfil",
        boxSizes[size],
        className
      )}
    >
      <Image src={serviceIconSrc(id, tone)} alt="" width={px} height={px} aria-hidden unoptimized />
    </span>
  );
}
