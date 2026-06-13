import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
  className?: string;
  children?: React.ReactNode;
  href?: string;
};

export function CtaButton({
  variant = "primary",
  size = "lg",
  className,
  children = "Book Appointment",
  href = siteConfig.calLink,
}: CtaButtonProps) {
  const isExternal = href.startsWith("http");

  return (
    <Button
      asChild
      variant={variant === "primary" ? "default" : "outline"}
      size={size}
      className={cn(
        size === "lg" && "h-11 px-6 text-sm font-medium",
        variant === "primary" &&
          "brand-gradient glow-soft rounded-full border-0 text-primary-foreground hover:brightness-105",
        variant === "secondary" &&
          "rounded-full border-border/80 bg-surface/90 text-foreground backdrop-blur-sm hover:border-primary/25 hover:bg-lavender/60",
        className
      )}
    >
      {isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <Link href={href}>{children}</Link>
      )}
    </Button>
  );
}
