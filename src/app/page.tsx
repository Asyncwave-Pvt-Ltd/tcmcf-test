import { CredibilityStrip } from "@/components/home/credibility-strip";
import { FeaturedStory } from "@/components/home/featured-story";
import { Hero } from "@/components/home/hero";
import { StatBar } from "@/components/home/stat-bar";
import { WhatWeDo } from "@/components/home/what-we-do";
import { getFeaturedStories } from "@/lib/sanity";

export default async function HomePage() {
  const stories = await getFeaturedStories();

  return (
    <>
      {/* ≥1480px: hero + stat bar share one screen. Below, the hero alone fills it on desktop. */}
      <div className="min-[1480px]:flex min-[1480px]:min-h-[calc(100dvh-var(--header-h))] min-[1480px]:flex-col">
        <Hero />
        <StatBar />
      </div>
      <WhatWeDo />
      <FeaturedStory stories={stories} />
      <CredibilityStrip />
    </>
  );
}
