import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { AutoGrid, PageHero } from "@/components/site/primitives";
import { CONTACT, PARTNERS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "TCMCF's work is trusted by Bestseller, Superdry, Kiabi, ITC, WWF India, LT Foods, RSWM, OCA and IFFDC — verified and traceable, season after season.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Strategic Partners & Supporters"
        lede="TCMCF's work is trusted by leading fashion brands, food companies, conservation groups, and development organisations — not because of what we say, but because of what we deliver, verified and traceable, season after season."
      />

      <section className="gutter py-[clamp(28px,3.6cqi,56px)]">
        <AutoGrid min={250} gap="1px" className="border border-ink/14 bg-ink/14">
          {PARTNERS.map((partner) => (
            <div
              key={partner.n}
              className="bg-paper p-[clamp(20px,2cqi,28px)] transition-colors hover:bg-sage"
            >
              <div className="hatch-mark flex h-[clamp(56px,5cqi,72px)] items-center justify-center border border-dashed border-ink/25 text-center font-mono text-[clamp(9px,0.74cqi,10.5px)] font-normal tracking-[0.08em] text-bark">
                {partner.logo}
              </div>
              <h2 className="mt-[clamp(14px,1.3cqi,18px)] mb-0 font-heading text-[clamp(17px,1.4cqi,21px)]/[1.28] font-medium text-ink">
                {partner.n}
              </h2>
              <p className="mt-2 mb-0 font-serif text-[clamp(14px,1.1cqi,15.5px)]/[1.6] font-normal text-body">
                {partner.d}
              </p>
            </div>
          ))}
        </AutoGrid>
      </section>

      <section className="gutter border-t border-ink/12 bg-sage py-[clamp(30px,4.4cqi,64px)]">
        <AutoGrid min={280} gap="clamp(22px,3cqi,48px)" className="items-center">
          <div>
            <h2 className="m-0 font-heading text-[clamp(21px,2.1cqi,30px)]/[1.22] font-normal text-ink text-pretty">
              Considering a partnership?
            </h2>
            <p className="mt-[clamp(12px,1.2cqi,18px)] mb-0 font-serif text-[clamp(15px,1.2cqi,17px)]/[1.7] font-normal text-body">
              Four routes in — CSR grant, supply chain, institutional, or
              policy. Each with a clear ask and a clear return.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3.5">
            <Button asChild variant="brand" size="cta">
              <Link href="/get-involved#partner-with-us">Partner With Us</Link>
            </Button>
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-mono text-[clamp(11px,0.9cqi,13px)] text-bark hover:text-ink"
            >
              {CONTACT.email}
            </a>
          </div>
        </AutoGrid>
      </section>
    </>
  );
}
