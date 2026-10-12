import { defineArrayMember, defineField, defineType } from "sanity";

export const story = defineType({
  name: "story",
  title: "Story",
  type: "document",
  groups: [
    { name: "page", title: "Story page", default: true },
    { name: "card", title: "Homepage & cards" },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      group: "page",
      description: "Story page headline, e.g. “A Story of Change”.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      group: "page",
      description: "URL: /stories/<slug>. Generate from the farmer’s name, e.g. rajkumar-kishan-gore.",
      options: { source: "attribution", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "dateline",
      type: "string",
      group: "page",
      description:
        "Mono line under the headline: Place · Name, Role · Farm size. E.g. “Village Gunj, Yavatmal, Maharashtra · Rajkumar Kishan Gore, Organic Cotton Farmer · 3.64 Hectares”.",
    }),
    defineField({
      name: "image",
      type: "image",
      group: ["page", "card"],
      description: "Wide photo under the headline; also used on the homepage and story cards.",
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (r) => r.required(),
        }),
      ],
    }),
    defineField({
      name: "content",
      title: "Story",
      type: "array",
      group: "page",
      description:
        "The long read. The first paragraph gets a drop cap. Insert a Pull quote or By the numbers block right after the paragraph it echoes.",
      of: [
        defineArrayMember({
          type: "block",
          // The reading column only styles plain paragraphs; keep editors to what renders.
          styles: [{ title: "Paragraph", value: "normal" }],
          lists: [],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
            annotations: [
              defineArrayMember({
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  defineField({
                    name: "href",
                    type: "url",
                    validation: (r) =>
                      r.required().uri({ scheme: ["http", "https", "mailto"], allowRelative: true }),
                  }),
                ],
              }),
            ],
          },
        }),
        defineArrayMember({
          name: "pullQuote",
          title: "Quote Block",
          type: "object",
          fields: [
            defineField({
              name: "quote",
              type: "text",
              rows: 4,
              description: "No quote marks; they are added automatically.",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "attribution",
              type: "string",
              description: "Speaker’s name. The leading dash is added automatically.",
            }),
          ],
          preview: {
            select: { title: "quote", subtitle: "attribution" },
            prepare: ({ title, subtitle }) => ({
              title: `“${title ?? ""}”`,
              subtitle: subtitle ? `Pull quote — ${subtitle}` : "Pull quote",
            }),
          },
        }),
        defineArrayMember({
          name: "metrics",
          title: "Stats Block",
          type: "object",
          fields: [
            defineField({
              name: "heading",
              type: "string",
              initialValue: "By the numbers",
            }),
            defineField({
              name: "items",
              type: "array",
              description: "Shown two per row; an even count looks best.",
              of: [
                defineArrayMember({
                  name: "metric",
                  type: "object",
                  fields: [
                    defineField({
                      name: "value",
                      type: "string",
                      description: "The figure, e.g. “96%” or “₹200–300”.",
                      validation: (r) => r.required(),
                    }),
                    defineField({
                      name: "label",
                      type: "string",
                      description: "What it measures, e.g. “Reduction in input cost per acre”.",
                      validation: (r) => r.required(),
                    }),
                  ],
                  preview: { select: { title: "value", subtitle: "label" } },
                }),
              ],
              validation: (r) => r.required().min(1),
            }),
          ],
          preview: {
            select: { title: "heading", items: "items" },
            prepare: ({ title, items }) => ({
              title: title || "By the numbers",
              subtitle: `${items?.length ?? 0} figures`,
            }),
          },
        }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "closing",
      type: "text",
      rows: 3,
      group: "page",
      description: "Closing line set apart below a rule, larger and darker than the story text.",
    }),
    defineField({
      name: "recommended",
      title: "Recommended stories",
      type: "array",
      group: "page",
      description:
        "Up to three stories shown as cards under “More stories” at the foot of the page, in order. Leave empty to show the three most recent other stories.",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "story" }],
          options: {
            disableNew: true,
            // A story can't recommend itself, draft or published.
            filter: ({ document }) => {
              const id = document._id.replace(/^drafts\./, "");
              return { filter: "!(_id in [$id, $draftId])", params: { id, draftId: `drafts.${id}` } };
            },
          },
        }),
      ],
      validation: (r) => r.unique().max(3),
    }),
    defineField({
      name: "quote",
      type: "text",
      rows: 3,
      group: "card",
      description: "Pull quote shown large on the homepage. No quote marks.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "attribution",
      type: "string",
      group: "card",
      description: "Name · Role · Village, District",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "body",
      title: "Summary",
      type: "text",
      rows: 5,
      group: "card",
      description:
        "Roughly 60–70 words, ending in a measurable outcome. Used on the homepage, on story cards and as the page’s search description.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "featured",
      type: "boolean",
      group: "card",
      description: "Show in the homepage Featured Story carousel.",
      initialValue: true,
    }),
    defineField({
      name: "order",
      type: "number",
      group: "card",
      description: "Carousel and card position; lower comes first.",
    }),
  ],
  orderings: [
    { title: "Carousel order", name: "order", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "attribution", subtitle: "title", media: "image" } },
});
