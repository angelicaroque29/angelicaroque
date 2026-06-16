import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bare?: boolean;
  flush?: boolean;
  slide?: boolean;
  wash?: "lavender" | "teal" | "none";
};

export function Section({
  id,
  className,
  children,
  bare = false,
  flush = false,
  slide = false,
  wash = "none",
}: SectionProps) {
  const washClass =
    wash === "lavender"
      ? "section-wash-lavender"
      : wash === "teal"
        ? "section-wash-teal"
        : "";

  if (bare) {
    return (
      <section
        id={id}
        className={cn("w-full", washClass, slide && "section-slide", className)}
      >
        {children}
      </section>
    );
  }

  if (flush) {
    return (
      <section
        id={id}
        className={cn(
          "section-shell",
          washClass,
          slide && "section-slide",
          className
        )}
      >
        <div className="section-inner">{children}</div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={cn(
        "section-shell",
        washClass,
        slide && "section-slide",
        className
      )}
    >
      <div className="panel section-inner">{children}</div>
    </section>
  );
}
