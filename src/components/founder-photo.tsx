import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
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
        "relative overflow-hidden rounded-2xl border border-border/60 bg-surface shadow-[0_12px_40px_oklch(0.32_0.08_265/0.1)]",
        className
      )}
    >
      <Image
        src={siteConfig.images.profile}
        alt={`${siteConfig.founder}, ingeniera de software`}
        fill
        priority={priority}
        quality={100}
        unoptimized
        className={cn("object-cover object-[center_18%]", imageClassName)}
        sizes={sizes}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
    </div>
  );
}
