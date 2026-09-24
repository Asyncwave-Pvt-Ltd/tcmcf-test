import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Eyebrow, Photo, Rule } from "@/components/site/primitives";
import { HINDI_GLOSS, HINDI_LINE } from "@/lib/content";

export function Hero() {
  return (
    <section className="border-b border-ink/12 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
      <div className="px-5 pt-9 pb-8 md:px-9 md:pt-14 md:pb-12 lg:pt-20 lg:pr-14 lg:pb-18 lg:pl-16">
        <Eyebrow>The Change Makers Charitable Foundation</Eyebrow>

        <h1 className="mt-3.5 mb-0 font-heading text-[34px]/[1.1] font-normal tracking-[-0.015em] text-ink text-pretty md:mt-5 md:text-[44px]/[1.08] md:tracking-[-0.02em] lg:mt-[26px] lg:text-[56px]/[1.06]">
          <div>Sustainable Farms.</div> <div>Stronger Communities.</div>
        </h1>

        <p className="my-8 py-2 px-4 bg-sage border-b border-b-bark w-max font-serif text-[20px]/[1.5] font-normal text-bark md:block lg:text-[30px]/[1.5]">
          {HINDI_LINE}
        </p>

        <p className="m-0 font-serif text-[16px]/[1.6] font-normal text-body text-pretty md:max-w-[660px] md:text-[18px]/[1.65] lg:max-w-[560px] lg:text-[19px]/[1.65]">
          TCMCF works directly with 27,000+ small and marginal farmers, most
          from tribal communities across Madhya Pradesh, Maharashtra, and
          Karnataka, helping them move from chemical-dependent farming to
          certified organic and regenerative practices
          <span className="hidden md:inline">
            {" "}
            that raise incomes, restore soil, and open doors to global markets
          </span>
          .
        </p>

        <div className="mt-[26px] flex flex-col gap-2.5 md:mt-8 md:flex-row md:items-center md:gap-3.5 lg:mt-10 lg:gap-4">
          <Button asChild variant="brand" size="cta">
            <Link href="/get-involved">Partner With Us</Link>
          </Button>
          <Button asChild variant="brandOutline" size="ctaGhost">
            <Link href="/impact">See our impact</Link>
          </Button>
        </div>

        {/* Below desktop the hero photograph drops into the text column. */}
        <Photo
          label="HERO PHOTO"
          boxed
          className="mt-7 h-[260px] md:mt-11 md:h-[380px] lg:hidden"
        />
      </div>

      <Photo
        label="HERO PHOTO — FARMER IN FIELD"
        boxed
        className="hidden min-h-[640px] border-t-0 border-r-0 border-b-0 border-l border-ink/12 lg:flex"
      />
    </section>
  );
}
