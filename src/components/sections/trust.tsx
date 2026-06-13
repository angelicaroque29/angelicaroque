import {
  Briefcase,
  Globe,
  Monitor,
  Palette,
} from "lucide-react";
import { credibilityItems } from "@/lib/content";

const icons = [Briefcase, Monitor, Palette, Globe];

export function Trust() {
  return (
    <section className="border-y border-border/60 bg-white">
      <div className="section-container py-10 md:py-12">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {credibilityItems.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-border/60 bg-beige/50 px-4 py-4"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-4" />
                </div>
                <p className="text-sm font-medium leading-snug text-foreground">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
