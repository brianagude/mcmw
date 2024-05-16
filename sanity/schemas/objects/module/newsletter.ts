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
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
      ]
    }),
    defineField({
      name: "showPopup",
      title: "Show Popup?",
      type: "boolean",
    }),
    // Background Image
    defineField({
      title: 'Popup Image',
      name: 'popupImage',
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
