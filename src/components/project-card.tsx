import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  name: string;
  image: string;
  description: string;
  services?: readonly string[];
  techTags?: readonly string[];
  status?: string;
  url?: string;
  links?: readonly { label: string; url: string }[];
  featured?: boolean;
};

export function ProjectCard({
  name,
  image,
  description,
  services,
  techTags,
  status,
  url,
  links,
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "surface-card group flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg",
        featured && "md:col-span-2"
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand">
        <Image
          src={image}
          alt={`${name} project screenshot`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          sizes={
            featured
              ? "(max-width: 768px) 100vw, 66vw"
              : "(max-width: 768px) 100vw, 50vw"
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-lg font-semibold">{name}</h3>
          {status && (
            <Badge
              variant="secondary"
              className="shrink-0 border-0 bg-lavender/80 text-primary-dark"
            >
              {status}
            </Badge>
          )}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        {(services || techTags) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {services?.map((service) => (
              <Badge key={service} variant="outline" className="text-xs">
                {service}
              </Badge>
            ))}
            {techTags?.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-primary/10 bg-lavender/50 text-xs text-primary-dark"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {(url || links) && (
          <div className="mt-5 flex flex-wrap gap-2">
            {url && (
              <Button asChild size="sm" className="rounded-full">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Visit Website
                  <ExternalLink className="size-3.5" />
                </a>
              </Button>
            )}
            {links?.map((link) => (
              <Button
                key={link.url}
                asChild
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                  <ExternalLink className="size-3.5" />
                </a>
              </Button>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
