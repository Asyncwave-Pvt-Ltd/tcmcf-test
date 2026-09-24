"use client";

import { useEffect, useState } from "react";
import { cn } from "cn";

import { STATS } from "@/lib/content";

const DURATION = 1700;

/** Eased count-up on mount, matching the canvas: 1.7s cubic ease-out. */
function useCountUpProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    // Respect users who ask for less motion — land on the final numbers.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      if (reduce) {
        setP(1);
        return;
      }
      const raw = Math.min(1, (t - t0) / DURATION);
      setP(1 - Math.pow(1 - raw, 3));
      if (raw < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return p;
}

export function StatBar() {
  const p = useCountUpProgress();

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
            {Math.round(stat.value * p).toLocaleString("en-IN")}
            {stat.suffix}
          </div>
          <div className="mt-2 font-mono text-[10px]/[1.5] font-normal tracking-[0.1em] text-sand uppercase md:mt-2.5 lg:mt-3 lg:text-[11px]/[1.5]">
            {stat.label}
          </div>
        </div>
      ))}
    </section>
  );
}
