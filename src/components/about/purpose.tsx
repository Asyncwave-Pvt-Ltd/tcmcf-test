import { Eyebrow } from "@/components/site/primitives";
import { CRISES } from "@/lib/content";

export function Purpose() {
  return (
    <section
      id="purpose"
      className="anchor-offset px-5 pt-8.5 pb-8 md:px-9 md:pt-14 md:pb-13 lg:px-16 lg:pt-19 lg:pb-18"
    >
      <Eyebrow className="hidden lg:block">Purpose</Eyebrow>
      <h2 className="m-0 font-heading text-[24px]/[1.22] font-normal text-ink md:text-[28px]/[1.2] lg:mt-5 lg:text-[34px]/[1.15]">
        Why We Do What We Do
      </h2>

      <p className="mt-3 mb-6 font-serif text-[15px]/[1.7] font-normal text-body md:hidden">
        Six crises that compound one another, concentrated in exactly the tribal
        geographies most programmes don&rsquo;t reach.
      </p>
      <p className="mt-4 mb-8 hidden font-serif text-[17px]/[1.7] font-normal text-body md:block lg:mt-5 lg:mb-11 lg:max-w-[820px] lg:text-[18px]/[1.7]">
        India&rsquo;s tribal farming communities face a set of crises that
        compound one another, and TCMCF works at the intersection of all of
        them.
      </p>

      <div className="grid grid-cols-1 gap-px border border-ink/14 bg-ink/14 md:grid-cols-2 lg:grid-cols-3">
        {CRISES.map((crisis) => (
          <div
            key={crisis.i}
            className="bg-paper p-4.5 transition-colors hover:bg-sage md:px-6 md:py-5.5 lg:px-7 lg:py-7.5"
          >
            <div className="font-mono text-[9.5px] font-normal text-bark md:text-[10px] lg:text-[11px]">
              {crisis.i}
            </div>
            <h3 className="mt-2 mb-0 font-heading text-[17.5px]/[1.3] font-medium text-ink md:mt-2.5 md:text-[19px]/[1.3] lg:mt-3.5 lg:text-[21px]/[1.3]">
              {crisis.t}
            </h3>
            <p className="mt-2 mb-0 font-serif text-[14.5px]/[1.6] font-normal text-body md:mt-2.5 md:text-[15px]/[1.6] lg:mt-3 lg:text-[16px]/[1.6]">
              {crisis.d}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-9 mb-0 hidden max-w-[820px] font-serif text-[18px]/[1.7] font-normal text-ink lg:block">
        These six crises reinforce each other, concentrated in exactly the
        tribal geographies most programmes don&rsquo;t reach. TCMCF&rsquo;s
        approach is built to break all six cycles at once.
      </p>
    </section>
  );
}
