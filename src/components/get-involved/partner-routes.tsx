import Link from "next/link";

import { Button } from "@/components/ui/button";
import { AutoGrid, Chip, Eyebrow } from "@/components/site/primitives";
import { CONTACT, PARTNER_ROUTES } from "@/lib/content";

const labelClass =
  "font-mono text-[clamp(9px,0.72cqi,10.5px)] font-normal tracking-[0.12em] text-bark uppercase";

/** The four ways to build with TCMCF, each with ask, return and focus areas. */
export function PartnerRoutes() {
  return (
    <section
      id="partner-with-us"
      className="anchor-offset gutter py-[clamp(32px,5cqi,76px)]"
    >
      <Eyebrow>Partner With Us</Eyebrow>
      <h2 className="mt-[clamp(14px,1.5cqi,20px)] mb-0 max-w-[840px] font-heading text-[clamp(24px,2.6cqi,38px)]/[1.18] font-normal text-ink text-pretty">
        Four Ways to Build With TCMCF
      </h2>
      <p className="mt-[clamp(14px,1.4cqi,22px)] mb-[clamp(24px,3cqi,44px)] max-w-[840px] font-serif text-[clamp(15px,1.25cqi,18px)]/[1.7] font-normal text-body text-pretty">
        There are four ways to work with TCMCF: as a funder, a sourcing partner,
        an institutional collaborator, or a policy partner. Each comes with a
        clear ask, a clear return, and a model that&rsquo;s already proven at
        scale. We&rsquo;re not asking you to fund an idea, we&rsquo;re asking you
        to accelerate one that already works.
      </p>

      <AutoGrid min={290} gap="1px" className="border border-ink/14 bg-ink/14">
        {PARTNER_ROUTES.map((route) => (
          <div
            key={route.i}
            className="flex flex-col gap-[clamp(14px,1.3cqi,18px)] bg-paper px-[clamp(20px,2cqi,28px)] py-[clamp(22px,2.2cqi,32px)] transition-colors hover:bg-sage"
          >
            <div className="flex items-baseline gap-2.5">
              <span className="font-mono text-[clamp(10px,0.83cqi,12px)] font-normal text-bark">
                {route.i}
              </span>
              <h3 className="m-0 font-heading text-[clamp(18px,1.5cqi,22px)]/[1.25] font-medium text-ink">
                {route.t}
              </h3>
            </div>

            <div>
              <div className={labelClass}>Ask</div>
              <p className="mt-1.5 mb-0 font-serif text-[clamp(14.5px,1.15cqi,16.5px)]/[1.55] font-normal text-ink">
                {route.ask}
              </p>
            </div>

            <div>
              <div className={labelClass}>What you get</div>
              <p className="mt-1.5 mb-0 font-serif text-[clamp(14px,1.1cqi,15.5px)]/[1.6] font-normal text-body">
                {route.get}
              </p>
            </div>

            <div className="mt-auto border-t border-ink/12 pt-[clamp(12px,1.1cqi,16px)]">
              <div className={labelClass}>Focus areas</div>
              <div className="mt-2.5 flex flex-wrap gap-[7px]">
                {route.focus.map((focus) => (
                  <Chip key={focus} className="px-2.5 py-1.5">
                    {focus}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        ))}
      </AutoGrid>

      <div className="mt-[clamp(22px,2.4cqi,36px)] flex flex-wrap items-center gap-4">
        <Button asChild variant="brand" size="cta">
          <Link href="/contact">Start the conversation</Link>
        </Button>
        <a
          href={`mailto:${CONTACT.email}`}
          className="font-mono text-[clamp(11px,0.9cqi,13px)] text-bark hover:text-ink"
        >
          {CONTACT.email}
        </a>
      </div>
    </section>
  );
}
