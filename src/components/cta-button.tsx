import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  variant?: "primary" | "secondary" | "teal" | "ghost";
  size?: "default" | "lg";
  className?: string;
  children?: React.ReactNode;
  href?: string;
  showArrow?: boolean;
};

export function CtaButton({
  variant = "primary",
  size = "lg",
  className,
  children = siteConfig.cta.book,
  href = "#booking",
  showArrow = false,
}: CtaButtonProps) {
  const isExternal = href.startsWith("http");

  const variantClass =
    variant === "primary"
      ? "btn-primary"
      : variant === "teal"
        ? "btn-teal"
        : variant === "ghost"
          ? "btn-ghost"
          : "btn-ghost";

  const sizeClass = size === "lg" ? "h-12 px-7 text-sm" : "h-10 px-5 text-sm";

  const inner = (
    <>
      {children}
      {showArrow && <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  const classes = cn("group", variantClass, sizeClass, className);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
