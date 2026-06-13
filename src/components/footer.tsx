import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="section-container flex flex-col items-center gap-6 py-12 text-center md:py-16">
        <div>
          <p className="font-heading text-lg font-semibold text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-primary">{siteConfig.handle}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {siteConfig.founder} · {siteConfig.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <a
            href={siteConfig.social.instagram}
            className="text-muted-foreground transition-colors hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href={siteConfig.social.tiktok}
            className="text-muted-foreground transition-colors hover:text-foreground"
            target={siteConfig.social.tiktok !== "#" ? "_blank" : undefined}
            rel={
              siteConfig.social.tiktok !== "#"
                ? "noopener noreferrer"
                : undefined
            }
          >
            TikTok
          </a>
          <a
            href={siteConfig.social.youtube}
            className="text-muted-foreground transition-colors hover:text-foreground"
            target={siteConfig.social.youtube !== "#" ? "_blank" : undefined}
            rel={
              siteConfig.social.youtube !== "#"
                ? "noopener noreferrer"
                : undefined
            }
          >
            YouTube
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {siteConfig.email}
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.founder}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
