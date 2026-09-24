import { Button } from "@/components/ui/button";
import {
  AutoGrid,
  Eyebrow,
  Photo,
  Rule,
} from "@/components/site/primitives";
import { CONTACT } from "@/lib/content";

/** Careers intro beside the "Current Openings" card. */
export function WorkWithUs() {
  return (
    <section
      id="work-with-us"
      className="anchor-offset gutter border-b border-ink/12 pt-[clamp(32px,5cqi,76px)] pb-[clamp(28px,3.6cqi,56px)]"
    >
      <AutoGrid min={300} gap="clamp(24px,4cqi,64px)" className="items-start">
        <div>
          <Eyebrow>Work With Us</Eyebrow>
          <h1 className="mt-[clamp(14px,1.5cqi,22px)] mb-0 font-heading text-[clamp(28px,3.2cqi,46px)]/[1.16] font-normal text-ink text-pretty">
            Build Something That Reaches the Ground
          </h1>
          <Rule />
          <p className="m-0 font-serif text-[clamp(15px,1.25cqi,18px)]/[1.7] font-normal text-body text-pretty">
            TCMCF&rsquo;s team doesn&rsquo;t sit in a head office. Our 70 people
            work out of 5 project offices, embedded directly in the tribal
            communities they serve. If you want work that creates impact in a
            farmer&rsquo;s field, not just on a slide deck, this is that kind of
            place.
          </p>
          <p className="mt-[clamp(14px,1.3cqi,20px)] mb-0 font-serif text-[clamp(15px,1.25cqi,18px)]/[1.7] font-normal text-body text-pretty">
            We&rsquo;re looking for people across agronomy, rural development,
            supply chain, finance, and certification who bring analytical rigour,
            a collaborative approach, and a willingness to keep learning.
          </p>
        </div>

        <div className="border border-ink/14 bg-sage p-[clamp(22px,2.2cqi,32px)]">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="m-0 font-heading text-[clamp(20px,1.8cqi,26px)]/[1.2] font-normal text-ink">
              Current Openings
            </h2>
            <Eyebrow className="tracking-[0.1em]">
              TCMCF to supply roles
            </Eyebrow>
          </div>
          <p className="mt-[clamp(14px,1.3cqi,20px)] mb-0 font-serif text-[clamp(14.5px,1.15cqi,16.5px)]/[1.65] font-normal text-body">
            There are no open roles listed right now, but we&rsquo;re always glad
            to hear from people who want to do this kind of work. Send us your CV
            and we&rsquo;ll keep it on file for the next opening.
          </p>
          <div className="mt-[clamp(18px,1.8cqi,26px)] flex flex-wrap items-center gap-3">
            <Button asChild variant="brand" size="cta">
              <a href={`mailto:${CONTACT.email}?subject=CV%20submission`}>
                Send your CV
              </a>
            </Button>
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-mono text-[clamp(11px,0.88cqi,13px)] text-bark hover:text-ink"
            >
              {CONTACT.email}
            </a>
          </div>
          <Photo
            label="TEAM AT WORK — FIELD OFFICE PHOTO"
            tone="deep"
            className="mt-[clamp(20px,2cqi,28px)] min-h-[clamp(130px,12cqi,190px)]"
          />
        </div>
      </AutoGrid>
    </section>
  );
}
