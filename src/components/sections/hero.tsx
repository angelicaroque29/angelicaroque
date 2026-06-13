import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { offerPaths } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="hero" className="hero-mesh relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-dots opacity-40" />
      <div className="section-container relative grid min-h-[calc(100vh-4rem)] items-center gap-12 pb-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-12">
        <div className="text-center lg:text-left">
          <span className="section-eyebrow fade-in-up">
            {siteConfig.handle}
          </span>
          <h1 className="fade-in-up-delay-1 mt-5 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.35rem]">
            Websites, automations, and{" "}
            <span className="text-gradient">AI-powered products</span> built by a
            real software engineer.
          </h1>
          <p className="fade-in-up-delay-2 mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I&apos;m {siteConfig.founder}, the creator behind {siteConfig.name}. I
            help service businesses and founders launch websites, digital systems,
            and products — without the agency markup.
          </p>
          <div className="fade-in-up-delay-2 mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <CtaButton />
            <CtaButton variant="secondary" href="#client-work">
              View My Work
            </CtaButton>
          </div>

          <div className="fade-in-up-delay-3 mt-8 grid grid-cols-3 gap-4 sm:hidden">
            <div className="text-center">
              <p className="font-heading text-xl font-semibold">2+</p>
              <p className="text-[10px] text-muted-foreground">Clients</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-xl font-semibold">EN/ES</p>
              <p className="text-[10px] text-muted-foreground">Bilingual</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-xl font-semibold">AmEx</p>
              <p className="text-[10px] text-muted-foreground">Engineer</p>
            </div>
          </div>

          <div className="fade-in-up-delay-3 mt-10 hidden gap-6 sm:flex lg:mt-12">
            <div>
              <p className="font-heading text-2xl font-semibold text-foreground">
                2+
              </p>
              <p className="text-xs text-muted-foreground">Client launches</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="font-heading text-2xl font-semibold text-foreground">
                EN / ES
              </p>
              <p className="text-xs text-muted-foreground">Bilingual support</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="font-heading text-2xl font-semibold text-foreground">
                AmEx
              </p>
              <p className="text-xs text-muted-foreground">Software engineer</p>
            </div>
          </div>
        </div>

        <div className="fade-in-up-delay-2 relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/70 bg-sand shadow-[0_20px_50px_oklch(0.28_0.02_45/0.12)]">
            <Image
              src="/images/angelica-headshot.png"
              alt="Angelica Roque, Angie In Tech"
              fill
              priority
              className="object-cover object-[center_18%]"
              sizes="(max-width: 1024px) 85vw, 420px"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-4 left-4 right-4 flex flex-wrap gap-2 sm:-left-5 sm:right-auto sm:max-w-xs">
            <div className="surface-card flex-1 px-4 py-3 sm:flex-none">
              <p className="text-[10px] font-medium tracking-wide text-primary uppercase">
                Based in Miami
              </p>
              <p className="mt-0.5 text-sm font-semibold text-foreground">
                Software Engineer @ AmEx
              </p>
            </div>
          </div>

          <div className="absolute -top-3 -right-3 hidden rounded-full border border-border/60 bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm sm:block">
            {siteConfig.handle}
          </div>
        </div>

        <div className="fade-in-up-delay-3 grid w-full gap-3 sm:grid-cols-3 lg:col-span-2">
          {offerPaths.map((offer) => (
            <Link
              key={offer.label}
              href={offer.href}
              className={cn(
                "surface-card group flex flex-col p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-md",
                "featured" in offer &&
                  offer.featured &&
                  "border-primary/15 bg-gradient-to-br from-lavender/60 to-surface ring-1 ring-primary/10"
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-foreground">
                  {offer.label}
                </p>
                <ArrowRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <p className="mt-1 text-xs font-medium text-primary">
                {offer.price}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {offer.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
