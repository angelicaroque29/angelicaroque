import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  invert?: boolean;
};

const heights = {
  sm: 32,
  md: 40,
  lg: 48,
} as const;

export function BrandLogo({
  className,
  href = "/",
  onClick,
  size = "md",
  invert = false,
}: BrandLogoProps) {
  const height = heights[size];

  const logo = (
    <Image
      src={siteConfig.images.logo}
      alt={siteConfig.name}
      width={320}
      height={120}
      priority
      className={cn(
        "h-auto w-auto max-w-none object-contain object-left",
        invert && "brightness-0 invert"
      )}
      style={{ height, width: "auto" }}
    />
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "group inline-flex shrink-0 items-center transition-opacity hover:opacity-85",
          className
        )}
        aria-label={siteConfig.name}
      >
        {logo}
      </Link>
    );
  }

  return <div className={cn("inline-flex shrink-0 items-center", className)}>{logo}</div>;
}
