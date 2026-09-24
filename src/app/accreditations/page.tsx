import type { Metadata } from "next";

import { CertTable } from "@/components/accreditations/cert-table";
import { AutoGrid, PageHero, Photo } from "@/components/site/primitives";
import { CERT_MARKS, TRACEABILITY_LINE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Accreditations",
  description:
    "Eight certifications — USDA Organic, India Organic, GOTS, OC100, OEKO-TEX®, Regenagri®, FSSAI and APEDA — every claim independently verified.",
};

export default function AccreditationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Accreditations"
        title="8 Certifications. Every Claim, Third-Party Verified."
        lede="Our certifications aren't decorative — they're the gateway to premium global markets, and proof that everything we say about our supply chain is independently verified."
      >
        <div className="mt-[clamp(20px,2.2cqi,32px)] flex flex-wrap gap-2.5">
          {CERT_MARKS.map((mark) => (
            <div
              key={mark}
              className="hatch-mark flex h-[clamp(46px,4.2cqi,60px)] w-[clamp(92px,8.6cqi,124px)] items-center justify-center border border-dashed border-ink/28 text-center font-mono text-[clamp(8.5px,0.7cqi,10px)] font-normal text-bark"
            >
              {mark}
            </div>
          ))}
        </div>
      </PageHero>

      <CertTable />

      <section className="gutter border-t border-ink/12 bg-sage py-[clamp(30px,4.4cqi,64px)]">
        <AutoGrid min={300} gap="clamp(22px,3cqi,48px)" className="items-center">
          <p className="m-0 font-serif text-[clamp(17px,1.6cqi,24px)]/[1.5] font-normal text-ink text-pretty">
            {TRACEABILITY_LINE}
          </p>
          <Photo
            label="TRACEABILITY / BALE TAGGING PHOTO"
            tone="deep"
            boxed
            className="min-h-[clamp(150px,14cqi,220px)]"
          />
        </AutoGrid>
      </section>
    </>
  );
}
