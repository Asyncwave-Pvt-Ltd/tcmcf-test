import type { Metadata } from "next";

import Image from "next/image";
import { notFound } from "next/navigation";

import { Eyebrow, IMAGE_SKELETON } from "@/components/site/primitives";
import { StoryCards } from "@/components/stories/story-cards";
import {
  getStory,
  getStories,
  getStorySlugs,
  type Span,
  type StoryBlock,
} from "@/lib/sanity";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getStorySlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const story = await getStory((await params).slug);
  return story ? { title: story.title, description: story.summary } : {};
}

/** Bold, italic and links are the only inline marks the Studio allows. */
function renderSpans(
  children: Span[],
  markDefs: Extract<StoryBlock, { _type: "block" }>["markDefs"] = [],
) {
  return children.map((span) => (
    <span key={span._key}>
      {(span.marks ?? []).reduce<React.ReactNode>((node, mark) => {
        if (mark === "strong") return <strong>{node}</strong>;
        if (mark === "em") return <em>{node}</em>;
        const href = markDefs.find((d) => d._key === mark)?.href;
        return href ? (
          <a href={href} className="border-b border-gold text-ink hover:text-bark">
            {node}
          </a>
        ) : (
          node
        );
      }, span.text)}
    </span>
  ));
}

function StoryBlockView({ block, dropCap }: { block: StoryBlock; dropCap: boolean }) {
  switch (block._type) {
    case "block":
      return (
        <p
          className={`text-pretty ${dropCap ? "first-letter:float-left first-letter:mt-1.5 first-letter:mr-2.5 first-letter:font-heading first-letter:text-[3.6em]/[0.8] first-letter:text-ink" : ""}`}
        >
          {renderSpans(block.children, block.markDefs)}
        </p>
      );

    case "pullQuote":
      return (
        <figure className="mx-0 my-[clamp(12px,2cqi,28px)] border-l-2 border-gold bg-sage p-[clamp(22px,2.2cqi,32px)]">
          <blockquote className="m-0 text-[clamp(19px,1.8cqi,24px)]/[1.45] text-ink text-pretty">
            &ldquo;{block.quote}&rdquo;
          </blockquote>
          {block.attribution ? (
            <figcaption className="mt-[clamp(14px,1.3cqi,20px)] font-mono text-[clamp(10.5px,0.83cqi,12px)] text-bark">
              — {block.attribution}
            </figcaption>
          ) : null}
        </figure>
      );

    case "metrics":
      return (
        <aside className="my-[clamp(12px,2cqi,28px)] border-y border-ink/14 py-[clamp(20px,2.4cqi,32px)]">
          <Eyebrow className="text-center">{block.heading || "By the numbers"}</Eyebrow>
          <dl className="mt-[clamp(14px,1.6cqi,22px)] grid grid-cols-2 gap-x-6 gap-y-[clamp(18px,2cqi,28px)]">
            {block.items.map((stat) => (
              <div key={stat._key} className="flex flex-col-reverse gap-2 text-center">
                <dt className="font-mono text-[clamp(9.5px,0.76cqi,11px)]/[1.5] tracking-widest text-bark uppercase">
                  {stat.label}
                </dt>
                <dd className="m-0 text-[clamp(24px,2.4cqi,34px)]/none text-ink">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      );

    default:
      // A block type added in the Studio before this renderer knows about it.
      return null;
  }
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = await getStory(slug);
  if (!story) notFound();

  // Editors pick the recommendations; with none picked, the three latest others fill in.
  const more = story.recommended?.length
    ? story.recommended
    : (await getStories(slug)).slice(0, 3);

  const firstPara = story.content.findIndex((b) => b._type === "block");

  return (
    <>
      <section className="gutter mx-auto box-content max-w-190 pt-[clamp(32px,5cqi,76px)] text-center">
        <Eyebrow>Success Stories</Eyebrow>
        <h1 className="mt-[clamp(14px,1.5cqi,22px)] mb-0 font-heading text-[clamp(28px,3.2cqi,46px)]/[1.16] font-normal text-ink text-pretty">
          {story.title}
        </h1>
        {story.dateline ? (
          <p className="mt-[clamp(12px,1.2cqi,18px)] mb-0 font-mono text-[clamp(11px,0.9cqi,13px)]/[1.8] font-normal text-bark">
            {story.dateline}
          </p>
        ) : null}
      </section>

      {story.image ? (
        <section className="gutter mx-auto box-content max-w-200 pt-[clamp(24px,3cqi,44px)] pb-[clamp(28px,3.6cqi,56px)]">
          <Image
            placeholder={IMAGE_SKELETON}
            src={story.image}
            alt={story.alt ?? ""}
            width={1000}
            height={400}
            className="w-full max-h-130 object-cover"
          />
        </section>
      ) : null}

      {/* Without a photo, the article supplies the gap the photo band would. */}
      <article
        className={`gutter mx-auto box-content flex max-w-200 flex-col gap-[1.2em] pb-[clamp(40px,6cqi,96px)] font-serif text-[clamp(17px,1.3cqi,19px)]/[1.75] font-normal text-body ${story.image ? "" : "pt-[clamp(28px,3.6cqi,56px)]"}`}
      >
        {story.content.map((block, i) => (
          <StoryBlockView key={block._key} block={block} dropCap={i === firstPara} />
        ))}

        {story.closing ? (
          <p className="mt-[clamp(12px,2cqi,28px)] border-t border-ink/14 pt-[clamp(20px,2.4cqi,32px)] text-[clamp(19px,1.6cqi,23px)]/[1.5] text-ink text-pretty">
            {story.closing}
          </p>
        ) : null}
      </article>

      {more.length ? (
        <section className="gutter border-t border-ink/12 bg-sage py-[clamp(30px,4.4cqi,64px)]">
          <h2 className="m-0 mb-[clamp(18px,2.2cqi,32px)] font-heading text-[clamp(21px,2.1cqi,30px)]/[1.2] font-normal text-ink">
            More stories
          </h2>
          <StoryCards stories={more} compact />
        </section>
      ) : null}
    </>
  );
}
