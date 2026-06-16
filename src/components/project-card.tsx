import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
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
  const tags = services ?? techTags ?? [];

  return (
    <article
      className={cn(
        "card-editorial group flex flex-col overflow-hidden p-0",
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
              : "(max-width: 768px) 100vw, 33vw"
          }
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-lg font-semibold">{name}</h3>
          {status && (
            <span className="shrink-0 rounded-full bg-teal-soft px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-navy uppercase">
              {status}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-white px-2.5 py-0.5 text-xs font-medium text-navy"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {(url || links) && (
          <div className="mt-5 flex flex-wrap gap-3">
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal transition-colors hover:text-navy"
              >
                {siteConfig.cta.visitSite}
                <ExternalLink className="size-3.5" />
              </a>
            )}
            {links?.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-ink"
              >
                {link.label}
                <ExternalLink className="size-3.5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
