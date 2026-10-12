import type { Metadata } from "next";

import { PageHero } from "@/components/site/primitives";
import { StoryCards } from "@/components/stories/story-cards";
import { getStories } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Farmers in TCMCF's network, in their own words: lower input costs, healthier soil and higher yields.",
};

export default async function StoriesPage() {
  const stories = await getStories();

  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title="Stories of Change"
        lede="27,000 farmers are changing how they grow: cutting input costs, restoring their soil and raising their yields. These are some of their stories."
        className="pb-[clamp(28px,3.6cqi,56px)]"
      />

      <section className="gutter bg-sage py-[clamp(30px,4.4cqi,64px)]">
        {stories.length ? (
          <StoryCards stories={stories} />
        ) : (
          <p className="m-0 font-serif text-[clamp(15px,1.25cqi,18px)]/[1.7] text-body">
            Stories are on their way. Check back soon.
          </p>
        )}
      </section>
    </>
  );
}
