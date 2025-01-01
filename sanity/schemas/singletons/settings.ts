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
    {
      name: 'meta',
      title: 'SEO',
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
    defineField({
      name: "metaTitle",
      title: "SEO Title",
      type: "string",
      group: 'meta',
      description: "Defaults to MCMW"
    }),
    defineField({
      name: "metaDescription",
      title: "SEO Description",
      type: "string",
      group: 'meta',
      description: "Defaults to MILK & COOKIES MUSIC WEEK 2024"
    }),
    defineField({
      name: "metaImage",
      title: "SEO Image",
      type: "image",
      group: 'meta',
      options: {
        hotspot: true,
      },
      description: "Image should be a 2:1 ratio. 2400px x 1200px for best quality.",
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
