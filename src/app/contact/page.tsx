import type { Metadata } from "next";

import { EnquiryForm } from "@/components/contact/enquiry-form";
import { AutoGrid, PageHero, Photo } from "@/components/site/primitives";
import { CONTACT_DETAILS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach TCMCF in Bhopal, Madhya Pradesh — whether you're a farmer, a funder, a brand, or just curious.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in Touch"
        lede="Whether you're a farmer, a funder, a brand, or just curious — we'd like to hear from you."
      />

      <section className="gutter py-[clamp(28px,3.6cqi,56px)]">
        <AutoGrid min={300} gap="clamp(24px,3.4cqi,52px)" className="items-start">
          <div className="border border-ink/14">
            {CONTACT_DETAILS.map((detail) => (
              <div
                key={detail.k}
                className="border-b border-ink/10 px-[clamp(18px,1.8cqi,26px)] py-[clamp(16px,1.5cqi,22px)]"
              >
                <div className="font-mono text-[clamp(9.5px,0.76cqi,10.5px)] font-normal tracking-[0.12em] text-bark uppercase">
                  {detail.k}
                </div>
                <div className="mt-[7px] font-serif text-[clamp(15px,1.2cqi,17px)]/[1.5] font-normal text-ink">
                  {detail.v}
                </div>
              </div>
            ))}
            <Photo
              label="MAP / OFFICE PHOTO"
              boxed
              className="min-h-[clamp(160px,15cqi,240px)] border-0"
            />
          </div>

          <EnquiryForm />
        </AutoGrid>
      </section>
    </>
  );
}
