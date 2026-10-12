import Image from "next/image";

import { Eyebrow, IMAGE_SKELETON } from "@/components/site/primitives";
import { BRANDS, CERTS } from "@/lib/content";

export function CredibilityStrip() {
  return (
    <section className="px-5 pt-8 pb-7 md:px-9 md:pt-12 md:pb-11 lg:px-16 lg:pt-16 lg:pb-15">
      <div className="border-b border-ink/12 pb-6.5 md:pb-8.5 lg:grid lg:grid-cols-[180px_1fr] lg:items-start lg:gap-10 lg:pb-10">
        <Eyebrow className="lg:leading-[1.6]">
          Strategic Partners &amp; Supporters
        </Eyebrow>
        <div className="mt-3.5 grid grid-cols-2 gap-2.5 md:mt-4.5 md:flex md:flex-wrap md:gap-3 lg:mt-0 lg:gap-3.5">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="relative h-12 md:h-[52px] md:w-[118px] lg:h-15 lg:w-[150px]"
            >
              <Image
                placeholder={IMAGE_SKELETON}
                src={brand.logo}
                alt={brand.name}
                fill
                sizes="150px"
                className="object-contain p-1.5"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6.5 md:pt-8.5 lg:grid lg:grid-cols-[180px_1fr] lg:items-start lg:gap-10 lg:pt-9">
        <Eyebrow className="lg:leading-[1.6]">Certifications</Eyebrow>
        <div className="mt-3.5 grid grid-cols-2 gap-2.5 md:mt-4.5 md:flex md:flex-wrap md:gap-3 lg:mt-0 lg:gap-3.5">
          {CERTS.map((cert) => (
            <div key={cert.name} className="relative h-12 md:h-[52px] md:w-[118px] lg:h-15 lg:w-[150px]">
              <Image
                placeholder={IMAGE_SKELETON}
                src={cert.logo}
                alt={cert.name}
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
