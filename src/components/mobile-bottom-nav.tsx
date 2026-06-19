"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Home, Layers, User } from "lucide-react";
import { useLocale } from "@/lib/i18n/context";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

const tabs = [
  { href: routes.home, icon: Home, labelKey: "home" as const },
  { href: routes.services, icon: Layers, labelKey: "services" as const },
  { href: routes.about, icon: User, labelKey: "about" as const },
  { href: routes.booking, icon: Calendar, labelKey: "book" as const },
];

export function MobileBottomNav() {
  const pathname = usePathname();
  const { t } = useLocale();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#e7e2da]/90 bg-white/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label={t.nav.openMenu}
    >
      <div className="grid grid-cols-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active =
            tab.href === routes.home || tab.href === routes.services
              ? pathname === routes.home
              : pathname === tab.href;
          const label = t.nav.mobile[tab.labelKey];

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                "flex min-h-[3.75rem] flex-col items-center justify-center gap-1 px-1 py-2 text-[10px] font-semibold transition-colors",
                active ? "text-[#3b4fd8]" : "text-muted-foreground"
              )}
            >
              <span
                className={cn(
                  "flex size-9 items-center justify-center rounded-xl transition-colors",
                  active ? "bg-[#eef2fb]" : "bg-transparent"
                )}
              >
                <Icon className="size-5" strokeWidth={active ? 2.25 : 2} />
              </span>
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
