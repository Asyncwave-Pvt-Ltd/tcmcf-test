import { Eyebrow, Photo } from "@/components/site/primitives";
import { FOUNDERS, LEADERS, TEAM } from "@/lib/content";

import { MemberDialog, MemberTrigger } from "./member-dialog";

const nameClass = "m-0 font-serif font-medium text-ink";
const roleClass = "mt-[5px] font-mono font-normal text-bark";
const bioClass = "mb-0 font-serif font-normal text-body";
const cardClass =
  "relative border border-ink/14 bg-paper transition-colors hover:border-ink/40";

export function Team() {
  return (
    <section
      id="team"
      className="anchor-offset border-b border-ink/12 bg-sage px-5 pt-8.5 pb-8 md:px-9 md:pt-14 md:pb-13 lg:px-16 lg:pt-19 lg:pb-18"
    >
      <div className="flex flex-wrap items-baseline gap-4">
        <h2 className="m-0 font-heading text-[24px]/[1.22] font-normal text-ink md:text-[28px]/[1.2] lg:text-[34px]/[1.15]">
          The People Building TCMCF&rsquo;s Model
          <span className="hidden md:inline"> on the Ground</span>
        </h2>
        <span className="hidden font-mono text-[11px] font-normal text-bark lg:inline">
          PHOTOGRAPHS TO BE ADDED
        </span>
      </div>

      <p className="mt-3 mb-6 font-serif text-[15px]/[1.7] font-normal text-body md:mt-3.5 md:mb-8 md:text-[16px]/[1.7] lg:mt-5 lg:mb-11 lg:max-w-[780px] lg:text-[18px]/[1.7]">
        <span className="md:hidden">
          A 70-member team across agronomy, rural development, finance, and
          supply chain.{" "}
        </span>
        <span className="hidden md:inline">
          TCMCF&rsquo;s 70-member team works across agronomy, rural development,
          finance, and supply chain
          <span className="lg:hidden">. </span>
          <span className="hidden lg:inline">
            {" "}
            — with field staff embedded directly in the tribal communities they
            serve.
          </span>
        </span>
        <span className="font-mono text-[9.5px] text-bark md:text-[10px] lg:hidden">
          PHOTO<span className="hidden md:inline">GRAPH</span>S TO BE ADDED
        </span>
      </p>

      {/* Desktop separates founders from the leadership team (design 1d). */}
      <div className="hidden lg:block">
        <Eyebrow className="mb-5">Founders</Eyebrow>
        <div className="mb-12 grid grid-cols-2 gap-7">
          {FOUNDERS.map((member) => (
            <MemberDialog key={member.n} member={member}>
              <div
                className={`${cardClass} grid grid-cols-[150px_1fr] gap-6 p-6`}
              >
                <Photo label="PORTRAIT" tone="fine" className="aspect-4/5" />
                <div>
                  <h3 className={`${nameClass} text-[22px]/[1.25]`}>
                    <MemberTrigger>{member.n}</MemberTrigger>
                  </h3>
                  <div className={`${roleClass} text-[11px]/[1.5]`}>
                    {member.r}
                  </div>
                  <p className={`${bioClass} mt-3.5 text-[15px]/[1.6]`}>
                    {member.d}
                  </p>
                </div>
              </div>
            </MemberDialog>
          ))}
        </div>

        <Eyebrow className="mb-5">Leadership Team</Eyebrow>
        <div className="flex flex-wrap justify-center gap-7">
          {LEADERS.map((member) => (
            <MemberDialog key={member.n} member={member}>
              <div
                className={`${cardClass} grid w-[calc((100%-3.5rem)/3)] grid-cols-[100px_1fr] gap-4 p-5`}
              >
                <Photo label="PORTRAIT" tone="fine" className="aspect-4/5" />
                <div>
                  <h3 className={`${nameClass} text-[18px]/[1.25]`}>
                    <MemberTrigger>{member.n}</MemberTrigger>
                  </h3>
                  <div className={`${roleClass} text-[10.5px]/[1.5]`}>
                    {member.r}
                  </div>
                  <p
                    className={`${bioClass} mt-2.5 line-clamp-3 text-[14px]/[1.6]`}
                  >
                    {member.d}
                  </p>
                </div>
              </div>
            </MemberDialog>
          ))}
        </div>
      </div>

      {/* Tablet and mobile show one flat roster (design 1e / 1f). */}
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-5 lg:hidden">
        {TEAM.map((member) => (
          <MemberDialog key={member.n} member={member}>
            <div
              className={`${cardClass} grid grid-cols-[96px_1fr] gap-4 p-4 md:block md:p-5`}
            >
              <Photo
                label="PORTRAIT"
                tone="fine"
                className="aspect-4/5 md:mb-4"
              />
              <div>
                <h3
                  className={`${nameClass} text-[17px]/[1.25] md:text-[19px]/[1.25]`}
                >
                  <MemberTrigger>{member.n}</MemberTrigger>
                </h3>
                <div
                  className={`${roleClass} text-[10px]/[1.5] md:text-[10.5px]/[1.5]`}
                >
                  {member.r}
                </div>
                <p
                  className={`${bioClass} mt-2 text-[14px]/[1.55] md:mt-2.5 md:text-[14px]/[1.6]`}
                >
                  {member.short}
                </p>
              </div>
            </div>
          </MemberDialog>
        ))}
      </div>
    </section>
  );
}
