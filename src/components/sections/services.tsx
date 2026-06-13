import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/content";
import { Bot, Code2, Globe, Layout } from "lucide-react";

const icons = [Layout, Bot, Code2, Globe];

export function Services() {
  return (
    <section id="services" className="section-cream">
      <div className="section-container">
        <SectionHeading
          label="Services"
          title="What I build for clients"
          subtitle="From a simple website to a full digital foundation or custom product — scoped to what you actually need."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <Card
                key={service.title}
                className="surface-card group border-0 bg-surface transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <CardHeader className="pb-2">
                  <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-lavender to-blush/50 text-primary transition-colors group-hover:from-primary-light group-hover:to-lavender">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="rounded-lg bg-sand px-3 py-2 text-xs font-medium text-primary-dark">
                    {service.audience}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
