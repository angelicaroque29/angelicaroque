import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
