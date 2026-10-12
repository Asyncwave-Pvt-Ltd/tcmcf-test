import type { Metadata } from "next";
import { CldImage } from "@/components/site/cld-image";

import { PartnerRoutes } from "@/components/get-involved/partner-routes";
import { WorkWithUs } from "@/components/get-involved/work-with-us";
import { AutoGrid, Eyebrow, IMAGE_SKELETON } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Work with TCMCF, partner as a funder, sourcing, institutional or policy collaborator, or spend a season in the field as an intern.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <WorkWithUs />
      <PartnerRoutes />

      <section
        id="internship"
        className="anchor-offset gutter border-t border-ink/12 bg-sage py-[clamp(30px,4.4cqi,64px)]"
      >
        <AutoGrid min={300} gap="clamp(22px,3cqi,48px)" className="items-center">
          <div>
            <div className="flex flex-wrap items-baseline gap-3">
              <Eyebrow>Internship</Eyebrow>
              <Eyebrow className="tracking-normal">
                Placeholder — confirm details with TCMCF
              </Eyebrow>
            </div>
            <h2 className="mt-[clamp(12px,1.3cqi,18px)] mb-0 font-heading text-[clamp(21px,2.1cqi,30px)]/[1.22] font-normal text-ink text-pretty">
              Spend a season in the field
            </h2>
            <p className="mt-[clamp(12px,1.2cqi,18px)] mb-0 font-serif text-[clamp(15px,1.2cqi,17px)]/[1.7] font-normal text-body text-pretty">
              Spend a season in the field with TCMCF&rsquo;s agronomy, rural
              development, or supply chain teams, working directly in the tribal
              communities across Madhya Pradesh, Maharashtra, and Karnataka.
              Details on duration, eligibility, and how to apply will be added
              once confirmed.
            </p>
          </div>
          <CldImage
            placeholder={IMAGE_SKELETON}
            src="/19.png"
            alt="Intern working with farmers"
            width={1000}
            height={640}
            className="h-full min-h-[clamp(150px,14cqi,220px)] w-full border border-ink/14 object-cover"
          />
        </AutoGrid>
      </section>
    </>
  );
}
