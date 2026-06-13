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
    <section id="services" className="bg-beige">
      <div className="section-container">
        <SectionHeading
          title="What I build"
          subtitle="Practical websites, automations, and digital systems — tailored to how your business actually works."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <Card
                key={service.title}
                className="border-border/60 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs font-medium text-primary">
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
