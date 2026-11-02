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
  sm: "w-[160px]",
  md: "w-[180px] sm:w-[210px] lg:w-[230px]",
  lg: "w-[210px] lg:w-[250px]",
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
      width={1996}
      height={305}
      preload
      sizes="250px"
      className={cn("h-auto max-w-none object-contain object-left", sizeClasses[size])}
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
