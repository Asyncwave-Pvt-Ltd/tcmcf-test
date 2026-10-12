import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "role",
      type: "string",
      description: "E.g. “Director, Project Management”.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "section",
      type: "string",
      description: "On desktop, founders get large cards above the leadership team.",
      options: {
        list: [
          { title: "Founders", value: "founder" },
          { title: "Leadership Team", value: "leader" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "leader",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "bio",
      type: "text",
      rows: 4,
      description: "Shown in full in the profile popup and on founder cards. Roughly 25–35 words.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "shortBio",
      title: "Short bio",
      type: "text",
      rows: 2,
      description: "One line for the phone and tablet cards. Leave empty to use the bio.",
    }),
    defineField({
      name: "image",
      title: "Portrait",
      type: "image",
      description: "Portrait orientation (4:5) works best.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Leave empty to use the person’s name.",
        }),
      ],
    }),
    defineField({
      name: "order",
      type: "number",
      description: "Position within the section; lower comes first.",
    }),
  ],
  orderings: [
    {
      title: "Section, then order",
      name: "sectionOrder",
      by: [
        { field: "section", direction: "asc" },
        { field: "order", direction: "asc" },
      ],
    },
  ],
  preview: { select: { title: "name", subtitle: "role", media: "image" } },
});
