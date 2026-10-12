import { defineArrayMember, defineField, defineType } from "sanity";

/** One block of downloadable reports on /compliance, e.g. Annual Reports. */
export const complianceSection = defineType({
  name: "complianceSection",
  title: "Compliance section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "Also used as its link in the strip under the main menu.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "anchor",
      type: "slug",
      description: "Link target: /compliance#<anchor>. Generate from the title.",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "number",
      type: "string",
      description: "Optional small label above the title, e.g. “6.1”.",
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "documents",
      type: "array",
      description: "Newest first. A download button appears once a file is attached.",
      of: [
        defineArrayMember({
          name: "complianceDocument",
          title: "Document",
          type: "object",
          fields: [
            defineField({
              name: "period",
              type: "string",
              description: "E.g. “FY 2024–25”.",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "title",
              type: "string",
              description: "E.g. “Annual Report 2024–25”.",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "file",
              type: "file",
              description: "Type and size are shown on the download button automatically.",
              options: { accept: ".pdf,.doc,.docx,.xls,.xlsx" },
            }),
            defineField({
              name: "publishedAt",
              title: "Published on",
              type: "date",
              options: { dateFormat: "D MMM YYYY" },
            }),
          ],
          preview: {
            select: { title: "title", period: "period", file: "file.asset.originalFilename" },
            prepare: ({ title, period, file }) => ({
              title,
              subtitle: `${period ?? ""} · ${file ?? "no file yet"}`,
            }),
          },
        }),
      ],
    }),
    defineField({
      name: "order",
      type: "number",
      description: "Position on the page; lower comes first.",
    }),
  ],
  orderings: [{ title: "Page order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", number: "number", documents: "documents" },
    prepare: ({ title, number, documents }) => ({
      title: number ? `${number}  ${title}` : title,
      subtitle: `${documents?.length ?? 0} documents`,
    }),
  },
});
