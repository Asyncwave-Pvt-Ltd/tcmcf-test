"use client";

import { cn } from "cn";

import { RollingNumber } from "@/components/site/rolling-number";
import { STATS } from "@/lib/content";

export function StatBar() {
  return (
    <section className="bg-ink py-2 md:grid md:grid-cols-2 md:py-0 lg:grid-cols-4">
      {STATS.map((stat, i) => (
        <div
          key={stat.label}
          className={cn(
            "border-paper/14 px-5 pt-[22px] pb-5",
            i < STATS.length - 1 && "border-b",
            // Tablet: 2×2, gutter-aligned on the outer edges.
            "md:pt-8 md:pb-[30px]",
            i % 2 === 0 ? "md:pr-7 md:pl-9" : "md:pr-9 md:pl-7",
            i % 2 === 0 && "md:border-r",
            i < 2 ? "md:border-b" : "md:border-b-0",
            // Desktop: a single four-up strip.
            "lg:border-b-0 lg:pt-10 lg:pr-8 lg:pb-[38px] lg:pl-8",
            i < STATS.length - 1 && "lg:border-r",
            i === 0 && "lg:pl-16",
            i === STATS.length - 1 && "lg:pr-16",
          )}
        >
          <div className="font-serif text-[34px]/none font-normal text-paper md:text-[38px]/none lg:text-[46px]/none">
            <RollingNumber
              text={stat.value.toLocaleString("en-IN") + stat.suffix}
            />
          </div>
          <div className="mt-2 font-mono text-[10px]/[1.5] font-normal tracking-[0.1em] text-sand uppercase md:mt-2.5 lg:mt-3 lg:text-[11px]/[1.5]">
            {stat.label}
          </div>
        </div>
      ))}
    </section>
  );
}
