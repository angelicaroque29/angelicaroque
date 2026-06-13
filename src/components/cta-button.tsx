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
  children = "Book a Free Strategy Call",
  href = siteConfig.calLink,
}: CtaButtonProps) {
  const isExternal = href.startsWith("http");

  return (
    <Button
      asChild
      variant={variant === "primary" ? "default" : "outline"}
      size={size}
      className={cn(
        size === "lg" && "h-11 px-6 text-sm",
        variant === "primary" &&
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        variant === "secondary" &&
          "border-border bg-white hover:bg-beige",
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
