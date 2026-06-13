import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const projects = [
  {
    title: "AI Booking Website for a Beauty Business",
    description:
      "Online booking, service menu, and automated appointment confirmations.",
  },
  {
    title: "Lead Capture Website for a Fitness Coach",
    description:
      "Landing page with intake form and automated follow-up workflow.",
  },
  {
    title: "Internal Dashboard for a Small Business",
    description:
      "Custom dashboard to track orders, inventory, and daily operations.",
  },
  {
    title: "MVP Landing Page for a Founder",
    description:
      "Waitlist page with email capture and early-access onboarding flow.",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-beige">
      <div className="section-container">
        <SectionHeading
          title="Selected work"
          subtitle="A preview of the kinds of projects I build for clients."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="border-border/60 bg-white shadow-sm"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-base leading-snug">
                    {project.title}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="shrink-0 bg-primary/10 text-primary"
                  >
                    Coming soon
                  </Badge>
                </div>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-32 rounded-xl bg-gradient-to-br from-beige via-white to-primary/5" />
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Real case studies coming soon.
        </p>
      </div>
    </section>
  );
}
