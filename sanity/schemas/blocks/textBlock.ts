import {defineField} from 'sanity'

export default defineField({
  name: 'textBlock',
  title: 'TextBlock',
  type: 'object',
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subitle",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "blockContent",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "link",
    })
  ]
})
