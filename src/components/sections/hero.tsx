import Image from "next/image";
import { CtaButton } from "@/components/cta-button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="hero" className="hero-gradient">
      <div className="section-container grid min-h-[calc(100vh-4rem)] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <p className="fade-in-up mb-4 text-sm font-medium tracking-wide text-primary">
            {siteConfig.handle} · Software Engineer · Miami
          </p>
          <h1 className="fade-in-up-delay-1 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
            Websites, automations, and AI-powered products built by a real
            software engineer.
          </h1>
          <p className="fade-in-up-delay-2 mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I&apos;m {siteConfig.founder}, the creator behind{" "}
            <span className="font-medium text-foreground">{siteConfig.name}</span>
            . I help businesses and founders turn ideas into clean websites,
            digital systems, and products that are ready to launch.
          </p>
          <div className="fade-in-up-delay-2 mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <CtaButton />
            <CtaButton variant="secondary" href="#client-work">
              View My Work
            </CtaButton>
          </div>
        </div>

        <div className="fade-in-up-delay-2 relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/60 bg-white shadow-lg">
            <Image
              src="/images/angelica-headshot.png"
              alt="Angelica Roque, Angie In Tech"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 80vw, 40vw"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl border border-border/60 bg-white px-4 py-3 shadow-md">
            <p className="text-xs text-muted-foreground">Software Engineer</p>
            <p className="font-heading text-sm font-semibold text-foreground">
              American Express
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
