import React from 'react'
import {defineField} from 'sanity'

export default defineField({
  name: 'seo.page',
  title: 'SEO',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
      description: (
        <>
          If empty, displays the document title (<code>title</code>)
        </>
      ),
      validation: (Rule) =>
        Rule.max(50).warning('Longer titles may be truncated by search engines'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'seo.description',
    }),
    defineField({
      name: 'image',
      title: 'Image',
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
    }),
  ],
})
