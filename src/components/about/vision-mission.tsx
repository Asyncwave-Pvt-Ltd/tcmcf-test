import { Eyebrow } from "@/components/site/primitives";
import { HINDI_LINE, VALUES } from "@/lib/content";

/**
 * Desktop splits Vision | Mission into two columns and gives Our Values its own
 * band; below that the canvas folds all three into one padded block.
 */
export function VisionMission() {
  return (
    <section className="border-b border-ink/12">
      <div className="lg:grid lg:grid-cols-2">
        <div
          id="vision"
          className="anchor-offset px-5 pt-8.5 md:px-9 md:pt-14 lg:border-r lg:border-ink/12 lg:px-14 lg:pt-19 lg:pb-18 lg:pl-16"
        >
          <Eyebrow>Vision</Eyebrow>
          <p className="mt-3.5 mb-7.5 font-serif text-[22px]/[1.32] font-normal text-ink text-pretty md:mt-4.5 md:mb-10 md:text-[28px]/[1.3] lg:mb-0 lg:text-[34px]/[1.3]">
            Enhance the income of one million economically marginalised farmers
            through sustainable farm practices by 2030.
          </p>
        </div>

        <div
          id="mission"
          className="anchor-offset px-5 md:px-9 lg:px-16 lg:pt-19 lg:pb-18 lg:pl-14"
        >
          <Eyebrow>Mission</Eyebrow>
          <p className="mt-3.5 mb-0 font-serif text-[18px]/[1.45] font-normal text-ink text-pretty md:mt-4.5 md:text-[22px]/[1.4] lg:text-[26px]/[1.4]">
            Promote sustainable farming that enhances livelihoods of tribal
            communities through organic agriculture, capacity building, and
            inclusive supply chains.
          </p>

          {/* Tagline: a plain line on tablet, a ruled block on desktop. */}
          <div className="hidden md:block lg:mt-8 lg:border-t lg:border-ink/15 lg:pt-6">
            <Eyebrow className="hidden lg:block">Tagline</Eyebrow>
            <p className="mt-5 mb-0 font-serif text-[17px]/[1.5] font-normal text-bark lg:mt-3 lg:text-[20px]/[1.5] lg:text-ink">
              Sustainable Farms. Stronger Communities. — {HINDI_LINE}
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 pt-6.5 pb-8 md:px-9 md:pt-9 md:pb-13 lg:border-t lg:border-ink/12 lg:px-16 lg:pt-19 lg:pb-18">
        <h2 className="m-0 mb-10 hidden font-heading text-[34px]/[1.15] font-normal text-ink lg:block">
          Our Values
        </h2>
        <div className="grid grid-cols-1 gap-px border border-ink/14 bg-ink/14 lg:grid-cols-3 lg:gap-8 lg:border-0 lg:bg-transparent">
          {VALUES.map((value) => (
            <div
              key={value.t}
              className="bg-paper p-4.5 md:px-6 md:py-5.5 lg:border lg:border-ink/14 lg:px-6.5 lg:py-7 lg:transition-colors lg:hover:bg-sage"
            >
              <h3 className="m-0 font-heading text-[18px]/[1.3] font-medium text-ink md:text-[19px]/[1.3] lg:text-[21px]/[1.3]">
                {value.t}
              </h3>
              <p className="mt-2.5 mb-0 font-serif text-[14.5px]/[1.6] font-normal text-body md:text-[15px]/[1.6] lg:mt-3 lg:text-[16px]/[1.6]">
                {value.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
