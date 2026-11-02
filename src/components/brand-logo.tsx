import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  tone?: "dark" | "light";
};

/** The wordmark is part of the PNG; never rebuild it with live text. */
const sizeClasses = {
  sm: "h-7",
  md: "h-8 sm:h-9 lg:h-10",
  lg: "h-11 lg:h-12",
} as const;

export function BrandLogo({
  className,
  href = "/",
  onClick,
  size = "md",
  tone = "dark",
}: BrandLogoProps) {
  const logo = (
    <Image
      src={tone === "light" ? siteConfig.images.logoOnDark : siteConfig.images.logo}
      alt={siteConfig.name}
      width={2091}
      height={388}
      priority
      sizes="280px"
      className={cn("w-auto max-w-none object-contain object-left", sizeClasses[size])}
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
