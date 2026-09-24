import { Eyebrow } from "@/components/site/primitives";
import { PHASES } from "@/lib/content";

export function History() {
  return (
    <section
      id="history"
      className="anchor-offset border-b border-ink/12 bg-sage px-5 pt-8.5 pb-8 md:px-9 md:pt-14 md:pb-13 lg:px-16 lg:pt-20 lg:pb-18"
    >
      <Eyebrow>History</Eyebrow>
      <h2 className="mt-3.5 mb-0 max-w-[840px] font-heading text-[24px]/[1.22] font-normal text-ink md:mt-4 md:text-[30px]/[1.2] lg:mt-5 lg:text-[38px]/[1.18]">
        From One Village to a Movement Across Three States
      </h2>

      {/* The canvas tightens this paragraph at each step down. */}
      <p className="mt-3.5 mb-6.5 font-serif text-[15px]/[1.7] font-normal text-body md:hidden">
        The first ground was broken in Alirajpur, western Madhya Pradesh — home
        to one of India&rsquo;s largest concentrations of cotton-growing tribal
        communities.
      </p>
      <p className="mt-4.5 mb-9 hidden font-serif text-[17px]/[1.7] font-normal text-body md:block lg:hidden">
        TCMCF began in March 2019, when four professionals with decades of
        combined experience in agriculture and rural livelihoods set out to
        prove that tribal smallholder farmers could compete in and benefit from
        premium global markets. The first ground was broken in Alirajpur, in
        western Madhya Pradesh.
      </p>
      <p className="mt-6 mb-0 hidden max-w-[820px] font-serif text-[18px]/[1.7] font-normal text-body lg:block">
        TCMCF began in March 2019, when four professionals with decades of
        combined experience in agriculture and rural livelihoods set out to
        prove that tribal smallholder farmers could compete in and benefit from
        premium global markets, without leaving their land or their communities
        behind. The first ground was broken in Alirajpur, in western Madhya
        Pradesh, home to one of India&rsquo;s largest concentrations of
        cotton-growing tribal communities.
      </p>

      {/* A hairline runs the full width behind the per-phase 3px rules. */}
      <div className="flex flex-col gap-5.5 md:gap-7 lg:mt-13 lg:grid lg:grid-cols-3 lg:gap-8 lg:border-t lg:border-ink/25">
        {PHASES.map((phase) => (
          <div
            key={phase.years}
            className="border-t-[3px] border-bark pt-4.5 md:pt-5.5 lg:-mt-px lg:pt-6.5"
          >
            <div className="font-mono text-[10.5px] font-normal tracking-[0.1em] text-bark md:text-[11px] lg:text-[12px]">
              {phase.years}
            </div>
            <h3 className="mt-[7px] mb-0 font-heading text-[20px]/[1.2] font-medium text-ink md:mt-2 md:text-[23px]/[1.2] lg:mt-2.5 lg:text-[26px]/[1.2]">
              {phase.name}
            </h3>
            <ul className="mt-3 mb-0 list-disc pl-[17px] font-serif text-[15px]/[1.6] font-normal text-body md:mt-3.5 md:pl-4.5 md:text-[16px]/[1.65] lg:mt-4.5">
              {phase.items.map((item) => (
                <li key={item} className="mb-1.5 lg:mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-11 mb-0 hidden font-mono text-[14px] font-normal text-bark lg:block">
        2027 onward is the forward-looking roadmap — see Vision (Way Forward)
        for the Expand and 1 Million phases.
      </p>
    </section>
  );
}
