import {BulbOutlineIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'module.pressLogos',
  title: 'Press Logos',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
      rows: 1,
    }),
    // Items
    defineField({
      name: 'items',
      title: 'Items',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'image',
          description: 'Please make sure that the logo is a 400x160px png',
          fields: [
            {
              title: "Alternative Text",
              description: 'Briefly describe the image',
              name: "alt",
              type: "string",
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    },),
    
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        subtitle: 'Press Logos',
        title: title,
        media: BulbOutlineIcon,
      }
    },
  },
})
