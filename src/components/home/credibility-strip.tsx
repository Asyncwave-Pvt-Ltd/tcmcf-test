import { Eyebrow } from "@/components/site/primitives";
import { BRANDS, CERTS } from "@/lib/content";

export function CredibilityStrip() {
  return (
    <section className="px-5 pt-8 pb-7 md:px-9 md:pt-12 md:pb-11 lg:px-16 lg:pt-16 lg:pb-15">
      <div className="border-b border-ink/12 pb-6.5 md:pb-8.5 lg:grid lg:grid-cols-[180px_1fr] lg:items-start lg:gap-10 lg:pb-10">
        <Eyebrow className="lg:leading-[1.6]">Partner brands</Eyebrow>
        <div className="mt-3.5 grid grid-cols-2 gap-2.5 md:mt-4.5 md:flex md:flex-wrap md:gap-3 lg:mt-0 lg:gap-3.5">
          {BRANDS.map((brand) => (
            <div
              key={brand}
              className="flex h-12 items-center justify-center border border-dashed border-ink/25 text-center font-mono text-[9px] font-normal text-bark md:h-[52px] md:w-[118px] lg:h-15 lg:w-[150px] lg:text-[10px]"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6.5 md:pt-8.5 lg:grid lg:grid-cols-[180px_1fr] lg:items-start lg:gap-10 lg:pt-9">
        <Eyebrow className="lg:leading-[1.6]">Certifications</Eyebrow>
        <div className="mt-3.5 flex flex-wrap gap-2 md:mt-4 md:gap-[9px] lg:mt-0 lg:gap-2.5">
          {CERTS.map((cert) => (
            <span
              key={cert}
              className="border border-ink/20 bg-paper px-3 py-[7px] font-serif text-[12px] font-normal text-ink transition-colors hover:bg-sage lg:px-3.5 lg:py-2 lg:text-[13px]"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
