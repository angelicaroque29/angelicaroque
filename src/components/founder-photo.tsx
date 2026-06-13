import Image from "next/image";
import { cn } from "@/lib/utils";

type FounderPhotoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function FounderPhoto({
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 1024px) 90vw, 420px",
}: FounderPhotoProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border/70 bg-sand shadow-[0_12px_40px_oklch(0.28_0.02_45/0.1)]",
        className
      )}
    >
      <Image
        src="/images/angelica-headshot.png"
        alt="Angelica Roque, founder of Angie In Tech"
        fill
        priority={priority}
        className={cn("object-cover object-[center_18%]", imageClassName)}
        sizes={sizes}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
    </div>
  );
}
