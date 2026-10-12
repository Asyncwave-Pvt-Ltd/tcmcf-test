import type { Metadata } from "next";

import { AutoGrid, PageHero } from "@/components/site/primitives";
import { getComplianceSections, type ComplianceDocument } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Compliance & Statutory Documents",
  description:
    "TCMCF is registered as a Society under the Madhya Pradesh Society Act and compliant under Sections 12A and 80G. Annual, audit and FC reports are published here.",
};

const formatSize = (bytes: number) =>
  bytes < 1e6 ? `${Math.max(1, Math.round(bytes / 1e3))} KB` : `${(bytes / 1e6).toFixed(1)} MB`;

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

function DocumentRow({ doc }: { doc: ComplianceDocument }) {
  return (
    <div className="flex flex-wrap items-center gap-[clamp(10px,1.2cqi,20px)] border-b border-ink/10 px-[clamp(20px,2cqi,28px)] py-[clamp(14px,1.4cqi,20px)] transition-colors last:border-b-0 hover:bg-sage">
      <span className="min-w-24 font-mono text-[clamp(11px,0.88cqi,12.5px)] font-normal text-bark">
        {doc.period}
      </span>
      <span className="min-w-40 flex-1 font-serif text-[clamp(15px,1.2cqi,17px)]/[1.4] font-normal text-ink">
        {doc.title}
        {doc.publishedAt ? (
          <span className="mt-1 block font-mono text-[clamp(10px,0.8cqi,11px)] text-bark">
            Published {formatDate(doc.publishedAt)}
          </span>
        ) : null}
      </span>
      {doc.file ? (
        // `?dl=` makes Sanity's CDN serve it as a download under its original filename.
        <a
          href={`${doc.file.url}?dl=`}
          className="border border-ink/40 px-3.5 py-2 font-mono text-[clamp(11px,0.88cqi,12.5px)] font-normal text-ink uppercase transition-colors hover:border-gold hover:bg-paper"
        >
          Download {doc.file.extension} · {formatSize(doc.file.size)} ↓
        </a>
      ) : null}
    </div>
  );
}

export default async function CompliancePage() {
  // Only the document sections come from the CMS; the rest of the page is copy.
  const sections = await getComplianceSections();

  return (
    <>
      <PageHero
        eyebrow="Compliance & Statutory Documents"
        title="Open Books, Published"
        lede="TCMCF is registered as a Society under the Madhya Pradesh Society Act and is compliant under Sections 12A and 80G of the Income Tax Act. Reports are listed here for download as they are supplied."
      />

      <section className="gutter flex flex-col gap-[clamp(22px,2.6cqi,40px)] py-[clamp(28px,3.6cqi,56px)]">
        {sections.map((section) => (
          <div
            key={section._id}
            id={section.anchor}
            className="anchor-offset border border-ink/14"
          >
            <AutoGrid
              min={280}
              gap="clamp(12px,1.6cqi,28px)"
              className="border-b border-ink/14 bg-sage p-[clamp(20px,2cqi,28px)] last:border-b-0"
            >
              <div>
                {section.number ? (
                  <div className="mb-2.5 font-mono text-[clamp(9.5px,0.76cqi,11px)] font-normal tracking-[0.12em] text-bark uppercase">
                    {section.number}
                  </div>
                ) : null}
                <h2 className="m-0 font-heading text-[clamp(20px,1.9cqi,27px)]/[1.22] font-normal text-ink">
                  {section.title}
                </h2>
              </div>
              {section.description ? (
                <p className="m-0 self-center font-serif text-[clamp(14px,1.15cqi,16px)]/[1.65] font-normal text-body text-pretty">
                  {section.description}
                </p>
              ) : null}
            </AutoGrid>

            {section.documents?.map((doc) => (
              <DocumentRow key={doc._key} doc={doc} />
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
