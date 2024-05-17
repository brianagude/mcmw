import {DocumentIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'eventItem',
  title: 'Events',
  type: 'object',
  icon: DocumentIcon,
  fields: [
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // Date
    defineField({
      title: 'Date',
      name: 'date',
      type: 'date',
      options: { dateFormat: 'dddd, MMMM Do' },
      validation: (Rule) => Rule.required(),
    }),
    // Time
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // Location
    defineField({
      name: 'location',
      title: 'Location',
      description: 'Defaults to TBA',
      type: 'string',
    }),
    // Body
    defineField({
      name: 'body',
      title: 'Description',
      type: 'body',
    }),
    // Button Text
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      description: 'Defaults to RSVP',
      type: 'string',
    }),
    defineField({
      name: "eventLink",
      title: "Event URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      date: 'date',
      title: 'title',
    },
    prepare(selection) {
      const { date, title } = selection;
      return {
        subtitle: date,
        title,
      };
    },
  },
})
