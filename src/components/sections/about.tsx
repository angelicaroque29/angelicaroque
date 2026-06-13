import Image from "next/image";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { experienceDetails } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export function About() {
  return (
    <section id="about" className="bg-beige">
      <div className="section-container">
        <SectionHeading title="About Angie" align="left" className="mx-0" />
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-border/60 bg-white shadow-md lg:max-w-none">
            <Image
              src="/images/angelica-headshot.png"
              alt="Angelica Roque"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 80vw, 40vw"
            />
          </div>
          <div>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Hi, I&apos;m Angelica. I&apos;m a software engineer and product
              builder based in {siteConfig.location}. Online, I share my journey
              as{" "}
              <span className="font-medium text-foreground">
                {siteConfig.name}
              </span>
              : building websites, AI tools, automations, and digital products.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              I&apos;ve worked on real client websites, branding, Google
              presence, and social media foundations — and I also build my own
              software projects like OSS Network and BuilderHub.
            </p>
            <ul className="mt-8 space-y-3">
              {experienceDetails.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-foreground"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              — {siteConfig.founder}, {siteConfig.handle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
