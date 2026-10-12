import Image from "next/image";
import Link from "next/link";
import { cn } from "cn";

import { IMAGE_SKELETON, Photo } from "@/components/site/primitives";
import type { StoryCard } from "@/lib/sanity";

/**
 * Linked story cards: one per row on small screens, two on wide ones.
 * `compact` fits three to a row on large screens, with a clamped summary.
 */
export function StoryCards({
  stories,
  compact = false,
}: {
  stories: StoryCard[];
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2",
        compact ? "gap-[clamp(16px,1.6cqi,24px)] lg:grid-cols-3" : "gap-[clamp(16px,2cqi,32px)]",
      )}
    >
      {stories.map((card) => (
        <Link
          key={card.slug}
          href={`/stories/${card.slug}`}
          className={cn(
            "group flex flex-col border border-ink/14 bg-paper transition-colors hover:border-gold",
            compact ? "p-[clamp(14px,1.3cqi,20px)]" : "p-[clamp(16px,1.8cqi,26px)]",
          )}
        >
          {card.image ? (
            <div className="relative mb-[clamp(12px,1.3cqi,22px)] aspect-video">
              <Image
                placeholder={IMAGE_SKELETON}
                src={card.image}
                alt={card.alt ?? ""}
                fill
                sizes={
                  compact
                    ? "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    : "(min-width: 768px) 50vw, 100vw"
                }
                className="object-cover"
              />
            </div>
          ) : (
            <Photo
              label="STORY PHOTO"
              tone="fine"
              className="mb-[clamp(12px,1.3cqi,22px)] aspect-video"
            />
          )}
          <h3
            className={cn(
              "m-0 font-heading font-medium text-ink text-pretty",
              compact
                ? "text-[clamp(17px,1.4cqi,20px)]/[1.3]"
                : "text-[clamp(19px,1.7cqi,25px)]/[1.25]",
            )}
          >
            {card.title}
          </h3>
          <p
            className={cn(
              "mb-0 font-mono font-normal text-bark",
              compact
                ? "mt-1.5 text-[clamp(10.5px,0.8cqi,11.5px)]/[1.6]"
                : "mt-2 text-[clamp(11px,0.88cqi,12.5px)]/[1.6]",
            )}
          >
            {card.attribution}
          </p>
          <p
            className={cn(
              "mb-0 font-serif font-normal text-body text-pretty",
              compact
                ? "mt-2 line-clamp-3 text-[clamp(13.5px,1.05cqi,15px)]/[1.6]"
                : "mt-3 text-[clamp(14.5px,1.15cqi,16.5px)]/[1.65]",
            )}
          >
            {card.summary}
          </p>
          {/* mt-auto pins it to the bottom so cards side by side line up. */}
          <span
            className={cn(
              "mt-auto self-start",
              compact ? "pt-[clamp(14px,1.3cqi,20px)]" : "pt-[clamp(16px,1.6cqi,24px)]",
            )}
          >
            <span
              className={cn(
                "border-b border-gold pb-[3px] font-serif font-normal text-ink group-hover:text-bark",
                compact ? "text-[14px]" : "text-[15px]",
              )}
            >
              Read the full story →
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}
