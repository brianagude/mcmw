import {HomeIcon} from '@sanity/icons'
import {defineField} from 'sanity'

const TITLE = 'Home'

export default defineField({
  name: 'home',
  title: TITLE,
  type: 'document',
  icon: HomeIcon,
  fields: [
    // Marquee
    defineField({
      name: "marqueeText",
      title: "Marquee Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "scrollMarquee",
      title: "Should Marquee Scroll?",
      type: "boolean",
    }),
    // Hero
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero.home',
    }),
    // Modules
    defineField({
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [
        {type: 'module.carousel'},
        {type: 'module.event'},
        {type: 'module.newsletter'},
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        // media: icon,
        subtitle: 'Index',
        title: TITLE,
      }
    },
  },
})
