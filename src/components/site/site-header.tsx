"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "cn";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IMAGE_SKELETON } from "@/components/site/primitives";
import { CONTACT } from "@/lib/content";
import { NAV_LINKS, SUB_NAVS, isNavActive, type NavLink } from "@/lib/nav";
import Image from "next/image";

/** Highlights whichever anchored section is nearest the top of the viewport. */
function useActiveAnchor(items: readonly NavLink[] | undefined) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!items?.length) return;

    const targets = items
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-140px 0px -65% 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  // Before the observer reports, the canvas shows the first item as current.
  return active ?? items?.[0]?.href ?? null;
}

function NavItem({
  href,
  label,
  active,
  className,
}: {
  href: string;
  label: string;
  active: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "border-b pb-0.5 font-serif text-[clamp(13px,1.05cqi,15px)] font-normal whitespace-nowrap transition-colors",
        active
          ? "border-gold text-ink"
          : "border-transparent text-bark hover:text-ink",
        className,
      )}
    >
      {label}
    </Link>
  );
}

export function SiteHeader({
  cmsSubNavs = {},
}: {
  cmsSubNavs?: Record<string, readonly NavLink[]>;
}) {
  const pathname = usePathname();
  const subNav = cmsSubNavs[pathname]?.length ? cmsSubNavs[pathname] : SUB_NAVS[pathname];
  const activeAnchor = useActiveAnchor(subNav);

  return (
    <header className="sticky top-0 z-20 border-b border-ink/12 bg-paper/94 backdrop-blur-[8px]">
      <div className="gutter flex items-center justify-between gap-[clamp(12px,2cqi,32px)] py-[clamp(12px,1.25cqi,18px)]">
        <Link href="/" aria-label="TCMCF home">
          <Image
            placeholder={IMAGE_SKELETON}
            src="/logo.png"
            width={100}
            height={100}
            alt="TCMCF LOGO"
            className="h-12 w-auto"
          />
        </Link>

        {/* Tablet keeps the four `compact` links; desktop shows all six. */}
        <nav className="hidden items-center gap-[clamp(14px,2.1cqi,30px)] md:flex">
          {NAV_LINKS.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              label={link.label}
              active={isNavActive(link.href, pathname)}
              className={link.compact ? undefined : "hidden lg:inline"}
            />
          ))}
          <Button asChild variant="brand" size="nav">
            <Link href="/contact">Contact</Link>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger
            aria-label="Open menu"
            className="flex size-11 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span className="h-[1.5px] w-[22px] bg-ink" />
            <span className="h-[1.5px] w-[22px] bg-ink" />
            <span className="h-[1.5px] w-[22px] bg-ink" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[290px] bg-paper">
            <SheetHeader>
              <SheetTitle className="font-mono text-[10px] tracking-[0.14em] text-bark uppercase">
                Menu
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-5 px-5">
              {NAV_LINKS.map((link) => (
                <NavItem
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  active={isNavActive(link.href, pathname)}
                  className="self-start text-[18px]"
                />
              ))}
              <Button asChild variant="brand" size="cta" className="mt-2">
                <Link href="/contact">Contact</Link>
              </Button>
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-mono text-[11px] text-bark"
              >
                {CONTACT.email}
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {subNav ? (
        <nav className="gutter flex items-center gap-[clamp(14px,1.7cqi,24px)] overflow-x-auto border-t border-ink/12 bg-sage py-[clamp(11px,0.9cqi,14px)] font-mono text-[clamp(9.5px,0.78cqi,11px)] font-normal tracking-[0.1em] uppercase">
          {subNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "border-b pb-0.5 whitespace-nowrap transition-colors",
                activeAnchor === item.href
                  ? "border-bark text-ink"
                  : "border-transparent text-bark hover:text-ink",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
