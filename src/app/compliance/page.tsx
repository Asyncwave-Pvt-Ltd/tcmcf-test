import type { Metadata } from "next";

import { AutoGrid, PageHero } from "@/components/site/primitives";
import { COMPLIANCE_GROUPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Compliance & Statutory Documents",
  description:
    "TCMCF is registered as a Society under the Madhya Pradesh Society Act and compliant under Sections 12A and 80G. Annual, audit and FC reports are published here.",
};

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance & Statutory Documents"
        title="Open Books, Published"
        lede="TCMCF is registered as a Society under the Madhya Pradesh Society Act and is compliant under Sections 12A and 80G of the Income Tax Act. Reports are listed here for download as they are supplied."
      />

      <section className="gutter flex flex-col gap-[clamp(22px,2.6cqi,40px)] py-[clamp(28px,3.6cqi,56px)]">
        {COMPLIANCE_GROUPS.map((group) => (
          <div
            key={group.id}
            id={group.id}
            className="anchor-offset border border-ink/14"
          >
            <AutoGrid
              min={280}
              gap="clamp(12px,1.6cqi,28px)"
              className="border-b border-ink/14 bg-sage p-[clamp(20px,2cqi,28px)]"
            >
              <div>
                <div className="font-mono text-[clamp(9.5px,0.76cqi,11px)] font-normal tracking-[0.12em] text-bark uppercase">
                  {group.i}
                </div>
                <h2 className="mt-2.5 mb-0 font-heading text-[clamp(20px,1.9cqi,27px)]/[1.22] font-normal text-ink">
                  {group.t}
                </h2>
              </div>
              <p className="m-0 self-center font-serif text-[clamp(14px,1.15cqi,16px)]/[1.65] font-normal text-body text-pretty">
                {group.d}
              </p>
            </AutoGrid>

            {group.rows.map((row) => (
              <div
                key={`${group.id}-${row.y}`}
                className="flex flex-wrap items-center gap-[clamp(10px,1.2cqi,20px)] border-b border-ink/10 px-[clamp(20px,2cqi,28px)] py-[clamp(14px,1.4cqi,20px)] transition-colors last:border-b-0 hover:bg-sage"
              >
                <span className="min-w-24 font-mono text-[clamp(11px,0.88cqi,12.5px)] font-normal text-bark">
                  {row.y}
                </span>
                <span className="min-w-40 flex-1 font-serif text-[clamp(15px,1.2cqi,17px)]/[1.4] font-normal text-ink">
                  {row.n}
                </span>
                <span className="border border-ink/25 px-3.5 py-2 font-mono text-[clamp(11px,0.88cqi,12.5px)] font-normal text-bark">
                  PDF — AWAITING FILE
                </span>
              </div>
            ))}
          </div>
        ))}

        <p className="m-0 border border-dashed border-ink/30 p-[clamp(18px,1.8cqi,26px)] font-serif text-[clamp(13.5px,1.05cqi,15px)]/[1.65] font-normal text-body">
          Note for TCMCF: confirm whether the organisation currently holds FCRA
          registration, so the FC Annual Reports section can be worded
          accurately.
        </p>
      </section>
    </>
  );
}
