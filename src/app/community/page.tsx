import type { Metadata } from "next";

import {
  AutoGrid,
  Chip,
  Eyebrow,
  PageHero,
  Photo,
  StatStrip,
} from "@/components/site/primitives";
import {
  COMMUNITY_STATS,
  FPO_SERVICES,
  WOMEN_STATS,
} from "@/lib/content";

const sectionHeading =
  "mt-[clamp(12px,1.3cqi,18px)] mb-0 font-heading text-[clamp(22px,2.2cqi,32px)]/[1.2] font-normal text-ink text-pretty";
const sectionBody =
  "mt-[clamp(14px,1.3cqi,20px)] mb-0 font-serif text-[clamp(15px,1.2cqi,17px)]/[1.7] font-normal text-body text-pretty";

export const metadata: Metadata = {
  title: "Community / Institution",
  description:
    "The Alirajpur & Jhabua cotton cluster: 8,000 organic cotton farmers, 15 FPOs and cooperatives, 26 Farmer Groups, and women-led bio-input centres.",
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community / Institution"
        title="The Institutions Farmers Own"
        lede="TCMCF's flagship geography is the Alirajpur & Jhabua cotton cluster in Madhya Pradesh — a region that is home to 95% of the state's cotton growers, predominantly the Bhil tribal community, where 8,000 organic cotton farmers work across 15,000 hectares."
        className="pb-[clamp(28px,3.6cqi,56px)]"
      />

      <StatStrip stats={COMMUNITY_STATS} minColumn={180} size="md" />

      <section
        id="fpc-tribal"
        className="anchor-offset gutter py-[clamp(32px,5cqi,76px)]"
      >
        <AutoGrid min={320} gap="clamp(24px,3.4cqi,52px)" className="items-start">
          <div>
            <Eyebrow>FPC (Tribal)</Eyebrow>
            <h2 className={sectionHeading}>
              Institutions built to run themselves
            </h2>
            <p className={sectionBody}>
              TCMCF supports 15 FPOs and cooperatives and 26 Farmer Groups
              (roughly 500 members each), providing FPO governance and management
              support, value chain studies, business planning, financial
              literacy, and digital record-keeping so these institutions can run
              themselves.
            </p>
            <div className="mt-[clamp(16px,1.6cqi,24px)] flex flex-wrap gap-2">
              {FPO_SERVICES.map((service) => (
                <Chip key={service} className="bg-transparent">
                  {service}
                </Chip>
              ))}
            </div>
          </div>
          <Photo
            label="FPO MEETING — ALIRAJPUR"
            boxed
            className="min-h-[clamp(200px,20cqi,320px)]"
          />
        </AutoGrid>
      </section>

      <section
        id="women-led-fpc"
        className="anchor-offset gutter border-y border-ink/12 bg-sage py-[clamp(32px,4.6cqi,68px)]"
      >
        <AutoGrid min={320} gap="clamp(24px,3.4cqi,52px)" className="items-start">
          <Photo
            label="WOMEN-LED BIO-INPUT CENTRE"
            tone="deep"
            boxed
            className="min-h-[clamp(200px,20cqi,320px)]"
          />
          <div>
            <Eyebrow>Women-led FPC</Eyebrow>
            <h2 className={sectionHeading}>
              Not just working the land — owning what it produces
            </h2>
            <p className={sectionBody}>
              We back women-run bio-input production centres and put women into
              FPO leadership roles, so they&rsquo;re not just working the land,
              they&rsquo;re building and owning what it produces.
            </p>
            <p className={sectionBody}>
              This includes women-led FPOs, bio-input production centres
              generating 1.2 lakh litres of organic inputs a year, biochar units,
              seed production, and leadership training. Two women-led bio-input
              centres are currently operational.
            </p>
            <AutoGrid
              min={140}
              gap="1px"
              className="mt-[clamp(18px,1.8cqi,26px)] border border-ink/16 bg-ink/16"
            >
              {WOMEN_STATS.map((stat) => (
                <div
                  key={stat.k}
                  className="bg-paper p-[clamp(14px,1.3cqi,18px)]"
                >
                  <div className="font-serif text-[clamp(20px,1.8cqi,26px)]/none font-normal text-ink">
                    {stat.v}
                  </div>
                  <div className="mt-2 font-mono text-[clamp(9px,0.74cqi,10.5px)]/[1.5] font-normal tracking-[0.08em] text-bark uppercase">
                    {stat.k}
                  </div>
                </div>
              ))}
            </AutoGrid>
          </div>
        </AutoGrid>
      </section>

      <section
        id="shgs"
        className="anchor-offset gutter py-[clamp(28px,4cqi,60px)]"
      >
        <AutoGrid
          min={260}
          gap="clamp(16px,2cqi,32px)"
          className="items-center border border-dashed border-ink/30 p-[clamp(22px,2.4cqi,36px)]"
        >
          <div>
            <Eyebrow>SHGs</Eyebrow>
            <h2 className="mt-2.5 mb-0 font-heading text-[clamp(20px,1.9cqi,27px)]/[1.22] font-normal text-ink">
              Self-Help Groups
            </h2>
          </div>
          <p className="m-0 font-serif text-[clamp(14px,1.15cqi,16px)]/[1.65] font-normal text-body">
            Content to be added. This section will cover TCMCF&rsquo;s work with
            Self-Help Groups — structure, membership, and the savings and
            enterprise activity they support.
          </p>
        </AutoGrid>
      </section>
    </>
  );
}
