import {CogIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

const TITLE = 'Settings'

export default defineType({
  name: 'settings',
  title: TITLE,
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      name: 'header',
      title: 'Header',
      default: true,
    },
    {
      name: 'footer',
      title: 'Footer',
    },
  ],
  fields: [
    // Header
    defineField({
      name: "headerLogo",
      title: "Header Logo",
      type: "image",
      group: 'header',
    }),
    // Footer
    defineField({
      name: "footerLogo",
      title: "Footer Logo",
      type: "image",
      group: 'footer',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "finePrint",
      title: "Fine Print",
      type: "string",
      group: 'footer',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'footerSettings',
      group: 'footer',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
})
