import type { Metadata } from "next";

import { History } from "@/components/about/history";
import { Overview } from "@/components/about/overview";
import { Purpose } from "@/components/about/purpose";
import { Team } from "@/components/about/team";
import { VisionMission } from "@/components/about/vision-mission";

export const metadata: Metadata = {
  title: "About",
  description:
    "TCMCF was established in March 2019 in Bhopal, Madhya Pradesh, as an implementation-focused non-profit working at the intersection of agriculture, livelihoods, and ecology.",
};

export default function AboutPage() {
  return (
    <>
      <Overview />
      <History />
      <VisionMission />
      <Team />
      <Purpose />
    </>
  );
}
