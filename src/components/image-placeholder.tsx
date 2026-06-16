import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  label: string;
  description?: string;
  aspect?: "square" | "wide" | "portrait";
  className?: string;
};

const aspectClasses = {
  square: "aspect-square",
  wide: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
};

export function ImagePlaceholder({
  label,
  description,
  aspect = "wide",
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-primary/20 bg-gradient-to-br from-lavender/40 via-surface/80 to-mint/30 p-6 text-center",
        aspectClasses[aspect],
        className
      )}
    >
      <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <ImageIcon className="size-5" />
      </div>
      <p className="text-sm font-semibold text-foreground">{label}</p>
      {description && (
        <p className="mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
      <span className="mt-3 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-medium tracking-wide text-primary uppercase">
        Imagen pendiente
      </span>
    </div>
  );
}
