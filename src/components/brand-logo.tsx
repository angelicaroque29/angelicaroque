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

const sizes = {
  sm: { ait: "text-base", word: "text-xs", gap: "gap-0.5" },
  md: { ait: "text-lg",   word: "text-sm", gap: "gap-1"   },
  lg: { ait: "text-xl",   word: "text-sm", gap: "gap-1"   },
} as const;

export function BrandLogo({
  className,
  href = "/",
  onClick,
  size = "md",
  invert = false,
}: BrandLogoProps) {
  const s = sizes[size];

  const logo = (
    <span
      className={cn("inline-flex items-baseline font-heading leading-none", s.gap)}
      aria-label={siteConfig.name}
    >
      {/* "AIT": A and T in navy, I in gradient */}
      <span className={cn("font-bold tracking-[-0.04em]", s.ait, invert ? "text-white" : "text-navy")}>
        A
        <span
          style={{
            background: invert
              ? "linear-gradient(135deg, #a5b8f0, #7dd8d0)"
              : "linear-gradient(135deg, #3b4fd8, #2a9d8f)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          I
        </span>
        T
      </span>
      {/* "angieintech.": lighter weight */}
      <span
        className={cn(
          "font-normal tracking-normal",
          s.word,
          invert ? "text-white/75" : "text-navy/65"
        )}
      >
        angieintech.
      </span>
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "group inline-flex shrink-0 items-center transition-opacity hover:opacity-80",
          className
        )}
        aria-label={`${siteConfig.founder} · ${siteConfig.name}`}
      >
        {logo}
      </Link>
    );
  }

  return (
    <div className={cn("inline-flex shrink-0 items-center", className)}>
      {logo}
    </div>
  );
}
