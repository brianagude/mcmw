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
      rows: 3,
    }),
    // Background Image
    defineField({
      title: 'Background Image',
      name: 'backgroundImage',
      type: 'image',
      fields: [
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
      ]
    }),
  ],
})
