import { Check } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { FounderPhoto } from "@/components/founder-photo";
import { SectionHeading } from "@/components/section-heading";
import { experienceDetails } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export function About() {
  return (
    <section id="about" className="section-sand">
      <div className="section-container">
        <div className="surface-card overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[320px] lg:min-h-[520px]">
              <FounderPhoto
                className="absolute inset-0 rounded-none border-0 shadow-none"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <SectionHeading
                label="About"
                title="Hi, I'm Angelica"
                align="left"
                className="mx-0 mb-6"
              />
              <p className="text-base leading-relaxed text-muted-foreground">
                I&apos;m a software engineer and product builder based in{" "}
                {siteConfig.location}. Online, I share my journey as{" "}
                <span className="font-medium text-foreground">
                  {siteConfig.name}
                </span>{" "}
                — building websites, AI tools, automations, and digital products
                for businesses that want to move faster.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                By day I build internal tools and systems at American Express.
                For clients, I bring that same engineering mindset to websites,
                branding, Google presence, and custom software.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {experienceDetails.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CtaButton className="rounded-full" />
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Follow {siteConfig.handle}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
