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
