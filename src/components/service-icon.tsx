import Image from "next/image";
import { serviceIconSrc, type ServiceOfferId } from "@/lib/service-offers";
import { cn } from "@/lib/utils";

type ServiceIconProps = {
  id: ServiceOfferId;
  tone?: "espresso" | "dorado";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const boxSizes = {
  sm: "size-9 rounded-lg",
  md: "size-11 rounded-xl",
  lg: "size-12 rounded-xl",
} as const;

const iconSizes = { sm: 20, md: 24, lg: 28 } as const;

export function ServiceIcon({ id, tone = "espresso", size = "md", className }: ServiceIconProps) {
  const px = iconSizes[size];

  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center border",
        tone === "dorado" ? "border-dorado/30 bg-white/5" : "border-[#e2e8f0] bg-marfil",
        boxSizes[size],
        className
      )}
    >
      <Image src={serviceIconSrc(id, tone)} alt="" width={px} height={px} aria-hidden />
    </span>
  );
}
