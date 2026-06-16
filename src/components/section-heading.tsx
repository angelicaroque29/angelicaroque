import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  large?: boolean;
  aside?: React.ReactNode;
};

export function SectionHeading({
  label,
  title,
  subtitle,
  className,
  align = "left",
  large = false,
  aside,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "mx-auto max-w-2xl text-center",
        align === "left" && "max-w-3xl",
        aside && "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
        className
      )}
    >
      <div className={cn(aside && "flex-1")}>
        {label && <p className="section-eyebrow">{label}</p>}
        {align === "left" && !large && <div className="accent-bar" />}
        <h2
          className={cn(
            large ? "heading-display" : "heading-editorial",
            align === "center" && "mx-auto"
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "mt-4 max-w-xl text-base leading-relaxed sm:text-lg",
              align === "center" ? "mx-auto" : "",
              "text-muted-foreground"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
      {aside}
    </div>
  );
}
