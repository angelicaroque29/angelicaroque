import { credibilityItems } from "@/lib/content";
import { Section } from "@/components/section";

export function Trust() {
  return (
    <Section bare className="border-y border-border/60 bg-white/50 px-5 py-4 sm:px-8 lg:px-12">
      <div className="section-inner flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {credibilityItems.map((item) => (
          <span key={item} className="trust-pill text-xs sm:text-sm">
            <span className="size-1.5 rounded-full bg-teal" />
            {item}
          </span>
        ))}
      </div>
    </Section>
  );
}
