import { Check } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { packages } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Packages() {
  return (
    <section id="packages" className="bg-white">
      <div className="section-container">
        <SectionHeading
          title="Packages"
          subtitle="Transparent starting points — final pricing depends on scope, timeline, and complexity."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={cn(
                "flex flex-col border-border/60 bg-white shadow-sm",
                pkg.highlighted &&
                  "ring-2 ring-primary/40 shadow-md md:scale-[1.02]"
              )}
            >
              <CardHeader>
                <CardTitle className="text-xl">{pkg.name}</CardTitle>
                <p className="mt-2 font-heading text-3xl font-semibold text-foreground">
                  starting at{" "}
                  <span className="text-primary">{pkg.price}</span>
                </p>
                <CardDescription className="mt-2 leading-relaxed">
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="border-t-0 bg-transparent pt-0">
                <CtaButton
                  variant={pkg.highlighted ? "primary" : "secondary"}
                  className="w-full"
                >
                  Get Started
                </CtaButton>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Final pricing depends on scope, timeline, and complexity. Every project
          is scoped during our free strategy call.
        </p>
      </div>
    </section>
  );
}
