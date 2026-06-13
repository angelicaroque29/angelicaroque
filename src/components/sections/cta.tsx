import { CtaButton } from "@/components/cta-button";

export function Cta() {
  return (
    <section id="contact" className="bg-beige">
      <div className="section-container">
        <div className="mx-auto max-w-2xl rounded-3xl border border-border/60 bg-gradient-to-br from-white via-beige to-primary/5 px-8 py-16 text-center shadow-sm md:px-12">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Have an idea or business that needs a stronger online presence?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Book a free strategy call and I&apos;ll help you figure out the
            simplest version to launch first.
          </p>
          <div className="mt-8">
            <CtaButton />
          </div>
        </div>
      </div>
    </section>
  );
}
