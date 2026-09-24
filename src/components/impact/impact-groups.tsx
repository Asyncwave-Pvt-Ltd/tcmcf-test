import { AutoGrid } from "@/components/site/primitives";
import { IMPACT_GROUPS } from "@/lib/content";

/** The three impact pillars, each a bullet list behind a hairline-split grid. */
export function ImpactGroups() {
  return (
    <section className="gutter py-[clamp(32px,5cqi,76px)]">
      <AutoGrid
        min={300}
        gap="1px"
        className="border border-ink/14 bg-ink/14"
      >
        {IMPACT_GROUPS.map((group) => (
          <div
            key={group.i}
            className="bg-paper px-[clamp(20px,2cqi,28px)] py-[clamp(22px,2.2cqi,32px)] transition-colors hover:bg-sage"
          >
            <div className="font-mono text-[clamp(10px,0.83cqi,12px)] font-normal text-bark">
              {group.i}
            </div>
            <h2 className="mt-[clamp(10px,1cqi,14px)] mb-0 font-heading text-[clamp(21px,1.95cqi,28px)]/[1.2] font-normal text-ink">
              {group.t}
            </h2>
            <div className="my-[clamp(14px,1.3cqi,18px)] h-px w-8 bg-gold" />
            <ul className="m-0 flex list-none flex-col gap-[clamp(12px,1.1cqi,16px)] p-0">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-3"
                >
                  <span className="size-[5px] rounded-full bg-gold" />
                  <span className="font-serif text-[clamp(14.5px,1.15cqi,16.5px)]/[1.6] font-normal text-body">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </AutoGrid>
    </section>
  );
}
