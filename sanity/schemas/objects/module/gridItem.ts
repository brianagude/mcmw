import {defineField} from 'sanity'

export default defineField({
  name: 'gridItem',
  title: 'Item',
  type: 'object',
  fields: [
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    // Title
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    // Image
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        }
      ]
    }),
  ],
  preview: {
    select: {
      subtitle: 'subtitle',
      image: 'image',
      title: 'title',
    },
    prepare(selection) {
      const {subtitle, image, title} = selection
      return {
        media: image,
        subtitle: subtitle,
        title,
      }
    },
  },
})
