// src/deskStructure.js

export const structure = (S) =>
  S.list()
    .title('Website Content')
    .items([
      S.divider(),
      S.listItem()
        .title('Home')
        .schemaType('home')
        .child(
          S.document()
            .schemaType('home')
            .documentId('home')
        ),
      S.listItem()
        .title('Settings')
        .schemaType('settings')
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
        ),
    ])