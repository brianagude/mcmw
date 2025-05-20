'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'
// import { resolve } from '@/sanity/presentation/resolve'
import {media, mediaAssetSource} from 'sanity-plugin-media'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// import {apiVersion, dataset, projectId} from './src/sanity/env'
import { dataset, projectId, apiVersion } from "./sanity/env"
import {schemaTypes} from './sanity/schemas'
import {structure} from './sanity/structure'

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  document: {
    newDocumentOptions: (prev) => prev.filter((item) => item.templateId !== "siteSettings"),
  },
  plugins: [
    structureTool({structure}),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    media({
      creditLine: {
        enabled: true,
        excludeSources: ['unsplash'],
      },
      maximumUploadSize: 10000000
    }),
    unsplashImageAsset(),
    visionTool({defaultApiVersion: apiVersion}),
  ],
  form: {
    file: {
      assetSources: previousAssetSources => {
        return previousAssetSources.filter(assetSource => assetSource !== mediaAssetSource)
      }
    }
  }
})


// import { defineConfig, isDev } from 'sanity'
// import { structureTool } from 'sanity/structure'
// import {structure} from './sanity/structure'
// import { visionTool } from "@sanity/vision"
// import { dataset, projectId } from "./sanity/env"
// import {schemaTypes} from './sanity/schemas'
// import {colorInput} from '@sanity/color-input'
// import {imageHotspotArrayPlugin} from 'sanity-plugin-hotspot-array'
// import {media, mediaAssetSource} from 'sanity-plugin-media'
// import {customDocumentActions} from './sanity/plugins/customDocumentActions'

// const devOnlyPlugins = [visionTool()]

// export default defineConfig({
//   basePath: "/admin",
//   projectId,
//   dataset,
//   plugins: [
//     structureTool({structure}),
//     colorInput(),
//     imageHotspotArrayPlugin(),
//     customDocumentActions(),
//     media(),
//     ...(isDev ? devOnlyPlugins : []),
//   ],

  // schema: {
  //   types: schemaTypes,
  // },

//   form: {
//     file: {
//       assetSources: (previousAssetSources) => {
//         return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
//       },
//     },
//     image: {
//       assetSources: (previousAssetSources) => {
//         return previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource)
//       },
//     },
//   },
// })
