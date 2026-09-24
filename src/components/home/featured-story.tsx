"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "cn";

import { Eyebrow, Photo } from "@/components/site/primitives";
import { STORIES } from "@/lib/content";

const ROTATE_MS = 7000;

export function FeaturedStory() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setI((n) => (n + 1) % STORIES.length),
      ROTATE_MS,
    );
    return () => clearInterval(id);
  }, []);

  const story = STORIES[i];

  return (
    <section className="border-y border-ink/12 bg-sage px-5 py-9 md:px-9 md:pt-12 md:pb-6 lg:px-16 lg:pt-16 lg:pb-8">
      <div className="grid grid-cols-1 items-start md:grid-cols-[300px_1fr] md:gap-x-8 lg:grid-cols-[520px_1fr] lg:gap-x-14">
        <Eyebrow className="order-1 md:order-1 md:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1">
          Featured Story
        </Eyebrow>

        <Photo
          label="FARMER PORTRAIT"
          tone="deep"
          className="order-2 my-4 h-[200px] md:order-4 md:col-start-1 md:my-0 md:mt-7 md:h-[240px] lg:col-start-1 lg:row-span-4 lg:row-start-1 lg:mt-0 lg:h-[420px]"
        />

        <blockquote className="order-3 m-0 font-serif text-[21px]/[1.35] font-normal text-ink text-pretty md:order-2 md:col-span-2 md:mt-[18px] md:text-[26px]/[1.35] lg:col-span-1 lg:col-start-2 lg:row-start-2 lg:mt-[22px] lg:text-[30px]/[1.35]">
          &ldquo;{story.q}&rdquo;
        </blockquote>

        <div className="order-4 mt-3.5 font-mono text-[10.5px]/[1.7] font-normal text-bark md:order-3 md:col-span-2 md:mt-[18px] md:text-[11px]/[1.7] lg:col-span-1 lg:col-start-2 lg:row-start-3 lg:mt-[22px] lg:text-[12px]/[1.7]">
          {story.who}
        </div>

        <div className="order-5 md:order-5 md:col-start-2 md:mt-7 lg:col-start-2 lg:row-start-4 lg:mt-0">
          <p className="mt-4 mb-0 font-serif text-[15px]/[1.6] font-normal text-body md:mt-0 md:text-[16px]/[1.65] lg:mt-6 lg:max-w-[640px] lg:text-[17px]/[1.65]">
            {story.body}
          </p>

          <div className="mt-5 md:mt-6 lg:mt-8">
            <Link
              href="/stories"
              className="border-b border-gold pb-[3px] font-serif text-[15px] font-normal text-ink hover:text-bark"
            >
              Read the full story →
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2 md:mt-8 lg:mt-6">
        {STORIES.map((_, k) => (
          <button
            key={k}
            type="button"
            aria-label={`Show story ${k + 1}`}
            aria-current={k === i}
            onClick={() => setI(k)}
            className={cn(
              "size-2.5 cursor-pointer rounded-full border border-bark lg:size-[9px]",
              k === i ? "bg-bark" : "bg-transparent",
            )}
          />
        ))}
      </div>
    </section>
  );
}
