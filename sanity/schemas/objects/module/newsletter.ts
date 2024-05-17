import {BulbOutlineIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'module.newsletter',
  title: 'Mailchimp',
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
    // Title
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
    }),
    // Button Text
    defineField({
      name: 'submitText',
      title: 'Button Text',
      description: 'Defaults to JOIN NOW',
      type: 'string',
    }),
    // Background Image
    defineField({
      title: 'Background Image',
      name: 'backgroundImage',
      type: 'image',
      fields: [
        {
          title: "Alternative Text",
          description: 'Briefly describe the image',
          name: "alt",
          type: "string",
          validation: Rule => Rule.required(),
        },
      ],
    })
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        subtitle: 'Newsletter',
        title,
        media: BulbOutlineIcon,
      }
    },
  },
})
