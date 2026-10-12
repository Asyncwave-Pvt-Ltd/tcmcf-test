import type { Metadata } from "next";

import { EnquiryForm } from "@/components/contact/enquiry-form";
import { AutoGrid, PageHero } from "@/components/site/primitives";
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
            <iframe
              title="TCMCF office on Google Maps — Surabhi Life Space, Awadhpuri, Bhopal"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.097474088336!2d77.48360117580654!3d23.239539779022266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c41f67cf6c691%3A0x1aa27a9f449f253!2sSurabhi%20lifespaces!5e0!3m2!1sen!2sin!4v1791790676653!5m2!1sen!2sin"
              className="block h-[clamp(220px,22cqi,340px)] w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <EnquiryForm />
        </AutoGrid>
      </section>
    </>
  );
}
