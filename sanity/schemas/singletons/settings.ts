import {CogIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

const TITLE = 'Settings'
interface ProductOptions {
  title: string
}

export default defineType({
  name: 'settings',
  title: TITLE,
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      default: true,
      name: 'linkbar',
      title: 'Linkbar',
    },
    {
      name: 'header',
      title: 'Header',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
    {
      name: 'navigation',
      title: 'Navigation',
    },
    {
      name: 'productOptions',
      title: 'Product options',
    },
    {
      name: 'notFoundPage',
      title: '404 page',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // Linkbar
    defineField({
      name: "linkbarText",
      title: "Linkbar Text",
      type: "string",
      group: 'linkbar',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "linkbarUrl",
      title: "Linkbar URL",
      type: "url",
      group: 'linkbar',
    }),
    defineField({
      name: "showLinkbar",
      title: "Show Linkbar?",
      type: "boolean",
      group: 'linkbar',
    }),
    // Header
    defineField({
      name: "headerLogo",
      title: "Header Logo",
      type: "image",
      group: 'header',
    }),
    // Menu
    defineField({
      name: "menuIcon",
      title: "Menu Icon",
      type: "image",
      group: 'header',
    }),
    defineField({
      name: 'menu',
      title: 'Menu',
      type: 'menuSettings',
      group: 'header',
    }),
    // Footer
    defineField({
      name: "footerLogo",
      title: "Footer Logo",
      type: "image",
      group: 'footer',
      fields: [
        {
          name: "caption",
          title: "Caption",
          type: "string"
        }
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "formCaption",
      title: "Footer Form Caption",
      type: "text",
      group: 'footer',
    }),
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
      group: 'footer',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "footerFinePrint",
      title: "Fine Print",
      type: "text",
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
      name: "footerButtonText",
      title: "Text",
      type: "text",
      description: "text that appears next to button",
      group: 'footer',
    }),
    defineField({
      name: "footerButton",
      title: "Footer Button URL",
      type: "url",
      group: 'footer',
    }),
    // Custom product options
    defineField({
      name: 'customProductOptions',
      title: 'Custom product options',
      type: 'array',
      group: 'productOptions',
      of: [
        {
          name: 'customProductOption.color',
          type: 'customProductOption.color',
        },
        {
          name: 'customProductOption.size',
          type: 'customProductOption.size',
        },
      ],
      validation: (Rule) =>
        Rule.custom((options: ProductOptions[] | undefined) => {
          // Each product option type must have a unique title
          if (options) {
            const uniqueTitles = new Set(options.map((option) => option.title))
            if (options.length > uniqueTitles.size) {
              return 'Each product option type must have a unique title'
            }
          }
          return true
        }),
    }),
    // Not found page
    defineField({
      name: 'notFoundPage',
      title: '404 page',
      type: 'notFoundPage',
      group: 'notFoundPage',
    }),
    // SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
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
