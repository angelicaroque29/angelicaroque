import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectCardProps = {
  name: string;
  image: string;
  description: string;
  services?: readonly string[];
  techTags?: readonly string[];
  status?: string;
  url?: string;
  links?: readonly { label: string; url: string }[];
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
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden border-border/60 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-beige">
        <Image
          src={image}
          alt={`${name} project screenshot`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-lg">{name}</CardTitle>
          {status && (
            <Badge
              variant="secondary"
              className="shrink-0 bg-primary/10 text-primary"
            >
              {status}
            </Badge>
          )}
        </div>
        <CardDescription className="leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        {services && (
          <div className="flex flex-wrap gap-2">
            {services.map((service) => (
              <Badge key={service} variant="outline" className="text-xs">
                {service}
              </Badge>
            ))}
          </div>
        )}
        {techTags && (
          <div className="flex flex-wrap gap-2">
            {techTags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      {(url || links) && (
        <CardFooter className="flex flex-wrap gap-2 border-t-0 bg-transparent pt-0">
          {url && (
            <Button asChild variant="default" size="sm">
              <a href={url} target="_blank" rel="noopener noreferrer">
                Visit Website
                <ExternalLink className="size-3.5" />
              </a>
            </Button>
          )}
          {links?.map((link) => (
            <Button key={link.url} asChild variant="outline" size="sm">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
                <ExternalLink className="size-3.5" />
              </a>
            </Button>
          ))}
        </CardFooter>
      )}
    </Card>
  );
}
