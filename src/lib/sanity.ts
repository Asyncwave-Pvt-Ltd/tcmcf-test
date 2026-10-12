import { STORIES } from "@/lib/content";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET ?? "production";

// Sanity resizes on its CDN, so next/image never has to pull a full-size upload
// (a 38 MB original outlasts its fetch timeout and the image never shows).
const IMAGE_URL = `image.asset->url + "?w=2000&fit=max&fm=webp"`;

// Plain GROQ over Sanity's HTTP API; no client library needed for public reads.
async function sanityQuery<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T | null> {
  if (!projectId) return null;
  let url = `https://${projectId}.apicdn.sanity.io/v2026-02-01/data/query/${dataset}?query=${encodeURIComponent(query)}`;
  // GROQ params travel as `$name=<JSON value>`.
  for (const [k, v] of Object.entries(params)) {
    url += `&${encodeURIComponent(`$${k}`)}=${encodeURIComponent(JSON.stringify(v))}`;
  }
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`Sanity query failed: ${res.status}`);
  return (await res.json()).result;
}

export type Story = {
  q: string;
  who: string;
  body: string;
  image?: string | null;
  alt?: string | null;
  slug?: string | null;
};

export async function getFeaturedStories(): Promise<Story[]> {
  const stories = await sanityQuery<Story[]>(
    `*[_type == "story" && featured == true] | order(order asc, _createdAt asc) {
      "q": quote, "who": attribution, body, "image": ${IMAGE_URL}, "alt": image.alt,
      "slug": slug.current
    }`,
  );
  // Static copy keeps the homepage filled until the CMS is configured and populated.
  return stories?.length ? stories : [...STORIES];
}

/* ------------------------------------------------------- Full story page */

export type Span = { _key: string; text: string; marks?: string[] };
export type StoryBlock =
  | {
      _type: "block";
      _key: string;
      children: Span[];
      markDefs?: { _key: string; _type: string; href?: string }[];
    }
  | { _type: "pullQuote"; _key: string; quote: string; attribution?: string | null }
  | {
      _type: "metrics";
      _key: string;
      heading?: string | null;
      items: { _key: string; value: string; label: string }[];
    };

export type StoryPage = {
  title: string;
  dateline?: string | null;
  summary: string;
  image?: string | null;
  alt?: string | null;
  content: StoryBlock[];
  closing?: string | null;
  recommended?: StoryCard[] | null;
};

export type StoryCard = {
  title: string;
  slug: string;
  summary: string;
  attribution: string;
  image?: string | null;
  alt?: string | null;
};

const CARD = `title, "slug": slug.current, "summary": body, attribution,"image": ${IMAGE_URL}, "alt": image.alt`;

export function getStory(slug: string) {
  return sanityQuery<StoryPage>(
    `*[_type == "story" && slug.current == $slug][0] {
      title, dateline, "summary": body, "image": ${IMAGE_URL}, "alt": image.alt,
      content, closing,
      "recommended": recommended[]->{ ${CARD} }[defined(slug)]
    }`,
    { slug },
  );
}

export async function getStorySlugs(): Promise<string[]> {
  return (
    (await sanityQuery<string[]>(`*[_type == "story" && defined(slug.current)].slug.current`)) ?? []
  );
}

/** All published stories, optionally leaving one out (the page being read). */
export async function getStories(exclude?: string): Promise<StoryCard[]> {
  return (
    (await sanityQuery<StoryCard[]>(
      `*[_type == "story" && defined(slug.current) && slug.current != $slug]
        | order(order asc, _createdAt desc) { ${CARD} }`,
      { slug: exclude ?? null },
    )) ?? []
  );
}

/* ------------------------------------------------------------------- Team */

export type TeamMember = {
  n: string;
  r: string;
  d: string;
  short: string;
  section: "founder" | "leader";
  image?: string | null;
  alt: string;
  /** The editor's hotspot, as a CSS object-position. */
  focus?: string | null;
};

/** Founders first ("founder" sorts before "leader"), then leaders, each in CMS order. */
export async function getTeam(): Promise<TeamMember[]> {
  const team = await sanityQuery<(TeamMember & { hotspot?: { x: number; y: number } | null })[]>(
    `*[_type == "teamMember"] | order(section asc, order asc, name asc) {
      "n": name, "r": role, "d": bio, "short": coalesce(shortBio, bio), section,
      "image": ${IMAGE_URL}, "alt": coalesce(image.alt, name), "hotspot": image.hotspot { x, y }
    }`,
  );
  return (team ?? []).map(({ hotspot, ...m }) => ({
    ...m,
    focus: hotspot ? `${hotspot.x * 100}% ${hotspot.y * 100}%` : null,
  }));
}

/* ------------------------------------------------------------- Compliance */

export type ComplianceDocument = {
  _key: string;
  period: string;
  title: string;
  publishedAt?: string | null;
  file?: { url: string; extension: string; size: number } | null;
};

export type ComplianceSection = {
  _id: string;
  anchor: string;
  number?: string | null;
  title: string;
  description?: string | null;
  documents?: ComplianceDocument[] | null;
};

export async function getComplianceSections(): Promise<ComplianceSection[]> {
  return (
    (await sanityQuery<ComplianceSection[]>(
      `*[_type == "complianceSection" && defined(anchor.current)] | order(order asc, title asc) {
        _id, "anchor": anchor.current, number, title, description,
        documents[] {
          _key, period, title, publishedAt,
          "file": file.asset->{ url, extension, size }
        }
      }`,
    )) ?? []
  );
}

/** Sub-nav strip entries for /compliance, one per CMS section. */
export async function getComplianceNav(): Promise<{ label: string; href: string }[]> {
  return (
    (await sanityQuery<{ label: string; href: string }[]>(
      `*[_type == "complianceSection" && defined(anchor.current)] | order(order asc, title asc) {
        "label": title, "href": "#" + anchor.current
      }`,
    )) ?? []
  );
}
