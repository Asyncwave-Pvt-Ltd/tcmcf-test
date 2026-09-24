import Link from "next/link";

import { Button } from "@/components/ui/button";
import { HomeOnly } from "@/components/site/home-only";
import { NewsletterForm } from "@/components/site/newsletter-form";
import { AutoGrid, LogoMark } from "@/components/site/primitives";
import { CONTACT } from "@/lib/content";
import { FOOTER_COLUMNS } from "@/lib/nav";

/**
 * "Grow Impact With Us" plus the site footer — one dark band, as
 * Site Footer.dc.html defines it. The CTA row shows on the home page only.
 */
export function SiteFooter() {
  return (
    <footer className="gutter bg-ink pt-[clamp(34px,5.2cqi,80px)] pb-[clamp(32px,4.4cqi,72px)]">
      <HomeOnly>
        <AutoGrid min={300} gap="clamp(26px,4cqi,56px)" className="items-end">
          <div>
            <h2 className="m-0 font-heading text-[clamp(24px,2.9cqi,44px)]/[1.14] font-normal text-paper">
              Grow Impact With Us
            </h2>
            <p className="mt-[clamp(12px,1.5cqi,22px)] mb-0 max-w-[560px] font-serif text-[clamp(15px,1.25cqi,18px)]/[1.65] font-normal text-cream">
              Whether you&rsquo;re a brand looking for traceable organic supply,
              a funder looking for verified impact, or someone who simply
              believes farmers deserve better — there&rsquo;s a place for you
              here.
            </p>
            <Button
              asChild
              variant="light"
              size="cta"
              className="mt-[clamp(20px,2.3cqi,34px)]"
            >
              <Link href="/get-involved">Partner With Us</Link>
            </Button>
          </div>
          <NewsletterForm />
        </AutoGrid>
      </HomeOnly>

      <AutoGrid
        min={210}
        gap="clamp(22px,2.8cqi,40px)"
        className="mt-[clamp(30px,5.5cqi,80px)] border-t border-paper/18 pt-[clamp(22px,2.8cqi,40px)] first:mt-0 first:border-t-0 first:pt-0"
      >
        <div>
          <LogoMark reversed />
          <p className="mt-[18px] mb-0 max-w-[340px] font-serif text-[clamp(13px,0.97cqi,14px)]/[1.7] font-normal text-clay">
            The Change Makers Charitable Foundation · Registered Society, MP
            Society Act · 12A &amp; 80G compliant
          </p>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div
            key={col.heading}
            className="flex flex-col gap-2.5 font-serif text-[clamp(13px,0.97cqi,14px)] font-normal text-cream"
          >
            <span className="font-mono text-[10px] tracking-[0.14em] text-gold uppercase">
              {col.heading}
            </span>
            {col.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}

        <div className="flex flex-col gap-2.5 font-serif text-[clamp(13px,0.97cqi,14px)] font-normal text-cream">
          <span className="font-mono text-[10px] tracking-[0.14em] text-gold uppercase">
            Contact
          </span>
          <a href={`mailto:${CONTACT.email}`} className="hover:text-paper">
            {CONTACT.email}
          </a>
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="hover:text-paper"
          >
            {CONTACT.phone}
          </a>
          <span>{CONTACT.city}</span>
          <span className="text-clay">
            LinkedIn · Instagram · Facebook · X · YouTube
          </span>
        </div>
      </AutoGrid>
    </footer>
  );
}
