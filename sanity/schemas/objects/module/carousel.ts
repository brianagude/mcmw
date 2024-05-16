import {BulbOutlineIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'module.carousel',
  title: 'Carousel',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
      rows: 1,
      validation: (Rule) => [
        Rule.max(70).warning(`Callout length shouldn't be more than 70 characters.`),
      ],
    }),
    // Items
    defineField({
      name: 'items',
      title: 'Items',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'gridItem',
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
        subtitle: 'Carousel',
        title: title,
        media: BulbOutlineIcon,
      }
    },
  },
})
