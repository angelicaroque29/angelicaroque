import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-gradient-to-b from-sand to-cream">
      <div className="section-container py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="brand-gradient flex size-8 items-center justify-center rounded-lg text-xs font-bold text-primary-foreground">
                AiT
              </span>
              <div>
                <p className="font-heading text-sm font-semibold">
                  {siteConfig.name}
                </p>
                <p className="text-xs text-primary">{siteConfig.handle}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide text-foreground uppercase">
              Navigate
            </p>
            <nav className="mt-4 flex flex-col gap-2">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide text-foreground uppercase">
              Connect
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
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
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.founder}. All rights
            reserved.
          </p>
          <p>Built by Angie · Miami, FL</p>
        </div>
      </div>
    </footer>
  );
}
