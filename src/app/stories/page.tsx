import type { Metadata } from "next";

import { StoryBody } from "@/components/stories/story-body";
import {
  AutoGrid,
  Eyebrow,
  Photo,
  StatStrip,
} from "@/components/site/primitives";
import { STORY_METRICS, STORY_SLOTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Rajkumar Kishan Gore cut his input costs by 96% and raised his cotton yield 25–30% — one of 27,000 farmers walking the same path with TCMCF.",
};

export default function StoriesPage() {
  return (
    <>
      {/* This masthead carries a mono dateline instead of a lede, so it is
          written out rather than using the shared PageHero. */}
      <section className="gutter pt-[clamp(32px,5cqi,76px)]">
        <Eyebrow>Success Stories</Eyebrow>
        <h1 className="mt-[clamp(14px,1.5cqi,22px)] mb-0 max-w-[900px] font-heading text-[clamp(28px,3.2cqi,46px)]/[1.16] font-normal text-ink text-pretty">
          A Story of Change
        </h1>
        <p className="mt-[clamp(12px,1.2cqi,18px)] mb-0 font-mono text-[clamp(11px,0.9cqi,13px)]/[1.8] font-normal text-bark">
          Village Gunj, Yavatmal, Maharashtra · Rajkumar Kishan Gore, Organic
          Cotton Farmer · 3.64 Hectares
        </p>
      </section>

      <section className="gutter pt-[clamp(24px,3cqi,44px)] pb-[clamp(28px,3.6cqi,56px)]">
        <Photo
          label="LEAD PHOTO — RAJKUMAR IN HIS COTTON FIELD"
          boxed
          className="min-h-[clamp(220px,26cqi,420px)]"
        />
      </section>

      <StatStrip stats={STORY_METRICS} minColumn={150} size="sm" />

      <StoryBody />

      <section className="gutter border-t border-ink/12 bg-sage py-[clamp(30px,4.4cqi,64px)]">
        <div className="mb-[clamp(18px,2.2cqi,32px)] flex flex-wrap items-baseline justify-between gap-5">
          <h2 className="m-0 font-heading text-[clamp(21px,2.1cqi,30px)]/[1.2] font-normal text-ink">
            More stories
          </h2>
          <Eyebrow className="tracking-[0.1em]">Content to be supplied</Eyebrow>
        </div>
        <AutoGrid min={240} gap="clamp(16px,1.6cqi,24px)">
          {STORY_SLOTS.map((slot) => (
            <article
              key={slot.t}
              className="border border-ink/14 bg-paper p-[clamp(16px,1.4cqi,20px)] transition-colors hover:border-gold"
            >
              <Photo
                label="STORY PHOTO"
                tone="fine"
                className="mb-[clamp(12px,1.1cqi,16px)] min-h-[clamp(120px,11cqi,170px)]"
              />
              <h3 className="m-0 font-heading text-[clamp(16px,1.3cqi,19px)]/[1.3] font-medium text-ink">
                {slot.t}
              </h3>
              <p className="mt-2.5 mb-0 font-serif text-[clamp(13.5px,1.05cqi,15px)]/[1.6] font-normal text-body">
                {slot.d}
              </p>
            </article>
          ))}
        </AutoGrid>
      </section>
    </>
  );
}
