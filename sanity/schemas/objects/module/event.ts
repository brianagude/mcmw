import {CalendarIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'module.event',
  title: 'Events',
  type: 'object',
  icon: CalendarIcon,
  fields: [
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // Items
    defineField({
      name: 'eventItems',
      title: 'Events',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'eventItem',
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
        title,
        subtitle: 'Events',
        media: CalendarIcon
      }
    },
  },
})
