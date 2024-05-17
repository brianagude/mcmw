import {defineField} from 'sanity'

export default defineField({
  name: 'hero.home',
  title: 'Home hero',
  type: 'object',
  fields: [
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
      rows: 1,
    }),
    // Title
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 1,
    }),
    // Background Image
    defineField({
      title: 'Background Image',
      name: 'backgroundImage',
      type: 'image',
      fields: [
        {
          title: "Alternative Text",
          name: "alt",
          type: "string",
          validation: Rule => Rule.required(),
        },
      ],
    }),
  ],
})
