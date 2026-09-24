import { AutoGrid, Photo } from "@/components/site/primitives";
import { STORY_PARAS } from "@/lib/content";

/** The long read: narrative column beside the pull quote and supporting photos. */
export function StoryBody() {
  return (
    <section className="gutter py-[clamp(32px,5cqi,76px)]">
      <AutoGrid min={320} gap="clamp(24px,4cqi,60px)" className="items-start">
        <div className="flex flex-col gap-[clamp(14px,1.3cqi,20px)]">
          {STORY_PARAS.map((para) => (
            <p
              key={para.slice(0, 40)}
              className="m-0 font-serif text-[clamp(15px,1.25cqi,18px)]/[1.75] font-normal text-body text-pretty"
            >
              {para}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-[clamp(18px,2cqi,28px)]">
          <figure className="m-0 border border-ink/14 bg-sage p-[clamp(22px,2.2cqi,32px)]">
            <blockquote className="m-0 font-serif text-[clamp(19px,1.8cqi,26px)]/[1.4] font-normal text-ink text-pretty">
              &ldquo;Chemical pesticides were destroying my soil and my health.
              Today, I make my own inputs, for a fraction of the cost. Now we
              know how to make our own inputs. Our costs have come down. Our
              production has gone up.&rdquo;
            </blockquote>
            <figcaption className="mt-[clamp(14px,1.3cqi,20px)] font-mono text-[clamp(10.5px,0.83cqi,12px)] font-normal text-bark">
              — Rajkumar Kishan Gore
            </figcaption>
          </figure>
          <Photo
            label="PORTRAIT — RAJKUMAR"
            tone="fine"
            className="min-h-[clamp(180px,18cqi,280px)]"
          />
          <Photo
            label="BIO-INPUT PREPARATION"
            tone="fine"
            className="min-h-[clamp(150px,15cqi,230px)]"
          />
        </div>
      </AutoGrid>

      <p className="mt-[clamp(26px,3cqi,44px)] mb-0 max-w-[760px] font-serif text-[clamp(17px,1.6cqi,23px)]/[1.5] font-normal text-ink text-pretty">
        Rajkumar&rsquo;s story is the model. 27,000 more farmers are walking the
        same path. Support this work at changemakers.org.in.
      </p>
    </section>
  );
}
