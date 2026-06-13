import { credibilityItems } from "@/lib/content";

export function Trust() {
  return (
    <section className="border-y border-border/70 bg-surface">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-5 sm:px-6 md:gap-x-12 md:px-8">
        {credibilityItems.map((item) => (
          <div key={item} className="flex items-center gap-2.5">
            <span className="size-1.5 rounded-full bg-primary-dark" />
            <p className="text-sm font-medium text-foreground">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
