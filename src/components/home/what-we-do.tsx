import { CldImage } from "@/components/site/cld-image";
import Link from "next/link";
import { cn } from "cn";

import { IMAGE_SKELETON } from "@/components/site/primitives";
import { PROGRAMMES } from "@/lib/content";

export function WhatWeDo() {
  return (
    <section className="px-5 pt-10 pb-9 md:px-9 md:pt-15 md:pb-14 lg:px-16 lg:pt-22 lg:pb-20">
      <div className="mb-[22px] flex items-baseline justify-between md:mb-8 lg:mb-11">
        <h2 className="m-0 font-heading text-[27px]/[1.15] font-normal text-ink md:text-[34px]/[1.1] lg:text-[40px]/[1.1]">
          What We Do
        </h2>
        <Link
          href="/our-work"
          className="hidden font-mono text-[12px] font-normal text-bark hover:text-ink lg:inline"
        >
          All programmes →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-px border border-ink/14 bg-ink/14 lg:grid-cols-3">
        {PROGRAMMES.map((programme) => (
          <div
            key={programme.i}
            className={cn(
              "flex flex-col justify-between bg-paper px-5 py-[22px] transition-colors hover:bg-sage",
              "md:p-7",
              "lg:px-8 lg:pt-9 lg:pb-8",
            )}
          >
            <div>
              <div className="font-mono text-[10px] font-normal text-bark lg:text-[11px]">
                {programme.i}
              </div>
              <h3 className="mt-2.5 mb-0 font-heading text-[20px]/[1.25] font-medium text-ink md:mt-3 md:text-[22px]/[1.25] lg:mt-[18px] lg:text-[25px]/[1.25]">
                {programme.title}
              </h3>
              <p className="mt-2.5 mb-0 font-serif text-[15px]/[1.6] font-normal text-body md:mt-3 lg:mt-4 lg:text-[16px]/[1.6]">
                <span className="md:hidden">{programme.short}</span>
                <span className="hidden md:inline">{programme.body}</span>
              </p>
            </div>
            {/* Photo sits at the card bottom. */}
            <div className="relative mt-4 h-[110px] md:mt-5 md:h-[140px] lg:mt-7 lg:h-[150px]">
              <CldImage
                placeholder={IMAGE_SKELETON}
                src={programme.image}
                alt={programme.title}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
