import { cn } from "cn";

import { Eyebrow, Photo, Rule } from "@/components/site/primitives";
import { FACTS } from "@/lib/content";

const paraClass =
  "mb-0 font-serif text-[16px]/[1.7] font-normal text-body md:text-[17px]/[1.7] lg:max-w-[720px] lg:text-[18px]/[1.7]";

export function Overview() {
  return (
    <section
      id="overview"
      className="anchor-offset border-b border-ink/12 px-5 pt-8 pb-7.5 md:px-9 md:pt-13 md:pb-11 lg:px-16 lg:pt-19 lg:pb-16"
    >
      <div className="lg:grid lg:grid-cols-[1fr_400px] lg:items-start lg:gap-18">
        <div>
          <Eyebrow>About TCMCF</Eyebrow>
          <h1 className="mt-3.5 mb-0 max-w-[760px] font-heading text-[27px]/[1.2] font-normal text-ink text-pretty md:mt-4.5 md:text-[36px]/[1.18] lg:mt-5.5 lg:text-[46px]/[1.15]">
            A Not-for-Profit Working at the Intersection of Agriculture,
            Livelihoods &amp; Ecology
          </h1>
          <Rule />

          <p className={paraClass}>
            <span className="hidden md:inline">
              The Change Makers Charitable Foundation (TCMCF)
            </span>
            <span className="md:hidden">TCMCF</span> was established in March
            2019 in Bhopal, Madhya Pradesh, as an implementation-focused
            non-profit with a singular purpose: to transform livelihoods in
            India&rsquo;s tribal agricultural heartland.
          </p>

          <p className={cn(paraClass, "mt-4 hidden md:block lg:mt-5")}>
            We work directly with small and marginal farmers, predominantly from
            tribal communities, helping them move from chemical-dependent
            conventional farming to certified organic, natural, and regenerative
            practices.
            <span className="lg:hidden">
              {" "}
              Registered as a Society under the Madhya Pradesh Society Act, and
              compliant under Sections 12A and 80G, TCMCF operates through a
              70-member team working out of 5 project offices across 3 states.
            </span>
            <span className="hidden lg:inline">
              {" "}
              The result is better incomes, healthier soil, and access to
              premium global markets that were previously out of reach.
            </span>
          </p>

          <p className={cn(paraClass, "mt-5 hidden lg:block")}>
            Registered as a Society under the Madhya Pradesh Society Act, and
            compliant under Sections 12A and 80G of the Income Tax Act, TCMCF
            operates through a 70-member team working out of 5 project offices
            across 3 states.
          </p>
        </div>

        {/*
          The fact table is a hairline-separated list inside one frame on
          desktop, and a gapped card grid below it.
        */}
        <div className="mt-6 grid grid-cols-1 gap-px border border-ink/14 bg-ink/14 md:mt-8 md:grid-cols-2 lg:mt-0 lg:grid-cols-1 lg:gap-0 lg:bg-transparent">
          {FACTS.map((fact) => (
            <div
              key={fact.k}
              className="bg-paper px-4 py-3.5 md:px-5 md:py-4 lg:border-b lg:border-ink/10 lg:bg-transparent lg:px-5.5 lg:py-4.5"
            >
              <div className="font-mono text-[9.5px] font-normal tracking-[0.12em] text-bark uppercase lg:text-[10px]">
                {fact.k}
              </div>
              <div className="mt-[5px] font-serif text-[15px]/[1.45] font-normal text-ink md:mt-1.5 md:text-[16px]/[1.45] lg:text-[17px]/[1.45]">
                {fact.v}
              </div>
            </div>
          ))}
          <Photo
            label="OFFICE / TEAM PHOTO"
            tone="fine"
            className="hidden h-[220px] border-0 lg:flex"
          />
        </div>
      </div>
    </section>
  );
}
