import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "cardDescription",
      title: "Card Description",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "background",
      title: "Background",
      type: "string",
    }),
    defineField({
      name: "goals",
      title: "Goals",
      type: "array",
      of: [
        {
          type: "object",
          name: "goal",
          title: "Goal",
          fields: [
            { type: "string", name: "title" },
            { type: "string", name: "description" },
          ],
        },
      ],
    }),
    defineField({
      name: "secondaryImage",
      title: "Secondary Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "solutions",
      title: "Solutions",
      type: "array",
      of: [
        {
          type: "object",
          name: "solution",
          title: "Solution",
          fields: [
            { type: "string", name: "title" },
            { type: "string", name: "description" },
          ],
        },
      ],
    }),

    defineField({
      name: "tools",
      title: "Tools",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "testimonial",
      title: "Testimonial",
      type: "object",
      fields: [
        { type: "string", name: "name" },
        { type: "string", name: "comment" },
        { type: "string", name: "position" },
      ],
    }),
    defineField({
      name: "testimonialImage",
      title: "Testimonial Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "conclusion",
      title: "Conclusion",
      type: "string",
    }),
  ],
});
