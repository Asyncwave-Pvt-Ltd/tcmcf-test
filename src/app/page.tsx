import { CredibilityStrip } from "@/components/home/credibility-strip";
import { FeaturedStory } from "@/components/home/featured-story";
import { Hero } from "@/components/home/hero";
import { StatBar } from "@/components/home/stat-bar";
import { WhatWeDo } from "@/components/home/what-we-do";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatBar />
      <WhatWeDo />
      <FeaturedStory />
      <CredibilityStrip />
    </>
  );
}
