import {BulbOutlineIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'module.newsletterPopup',
  title: 'Mailchimp Popup',
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
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          validation: (Rule) => Rule.required(),
        }
      ]
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        subtitle: 'Newsletter Popup',
        title,
        media: BulbOutlineIcon,
      }
    },
  },
})
