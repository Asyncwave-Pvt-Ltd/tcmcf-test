import type { Metadata } from "next";

import { ImpactGroups } from "@/components/impact/impact-groups";
import {
  AutoGrid,
  Eyebrow,
  PageHero,
  Photo,
  StatStrip,
} from "@/components/site/primitives";
import { IMPACT_STATS, TRACEABILITY_LINE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Verified outcomes from seven years of implementation — economic, ecological, and social impact across TCMCF's farmer network.",
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="Impact at a Glance"
        lede="Verified outcomes from seven years of implementation. TCMCF is building a more rigorous monitoring and evaluation system to track farmer income change, soil health, and yield uplift every season — partners who join now get quarterly, farmer-level impact data as standard."
        className="pb-[clamp(28px,3.6cqi,56px)]"
      />

      <StatStrip stats={IMPACT_STATS} />

      <ImpactGroups />

      <section className="gutter border-y border-ink/12 bg-sage py-[clamp(32px,4.4cqi,64px)]">
        <AutoGrid min={280} gap="clamp(20px,2.2cqi,32px)" className="items-stretch">
          <Photo
            label="FIELD PHOTO — SOIL / BIOCHAR"
            tone="deep"
            boxed
            className="min-h-[clamp(180px,17cqi,260px)]"
          />
          <Photo
            label="WOMEN-LED BIO-INPUT CENTRE"
            tone="deep"
            boxed
            className="min-h-[clamp(180px,17cqi,260px)]"
          />
          <div className="flex flex-col justify-center py-[clamp(4px,1cqi,12px)]">
            <Eyebrow>Traceability</Eyebrow>
            <p className="mt-3.5 mb-0 font-serif text-[clamp(16px,1.5cqi,21px)]/[1.5] font-normal text-ink text-pretty">
              {TRACEABILITY_LINE}
            </p>
          </div>
        </AutoGrid>
      </section>
    </>
  );
}
